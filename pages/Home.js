import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Home extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the home screen {"\n"}
                    FlappCard guests (not logged in) will see this page.
                </Text>

                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.account}>
                    <Text>Click to Dashboard page</Text>
                </TouchableOpacity>

                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={()=>Actions.replace("flow1")}>
                    <Text>Click to flow1 scene</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Home;