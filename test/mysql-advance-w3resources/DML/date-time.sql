-- 1. Write a query to display the first day of the month (in datetime format) three months before the current month
SELECT DATE(PERIOD_ADD(EXTRACT(YEAR_MONTH FROM CURRENT_DATE), -3) * 100 + 1);

-- 2. Write a query to display the last day of the month (in datetime format) three months before the current month
SELECT LAST_DAY(DATE(PERIOD_ADD(EXTRACT(YEAR_MONTH FROM CURRENT_DATE), -3) * 100 + 1));

-- 3. Write a query to get the distinct Mondays from hire_date in employees tables

-- 4. Write a query to get the first day of the current year.

-- 5. Write a query to get the last day of the current year.

-- 6. Write a query to calculate the age in year.

-- 7. Write a query to get the current date in the following format.

-- 8. Write a query to get the current date in Thursday September 2014 format

-- 9. Write a query to extract the year from the current date.

-- 10. Write a query to get the DATE value from a given day (number in N).

-- 11. Write a query to get the first name and hire date from employees table where hire date between '1987-06-01' and '1987-07-30'

-- 12. Write a query to display the current date in the following format

-- 13. Write a query to display the current date in the following format.

-- 14. Write a query to display the current date in the following format.

-- 15. Write a query to get the firstname, lastname who joined in the month of June

-- 16. Write a query to get the years in which more than 10 employees joined.

-- 17. Write a query to get first name of employees who joined in 1987.

-- 18. Write a query to get department name, manager name, and salary of the manager for all managers whose experience is more than 5 years

-- 19. Write a query to get employee ID, last name, and date of first salary of the employees

-- 20. Write a query to get first name, hire date and experience of the employees.

-- 21. Write a query to get the department ID, year, and number of employees joined


