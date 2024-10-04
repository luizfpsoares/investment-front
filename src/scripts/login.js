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
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(update),
            };

            sendData(options);

            async function sendData(options) {
                try {
                    const response = await fetch('http://172.20.15.5:8080/api/v1/login', options);
                    console.log(await response.json());

                    if (response.ok) {
                        window.location.href = './app/index.html';
                    } else {
                        alert("Erro ao fazer login.");
                    }

                } catch (e) {
                    console.error(e);
                    alert.error(e)
                    alert("Ocorreu um erro. Tente novamente.")
                }
            }
        });