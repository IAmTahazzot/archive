-- 1. Write a query to display the name (first_name, last_name) and salary for all employees whose salary is not in the range $10,000 through $15,000.
SELECT FIRST_NAME, LAST_NAME, SALARY
FROM employees
WHERE SALARY NOT BETWEEN 10000 AND 15000;


-- 2. Write a query to display the name (first_name, last_name) and department ID of all employees in departments 30 or 100 in ascending order.
SELECT FIRST_NAME, LAST_NAME, DEPARTMENT_ID
FROM employees
WHERE DEPARTMENT_ID IN (30, 100)
ORDER BY DEPARTMENT_ID;

-- 3. Write a query to display the name (first_name, last_name) and salary for all employees whose salary is not in the range $10,000 through $15,000 and are in department 30 or 100
SELECT FIRST_NAME, LAST_NAME, SALARY
FROM employees
WHERE SALARY NOT BETWEEN 10000 AND 15000
  AND DEPARTMENT_ID IN (30, 100);

select *
from employees;
-- 4. Write a query to display the name (first_name, last_name) and hire date for all employees who were hired in 1987
SELECT FIRST_NAME, LAST_NAME, HIRE_DATE
FROM employees
WHERE EXTRACT(YEAR FROM HIRE_DATE) = 1987;

-- 5. Write a query to display the first_name of all employees who have both "b" and "c" in their first name
SELECT FIRST_NAME
FROM employees
WHERE FIRST_NAME LIKE '%c%'
  AND FIRST_NAME like '%b%';

-- 6. Write a query to display the last name, job, and salary for all employees whose job is that of a Programmer or a Shipping Clerk, and whose salary is not equal to $4,500, $10,000, or $15,000.
SELECT e.LAST_NAME, j.JOB_TITLE, e.SALARY
FROM employees e
         INNER JOIN jobs j ON e.JOB_ID = j.JOB_ID
WHERE j.JOB_TITLE IN ('Shipping Clerk', 'Programmer')
  AND SALARY NOT IN (4500, 10000, 15000);

-- 7. Write a query to display the last name of employees whose names have exactly 6 characters.
SELECT LAST_NAME
FROM employees
WHERE LENGTH(LAST_NAME) = 6;
SELECT LAST_NAME
FROM employees
WHERE LAST_NAME LIKE '______';

-- 8. Write a query to display the last name of employees having 'e' as the third character.
SELECT LAST_NAME
FROM employees
WHERE LAST_NAME LIKE '__e%';

-- 9. Write a query to display the jobs/designations available in the employees table.
SELECT DISTINCT JOB_ID
FROM employees;

-- 10. Write a query to display the name (first_name, last_name), salary and PF (15% of salary) of all employees.
SELECT FIRST_NAME, LAST_NAME, SALARY, (SALARY * .15) PF
FROM employees;

-- 11. Write a query to select all record from employees where last name in 'BLAKE', 'SCOTT', 'KING' and 'FORD'
SELECT *
FROM employees
WHERE LAST_NAME IN ('BLAKE', 'SCOTT', 'KING', 'FORD');