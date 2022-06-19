import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";


const OfferTile = (props) => {

    const { img , text } = props;
    return (
        <View style={styles.mainView}> 
           <Image style={styles.img} source={img} resizeMode="contain" />
           <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default OfferTile