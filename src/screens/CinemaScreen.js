import React from 'react';
import styled from 'styled-components/native';
import Screen from '../components/Screen';
import CinemaDetail from '../components/CinemaDetail';
import locationImg from '../assets/images/location.png';
import phoneImg from '../assets/images/phone.png';

const CinemaScreen = () => (
  <Screen title="Cinema Centro Cibao">
    <Content>
      <CinemaDetail
        icon={locationImg}
        text="Av. Juan Pablo Duarte casi Esq. Estrella Sadhalá. Plaza Bella Terra Mall. Santiago"
      />
      <CinemaDetail
        icon={phoneImg}
        text="809-685-7170"
      />
      <MoviesContainer>
        // TODO: Add movies list
      </MoviesContainer>
    </Content>
  </Screen>
);

const Content = styled.ScrollView`
  flex: 1;
`;

const MoviesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

export default CinemaScreen;
