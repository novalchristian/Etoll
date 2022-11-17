import {faHome, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/home.page';
import SplashPage from '../pages/splash.page';
import HistoryPage from '../pages/history.page';
import {Image} from 'react-native';
import {Logo} from '../../assets';
import BayarPage from '../pages/bayar.page';
import TopUpPage from '../pages/topUp.page';

function LogoTitle() {
  return <Image style={{width: 100, height: 100}} source={Logo} />;
}

const HomeStack = createStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#225084',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
      <HomeStack.Screen
        name="History"
        component={HistoryPage}
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
      <HomeStack.Screen
        name="Bayar"
        component={BayarPage}
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
      <HomeStack.Screen
        name="TopUp"
        component={TopUpPage}
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
    </HomeStack.Navigator>
  );
}

// const Tab = createBottomTabNavigator();
// function Navigation() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         activeTintColor: '#fff',
//         inactiveTintColor: 'lightgray',
//         activeBackgroundColor: '#333335',
//         inactiveBackgroundColor: '#323232',
//         style: {
//           backgroundColor: '#333335',
//           paddingBottom: 3,
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={HomePage}
//         options={{
//           name: 'Home',
//           headerTitle: 'Home',
//           headerShown: true,
//           tabBarIcon: () => {
//             return <FontAwesomeIcon icon={faHome} size={20} color={'black'} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfilePage}
//         options={{
//           headerTitle: 'Profile',
//           headerShown: true,
//           tabBarIcon: () => {
//             return (
//               <FontAwesomeIcon icon={faUserCircle} size={20} color={'black'} />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function Index() {
  const InitialStack = createStackNavigator();
  return (
    <NavigationContainer>
      <InitialStack.Navigator>
        <InitialStack.Screen
          name="Splash"
          component={SplashPage}
          options={{
            headerShown: false,
          }}
        />
        <InitialStack.Screen
          name="Initial"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </InitialStack.Navigator>
    </NavigationContainer>
  );
}
