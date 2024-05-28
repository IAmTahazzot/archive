-- 1. Write a query to find the name (first_name, last_name) and the salary of the employees who have a higher salary than the employee whose last_name='Bull'.
SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) 'name',
       SALARY
FROM employees
WHERE SALARY > (SELECT SALARY FROM employees WHERE LAST_NAME = 'Bull' LIMIT 1);

-- 2. Write a query to find the name (first_name, last_name) of all employees who works in the IT department.
SELECT FIRST_NAME,
       LAST_NAME
FROM employees
WHERE DEPARTMENT_ID IN
      (SELECT DEPARTMENT_ID FROM departments WHERE DEPARTMENT_NAME = 'IT');


-- 3. Write a query to find the name (first_name, last_name) of the employees who have a manager and worked in a USA based department.
SELECT e.FIRST_NAME,
       e.LAST_NAME,
       e.EMPLOYEE_ID
FROM employees e
WHERE MANAGER_ID IN
      (SELECT EMPLOYEE_ID
       FROM employees
       WHERE DEPARTMENT_ID IN
             (SELECT departments.DEPARTMENT_ID
              FROM departments
              WHERE LOCATION_ID IN
                    (SELECT LOCATION_ID
                     FROM locations
                     WHERE COUNTRY_ID = 'US')));

-- 4. Write a query to find the name (first_name, last_name) of the employees who are managers.
SELECT FIRST_NAME,
       LAST_NAME
FROM employees
WHERE EMPLOYEE_ID IN
      (SELECT MANAGER_ID
       FROM employees);

-- 5. Write a query to find the name (first_name, last_name), and salary of the employees whose salary is greater than the average salary
SELECT FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees
WHERE SALARY > (SELECT AVG(SALARY)
                FROM employees);

-- 6. Write a query to find the name (first_name, last_name), and salary of the employees whose salary is equal to the minimum salary for their job grade
SELECT FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees
WHERE SALARY =
      (SELECT MIN_SALARY FROM jobs WHERE employees.JOB_ID = jobs.JOB_ID);

-- 7. Write a query to find the name (first_name, last_name), and salary of
-- the employees who earns more than the average salary and works in any of the
-- IT departments
SELECT FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees
WHERE SALARY > (SELECT AVG(SALARY) FROM employees)
  AND DEPARTMENT_ID IN
      (SELECT DEPARTMENT_ID
       FROM departments
       WHERE DEPARTMENT_NAME LIKE 'IT%');

-- 8. Write a query to find the name (first_name, last_name), and salary of
-- the employees who earns more than the earning of employees last name Bell.
SELECT FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees
WHERE SALARY >
      (SELECT SALARY FROM employees WHERE LAST_NAME = 'Bell')
ORDER BY FIRST_NAME, SALARY;


-- 9. Write a query to find the name (first_name, last_name), and salary of the employees who earn the same salary as the minimum salary for all departments.
SELECT FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees
WHERE SALARY = (
    SELECT MIN(SALARY) FROM employees
    );

-- 10. Write a query to find the name (first_name, last_name), and salary of the employees whose salary is greater than the average salary of all departments
SELECT FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees
WHERE SALARY >
ALL (
    SELECT AVG(SALARY) FROM employees GROUP BY DEPARTMENT_ID
);

-- 11. Write a query to find the name (first_name, last_name) and salary of the employees who earn a salary that is higher than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results of the salary of the lowest to highest
SELECT FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees
WHERE SALARY >
ALL (SELECT SALARY FROM employees WHERE JOB_ID = 'SH_CLERK')
ORDER BY SALARY;

-- 12. Write a query to find the name (first_name, last_name) of the employees who are not supervisors.
SELECT FIRST_NAME,
       LAST_NAME
FROM employees
WHERE EMPLOYEE_ID NOT IN (
    SELECT MANAGER_ID FROM employees
);

-- 13. Write a query to display the employee ID, first name, last name, and department names of all employees.
SELECT e.EMPLOYEE_ID,
       e.FIRST_NAME,
       e.LAST_NAME,
       d.DEPARTMENT_NAME
FROM employees e,
     departments d
WHERE e.DEPARTMENT_ID = d.DEPARTMENT_ID;


-- 14. Write a query to display the employee ID, first name, last name, salary of all employees whose salary is above average for their departments.
SELECT EMPLOYEE_ID,
       FIRST_NAME,
       LAST_NAME,
       SALARY
FROM employees a
WHERE SALARY > (
   SELECT AVG(SALARY) FROM employees b
   WHERE a.DEPARTMENT_ID = b.DEPARTMENT_ID
   GROUP BY a.DEPARTMENT_ID -- not need for group :)
);

-- 15. Write a query to fetch even numbered records from employees table.
SET @counter = 0;
SELECT ID,
       EMPLOYEE_ID
FROM ( SELECT @counter := @counter + 1 'ID', EMPLOYEE_ID FROM employees) a
WHERE MOD(a.ID, 2) = 0;

-- 16. Write a query to find the 5th maximum salary in the employees table
-- [NOTE]: NEED IMPROVEMENT
SELECT EMPLOYEE_ID,
       SALARY
FROM employees
WHERE EMPLOYEE_ID = (
    SELECT EMPLOYEE_ID FROM employees ORDER BY SALARY DESC LIMIT 1 OFFSET 4
);

-- 17. Write a query to find the 4th minimum salary in the employees table.

-- 18. Write a query to select last 10 records from a table.
SELECT * FROM employees ORDER BY HIRE_DATE DESC LIMIT 10;
-- or
SELECT * FROM
    (
        SELECT * FROM employees ORDER BY EMPLOYEE_ID DESC LIMIT 10
    ) emp
ORDER BY EMPLOYEE_ID DESC;

-- 19. Write a query to list the department ID and name of all the departments where no employee is working
SELECT DISTINCT DEPARTMENT_ID,
       DEPARTMENT_NAME
FROM departments
WHERE DEPARTMENT_ID NOT IN
(
    SELECT DISTINCT DEPARTMENT_ID FROM employees
);

-- 20. Write a query to get 3 maximum salaries.
SELECT DISTINCT SALARY FROM employees ORDER BY SALARY DESC LIMIT 3;

-- 21. Write a query to get 3 minimum salaries.
SELECT DISTINCT SALARY FROM employees ORDER BY SALARY LIMIT 3;

-- 22. Write a query to get nth max salaries of employees.


