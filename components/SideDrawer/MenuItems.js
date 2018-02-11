import React,{Component} from 'react';
import {View, Text} from 'react-native';
import NavLinks from './NavLinks';
import {Actions, ActionConst} from 'react-native-router-flux';

const items =[
    {
        name:"Dashboard",
        onPress: Actions.dashboard
    },
    {
        name: "Contact",
        onPress: ()=>Actions.contact()
    },
    {
        name: "Confirm",
        onPress: ()=>Actions.confirm_tabs()
    }
];

class MenuItems extends Component{
    constructor(props){
        super(props);
    }
    //add method?
    //if this.props.activeItemKey === "key_name" then add highlighting
    //pass as props to the child the activeItem and in the child use ternary in the touchable
    render(){
        console.log('render menu items',this.props);
        return(
            <View style={{flex:1}}>
                <View>
                    <Text>
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