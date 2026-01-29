import { router } from "expo-router"
import { useEffect } from "react"
import { ActivityIndicator, Text, View } from "react-native"

const Index = () =>{
  useEffect(() =>{
    router.replace("/guest")
  }, [])
  return(
    <View style={{
      flex:1,
      justifyContent:'center', 
      alignItems:'center'}}
    >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}