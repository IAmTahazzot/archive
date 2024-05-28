-- Write a query to display the names (first_name, last_name) using alias name "First Name", "Last Name".
-- You can omit the AS operator
SELECT FIRST_NAME as 'First Name', LAST_NAME as 'Last Name'
FROM employees;

-- Write a query to get unique department ID from employee table
SELECT *
FROM employees
LIMIT 2;

-- Write a query to get all employee details from the employee table order by first name, descending
SELECT *
FROM employees
ORDER BY FIRST_NAME;

-- Write a query to get the names (first_name, last_name), salary, PF of all the employees (PF is calculated as 15% of salary).
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) 'Full Name',
       SALARY,
       ROUND((SALARY * (15 / 100)), 2)    PF
FROM employees;

-- Write a query to get the employee ID, names (first_name, last_name),
-- salary in ascending order of salary.
SELECT EMPLOYEE_ID, CONCAT(FIRST_NAME, ' ', LAST_NAME) 'Full Name', SALARY
FROM employees
ORDER BY SALARY;

-- Write a query to get the total salaries payable to employees
SELECT ROUND(SUM(SALARY), 2) 'Total Payable'
FROM employees;

-- Write a query to get the maximum and minimum salary from employees table.
SELECT MIN(SALARY) 'Minimum Salary', MAX(SALARY) 'Maximum Salary'
FROM employees;

-- Write a query to get the average salary and number of employees in the
-- employees table
SELECT AVG(SALARY)        'Average Salary',
       COUNT(EMPLOYEE_ID) 'Total Employees'
FROM employees;

-- Write a query to get the number of employees working with the company
SELECT COUNT(*) 'Total Employees'
FROM employees;

-- Write a query to get the number of jobs available in the employees table
SELECT JOB_ID,
       COUNT(JOB_ID) 'total_jobs_available_on_same_department'
FROM employees
GROUP BY JOB_ID;

SELECT COUNT(DISTINCT JOB_ID) 'total_jobs_available'
FROM employees;

-- Write a query get all first name from employees table in upper case.
SELECT UPPER(FIRST_NAME)
FROM employees;

-- Write a query to get the first 3 characters of first name from employees table.
SELECT SUBSTR(FIRST_NAME, 1, 3) 'First Name'
FROM employees;

-- Write a query to calculate 171*214+625
SELECT 171 * 214 + 625 'calculation'
FROM employees;

-- Write a query to get the names (for example Ellen Abel, Sundar Ande etc.) of all the employees from employees table
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) 'name'
FROM employees;

-- Write a query to get first name from employees table after removing white spaces from both side.
SELECT TRIM(BOTH ' ' FROM FIRST_NAME) 'clean_name'
FROM employees;

-- Write a query to get the length of the employee names (first_name, last_name) from employees table.
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME)       'name',
       LENGTH(CONCAT(FIRST_NAME, '
', LAST_NAME)) 'name_length'
FROM employees;

-- Write a query to check if the first_name fields of the employees table contains numbers.
SELECT * FROM employees WHERE FIRST_NAME REGEXP '[0-9]';

-- Write a query to select first 10 records from a table.
SELECT *
FROM employees
LIMIT 10;

-- Write a query to get monthly salary (round 2 decimal places) of each and every employee
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) 'name',
       ROUND(SALARY/12, 2)
FROM employees;
