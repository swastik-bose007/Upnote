// --------------------------------------------------------------------
// PREREQUISITES
// --------------------------------------------------------------------
import { Dimensions,StyleSheet } from 'react-native';
import { scale } from './MeasureMents';

export const screenSize = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

export const globalStyles = StyleSheet.create({
    // ----------- dimensions ----------------------------
    dummyView: {
        height: "100%",
        width: "100%",
    },
    upperSpace: {
        marginTop: scale.scale20
    },
    leftadjust : {
        paddingRight: 180
    },
    lineheight : {
        lineHeight: scale.scale5
    },
    padd : {
        padding: scale.scale2,
        // marginRight: scale.scale5
    },
    // ------------ alignment setting-------------------------
    flexCenter : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    flexLeft : {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    flexRight : {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    flexJustify : {
        display: "flex",
        flexDirection: "row",
        columnGap: 260
    },
    // ------------- Text styles -------------------------------
    splashText : {
        fontFamily: "Gilroy-SemiBold"
    },
    text1 :{
        fontFamily: "Gilroy-Black",
        fontSize: scale.scale12
    },
    text2 :{
        fontFamily: "Poppins-Light",
        fontSize: scale.scale3
    },
    text3 :{
        fontFamily: "Gilroy-Black",
        fontSize: scale.scale5
    },
    text4 :{
        fontFamily: "Gilroy-SemiBold",
        fontSize: scale.scale4
    },
    text5 :{
        fontFamily: "Poppins-Light",
        fontSize: scale.scale4
    },
    text6 :{
        fontFamily: "Gilroy-Thin",
        fontSize: scale.scale4
    },
    text7 :{
        fontFamily: "Gilroy-SemiBold",
        fontSize: scale.scale5
    },
    text8 :{
        fontFamily: "Gilroy-Black",
        fontSize: scale.scale5
    },
    // ------------- Input styles -------------------------------
    inputStyle : {
        height: 61,
        borderRadius: scale.scale2,
        paddingHorizontal: scale.scale14
    },
    inputStyle2 : {
        height: 150,
        borderRadius: scale.scale2,
        paddingHorizontal: scale.scale14
    },
    // ------------- Icon styles -------------------------------
    icon: {
        position: 'absolute',
        top: 23,
        left: 25,
    },
    icon2: {
        position: 'absolute',
        top: 23,
        right: 25,
    },
    icon3: {
        color: "#261C15"
    },
    icon4: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        color: "#E4E6C3",
        backgroundColor: "#ffffff1a",
        borderRadius: scale.scale1
    },
    icon5: {
        // position: 'absolute',
        // top: 0,
        // left: scale.scale20,
        color: "#261C15",
    },
    iconColor : {
      color: "#E4E6C3",
    },
    iconColor2 : {
        color: "#261C15",
      },
    circle : {
        backgroundColor: "#261C15",

    },
    // ------------- widget styles -------------------------------
    card : {
        borderRadius: scale.scale5,
        height: scale.scale24,
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
            },
            android: {
              elevation: 4,
            },
        })
    },
    card2 : {
        borderRadius: scale.scale5,
        height: scale.scale25
    },
     // ------------- button styles -------------------------------
     float : {
        position: "absolute",
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,

     }
})
