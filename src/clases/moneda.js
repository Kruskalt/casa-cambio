export class Moneda{
     nombre;
     valor;

     constructor(nombre,valor){
        this.nombre=nombre;
        this.valor=valor
     }


     getNombre(){
        return this.nombre;
     }
     getValor(){
        return this.valor;
     }
}