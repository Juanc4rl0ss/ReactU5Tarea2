/**Importamos data.js, de donde obtendremos los valores para mostrar por pantalla, le damos el nombre que queramos a la
variable,en mi caso paises**/

import paises from './data' 

//Empleamos la funcion App que se enlaza con main.jsx, renderizando la interfaz paises 
function App() {

    return(

      <main>
        <section className="container">

            <div className="title">
                <h2>Nuestros Tours</h2>
                <div className="underline"></div>
            </div>
            
            {paises
            
            //Empleamos el método filter para que si no tiene información algún objeto,no se renderice en la web
            .filter(pais => pais.info)

            .map(pais=> (    
                
                <article 
                key={pais.id} 

                //Utilizamos un ternario,para validar si es true o no la propiedad destacado, si es verdadera, asignará la clase destacado,y si no no asigna nada
                className={`single-tour ${pais.destacado ? 'destacado': ''}`}>

                    
                    {/*Para mostrar la imagen, empleamos otro ternario, en caso de que exista muestra la url,y en caso de que no exista, que muestre la imagen predefinida*/}
                    <img src={pais.image ? pais.image : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'} 
                    alt={pais.name} />

                    <footer>

                        <div className="tour-info">

                            <h4>{pais.name}</h4>

                            {/* En caso de que exista el precio, lo mostrará por pantalla,y si no, mostrará de manera predeterminada 'A consultar' */}
                            <h4 className="tour-price">{pais.price ? `${pais.price} €` : "A consultar"}</h4>
                            
                        </div>
                            <p>{pais.info}</p>

                     

                    </footer>

                </article>              

    ))}
            
        
        </section>



      </main>
    );
  }

// Hacemos disponible la función App para su uso en otros componentes
export default App
