import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Loading from './Loading';
import backgroundImage from '../assets/images/background.jpg';
import theme from '../theme';

const Screen = ({ title, loading, children }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <Background source={backgroundImage} resizeMode="cover" />
    <SafeAreaView style={{ flex: 1 }}>
      <Content>
        <Title>{title}</Title>
        {!loading && children}
      </Content>
    </SafeAreaView>
    {loading && <Loading />}
  </Container>
);

Screen.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

const Container = styled.View`
  flex: 1;
  background-color: #1C1C1C;
`;

const Content = styled.View`
  flex: 1;
  padding: ${theme.getWidthValue(15)}px;
`;

const Background = styled.Image`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  height: 100%;
  width: 100%;
  opacity: .10;
`;

const Title = styled.Text`
  font-family: 'Asap-Bold';
  font-size: ${theme.getHeightValue(32)};
  margin-bottom: ${theme.getHeightValue(20)};
  color: white;
`;

export default Screen;
