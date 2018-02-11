import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Flow1 extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log('flow1 will mount');
    }
    componentDidMount(){
        console.log('flow1 did mount');
    }
    componentWillUnmount(){
        console.log('flow1 did unmount');
    }


    render(){
        console.log('flow1 render',this.props);
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the flow one activation screen {"\n"}
                    Unless changed, i inherit a back button.  {"\n"}
                    This should add to the nav stack and have access to the drawer
                </Text>

                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.confirm_tabs}>
                    <Text>Click to confirm page</Text>
                </TouchableOpacity>

                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.amsure}>
                    <Text>Click to am sure page</Text>
                </TouchableOpacity>
                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.dashboard}>
                    <Text>Click to dashboard scene</Text>
                </TouchableOpacity>

                <View style={{paddingTop:20}}/>
                <TouchableOpacity onPress={Actions.home}>
                    <Text>Click to home scene</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Flow1;