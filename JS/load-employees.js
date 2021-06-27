window.onload = (event) => {
    function extractToken(params) {
        return params.split('?')[1].split('=')[1];
    }

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    const token = extractToken(window.location.toString());
    const url = `https://server.edu.inkode.ru/employee/list?${token}`;

    xhr.onload += (event) => {
        function createTable(emps) {
            const table = document.getElementById("employees_table");
        }

        if (xhr.response != null) {
            const emps = JSON.parse(xhr.response);
            createTable(emps);
        }
    }

    xhr.open("GET", url);
    console.log(`Request ${url} sent`);
    xhr.send();
}