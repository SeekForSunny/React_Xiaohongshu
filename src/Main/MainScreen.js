/**
 * Created by SMART on 2017/4/21.
 * 主界面
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomeIndex from '../Home/HomeIndex';//首页
import  ExploreIndex from '../Explore/ExploreIndex';//发现
import  StoreIndex from  '../Store/StoreIndex';//购买
import MessageIndex from  '../Message/MessageIndex';//消息
import  MeIndex from '../Me/MeIndex'//我
import TabBar from '../Common/TabBar'


class MainView extends Component {

    static defaultProps={
        
        //TabBar标题
        titles:["首页","发现","购买","消息","我"],
        
        //TabBar图标
        icons:[[require('../images/tab_home.png'),require('../images/tab_home_h.png')],
            [require('../images/tab_search.png'),require('../images/tab_search_h.png')],
            [require('../images/tab_store.png'),require('../images/tab_store_h.png')],
            [require('../images/tab_msn.png'),require('../images/tab_msn_h.png')],
            [require('../images/tab_me.png'),require('../images/tab_me_h.png')]
        ]
    };

    render() {
        return (
            <ScrollableTabView
                tabBarPosition="bottom"
                locked={true}
                scrollWithoutAnimation={true}
                renderTabBar={() => <TabBar titles={this.props.titles} icons={this.props.icons}/>}
            >
                <HomeIndex {...this.props}/>
                <ExploreIndex {...this.props}/>
                <StoreIndex {...this.props}/>
                <MessageIndex {...this.props}/>
                <MeIndex {...this.props}/>

            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
});

module.exports = MainView;