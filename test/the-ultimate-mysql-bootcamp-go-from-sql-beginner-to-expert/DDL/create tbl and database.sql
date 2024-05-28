CREATE TABLE cats
(
    id    INT NOT NULL AUTO_INCREMENT,
    name  VARCHAR(25),
    breed VARCHAR(25),
    age   INT,
    PRIMARY KEY (id)
);

DESC cats;

CREATE TABLE person
(
    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
    first_name VARCHAR(20),
    last_name  VARCHAR(20),
    age        INT                            NOT NULL
);

DROP TABLE person;