-- 02
/**
  California sales tax laws have changed and we need to alert our customers
  to this through email.

  What are the emails of the customers who live in California?
 */
SELECT c.email FROM customer c
INNER JOIN address a on c.address_id = a.address_id
WHERE a.district IN ('California');

-- 02
/**
  A customer walks in and is a huge fan of the actor 'Nick Wahlberg' and wants
  to know which movies he is in.

  Get a list of all the movies 'Nick Wahlberg' has been in
 */
SELECT f.* FROM actor a
INNER JOIN film_actor fa on a.actor_id = fa.actor_id
INNER JOIN film f on f.film_id = fa.film_id
WHERE a.first_name = 'Nick' AND a.last_name = 'Wahlberg' ORDER BY f.film_id;





























