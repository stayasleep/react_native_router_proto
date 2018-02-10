import React,{Component} from 'react';
import {View, Text} from 'react-native';

class ContactInfo extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the contact info screen {"\n"}
                    Update your contact info here.  {"\n"}
                    This should add to the nav stack and have access to the drawer
                </Text>
            </View>
        )
    }
}
export default ContactInfo;