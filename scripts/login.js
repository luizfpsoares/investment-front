const form = document.querySelector("#login-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const update = {
                cpf: document.querySelector('#cpf').value,
                password: document.querySelector('#password').value,
            };

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json',
                },
                body: JSON.stringify(update),
            };

            sendData(options);

            async function sendData(options) {
                try {
                    const response = await fetch('http://localhost:8080/api/v1/login', options);
                    console.log(await response.json());
                } catch (e) {
                    console.error(e);
                }
            }
        });