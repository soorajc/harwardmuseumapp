/**
 * Harward Museum App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from './src/navigation/tab';
import ObjectList from './src/screens/Object';
import ObjectDetails from './src/screens/ObjectDetails';

const Stack = createStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator initialRouteName="Feed" headerMode="none">
      <Stack.Screen
        name="Home"
        component={TabBar}
        options={{headerTitle: null}}
      />
      <Stack.Screen
        name="ObjectList"
        component={ObjectList}
        options={{headerTitle: null}}
      />
      <Stack.Screen
        name="ObjectDetails"
        component={ObjectDetails}
        options={{headerTitle: null}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackConfig />
    </NavigationContainer>
  );
};
export default App;
