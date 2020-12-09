import Header from '../components/Header';
import 'rbx/index.css';
import { CSSProperties } from 'react';
import { Tile, Section, Title, Image } from 'rbx';
import FormLanding from './index.form';

const IMAGE_CONTENT: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const MAIN: CSSProperties = {
  background: "#010101",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
}

const ABOUT_ME_CONTENT: CSSProperties = {
  width: "94vw",
  background: "#010101",
  paddingTop: 60
}

const TITLE: CSSProperties = {
  color: "#e0303b",
  fontSize: 40,
  letterSpacing: 1,
  fontWeight: 400
}

const TITLE_2: CSSProperties = {
  color: "#e0303b",
  fontSize: 18,
  letterSpacing: 2,
  fontWeight: 400
}

const TEXT: CSSProperties = {
  color: "#F9F9F9",
  fontSize: 14.3,
  fontWeight: 300,
  paddingTop: 4
}

const LINE_IN_SECTION: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: 10
}

const LINE_IN_SECTION_MARGIN_TOP: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: 10,
  marginTop:50
}

const TILE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 124,
  margin: "auto",
  height: "100%"
}

const TEXT_ICON: CSSProperties = {
  color: "#F9F9F9",
  fontSize: 12,
  fontWeight: 300,
  paddingTop: 12
}

const WHAT_DO_I_DO_CONTENT: CSSProperties = {
  width: "94vw",
  background: "#fefefe",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  marginTop: 60
}

const CONTACT_CONTENT: CSSProperties = {
  width: "94vw",
  background: "#fefefe",
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  paddingTop: 60
}

const Landing: React.FC = () => {

  return (
        <>
          <Header />
            <div id="home" style={MAIN}>
              <div style={IMAGE_CONTENT}>
                <img src={'./backgroundImage.png'} />
              </div>

              <div id="about" style={ABOUT_ME_CONTENT}>
                <Section>
                  <div style={LINE_IN_SECTION}>
                    <Title style={TITLE}>Olá,</Title>
                    <Title as="h2" subtitle style={TEXT}>
                      sou Felipe Vieira, desenvolvedor de software e criador de conteúdo voltado a programação.
                      Estou em constante evolução pessoal e profissional e amo novos desafios, acredito no poder da tecnologia para fazer
                      a diferença no mundo.
                    </Title>
                  </div>

                  <div style={LINE_IN_SECTION_MARGIN_TOP}>
                    <Title style={TITLE_2}>Ocupações atuais</Title>
                    <Title as="h2" subtitle style={TEXT}>
                      Desenvolvedor Android na Nuntec Agro
                    </Title>
                  </div>

                  <div style={TITLE_2}>
                    <Title size={4} subtitle style={{color: "#F9F9F9", textAlign: "center", paddingTop: 50, paddingBottom: 30}}>
                      Minhas Skills
                    </Title>

                    <Tile kind="ancestor">
                      <Tile kind="parent" horizontal style={{justifyContent: "space-around"}}>

                          <Tile kind="parent" style={TILE} vertical>
                              <Image src={"./js-image.png"} width={100} style={{maxHeight: 100}}/>
                              <Title as="h2" subtitle style={TEXT_ICON}>
                                Javascript
                              </Title>
                          </Tile>

                          <Tile kind="parent" style={TILE} vertical>
                            <Image src={"./node-image.png"} width={100} style={{maxHeight: 100}}/>
                            <Title as="h2" subtitle style={TEXT_ICON}>
                              NodeJs
                            </Title>
                          </Tile>

                          <Tile kind="parent" style={TILE} vertical>
                            <Image src={"./react-image.png"} width={100} style={{maxHeight: 100}}/>
                            <Title as="h2" subtitle style={TEXT_ICON}>
                              React
                            </Title>
                          </Tile>

                          <Tile kind="parent" style={TILE} vertical>
                            <Image src={"./proto-image.png"} width={100} style={{maxHeight: 100}}/>
                            <Title as="h2" subtitle style={TEXT_ICON}>
                              Prototipagem
                            </Title>
                          </Tile>
                      </Tile>
                    </Tile>     
                  </div>
                </Section>
              </div>

              <div id="whatDoIDo" style={WHAT_DO_I_DO_CONTENT}>
                <Section>
                  <div style={{textAlign: "center", marginBottom: 50}}>
                    <Title size={3}>Oque faço</Title>
                    <Title size={6} subtitle>
                      Aplicativos e sistemas web
                    </Title> 
                  </div>

                  <Tile kind="ancestor" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Tile kind="parent" vertical>

                          <Tile kind="parent" horizontal>
                            <Image src={"./app-image.png"} width="80"/>
                            <div style={LINE_IN_SECTION}>
                              <Title size={5}>Aplicativos</Title>
                              <Title subtitle>
                                Desenvolvimento de aplicativos híbridos para IOS e Android
                              </Title>
                            </div>
                          </Tile>

                          <Tile kind="parent" horizontal>
                            <Image src={"./proto-image.png"} width="80"/>
                            <div style={LINE_IN_SECTION}>
                              <Title size={5}>UX</Title>
                              <Title subtitle>
                                Desenvolvimento de protótipos em baixa fidelidade
                              </Title>
                            </div>
                          </Tile>
                      </Tile>
                    </Tile>
                </Section>
              </div>

              <div id="contact" style={CONTACT_CONTENT}>
                <div style={{ width: "98%", display: "flex", alignItems: "center", float: "right" }}>
                  <Image
                    src={'./logo.png'}
                    role="presentation"
                    width="115"
                  />
                  <div style={{ padding: 1, background: "#4a4a4a", flex: 1, marginTop: 3}}/>
                </div>
                
                <Section>
                  <FormLanding />
                </Section>
              </div>
            </div>
        </>
  )


}

export default Landing;