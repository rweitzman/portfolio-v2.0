import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const MobileSkills = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Mobile Skills" />
         
                <div>
                <ul id="mobile-skills">
                    {/* <li><i class="fab fa-react"></i>React-Native</li>
                    <li><img src={"/img/xcode.png"}>XCode</li>
                    <li><i class="fab fa-android"></i>Android SDK</li>
                    <li><i class="fab fa-aws"></i>AWS</li>
                    <li><img src="/img/cloud.png" id="cloud">Cloudwatch</li>
                    <li><img src="/img/elastic.png" id="elastic">Elasticsearch</li>
                    <li><img id="kibana" src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt531cab4e93907de5/5d0e3b58b0b16b1c530d3cfa/logo-kibana-32-white.svg">Kibana</li> */}
                </ul>
                <div class="skills-gradient"></div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default MobileSkills;
