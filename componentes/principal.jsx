/**Importamos data.js, de donde obtendremos los valores para mostrar por pantalla, le damos el nombre que queramos a la
variable,en mi caso paises**/

import Paises from './paises.jsx';
import datos from '../src/data';

//Empleamos la funcion App que se enlaza con main.jsx, renderizando la interfaz paises 
function Principal() {

    return(

      <main>
        <section className="container">

            <div className="title">
                <h2>Nuestros Tours</h2>
                <div className="underline"></div>
            </div>

           
        </section>
        {/* Usamos map pasando por parámetro el objeto de 'data.js */}
        {/* Lo filtramos para que solo muestre aquellos paises que contengan información */}
        {/* Pasamos el componente 'Paises', y le asignamos valores a los props */}
        {datos
        .filter(dato => dato.info)
        .map(dato => (
        <Paises
          key={dato.id}
          destacado={dato.destacado}
          imagen={dato.image}
          nombre={dato.name}
          precio={dato.price}
          info={dato.info}        
        />

        ))}   

      </main>
    );
  }

// Hacemos disponible el componente Principal para su uso desde 'main.jsx'
export default Principal
