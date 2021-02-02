
function Form () {
return (
  <form action="">
    <h2 className="form-title">Formulario de contacto</h2>
    <p className="form-intro">Si tiene una duda o quiere hacer cualquier consulta, no dude en dejar un mensaje</p>
    <label className="form-label" htmlFor="name">Nombre</label>
    <input className="form-input" id="name" type="text" required/>
    <label className="form-label" htmlFor="surname">Apellido</label>
    <input className="form-input" id="surname" type="text"/>
    <label className="form-label" htmlFor="email">email</label>
    <input className="form-input" id="email" type="mail"/>
    <label className="form-label" htmlFor="message">Mensaje</label>
    <input className="form-input" id="message" type="text"/>
    <input className="form-button" type="submit"/>
  </form>
)
}

export default Form;