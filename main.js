class Usuario{
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.admin = false;
    }


     isAdmin () {
 
        console.log(this.admin);
        

    }

    setPassword(password){
        this.password = password;
    }

    setEmail(email){
        this.email = email;
    }
   
    isReturn(){
        console.log(this.getEmail);
        console.log(this.getPassword);
    }


}

class Admin extends Usuario{
    constructor(){
        super();
            this.admin = true;

       
        
    }


}

var MeuUsuario = new Usuario('email@teste.com','senha123');
document.getElementById('novouser').onclick = function(){
    
    MeuUsuario.setEmail('useremail@teste.com');
    MeuUsuario.setPassword('userpassword');
    MeuUsuario.isAdmin();
}
    



var MeuAdm =  new Admin('emailadm@teste.com','senhaadm');

document.getElementById('novoadmin').onclick = function(){

    MeuAdm.setEmail('adminteste@email.com');
    MeuAdm.setPassword('adminpassword');
    MeuAdm.isAdmin();
   
}



