import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const NavLinks = (props) => {
    return (
        <View style={{flex:1}}>
            <TouchableOpacity onPress={props.onPress}>
                {props.name}
            </TouchableOpacity>
        </View>
    )
};

export default NavLinks;
