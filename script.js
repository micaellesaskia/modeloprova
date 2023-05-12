
const  nomeQuant = { //Criação dos objetos
  Celular: 150, //Atribuição de valores
  FoneOuvido: 55, //Atribuição de valores
  Pendrive: 37, //Atribuição de valores
  CaixaAudio: 28, //Atribuição de valores
  carregadorPortatil: 29, //Atribuição de valores
  Tablet: 32 //Atribuição de valores
 }

 const nomeQuantVend = {  //Criação dos objetos
  Celular: 38, //Atribuição de valores
  FoneOuvido: 10, //Atribuição de valores
  Pendrive: 17, //Atribuição de valores
  CaixaAudio: 8, //Atribuição de valores
  carregadorPortatil: 15, //Atribuição de valores
  Tablet: 5 //Atribuição de valores
  
 }

function Calcular(nomeQuant,nomeQuantVend){  //Criação de uma Função para calcular
 let restProd = {};
 for (let produto in nomeQuant){ // Criação de estrutura de rep FOR IN
     restProd[produto] = nomeQuant[produto] - nomeQuantVend[produto];
 }
     return restProd;
 }
 let restProd = Calcular(nomeQuant,nomeQuantVend);
 console.log(restProd); //Imprimindo o result na tela


 //João Afonso e Micaelle.