function Login() {
    let inputUser = document.getElementsByClassName('loginJS')[0];
    let inputPassword = document.getElementsByClassName('passwordJS')[0];

    if (inputUser.value.length === 0 || inputPassword.value.length === 0) {
        window.alert('[ERRO] Bote uma informação Possivel');
        
    } else {
        const Credenciais = {
            username: inputUser.value,
            password: inputPassword.value
        }

        fetch('http://localhost:3000/login', {
            method: 'POST' ,
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Credenciais)
        })


        .then(response => {
            if(response.redirected){
                window.location.href = response.url;
            }else{
                return response.json()
            }
        })
        
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Erro:', error, error.response ? error.response.data : ''));
        }
    }

