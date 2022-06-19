import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";



const Header = () => {

    return (
        <View style={styles.mainView}>
            <View>
                <Text style={styles.mainText}>
                    Welcome Back,  
                </Text>
                <Text style={styles.name}>
                    Rahul Kumar 
                </Text>
            </View> 
            <Image style={styles.img} source={require('../../assets/Avatar.png')}/>
        </View>
    )
}

export default Header