-- column_name data_type default 'default value'

CREATE TABLE test(
    name VARCHAR(20) DEFAULT 'N/AA'
);

alter table test modify column name varchar(50) default 'N/A';
desc test;

select * from test;

insert into test values();

select COALESCE(name, 'undefined') as name FROM test;

