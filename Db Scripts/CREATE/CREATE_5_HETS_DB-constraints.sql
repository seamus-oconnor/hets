------------ unique constraints
--
CREATE UNIQUE INDEX "HET_LOCAL_AREA_NUMBER_UK"
    ON public."HET_LOCAL_AREA" 
    ("LOCAL_AREA_NUMBER")
    TABLESPACE pg_default;
    
alter table "HET_LOCAL_AREA" 
add constraint "HET_LOCAL_AREA_NUMBER_UK" UNIQUE using index "HET_LOCAL_AREA_NUMBER_UK";

CREATE UNIQUE INDEX "HET_USR_GUID_UK"
    ON public."HET_USER" 
    ("GUID")
    TABLESPACE pg_default;

alter table "HET_USER" 
add constraint "HET_USR_GUID_UK" UNIQUE using index "HET_USR_GUID_UK";

CREATE UNIQUE INDEX "HET_ROLE_NAME_UK"
    ON public."HET_ROLE" 
    ("NAME")
    TABLESPACE pg_default;

alter table "HET_ROLE" 
add constraint "HET_ROLE_NAME_UK" UNIQUE using index "HET_ROLE_NAME_UK";

CREATE UNIQUE INDEX "HET_PRM_CODE_UK"
    ON public."HET_PERMISSION" 
    ("CODE")
    TABLESPACE pg_default;

alter table "HET_PERMISSION" 
add constraint "HET_PRM_CODE_UK" UNIQUE using index "HET_PRM_CODE_UK";

CREATE UNIQUE INDEX "HET_PRM_NAME_UK"
    ON public."HET_PERMISSION" 
    ("NAME")
    TABLESPACE pg_default;

alter table "HET_PERMISSION" 
add constraint "HET_PRM_NAME_UK" UNIQUE using index "HET_PRM_NAME_UK";


CREATE UNIQUE INDEX "HET_BUSINESS_GUID_UK"
    ON public."HET_BUSINESS" 
    ("BCEID_BUSINESS_GUID")
    TABLESPACE pg_default;

alter table "HET_BUSINESS" 
add constraint "HET_BUSINESS_GUID_UK" UNIQUE using index "HET_BUSINESS_GUID_UK";


CREATE UNIQUE INDEX "HET_RNTAG_NUMBER_UK"
    ON public."HET_RENTAL_AGREEMENT" 
    ("NUMBER")
    TABLESPACE pg_default;

alter table "HET_RENTAL_AGREEMENT" 
add constraint "HET_RNTAG_NUMBER_UK" UNIQUE using index "HET_RNTAG_NUMBER_UK";

-- status tables
ALTER TABLE public."HET_EQUIPMENT_STATUS_TYPE"
    ADD CONSTRAINT "UK_HET_EQUIPMENT_STATUS_TYPE_CODE" UNIQUE ("EQUIPMENT_STATUS_TYPE_CODE");
	
ALTER TABLE public."HET_OWNER_STATUS_TYPE"
    ADD CONSTRAINT "UK_HET_OWNER_STATUS_TYPE_CODE" UNIQUE ("OWNER_STATUS_TYPE_CODE");	

ALTER TABLE public."HET_PROJECT_STATUS_TYPE"
    ADD CONSTRAINT "UK_HET_PROJECT_STATUS_TYPE_CODE" UNIQUE ("PROJECT_STATUS_TYPE_CODE");

ALTER TABLE public."HET_RENTAL_AGREEMENT_STATUS_TYPE"
    ADD CONSTRAINT "UK_HET_RENTAL_AGREEMENT_STATUS_TYPE_CODE" UNIQUE ("RENTAL_AGREEMENT_STATUS_TYPE_CODE");

ALTER TABLE public."HET_RENTAL_REQUEST_STATUS_TYPE"
    ADD CONSTRAINT "UK_HET_RENTAL_REQUEST_STATUS_TYPE_CODE" UNIQUE ("RENTAL_REQUEST_STATUS_TYPE_CODE");
	
ALTER TABLE public."HET_RATE_PERIOD_TYPE"
    ADD CONSTRAINT "UK_HET_RATE_PERIOD_TYPE_CODE" UNIQUE ("RATE_PERIOD_TYPE_CODE");
	
ALTER TABLE public."HET_MIME_TYPE"
    ADD CONSTRAINT "UK_HET_MIME_TYPE_CODE" UNIQUE ("MIME_TYPE_CODE");

ALTER TABLE public."HET_TIME_PERIOD_TYPE"
    ADD CONSTRAINT "UK_HET_TIME_PERIOD_TYPE_CODE" UNIQUE ("TIME_PERIOD_TYPE_CODE");

	