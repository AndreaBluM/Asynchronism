const XMLHTTpREQUEST = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1/';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHTTpREQUEST();

    // Abriendo conexion xhttp usando la Api(preparo evento)
    xhttp.open('GET', urlApi, true);
    // Captura el evento 
    xhttp.onreadystatechange = function (event){
    // Estado de la peticion 
      if  (xhttp.readyState === 4) {
    // Retorna el estado de la peticion y valida si es 200
        if (xhttp.status === 200) {
          callback(null, JSON.parce(xhttp.resposeText));
        }
      } else {
        const error = new Error('Error' + urlApi)
        return callback(error, null);
      }
    }
    xhttp.send();
}

fetchData(`${API}`)