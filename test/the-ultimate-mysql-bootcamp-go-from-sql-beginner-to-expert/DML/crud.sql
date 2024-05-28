INSERT INTO cats(name, breed, age)
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Rag doll', 9),
       ('Jackson', 'Sphinx', 7);

SELECT *
FROM cats
ORDER BY age DESC;

-- --------------------------------------------------------------
-- C       R     U       D
-- Create  Read  Update  Delete

-- NOW READ/ SELECT
-- --------------------------------------------------------------
SELECT *
FROM cats;

SELECT name AS cat_name
FROM cats;

SELECT name, age
FROM cats
LIMIT 5;



-- --------------------------------------------------------------
-- Insert
-- --------------------------------------------------------------
INSERT INTO cats(name, breed, age)
VALUES ('Kitty1', 'White', 3),
       ('Kitty2', 'Orange', 3),
       ('Kitten', 'Black', 9);


-- --------------------------------------------------------------
-- Update
-- !!!!!!!!!!!!!!!!!! DO NOT FORGET WHERE CLAUSE
-- --------------------------------------------------------------
UPDATE cats
SET name = 'Jack'
WHERE name = 'Jackson';

UPDATE cats
SET breed = 'British Shorthaired'
WHERE name = 'Ringo';

UPDATE cats
SET age = 12
WHERE breed = 'Maine Coon';

-- --------------------------------------------------------------
-- DELETE
-- !!!!!!!!!!!!!!!!!! DO NOT FORGET WHERE CLAUSE
-- --------------------------------------------------------------

DELETE
FROM cats
WHERE name = 'Egg';

