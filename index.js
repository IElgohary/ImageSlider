import React from 'react';
import { View, AppRegistry } from 'react-native';
import Slider from './src/components/Slider';
import { Header } from './src/components/common';


const App = () => (
  <View style={{ flex: 1 }}>
    <Header title={'Image Slider'} />
    <Slider />
  </View>    
);

AppRegistry.registerComponent('meetBuzz', () => App);
