/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './src/components/home';
import NewNote from './src/components/newNote';

AppRegistry.registerComponent(appName, () => Home);
