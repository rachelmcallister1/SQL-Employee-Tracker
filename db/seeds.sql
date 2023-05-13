INSERT INTO department (name)
-- names of diff. departments 
VALUES ("Brand Strategy"),
       ("Legal"),
       ("Sales"),
       ("Finance");
    

INSERT INTO role (title, salary, department_id)
VALUES ("Assistant Manager",60000, 1),
       ("Counsel", 80000, 2),
       ("Salesperson", 65000, 3),
       ("Account Manager", 55000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Chan", 1, NULL),
        ("Brooke", "Davis", 2, 1),
        ("Peyton", "Sawyer", 3, NULL),
        ("Taylor", "Scott", 4,3 );

 

