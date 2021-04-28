
const nome = window.prompt("Bem vinda! Por favor insira seu nome: ")
const resposta = window.prompt( nome + ", deseja continuar? \n 1.Sim \n 2.Não")
const ola = document.getElementById("ola").innerHTML = nome


if(resposta == "2" ){

    alert("Obrigada, até logo!")

}else {

    const resposta1 = window.prompt("Qual o resultado desta soma: 5+2 \n a. 6 \n b. 7 \n c. 9")
    if(resposta1 ==="b"){
       const certa = document.getElementById('certa1').innerHTML = "Pergunta 1"
        
    }else {
        const errada1 = document.getElementById('errada1').innerHTML = "Pergunta 1"
    }    

    
        
    const resposta2 = window.prompt("Qual a capital do Brasil? \n a. Belém \n b. Brasília \n c. Fortaleza ")
    if(resposta2 ==="b"){
        const certa2 = document.getElementById('certa2').innerHTML = "Pergunta 2"
         
     }else {
         const errada2 = document.getElementById('errada2').innerHTML = "Pergunta 2"
     }   
    
 
    const resposta3 = window.prompt("Qual o resultado da subtração: 12-4 \n a. 8 \n b. 3 \n c. 6")
    if(resposta3 ==="a"){
        const certa3 = document.getElementById('certa3').innerHTML = "Pergunta 3"
         
     }else {
         const errada3 = document.getElementById('errada3').innerHTML = "Pergunta 3"
     }   
    

}




  






