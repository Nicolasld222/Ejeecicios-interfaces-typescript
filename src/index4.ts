//Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de BaseObject. Crea una función genérica que pueda imprimir los datos.

interface BaseObject {
    id:number
}

interface user extends BaseObject{
    name:string
    rol:string
}

interface Product extends BaseObject{
    name:string
    precio:number
}

interface Order extends BaseObject{
    idproducto:number
    cantidad:number
    montototal:number
}

function imprimirDatos <T extends BaseObject>(obj: T): void {
    console.log(`ID: ${obj.id}`);

    // Imprimir otras propiedades si están presentes
    if ("name" in obj) console.log(`Name: ${obj.name}`);
    if ("precio" in obj) console.log(`Precio: ${obj.precio}`);
    if ("idproducto" in obj) console.log(`Product ID: ${obj.idproducto}`);
    if ("cantidad" in obj) console.log(`Quantity: ${obj.cantidad}`);
    if ("montototal" in obj) console.log(`Monto total: ${obj.montototal}`);
}