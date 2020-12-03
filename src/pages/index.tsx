import Header from '../components/Header';
import 'rbx/index.css';
import { CSSProperties } from 'react';
import { Tile, Section, Title, Image } from 'rbx';

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
  flexDirection: "column",
  gap: 50
}

const ABOUT_ME_CONTENT: CSSProperties = {
  width: "94vw",
  background: "#010101"
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
  paddingLeft: 5
}

const LINE_IN_SECTION_MARGIN_TOP: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: 5,
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
  borderTopRightRadius: 25
}

function Landing() {
  return (
    <>
      <Header />
        <div style={MAIN}>
          <div style={IMAGE_CONTENT}>
            <img src={'./backgroundImage.png'} />
          </div>

          <div style={ABOUT_ME_CONTENT}>
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
                <Title as="h2" subtitle style={{color: "#F9F9F9", textAlign: "center", paddingTop: 50, paddingBottom: 30}}>
                  Minhas Skills
                </Title>

                <Tile kind="ancestor">
                  <Tile kind="parent" horizontal style={{justifyContent: "space-around"}}>

                      <Tile kind="parent" style={TILE} vertical>
                          <Image src={"./js-image.png"} style={{flex: 1}}/>
                          <Title as="h2" subtitle style={TEXT_ICON}>
                            Javascript
                          </Title>
                      </Tile>

                      <Tile kind="parent" style={TILE} vertical>
                        <Image src={"./node-image.png"} style={{flex: 1}}/>
                        <Title as="h2" subtitle style={TEXT_ICON}>
                          NodeJs
                        </Title>
                      </Tile>

                      <Tile kind="parent" style={TILE} vertical>
                        <Image src={"./react-image.png"} style={{flex: 1}}/>
                        <Title as="h2" subtitle style={TEXT_ICON}>
                          React
                        </Title>
                      </Tile>

                      <Tile kind="parent" style={TILE} vertical>
                        <Image src={"./proto-image.png"} style={{flex: 1}}/>
                        <Title as="h2" subtitle style={TEXT_ICON}>
                          Prototipagem
                        </Title>
                      </Tile>
                  </Tile>
                </Tile>     
              </div>
            </Section>
          </div>

          <div style={WHAT_DO_I_DO_CONTENT}>
            <Section>
              <div style={{textAlign: "center", marginBottom: 50}}>
                <Title size={3}>Oque faço</Title>
                <Title size={6} subtitle>
                  Aplicativos e sistemas web
                </Title> 
              </div>

              <Tile kind="ancestor">
                  <Tile kind="parent" vertical>

                      <Tile kind="parent" horizontal>
                        <Image src={"./app-image.png"} width="100"/>
                        <div style={LINE_IN_SECTION}>
                          <Title size={5}>Aplicativos</Title>
                          <Title subtitle>
                            Desenvolvimento de aplicativos híbridos para IOS e Android
                          </Title>
                        </div>
                      </Tile>

                      <Tile kind="parent" horizontal>
                        <Image src={"./proto-image.png"} width="100"/>
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
        </div>
    </>
  )


}

export default Landing;