let loginCheck = () => {
    let login = document.querySelector("#login").value;
    return login.length >= 1 && login.length <= 50;
}

let passCheck = () => {
    let pass = document.querySelector("#pass").value;
    return pass.length >= 5 && pass.length <= 50;
}

let matchPassCheck = () => {
    let pass = document.querySelector("#pass").value;
    let pass2 = document.querySelector("#matchPass").value;
    return pass === pass2
}

document.querySelector("#login").addEventListener("focus", () => {
    document.querySelector(".loginCheck").style.display = 'none';
    document.querySelector(".login-form").style.borderColor = "grey";
})
document.querySelector("#pass").addEventListener("focus", () => {
    document.querySelector(".passCheck").style.display = 'none';
    document.querySelector(".login-form").style.borderColor = "grey";
})
document.querySelector("#matchPass").addEventListener("focus", () => {
    document.querySelector(".matchPassCheck").style.display = 'none';
    document.querySelector(".login-form").style.borderColor = "grey";
})


document.querySelector(".btn-send").addEventListener("click", () => {
    // Проверка логин
    if (!loginCheck()) {
        document.querySelector(".loginCheck").style.display = 'block'
        document.querySelector(".loginCheck").innerText = "Логин должен быть от 1 до 50 знаков"
        document.querySelector(".login-form").style.borderColor = "red";
    }
    // Проверка пароля
    if (!passCheck()) {
        document.querySelector(".passCheck").style.display = 'block'
        document.querySelector(".passCheck").innerText = "Пароль должен быть от 5 до 50 знаков"
        document.querySelector(".login-form").style.borderColor = "red";
    }
    // Проверка совпадения пароля
    if (!matchPassCheck()) {
        document.querySelector(".matchPassCheck").style.display = 'block'
        document.querySelector(".matchPassCheck").innerText = "Пароли не совпадают"
        document.querySelector(".login-form").style.borderColor = "red";
    }
    // Если все проверки прошли успешно
    if (loginCheck() && passCheck() && matchPassCheck()) {
        document.querySelector(".login-form").style.borderColor = "MediumSeaGreen";
    }
})