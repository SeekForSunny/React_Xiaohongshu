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
import  {SCREEN_WIDTH} from '../Common/Config'

import ScrollableTabView from 'react-native-scrollable-tab-view';
import  MessageIndexContentView from './MessageIndexContentView'

class MessageIndex extends Component {

    static defaultProps={
    titleArr:["动态","关于你","通知"],
    };

    render() {
        return (
            <View style={styles.container}>
                {/*导航栏*/}
                <CommonNavBar
                    backgroundColor="#F53D4F"
                    titleView = {this.renderTitleView()} 
                    rightTitle="客服中心"
                />

                {/*内容View*/}
                <ScrollableTabView
                    tabBarActiveTextColor='red'
                    tabBarInactiveTextColor="gray"
                    tabBarUnderlineStyle={{backgroundColor:'red',height:2}}
                >
                    {this.renderContentView()}
                </ScrollableTabView>
                
            </View>
        );
    }

    //设置标题栏
    renderTitleView(){
        return (
            <Text style={{
            fontSize:18,
            color:'white',
            fontWeight:'bold',
            }}>消息</Text>
        );
    }

    //设置内容View
    renderContentView(){

        var itemArr = [];
        this.props.titleArr.map((title,index)=>{
            var url="https://www.xiaohongshu.com/api/sns/v1/message/sysmessage?deviceId=940C97C6-7081-47FB-A65C-B399C46B0123&lang=zh&num=10&platform=iOS&sid=session.1175729576447743313&sign=cf11e7bd0471813c2711d6dd2c449c93&t=1493395810";
            itemArr.push(
                <MessageIndexContentView  key = {index} url={index ==2?url:""} tabLabel={title}/>
            );
        })

        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

module.exports = MessageIndex;