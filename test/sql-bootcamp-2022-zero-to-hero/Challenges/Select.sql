-- 1
-- How many payment transactions were greater than $5.00?
SELECT COUNT(amount) FROM payment WHERE amount > 5.00;

-- 2
-- How many actors have a first name that stats with the letter P?
SELECT count(*) FROM actor WHERE first_name LIKE 'P%';

-- 3
-- How many unique districts are out customers from?
SELECT COUNT(DISTINCT district) FROM address;

-- 4
-- Retrieve all unique districts
SELECT DISTINCT district FROM address;

-- 5
-- How many films have a rating of R and a replacement cost between $5 and $15?
SELECT COUNT(*) FROM film WHERE rating = 'R' AND replacement_cost BETWEEN 5 AND 15;

-- 6
-- HOw many film have the word Truman somewhere in the title?
SELECT * FROM film;
SELECT count(title) FROM film WHERE title LIKE '%Truman%';