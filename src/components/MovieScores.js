import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import imdbImg from '../assets/images/IMDb.png';
import theme from '../theme';

const MovieScores = ({ metacritic, imdb }) => (
  <Container>
    <Metacritic>{metacritic}</Metacritic>
    <IMDb source={imdbImg}>
      <IMDbText>{`${imdb}/10`}</IMDbText>
    </IMDb>
  </Container>
);

MovieScores.propTypes = {
  metacritic: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imdb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

MovieScores.defaultProps = {
  metacritic: 0,
  imdb: 0,
};

const Container = styled.View`
  flex-direction: row;
  margin: ${theme.getHeightValue(15)}px 0 ${theme.getHeightValue(15)}px 0;
`;

const Metacritic = styled.Text`
  width: ${theme.getWidthValue(20)};
  height: ${theme.getWidthValue(20)};
  font-family: 'Asap-SemiBold';
  font-size: ${theme.getWidthValue(10)};
  line-height: ${theme.getWidthValue(20)};
  text-align: center;
  color: white;
  background-color: #62C732;
  margin-right: ${theme.getWidthValue(7)};
`;

const IMDb = styled.ImageBackground`
  width: ${theme.getWidthValue(83)};
  height: ${theme.getWidthValue(20)};
  padding-left: ${theme.getWidthValue(39)};
  align-items: center;
  justify-content: center;
`;

const IMDbText = styled.Text`
  width: 100%;
  color: white;
  font-size: ${theme.getWidthValue(10)};
  text-align: center;
`;

export default MovieScores;
