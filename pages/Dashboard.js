import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Dashboard extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    Notice my navBar titles {"\n"}
                    I have two- one from Stack parent and one from myself
                    And my drawer access.  I will also reset the nav stack.
                </Text>
                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.contact}>
                    <Text>Click to Contact Info</Text>
                </TouchableOpacity>


            </View>
        )
    }
}
export default Dashboard;