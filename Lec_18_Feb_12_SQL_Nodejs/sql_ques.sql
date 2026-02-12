use db_grp_c;
show tables;
desc users;
select * from users;
select * from departments;
select * from employees;

-- avg salary of emp in each dept.
select avg(salary) as avg_salary from employees
group by dept_id
having avg_salary>50000;
-- Employee names whose salaries are above than average salary of employee.
select emp_name,salary from employees 
where salary>(select avg(salary) from employees);
-- Second highest salary
select salary from employees where
salary<(select max(salary) from employees) 
order by salary desc limit 1;