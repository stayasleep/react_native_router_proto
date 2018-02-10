import React,{Component} from 'react';
import {View, Text} from 'react-native';

class Home extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the home screen {"\n"}
                    It wont have a navigation bar and it should not have a side drawer
                    Here is a link to a page that has both things.
                </Text>
            </View>
        )
    }
}
export default Home;