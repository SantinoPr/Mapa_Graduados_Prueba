import crearGraduado from "./Graduado.js";
import GeoDatos from "./GeoDatos.js";
let latitud=null;
let longitud=null;
const country=document.getElementById('country');
const apiUrl= "https://nominatim.openstreetmap.org/search?q=${country.value}&format=json&limit=10"
const paises='./countries.json';
const estados='./states.json';
const ciudades='./cities.json'
let select;
let idPais=null;
let idEstado=null;
let cont=0;
let dropdown;
let array=new Array();
let map=L.map('map').setView([4.639386, -74.082412],6);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function mostrarUbicaciones(){
    for (let i = 0; i < array.length; i++) {
      latitud=array[i].latitud;
      longitud=array[i].longitud;
      L.marker([latitud,longitud]).addTo(map)
      .bindPopup('otro graduado')
      .openPopup();
    };     
}
document.querySelector("#mostrar")
        .addEventListener('click', mostrarUbicaciones);

L.marker([51.5, -0.09]).addTo(map)
.bindPopup('Primer gruaduado')
.openPopup();


async function obtenerLatitudLongitud(){
  try{
    let codificar=new GeoDatos();
    await codificar.geoCodificar(country.value);
      L.marker([codificar.Latitud, codificar.longitud]).addTo(map)
       .bindPopup('holi')
       .openPopup(); 
    
  }
  catch(error){
    console.error('Error', error);
  }  
  
}

function cargarDropDown(data, name){
  dropdown=document.getElementById(name);
  dropdown.innerHTML='';
  switch(name){
    case 'countryId':
      for(let item of data){
        const option=document.createElement('option');
        option.value=item.id;        
        option.textContent=item.name;
        dropdown.appendChild(option);
      }    
      break;
    case 'stateId': 
    if(idPais!=null){
      for(let item of data){
        if(item.country_id===idPais){
          const option=document.createElement('option');
          option.value=item.id;   
          option.textContent=item.name;
          dropdown.appendChild(option);
        }      
      }
    }    
      break;
    case 'cityId': 
    if(idEstado!=null){
      for(let item of data){
        if(item.state_id===idEstado){
          const option=document.createElement('option');
          option.value=item.state_id;   
          option.textContent=item.name;
          dropdown.appendChild(option);
        }      
      }
    }  
      break;
      default:
        console.log('A ocurrido un error');        
  } 
}

async function extraerJson(json){

  let jsonData
   await fetch(json)
    .then(response=>response.json())
    .then(data=>jsonData=data)
    console.log(jsonData);
  return jsonData   
}
async function cargarPaises(){
  let jsonCountry= await extraerJson(paises);
  cargarDropDown(jsonCountry.countries,'countryId');
}
async function cargarEstados(){
  let jsonState=await extraerJson(estados);
  cargarDropDown(jsonState.states,'stateId');

}
async function cargarCiudades(){
  let jsonCity=await extraerJson(ciudades);
  cargarDropDown(jsonCity.cities,'cityId');
}
//evento clikc al seleccionar un pais
document.getElementById('countryId').addEventListener('change', ()=>{
  const dropdown=document.getElementById('countryId');
  idPais= dropdown.value;
  select =true; //comprobante de que el evento click se disparo
  cargarEstados();
})
document.getElementById('stateId').addEventListener('change', ()=>{
  const dropdown=document.getElementById('stateId');
  idEstado= dropdown.value;
  cargarCiudades();
})
//Cargar lista de paises al iniciar la web
document.querySelector('#countryId')
         .addEventListener('change', cargarPaises());

document.querySelector('#btnSearch')
        .addEventListener('click', obtenerLatitudLongitud);