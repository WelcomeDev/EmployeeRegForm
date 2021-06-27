window.addEventListener("load", () => {
    async function sendData(data) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://server.edu.inkode.ru/employee/v2/create");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";

        xhr.send(JSON.stringify(data));

        xhr.onloadend = (event) => {
            const resp = xhr.response;
            alert(JSON.stringify(resp));
        }
    }

    const regForm = document.getElementById("reg_form");
    regForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(regForm);
        let res = {};
        Array.from(formData.keys()).forEach((key) => {
            res[key] = formData.get(key);
        });

        sendData(res);
    });

});
