/**
 * Obtiene una lista de usuarios desde una API.
 * 
 * @async
 * @function getUsers
 * @returns {Promise<Object[]>} - Una promesa que resuelve con un array de objetos de usuarios.
 * 
 * @example
 * getUsers().then(users => console.log(users));
 */
export async function getUsers() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
  
    const response = await request.json(); // Usar await ya que request.json() devuelve una promesa
  
    return response;
  }
  