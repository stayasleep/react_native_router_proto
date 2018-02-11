import React, {Component} from 'react';
import {View} from 'react-native';
import MenuItems from "./MenuItems";
import {Drawer} from 'react-native-drawer';

class SideDrawer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('side drawer render',this.props);
        return(
            <Drawer
                open={true}
                type="overlay"
                content={<MenuItems/>}
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
            >
                {React.Children.map(this.props.children, c=> React.cloneElement(c, {route: this.props.route}))}
                {/*{this.props.children}*/}
                {/*{React.cloneElement(this.props.children, this.props)}*/}
            </Drawer>
        )
    }
}
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
};

export default SideDrawer;