/**
 * Created by SMART on 2017/4/29.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {SCREEN_WIDTH} from '../Common/Config'

export default class MessageIndexNotifyCell extends Component {
    render() {
        const {rowData} = this.props;

        var avatar_url = rowData.avatar;
        var image_url = rowData.content_image;
        var title = rowData.title;
        var date = this.getFormatDate(rowData.time);


        return (
            <View style={styles.container}>
                <View style={styles.avatarOuterViewStyle}>
                    <Image source={{uri:avatar_url}} style={styles.avatarStyle}/>
                </View>
                <View style={styles.contentViewStyle}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text style={styles.subtitleStyle}>{date}</Text>
                    <Image source={{uri:image_url}} style={styles.contentImageStyle}/>
                </View>
            </View>
        );
    }

    // 时间戳转日期
    getFormatDate(timeStamp){
        
        var date = new Date(timeStamp*1000);

        var year = date.getFullYear();

        var month =date.getMonth()+1;
        month = month <10?'0'+month:month;

        var day = date.getDate();
        day = day <10?'0'+day:day;

        var hour =date.getHours();
        hour = hour <10?'0'+hour:hour;

        var minutes =date.getMinutes();
        minutes = minutes <10?'0'+minutes:minutes;

        return year +"-" +month+"-"+day + " "+hour +":"+minutes;
    }
}

const styles = StyleSheet.create({
    container: {
        width:SCREEN_WIDTH,
        justifyContent: 'center',
        flexDirection:'row',
        paddingTop:15,
    },
    avatarStyle:{
        width:40,
        height:40,
        borderRadius:20,

    },
    avatarOuterViewStyle:{
        flex:2,
        alignItems:'center',
    },
    contentViewStyle:{
        flex:8,
        paddingBottom:15,
        borderBottomColor:'#DCDCDC',
        borderBottomWidth:0.5,
    },
    titleStyle:{
        fontSize:13,
        marginBottom:7,
        paddingRight:15,
    },
    subtitleStyle:{
        fontSize:13,
        color:'gray',
    },
    contentImageStyle:{
        height:150,
        marginRight:15,
        marginTop:15,
        borderRadius:5,
    }
});