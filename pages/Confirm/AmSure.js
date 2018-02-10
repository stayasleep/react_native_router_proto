import React,{Component} from 'react';
import {View, Text} from 'react-native';

class AmSure extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the amsure screen {"\n"}
                    It is the child screen within a sub-route. {"\n"}
                    I dont have a hamburger menu, solomente a back arrow and when you leave me, i will pop() off the nav Stack and send
                    you back to confirm.
                </Text>
            </View>
        )
    }
}
export default AmSure;