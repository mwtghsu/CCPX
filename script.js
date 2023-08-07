const dia =document.getElementById('dia')
const hora =document.getElementById('hora')
const minuto =document.getElementById('minuto')
const segundo =document.getElementById('segundo')

const lancamento="1 oct 2024"

function countdown(){
   const dataLanc = new Date(lancamento)
   const hoje = new Date()
   const segTotal=(dataLanc-hoje)/1000;
   const finalDias=  Math.floor(segTotal/60 / 60 / 24);
   const finalHoras=Math.floor(segTotal/60/60)%24
   const finalMinutos= Math.floor(segTotal /60)%60
   const finalSegundos= Math.floor(segTotal)%60;

   dia.innerHTML=finalDias
   hora.innerHTML=finalHoras
   minuto.innerHTML=finalMinutos
   segundo.innerHTML=finalSegundos

}

function funcao(selector){
   var element =document.querySelector(selector)
   element.classList.toggle("card-highlight");
}
function check()
{ document.addEventListener('keydown', (event) => {
   var name= event.key;
   var code= event.code;
   alert(`Key pressed ${name} Key code value ${code}`);
},false);

}


function Keybord() {
   document.addEventListener('keydown', (event) => {
      var ingresso1 = document.getElementById("imagem1");
      var ingresso2 = document.getElementById("imagem2");
      var ingresso3 = document.getElementById("imagem3");
      var ingresso4 = document.getElementById("imagem4");
      var name = event.key;
      var code = event.code;
      if (code === 'Digit1') {
         ingresso1.classList.toggle("card-highlight");
         ingresso2.classList.remove("card-highlight");
         ingresso3.classList.remove("card-highlight");
         ingresso4.classList.remove("card-highlight");
      }

      if (code === 'Digit2'){
         ingresso1.classList.remove("card-highlight");
         ingresso2.classList.toggle("card-highlight");
         ingresso3.classList.remove("card-highlight");
         ingresso4.classList.remove("card-highlight");
      }
      if (code === 'Digit3'){
         ingresso1.classList.remove("card-highlight");
         ingresso2.classList.remove("card-highlight");
         ingresso3.classList.toggle("card-highlight");
         ingresso4.classList.remove("card-highlight");
      }
      if (code === 'Digit4'){
         ingresso1.classList.remove("card-highlight");
         ingresso2.classList.remove("card-highlight");
         ingresso3.classList.remove("card-highlight");
         ingresso4.classList.toggle("card-highlight");
      }

      
   }, false);
}

function selectCard(selector){
   var element = document.querySelector(selector);
   element.classList.toggle("card-selected");
   if (ingressos.includes(selector)) ingressos.pop(selector);
   else ingressos.push(selector)
   
   
}

var ingressos = []; // Declaração da variável ingressos como uma matriz vazia

function selectCard(selector) {
   var element = document.querySelector(selector);
   element.classList.toggle("card-selected");
   if (ingressos.includes(selector))
      ingressos.pop(selector);
   else
      ingressos.push(selector);
}

function showSelectedCards() {
   alert("Ingressos selecionados: " + ingressos.length);
}




Keybord();
countdown();
setInterval(countdown,1000);
