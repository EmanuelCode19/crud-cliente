const newCliente = document.querySelector('#NewUser');

newCliente.addEventListener('submit',SaveClient)

function SaveClient(e){
    e.preventDefault()
    const inpunts = e.target.elements;

    const cliente = {
        name: inpunts[0].value,
        cellphone: inpunts[1].value,
        address: inpunts[2].value,
        createAd: new Date().toISOString(),
    }
    const url = 'http://localhost:9000/api/client'

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"POST",
          body:JSON.stringify(cliente),
          headers: header
     }

   fetch(url,configuration).then(response => response.json()).then(data => console.log(data))


    alert('Se Guardo el cliente');

}





