import React from "react";
import { View, Text, Image ,ImageBackground } from "react-native";
import styles from "./styles";


const SecondItem  = () => {

    return (
        <View style={styles.mainView}>
            <Image style={styles.mainImg} source={require('../../assets/View2.png')} resizeMethod="resize" resizeMode="stretch" />
            <View style={styles.btmImg}>
                <Image style={{width:49 , height:31}} source={require('../../assets/Speaker.png')} />
                <Image style={{width:49 , height:31 ,marginLeft:28.81 ,}} source={require('../../assets/ImageLeft.png')} />
            </View>
            <View style={styles.secondView }>
                <Text style={styles.mainTxt}>
                Make My Trip Savings Plan 
                </Text>
                <Text style={styles.subTxt}>Save up for next vacation and <Text style={styles.subTxt2}>get 10% Cashback! </Text></Text>
            </View>
        </View>
    )
}

export default SecondItem 