import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, ScrollView, FlatList, Dimensions } from "react-native";
import FirstItem from "../Components/firstItem/index";
import Header from "../Components/header/index";
import SecondItem from "../Components/secondItem/index";




const HomeScreen = (props) => {

    const wi = Dimensions.get('screen').width
    return (
        <SafeAreaView style={{width:wi}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginLeft :21 , marginRight:22 ,marginTop:10}}>
              <Header />
              <FirstItem />
              <SecondItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen