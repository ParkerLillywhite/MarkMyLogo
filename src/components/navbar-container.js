import React from 'react';
import useSticky from './hooks/useSticky';
import Navigation from './Navigation';
import Home from './content/home';

function NavBar() {
    const { isSticky, element } = useSticky();
    return (
      
      <div className='app'>
        <Navigation sticky={isSticky} />
        <Home element={element}/>
        
      </div>
    )
}

export default NavBar;