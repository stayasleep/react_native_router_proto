import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Confirm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('confirm tab1',this.props);
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the confirm screen {"\n"}
                    It is the top level screen within a sub-route. {"\n"}
                    R U Sure you want to continue?
                </Text>
                <Text>
                    This is because within a sub scene we are Jumping and then Pushing to the scene.
                </Text>
                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.amsure}>
                    <Text>Click to am sure page</Text>
                </TouchableOpacity>

                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.dashboard}>
                    <Text>Click to dashboard scene</Text>
                </TouchableOpacity>

                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.contact}>
                    <Text>Click to contact page</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Confirm;