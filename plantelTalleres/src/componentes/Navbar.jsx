
import React, { useState } from 'react';


const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // Puedes agregar lógica adicional aquí, por ejemplo, redireccionar a otra página.
  };

  return (
    <nav>
      <ul>
        <li className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>
          <Link to="/">Home</Link>
        </li>
        <li className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}>
          <Link to="/about">About</Link>
        </li>
        <li className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
