function añadir() {
	 
	var btnAñadir = document.getElementById("btnañadirlista").parentElement;
    var añadeInputs = document.createElement("input");
		añadeInputs.setAttribute("placeholder","Añadir una lista...");
	var nuevoDiv = document.createElement("div");
		nuevoDiv.setAttribute("class", "bg-gris tamañotarjetas ");
	
//que mi input (añadeInputs) lo guarde como hijo de div, en este caso mi boton
		nuevoDiv.appendChild(añadeInputs);
	
	var guardar = document.createElement("button");
		guardar.setAttribute("class","btn-success");
    var textbtn = document.createTextNode("Guardar");
	
//que el nodo de texto lo guarde en mi boton gurdar y este lo guarde como hijo de div
		guardar.appendChild(textbtn);
    	nuevoDiv.appendChild(guardar);
	
//al papa de btnAñadir lo reemplace con nuevo div (btn guardar e imput añadir)	
   		btnAñadir.parentElement.replaceChild(nuevoDiv, btnAñadir); 
	
//al dar click en guardar me guarda lo que escribi en un h3	
		guardar.onclick = function (){
			var añadirtitulo = document.createElement("h3");
			var textoContenido = document.createTextNode(añadeInputs.value);
			
//lo que escriba me lo guarde en un nodo de texto y y esto me lo guarde como hijo de nuevoDiv	
				añadirtitulo.appendChild(textoContenido); 
				nuevoDiv.appendChild(añadirtitulo);
			
//que mi input creado lo deje en blanco cada se le da click	
				añadeInputs.value ="";
				
//me cree un link 			
			var añadirTarjeta = document.createElement("a");
				añadirTarjeta.setAttribute("href", "#"),
					
				añadirTarjeta.setAttribute("class","white");	
			var textañadeTarjeta = document.createTextNode("añadir una tarjeta");		
				añadirTarjeta.appendChild(textañadeTarjeta);
				nuevoDiv.appendChild(añadirTarjeta);
			
//al papa de mi nuevoDiv le agregue un hijo que sera mi input
			
				nuevoDiv.parentElement.appendChild(añadeInputs);	
				nuevoDiv.parentElement.appendChild(guardar);
			
//añade input para añadir texto de tajeta
			añadirTarjeta.onclick = function (e){
			var divInputlista = document.createElement("div");
			var inputAñadetarjeta = document.createElement("input");
				añadeInputs.setAttribute("placeholder","Añadir una tarjeta");
			var btnAñadeLista = document.createElement("button");
				btnAñadeLista.setAttribute("class", "btn-success");
			var textbtnAñadeTarjeta = document.createTextNode("Guardar");
			
				btnAñadeLista.appendChild(textbtnAñadeTarjeta);
    			divInputlista.appendChild(btnAñadeLista);
				divInputlista.appendChild(inputAñadetarjeta);
				e.target.parentElement.replaceChild(divInputlista, añadirTarjeta); 
				
				btnAñadeLista.onclick = function (e){
				var textLista = document.createElement("div");
				var textTarjeta = document.createTextNode(inputAñadetarjeta.value);
				var cajaTexto = document.createElement("p");
					cajaTexto.appendChild(textTarjeta);
					textLista.setAttribute("class", "textLista");
					textLista.appendChild(cajaTexto);
					e.target.parentElement.parentElement.replaceChild(textLista, e.target.parentElement);
					nuevoDiv.appendChild(añadirTarjeta);
								}
						}
			}	
	}