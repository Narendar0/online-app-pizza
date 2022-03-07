import React from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {logoutUser} from '../actions/userAction'
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <h1>Online-Pizza-shop</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {
                currentUser ? (
                   <LinkContainer to = "/">
              {/* <Nav.Link> {currentUser.name}</Nav.Link> */}
                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            Order
            </NavDropdown.Item>
          <NavDropdown.Item 
          onClick={() => {dispatch(logoutUser())}}>
            Logout
            </NavDropdown.Item>
        </NavDropdown>
              </LinkContainer>
              ) : ( 
              <>
              {" "}
              <LinkContainer to="/login">
                <Nav.Link> Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link> Register </Nav.Link>
              </LinkContainer>
              {" "} 
              </>
              )
              }
            
              <LinkContainer to="/cart">
                <Nav.Link> Cart {cartState.cartItems.length} </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
