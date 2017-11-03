/**
 * Created by SMART on 2017/4/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

import MessageIndexNotifyCell from './MessageIndexNotifyCell'
class MessageIndexContentView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }

    renderRow(rowData){
        return <MessageIndexNotifyCell rowData={rowData}/>
    }

    componentWillMount() {
        const {url} = this.props;
        if(url == ""){return;}
        fetch(url)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.setState({dataSource:this.state.dataSource.cloneWithRows(responseData.data)});
            })
            .catch((error)=>{
                console.error(error);
            })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

module.exports = MessageIndexContentView