import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView: {
        shadowColor: '#1F5CA3',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 50,
    },
    mainImg: {
        width: '100%', borderTopLeftRadius: 17.71, borderTopRightRadius: 17.71,
        height: 256
    },
    speakerView: { flexDirection: 'row-reverse', marginTop: -40 },
    secondView: {
        // marginLeft:19, marginRight:23 ,
        backgroundColor: '#FFFFFF',
        // marginTop: 43.68 ,
        paddingLeft: 19, paddingRight: 23, paddingTop: 13.68, paddingBottom: 27.74,
        borderBottomRightRadius: 17.71, borderBottomLeftRadius: 17.71
    },
    mainText: { color: '#6F767E', fontFamily: 'Haffer XH', fontSize: 12, fontWeight: "600" },
    subText: { fontFamily: 'Haffer XH', fontSize: 22.13, fontWeight: "700", color: '#001B19' },
    subText2: { fontFamily: 'Haffer XH', fontSize: 22.13, fontWeight: "700", color: '#068E33' },
    offers: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24.11 }
})

export default styles