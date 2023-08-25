import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Categories from './component/home/Categories';
import Evenements from './component/home/Evenements';
import Prochainement from './component/home/Prochainement';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
      <Categories/>
      {/* <Evenements/> */}
      {/* <Prochainement/> */}
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});