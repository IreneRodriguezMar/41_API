function añadir() {
	
	//con esa sintaxis se podra averiguar quien es el padre de ese elemento
	//document.getElementById("btnañadirlista").parentElement);
	 
	var div = document.getElementById("btnañadirlista").parentElement;
    var añadeInputs = document.createElement("input");
		añadeInputs.setAttribute("placeholder","Añadir una lista...");
	var nuevoDiv = document.createElement("div");
		nuevoDiv.setAttribute("class","inline bg-gris tamañotarjetas");
	
	//que mi input (añadeInputs) lo guarde como hijo de div, en este caso mi boton
		nuevoDiv.appendChild(añadeInputs);
	
	var guardar = document.createElement("button");
		guardar.setAttribute("class","btn-success");
    var textbtn = document.createTextNode("Guardar");
	
	//que el nodo de texto lo guarde en mi boton gurdar y este lo guarde como hijo de div
		guardar.appendChild(textbtn);
    	nuevoDiv.appendChild(guardar);
	//que mi boton de añadir lista sea reemplazado por mi input con boton	
   		div.parentElement.replaceChild(nuevoDiv, div); 
	//que el boton que cree se active con onclick y con la funcion le digo que me cree un h3 con un nodo de texto	
		guardar.onclick = function (){
	var añadirtitulo = document.createElement("h3");
	var textoContenido = document.createTextNode(añadeInputs.value);
			
	//que el elemento nodo de texto sea guardado como hijo de (añadirtitulo) y este lo guarde como hijo de div	
		añadirtitulo.appendChild(textoContenido); 
		nuevoDiv.appendChild(añadirtitulo);
			
	//que mi input creado lo deje en blanco cada se le da click	
		añadeInputs.value ="";
				
	var añadirTarjeta = document.createElement("a");
		añadirTarjeta.setAttribute("href", "#"),
		añadirTarjeta.setAttribute("class","white");	
	var textañadeTarjeta = document.createTextNode("añadir una tarjeta");		
		añadirTarjeta.appendChild(textañadeTarjeta);
		nuevoDiv.appendChild(añadirTarjeta);
			
		div.appendChild(guardar);	
		div.appendChild(añadeInputs);		
		
	}
	
	
}