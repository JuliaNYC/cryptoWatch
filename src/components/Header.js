import React from "react";
import { View, Text} from "react-native";

const Header = () => {
    return (
        <View>
            <Text style={styles.header}>
                <Text style={styles.title}>Crypto Watchcccccc</Text>
            </Text>
        </View>
    )
}

const styles = {
    header: {
        color: "black",
        textAlign: "center",
        width: 300,
        height: 60,
        marginTop: 50
    },
    title: {
        fontSize: 22,
        fontFamily: 'Iowan Old Style'
    }
}


export default Header;