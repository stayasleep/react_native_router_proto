import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class ContactInfo extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log('contact will mount');
    }
    componentDidMount(){
        console.log('contact did mount');
    }
    componentWillUnmount(){
        console.log('contact did unmount');
    }


    render(){
        console.log('contact render',this.props);
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the contact info screen {"\n"}
                    Unless changed, i inherit a back button.  {"\n"}
                    This should add to the nav stack and have access to the drawer
                </Text>
                <Text>
                    v4 is not without fault. Watch as clicking confirm renders a back arrow, and when clicking it will take you back to the same page
                    you are on, confirm scene
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
            </View>
        )
    }
}
export default ContactInfo;