import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import theme from '../theme';

const TheatersCard = ({ cityName, cinemas }) => (
  <Container>
    <Header>
      <HeaderText>
        {cityName}
      </HeaderText>
    </Header>
    {cinemas.map(cinema => (
      <CinemaListItem key={cinema.id}>
        <CinemaText>
          {cinema.name}
        </CinemaText>
      </CinemaListItem>
    ))}
  </Container>
);

TheatersCard.propTypes = {
  cityName: PropTypes.string.isRequired,
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }))
};

TheatersCard.defaultProps = {
  cityName: 'City',
  cinemas: [],
};

const Container = styled.View`
  background-color: rgba(255,255,255,0.05);
`;

const Header = styled.View`
  width: 100%;
  height: ${theme.getHeightValue(33)};
  background-color: #E52A3B;
  padding: 0 ${theme.getWidthValue(12)}px;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-family: 'Asap-Bold';
  font-size: ${theme.getHeightValue(16)};
  line-height: ${theme.getHeightValue(16)};
  color: white;
`;

const CinemaListItem = styled.TouchableOpacity`
  width: 100%;
  height: ${theme.getHeightValue(42)};
  padding: 0 ${theme.getWidthValue(12)}px;
  justify-content: center;
`;

const CinemaText = styled.Text`
  font-family: 'Asap-Regular';
  font-size: ${theme.getHeightValue(16)};
  line-height: ${theme.getHeightValue(16)};
  color: white;
`;

export default TheatersCard;
