"use strict"
/**
 * @fileOverview Aplicacion para la descripción de un parking
 * @author Jose Lagoa
 * @version 1.0
 */

/**
 * @class Parking 
 * @property {number} capacidad Numero de coches que puede haber en el parking
 * @prop {Array} tunelLavado Lista de cosas para lavar
 * @prop {Array} coches Lista de coches en el parking 
 */

class Parking {
    /**
     * 
     * @param {number} capacidad Numero de coches que entran al parking
     */
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.tunelLavado = [];
        this.coches = [];


    }
    meterCoche(coche) {
        if (this.capacidad > 0) {
            this.capacidad--;
            if (coche.lavado == true) {
                this.tunelLavado.push(coche.matricula);
            } else {
                this.coches.push(coche.matricula)
            }
            return 0;
        } else {
            return -1;
        }

    }
    /**
     * @description Nos devuelve si el coche esta o no en el parking
     * @param {string} matricula 
     * @returns {Boolean}
     */
    buscarCoche(matricula){
        if(this.coches.indexOf(matricula)){
            return true
        }else{
            if(this.tunelLavado.indexOf(matricula)>=0){
                return true;
            }else{
                return false;
            }

        }        
    }
}

let parking = new Parking(2);
let coche1 = {
    matricula: "8992344",
    lavado: true
}
console.log(parking.meterCoche(coche1));
console.log(parking);
console.log(parking.buscarCoche("8992344"))