import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function ImuebleItem(props) {
  const inmueble = props.inmueble;
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <strong>Opción: </strong>
            <p>{inmueble.options === 'A' ? 'Arriendo' : 'Venta'}</p>
          </div>
          <div className='col-12 col-md-4'>
            <strong>Propiedad: </strong>
            <p>
              {inmueble.property === 'L'
                ? 'Local'
                : inmueble.property === 'C'
                ? 'Casa'
                : 'Apartamento'}
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <strong>Precio: </strong>
            <p>{inmueble.price}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
function useSearchEstate(estates) {
  const [query, setQuery] = React.useState('');
  const [filteredEstates, setFilteredEstates] = React.useState(estates);

  React.useMemo(() => {
    const result = estates.filter((estate) => {
      return `${estate.options === 'A' ? 'Arriendo' : 'Venta'} ${
        estate.property === 'L'
          ? 'Local'
          : estate.property === 'C'
          ? 'Casa'
          : 'Apartamento'
      } ${estate.price}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredEstates(result);
  }, [estates, query]);

  return { query, setQuery, filteredEstates };
}

const ListaInmuebles = (props) => {
  const { inmuebles } = props;
  const { query, setQuery, filteredEstates } = useSearchEstate(inmuebles);
  if (props.error) {
    return <h4>Un error ha ocurrido al consultar los datos</h4>;
  }
  if (filteredEstates.length === 0 && !props.loading) {
    return (
      <Fragment>
        <div className='form-group'>
          <label>Búsqueda</label>
          <input
            autoFocus
            type='text'
            className='mainLoginInput form-control'
            placeholder='&#61442;'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No se ha encontrado su búsqueda</h3>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <input
        autoFocus
        type='text'
        className='mainLoginInput form-control'
        placeholder='&#61442;'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <br />
      <ul className='list-group'>
        {filteredEstates.map((inmueble) => {
          return (
            <li
              key={inmueble._id}
              className='list-group-item'
              style={{ listStyleType: 'none' }}
            >
              <Link
                to={`/inmueble/${inmueble._id}`}
                className='text-reset text-decoration-none'
              >
                <ImuebleItem inmueble={inmueble} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ListaInmuebles;
