import { Link } from 'react-router-dom';
function HeaderMenu() {
  return(
    <ul className="header-menu">
      <li><Link to="/">Principal</Link></li>
      <li><Link to="/form">Formulario</Link></li>
    </ul>

  )
}

export default HeaderMenu;