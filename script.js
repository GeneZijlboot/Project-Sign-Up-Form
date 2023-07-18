function CheckPassword(){
    let Password = document.getElementById("Password");
    let ConfirmPassword = document.getElementById("ConfirmPassword");
    console.log(Password.value, ConfirmPassword.value);

    if(Password.value === ConfirmPassword.value){
        location.reload(); //refreshes the page when everything is correcty filled in
    }else{
        document.getElementById("Password").style.backgroundColor="red";
        document.getElementById("ConfirmPassword").style.backgroundColor="red";
    }
}