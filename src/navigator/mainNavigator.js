import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile60019Navigator from '../features/UserProfile60019/navigator';
import Maps60000Navigator from '../features/Maps60000/navigator';
import Settings59978Navigator from '../features/Settings59978/navigator';
import Settings59963Navigator from '../features/Settings59963/navigator';
import NotificationList59962Navigator from '../features/NotificationList59962/navigator';
import Maps59961Navigator from '../features/Maps59961/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile60019: { screen: UserProfile60019Navigator },
Maps60000: { screen: Maps60000Navigator },
Settings59978: { screen: Settings59978Navigator },
Settings59963: { screen: Settings59963Navigator },
NotificationList59962: { screen: NotificationList59962Navigator },
Maps59961: { screen: Maps59961Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
