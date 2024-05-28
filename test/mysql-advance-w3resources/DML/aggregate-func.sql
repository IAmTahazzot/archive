-- 1. Write a query to list the number of jobs available in the employees table.
SELECT COUNT(DISTINCT JOB_ID) FROm employees;

-- 2. Write a query to get the total salaries payable to employees.
SELECT SUM(SALARY) FROM employees;

-- 3. Write a query to get the minimum salary from employees table.
SELECT MIN(SALARY) FROM employees;

-- 4. Write a query to get the maximum salary of an employee working as a Programmer.
SELECT MAX(SALARY) FROM employees WHERE JOB_ID = 'IT_PROG';

-- 5. Write a query to get the average salary and number of employees working the department 90.
SELECT AVG(SALARY) FROM employees WHERE DEPARTMENT_ID = 90;

-- 6. Write a query to get the highest, lowest, sum, and average salary of all employees.
SELECT MAX(SALARY) 'highest salary',
       MIN(SALARY) 'lowest salary',
       SUM(SALARY) 'Total salary',
       AVG(SALARY) 'Average salary'
FROM employees;

-- 7. Write a query to get the number of employees with the same job.
SELECT JOB_ID, COUNT(*) 'Total employees'
FROM employees
GROUP BY  JOB_ID;

-- 8. Write a query to get the difference between the highest and lowest salaries.
SELECT (MAX(SALARY) - MIN(SALARY)) 'Difference of highest & lowest salary'
FROM employees;

-- 9. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager
SELECT MANAGER_ID,
       MIN(SALARY)
FROM employees
WHERE MANAGER_ID IS NOT NULL
GROUP BY MANAGER_ID
ORDER BY MIN(SALARY) DESC;

-- 10. Write a query to get the department ID and the total salary payable in each department
SELECT DEPARTMENT_ID,
       SUM(SALARY)
FROM employees
GROUP BY DEPARTMENT_ID
ORDER BY SUM(SALARY) DESC;

-- 11. Write a query to get the average salary for each job ID excluding programmer
SELECT JOB_ID,
       AVG(SALARY)
FROm employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID;

-- 12. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only

SELECT
    JOB_ID,
    MAX(SALARY) 'highest salary',
    MIN(SALARY) 'lowest salary',
    SUM(SALARY) 'Total salary',
    AVG(SALARY) 'Average salary'
FROM employees
WHERE DEPARTMENT_ID = 90
GROUP BY JOB_ID;

-- 13. Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000.
SELECT JOB_ID,
       MAX(SALARY)
FROm employees
GROUP BY JOB_ID
HAVING MAX(SALARY) >= 4000
ORDER BY MAX(SALARY) DESC;

-- 14. Write a query to get the average salary for all departments employing more than 10 employees
SELECT JOB_ID,
       AVG(SALARY)
FROM employees
GROUP BY JOB_ID
HAVING COUNT(*) > 10;
