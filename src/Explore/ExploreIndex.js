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
    ScrollView,
} from 'react-native';

import CommonNavBar from '../Common/CommonNavBar'

import {SCREEN_WIDTH} from '../Common/Config'
import  Swiper from  '../Common/Swiper';

import ContentAPIs from '../LocalData/ContentAPIs.json'
import ExploreIndexSectionHeader from  './ExploreIndexSectionHeader'

class ExploreIndex extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bannerArr:[],//轮播
            destination:[],//全球购
            topic:[],//热门话题
            videos:[],//热门视频
            multi_notes:[],
        };
    }
    render() {
        return (
            <View style={styles.container}>
                {/*导航栏*/}
                <CommonNavBar
                    backgroundColor = "#F53D4F"
                    titleView={this.renderTitleView()}
                    rightIcon={require('../images/nav_btn_invite.png')}
                />

                <ScrollView>
                    {/*轮播*/}
                    <Swiper images = {this.state.bannerArr} bannerH = {120}/>

                    {/*热门话题*/}
                    <View style={styles.sectionViewStyle}>
                        <ExploreIndexSectionHeader title="热门话题" isShowMore={true}/>
                        {this.renderTopic()}
                    </View>

                    {/*全球购*/}
                    <View style={styles.sectionViewStyle}>
                        <ExploreIndexSectionHeader title="全球购" isShowMore={true}/>
                        {this.renderDestination()}
                    </View>

                    {/*热门视频*/}
                    <View style={styles.sectionViewStyle}>
                        <ExploreIndexSectionHeader title="热门视频" isShowMore={true}/>
                        {this.renderVideos()}
                    </View>

                    {/*热门长笔记*/}
                    <View style={styles.sectionViewStyle}>
                        <ExploreIndexSectionHeader title="热门长笔记"  isShowMore={false}/>
                        {this.renderMultiNotes()}
                    </View>
                </ScrollView>

            </View>
        );
    }

    //热门长笔记
    renderMultiNotes(){
        var itemArr = [];
        var notesArr = this.state.multi_notes;
        if(notesArr.length == 0)return;
        notesArr.map((note,index)=>{

            //描述图片
            var image_url = note.images_list[0]['url'];
            //标题
            var title = note.title;
            //内容
            var desc = note.desc;
            //标签
            var tags = note.tags;
            var tagsArr = [];
            tags.map((tag,index)=>{
                var name = tag.name;
                tagsArr.push(name);
            });

            itemArr.push(
                <View  key = {index} style={styles.topicItemStyle}>
                    <Image source={{uri:image_url}} style={styles.notesDescImageStyle}/>
                    <View style={{paddingLeft:15,width:SCREEN_WIDTH-120-3*15}}>
                        <Text style={{marginBottom:7,paddingRight:15,fontSize:12}}>{title}</Text>
                        <Text style={{color:'grey',fontSize:12,marginBottom:7}} numberOfLines={2}>{desc}</Text>
                        {this.renderTags(tagsArr)}
                    </View>
                    <Image/>
                </View>
            );
        });

        return itemArr;
    }

    renderTags(tagsArr){

        var itemArr = [];
        tagsArr.map((tag,index)=>{
            itemArr.push(
                <View  key = {index} style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../images/MutiNote_Hash_Tag.png')} style={{width:10,height:10,resizeMode:'contain'}}/>
                    <Text  style={{color:'#8EB2EA',fontSize:10,marginRight:15}} key={index}>{tag}</Text>
                </View>
            )
        });

        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {itemArr}
            </ScrollView>
        );
    }

    //热门视频
    renderVideos(){
        var itemArr = [];
        var videosArr = this.state.videos;
        videosArr.map((video,index)=>{
            var image_url = video.images_list[0]['url'];
            var title = video.title;
            var view_count = video.view_count;
            var itemWH = parseFloat((SCREEN_WIDTH -3*20)/2.5);
            itemArr.push(
                <View key={index} style={{width:itemWH,height:itemWH*1.2,marginRight:20,paddingBottom:20}}>
                    <Image source={{uri:image_url}} style={{flex:7,borderRadius:5}}/>
                    <View style={{flex:3}}>
                        <Text style={{fontSize:12,marginTop:7}} numberOfLines={2}>{title}</Text>
                    </View>
                </View>
            );
        })

        return (
            <ScrollView
                horizontal={true}
            >
                {itemArr}
            </ScrollView>
        );
    }

    //全球购
    renderDestination(){
        var itemArr = [];
        var destinationArr = this.state.destination;
        destinationArr.map((destination,index)=>{
            var image_url = destination.image;
            var name = destination.name;
            var discovery_total = destination.discovery_total;
            var itemWH = parseFloat((SCREEN_WIDTH -3*20)/2.5);
            itemArr.push(
                <View key={index} style={{width:itemWH,height:itemWH*1.2,marginRight:20,paddingBottom:20}}>
                    <Image source={{uri:image_url}} style={{flex:7,borderRadius:5}}/>
                    <View style={{flex:3}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../images/Topic_Tag.png')} style={{width:10,height:10,resizeMode:'contain'}}/>
                            <Text style={{fontSize:12,marginTop:7,marginBottom:7}}>{name}</Text>
                        </View>
                        <Text style={{fontSize:12,color:'gray'}}>{discovery_total}篇更新</Text>
                    </View>
                </View>
            );
        })

        return (
            <ScrollView
                horizontal={true}
            >
                {itemArr}
            </ScrollView>
        );

    }

    //热门话题
    renderTopic(){
        var itemArr = [];
        var topicArr = this.state.topic;
        if(topicArr.length == 0)return;
        topicArr.map((topic,index)=>{
            var image_url = topic.image;
            var name = topic.name;
            var total_follows = topic.total_follows;
            var is_new = topic.is_new;

            itemArr.push(
                <View  key = {index} style={styles.topicItemStyle}>
                    <Image source={{uri:image_url}} style={styles.topicDescImageStyle}/>
                    <View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../images/Topic_Tag.png')} style={{width:10,height:10,resizeMode:'contain'}}/>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>{name}</Text>
                            <Image source={require('../images/Topic_Tag_New.png')} style={{width:30,height:15,resizeMode:'contain'}}/>
                        </View>
                        <Text style={{color:'grey',fontSize:12,marginTop:7}}>{total_follows} 人参加</Text>
                    </View>
                    <Image source={require('../images/NoteTag_Indicator.png')} style={{width:10,height:10,position:'absolute',right:15}}/>
                </View>
            );
        })

        return itemArr;
    }

    //导航栏TitleView
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

    //加载网络请求
    componentWillMount() {

        var ExploreIndexAPIs = ContentAPIs["ExploreIndexAPIs"];

        //加载Banner
        var banner_url = ExploreIndexAPIs["banner"];
        fetch(banner_url)
            .then((response)=>response.json())
            .then((responseData)=>{
               this.dealWithBannerJsonData(responseData)
            })
            .catch((error)=>{
                console.error(error);
            })

        //加载笔记
        var multi_notes_url = ExploreIndexAPIs["multi_notes"];
        fetch(multi_notes_url)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.dealWithMultiNotesJsonData(responseData)
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    //处理数据
    dealWithMultiNotesJsonData(responseData){
        var notesArr = responseData.data;
        this.setState({multi_notes:notesArr});
    }

    //处理数据
    dealWithBannerJsonData(responseData){

        //轮播
        var events = responseData.data.events;
        var imageArr = [];
        events.map((banner,index)=>{
            var image = banner.image;
            var link = banner.link;
            var name = banner.name;
            imageArr.push(image);
        });

        //全球购
        var destination = responseData.data.destination;

        //热门话题
        var topic = responseData.data.topic;

        //热门视频
        var videos = responseData.data.videos;

        this.setState({
            bannerArr:imageArr,
            destination:destination,
            topic:topic,
            videos:videos
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    //分组头部样式
    sectionViewStyle:{
        backgroundColor:'white',
        marginBottom:10,
        paddingLeft:20,
    },
    //热门话题Item样式
    topicItemStyle:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        borderBottomColor:'#DCDCDC',
        borderBottomWidth:.5
    },
    //热门话题描述图片样式
    topicDescImageStyle:{
        width:70,
        height:70,
        borderRadius:5,
        borderColor:'grey',
        borderWidth:.5,
        marginRight:20,
    },
    //热门长笔记描述图片
    notesDescImageStyle:{
        width:120,
        height:90,
        borderRadius:5,
    }
});

module.exports = ExploreIndex;