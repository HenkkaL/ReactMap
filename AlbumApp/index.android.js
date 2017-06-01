

//Import a libraries
import React from 'react';
import {AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Creating a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
);

//The rendering
AppRegistry.registerComponent('AlbumApp', () => App);
