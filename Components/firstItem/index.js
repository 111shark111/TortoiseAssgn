import React from "react";
import { View, Text, Image ,ImageBackground } from "react-native";
import offerArray from "../../Utils/OfferData";
import OfferTile from "../offerTile/index";
import styles from "./styles";



const FirstItem = () => {

    return (
        <View style={styles.mainView}>
            <Image style={styles.mainImg} source={require('../../assets/View1.png')} resizeMode="cover" />
            <View style={styles.speakerView}>
                <Image style={{width:49 , height:31}} source={require('../../assets/Speaker.png')} />
            </View>
            <View style={
                styles.secondView}>
                <Text style={styles.mainText}>
                IPHONE SAVINGS PLAN
                </Text>
                <Text style={styles.subText}>Save up for next iPhone and <Text style={styles.subText2}>get 10% Cashback! </Text></Text>
                <View  style={styles.offers}>
                {offerArray.map(item => <OfferTile {...item} />)}
                </View>
            </View>
        </View>
    )
}

export default FirstItem