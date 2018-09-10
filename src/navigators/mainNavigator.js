import { createStackNavigator } from 'react-navigation';

import HomePage from '../pages/home/homePage';
import PersonPage from '../pages/person/personPage';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home',
      },
    },
    Person: {
      screen: PersonPage,
      navigationOptions: {
        title: 'Person',
      },
    },
  }
);

export default MainNavigator;
