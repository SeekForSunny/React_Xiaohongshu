/**
 * Created by SMART on 2017/4/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
} from 'react-native';

import Dimensions from 'Dimensions';
var SCREEN_WIDTH = Dimensions.get("window").width;
var scale = SCREEN_WIDTH/375;

class TabBar extends Component {
    render() {
        const {titles,icons,tabs,activeTab,goToPage}= this.props;
        return (
            <View style={styles.container}>
                {
                    tabs.map((tab,index)=>{

                        return(
                            <TouchableOpacity key={index} onPress={()=>{goToPage(index)}} activeOpacity={1}>
                                <View style={{alignItems:'center'}}>
                                    <Image source={icons[index][activeTab==index?1:0]} style={styles.iconStyle}/>
                                    <Text style={{color:activeTab==index?'#F53D4F':'gray',fontSize:12*scale}}>{titles[index]}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:Platform.OS=="ios"?49:60,
        width:SCREEN_WIDTH,
        backgroundColor: 'white',
        borderTopColor:'#D3D3D3',
        borderTopWidth:.5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    iconStyle:{
        width:Platform.OS=="ios"?25:20,
        height:Platform.OS=="ios"?25:20
    }
});

module.exports = TabBar;
