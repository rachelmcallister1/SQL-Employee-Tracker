INSERT INTO department (name)
-- names of diff. departments 
VALUES ("Brand Strategy"),
       ("Legal");
    

INSERT INTO role (title, salary, department_id)
VALUES ("Assistant Manager",60000, 1),
       ("Counsel", 80000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "McAllister", 1, NULL),
        ("Rachel", "Konadu", 2, 1);

--  //add more   

