function validarLogin(){
    const apiUrl = "http://localhost:3000/login"
    const user = document.getElementById("username");
    const pass = document.getElementById("password");
    const headers = {'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            username: user.value,
            password: pass.value
        }),
        headers: headers
    };

    fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            sessionStorage.setItem("token", data.access_token);
            alert(data.mensagem)
            window.location = "file:///C:/Users/vitor/Downloads/atividade-20240413T175301Z-001/atividade/pagina01.html"
        })
        .catch((error) => {
            // DOMException: The user aborted a request.
            alert("Ops! Ocorreu algum erro tente mais tarde")
          })
}

function show() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
      x.type = "password";
      document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }

