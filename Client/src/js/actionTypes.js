// API Requests
export const REQUESTS_BEGIN = 'REQUESTS_BEGIN';
export const REQUESTS_END = 'REQUESTS_END';
export const REQUESTS_ERROR = 'REQUESTS_ERROR';

// UI
export const UPDATE_EQUIPMENT_LIST_UI = 'UPDATE_EQUIPMENT_LIST_UI';
export const UPDATE_PHYSICAL_ATTACHMENTS_UI = 'UPDATE_PHYSICAL_ATTACHMENTS_UI';
export const UPDATE_OWNERS_UI = 'UPDATE_OWNERS_UI';
export const UPDATE_OWNER_CONTACTS_UI = 'UPDATE_OWNER_CONTACTS_UI';
export const UPDATE_OWNER_EQUIPMENT_UI = 'UPDATE_OWNER_EQUIPMENT_UI';
export const UPDATE_USERS_UI = 'UPDATE_USERS_UI';
export const UPDATE_PROJECTS_UI = 'UPDATE_PROJECTS_UI';
export const UPDATE_PROJECT_CONTACTS_UI = 'UPDATE_PROJECT_CONTACTS_UI';
export const UPDATE_RENTAL_REQUESTS_UI = 'UPDATE_RENTAL_REQUESTS_UI';
export const UPDATE_TIME_ENTRIES_UI = 'UPDATE_TIME_ENTRIES_UI';
export const UPDATE_HIRING_RESPONSES_UI = 'UPDATE_HIRING_RESPONSES_UI';
export const UPDATE_OWNERS_COVERAGE_UI = 'UPDATE_OWNERS_COVERAGE_UI';
export const UPDATE_USER_ROLES_UI = 'UPDATE_USER_ROLES_UI';
export const UPDATE_PERMISSIONS_LOOKUP = 'UPDATE_PERMISSIONS_LOOKUP';
export const UPDATE_ROLES_UI = 'UPDATE_ROLES_UI';
export const UPDATE_HISTORY_UI = 'UPDATE_HISTORY_UI';
export const UPDATE_DOCUMENTS_UI = 'UPDATE_DOCUMENTS_UI';
export const UPDATE_DISTRICT_EQUIPMENT_UI = 'UPDATE_DISTRICT_EQUIPMENT_UI';

// Search
export const UPDATE_EQUIPMENT_LIST_SEARCH = 'UPDATE_EQUIPMENT_LIST_SEARCH';
export const UPDATE_OWNERS_SEARCH = 'UPDATE_OWNERS_SEARCH';
export const UPDATE_PROJECTS_SEARCH = 'UPDATE_PROJECTS_SEARCH';
export const UPDATE_RENTAL_REQUESTS_SEARCH = 'UPDATE_RENTAL_REQUESTS_SEARCH';
export const UPDATE_TIME_ENTRIES_SEARCH = 'UPDATE_TIME_ENTRIES_SEARCH';
export const UPDATE_HIRING_RESPONSES_SEARCH = 'UPDATE_HIRING_RESPONSES_SEARCH';
export const UPDATE_OWNERS_COVERAGE_SEARCH = 'UPDATE_OWNERS_COVERAGE_SEARCH';
export const UPDATE_USERS_SEARCH = 'UPDATE_USERS_SEARCH';
export const UPDATE_ROLES_SEARCH = 'UPDATE_ROLES_SEARCH';

// Lookups
export const UPDATE_CITIES_LOOKUP = 'UPDATE_CITIES';
export const UPDATE_DISTRICTS_LOOKUP = 'UPDATE_DISTRICTS';
export const UPDATE_REGIONS_LOOKUP = 'UPDATE_REGIONS';
export const UPDATE_SERVICE_AREAS_LOOKUP = 'UPDATE_SERVICE_AREAS';
export const UPDATE_LOCAL_AREAS_LOOKUP = 'UPDATE_LOCAL_AREAS';
export const OWNERS_LOOKUP_REQUEST = 'OWNERS_LOOKUP_REQUEST';
export const UPDATE_OWNERS_LOOKUP = 'UPDATE_OWNERS_LOOKUP';
export const UPDATE_OWNERS_LITE_LOOKUP = 'UPDATE_OWNERS_LITE_LOOKUP';
export const UPDATE_EQUIPMENT_LITE_LOOKUP = 'UPDATE_EQUIPMENT_LITE_LOOKUP';
export const DISTRICT_EQUIPMENT_TYPES_LOOKUP_REQUEST = 'DISTRICT_EQUIPMENT_TYPES_LOOKUP_REQUEST';
export const UPDATE_DISTRICT_EQUIPMENT_TYPES_LOOKUP = 'UPDATE_DISTRICT_EQUIPMENT_TYPES_LOOKUP';
export const UPDATE_FISCAL_YEARS_LOOKUP = 'UPDATE_FISCAL_YEARS_LOOKUP';
export const UPDATE_EQUIPMENT_TYPES_LOOKUP = 'UPDATE_EQUIPMENT_TYPES_LOOKUP';
export const UPDATE_ROLES_LOOKUP = 'UPDATE_ROLES_LOOKUP';
export const UPDATE_PROJECTS_LOOKUP = 'UPDATE_PROJECTS_LOOKUP';
export const UPDATE_USERS_LOOKUP = 'UPDATE_USERS_LOOKUP';
export const UPDATE_RENTAL_CONDITIONS_LOOKUP = 'UPDATE_RENTAL_CONDITIONS_LOOKUP';
export const RENTAL_CONDITIONS_LOOKUP_REQUEST = 'RENTAL_CONDITIONS_LOOKUP_REQUEST';
export const UPDATE_PROVINCIAL_RATE_TYPES_LOOKUP = 'UPDATE_PROVINCIAL_RATE_TYPES_LOOKUP';
export const UPDATE_OVERTIME_RATE_TYPES_LOOKUP = 'UPDATE_OVERTIME_RATE_TYPES_LOOKUP';
export const BLANK_RENTAL_AGREEMENTS_LOOKUP_REQUEST = 'BLANK_RENTAL_AGREEMENTS_LOOKUP_REQUEST';
export const UPDATE_BLANK_RENTAL_AGREEMENTS_LOOKUP = 'UPDATE_BLANK_RENTAL_AGREEMENTS_LOOKUP';
export const UPDATE_ROLLOVER_STATUS_LOOKUP = 'UPDATE_ROLLOVER_STATUS_LOOKUP';
export const UPDATE_SEARCH_SUMMARY_COUNTS = 'UPDATE_SEARCH_SUMMARY_COUNTS';

// Current User
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

// Users
export const USERS_REQUEST = 'USERS_REQUEST';
export const UPDATE_USERS = 'UPDATE_USERS';
export const CLEAR_USERS = 'CLEAR_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const USER_DISTRICTS = 'USER_DISTRICTS';
export const CURRENT_USER_DISTRICTS = 'CURRENT_USER_DISTRICTS';

// Favourites
export const FAVOURITES_REQUEST = 'FAVOURITES_REQUEST';
export const UPDATE_FAVOURITES = 'UPDATE_FAVOURITES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const UPDATE_FAVOURITE = 'UPDATE_FAVOURITE';
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE';

// Contacts
export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Documents
export const UPDATE_DOCUMENTS = 'UPDATE_DOCUMENTS';
export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';

// Roles, Permissions
export const UPDATE_ROLES = 'UPDATE_ROLES';
export const UPDATE_ROLE = 'UPDATE_ROLE';
export const ADD_ROLE = 'ADD_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';
export const UPDATE_ROLE_PERMISSIONS = 'UPDATE_ROLE_PERMISSIONS';

// Equipment
export const EQUIPMENT_LIST_REQUEST = 'EQUIPMENT_LIST_REQUEST';
export const UPDATE_EQUIPMENT_LIST = 'UPDATE_EQUIPMENT_LIST';
export const CLEAR_EQUIPMENT_LIST = 'CLEAR_EQUIPMENT_LIST';
export const ADD_EQUIPMENT = 'ADD_EQUIPMENT';
export const UPDATE_EQUIPMENT = 'UPDATE_EQUIPMENT';
export const UPDATE_EQUIPMENT_NOTES = 'UPDATE_EQUIPMENT_NOTES';
export const UPDATE_EQUIPMENT_RENTAL_AGREEMENTS = 'UPDATE_EQUIPMENT_RENTAL_AGREEMENTS';
export const EQUIPMENT_TRANSFER_ERROR = 'EQUIPMENT_TRANSFER_ERROR';

// Equipment Attachments
export const UPDATE_EQUIPMENT_ATTACHMENTS = 'UPDATE_EQUIPMENT_ATTACHMENTS';
export const ADD_EQUIPMENT_ATTACHMENT = 'ADD_EQUIPMENT_ATTACHMENT';
export const ADD_EQUIPMENT_ATTACHMENTS = 'ADD_EQUIPMENT_ATTACHMENTS';
export const UPDATE_EQUIPMENT_ATTACHMENT = 'UPDATE_EQUIPMENT_ATTACHMENT';
export const DELETE_EQUIPMENT_ATTACHMENT = 'DELETE_EQUIPMENT_ATTACHMENT';

// Owners
export const OWNERS_REQUEST = 'OWNERS_REQUEST';
export const UPDATE_OWNERS = 'UPDATE_OWNERS';
export const OWNERS_LITE_REQUEST = 'OWNERS_LITE_REQUEST';
export const UPDATE_OWNERS_LITE = 'UPDATE_OWNERS_LITE';
export const UPDATE_OWNER_EQUIPMENT = 'UPDATE_OWNER_EQUIPMENT';
export const OWNER_EQUIPMENT_REQUEST = 'OWNER_EQUIPMENT_REQUEST';
export const CLEAR_OWNERS = 'CLEAR_OWNERS';
export const UPDATE_OWNER = 'UPDATE_OWNER';
export const ADD_OWNER = 'ADD_OWNER';
export const DELETE_OWNER = 'DELETE_OWNER';
export const UPDATE_OWNER_NOTES = 'UPDATE_OWNER_NOTES';

// Projects
export const PROJECTS_REQUEST = 'PROJECTS_REQUEST';
export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT_EQUIPMENT = 'UPDATE_PROJECT_EQUIPMENT';
export const UPDATE_PROJECT_TIME_RECORDS = 'UPDATE_PROJECT_TIME_RECORDS';
export const UPDATE_PROJECT_NOTES = 'UPDATE_PROJECT_NOTES';
export const UPDATE_PROJECT_RENTAL_AGREEMENTS ='UPDATE_PROJECT_RENTAL_AGREEMENTS';

// Rental Requests
export const RENTAL_REQUESTS_REQUEST = 'RENTAL_REQUESTS_REQUEST';
export const UPDATE_RENTAL_REQUESTS = 'UPDATE_RENTAL_REQUESTS';
export const CLEAR_RENTAL_REQUESTS = 'CLEAR_RENTAL_REQUESTS';
export const RENTAL_REQUEST_REQUEST = 'RENTAL_REQUEST_REQUEST';
export const UPDATE_RENTAL_REQUEST = 'UPDATE_RENTAL_REQUEST';
export const ADD_RENTAL_REQUEST = 'ADD_RENTAL_REQUEST';
export const ADD_RENTAL_REQUEST_ERROR = 'ADD_RENTAL_REQUEST_ERROR';
export const ADD_RENTAL_REQUEST_REFRESH = 'ADD_RENTAL_REQUEST_REFRESH';
export const UPDATE_RENTAL_REQUEST_NOTES = 'UPDATE_RENTAL_REQUEST_NOTES';

// Time Entries
export const TIME_ENTRIES_REQUEST = 'TIME_ENTRIES_REQUEST';
export const UPDATE_TIME_ENTRIES = 'UPDATE_TIME_ENTRIES';
export const CLEAR_TIME_ENTRIES = 'CLEAR_TIME_ENTRIES';

// Hiring Responses
export const HIRING_RESPONSES_REQUEST = 'HIRING_RESPONSES_REQUEST';
export const UPDATE_HIRING_RESPONSES = 'UPDATE_HIRING_RESPONSES';
export const CLEAR_HIRING_RESPONSES = 'CLEAR_HIRING_RESPONSES';

// Owners' Coverage
export const OWNERS_COVERAGE_REQUEST = 'OWNERS_COVERAGE_REQUEST';
export const UPDATE_OWNERS_COVERAGE = 'UPDATE_OWNERS_COVERAGE';
export const CLEAR_OWNERS_COVERAGE = 'CLEAR_OWNERS_COVERAGE';

// Rotation List
export const RENTAL_REQUEST_ROTATION_LIST_REQUEST = 'RENTAL_REQUEST_ROTATION_LIST_REQUEST';
export const UPDATE_RENTAL_REQUEST_ROTATION_LIST = 'UPDATE_RENTAL_REQUEST_ROTATION_LIST';
export const RENTAL_REQUEST_ROTATION_LIST_ERROR = 'RENTAL_REQUEST_ROTATION_LIST_ERROR';

// Rental Agreements
export const UPDATE_RENTAL_AGREEMENT = 'UPDATE_RENTAL_AGREEMENT';
export const ADD_RENTAL_AGREEMENT = 'ADD_RENTAL_AGREEMENT';
export const GENERATE_ANOTHER_RENTAL_AGREEMENT = 'GENERATE_ANOTHER_RENTAL_AGREEMENT';
export const RENTAL_AGREEMENT_TIME_RECORDS = 'RENTAL_AGREEMENT_TIME_RECORDS';

// Rental Rates, Conditions
export const ADD_RENTAL_RATE = 'ADD_RENTAL_RATE';
export const UPDATE_RENTAL_RATE = 'UPDATE_RENTAL_RATE';
export const DELETE_RENTAL_RATE = 'DELETE_RENTAL_RATE';
export const ADD_RENTAL_CONDITION = 'ADD_RENTAL_CONDITION';
export const UPDATE_RENTAL_CONDITION = 'UPDATE_RENTAL_CONDITION';
export const DELETE_RENTAL_CONDITION = 'DELETE_RENTAL_CONDITION';

// Version
export const UPDATE_VERSION = 'UPDATE_VERSION';

// History
export const UPDATE_HISTORY = 'UPDATE_HISTORY';

// Notes
export const UPDATE_NOTES = 'UPDATE_NOTES';
export const ADD_NOTE = 'ADD_NOTE';

// Time Records
export const DELETE_TIME_RECORD = 'DELETE_TIME_RECORD';

// Session Modal
export const SHOW_SESSION_TIMEOUT_DIALOG = 'SHOW_SESSION_TIMEOUT_DIALOG';
export const CLOSE_SESSION_TIMEOUT_DIALOG = 'CLOSE_SESSION_TIMEOUT_DIALOG';

// Businesses
export const UPDATE_BUSINESS = 'UPDATE_BUSINESS';
