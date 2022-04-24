function passwordcheck(){
    const password = document.querySelector('#password').value;
    const confirmpassword = document.querySelector('#confirmpassword').value;
    if(password != confirmpassword){
        document.getElementById("passwordwrong").classList.toggle('passwordwrongalert');

    }
    if(password == confirmpassword){
        document.getElementById("passwordwrong").classList.remove('passwordwrongalert');
    }
        
    }
