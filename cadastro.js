/*area de cadastro*/

let btn = document.querySelector('#versenha')
let btnconfirmsenha = document.querySelector('#verconfirmsenha')

let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelusuario')
let validusuario = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelconfirmsenha = document.querySelector('#labelconfirmsenha')
let validconfirmsenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if(nome.value.length <=2){
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validnome = false
    } else {
        labelnome.setAttribute('style', 'color: green')
        labelnome.innerHTML = 'nome'
        nome.setAttribute('style', 'border-color: green')
        validnome = true
    }
})
usuario.addEventListener('keyup', () => {
    if(usuario.value.length <=5){
        labelusuario.setAttribute('style', 'color: red')
        labelusuario.innerHTML = 'usuario *Insira no minimo 6 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validusuario = false
    } else {
        labelusuario.setAttribute('style', 'color: green')
        labelusuario.innerHTML = 'usuario'
        usuario.setAttribute('style', 'border-color: green')
        validusuario = true
    }
})
senha.addEventListener('keyup', () => {
    if(senha.value.length <=5){
        labelsenha.setAttribute('style', 'color: red')
        labelsenha.innerHTML = 'senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validsenha = false
    } else {
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = 'senha'
        senha.setAttribute('style', 'border-color: green')
        validsenha = true
    }
})
confirmsenha.addEventListener('keyup', () => {
    if(senha.value != confirmsenha.value){
        labelconfirmsenha.setAttribute('style', 'color: red')
        labelconfirmsenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmsenha.setAttribute('style', 'border-color: red')
        validconfirmsenha = false
    } else {
        labelconfirmsenha.setAttribute('style', 'color: green')
        labelconfirmsenha.innerHTML = 'Confirmar Senha'
        confirmsenha.setAttribute('style', 'border-color: green')
        validconfirmsenha = true
    }
})
function cadastrar(){
 if(validnome && validusuario && validsenha && validconfirmsenha){

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
     {
         nomeCad: nome.value,
         userCad: usuario.value,
         senhaCad: senha.value
     }
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: nome')
    msgError.innerHTML = ''
    
    window.location.href = "file:///C:/Users/BetinhoRocha/Desktop/cadastro%20de%20Login/index.html"
    
    /*setTimeout(()=>{

        Window.Location.href = 'file:///C:/Users/BetinhoRocha/Desktop/cadastro%20de%20Login/index.html'
        
    }, 3000)*/

   

 } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.setAttribute('style', 'display: nome')
    msgSuccess.innerHTML = ''
 }
}