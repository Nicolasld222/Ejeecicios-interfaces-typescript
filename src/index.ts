//Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego
//crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una
//clase.

interface Vehicle {
    model: string;
    year: number;
    color: string;
}

interface Car extends Vehicle {
    puertas: number;
    cuatroxcuadro: boolean;
}


interface Motorcycle extends Vehicle {
    hasSidecar: boolean;
}


class vehiculos implements Car {
    model: string;
    year: number;
    color: string;
    puertas: number;
    cuatroxcuadro: boolean;

    constructor(model: string, year: number, color: string, puertas: number, cuatroxcuadro: boolean) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.puertas = puertas;
        this.cuatroxcuadro = cuatroxcuadro;
    }
}