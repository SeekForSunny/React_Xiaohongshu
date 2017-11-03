/**
 * Created by SMART on 2017/4/22.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import  {SCREEN_WIDTH,SCREEN_HEIGHT,SCREEN_SCALE,NORMAL_MARGIN} from '../Common/Config'

class HomeIndexCell extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            height:0,

        };
      }
    render() {
        const {itemInfo, left, top} = this.props;

        //描述图片
        var images_list = itemInfo.images_list;
        var image_url = images_list[0]['url'];
        var height = images_list[0]['height'];
        var width = images_list[0]['width'];
        //图片宽高
        var iViewW = parseFloat((SCREEN_WIDTH-3*NORMAL_MARGIN)/2);
        var iViewH = iViewW*parseFloat(height/width);

        //描述内容
        var desc = itemInfo.desc;

        //标题
        var title = itemInfo.title;
        
        //类型
        var type = itemInfo.type;

        //点赞人数
        var likes = itemInfo.likes;

        //发布者信息
        var user = itemInfo.user;
        var avatar_url = user.images;
        var nickname = user.nickname;

        return (
            <View style={[styles.container,{top:top,left:left}]}>
                <Image source={{uri:image_url}} style={{width:iViewW,height:iViewH}}/>


                {/*
                 <View style={{width:iViewW, padding:10*SCREEN_SCALE}}>
                 <Text style={styles.titleStyle}> {title}  </Text>
                 <Text style={styles.descStyle} numberOfLines={2}>{desc}</Text>
                 <View style={{justifyContent:'center'}}>
                 <View style={styles.userInfoStyle}>
                 <Image source={{uri:avatar_url}} style={styles.avatarStyle}/>
                 <Text style={styles.nicknameStyle}>{nickname}</Text>
                 </View>

                 <View style={styles.likeInfoStyle}>
                 <Image source={require('../images/home_like.png')} style={styles.likeImageStyle}/>
                 <Text style={styles.likesCountStyle}>{likes}</Text>
                 </View>
                 </View>
                 </View>
                */}


            </View>
        );
    }

    // onLayout(e){
    //    
    //     console.log('--ItemOnLayout--');
    //     var itemH = e.nativeEvent.layout.height;
    //     var itemW = e.nativeEvent.layout.width;
    //
    //     //top:Y方向需要的偏移量->大小为顶部图片的高度
    //     const {itemInfo, left, top,callback} = this.props;
    //
    //     var images_list = itemInfo.images_list;
    //     var height = images_list[0]['height'];
    //     var width = images_list[0]['width'];
    //     var iMGH = itemW*parseFloat(height/width);
    //
    //     this.setState({height:itemH});
    //
    //     // this.refs.FIX.setNativeProps({
    //     //     style:{
    //     //
    //     //         top:top,
    //     //         left:left,
    //     //
    //     //         width:itemW,
    //     //         height:itemH,
    //     //     }
    //     // });
    //
    //     callback(itemH - iMGH);
    //    
    // }

}

const styles = StyleSheet.create({
    container: {
        width:parseFloat((SCREEN_WIDTH-3*NORMAL_MARGIN)/2),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor:'gray',
        borderWidth:0.5,
        overflow:'hidden',
        position:'absolute',
    },
    //标题
    titleStyle:{
        fontWeight:'bold',
        fontSize:12*SCREEN_SCALE
    },
    //描述内容文字
    descStyle: {
        fontSize: 12 * SCREEN_SCALE,
        marginTop: 7 * SCREEN_SCALE,
        marginBottom: 7 * SCREEN_SCALE,
        color:'gray'
    },
    //用户信息View
    userInfoStyle:{
        flex:7,
        flexDirection:'row',
        alignItems:'center'
    },
    //发布者头像
    avatarStyle:{
        width:20*SCREEN_SCALE,
        height:20*SCREEN_SCALE,
        borderRadius:10*SCREEN_SCALE
    },
    //发布者昵称
    nicknameStyle:{
        fontSize:10*SCREEN_SCALE,
        marginLeft:7*SCREEN_SCALE
    },
    //点赞信息View
    likeInfoStyle:{
        flexDirection:'row',
        position:'absolute',
        right:0,
        alignItems:'center',
        flex:3
    },
    //点赞图标
    likeImageStyle:{
        width:10*SCREEN_SCALE,
        height:10*SCREEN_SCALE
    },
    //点赞数
    likesCountStyle:{
        fontSize:10*SCREEN_SCALE,
        marginLeft: 3*SCREEN_SCALE
    }
});


module.exports = HomeIndexCell;