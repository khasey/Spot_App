import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function Categories(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.contour}>
                <View style={styles.categories}>
                <Ionicons name="notifications" size={24} color="black" />
                    <Text style={styles.text}>News</Text>
                </View>
                </View>
               <View style={styles.contour}>
                <View style={styles.categories}>
                    <Ionicons name="restaurant" size={24} color="black" />
                    <Text style={styles.text}>Resto</Text>
                </View>
                </View>
            </ScrollView>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        width:'100%',
        height:'100px',
        marginLeft:10,
    },
    title: {
        margin:10,
        fontSize:16,
        color:'black',
        fontWeight:'600',
    },
    contour: {
        width:90,
        height:72,
        borderWidth:2,
        backgroundColor:'#000',
        borderRadius:30,
        borderStyle:'groove',
        marginLeft:5,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'#5FD3EC',
        borderTopColor:'#5FD6FF',
        borderLeftColor:'#fff',
        borderRightColor:'#fff',
        borderBottomColor:'#5FD6FF',
        
        // ...Platform.select({
        //     ios: {
        //       shadowColor: "#000",
        //       shadowOffset: {
        //         width: 0,
        //         height: 0,
        //       },
        //       shadowOpacity: 0.1,
        //       shadowRadius: 40,
        //     },
        //     android: {
        //       elevation: 10,
        //     }
        //   }),
    },
    categories: {
        width:82,
        height:62,
        backgroundColor:'white',
        // marginLeft:10,
        borderRadius:25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            },
            android: {
              elevation: 10,
            }
          }),

    },
    text:{
        color:'black',
        fontWeight:'600',
    },
})