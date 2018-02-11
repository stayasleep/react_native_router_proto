import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const NavLinks = (props) => {
    return (
            <TouchableOpacity onPress={props.onPress}>
                <Text>
                {props.name}
                </Text>
            </TouchableOpacity>
    )
};

export default NavLinks;
