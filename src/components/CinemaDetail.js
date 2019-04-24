import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import theme from '../theme';

const CinemaDetail = ({ icon, text }) => (
  <Container>
    <Icon source={icon} resizeMode="contain" />
    <Detail>{text}</Detail>
  </Container>
);

CinemaDetail.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
};

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: ${theme.getHeightValue(13)};
`;

const Icon = styled.Image`
  width: ${theme.getHeightValue(16)};
  height: ${theme.getHeightValue(16)};
  margin-right: ${theme.getWidthValue(13)};
`;

const Detail = styled.Text`
  width: 100%;
  color: white;
  font-family: 'Asap-Regular';
  font-size: ${theme.getHeightValue(12)};
  line-height: ${theme.getHeightValue(12)};
`;

export default CinemaDetail;
