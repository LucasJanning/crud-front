function registerVal(){

    let valid = true;

    let name = document.getElementById("full_name").value;
    let age = document.getElementById("age").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    if(name==""){
        document.getElementById("full_name_help").hidden = false;
        document.getElementById("full_name").focus();
        valid = false;
    }else{
        document.getElementById("full_name_help").hidden = true;
    }

    if(age==""||isNaN(age)||age<1||age>120){
        document.getElementById("age_help").hidden = false;
        document.getElementById("age").focus();
        valid = false;
    }else{
        document.getElementById("age_help").hidden = true;
    }

    if(cpf.search(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)){
        document.getElementById("cpf_help").hidden = false;
        document.getElementById("cpf").focus();
        valid = false;
    }else{
        document.getElementById("cpf_help").hidden = true;
    }

    if(email.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        document.getElementById("email_help").hidden = false;
        document.getElementById("email").focus();
        valid = false;
    }else{
        document.getElementById("email_help").hidden = true;
    }

    if(address==""){
        document.getElementById("address_help").hidden = false;
        document.getElementById("address").focus();
        valid = false;
    }else{
        document.getElementById("address_help").hidden = true;
    }

    if(valid){
        register();
    }
}

function register(){
    var elements = document.getElementById("form-register").elements;
    var obj = {};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        if(item.id){
            obj[item.id] = item.value;
        }
    }
    console.log(JSON.stringify(obj));
}