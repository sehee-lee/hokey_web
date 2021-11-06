// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            <strong>행정법인 호경</strong>
          </div>
        </Col>

        {/*<Col xl="6">*/}
        {/*  <Nav className="nav-footer justify-content-center justify-content-xl-end">*/}
        {/*    <NavItem>*/}
        {/*      <NavLink*/}
        {/*        href="#"*/}
        {/*        rel="noopener noreferrer"*/}
        {/*        target="_blank"*/}
        {/*      >*/}
        {/*        site 1*/}
        {/*      </NavLink>*/}
        {/*    </NavItem>*/}

        {/*    <NavItem>*/}
        {/*      <NavLink*/}
        {/*        href="#"*/}
        {/*        rel="noopener noreferrer"*/}
        {/*        target="_blank"*/}
        {/*      >*/}
        {/*        site 2*/}
        {/*      </NavLink>*/}
        {/*    </NavItem>*/}
        {/*  </Nav>*/}
        {/*</Col>*/}
      </Row>
    </footer>
  );
};

export default Footer;
