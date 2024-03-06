/**Importamos data.js, de donde obtendremos los valores para mostrar por pantalla, le damos el nombre que queramos a la
variable,en mi caso paises**/

import Paises from './paises';

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

        <Paises />



      </main>
    );
  }

// Hacemos disponible la función App para su uso en otros componentes
export default Principal
