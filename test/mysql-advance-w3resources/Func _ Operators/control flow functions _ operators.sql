/**
 # Control Flow Functions & Operators

    - Case
    - IF()
    - NULLIF()
    - IFNULL()

  IF returns the first expression if true else last expression
  IFNULL returns the first not null value
  NULLIF returns null if expr1 == expr2 else return expr1
 */

-- Case can use to make decision
SELECT CASE CAST('a' AS BINARY)
    # Case Statement
    WHEN 'A' THEN 'First Letter'
    WHEN 'Z' THEN 'Last Letter'
    ELSE 'Middle Letters or Small 1st/ last letter'
END 'Check Letter';

-- IF is kind of standard to make decisions in general
SELECT IF(2>5, '2 is greater than 5', '2 is less than 5') '2>5';

-- IFNULL
SELECT IFNULL(0, null);

-- NULLIF
SELECT NULLIF(1, 435);