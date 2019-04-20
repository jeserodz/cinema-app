import React from 'react';
import Screen from '../components/Screen';
import CinemasCard from '../components/CinemasCard';
import styled from 'styled-components/native';
import theme from '../theme';

const TheatersScreen = () => (
  <Screen title="Cinesz">
    <CinemasContainer>
      <CinemasCard
        cityName="Santiago"
        cinemas={[{
          id: '1',
          name: 'Bella Terra Mall'
        },{
          id: '2',
          name: 'Cinema Centro Cibao'
        },{
          id: '3',
          name: 'Las Colinas Mall'
        }]}
      />
    </CinemasContainer>
  </Screen>
);

const CinemasContainer = styled.ScrollView`
  flex: 1;
`;

export default TheatersScreen;
