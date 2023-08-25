import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { ImageSlider } from "react-native-image-slider-banner";

export default function Evenements() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evenements</Text>
            <View style={styles.contour}>
            <View style={styles.event}>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:0.85,
        // width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:16,
        marginBottom:10,
        color:'black',
        fontWeight:'600',
    },
    contour: {
        // flex:1,
        width:408,
        height:662,
        borderWidth:2,
        backgroundColor:'#000',
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'#5FD3EC',
        borderTopColor:'#5FD6FF',
        borderLeftColor:'#49DEFF',
        borderRightColor:'#5FD3EC',
        borderBottomColor:'#5FD6FF',
    },
    event:{
        width:400,
        height:655,
        borderWidth:0.5,
        backgroundColor:'white',
        borderRadius:10,
        ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            },
            android: {
              elevation: 10,
            }
          }),
    }
})