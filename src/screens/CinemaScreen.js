import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { getCinema } from '../api';
import Screen from '../components/Screen';
import CinemaDetail from '../components/CinemaDetail';
import MovieCard from '../components/MovieCard';
import locationImg from '../assets/images/location.png';
import phoneImg from '../assets/images/phone.png';

const CinemaScreen = ({ navigation }) => {
  const cinemaId = navigation.getParam('cinemaId');
  const [loading, setLoading] = useState(true);
  const [cinema, setCinema] = useState({
    name: '',
    address: '',
    phone: '',
    movies: [],
  });

  async function fetchData() {
    const { data } = await getCinema(cinemaId);
    setLoading(false);
    setCinema(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Screen title={cinema.name} loading={loading}>
      <Content>
        <CinemaDetail icon={locationImg} text={cinema.address} />
        <CinemaDetail icon={phoneImg} text={cinema.phone} />
        <MoviesContainer>
          {cinema.movies.map(movie => (
            <MovieCard
              key={`${movie.id}-${Math.random()}`}
              movie={movie}
              onPress={() => navigation.navigate({
                routeName: 'Movie',
                key: 'movie-screen',
                params: { movieId: movie.id },
              })}
            />
          ))}
        </MoviesContainer>
      </Content>
    </Screen>
  );
};

CinemaScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const Content = styled.ScrollView`
  flex: 1;
`;

const MoviesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default CinemaScreen;
