const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log(pizzas);

const pizzasIdImpar = pizzas.filter ( (e) =>{
  return e.id %2 !== 0 ;
})
console.log(pizzasIdImpar);
pizzasIdImpar.forEach((p)=>{
    console.log(`La ${p.nombre} tiene id impar`);
})

const pizzasBaratas = pizzas.filter( (e) =>{
  return e.precio < 600;
});
console.log(pizzasBaratas);
pizzasBaratas.forEach((p)=>{
    console.log(`La ${p.nombre} vale menos de $600`);
})

const pizzaYPrecio =  pizzas.map( (e) =>{
  return {nombre: e.nombre, precio: e.precio}; 
});
console.log(pizzaYPrecio);
pizzaYPrecio.forEach((p)=>{
  console.log(`La ${p.nombre} vale $${p.precio}`);
})

let {nombre,ingredientes} = pizzas;
/* console.log(nombre, ingredientes); */
const pizzaEIngredientes =  pizzas.map( (e) =>{
  return {nombre: e.nombre, ingredientes: e.ingredientes}; 
});
pizzaEIngredientes.forEach((p)=>{
  console.log(`La ${p.nombre} tiene ${p.ingredientes}`);
})
