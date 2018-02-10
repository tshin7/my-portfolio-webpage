import React, { Component } from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll'
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin-square';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import FaEnvelope from 'react-icons/lib/fa/envelope';

import './Main.css';

// styled components
const Section = styled.div`
  // text-align: center;
  color: white;
  // make min height equal to window size
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
  // #####
  // used to vertically center children
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // #####
`

// title text for sections
const SectionTitle = styled.h2`
  color: white;
  font-size: 1.8em;
  margin-bottom: 1.2em;
`

const ContentContainer = styled.div`
  // padding: 2em 2em;
`

const Button = styled.button`
  margin-top: 3em;
`

const PrimaryButton = Button.extend`
  // position: relative;
  // z-index: 1;
`

const DefaultButton = Button.extend`
  color: #333;
`

/*******************/
/* Welcome Section */
/*******************/
const WelcomeSection = Section.extend`
  background-color: black;
  position: fixed;
`

const Name = styled.h1`
  color: white;
  font-size: 4em;
`

const WelcomeText = styled.h2`
  color: white;
  font-size: 2em;
`

/*****************/
/* About Section */
/*****************/
const AboutSection = Section.extend`
  background-color: gray;
  margin-top: 100vh;
  position: relative;
  min-height: 400px;
`

// container that holds content for about text
const AboutContainer = styled.div`
  max-width: 50vw;
  // border: 2px solid black;
  // padding: 2em 2em;
`

const AboutText = styled.p`
  color: white;
  font-size: 1.3em;
  line-height: 1.4;
`

/*********************/
/* Portfolio Section */
/*********************/
const PortfolioSection = Section.extend`
  background-color: black;
  position: relative;
  min-height: 850px;
`

const PortfolioRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2em;
`

const PortfolioImageLeft = styled.img`
  width: 25em;
  padding-right: 1em;
`

const PortfolioImageRight = styled.img`
  width: 25em;
  padding-left: 1em;
`

/*******************/
/* Contact Section */
/*******************/
const ContactSection = Section.extend`
  background-color: gray;
  position: relative;
  min-height: 200px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class Main extends Component {
  constructor (props) {
    super(props);
  }

  state = {

  };

  scrollToElement = (event) => {
    // value holds the id of the target container
    const targetElementId = event.target.value;
    scroller.scrollTo(targetElementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  }

  render() {
    return (
      <div style={{position: 'absolute'}}>
        <WelcomeSection>
          <ContentContainer>
            <Name>Ted Shin</Name>
            <WelcomeText>Hi, I'm a Software Engineer</WelcomeText>
            <PrimaryButton
              className="btn btn-primary"
              onClick={this.scrollToElement}
              value="about-section"
              type="button"
            >
              <FaAngleDoubleDown size={20} />
              Let's Get Started
            </PrimaryButton>
          </ContentContainer>
        </WelcomeSection>
        <AboutSection id="about-section">
          <SectionTitle>About Me</SectionTitle>
          <AboutContainer>
            <AboutText>I am a Full Stack Developer with experience in building web applications, APIs, and backend systems in Javascript, React, Node, Express, Sass, CSS, HTML, MongoDB, and Linux</AboutText>
            <AboutText>I have a BS in Computer Science from CCNY</AboutText>
          </AboutContainer>
          <DefaultButton
            className="btn btn-light"
            onClick={this.scrollToElement}
            value="portfolio-section"
            type="button"
          >
          Check Out My Projects
          </DefaultButton>
        </AboutSection>
        <PortfolioSection id="portfolio-section">
          <SectionTitle>Projects</SectionTitle>
          <ContentContainer>
            <PortfolioRowContainer>
              <div>
                <a href="https://pollsta.herokuapp.com/polls">
                  <PortfolioImageLeft
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/pollsta.png"
                    alt="Pollsta"
                    title="Pollsta"
                  />
                </a>
              </div>
              <div>
                <a href="https://poppin-bars.herokuapp.com/search">
                    <PortfolioImageRight
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/poppin-bars.png"
                      alt="Poppin Bars"
                      title="Poppin Bars"
                    />
                  </a>
              </div>
            </PortfolioRowContainer>
            <PortfolioRowContainer>
              <div>
                <a href="https://tshin7.github.io/meteorite-landings-with-d3/">
                  <PortfolioImageLeft
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/meteorite.png"
                    alt="Meteorite Landings With D3"
                    title="Meteorite Landings With D3"
                  />
                </a>
              </div>
              <div>
                <a href="https://tshin7.github.io/roguelike-cave-crawler/">
                  <PortfolioImageRight
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/roguelike.png"
                    alt="Roguelike Cave Crawler"
                    title="Roguelike Cave Crawler"
                  />
                </a>
              </div>
            </PortfolioRowContainer>
            <PortfolioRowContainer style={{marginBottom: 0}}>
              <div>
                <a href="https://monitor-stocks.herokuapp.com/">
                  <PortfolioImageLeft
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/stocks.png"
                    alt="Stocks Monitor"
                    title="Stocks Monitor"
                  />
                </a>
              </div>
              <div>
                <a href="https://tshin7.github.io/simon-game-clone/">
                  <PortfolioImageRight
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/simon.png"
                    alt="Simon Game Clone"
                    title="Simon Game Clone"
                  />
                </a>
              </div>
            </PortfolioRowContainer>
          </ContentContainer>
          <DefaultButton
            className="btn btn-light"
            onClick={this.scrollToElement}
            value="contact-section"
            type="button"
          >
          Contact Me
          </DefaultButton>
        </PortfolioSection>
        <ContactSection id="contact-section">
          <SectionTitle><FaEnvelope size={30} />Contact Me</SectionTitle>
          <h2>t d y s h i n     @     g m a i l     .     c o m</h2>
          <LinksContainer>
            <FaLinkedin size={50} />
            <FaGithub size={50} />
          </LinksContainer>
          <h2> Copyright © 2018 Ted Shin</h2>
        </ContactSection>
      </div>
    );
  }
}

export default Main;
