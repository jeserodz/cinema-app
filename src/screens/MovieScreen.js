import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import MovieScores from '../components/MovieScores';
import Video from '../components/Video';
import theme from '../theme';
import { getMovie } from '../api';
import topGradientImg from '../assets/images/top-gradient.png';
import chevronLeftImg from '../assets/images/chevron-left.png';

const MovieScreen = ({ navigation }) => {
  const movieId = navigation.getParam('movieId');
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  async function fetchData() {
    const { data } = await getMovie(movieId);
    setLoading(false);
    setMovie(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {movie && (
        <Background
          source={{ uri: movie.posterUrl }}
          resizeMode="cover"
        />
      )}
      <TopGradient
        source={topGradientImg}
        resizeMode="cover"
      />
      {loading && <Loading />}
      {movie && (
        <SafeAreaView style={{ flex: 1 }}>
          <Content contentContainerStyle={{ alignItems: 'center' }}>
            <Cover
              source={{ uri: movie.posterUrl }}
              resizeMode="cover"
            />
            <Title>{movie.title}</Title>
            <MovieScores
              metacritic={movie.metacriticScore || '-'}
              imdb={movie.imdbScore || '-'}
            />
            <Summary>{movie.summary}</Summary>
            <Video youtubeId={movie.youtubeId} />
          </Content>
        </SafeAreaView>
      )}
      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonImage
          source={chevronLeftImg}
          resizeMode="contain"
        />
      </BackButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #131212;
`;

const Background = styled.Image`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  opacity: 0.10;
`;

const TopGradient = styled.Image`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: ${theme.getHeightValue(100)};
`;

const Content = styled.ScrollView`
  flex: 1;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${theme.getHeightValue(40)};
  left: ${theme.getWidthValue(15)};
  width: ${theme.getHeightValue(25)};
  height: ${theme.getHeightValue(25)};
  align-items: center;
  justify-content: center;
`;

const BackButtonImage = styled.Image`
  width: 60%;
  height: 60%;
`;

const Cover = styled.Image`
  width: ${theme.getHeightValue(167)};
  height: ${theme.getHeightValue(246)};
  margin-top: ${theme.getHeightValue(20)};
  margin-bottom: ${theme.getHeightValue(20)};
  background: black;
`;

const Title = styled.Text`
  width: ${theme.getWidthValue(290)};
  text-align: center;
  font-family: 'Asap-Bold';
  font-size: ${theme.getWidthValue(32)};
  line-height: ${theme.getWidthValue(37)};
  color: white;
`;

const Summary = styled.Text`
  width: ${theme.getWidthValue(290)};
  text-align: center;
  font-family: 'Asap-Regular';
  font-size: ${theme.getWidthValue(12)};
  line-height: ${theme.getWidthValue(14)};
  color: white;
  margin-bottom: ${theme.getWidthValue(20)};
`;

export default MovieScreen;
