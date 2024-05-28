-- LAST UPDATED: SPE 20, 2022
-- 1. Write a query to get the job_id and related employee's id
SELECT JOB_ID, GROUP_CONCAT(EMPLOYEE_ID, ' ')
FROM employees
GROUP BY JOB_ID;

-- 2. Write a query to update the portion of the phone_number in the employees table, within the phone number the substring '124' will be replaced by '999'.
SELECT REPLACE(PHONE_NUMBER, '124', '999')
FROM employees;

-- 3. Write a query to get the details of the employees where the length of the first name greater than or equal to 8.
SELECT *
FROM employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

-- 4. Write a query to display leading zeros before maximum and minimum salary.
-- Sample table: Jobs
SELECT JOB_ID,
       LPAD(MIN_SALARY, (SELECT CHAR_LENGTH(MAX(MIN_SALARY)) FROM jobs), 0)
           'Min Salary',
       LPAD(MAX_SALARY, (SELECT CHAR_LENGTH(MAX(MAX_SALARY)) FROM jobs), 0)
           'MAX Salary'
FROM jobs
ORDER BY MAX_SALARY DESC;

-- 5. Write a query to append '@example.com' to email field.
SELECT LCASE(CONCAT(EMAIL, '@example.com'))
FROM employees;

-- 6. Write a query to get the employee id, first name and hire month
SELECT EMPLOYEE_ID,
       FIRST_NAME,
       LPAD(EXTRACT(MONTH FROM HIRE_DATE), 2, '0') Month
FROM employees;

-- 7. Write a query to get the employee id, email id (discard the last three
-- characters)
SELECT EMPLOYEE_ID, SUBSTR(EMAIL, 1, (LENGTH(EMAIL) - 3))
FROM employees;
-- or
SELECT EMPLOYEE_ID, REVERSE(SUBSTR(REVERSE(EMAIL), 4))
FROM employees;

-- 8. Write a query to find all employees where first names are in upper case.
-- More: https://dev.mysql.com/doc/refman/8.0/en/cast-functions.html#operator_binary
SELECT EMPLOYEE_ID, FIRST_NAME
FROM employees
WHERE FIRST_NAME = BINARY UPPER(FIRST_NAME);

-- 9. Write a query to extract the last 4 character of phone numbers
SELECT REVERSE(SUBSTR(REVERSE(PHONE_NUMBER), 1, 4))
FROM employees;
--  or
SELECT RIGHT(PHONE_NUMBER, 4)
FROM employees;

-- 10. Write a query to get the last word of the street address.
SELECT STREET_ADDRESS,
       REVERSE(SUBSTR(REVERSE(STREET_ADDRESS), 1, INSTR(STREET_ADDRESS, ' ')))
           'Last Word'
FROM locations;


-- 11. Write a query to get the locations that have minimum street length.
SELECT *
FROM locations
WHERE LENGTH(STREET_ADDRESS) <= (SELECT MIN(LENGTH(STREET_ADDRESS))
                                 FROM locations);

-- 12. Write a query to display the first word from those job titles which contains more than one words.
SELECT JOB_TITLE, SUBSTR(JOB_TITLE, 1, INSTR(JOB_TITLE, ' ')) 'job_title'
FROM jobs
WHERE INSTR(TRIM(BOTH FROM JOB_TITLE), ' ') <> 0;

-- 13. Write a query to display the length of first name for employees where last name contain character 'c' after 2nd position.
SELECT FIRST_NAME, LAST_NAME, LENGTH(FIRST_NAME)
FROM employees
WHERE INSTR(LAST_NAME, 'C') > 2;

-- 14. Write a query that displays the first name and the length of the first name for all employees whose name starts with the letters 'A', 'J' or 'M'. Give each column an appropriate label. Sort the results by the employees' first names.
SELECT FIRST_NAME 'first name',
       LENGTH(FIRST_NAME) 'name length'
FROM employees
WHERE  CHAR(ASCII(FIRST_NAME)) IN ('A', 'J', 'M')
ORDER BY FIRST_NAME;
-- or
SELECT FIRST_NAME 'first name',
       LENGTH(FIRST_NAME) 'name length'
FROM employees
WHERE  SUBSTRING(FIRST_NAME, 1, 1) IN ('A', 'J', 'M')
ORDER BY FIRST_NAME;


-- 15. Write a query to display the first name and salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.
SELECT FIRST_NAME,
       LPAD(FORMAT(SALARY, 13-LENGTH(SALARY)), 13, '$')
FROM employees;
-- or
SELECT FIRST_NAME,
       LPAD(SALARY, 10, '$')
FROM employees;

-- 16. Write a query to display the first eight characters of the employees' first names and indicates the amounts of their salaries with '$' sign. Each '$' sign signifies a thousand dollars. Sort the data in descending order of salary.
SELECT SUBSTR(FIRST_NAME, 1, 8) '8 Character Of Name',
       REPEAT('$', SALARY DIV 1000) 'Each $ is 1000 (Total salary)',
       SALARY
FROM employees
ORDER BY SALARY DESC;


-- 17. Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.
SELECT EMPLOYEE_ID,
       FIRST_NAME,
       LAST_NAME,
       HIRE_DATE
FROM employees
WHERE MONTH(HIRE_DATE) = 7 ||
      DAYOFMONTH(HIRE_DATE) = 7;

