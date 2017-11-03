/**
 * Created by SMART on 2017/4/21.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CommonNavBar from '../Common/CommonNavBar'
class MeIndex extends Component {
    render() {

        return (
            <View style={styles.container}>
                {/*导航栏*/}
                <CommonNavBar
                    backgroundColor="white"
                />
                
                <Text style={styles.welcome}>
                    我
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

module.exports = MeIndex;