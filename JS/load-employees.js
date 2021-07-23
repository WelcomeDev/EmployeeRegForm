window.onload = (event) => {
    function extractToken(params) {
        return params.split('?')[1].split('=')[1];
    }

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    const token = extractToken(window.location.toString());
    const url = `https://server.edu.inkode.ru/employee/list?tokenId=${token}`;

    xhr.onload = (event) => {
        function createTable(emps) {
            function createColumn(obj, key){
                let col = document.createElement("td");
                if(key in obj){
                    col.innerText = obj[key];
                }

                return col;
            }
            const table = document.getElementById("employees_table");
            emps.forEach((emp, index) => {
                console.log(`Current emp is ${JSON.stringify(emp)}`);
                if('email' in emp){
                    let row = document.createElement("tr");

                    let email = createColumn(emp, 'email');
                    let fullName =  createColumn(emp, 'fullName');
                    let gender = createColumn(emp,'gender');
                    let phone = createColumn(emp,"phone");
                    let salary = createColumn(emp, 'salary');
                    let url = createColumn(emp, 'profileUrl');
                    let comm = createColumn(emp, 'comment');

                    row.appendChild(email);
                    row.appendChild(fullName);
                    row.appendChild(gender);
                    row.appendChild(phone);
                    row.appendChild(salary);
                    row.appendChild(url);
                    row.appendChild(comm);

                    table.appendChild(row);
                }

            });
        }

        if (xhr.response != null) {
            createTable(xhr.response);
        }
    }

    xhr.open("GET", url);
    console.log(`Request ${url} sent`);
    xhr.send();
}