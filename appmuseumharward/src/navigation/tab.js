import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/Home';
import AudioScreen from '../screens/Audio';
import VideoScreen from '../screens/Video';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Audio') {
            iconName = 'headphones';
          } else {
            iconName = 'vimeo';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: '#20232a',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Audio" component={AudioScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
    </Tab.Navigator>
  );
}
