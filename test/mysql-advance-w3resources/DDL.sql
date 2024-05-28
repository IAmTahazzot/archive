-- create table
CREATE TABLE IF NOT EXISTS countries
(
    country_id INT NOT NULL AUTO_INCREMENT,
    country_name VARCHAR(30) NOT NULL UNIQUE,
    region_id DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (country_id)
);

CREATE TABLE IF NOT EXISTS test
(
    a DECIMAL(5,2) NOT NULL DEFAULT 3.00
);
