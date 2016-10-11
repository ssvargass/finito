import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    estados: number;
    letras: number;
    estadoArr: Diccionario[] = [];
    letraArr: any[];
    palabra: string;
    messages: any;
    aceptacion: number;

    constructor(){
        this.estados = 3;
        this.letras = 2;
        this.letraArr = fake_letras;
        this.estadoArr = fake_estados;
        this.aceptacion = 2;
    }

    setLetras(){
        this.letraArr = Array(this.letras);
    }

    setEstados(){
        let counter = 0;
        this.estadoArr = Array.apply(null, {length: this.estados}).map((Number: any) => {
            let tpmEs: Diccionario = {
                id: counter,
                estados: Array()
            };
            counter ++;
            return tpmEs;
        });
    }

    comparePalabra(){
        let letras = this.palabra.split('');
        let counter = 0;
        this.messages = {};
        
        for(let letra of letras){
            let position = this.letraArr.indexOf(letra);
            if(position < 0){
                this.messages = {
                    message: `La letra ${letra} no esta en el vocabulario`,
                    type: 'alert-danger',
                }
            } else {
                let estado = this.estadoArr[counter].estados[position];
                console.log(estado);
                counter = estado;
            }
        }
        if(counter == this.aceptacion){
             this.messages = {
                message: `La cadena ${this.palabra} es válida`,
                type: 'alert-success',
            }
        }
    }
}

class Diccionario {
  id: number;
  estados: any;
}

let fake_estados = [
    {id:0, estados:['0','1']},
    {id:1, estados:['0','2']},
    {id:2, estados:['1','2']}
]

let fake_letras = ['a','b']