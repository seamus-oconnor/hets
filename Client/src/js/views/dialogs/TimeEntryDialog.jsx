import React from 'react';

import { connect } from 'react-redux';

import { Grid, Row, Col, Form, FormGroup, ControlLabel, HelpBlock, Button, Glyphicon } from 'react-bootstrap';
import _ from 'lodash';

import * as Api from '../../api';

import FormInputControl from '../../components/FormInputControl.jsx';
import DateControl from '../../components/DateControl.jsx';
import EditDialog from '../../components/EditDialog.jsx';
import DeleteButton from '../../components/DeleteButton.jsx';

import { isBlank, formatHours } from '../../utils/string';
import { formatDateTime } from '../../utils/date';

var TimeEntryDialog = React.createClass({
  propTypes: {
    onClose: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    projects: React.PropTypes.object,
    equipmentList: React.PropTypes.object,
    activeRentalRequest: React.PropTypes.object,
    rentalAgreementTimeRecords: React.PropTypes.object,
  },

  getInitialState() {  
    return {
      showAllTimeRecords: false,
      numberOfInputs: 1,
      timeEntry: {
        1: {
          hours: '',
          date: '',
          errorHours: '',
          errorDate: '',
        },
      },
    };
  },

  componentDidMount() {
    Api.getRentalAgreementTimeRecords(this.props.activeRentalRequest.id);
  },

  updateState(state, callback) {
    this.setState(state, callback);
  },

  updateTimeEntryState(value) {
    let property = Object.keys(value)[0];
    let stateValue = _.values(value)[0];
    let number = property.match(/\d+/g)[0];
    let stateName = property.match(/[a-zA-Z]+/g)[0];
    let state = { [stateName]:  stateValue };
    let updatedState = { ...this.state.timeEntry, [number]: { ...this.state.timeEntry[number], ...state } };
    this.setState({ timeEntry: updatedState });
  },

  didChange() {
    // todo
    return true;
  },

  isValid() {
    // todo
    let timeEntry = { ...this.state.timeEntry };

    let timeEntryResetObj = timeEntry;
    Object.keys(timeEntry).forEach((key) => {
      let state = { ...timeEntry[key], errorHours: '', errorDate: '' };
      timeEntryResetObj[key] = state;
    });
    
    this.setState({ timeEntry: timeEntryResetObj });
    let valid = true;

    let timeEntryErrorsObj = timeEntry;
    Object.keys(timeEntry).forEach((key) => {
      if (isBlank(timeEntry[key].hours)) {
        let state = { ...timeEntry[key], errorHours: 'Hours are required' };
        timeEntryErrorsObj[key] = state;
        valid = false;
      }
      if (isBlank(timeEntry[key].date)) {
        let state = { ...timeEntry[key], errorDate: 'Date is required' };
        timeEntryErrorsObj[key] = state;
        valid = false;
      }
    });
    this.setState({ timeEntry: timeEntryErrorsObj });

    return valid;
  },

  onSave() {
    var timeEntry = { ...this.state.timeEntry };
    Object.keys(timeEntry).forEach((key) => {
      timeEntry[key].hours = (timeEntry[key].hours || 0).toFixed(2);
    });

    Api.addRentalAgreementTimeRecords(this.props.activeRentalRequest.id, timeEntry).then(() => {
      this.props.onClose();
    });
  },

  onEquipmentSelected(equipment) {
    this.setState({ equipment: equipment });
  }, 

  addTimeEntryInput() {
    if (this.state.numberOfInputs < 10) {
      let numberOfInputs = Object.keys(this.state.timeEntry).length;
      this.setState({ 
        numberOfInputs: this.state.numberOfInputs + 1,
        timeEntry: { 
          ...this.state.timeEntry, 
          [numberOfInputs + 1]: { 
            hours: '', 
            date: '', 
            errorHours: '', 
            errorDate: '',
          }, 
        },
      });
    }
  },

  removeTimeEntryInput() {
    if (this.state.numberOfInputs > 1) {
      let numberOfInputs = Object.keys(this.state.timeEntry).length;
      let timeEntry = { ...this.state.timeEntry };
      delete timeEntry[numberOfInputs];
      this.setState({ 
        numberOfInputs: this.state.numberOfInputs - 1,
        timeEntry: timeEntry, 
      });
    }
  },

  deleteTimeRecord(timeRecord) {
    Api.deleteTimeRecord(timeRecord.id).then(() => {
      Api.getRentalAgreementTimeRecords(this.props.activeRentalRequest.id);
    });
  },

  showAllTimeRecords() {
    this.setState({ showAllTimeRecords: !this.state.showAllTimeRecords });
  },

  getHoursYtdClassName() {
    var equipment = this.props.rentalAgreementTimeRecords;
    
    if (equipment.hoursYtd > (0.85 * equipment.maximumHours)) {
      return true;
    }

    return false;
  },

  render() {
    const rentalAgreementTimeRecords = this.props.rentalAgreementTimeRecords;
    const isValidDate = function( current ){
      return current.day() === 6 && current.isBefore(new Date());
    };
    var sortedTimeRecords = _.sortBy(rentalAgreementTimeRecords.timeRecords, 'workedDate').reverse();

    const TimeRecordItem = ({ timeRecord }) => {
      return (
        <Row>
          <Col xs={3}>
            <div>{ formatDateTime(timeRecord.workedDate, 'YYYY-MMM-DD') }</div>
          </Col>
          <Col xs={3}>
            <div>{ formatHours(timeRecord.hours) }</div>
          </Col>
          <Col xs={6}>
            <DeleteButton name="Document" onConfirm={ this.deleteTimeRecord.bind(this, timeRecord) }/>
          </Col>
        </Row>
      );
    };

    return (
      <EditDialog 
        id="time-entry" 
        show={ this.props.show }
        onClose={ this.props.onClose } 
        onSave={ this.onSave } 
        didChange={ this.didChange }
        isValid={ this.isValid }
        title={
          <strong>Hets Time Entry</strong>
        }
      >
        <Form>
          <Grid fluid>
            <Row>
              <Col xs={3}>
                <div className="text-label">Equipment ID</div>
                <div>{ rentalAgreementTimeRecords.equipmentCode }</div>
              </Col>
              <Col xs={3}>
                <div className="text-label">YTD Hours</div>
                <div className={ this.getHoursYtdClassName() ? 'highlight' : '' }>
                  { formatHours(rentalAgreementTimeRecords.hoursYtd) }{ this.getHoursYtdClassName() }
                </div>
              </Col>
              <Col xs={3}>              
                <div className="text-label">Project</div>
                <div>{ rentalAgreementTimeRecords.projectName }</div>
              </Col>
              <Col xs={3}>
                <div className="text-label">Project Number</div>
                <div>{ rentalAgreementTimeRecords.provincialProjectNumber }</div>
              </Col>
            </Row>
            <div className="time-entries-container">
              <Row>
                <Col xs={3}><div className="column-title">Week Ending</div></Col>
                <Col xs={3}><div className="column-title">Hours</div></Col>
              </Row>
              { (sortedTimeRecords.length === 0) &&
              <Row> 
                <Col xs={12}><div>No time records have been added yet.</div></Col>
              </Row>
              }

              { (sortedTimeRecords.length > 0) && !this.state.showAllTimeRecords ?
                <Row>
                  <TimeRecordItem timeRecord={sortedTimeRecords[0]} />
                </Row>
                :
                <Row>
                  <Col xs={12}>
                    <ul className="time-records-list">
                      { _.map(sortedTimeRecords, timeRecord => (
                        <li key={timeRecord.id} className="list-item">
                          <TimeRecordItem timeRecord={timeRecord} />
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              }
            </div>
            { (sortedTimeRecords.length > 1) && 
            <Button onClick={ this.showAllTimeRecords }>{ this.state.showAllTimeRecords ? 'Hide' : 'Show All' }</Button>
            }
            <hr />
            { Object.keys(this.state.timeEntry).map(key => {
              return (
                <Row key={key}>
                  <Col sm={4}>
                    <FormGroup validationState={ this.state.timeEntry[key].errorDate ? 'error' : null }>
                      <ControlLabel>Week Ending</ControlLabel>
                      <DateControl
                        id={`date${key}`}
                        name='date'
                        isValidDate={ isValidDate } 
                        date={ this.state.timeEntry[key].date }
                        updateState={ this.updateTimeEntryState }
                      />
                      <HelpBlock>{ this.state.timeEntry[key].errorDate }</HelpBlock>
                    </FormGroup>
                  </Col>  
                  <Col sm={4}>
                    <FormGroup validationState={ this.state.timeEntry[key].errorHours ? 'error' : null }>
                      <ControlLabel>Hours</ControlLabel>
                      <FormInputControl 
                        id={`hours${key}`} 
                        name='hours'
                        type="float"
                        value={ this.state.timeEntry[key].hours }
                        updateState={ this.updateTimeEntryState } 
                      />
                      <HelpBlock>{ this.state.timeEntry[key].errorHours }</HelpBlock>
                    </FormGroup>
                  </Col>
                </Row>
              );
            })}
            <Row>
              <Col xs={12}>
                { this.state.numberOfInputs < 10 && 
              <Button 
                bsSize="xsmall"
                onClick={ this.addTimeEntryInput }
              >
                <Glyphicon glyph="plus" />&nbsp;<strong>Add</strong>
              </Button>
                }
                { this.state.numberOfInputs > 1 &&
              <Button 
                bsSize="xsmall"
                className="remove-btn"
                onClick={ this.removeTimeEntryInput }
              >
                <Glyphicon glyph="minus" />&nbsp;<strong>Remove</strong>
              </Button>
                }
              </Col>
            </Row>  
          </Grid>
        </Form>
      </EditDialog>
    );
  },
});

function mapStateToProps(state) {
  return {
    rentalAgreementTimeRecords: state.models.rentalAgreementTimeRecords,
  };
}

export default connect(mapStateToProps)(TimeEntryDialog);