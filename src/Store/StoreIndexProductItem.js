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

class StoreIndexProductItem extends Component {

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
        var image_url = itemInfo.image;
        var height = itemInfo['height'];
        var width = itemInfo['width'];

        //图片宽高
        var iViewW = parseFloat((SCREEN_WIDTH-3*NORMAL_MARGIN)/2);
        var iViewH = iViewW*parseFloat(height/width);

        return (
            <View style={[styles.container,{top:top,left:left}]}>
                <Image source={{uri:image_url}} style={{width:iViewW,height:iViewH}}/>
            </View>
        );
    }


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
});


module.exports = StoreIndexProductItem;