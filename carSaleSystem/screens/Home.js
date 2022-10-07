import { View, Text,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import {React,useEffect,useState}  from  'react'
import { NativeBaseProvider, Center, Fab,Image } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {

    const [posts,setPosts] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })

  return (
    <NativeBaseProvider>
   <Fab onPress={()=>{navigation.navigate("AddNewVehicleInfo")}} renderInPortal={false} shadow={2} size="sm" icon={<Ionicons color="white" name={"add-sharp"} size={18}/>} />
   
    <Center>
    <View style={styles.container}>
       <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:3, borderRadius:10, marginBottom:5,borderColor:'#7d5fff', padding:5}} onPress={()=>{navigation.navigate("VehicleInfo")}}>
                        <Text style={{marginBottom:10, color:'#30336b', fontWeight:'bold'}} >{item.title}</Text>
                        <Text style={{marginBottom:10}} >{item.body}</Text>
                        <Image  left="10px" bottom="12px" size="80px"Thumbnail source= {require('./assets/img/google-logo.png')} alt="car logo" />
                    </TouchableOpacity>
                }
            />
      
    </View>
    </Center>
   
    </NativeBaseProvider>
  )
}
const styles=StyleSheet.create({
    container:{
        padding:20
    }

})