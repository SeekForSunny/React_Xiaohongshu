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
} from 'react-native';

import Dimensions from 'Dimensions';
var SCREEN_WIDTH = Dimensions.get("window").width;
var scale = SCREEN_WIDTH/375;

class CommonNavBar extends Component {
    
    render() {
        
        const {leftIcon,leftAction,titleView,rightIcon,rightTitle,rightAction, backgroundColor}=this.props;
        
        return (
            <View style={[styles.container,{backgroundColor:backgroundColor}]}>
                <View style={styles.contentStyle}>
                    {this.renderLeftItem(leftIcon,leftAction)}
                    {this.renderTitleView(titleView)}
                    {this.renderRightItem(rightIcon,rightTitle,rightAction)}
                </View>
            </View>
        );
    }

    renderLeftItem(leftIcon,leftAction){
        if(leftIcon){
            if(leftAction){
                return (
                    <TouchableOpacity onPress={()=>leftAction}>
                        <Image source={leftIcon} style={[styles.iconStyle,{position:'absolute',left:15}]}/>
                    </TouchableOpacity>
                );
    
            }else {
                return<Image source={leftIcon} style={[styles.iconStyle,{position:'absolute',left:15}]}/>
            }
        }else{
            return <View/>
        }
        
    }

    renderRightItem(rightIcon,rightTitle,rightAction){
        if(rightIcon){

            if(rightAction){
                return (
                    <TouchableOpacity onPress={()=>rightAction}>
                        <Image source={rightIcon} style={[styles.iconStyle,{position:'absolute',right:15}]}/>
                    </TouchableOpacity>
                );

            }else {
                return<Image source={rightIcon} style={[styles.iconStyle,{position:'absolute',right:15}]}/>
            }
        }else{
            if(rightTitle){
                return <Text style={styles.rightTitleStyle}>{rightTitle}</Text>
            }else {
                return <View/>
            }

        }

    }
    
    renderTitleView(titleView){
        if(titleView){
            return titleView;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height:Platform.OS == "ios"?64:44,
        width:SCREEN_WIDTH,
    },
    contentStyle:{
        height:44,
        width:SCREEN_WIDTH,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:20,
        paddingRight:20,
    },
    iconStyle:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginLeft:10
    },
    rightTitleStyle:{
        color:'white',
        fontSize:15,
        position:'absolute',
        right:15,
    }

});

module.exports = CommonNavBar;