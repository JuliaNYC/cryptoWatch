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

import CoinContainer from "./containers/CoinContainer";
import LoginFormContainer from "./containers/LoginFormContainer";
import WatchCoinsContainer from "./containers/WatchCoinsContainer";

import Loading from "./components/Loading";
import Logout from "./components/Logout";
import WatchedItemDetailView from "./components/WatchedItemDetailView";

const TabIcon = ({iconName, selected, title, focused}) => (
    <Icon name={iconName} size={30} color={focused ? "#848080" : "#5ac6dd"}/>
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
                navigationBarStyle={styles.navigationBar}
                labelStyle={styles.title}>
                <Scene
                    key="main"
                    title="Home"
                    iconName='home'
                    icon={TabIcon}
                    titleStyle={styles.title}
                >
                    <Scene
                        key="main-cryptoCoins"
                        title="Home"
                        component={CoinContainer}
                    />
                </Scene>
                <Scene
                    key="watch"
                    title="Watch Coins"
                    iconName='eye'
                    icon={TabIcon}
                >
                    <Scene
                        key="watchedCoins"
                        component={WatchCoinsContainer}
                    />
                    <Scene
                        key="watchedCoin"
                        component={WatchedItemDetailView}
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
    navigationBar: {
        backgroundColor: '#5ac6dd'
    },
    title: {
        color: "black"
    }
};