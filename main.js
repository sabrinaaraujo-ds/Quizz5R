
const nome = window.prompt("Bem vinda! Por favor insira seu nome: ")
const resposta = window.prompt( nome + ", deseja continuar? \n 1.Sim \n 2.Não")
const ola = document.getElementById("ola").innerHTML = nome


if(resposta == "2" ){

    alert("Obrigada, até logo!")

}else {

    const resposta1 = window.prompt("Qual o resultado desta soma: 5+2 \n a. 6 \n b. 7 \n c. 9")
    if(resposta1 ==="b"){
       const divCerta1 = document.getElementById('divCerta1').innerHTML = "Pergunta 1"
        
    }else {
        const divErrada1 = document.getElementById('divErrada1').innerHTML = "Pergunta 1"
    }    

    
        
    const resposta2 = window.prompt("Qual a capital do Brasil? \n a. Belém \n b. Brasília \n c. Fortaleza ")
    if(resposta1 ==="b"){
        const divCerta2 = document.getElementById('divCerta2').innerHTML = "Pergunta 2"
         
     }else {
         const divErrada2 = document.getElementById('divErrada2').innerHTML = "Pergunta 2"
     }   
    
 
    const resposta3 = window.prompt("Qual o resultado da subtração: 12-4 \n a. 8 \n b. 3 \n c. 6")
    if(resposta1 ==="a"){
        const divCerta3 = document.getElementById('divCerta3').innerHTML = "Pergunta 3"
         
     }else {
         const divErrada3 = document.getElementById('divErrada3').innerHTML = "Pergunta 3"
     }   
    

}




  






