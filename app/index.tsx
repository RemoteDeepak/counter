import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Index = () => {
  const [count, setCount] = useState(0)

  const handleIncreament= (()=>{
    setCount(count + 1)
  })

  const handleDecreameent=(()=>{
    setCount(count - 1)
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.counterTxt}>{count}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.incContainer} onPress={()=>{handleIncreament()}}>
          <Text style={styles.incTxt}>
          <MaterialIcons name="exposure-plus-1" size={34} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decContainer} onPress={()=>{handleDecreameent()}}>
          <Text style={styles.decTxt}>
          <MaterialIcons name="exposure-minus-1" size={34} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#2563eb",
    justifyContent:'center',
    alignItems:'center',
    gap:20
  },
  resultContainer:{
    backgroundColor:'#60a5fa',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10
  },
  counterTxt:{
    fontSize:26,
    fontWeight:'700'
  },


  // Btn 

  btnContainer:{
      flexDirection:'row',
      gap:20,
      borderRadius:20
  },
  incContainer:{
    backgroundColor:'#bfdbfe',
    justifyContent:'center',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:20
  },
  incTxt:{
    fontSize:18,
    fontWeight:'600',
  },


  // decreament Container
  decContainer:{
    justifyContent:'center',
    backgroundColor:'#bfdbfe',
    paddingHorizontal:20,
    borderRadius:20
  },
  decTxt:{
    fontSize:18,
    fontWeight:'600'
  }

})