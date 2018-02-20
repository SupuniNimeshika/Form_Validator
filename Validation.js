function reportErrors(errors){
    var msg = "Please Enter Valid Data...\n ";

    for(var i=0;i<errors.length;i++){
        var numErrors=i+1;
        msg+="\n"+numErrors +"."+errors[i];
    }
    alert(msg);
}

function validate(){
    var errors=[];
    var user=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var pass=document.getElementById('psw').value;
    var repas=document.getElementById('repsw').value;
    var passlength=(pass.length)+1;
    var male=document.getElementById('male').checked;
    var female=document.getElementById('female').checked;
    var ck_name=/^[A-Za-z]/
    var ck_mail=/^[a-z0-9]/
    var userlength=(user.length)+1;
    //validate username

    if(user==""){
        errors[errors.length]="You must enter a valid user";
    }
    else if(!ck_name.test(user)){
        errors[errors.length]="Username Should Contain A-Z OR a-z characters";
    }
    else if(userlength<5||userlength>16){
        errors[errors.length]="The username should contain 5-15 characters";
    }
    //validate E-mail
    if(email==""){
        errors[errors.length]="You must enter a valid email";
    }
    else if(!ck_mail.test(email)){
        errors[errors.length]="Type correct E-mail Address";
    }
    //Validate Password
    if(pass==""){
        errors[errors.length]="Password should not be empty";
    }
    else if (passlength<9){
        errors[errors.length]="Your password should at least 8 characters";
    }
    else if(pass!=repass){
        errors[errors.length]="Password not match";
    }
    // Validate Radio Button
    if((male=="")&&(female=="")){
        errors[errors.length]="Please Select your gender";
    }
    if(errors.length>0){
        reportErrors(errors);//reportErrorss function call
        return false;
    }
    return true;
}