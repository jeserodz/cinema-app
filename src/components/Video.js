import React from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import theme from '../theme';
import youtubeImg from '../assets/images/youtube.png';

const Video = ({ youtubeId }) => (
  <Container
    activeOpacity={0.8}
    onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${youtubeId}`)}
  >
    <Icon source={youtubeImg} resizeMode="contain" />
  </Container>
);

Video.propTypes = {
  youtubeId: PropTypes.string.isRequired,
};

const Container = styled.TouchableOpacity`
  width: ${theme.getWidthValue(290)};
  height: ${theme.getWidthValue(183)};
  background: black;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: ${theme.getWidthValue(43.10)};
  height: ${theme.getWidthValue(30.24)};
`;

export default Video;
