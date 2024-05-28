-- 01
/**
  During which months did payments occur?
  Format your answer to return back the full month name.
 */
SELECT DISTINCT TO_CHAR(payment_date, 'MONTH') months FROM payment
ORDER BY months;

-- 02
/**
  How many payments occurred on a Monday?

  [NOTE]: We didn't show you exactly how to do this, but use the documentation
  or Google to figure this out!
 */
SELECT COUNT(TO_CHAR(payment_date, 'DAY')) FROM payment
WHERE EXTRACT(DOW FROM payment_date) = 1;