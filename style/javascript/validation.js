let email = document.querySelector("#email")
let password = document.querySelector("#password")
let fullname = document.querySelector("#fullname")
let male = document.querySelector("#male")
let female = document.querySelector("#female")
let city = document.querySelector("#city")
let confirmPassword = document.querySelector("#confirm-password")

const isCapital = (char) => {
    return (
        (char >= 'A' && char <= 'Z')
    )
}

const isNumber = (char) => {
    return (
        (char >= '0' && char <= '9')
    )
}

const capital = (str) => {
    for (i = 0; i < str.length; i++) {
        if (isCapital(str[i])) {
            return true
        }
    }
    return false
}

const num = (str) => {
    for (i = 0; i<str.length;i++){
        if(isNumber(str[i])){
            return true
        }
    }
    return false
}

const validasiLogin = () => {
    if (email.value == "") {
        alert("Email harus diisi")
        return false
    }
    if (password.value == "") {
        alert("Password harus diisi")
        return false
    }
    return true
}

const validasiRegister = () => {
    if (fullname.value == "") {
        alert("Fullname harus diisi")
        return false
    }
    if (email.value == "") {
        alert("Email harus diisi")
        return false
    }
    else if (email.value.split("@").length > 2 || email.value.split("@").length == 1) {
        alert("Email wajib memiliki satu @")
        return false
    }
    else if (!email.value.split("@")[1].includes(".")) {
        alert("Email wajib memiliki . setelah @")
        return false
    }
    if (male.checked == false && female.checked == false) {
        alert("Gender harus dipilih")
        return false
    }
    if (city.value == "") {
        alert("City harus dipilih")
        return false
    }
    if (password.value == "") {
        alert("Password harus diisi")
        return false
    }
    else if (password.value.length < 8) {
        alert("Password minimal 8 karakter")
        return false
    }
    else if (!capital(password.value)) {
        alert("Password minimal memiliki 1 huruf kapital")
        return false
    }
    else if (!num(password.value)) {
        alert("Password minimal memiliki 1 angka")
        return false
    }
    if (confirmPassword.value == "") {
        alert("Confirm Password harus diisi")
        return false
    }
    else if(confirmPassword.value !== password.value)
    {
        alert("Confirm Password harus sama dengan Password")
        return false
    }
    return true
}