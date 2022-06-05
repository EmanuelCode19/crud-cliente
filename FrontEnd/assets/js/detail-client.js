const getParam = (param) => {
  const parametro = new URLSearchParams(location.search);
  return parametro.get(param);
};

console.log('js');

window.addEventListener("load", async () => {
  
  console.log('js');
  const id = getParam("id");

  const detalles = document.querySelector('#detail-clientes');

  const response = await fetch(`http://localhost:9000/api/client/${id}`);

  const customer = await response.json();

  const div = document.createElement('div')

div.innerHTML = `
 <div class="mt-5">
    <p class="color-black cliente-info"> <span>Id:</span>  ${customer._id}</p>
    <p class="color-black cliente-info"> <span> Nombre: </span>  ${customer.name} </p>
    <p class="color-black cliente-info"> <span> Telefono: </span>  ${customer.cellphone} </p>
    <p class="color-black cliente-info"> <span>Direccion:</span>  ${customer.address}</p>
    <p class="color-black cliente-info"><span>Fecha de creacion:</span>${customer.createAd}</p>
</div>
 `;

 detalles.appendChild(div)

});
