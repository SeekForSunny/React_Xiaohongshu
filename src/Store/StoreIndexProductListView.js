/**
 * Created by SMART on 2017/4/22.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import HomeIndexAPI from '../LocalData/ContentAPIs.json'
import  {SCREEN_WIDTH,SCREEN_HEIGHT,SCREEN_SCALE,NORMAL_MARGIN} from '../Common/Config'

import StoreIndexProductItem from './StoreIndexProductItem'


class StoreIndexProductListView extends Component {

    // 构造
    constructor(props) {
        super(props);

        // 初始状态
        this.state = {
            contentArr:[],
            heightArr:[],
        };
    }

    render() {
        this.state.heightArr = [];
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{
                    paddingLeft:NORMAL_MARGIN,
                    paddingRight:NORMAL_MARGIN,
                    }}
                >
                   <View ref ="FIXHEIGHT">
                       {this.renderItemViews()}
                   </View>
                </ScrollView>
            </View>
        );
    }

    //加载网络请求
    componentDidMount() {
       const {api_url} = this.props;
       if(api_url.match('http') == null){return;}

       fetch(api_url)
            .then((response)=>response.json())
            .then((responseData)=>{
                if(responseData != undefined){
                    this.dealWithJsonData(responseData)
                }
            })
            .catch((error)=> {
                console.error(error);
            })
    }

    //处理返回数据
    dealWithJsonData(responseData){
        var dataArr = responseData.data;
        this.setState({contentArr:dataArr});
    }

    //设置ItemView
    renderItemViews(){

        var itemArr = [];
        var contentArr = this.state.contentArr;
        if(contentArr.length){
            contentArr.map((itemInfo,i)=>{

                //描述图片
                var height = itemInfo['height'];
                var width = itemInfo['width'];

                //图片宽高
                var iViewW = parseFloat((SCREEN_WIDTH-3*NORMAL_MARGIN)/2);
                var iViewH = iViewW*parseFloat(height/width);

                var offsetX = 0;
                var offsetY = 0;

                //高度数组
                if(this.state.heightArr.length<2){
                    //Item需要布局的位置
                    offsetY = 0;
                    offsetX = i==0 ? 0: NORMAL_MARGIN + iViewW;
                    this.state.heightArr.push(iViewH);
                }else{

                    //获取最小高度
                    var minHeight = Math.min.apply(this,this.state.heightArr);

                    //获取最小高度索引
                    var index = this.getMinIndex(minHeight,this.state.heightArr);
                    offsetX= index==0 ? 0: NORMAL_MARGIN + iViewW;
                    offsetY += minHeight+NORMAL_MARGIN;

                    //更新高度数组
                    this.state.heightArr[index] += iViewH +NORMAL_MARGIN;
                }

                itemArr.push(
                  <StoreIndexProductItem
                      key ={i}
                      itemInfo={itemInfo}
                      left={offsetX}
                      top={offsetY}
                  />
                );
            });
            return itemArr;
        }
    }

    //获取最小高度
    getMinIndex(val,arr){
        for(var i=0;i<arr.length;i++){
            if(val == arr[i])return i;
        }
    }


    componentDidUpdate() {
        var maxHeight = Math.max.apply(this,this.state.heightArr);
        this.refs.FIXHEIGHT.setNativeProps({
            style:{
                height:maxHeight
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

module.exports = StoreIndexProductListView;
