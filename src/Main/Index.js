/**
 * Created by SMART on 2017/4/21.
 * 索引界面
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
} from 'react-native';

import MainScreen from './MainScreen';

class Index extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'Index', component: MainScreen }}

                configureScene={(route) => {
                  return Navigator.SceneConfigs.FloatFromRight;
                }}

                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );

    }
}

module.exports = Index;
