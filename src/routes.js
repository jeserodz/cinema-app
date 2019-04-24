import { createStackNavigator, createAppContainer } from 'react-navigation';
import { CinemasScreen, CinemaScreen, MovieScreen } from './screens';

const AppNavigator = createStackNavigator(
  {
    Cinemas: {
      screen: CinemasScreen,
    },
    Cinema: {
      screen: CinemaScreen,
    },
    Movie: {
      screen: MovieScreen,
    },
  },
  {
    initialRouteName: 'Cinemas',
    initialRouteKey: 'cinemas-screen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
