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

   SELECT first_name, last_name, salary, department_name
   FROM employees
   INNER JOIN departments ON employees.department_id = departments.id;
╭────────────┬───────────┬────────┬─────────────────╮
│ first_name │ last_name │ salary │ department_name │
╞════════════╪═══════════╪════════╪═════════════════╡
│ John       │ Doe       │  50000 │ Engineering     │
│ Jane       │ Smith     │  60000 │ Marketing       │
│ Bob        │ Johnson   │  55000 │ Engineering     │
│ Alice      │ Brown     │  65000 │ Sales           │
│ Charlie    │ Wilson    │  70000 │ Engineering     │
│ Diana      │ Davis     │  45000 │ Human Resources │
╰────────────┴───────────┴────────┴─────────────────╯