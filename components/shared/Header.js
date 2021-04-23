import React from 'react';
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const BsNavLink = (props) => {
    const {route, title} = props
    return (
        <Link href={route} >
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

export default class Header extends React.Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
  }
  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      })
  }

  render(){
      const {isOpen} = this.state
    return (
        <div>
        <Navbar className="absolute port-navbar port-default" color="transparent" dark expand="md">
            <NavbarBrand className="port-navbar-brand" href="/">Filip Jerga</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem className="port-navbar-item">
                    <BsNavLink route="/" title="Home"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                    <BsNavLink route="/about" title="About"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                    <BsNavLink route="/portfolios" title="Portfolio"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                    <BsNavLink route="/blogs" title="Blog"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                    <BsNavLink route="/cv" title="Cv"/>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
  }
}

// import React, { Fragment } from 'react'
// import Link from 'next/link'

// class Header extends React.Component {
//     render() {
//         return (
//             <Fragment>
//                 <Link href="/">
//                 <a> Home </a>
//                 </Link>
//                 <Link href="/about">
//                     <a>About</a>
//                 </Link>
//                 <Link href="/portfolios">
//                     <a>Portfolios</a>
//                 </Link>
//                 <Link href="/blogs">
//                     <a>Blogs</a>
//                 </Link>
//                 <Link href="/cv">
//                     <a>Cv</a>
//                 </Link>
//                 <style jsx>
//                 {`
//                     .customClass {
//                     color: red;
//                     }
//                 `}
//                 </style>
//             </Fragment>
//         )
//     }
// }

// export default Header;