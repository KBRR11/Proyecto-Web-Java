$(document).ready(function(){
    alert('soy jquery');
});

function validar(){
    var user = $('#user').val();
    var pass = $('#pass').val();
    if(user == "ana" && pass=="123"){
    alert('Bienvenido: '+user);
    }else{
        alert("ERROR..!!!")
    }
}
