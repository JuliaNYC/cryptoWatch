import React from "react";
import {Scene, Stack, Router} from "react-native-router-flux";
import LoginFormContainer from "./containers/LoginFormContainer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Logout from "./components/Logout";
import CryptoContainer from "./containers/CryptoContainer";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Actions} from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';


const TabIcon = ({ selected, title }) => (
    <Text style={{ color: selected ? 'red' : 'black' }}>{ title }</Text>
);

export const RouterWrapper = () => (
    <Router>
        <Scene key="root"  hideNavBar>
            <Scene key="loader">
                <Scene key="loading" component={Loading} title="Crypto Watch"></Scene>
            </Scene>
            <Scene key="auth" hideNavBar>
                <Scene key="login" component={LoginFormContainer} title="Please Log In"></Scene>
            </Scene>

            <Scene
                key="tabbar"
                tabs
                tabBarStyle={{ backgroundColor: 'pink' }}
            >
                <Scene key="main" title="Main" icon={TabIcon}>
                    <Scene
                        key="screenthree"
                        component={CryptoContainer}
                    />
                </Scene>

                <Scene key="logout" title="Logout" icon={TabIcon}>
                    <Scene
                        key="screenthree"
                        component={Logout}
                    />
                </Scene>
            </Scene>
            <Scene
                key="header"
                component={Header}
                title="Modal"
                direction="vertical"
                hideNavBar
            />
        </Scene>
    </Router>
);
