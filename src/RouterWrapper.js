import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {Scene, Router} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginFormContainer from "./containers/LoginFormContainer";
import CryptoContainer from "./containers/CryptoContainer";
import Loading from "./components/Loading";
import Logout from "./components/Logout";


const TabIcon = ({iconName, selected, title, focused}) => (
    <Icon name={iconName} size={30} color={focused ? "#5ac6dd" : "black"}/>
)

export const RouterWrapper = () => (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="loader">
                <Scene
                    key="loading"
                    component={Loading}
                    title="Crypto Watch">

                </Scene>
            </Scene>
            <Scene key="auth" hideNavBar>
                <Scene
                    key="login"
                    component={LoginFormContainer}
                    title="Please Log In">
                </Scene>
            </Scene>

            <Scene
                key="tabbar"
                tabs
                tabBarStyle={{backgroundColor: 'pink'}}
                labelStyle={styles.title}>
                <Scene
                    key="main"
                    title="Main"
                    iconName='home'
                    icon={TabIcon}
                    titleStyle={styles.title}>
                    <Scene
                        key="main-cryptoCoins"
                        component={CryptoContainer}
                    />
                </Scene>

                <Scene
                    key="logout"
                    iconName='user'
                    icon={TabIcon}>
                    <Scene
                        key="auth-logout"
                        component={Logout}
                    />
                </Scene>
            </Scene>
          
        </Scene>
    </Router>
);

const styles = {
    title: {
        color: "black"
    }
};