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

import CommonNavBar from '../Common/CommonNavBar'
import ContentAPIs from  '../LocalData/ContentAPIs.json'
import  StoreIndexContentView from './StoreIndexContentView'
import {SCREEN_WIDTH} from '../Common/Config'

import ScrollableTabView from 'react-native-scrollable-tab-view';

class StoreIndex extends Component {

    static defaultProps={
        titleArr:["推荐","美妆","时尚","居家","母婴","美食","关注"],
    }

      // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            titleArr:[],
        };
      }

    render() {
        return (
            <View style={styles.container}>
                {/*导航栏*/}
                <CommonNavBar
                    backgroundColor="#F53D4F"
                    titleView={this.renderTitleView()}
                    rightIcon={require('../images/nav_store_category.png')}
                />

                {/*设置内容View*/}
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
                <Text style={{fontSize:12,color:'white',marginLeft:10}}>大家都在搜"MO&Co."</Text>
            </View>
        );
    }

    //设置子View
    renderContentView(){

        if(this.state.titleArr.length ==0){return;}
        var StoreIndexAPIs = ContentAPIs.StoreIndexAPIs;

        var itemArr = [];
        this.state.titleArr.map((title,index)=>{
            var apis = {};
            if(index == 0){
                apis = StoreIndexAPIs.recommend;
            }else if(index == 1){
                apis = StoreIndexAPIs.makeup;
            }else if(index == 2){
                apis = StoreIndexAPIs.fashions;
            }else if(index == 3){
                apis = StoreIndexAPIs.home;
            }else if(index == 4){
                apis = StoreIndexAPIs.babycare;
            }else if(index == 5){
                apis = StoreIndexAPIs.foods;
            }else if(index == 6){
                apis = StoreIndexAPIs.focus;
            }
            itemArr.push(
                <StoreIndexContentView key={index} tabLabel={title} apis={apis}/>
            );
        });

        return <ScrollableTabView
            tabBarActiveTextColor='red'
            tabBarInactiveTextColor="gray"
            tabBarUnderlineStyle={{backgroundColor:'red',height:2}}
        >
            {itemArr}
        </ScrollableTabView>
    }
    
    //加载网络请求
    componentWillMount() {
        
        var StoreIndexAPIs = ContentAPIs.StoreIndexAPIs;
        var tabs = StoreIndexAPIs.tabs;
        
        fetch(tabs)
            .then((response)=>response.json())
            .then((responseData)=>{

                this.dealWithJsonData(responseData.data);
            })
            .catch((error)=>{
                console.error(error);
            })
        
    }

    //处理返回的标题数组
    dealWithJsonData(dataArr){
        var titleArr = [];
        dataArr.map((obj,index)=>{
            titleArr.push(obj.name);
        })
        this.setState({
            titleArr:titleArr,
        });
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

module.exports = StoreIndex;