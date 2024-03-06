//Componente que emplea función de props desestructurada, un prop para cada valor
function Paises({id,destacado,imagen,nombre,precio,info}) {
  return (
    <>
          {/* Aquí está la lógica para crear el componente artículo, vemos un operador ternario, para valorar si añadir o no la clase desatacado a article */}
          <article key={id} className={`single-tour ${destacado ? 'destacado' : ''}`}>

            {/* En la etiqueta imagen, incluimos un operador ternario para 'src', si hay imagen almacenada en 'data.js' la mostrará,y si no asignamos una imagen predefinida */}
            <img src={imagen ? imagen : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'} alt={nombre} />
        
            <footer>
              <div className="tour-info">
                <h4>{nombre}</h4>

                {/*  En caso de que haya un precio se mostrará por pantalla,y en caso de que no lo haya, saldrá un texto predefino que diga ' A consultar,usamos otro operador ternario'*/}
                <h4 className="tour-price">{precio ? `${precio} €` : 'A consultar'}</h4>
              </div>
              <p>{info}</p>
            </footer>
          </article>
      
    </>
  );
}

//Exportamos el componente Paises,para que pueda ser utilizado desde 'principal.jsx'
export default Paises;

    
