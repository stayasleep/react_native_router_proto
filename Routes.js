import React,{Component} from 'react';
import {Actions,ActionConst, Router, Scene, Stack, Drawer, Tabs} from 'react-native-router-flux';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ContactInfo from './pages/ContactInfo';
import Confirm from './pages/Confirm/Confirm';
import AmSure from './pages/Confirm/AmSure';
import SideDrawer from './components/SideDrawer/SideDrawer';
import MenuItems from './components/SideDrawer/MenuItems';
import Flow1 from'./pages/Flow1';
//Pages will stack, hitting back will not remount them
//Clicking links will cause them to mount again

//Addind drawer causes thigns in the drawer scenes to unmount
class Routes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key="home" component={Home} hideNavBar={true}/>
                    <Scene key="flow1" title="Flow 1" component={Flow1} />
                    {/*Stack has a navbar..so hide it or else all children inherit*/}
                        <Stack initial={true} key="account"  title="Account Mgmt" hideNavBar={true}>

                            <Scene key="drawer" hideNavBar drawer contentComponent={MenuItems}>
                                {/*Now we let the children have their own navBars*/}
                                <Scene key="dashboard" hideNavBar={false} component={Dashboard} title="Dashboard"/>
                                <Scene key="contact" hideNavBar={false} component={ContactInfo} title=" Contact Info"/>
                                {/*first sub scene*/}
                                <Stack key="confirm_tabs" >
                                    <Scene key="confirm" component={Confirm} title="Confirm"/>
                                    <Scene type={ActionConst.REPLACE}  key="amsure" back={true} component={AmSure} title="Am Sure" drawerLockMode={"locked-closed"}/>
                                </Stack>
                            </Scene>
                        </Stack>
                </Scene>
            </Router>
        )
    }
}

export default Routes;