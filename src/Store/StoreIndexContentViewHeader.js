/**
 * Created by SMART on 2017/4/23.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Swiper from '../Common/Swiper'
import {SCREEN_WIDTH,SCREEN_SCALE} from '../Common/Config'

export default class StoreIndexContentViewHeader extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            ads_list:[],
            channelArr:[],
            headerH:0,
        };
    }
    render() {
        const {banners} = this.props;
        var bannerH = 200*SCREEN_SCALE;
        if(banners.match('http') == null){bannerH = 0;}
        this.state.headerH = bannerH;

        return (
            <View ref = "header" style={styles.container}>
                {/*轮播图*/}
                <Swiper images = {this.state.ads_list} bannerH={bannerH}/>
                {/*频道分类*/}
                {this.renderChannelView()}
            </View>
        );
    }

    //频道分类
    renderChannelView(){
        var tempArr =this.state.channelArr;
        var itemArr = [];
        var COL = 2;
        var width=parseFloat(SCREEN_WIDTH/COL);
        var height = parseFloat(width*0.4);
        this.state.headerH += parseInt((tempArr.length + COL -1)/COL) * height;
        if(tempArr.length){
            tempArr.map((info,index)=>{
                var image_url = info.image;
                var title = info.title;
                var desc = info.desc;

                itemArr.push(
                    <View key={index} style={[{width:width,height:height},styles.perChannelItemStyle]}>
                        <View style={{flex:7}}>
                            <Text style={{fontSize:12*SCREEN_SCALE,fontWeight:'bold'}}>{title}</Text>
                            <Text style={{fontSize:10*SCREEN_SCALE,color:'grey',marginTop:7}}>{desc}</Text>
                        </View>
                        <Image source={{uri:image_url}} style={{flex:3,height:height,resizeMode:'contain'}}/>
                    </View>
                );
            });

            return (
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {itemArr}
                </View>
            );
        }
    }

    componentDidUpdate() {
        this.refs.header.setNativeProps({
            style:{
                height:this.state.headerH,
            }
        });
    }

    componentWillMount() {
        const {banners} = this.props;
        if(banners.match('http') == null){return;}

        fetch(banners)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.dealWithJsonData(responseData);
            })
            .catch((error)=>{
                console.error(error);
            })


    }

    //处理返回数据
    dealWithJsonData(responseData){
        var dataArr =  responseData.data;
        dataArr.map((obj,index)=>{
            if(obj.model_type == "banner"){
                var tempArr = obj.ads_list;
                var list = [];
                tempArr.map((value,index)=>{
                    list.push(value.image);
                });
                this.setState({ads_list:list});
            }
            if(obj.model_type == "channel"){
                this.setState({channelArr:obj.ads_list});
            }
        })

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom:10*SCREEN_SCALE,
    },
    perChannelItemStyle:{
        flexDirection:'row',
        alignItems:'center',
        padding:10*SCREEN_SCALE,
        borderBottomColor:'#DCDCDC',
        borderBottomWidth:.5,
        borderRightColor:'#DCDCDC',
        borderRightWidth:0.5,
    }
});