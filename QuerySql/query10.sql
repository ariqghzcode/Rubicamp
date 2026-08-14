CREATE TABLE departments (
    id INT PRIMARY KEY,
    department_name VARCHAR(50),
    manager_id INT,
    budget DECIMAL(12,2)
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    salary DECIMAL(10,2),
    department_id INT,
    hire_date DATE,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Sample data
INSERT INTO departments VALUES
(1, 'Engineering', 5, 500000.00),
(2, 'Marketing', 2, 200000.00),
(3, 'Sales', 4, 300000.00),
(4, 'Human Resources', 6, 150000.00);

INSERT INTO employees VALUES
(1, 'John', 'Doe', 'john.doe@company.com', 50000.00, 1, '2020-01-15'),
(2, 'Jane', 'Smith', 'jane.smith@company.com', 60000.00, 2, '2019-03-20'),
(3, 'Bob', 'Johnson', 'bob.johnson@company.com', 55000.00, 1, '2021-06-10'),
(4, 'Alice', 'Brown', 'alice.brown@company.com', 65000.00, 3, '2018-11-05'),
(5, 'Charlie', 'Wilson', 'charlie.wilson@company.com', 70000.00, 1, '2020-09-12'),
(6, 'Diana', 'Davis', 'diana.davis@company.com', 45000.00, 4, '2021-02-28');

SELECT 
    departments.department_name,
    COUNT(employees.id) AS total_employees,
    ROUND(AVG(employees.salary), 2) AS avg_salary,
    MIN(employees.salary) AS min_salary,
    MAX(employees.salary) AS max_salary,
    ROUND(MAX(employees.salary) - MIN(employees.salary), 2) AS salary_range
FROM departments
INNER JOIN employees ON departments.id = employees.department_id
GROUP BY departments.department_name
ORDER BY avg_salary DESC;