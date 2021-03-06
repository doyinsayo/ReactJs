import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({totalCounters}) => {
  return ( 
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secodary">
              {totalCounters}
            </span>
            </a>
        </div>
      </nav>
   );
}
 
export default NavBar;