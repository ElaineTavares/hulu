let btnEye = document.querySelector('.fa-eye');
let inputSenha = document.querySelector('.senha');




//AO CLICAR NO OLHINHO
btnEye.addEventListener('click', () =>{//INCLUÍ EVENTO DE CLICK NO BOTAO DO OLHINHO
   if(inputSenha.getAttribute('type') == 'password'){//PEGAR O ATRIBUTO TYPE DO INPUT SENHA E SE O ATRIBUTO FOR PASSWORD
    inputSenha.setAttribute('type', 'text')  //COLOCAR O ATRIBUTO DO TIPO TEXTO
    btnEye.classList.add('fa-eye-slash')
   } else{
    inputSenha.setAttribute('type', 'password') //SE NÃO COLOCAR O ATRIBUTO DO TIPO PASSWORD
    btnEye.classList.remove('fa-eye-slash')
    btnEye.classList.add('fa-eye')
   }
})
//FIM AO CLICAR NO OLHINHO


//APAGAR OS CAMPOS AO ATUALIZAR A PÁGINA
function recarregar(){
   email.value = ''
   senha.value = ''
}
//FIM APAGAR OS CAMPOS AO ATUALIZAR A PÁGINA


//TIRAR A MENSAGEM DE ERRO AO DAR FOCO EM ALGUM DOS INPUTS
email.addEventListener('focus', ()=>{
   msgError.setAttribute('style', 'display: none')
})

senha.addEventListener('focus', ()=>{
   msgError.setAttribute('style', 'display: none')
})
//FIM TIRAR A MENSAGEM DE ERRO AO DAR FOCO EM ALGUM DOS INPUTS



//AO CLICAR O BOTÃO DE ENTRAR
function entrar(){
   let email = document.querySelector('#email');
   let labelEmail = document.querySelector('#labelEmail');

   let senha = document.querySelector('#senha');
   let labelSenha = document.querySelector('#labelSenha');

   let msgError = document.querySelector('#msgError');
   let msgSuccess = document.querySelector('#msgSuccess')

   let listUser = [];

   let userValid = {
   email: '',
   senha: ''
}

listUser = JSON.parse(localStorage.getItem('listUser'))
// console.log(listUser)
listUser.forEach((item)=>{
   if(email.value == item.emailCad && senha.value == item.senhaCad){
      userValid = {
         email: item.emailCad,
         senha: item.senhaCad
      }
   }   
})
// console.log(userValid)
if(email.value == userValid.email && senha.value == userValid.senha){
   msgSuccess.setAttribute('style', 'display:block')
   setTimeout(()=>{
      window.location.href = './logado.html' //IR PARA LOGADO EM 3 SEGUNDOS
  }, 3000)
} else {
   email.focus()
   email.value = ''
   senha.value = ''
   msgError.setAttribute('style', 'display:block')
   
}
}
 






