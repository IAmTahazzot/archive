/*
What you will learn:

  1. Creating store procedure
  2. How to use/ call it
  3. Procedure with parameter
     - In
     - Out
     - InOut

  4. Declaring variables
  5. Conditional statement
  6. LOOP
  7. Cursor

 */

-- 1. Creating procedure
DELIMITER //
CREATE PROCEDURE select_post_home()
BEGIN
    SELECT EMPLOYEE_ID,
           FIRST_NAME,
           LAST_NAME,
           SALARY
    FROM employees
    WHERE SALARY > (SELECT AVG(SALARY)
                    FROM employees);
END //
DELIMITER ;

-- 2. Call/ Invoke/ Use
CALL getTopPaidEmp();
-- CALL Procedure_Name([arguments])

-- 3. Passing & getting values
DELIMITER $$
CREATE PROCEDURE promotion(IN promotion_value DECIMAL, OUT data VARCHAR(255))
BEGIN
    SET @percentage = promotion_value / 100;
    SELECT EMPLOYEE_ID,
           FIRST_NAME,
           LAST_NAME,
           ROUND(SALARY + (SALARY * @percentage), 2) 'new salary'
    FROM employees
    GROUP BY FIRST_NAME, LAST_NAME, EMPLOYEE_ID
    ORDER BY 'new salary' DESC
    LIMIT 50;

    -- return the highest paid employee
    SELECT EMPLOYEE_ID INTO data FROM employees ORDER BY SALARY DESC LIMIT 1;
END $$
DELIMITER ;


-- INOUT
DELIMITER $$
CREATE PROCEDURE getEmpSalary(INOUT emp_info INT)
BEGIN
    SELECT SALARY
    INTO emp_info
    FROM employees
    WHERE EMPLOYEE_ID = emp_info;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE SetCounter(
    INOUT counter INT,
    IN inc INT
)
BEGIN
    SET counter = counter + inc;
END$$
DELIMITER ;


-- 4. Declaring variables
DELIMITER $$
CREATE PROCEDURE getTopPaidEmp()
BEGIN
    DECLARE emp_id INT;
    SET emp_id = 100;
    SELECT FIRST_NAME, LAST_NAME
    FROM employees
    WHERE EMPLOYEE_ID = emp_id;
END $$
DELIMITER ;

-- 5. Conditions
DELIMITER $$
CREATE PROCEDURE employeeStatus(
    IN user_id INT,
    OUT status VARCHAR(25)
)
BEGIN
    SET @user_salary = 0;
    SELECT SALARY
    INTO @user_salary
    FROM employees
    WHERE EMPLOYEE_ID = user_id;

    IF @user_salary > 10000 THEN
        SET status = 'Premium Employee';
    ELSE
        SET status = 'Basic Employee';
    END IF;
END $$
DELIMITER ;


-- 6. Loop
DELIMITER //
CREATE PROCEDURE justTest(
    OUT while_data VARCHAR(25),
    OUT repeat_data VARCHAR(255)
)
BEGIN
    SET @counter = 0;

    -- While loop
    SET @while_data_temp = '';
    WHILE @counter <= 5
        DO
            SET @while_data_temp = CONCAT(@while_data_temp, ' ', @counter);
            SET @counter = @counter + 1;
        END WHILE;
    SELECT @while_data_temp INTO while_data;

    -- Reset counter
    SET @counter = 0;

    -- Repeat Loop
    SET @name = '';
    SET @temp_repeat_data = '';
    REPEAT
        SET @counter = @counter + 1;
        SELECT FIRST_NAME
        INTO @name
        FROM employees
        WHERE EMPLOYEE_ID = 100 + @counter;

        -- Concat the name
        SET @temp_repeat_data = CONCAT(@temp_repeat_data, ' ', @name);
    UNTIL @counter >= 10
        END REPEAT;
    SELECT @temp_repeat_data INTO repeat_data;

    -- reset counter
    SET @counter = 0;

    -- LOOP
    label1:
    LOOP
        set @counter = @counter + 1;
        SELECT CONCAT('Loop number: ', @counter);

        if @counter <= 10 then
            iterate label1;
        else
            leave label1;
        end if;
    end loop;
END //
DELIMITER ;

DROP PROCEDURE justTest;


DELIMITER $$
CREATE PROCEDURE bestEmployees()
BEGIN

    # declare important variables
    DECLARE is_done INT DEFAULT 0;
    DECLARE emp_id VARCHAR (20) DEFAULT '';

    # declare cursor
    DECLARE emp_list CURSOR FOR SELECT EMPLOYEE_ID FROM employees
        ORDER BY SALARY DESC LIMIT 5;

    # declare handler
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET is_done = 1;

    # open the cursor
    OPEN emp_list;
END $$






SELECT * FROM employee






