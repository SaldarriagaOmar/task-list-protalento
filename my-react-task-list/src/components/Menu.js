import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tareas</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;