const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaProductosRef = document.getElementById("lista-de-productos") //Cambiado a ById y un nombre con mas contexto
const entradaRef = document.getElementById("input");// Se cambio a ById y un nombre con mas contexto
const btnFiltroRef = document.getElementById("btn-filtrar");//Se cambio a byId y se reacomodo junto a las otras ref
///////

//Este for pertenece a diplay
const displayProductos = (productos) =>{//Se define una funcion que despliega el arreglo que se le pasa
  for (let i = 0; i < productos.length; i++) {//Correción del nombre de los atributos para crear los elementos html
    const contenedor = document.createElement("div");
    contenedor.classList.add("producto");
  
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productos[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    contenedor.appendChild(titulo)
    contenedor.appendChild(imagen)
    listaProductosRef.appendChild(contenedor)
  }
};

displayProductos(productos); //Impresión por default

//Al activar boton filtro
btnFiltroRef.onclick = function() {

  while (listaProductosRef.firstChild) {//Corrección de nombres para los elementos
    listaProductosRef.removeChild(listaProductosRef.firstChild);
  }

  const filtro = entradaRef.value;
  console.log(filtro);
  const productosFiltrados = filtrado(productos, filtro);
  displayProductos(productosFiltrados);//Sustitución del for que imprime por la llamada a la función display productos
}

//Funcion de filtro
const filtrado = (productos = [], filtro) => {//Corección en los nombres de las variables
  return productos.filter(item => item.tipo.includes(filtro) || item.color.includes(filtro));
}  