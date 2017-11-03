/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import  Index from './src/Main/Index';

export default class React_Xiaohongshu extends Component {
  render() {
    return <Index style={styles.container}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
});

AppRegistry.registerComponent('React_Xiaohongshu', () => React_Xiaohongshu);
