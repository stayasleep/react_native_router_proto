import React,{Component} from 'react';
import {View, Text} from 'react-native';

class AmSure extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log('will mount amsure');
    }
    componentDidMount(){
        console.log('did mount amsure');
    }
    componentWillUnmount(){
        console.log('unmount amsure');
    }
    render(){
        console.log('am sure render',this.props);
        return(
            <View style={{flex:1}}>
                <Text>
                    This is the amsure screen {"\n"}
                    It is the child screen within a sub-route. {"\n"}
                    I dont have a hamburger menu, solomente a back arrow and when you leave me, i will pop() off the nav Stack and send
                    you back to confirm. Even if you came from a different page.
                </Text>
            </View>
        )
    }
}
export default AmSure;