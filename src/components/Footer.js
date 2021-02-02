import { Link } from 'react-router-dom';

function Footer() {
  return(
    <footer className="footer">
      <ul className="footer-menu">
        <li><Link to="/">Principal</Link></li>
        <li><Link to="/form">Formulario</Link></li>
      </ul>
    </footer>

  )
}

export default Footer;