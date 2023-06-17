import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle,  SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:+92312163744'>+923121637744</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Mail</LinkTitle>
      <LinkItem href='mailto:talhakhalil535@gmail.com'>talhakhalil535@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialContainer>
      <SocialIconsContainer>
        <SocialIcons href='https://github.com'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://linkedin.com'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://instagram.com'>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
