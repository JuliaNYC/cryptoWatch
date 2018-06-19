import React from "react";
import {Scene, Stack, Router} from "react-native-router-flux";
import LoginFormContainer from "./containers/LoginFormContainer";
import Header from "./components/Header";
import CryptoContainer from "./containers/CryptoContainer";
const RouterWrapper = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginFormContainer} title="Please Log In"></Scene>
                </Scene>
                <Scene key="main">
                    <Scene key="cryptoCoins" component={CryptoContainer} title="Crypto Watch"></Scene>
                </Scene>
            </Scene>

        </Router>

    )
}

export default RouterWrapper;
