// import { Fragment } from "react"

// const typeString = 'Pedro';
// const typeNumber = 28;
import PropTypes from 'prop-types'

const typeBoolean = true;
const typeArray = [ 'Angular, ' , 'React, ' , 'Java ' ];


export const FirtsApp = ( { name, age = 0, role } )=> {



  return (
    // <Fragment>
      <>
      <h1>Soy { name }</h1>
      <hr />
      <p>Desarrollador { role } </p>
      <p>{ typeArray } </p>
      <p>Edad: { age }</p>
      <p>Disponible: { typeBoolean }</p>
      </>
    /* </Fragment> */
  )
}

FirtsApp.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  role: PropTypes.string
}

FirtsApp.defaultProps = {
  name: 'Anónimo',
  role: 'Full stack'
}
