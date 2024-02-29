create database task_manager_db;

use task_manager_db;

create table tasks (
	id varchar(100) not null primary key default(uuid()),
    name varchar(100) not null,
    description text not null
);