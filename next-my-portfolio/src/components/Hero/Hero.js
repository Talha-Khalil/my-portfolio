import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Welcome to <br/>Talha&#39;s Portfolio 
    </SectionTitle>
    <SectionText>
    Hello, I&#39;m Talha Khalil, a web developer with a passion for creating beautiful and functional websites. I pride myself on my ability to deliver high-quality websites that are user-friendly, responsive, and accessible to all. I&#39;m always on the lookout for the latest trends and technologies to ensure my clients receive modern and innovative solutions. Thank you for visiting my portfolio, please feel free to contact me if you have any questions or project inquiries.
    </SectionText>
    <Button>Learn more</Button>
  </LeftSection>
</Section>
);

export default Hero;