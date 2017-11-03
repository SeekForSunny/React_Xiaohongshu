/**
 * Created by SMART on 2017/4/21.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Dimensions from 'Dimensions';
var SCREEN_WIDTH = Dimensions.get("window").width;

import ContentAPIs from  '../LocalData/ContentAPIs.json'

import CommonNavBar from '../Common/CommonNavBar'
import  HomeIndexContentView from './HomeIndexContentView'

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

class HomeIndex extends Component {

    static defaultProps = {
        titleArr: ["推荐","深圳", "男人", "护肤", "居家", "时尚", "美食", "运动", "旅行", "彩妆", "母婴"],
    };

    render() {
        return (
            <View style={styles.container}>
                {/*导航栏*/}
                <CommonNavBar
                    backgroundColor="#F53D4F"
                    titleView={this.renderTitleView()}
                    rightIcon={require('../images/nav_btn_cam.png')}
                />
                {/*设置子View*/}
                {this.renderContentView()}

            </View>
        );
    }

    //设置导航栏TitleView
    renderTitleView(){
        return(
            <View style={{
            backgroundColor:'#D53444',
            height:25,
            width:parseFloat(SCREEN_WIDTH*0.85),
            flexDirection:'row',
            alignItems:'center',
            paddingLeft:15,
            borderRadius:5,
            marginRight:35,
            }}>
                <Image source={require('../images/nav_bar_search.png')} style={{width:15,height:15}}/>
                <Text style={{fontSize:12,color:'white',marginLeft:10}}>搜索笔记,商品和用户</Text>
            </View>
        );
    }

    //设置子View
    renderContentView(){

        const {titleArr} = this.props;
        var HomeFeedAPIs = ContentAPIs['HomeFeedAPIs'];
        
        var itemArr = [];
        titleArr.map((title,index)=>{
            var api_url = HomeFeedAPIs[index];
            itemArr.push(
              <HomeIndexContentView key={index} tabLabel={title} api_url={api_url}/>
            );
        });

        return <ScrollableTabView
            tabBarActiveTextColor='red'
            tabBarInactiveTextColor="gray"
            tabBarUnderlineStyle={{backgroundColor:'red',height:2}}
            renderTabBar={() => <ScrollableTabBar />}
        >
            {itemArr}
        </ScrollableTabView>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex:1
    },
});

module.exports = HomeIndex;