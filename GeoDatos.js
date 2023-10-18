export default class GeoDatos{

    latitud;
    longitud;

    async geoCodificar(ciudad){
        this.ciudad=ciudad
        const apiUrl= "https://nominatim.openstreetmap.org/search?q="+ciudad+"&format=json&limit=1"            
        await fetch(apiUrl)
         .then(response=>response.json())
         .then((data)=> {         
          this.longitud=data[0].lon;
          this.latitud=data[0].lat;
          const latlon=this.latitud+" "+ this.longitud;
          console.log(latlon)
          return latlon;
         })
        .catch(err=>console.log(err))
    }

    get Latitud(){
        return this.latitud;

    }
    get Longitud(){
        return this.longitud;
    }


}