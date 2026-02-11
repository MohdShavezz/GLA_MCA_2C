use db_grp_c;
show tables;
select * from users;
desc users;
insert into users (name,age,email) values
('raj',23,'raj@gmail.com'),
('shail',24,'s@gmail.com'),
('manish',21,'m@gmail.com');
select avg(age) from users;

select COUNT(*) from users;

select count(distinct(name)) from users;

select concat(name, ' ' ,email) as merge from users 
order by age desc 
limit 1

CREATE TABLE departments (
    dept_id INT PRIMARY KEY, 
    dept_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    salary DECIMAL(10,2),
    dept_id INT,
    email VARCHAR(100) UNIQUE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
desc departments;
desc employees;

INSERT INTO departments VALUES
(1, 'HR'),
(2, 'Engineering'),
(3, 'Sales');

INSERT INTO employees VALUES
(101, 'Aman', 25, 40000, 2, 'aman@mail.com'),
(102, 'Riya', 28, 50000, 2, 'riya@mail.com'),
(103, 'Karan', 35, 60000, 1, 'karan@mail.com'),
(104, 'Sneha', 30, 45000, 3, 'sneha@mail.com'),
(105, 'Rohit', 26, 38000, NULL, 'rohit@mail.com');

select * from departments;
select * from employees;

select employees.emp_name, employees.age, employees.salary, departments.dept_name 
from employees join departments
on employees.dept_id = departments.dept_id;

select e.emp_name, e.age, e.salary, d.dept_name 
from employees e inner join departments d
on e.dept_id = d.dept_id;