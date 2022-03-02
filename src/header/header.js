import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
// import Nav from 'react-bootstrap/Nav'
const Header = () => {
  return (
    <header>
      <div className="header-top">
        <h1>Cookbooking</h1>
      </div>
      <div className="header-bottom">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <LinkContainer to="/">
              
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
              <LinkContainer to='/authors'>
            <Nav.Link>Authors</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
              <LinkContainer to='/cookbooks'>
            <Nav.Link href="/cookbooks">Cookbooks</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </div>
    </header>
  );
};

export default Header;
