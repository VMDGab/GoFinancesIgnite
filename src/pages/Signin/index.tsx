import React from 'react';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/Logo.svg';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SigninTitle,
  Footer,
  FooterWrapper,
} from './styles';

export function Signin() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={120}
            height={68}
          />

          <Title>
            Controle suas {'\n'}
            finanças de forma{'\n'}
            muito simples{'\n'}
          </Title>
        </TitleWrapper>

        <SigninTitle>
          Faça seu login com{'\n'}
          uma das contas abaixo
        </SigninTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title='Entrar com Google'
            svg={GoogleSvg} />

          <SignInSocialButton
            title='Entrar com Apple'
            svg={AppleSvg} />
        </FooterWrapper>
      </Footer>

    </Container>
  );
}