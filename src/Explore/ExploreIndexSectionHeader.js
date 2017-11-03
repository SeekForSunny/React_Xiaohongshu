/**
 * Created by SMART on 2017/4/23.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ExploreIndexSectionHeader extends Component {
    render() {
        const {title,isShowMore} = this.props;
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{height:15,backgroundColor:'red',width:2,marginRight:7}}/>
                    <Text style={{fontSize:13}}>{title}</Text>
                </View>

                <View style={{position:'absolute',right:15,display: isShowMore ? '':'none',flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:13,color:'grey',marginRight:7}}>查看更多</Text>
                    <Image source={require('../images/right_indicator.png')} style={{width:7,height:7}}/>
                </View>

             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'center',
        height:50,
    },
});
