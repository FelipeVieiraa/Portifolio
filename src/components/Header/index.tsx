import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Button, Control, Field } from 'rbx';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TEXT_BUTTON = {
  marginLeft: 6
}

const BUTTON = {
  borderRadius: 15
}

function Header() {
  return (
    <>
      <Navbar color="white">
        <Navbar.Brand>
          <Navbar.Item href="/" relative>
            <img
              src={'./logo.png'}
              alt=""
              role="presentation"
              width="115"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">

            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-item"
            >
              Home
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-item"
            >
              Quem sou
            </Link>

            <Link
              activeClass="active"
              to="whatDoIDo"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-item"
            >
              O que faço
            </Link>

            <Navbar.Item dropdown>
              <Navbar.Link>Mais</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Divider />
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="navbar-item"
                  >
                    Contato
                  </Link>
                <Navbar.Divider />
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Navbar.Item as="div">
              <Field kind="group">
                <Control>
                  <Button as="a" href="https://www.instagram.com/felipvieiraa_/" style={BUTTON}>
                    <FaInstagram size={25}/> 
                    <span style={TEXT_BUTTON}>Instagram</span>
                  </Button>
                </Control>
                <Control>
                  <Button as="a" href="https://www.linkedin.com/in/felipe-vieira-7a9146188/" style={BUTTON}>
                    <FaLinkedinIn size={25}/> 
                    <span style={TEXT_BUTTON}>LinkedIn</span>
                  </Button>
                </Control>
              </Field>
            </Navbar.Item>
          </Navbar.Segment>

        </Navbar.Menu>
      </Navbar>
    </>
  )


}

export default Header;