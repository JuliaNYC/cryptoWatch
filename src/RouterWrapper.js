/*import React from "react";
import {Scene, Stack, Router} from "react-native-router-flux";
import LoginFormContainer from "./containers/LoginFormContainer";
import Loading from "./components/Loading";
import Logout from "./components/Logout";
import CryptoContainer from "./containers/CryptoContainer";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Actions} from 'react-native-router-flux';
import {TabNavigator} from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

class RouterWrapper extends React.Component {
  /!*  navBarButton = () => {
        return (
            <TouchableOpacity>
                onPress={() => {
                    console.warn("hellooo");
                }}
                <Icon name='menu' size={30}/>
            </TouchableOpacity>
        )
    }*!/

    render() {
        return (
        {/!*    <Router>
                <Scene key="root" hideNavBar>

                    <Scene key="loader">
                        <Scene key="loading" component={Loading} title="Crypto Watch"></Scene>
                    </Scene>

                    <Scene key="auth">
                        <Scene key="login" component={LoginFormContainer} title="Please Log In"></Scene>
                    </Scene>

                    <Scene
                        key="main"
                        leftButtonImage={this.navBarButton}
                           onLeft={()=>console.warn("yahhhhhfuck uuuuu")}
                           renderLeftButton={this.navBarButton}>

                        <Scene key="cryptoCoins" rightTitle="add" component={CryptoContainer} title="Crypto Watch"></Scene>
                        <Scene key="logout" component={Logout} title="Logout"></Scene>
                    </Scene>

                </Scene>

            </Router>*!/}

        )
    }
}

export default RouterWrapper;*/

import React from "react";
import Logout from "./components/Logout";
import CryptoContainer from "./containers/CryptoContainer";
import LoginFormContainer from "./containers/LoginFormContainer";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator, BottomTabBar} from 'react-navigation';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';


        const RouterWrapper = createBottomTabNavigator({
            Home:   {
                screen: CryptoContainer
            },
            logout: {
                screen: Logout
            },
            login: {
                screen: LoginFormContainer
            }

        })


export default RouterWrapper;