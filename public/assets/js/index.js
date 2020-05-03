function id(id) {
    return document.getElementById(id);
}

function name(name) {
    return document.getElementsByName(name);
}

function minMax(idDiv) {
    let displayDiv = id(idDiv);
    if (displayDiv.style.display == "flex" || displayDiv.style.display == "") {
        return displayDiv.style.display = "none"
    }
    else {
        return displayDiv.style.display = "flex"
    }
}

function verPassword(){
    let password = id("password");
    if(password.type == 'password'){
        password.type = 'text';
    }
    else{
        password.type = 'password';
    }
}