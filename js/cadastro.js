let btnEye = document.querySelector('.fa-eye');
let inputSenha = document.querySelector('.senha');
let btnEyeConfirm = document.querySelector('.eye2')
let inputConfirmarSenha = document.querySelector('.confirmar-senha');


let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');


let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');


let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let btnCadastrar = document.querySelector('#btnCadastrar');

let containerEmail = document.querySelector('#containerEmail')
let containerSenha = document.querySelector('#containerSenha')
let containerConfirmarSenha = document.querySelector('#containerConfirmarSenha')

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


//APAGAR OS CAMPOS AO ATUALIZAR A PÁGINA
function recarregar(){
    email.value = ''
    senha.value = ''
    confirmarSenha.value = ''
}
//FIM APAGAR OS CAMPOS AO ATUALIZAR A PÁGINA


//BOTÃO DO OLHINHO PRA MOSTRAR E ESCONDER SENHA
btnEye.addEventListener('click', () =>{ //INCLUÍ EVENTO DE CLICK NO BOTAO DO OLHINHO
    if(inputSenha.getAttribute('type') == 'password'){ //PEGAR O ATRIBUTO TYPE DO INPUT SENHA E SE O ATRIBUTO FOR PASSWORD
        inputSenha.setAttribute('type', 'text') //COLOCAR O ATRIBUTO DO TIPO TEXTO
        btnEye.classList.add('fa-eye-slash') //COLOCAR CLASSE
    } else{
        inputSenha.setAttribute('type', 'password') //SE NÃO COLOCAR O ATRIBUTO DO TIPO PASSWORD
        btnEye.classList.remove('fa-eye-slash') //REMOVER CLASSE
        btnEye.classList.add('fa-eye') //COLOCAR CLASSE
    }
})

btnEyeConfirm.addEventListener('click', () =>{
    if(inputConfirmarSenha.getAttribute('type') == 'password'){
        inputConfirmarSenha.setAttribute('type', 'text')
        btnEyeConfirm.classList.add('fa-eye-slash')
    } else {
        inputConfirmarSenha.setAttribute('type', 'password')
        btnEyeConfirm.classList.remove('fa-eye-slash')
        btnEyeConfirm.classList.add('fa-eye')
    }
})
//FIM BOTÃO DO OLHINHO PRA MOSTAR E ESCONDER SENHA


//VALIDAÇÃO DO INPUT EMAIL
//FUNÇÃO REGEX ESTABELECENDO OS PARAMETROS VÁLIDOS PARA EMAIL
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true
    } else{
        return false
    }

  } 

email.addEventListener('keyup', ()=>{
    if(email.value === '' || !isEmailValid(email.value)){
        labelEmail.setAttribute('style', 'color: red') 
        email.setAttribute('style', 'border-bottom: 2px solid red;') 
        labelEmail.innerHTML = 'Email: *Digite um e-mail válido' 
        containerEmail = false
    } else{
        labelEmail.setAttribute('style', 'color:green')
        email.setAttribute('style', 'border-bottom: 2px solid green;')
        labelEmail.innerHTML = 'E-mail:'  
        containerEmail = true  
    }
})
//FIM VALIDAÇÃO DO INPUT EMAIL


//VALIDAÇÃO DO INPUT SENHA
senha.addEventListener('keyup', ()=>{ 
    if(senha.value.length <=5){ 
        labelSenha.setAttribute('style', 'color: red') 
        senha.setAttribute('style', 'border-bottom: 2px solid red;') 
        labelSenha.innerHTML = 'Senha: *Insira no mínimo 6 caracteres' 
        containerSenha = false
  
    } else{
        labelSenha.setAttribute('style', 'color:green')
        senha.setAttribute('style', 'border-bottom: 2px solid green;')
        labelSenha.innerHTML = 'Senha:'
        containerSenha = true
 
     
    }
})
//FIM VALIDAÇÃO DO INPUT SENHA


//VALIDAÇÃO DO INPUT CONFIRMAR SENHA
confirmarSenha.addEventListener('keyup', ()=>{ 
    if(confirmarSenha.value != senha.value){ 
        labelConfirmarSenha.setAttribute('style', 'color: red') 
        confirmarSenha.setAttribute('style', 'border-bottom: 2px solid red;') 
        labelConfirmarSenha.innerHTML = ('Confirmar senha: *As senhas não conferem')
        containerConfirmarSenha = false
    } else{
        labelConfirmarSenha.setAttribute('style', 'color:green')
        confirmarSenha.setAttribute('style', 'border-bottom: 2px solid green;')
        labelConfirmarSenha.innerHTML = 'Confirmar senha:'
        containerConfirmarSenha = true
    }
})
//FIM VALIDAÇÃO DO INPUT CONFIRMAR SENHA


//AO CLICAR BOTÃO DE CADASTRAR
btnCadastrar.addEventListener('click', () =>{
    if(containerEmail == true && containerSenha == true && containerConfirmarSenha == true){
        msgSuccess.setAttribute('style', 'display: block')
        msgError.setAttribute('style', 'display: none')

        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]') //ADICIONAR O CONTEÚDO DA LISTUSER NELA PRÓPRIA OU SE NÃO TIVER NADA NELA, CRIAR APENAS UM ARRAY VAZIO

        listUser.push( //ADICIONANDO UM OBJETO NA LISTUSER. O OBJETO É A JUNÇÃO DE CADA CAMPO DA TELA DE CADASTRO
            {
                emailCad: email.value,
                senhaCad: senha.value,
            }
        ) 
        localStorage.setItem('listUser', JSON.stringify(listUser))//GUARDAR A LISTUSER COM O OBJETO NO LOCALSTORAGE
        setTimeout(()=>{
            window.location.href = './login.html' //IR PARA PÁGINA DE LOGIN APÓS 3 SEGUNDOS
        }, 3000)
       
    } else{
        msgError.setAttribute('style', 'display: block')
        msgSuccess.setAttribute('style', 'display: none')
    }
})
//AO CLICAR BOTÃO DE CADASTRAR


//TIRAR A MENSAGEM DE ERRO OU DE SUCESSO AO DAR FOCO EM ALGUM DOS INPUTS
email.addEventListener('focus', ()=>{
    msgSuccess.setAttribute('style', 'display: none')
    msgError.setAttribute('style', 'display: none')
})

senha.addEventListener('focus', ()=>{
    msgSuccess.setAttribute('style', 'display: none')
    msgError.setAttribute('style', 'display: none')
})

confirmarSenha.addEventListener('focus', ()=>{
    msgSuccess.setAttribute('style', 'display: none')
    msgError.setAttribute('style', 'display: none')
})
//FIM TIRAR A MENSAGEM DE ERRO OU DE SUCESSO AO DAR FOCO EM ALGUM DOS INPUTS




