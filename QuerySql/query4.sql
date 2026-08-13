CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    salary DECIMAL(10,2),
    department VARCHAR(50),
    hire_date DATE
);

-- Sample data
INSERT INTO employees VALUES
(1, 'John', 'Doe', 'john.doe@company.com', 50000.00, 'Engineering', '2020-01-15'),
(2, 'Jane', 'Smith', 'jane.smith@company.com', 60000.00, 'Marketing', '2019-03-20'),
(3, 'Bob', 'Johnson', 'bob.johnson@company.com', 55000.00, 'Engineering', '2021-06-10'),
(4, 'Alice', 'Brown', 'alice.brown@company.com', 65000.00, 'Sales', '2018-11-05'),
(5, 'Charlie', 'Wilson', 'charlie.wilson@company.com', 70000.00, 'Engineering', '2020-09-12');