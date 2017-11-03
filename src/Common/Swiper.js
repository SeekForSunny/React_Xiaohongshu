/**
 * Created by SMART on 2017/4/23.
 */

import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native'

import Swiper from 'react-native-swiper'
var { width } = Dimensions.get('window');
const styles = {

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    image: {
        width,
        flex: 1,
        resizeMode:'contain'
    }
}

const renderPagination = (index, total, context) => {
    return (
        <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
            <Text style={{ color: 'white',fontSize:12 ,fontWeight:'bold'}}>
                <Text style={{ color:'white',fontSize: 12,fontWeight:'bold'}}>{index+1}</Text>
                 /{total}
             </Text>
        </View>
    )
}

export default class extends Component {
    render () {
        const {images,bannerH} = this.props;
        var height = images.length?bannerH:0;
        return (
            <View>
                <Swiper height={height}
                        renderPagination={renderPagination}
                        paginationStyle={{ bottom: -30, left: null, right: 30}}
                        loop={true}
                >
                    {this.renderItems(images)}
                </Swiper>
            </View>
        )
    }
    
    //设置子控件
    renderItems(images){

        if(images.length){
            var itemArr = [];
            for(i = 0;i<images.length;i++){
                var image_url = images[i];
                itemArr.push(
                    <View key = {i} style={styles.slide}>
                        <Image source={{uri:image_url}} style={styles.image} />
                    </View>
                );
            }

            return itemArr;
        }else {
            return <View/>
        }

    }
}