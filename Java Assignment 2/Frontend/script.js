    document.addEventListener("DOMContentLoaded", function () {

        //event listeners
        const registerLink = document.getElementById('register-link');
        const loginForm = document.getElementById('login-form');
        const registrationForm = document.getElementById('registration-form');
        const registerBtn = document.getElementById('register-btn');
        const loginBtn = document.getElementById('login-btn');
        const logoutBtn = document.getElementById("logout-btn");
        const addEmployeeForm = document.getElementById("add-employee-form");
        const employeeTableBody = document.getElementById("employee-table-body");

        //edit-registration property
        if (registerLink) {
            registerLink.addEventListener('click', function () {
                loginForm.style.display = 'none';
                registrationForm.style.display = 'block';
            });
        }

        if (registerBtn) {
            registerBtn.addEventListener('click', function () {
                const email = document.getElementById('reg-email-input').value.trim();
                const name = document.getElementById('reg-name-input').value.trim();
                const password = document.getElementById('reg-password-input').value.trim();

                if (!email || !name || !password) {
                    alert("All fields required!");
                    return;
                }

                fetch("http://localhost:8080/hr", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, name, password })
                })
                .then(response => {
                    if (response.ok) {
                        alert("Registration is successful, Log in again!");
                        registrationForm.style.display = 'none';
                        loginForm.style.display = 'block';
                    } else {
                        alert("Registration failed! Email already exists");
                    }
                });
            });
        }

        if (loginBtn) {
            loginBtn.addEventListener('click', function () {
                const email = document.getElementById('email-input').value.trim();
                const password = document.getElementById('password-input').value.trim();

                fetch(`http://localhost:8080/hr/${email}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("No such HR, Register first!");
                        }
                        return response.json();
                    })
                    .then(hr => {
                        if (hr.password === password){
                            localStorage.setItem('hrEmail', hr.email);
                            window.location.href = "dashboard.html";
                        } else {
                            alert("Wrong password!");
                        }
                    });
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                localStorage.removeItem('hrEmail');
                window.location.href = "login.html";
            });
        }

        //adding employees

        if (addEmployeeForm) {
            addEmployeeForm.addEventListener("submit", function (event) {
                event.preventDefault();

                const name = document.getElementById("name").value.trim();
                const department = document.getElementById("department").value.trim();
                const email = document.getElementById("email").value.trim();
                const salary = document.getElementById("salary").value.trim();

                if (!name || !department || !email || !salary) {
                    alert("All fields required!");
                    return;
                }

                fetch("http://localhost:8080/employees", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, department, email, salary })
                })
                .then(response => response.json())
                .then(() => {
                    alert("Employee added!");
                    fetchEmployees();
                });
            });
        }

        //get employees

        function fetchEmployees() {
            fetch("http://localhost:8080/employees")
                .then(response => response.json())
                .then(data => {
                    employeeTableBody.innerHTML = "";
                    data.forEach(employee => {
                        const row = `
                            <tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.department}</td>
                                <td>${employee.email}</td>
                                <td>${employee.salary}</td>
                                <td>
                                    <button onclick="editEmployee(${employee.id})">Edit</button>
                                    <button onclick="deleteEmployee(${employee.id})">Delete</button>
                                </td>
                            </tr>
                        `;
                        employeeTableBody.innerHTML += row;
                    });
                });
        }

        //employee deletion
        window.deleteEmployee = function (id) {
            fetch(`http://localhost:8080/employees/${id}`, {
                method: "DELETE"
            }).then(response => {
                if (response.ok) {
                    alert("Employee deleted!");
                    fetchEmployees();
                }
            });
        };


        //edit employee (using prompt-inputs)
        window.editEmployee = function (id) {
            const name = prompt("Enter new name:");
            const department = prompt("Enter new department:");
            const email = prompt("Enter new email:");
            const salary = prompt("Enter new salary:");

            if (name && department && email && salary) {
                fetch(`http://localhost:8080/employees/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, department, email, salary })
                }).then(response => {
                    if (response.ok) {
                        alert("Employee updated!");
                        fetchEmployees();
                    }
                });
            }
        };

        

        if (document.getElementById("employee-table-body")) {
            fetchEmployees();
        }

        if (localStorage.getItem('hrEmail')) {
            const email = localStorage.getItem('hrEmail');
            const dashboardWelcome = document.createElement('h3');

            //welcome message align
            dashboardWelcome.textContent = `Welcome ${email}`;
            dashboardWelcome.style.textAlign = 'left';
            dashboardWelcome.style.color = '#001e4d';
            document.querySelector('.dashboard').prepend(dashboardWelcome);
        }
    });
