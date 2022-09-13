import 'react-native-gesture-handler';

import React from 'react';
import EditNote from './editNote';
import NotesList from './notesList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store, persistor} from '../store/redux/store';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutUs from './aboutUs';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#6200EE'},
        headerTintColor: 'white',
      }}>
      <Drawer.Screen name="Categories" component={NotesList} />
      <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
  );
}
function Home() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {backgroundColor: '#6200EE'},
                headerTintColor: 'white',
                headerTitleAlign: 'center',
              }}>
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="EditNote" component={EditNote} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}

export default Home;
