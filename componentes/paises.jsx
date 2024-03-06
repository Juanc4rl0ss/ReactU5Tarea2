import paises from '../src/data';

function Paises() {
  return (
    <>
      {paises
        .filter(pais => pais.info)
        .map(pais => (
          <article key={pais.id} className={`single-tour ${pais.destacado ? 'destacado' : ''}`}>
            <img src={pais.image ? pais.image : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'} alt={pais.name} />
            <footer>
              <div className="tour-info">
                <h4>{pais.name}</h4>
                
                <h4 className="tour-price">{pais.price ? `${pais.price} €` : 'A consultar'}</h4>
              </div>
              <p>{pais.info}</p>
            </footer>
          </article>
        ))
      }
    </>
  );
}

export default Paises;

    
