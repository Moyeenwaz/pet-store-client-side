import React from "react";
import { Navbar as Nav } from "./Component.styled";
import { SearchIcon, Cart, User } from "./icons";

const Navbar = () => {
  // const [ searchField, setSearchField ] = useState( "" );
  // const onSearchChange = ( event ) = {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setSearchField( searchFieldString );
  // };
  return (
    <Nav>
      <div className="left">
        <img
          src="https://github.com/Moyeenwaz/pet-store-images/blob/main/pet-images/paw-print.png?raw=true"
          alt="paw-print"
        />
        <span>Pettzi</span>
      </div>
      <div className="middle">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="right">
        <div className="nav-icon">
          <Cart />
          <span children="Your Cart" />
        </div>
        <div className="nav-icon">
          <User />
          <span children="Account" />
        </div>
        <div className="demacation"></div>
        <button>Sign in</button>
      </div>
    </Nav>
  );
};

export default Navbar;
