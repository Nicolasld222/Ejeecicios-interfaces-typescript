//Crea una interface User y otra interfaz Admin que herede de User. Crea una función para imprimir datos de usuario que acepte tanto User como Admin.


interface User {
    id: number;
    name: string;
    email: string;
}


interface Admin extends User {
    rol: string; 
}


function impremirDatos(user: User | Admin) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    // Verificamos si es un Admin para imprimir las propiedades adicionales
    if ("role" in user) {
        console.log(`Role: ${user.role}`);
    }
}
