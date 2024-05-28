-- 01
/**
  We have two staff members, with Staff IDs 1 and 2. We want to give a bonus
  to the staff member that handled the most payments. (Most in terms of number
  of payments processed, not the total dollar amount).

  How many payments did each staff member handled and who get the bonus?
 */

SELECT staff_id, COUNT(customer_id) FROM payment GROUP BY staff_id;
-- oR
SELECT staff_id, COUNT(*) FROM payment GROUP BY staff_id;


-- 02
/**
  Corporate HQ is conducting a study on the relationship between replacement
  const and a movie MPAA rating (e.g. G, PG, R, etc.)

  What is the average replacement cost per MPAA rating?
  [NOTE]: You may need to expand the AVG column to view correct results.
 */
SELECT replacement_cost, rating FROM film;

SELECT rating, ROUND(AVG(replacement_cost), 2) AS avarage_cost FROM film
GROUP BY rating ORDER BY avarage_cost DESC;


-- 03
/**
  We are running a promotion to reward our top 5 customers with coupons.
  What are the customers ids of the top 5 customers by total spend?
 */

SELECT customer_id, SUM(amount) FROM payment
GROUP BY customer_id ORDER BY SUM(amount) DESC
LIMIT 5;



















