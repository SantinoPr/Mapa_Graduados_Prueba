export default class Graduado {

    constructor(nombre, apellido, mail, genero, carreraFin,CarreraCursando, numero,anioEgreso, pais, provincia, ciudad,cargo, situacionLaboral, dependencia ){
        this.nombre= nombre;
        this.apellido=apellido;
        this.mail=mail;
        this.genero=genero;
        this.carreraFin=carreraFin;
        this.CarreraCursando=CarreraCursando;
        this.numero=numero;
        this.anioEgreso=anioEgreso;
        this.pais=pais;
        this.provincia=provincia;
        this.ciudad=ciudad;
        this.cargo=cargo;
        this.situacionLaboral=situacionLaboral;
        this.dependencia=dependencia
    }
    get Nombre(){
        return this.nombre;
    }
    get Apellido(){
        return this.apellido;
    }
    get Mail(){
        return this.mail;
    }
    get Genero(){
        return this.genero;
    }
    get Numero(){
        return this.numero;
    }
    get CarreraFinalizada(){
        return this.carreraFin;
    }
    get CarreraCursando(){
        return this.CarreraCursando
    }
    get AnioEgreso(){
        return this.anioEgreso;
    }
    get Pais(){
        return this.pais;
    }
    get Estado(){
        return this.provincia;
    }
    get Ciudad(){
        return this.ciudad;
    }
    get Cargo(){
        return this.cargo;
    }
    get SituacionLaboral(){
        return this.situacionLaboral;
    }
    get Dependencia(){
        return this.dependencia;
    }
}


