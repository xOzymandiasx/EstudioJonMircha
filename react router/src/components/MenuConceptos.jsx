import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink to="/" className={({isActive}) => isActive ? "active" : undefined} >Home</NavLink>
          <NavLink to="/acerca" className={({isActive}) => isActive ? "active" : undefined} >Acerca</NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : undefined} end>Contacto</NavLink>
        </li>
        <li>
          <span>Parámetros: </span>
          <Link to="/usuario/Sergio">Sergio</Link>
          <Link to="/usuario/Ariel">Ariel</Link>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
