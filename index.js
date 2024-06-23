function onChangeEmail() {
    toggleButtonDisable();
    RetornarEmailError();
}
function onChangePassword() {
    toggleButtonDisable();
    togglePasswordErrors();
}
function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}
//Verifica
function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

function login(){
    //Autenticação do Usuario no firebase
 // console.log('antes');
  firebase.auth().signInWithEmailAndPassword
  (form.email().value, form.password().value).then(response => {
     window.location .href = "pages/home/home.html"
  }).catch(error => {
     alert("Login ou Senha Incorreta")
  });
  console.log('depois')
   
}

function register(){
    window.location .href = "pages/register/register.html"
}
//Verifica se o Usuario digitou o Email
function RetornarEmailError(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalid().style.display= validateEmail(email) ? "none" : "block";

    }

//Habilita o Botão caso o Usuario informe o email valido
function toggleButtonDisable(){
    const emailValid = isEmailValid();
   form.recoveryPassword.disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginbutton().disabled =
        !emailValid || !passwordValid;
}
//Informa o Usuario que a senha é obrigatoria
function togglePasswordErrors() {
    const password = document.getElementById('password').value;
    form.passwordError().style.display = password ? "none" : "block";

}

const form = {
    email: () =>document.getElementById('email'),
    password: () => document.getElementById('password'),
    passwordError: () => document.getElementById('password-error'),
    emailInvalid: () => document.getElementById('email-error-invalid'),
    loginbutton: () => document.getElementById('login-button'),
    emailRequiredError: () => document.getElementById('email-error'),
    recoveryPassword: () => documen.getElementById('recover-password-button')
    

}

