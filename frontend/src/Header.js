import React from 'react';
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<div className="container-fluid">
  <nav className="navbar navbar-inverse">
    {/* <div className="container-fluid"> */}
      <ul className="nav navbar-nav">
        <a id="len1" className="hoverable" href="#">View Products</a>
        <a id="len2" className="hoverable" href="#">Add Items</a>
        <a id="len3" className="hoverable" href="#">Fulfill Orders</a>
        {/* <a id="len4" className="hoverable" href="#">Contact</a> */}
      </ul>
    {/* </div> */}
  </nav>
</div>

        )
      }
    }
    
export default Header;