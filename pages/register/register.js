function onChangeEmail (){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display= validateEmail(email) ? "none" :
 "block"
 habilitarBotaoRegistro();
}

function onChangePassword(){
    const password = form.password().value;
    form.requiredPassword().style.display = password ? "none" : "block";

    form.minimumPassword().style.display = password.length >= 6 ? "none" : "block";
    validadePassword();
    habilitarBotaoRegistro();
}

function onChangeConfirmPassword() {
   validadePassword();
   habilitarBotaoRegistro();

}

function validadePassword(){
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form. senhaDiferente().style.display = password == confirmPassword ? "none" : "block"
}

function habilitarBotaoRegistro(){
    form.validarRegistro().disabled = !isFormValid();
}
function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
        return false;
    }

    return true;
}

    const form = {
        confirmPassword:() =>document.getElementById('confirmPassword'),
        senhaDiferente:() =>document.getElementById('password-nao-igual'),
        email: ()=> document.getElementById('email'),
        emailInvalidError: ()=> document.getElementById("email-invalid-error"),
        emailRequiredError: ()=> document.getElementById('email-required-error'),
        password: ()=> document.getElementById('password'),
        requiredPassword:() => document.getElementById('password-required'),
        minimumPassword:() => document.getElementById('password-6-minimo'),
        validarRegistro: () => document.getElementById('validateRegister')
    }