-- Extract
SELECT EXTRACT(YEAR  FROM payment_date) as payment_year FROM payment;
SELECT AGE(payment_date) FROM payment;

-- [FOR MORE INFO]: https://www.postgresql.org/docs/14/functions-formatting.html
SELECT TO_CHAR(payment_date, 'MONTH DD, YYYY') date FROM payment;

-- Math
-- https://www.postgresql.org/docs/current/functions-math.html
SELECT -4 / 2 Division;
-- Human body temperature 37°C (convert to °F)
SELECT (37.2 * 9/5) + 32 human_body_temparature_fahrenheit;
SELECT ||/64 cube_root, |/36 square_root, @ -5.0 absolute_value, 2 ^ 5 expo;

-- Sub Query
SELECT film_id, title, rental_rate FROM film
WHERE rental_rate > (
    SELECT AVG(rental_rate) FROM film
) ORDER BY film_id;

SELECT f.title, f.description FROM film f
WHERE f.film_id IN (
    SELECT i.film_id FROM rental r
    INNER JOIN inventory i on r.inventory_id = i.inventory_id
    WHERE r.return_date BETWEEN '2005-05-29' AND '2005-05-30') ORDER BY f.title;

-- Self Join
