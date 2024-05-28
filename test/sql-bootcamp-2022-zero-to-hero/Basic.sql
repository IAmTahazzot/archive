-- Selecting names & emails from customers table
SELECT first_name, last_name, email FROM customer;

-- Distinct Selection
SELECT DISTINCT rating FROM film;

-- COUNT (count rows)
SELECT COUNT(*) as Rows FROM payment;
SELECT COUNT(DISTINCT amount) FROM payment;

-- SELECT the highest paid customer
SELECT C.first_name, C.last_name, ROUND(SUM(Pay.amount), 2) as tatal_purchase_amount
FROM customer AS C INNER JOIN payment AS Pay
ON C.customer_id = Pay.customer_id GROUP BY C.first_name, C.last_name
ORDER BY SUM(Pay.amount) DESC LIMIT 1;

SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC;

SELECT * FROM customer WHERE customer_id = 148;

SELECT * FROM customer;