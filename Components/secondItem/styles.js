import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
mainView : {marginTop :27.67 ,marginLeft:-10 , shadowColor: '#1F5CA3',
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.2,
shadowRadius: 4,
elevation: 10,},
mainImg:{ width:360 , height:256 , borderTopLeftRadius:17.71 ,borderTopRightRadius:17.71},
btmImg : {flexDirection:'row-reverse' , justifyContent:'space-between' ,marginTop:-52.7},
secondView : {marginTop:15,paddingLeft:19, paddingRight:23 ,backgroundColor:'#FFFFFF',width:'100%' ,paddingBottom :18.96},
mainTxt : {color:'#6F767E',fontFamily:'Haffer XH',fontSize:12 ,fontWeight:"600" ,marginTop:18.4 ,marginBottom:8},
subTxt:{ fontFamily:'Haffer XH', fontSize:22.13,fontWeight:"700",color:'#001B19'},
subTxt2: { fontFamily:'Haffer XH', fontSize:22.13,fontWeight:"700" ,color:'#068E33'}
})

export default styles 