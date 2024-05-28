-- 1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. Go to the editor
SELECT LOCATION_ID,
       STREET_ADDRESS,
       CITY,
       STATE_PROVINCE,
       COUNTRY_NAME
FROM locations
         JOIN countries c on locations.COUNTRY_ID = c.COUNTRY_ID;

-- 2. Write a query to find the name (first_name, last name), department ID and name of all the employees.
SELECT FIRST_NAME,
       LAST_NAME,
       employees.DEPARTMENT_ID,
       DEPARTMENT_NAME
FROM employees
         JOIN departments d on employees.DEPARTMENT_ID = d.DEPARTMENT_ID;

-- oR
SELECT FIRST_NAME,
       LAST_NAME,
       employees.DEPARTMENT_ID,
       DEPARTMENT_NAME
FROM employees
         JOIN departments USING (DEPARTMENT_ID);


-- 3. Write a query to find the name (first_name, last_name), job, department ID and name of the employees who works in London.
SELECT FIRST_NAME,
       LAST_NAME,
       JOB_TITLE,
       d.DEPARTMENT_ID,
       DEPARTMENT_NAME
FROM employees
         JOIN jobs j on employees.JOB_ID = j.JOB_ID
         JOIN departments d on employees.DEPARTMENT_ID = d.DEPARTMENT_ID
         JOIN locations l on d.LOCATION_ID = l.LOCATION_ID
WHERE CITY = 'London';

-- 4. Write a query to find the employee id, name (last_name) along with their manager_id and name (last_name).
SELECT e.EMPLOYEE_ID,
       e.LAST_NAME 'Employee Last Name',
       e.MANAGER_ID,
       m.LAST_NAME 'Manager Last Name'
FROM employees e
         JOIN employees m ON e.MANAGER_ID = m.EMPLOYEE_ID;

-- 5. Write a query to find the name (first_name, last_name) and hire date of the employees who was hired after 'Jones'.
SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) 'Name',
       e.HIRE_DATE
FROM employees e
         JOIN employees emp ON emp.LAST_NAME = 'Jones'
WHERE e.HIRE_DATE > emp.HIRE_DATE;

-- 6. Write a query to get the department name and number of employees in the department.
SELECT DEPARTMENT_NAME,
       COUNT(*)
FROM employees
         JOIN departments d on employees.DEPARTMENT_ID = d.DEPARTMENT_ID
GROUP BY employees.DEPARTMENT_ID;

-- 7. Write a query to find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90.
SELECT EMPLOYEE_ID,
       JOB_TITLE,
       CONCAT(TIMESTAMPDIFF(DAY, START_DATE, END_DATE), ' Days') 'Days'
FROM job_history
         JOIN jobs j on job_history.JOB_ID = j.JOB_ID
WHERE DEPARTMENT_ID = 90;

-- 8. Write a query to display the department ID and name and first name of manager.
SELECT d.DEPARTMENT_ID,
       d.DEPARTMENT_NAME,
       e.FIRST_NAME
FROM departments d
         JOIN employees e on d.MANAGER_ID = e.EMPLOYEE_ID;

-- 9. Write a query to display the department name, manager name, and city
SELECT DEPARTMENT_NAME,
       CONCAT(manager.FIRST_NAME, ' ', manager.LAST_NAME) 'Manager Name',
       CITY
FROM departments
         JOIN employees manager ON departments.MANAGER_ID = manager.EMPLOYEE_ID
         JOIN locations l on departments.LOCATION_ID = l.LOCATION_ID;

-- 10. Write a query to display the job title and average salary of employees.
SELECT JOB_TITLE,
       AVG(SALARY)
FROM employees
         JOIN jobs j on employees.JOB_ID = j.JOB_ID
GROUP BY JOB_TITLE;

-- 11. Write a query to display job title, employee name, and the difference between salary of the employee and minimum salary for the job.
SELECT JOB_TITLE,
       CONCAT(FIRST_NAME, ' ', LAST_NAME) 'Name',
       SALARY - jobs.MIN_SALARY           'Difference'
FROM jobs
         JOIN employees e on jobs.JOB_ID = e.JOB_ID;


-- 12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary.
SELECT job_history.*
FROM job_history
         JOIN employees e on e.EMPLOYEE_ID = job_history.EMPLOYEE_ID
WHERE e.SALARY > 10000;

-- 13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.
SELECT FIRST_NAME,
       LAST_NAME,
       DEPARTMENT_NAME,
       HIRE_DATE,
       SALARY,
       DATEDIFF(NOW(), HIRE_DATE)/365 'Year'
FROM departments
JOIN employees e on departments.MANAGER_ID = e.EMPLOYEE_ID
WHERE DATEDIFF(NOW(), HIRE_DATE)/365 > 15;

