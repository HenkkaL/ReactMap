

//Import a libraries
import React from 'react';
import {AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/AlbumList';

//Creating a Component
const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
);

//The rendering
AppRegistry.registerComponent('AlbumApp', () => App);
