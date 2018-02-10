import React,{Component} from 'react';
import {View, Text} from 'react-native';
import NavLinks from './NavLinks';
import {Actions, ActionConst} from 'react-native-router-flux';

const items =[
    {
        name:"Dashboard",
        onPress: null
    },
    {
        name: "Contact",
        onPress: null
    },
    {
        name: "Confirm",
        onPress: null
    }
];

class MenuItems extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View>
                    <Text style={{color:"#FFF", backgroundColor:"#000"}}>
                        This is my menu list...{"\n"}
                        Be amazed at the powers before ye.{"\n"}
                        Notice the highlighted tab styling
                    </Text>
                </View>

                <View>
                    {items.map((item,index)=>{
                        return <NavLinks key={index} {...item}/>
                    })}
                </View>

            </View>
        )

    }
}

export default MenuItems;