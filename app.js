// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];
let amigosYaImpresos=[];
let nombre="";
let amigoSeleccionado="";
let lista="";
let numeroAmigos=0;

//listas
lista=document.getElementById('listaAmigos');
lista.innerHTML="";

listaAmigoSeleccionado= document.getElementById('resultado');
listaAmigoSeleccionado.innerHTML=""; 


function agregarAmigo(){
	 nombre = document.getElementById("amigo").value;
	
	if(nombre!=""){
		amigos.push(nombre);
		amigosYaImpresos.push(false);
	//	alert("Nombre agregado"+nombre);
		listarAmigos(amigos,lista,amigosYaImpresos);
		limpiar();

	}

	else{
		alert("Por favor,ingrese un nombre válido");

	}
}


function limpiar(){
	document.querySelector("#amigo").value="";
}


function listarAmigos( listaAmigos,listaActualizar,amigosParaImprimir){

	
	


		  for(let i=0; i<= listaAmigos.length-1; i++){

		  	if(amigosParaImprimir[i]){
		  		
		  		continue;

		  	} else{
		  			 let li= document.createElement('li');
			  	      li.innerHTML=`${listaAmigos[i]}`;
			  	      listaActualizar.appendChild(li);
			  	      amigosParaImprimir[i]=true;


		  	}

		  	


		  }	

	
}





function sortearAmigo(){

   if(amigos.length<=1){
   	 alert("Deberas de ingresar un minimo de 2 amigos para poder realizar el sorteo");
   }
   else{
   		
   		amigoSeleccionado=numeroAleatorio(amigos);
   		//linea de prueba , se borrA
   		console.log(amigos[amigoSeleccionado]);
   		listaAmigoSeleccionado.innerHTML=`<li>El amigo secreto sorteado es: ${amigos[amigoSeleccionado]}</li>`;

   		lista=document.getElementById('listaAmigos');
        lista.innerHTML="";

/*Ya funciona, pero se modifica codigo para evitar generar una lista mas larga, ya que solo se requiere un li
para mostrar el amigo seleccionado
        let li= document.createElement('li');
		li.innerText=`El amigo secreto sorteado es: ${amigos[amigoSeleccionado]}`;
		listaAmigoSeleccionado.innerHTML=li ;
		//listaAmigoSeleccionado.appendChild(li);
			  	   //   listaActualizar.appendChild(li);
*/			  	      
  

   }
}


function numeroAleatorio(arregloAmigos){

   return Math.floor(Math.random()*arregloAmigos.length);

}