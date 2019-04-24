import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import theme from '../theme';

const MovieCard = ({ movie, onPress }) => (
  <Container onPress={() => onPress(movie)}>
    <Cover
      source={{ url: movie.posterUrl }}
      resizeMode="cover"
    />
    <Title>{movie.title}</Title>
    <TextLine>{`${movie.room} - ${movie.language}`}</TextLine>
    <TextLine>{movie.date}</TextLine>
    <TextLine>{movie.hour}</TextLine>
  </Container>
);

MovieCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.string,
    posterUrl: PropTypes.string,
    title: PropTypes.string,
    room: PropTypes.string,
    language: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
  }).isRequired,
};

const Container = styled.TouchableOpacity`
  margin-bottom: ${theme.getHeightValue(20)};
`;

const Cover = styled.Image`
  width: ${theme.getWidthValue(130)};
  height: ${theme.getWidthValue(192)};
  background-color: black;
`;

const Title = styled.Text`
  width: 100%;
  margin-top: ${theme.getHeightValue(8)};
  text-align: center;
  font-family: 'Asap-SemiBold';
  font-size: ${theme.getWidthValue(14)};
  line-height: ${theme.getWidthValue(14)};
  color: #FDB62F;
`;

const TextLine = styled.Text`
  width: 100%;
  text-align: center;
  font-family: 'Asap-SemiBold';
  font-size: ${theme.getWidthValue(12)};
  line-height: ${theme.getWidthValue(16)};
  color: white;
`;

export default MovieCard;
