import React,{Component} from 'react';
import {View, Text} from 'react-native';

class Dashboard extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    Notice my navBar title {"\n"}
                    And my drawer access.  I will also reset the nav stack.
                </Text>
            </View>
        )
    }
}
export default Dashboard;