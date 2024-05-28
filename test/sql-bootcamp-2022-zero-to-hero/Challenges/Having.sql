-- 01
/**
  We are launching a platinum service for our most loyal customers.
  We will assign platinum status to customers that have had 40 or more
  transaction payments.

  What customer ids are eligible for platinum status?

  */
SELECT customer_id, COUNT(amount) FROM payment
GROUP BY customer_id HAVING COUNT(amount) >= 40 ORDER BY customer_id;

-- 02
/**
  What are the customer ids of customers who have spent more than $100 in
  payment transactions with our staff_id member 2?
 */

SELECT customer_id, SUM(amount) as total_paid FROM payment
WHERE staff_id = 2 GROUP BY customer_id
HAVING SUM(amount) > 100;



























