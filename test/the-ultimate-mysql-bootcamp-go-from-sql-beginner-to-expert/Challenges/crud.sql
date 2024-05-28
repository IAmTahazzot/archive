-- Creating the table for exercises
CREATE TABLE IF NOT EXISTS shirts
(
    shirt_id   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    article    VARCHAR(255)                   NOT NULL,
    color      VARCHAR(15)                    NOT NULL,
    shirt_size CHAR                           NOT NULL,
    last_worn  SMALLINT                       NOT NULL
);

DESC shirts;

-- INSERT
INSERT INTO shirts (article, color, shirt_size, last_worn)
VALUES ('t-shirt', 'white', 'S', 10),
       ('t-shirt', 'green', 'S', 200),
       ('polo shirt', 'black', 'M', 10),
       ('tank top', 'blue', 'S', 50),
       ('t-shirt', 'pink', 'S', 0),
       ('polo shirt', 'red', 'M', 5),
       ('tank top', 'white', 'S', 200),
       ('tank top', 'blue', 'M', 15);

INSERT INTO shirts(article, color, shirt_size, last_worn)
VALUES ('polo shirt', 'purple', 'M', 50);


-- SELECT
SELECT *
FROM shirts;
SELECT article, color
FROM shirts;
SELECT article, color, shirt_size, last_worn
FROM shirts
WHERE shirt_size = 'M';


-- UPDATE
UPDATE shirts
SET shirt_size = 'L'
WHERE article = 'polo shirt';

UPDATE shirts
SET last_worn = 0
WHERE last_worn = 15;

UPDATE shirts
SET shirt_size = 'XS', color = 'Off White'
WHERE color = 'WHITE'; -- case insensitive


-- DELETE
DELETE FROM shirts WHERE last_worn >= 200;
DELETE FROM shirts WHERE article = 'tank top';
DELETE FROM shirts; -- UNSAFE