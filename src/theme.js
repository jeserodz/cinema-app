import { Dimensions } from 'react-native';

const CREATIVE_WIDTH = 320;
const CREATIVE_HEIGHT = 568;

const screen = Dimensions.get('screen');
const window = Dimensions.get('window');

function getWidthValue(value) {
  const ratio = window.width / CREATIVE_WIDTH;
  return value * ratio;
}

function getHeightValue(value) {
  const ratio = window.height / CREATIVE_HEIGHT;
  return value * ratio;
}

export default {
  window,
  screen,
  getWidthValue,
  getHeightValue,
};
