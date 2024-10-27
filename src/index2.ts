//Crea una interface producto con name, price, etc. Crea una interface Inventory que contenga un array de producto y funciones para agregar y buscar productoos.

// Definimos la interfaz producto con propiedades de cada productoo
interface producto {
    name: string;
    precio: number;
}

// Definimos la interfaz Inventory que contiene un array de producto y funciones para agregar y buscar productoos
interface Inventory {
    productos: producto[];

    agregarproducto(producto: producto): void;
    buscarprodnombre(name: string): producto | undefined;
}

// Implementamos la interfaz Inventory en una clase
class inventariotienda implements Inventory {
    productos: producto[] = [];

    // Implementación de la función para agregar un productoo al inventario
    agregarproducto(producto: producto): void {
        this.productos.push(producto);
        console.log(`productoo ${producto.name} agregado al inventario.`);
    }

    // Implementación de la función para buscar un productoo por su nombre
    buscarprodnombre(name: string): producto | undefined {
        return this.productos.find(producto => producto.name.toLowerCase() === name.toLowerCase());
    }
}