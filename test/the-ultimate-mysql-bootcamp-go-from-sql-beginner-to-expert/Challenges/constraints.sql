-- TASK 1
-- Define an Employees table, with the following fields:

CREATE TABLE IF NOT EXISTS employees
(
    id             INT         NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name     VARCHAR(30) NOT NULL,
    last_name      VARCHAR(30) NOT NULL,
    age            INT         NOT NULL,
    current_status VARCHAR(15) NOT NULL DEFAULT 'employed'
);

DESC employees;
