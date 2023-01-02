import React, { useContext } from 'react';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/Logo.svg';
import { useAuth } from '../../hooks/auth';

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
import { Alert, Platform } from 'react-native';

export function Signin() {

  const { signInWithGoogle, signInWithApple } = useAuth()

  async function handleSignInWithGoogle() {
    try {

      await signInWithGoogle();

    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel se conectar a uma conta Google')

    }

  }

  async function handleSignInWithApple() {
    try {

      await signInWithApple();

    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel se conectar a uma conta apple')

    }

  }
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
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />

          { Platform.OS === 'ios' &&
            <SignInSocialButton
              title='Entrar com Apple'
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          }
        </FooterWrapper>
      </Footer>

    </Container>
  );
}