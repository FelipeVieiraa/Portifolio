import Link from 'next/link';
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
          <Navbar.Item href="#" relative>
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
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>Quem sou</Navbar.Item>
            <Navbar.Item>Oque faço</Navbar.Item>

            <Navbar.Item dropdown>
              <Navbar.Link>Mais</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Divider />
                <Navbar.Item>Contato</Navbar.Item>
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