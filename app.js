  
//FUNCION PARA AGREGAR UN AMIGO A LA LISTA
function agregarAmigo(){
    //Captura el valor del input 'amigo' y eliminamos los espacios en blanco con trim()
    let amigo = document.getElementById("amigo").value.trim(); 
    //Validación: que el ingreso de texto no sea vacío
    if (amigo === "") {
        alert("Agrega un nombre válido");
        return;
    }
    //Crea un elemento <li> 
    let nuevoAmigo = document.createElement("li");
    //Agregamos el nombre del amigo al contenido dentro de <li>
    nuevoAmigo.innerText = amigo;
    //Agrega un nuevo amigo a la listaamigos
    document.getElementById("listaAmigos").appendChild(nuevoAmigo);
    //Limpia el campo de entraga después de agregar amigos
    document.getElementById("amigo").value= "";
};

//FUNCION PARA SORTEAR UN AMIGO SECRETO
function sortearAmigo(){
    //Convierte los elemntos <li> en una array
    let listaAmigos = Array.from(document.querySelectorAll("#listaAmigos li"));
    //Validación: que haya un amigo en la lista
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre para realizar el sorteo.");
        return;
    }
    //Genera un nombre aleatorio basado en la listaAmigos
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    //Se obtienen el nombre del amigo selesccionado usando el indice aleatorio
    let amigoAleatorio = listaAmigos[indiceAleatorio].innerText;
    // Se muestra el resultado del sorteo indicando el nombre aleatorio
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: <strong>${amigoAleatorio}</strong>`;
};
