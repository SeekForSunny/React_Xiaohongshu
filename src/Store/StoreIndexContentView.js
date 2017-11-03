/**
 * Created by SMART on 2017/4/23.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import StoreIndexContentViewHeader from './StoreIndexContentViewHeader';
import StoreIndexProductListView from './StoreIndexProductListView'

export default class StoreIndexContentView extends Component {
    render() {
        const {apis} = this.props;
        return (
            <View style={styles.container}>
               <ScrollView>
                   {/*头部View*/}
                   <StoreIndexContentViewHeader banners={apis.banners}/>
                   {/*内容View*/}
                   <StoreIndexProductListView api_url={apis.homefeeds}/>
               </ScrollView>
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
