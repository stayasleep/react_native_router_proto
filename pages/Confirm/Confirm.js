import React,{Component} from 'react';
import {View, Text} from 'react-native';

class Confirm extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the confirm screen {"\n"}
                    It is the top level screen within a sub-route. {"\n"}
                    R U Sure you want to continue?
                </Text>
            </View>
        )
    }
}
export default Confirm;