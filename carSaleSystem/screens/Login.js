import { View,StyleSheet } from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Divider,Image}from 'native-base'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
    <NativeBaseProvider>
      
        <VStack space={4} alignItems="center" mt="20%">
        <Text bold fontSize="3xl" color="indigo.600">Welcome !</Text>

        <Text top="95px" marginRight="70%" bold fontSize="sm" color="indigo.400">Email</Text>
        <Input  mt="20%" w="80%" variant="underlined" placeholder="Enter Email" />
        <Text top="20px" marginRight="65%" bold fontSize="sm" color="indigo.400">Password</Text>
        <Input w="80%" variant="underlined" placeholder="Enter Password" />
        <Button mt="5%" w="50%" h="10%" backgroundColor="indigo.600" borderRadius="20" size="sm"onPress={()=>{navigation.navigate("Home")}}>Login</Button>
        
           </VStack>
           <Text top="4px" left="77px" bold fontSize="xs">Don't have an account ?</Text>
          
           <Link href="" bottom="16px" left="218px" bold fontSize="xs" sExternal _text={{
        color: "indigo.600"}} onPress={()=>{navigation.navigate("Register")}}>
           Register Now!
      </Link>
      

      <Divider mt="10%" left="40px" w="80px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <Text bottom="19px" left="150px"  fontSize="sm">Or continue with</Text>

      <Divider bottom="35px" left="280px" w="80px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />

            <Image  left="90px" bottom="12px" size="50px"Thumbnail source= {require('./assets/img/google-logo.png')} alt="car logo" />
            <Image  left="170px" bottom="59px" size="40px"Thumbnail source= {require('./assets/img/Facebook-logo.png')} alt="car logo" />
            <Image  left="250px" bottom="106px" size="46px"Thumbnail source= {require('./assets/img/apple-logo.png')} alt="car logo" />
            

    </NativeBaseProvider>
    </View>
  )

}

const styles =StyleSheet.create({
  container:{
    flex: 1,
  }
})