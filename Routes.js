import React,{Component} from 'react';
import {Actions, Router, Scene, Stack, Drawer} from 'react-native-router-flux';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ContactInfo from './pages/ContactInfo';
import Confirm from './pages/Confirm/Confirm';
import AmSure from './pages/Confirm/AmSure';
import SideDrawer from './components/SideDrawer/SideDrawer';

//Pages will stack, hitting back will not remount them
//Clicking links will cause them to mount again
class Routes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key="home" component={Home} hideNavBar={true} />
                    {/*Stack has a navbar..so hide it or else all children inherit*/}
                    <Scene tabs={true} key="draw">
                    <SideDrawer>
                        <Stack initial={true} key="account"  title="Account Mgmt">
                            {/*Now we let the children have their own navBars*/}
                            <Scene key="dashboard" hideNavBar={false} component={Dashboard} title="Dashboard"/>
                            <Scene key="contact" hideNavBar={false} component={ContactInfo} title=" Contact Info"/>
                            {/*first sub scene*/}
                            <Stack title="Confirm parents" key="confirm_tabs" >
                                <Scene key="confirm" component={Confirm} title="Confirm"/>
                                <Scene key="amsure" component={AmSure} title="Am Sure"/>
                            </Stack>
                        </Stack>
                    </SideDrawer>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

export default Routes;