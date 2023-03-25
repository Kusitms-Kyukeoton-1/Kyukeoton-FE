import { useCallback, useEffect } from "react";
import { Text, TouchableHighlight, Modal,StyleSheet,View,Pressable,TouchableOpacity,Image} from "react-native";
import React, {useState} from 'react';
import Select from "./Select";
import {LinearGradient} from "expo-linear-gradient"




function DetailsScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [correct,setCorrect] = useState(false);

  const [ques,setQues] =useState([
    {
      "name": "호랑이",
      "url": "456"
    },
    {
      "name": "토끼",
      "url": "4567"
    },
    {
      "name": "원숭이",
      "url": "45678"
    },
    {
      "name": "?",
      "url": "456749"
    }
  ])

  const [answer,setAnswer] = useState([
    {
      "content": "사자",
      "isCorrect": false
    },
    {
      "content": "물고기",
      "isCorrect": true
    },
    {
      "content": "새",
      "isCorrect": false
    },
    {
      "content": "오리",
      "isCorrect": false
    }
  ])


    const onClick = useCallback(() => {
      navigation.navigate("Details1");
    }, [navigation]);

    const close = ()=>{
      setIsModalVisible(false)
    }


    // const open1 = ()=>{
    //   setIsModalVisible(true)
    //   setCorrect(true)
    // }

    const compare=(isCorrect)=>{
      if(isCorrect !== correct){
        setCorrect(true)
      }
      setIsModalVisible(true)
    }

    

    return (
      <LinearGradient
        colors={['#0091EA','#9EDAFF']}
        style={styles.container1}
        >
        <View style={{ position:'relative',flex: 1, alignItems: "center"}}>
            <Text style={styles.title1}>‘?’에 적합한 그림이 무엇일까요?</Text>
            <Text style={styles.title2}>계절</Text>
          <View style={styles.selectImg}>

            <View style={{ flexDirection:'row'}}>
              {ques.slice(0,2).map((val)=>
                  <TouchableHighlight  style={styles.container} onPress={onClick}>
                    <Select data={val}/>
                  </TouchableHighlight>
              )}
            </View>
            <View style={{ flexDirection:'row'}}>
              {ques.slice(2,4).map((val)=>
                  <TouchableHighlight  style={styles.container} onPress={onClick}>
                    <Select data={val}/>
                  </TouchableHighlight>
              )}
            </View>

          </View>

            <View style={styles.btn}>
              <View style={{ flexDirection:'row'}}>
              {answer.slice(0,2).map((val)=>
                  <TouchableOpacity
                  style={styles.button}
                  onPress={() => compare(val.isCorrect)}
                    >
                  <Text style={styles.buttonText}>{val.content}</Text>
                </TouchableOpacity>
              )}
              </View>

              <View style={{ flexDirection:'row'}}>
              {answer.slice(2,4).map((val)=>
                  <TouchableOpacity
                  style={styles.button}
                  onPress={() => compare(val.isCorrect)}
                    >
                  <Text style={styles.buttonText}>{val.content}</Text>
                </TouchableOpacity>
              )}
              </View>

            </View>
            <Modal
              animationType={"slide"}
              style={{width:40,height:10}}
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => {
                  isModalVisible(!isModalVisible)
              }}
          >
            <View style={styles.centeredView}>
              {correct?
                <View style={styles.centeredView3}>
                  <Image
                  style={styles.tinyLogo}
                  source={require('../../../assets/Subtract.png')}
                  />
                  </View>:
                  <View style={styles.centeredView2}>
                    <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/Union.png')}
                    />
                  </View>}
              
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{correct?'정답입니다.':'오답이에요'}</Text>
              <Text style={styles.modalText1}>{correct?'참 잘했어요':'정답 : 눈사람'}</Text>
              <Pressable
                style={correct?[styles.button1, styles.buttonClose]:[styles.button1, styles.button1Close]}
                onPress={()=>{
                  close()
                  onClick()
                }}>
                <Text style={styles.textStyle}>계속하기</Text>
              </Pressable>
            </View>
          </View>
          </Modal>
        </View>
      </LinearGradient>
    );
 }

 const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center'
  },
  selectImg:{
    display:'flex',
    marginTop:170,
    borderRadius: 20,
    overflow: "hidden"
  },
  btn:{
    display:'flex',

    marginTop:33
  },

  title1:{
    marginTop:50,
    width:310,
    position:'absolute',
    zIndex:1,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: 700,
    color:'#ffffff'

  },
  title2:{
    marginTop:90,
    width:310,
    position:'absolute',
    zIndex:1,
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 29,
    textAlign:'center',
    color:'#ffffff'
  },

  container: {
    width:147,
    height:147,
    backgroundColor:'#ffffff',
    borderStyle:'solid',
    borderColor:'white',
    borderWidth:1.5
  },

  centeredView: {
  flex: 1,
  position:"absolute",
  bottom:30,

},
modalView: {

  backgroundColor: 'white',
  width:400,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
centeredView2: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  position:"relative",
  bottom:100
 

},
centeredView3: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  position:"relative",
  bottom:73
 

},
modalView2: {
backgroundColor:'#ffffff',
  width:400,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  backgroundColor: "#ffffff",
  padding: 18,
  margin: 10,
  borderRadius: 16,
  width:165,
  height:62,
  display:'flex',
  justifyContent:'center',

},
button1: {
  backgroundColor: "#4B778D",
  padding: 18,
  marginTop: 20,
  borderRadius: 8,
  width:300,
  display:'flex',
  justifyContent:'center',

},
buttonClose: {
  backgroundColor: '#2196F3',
},
button1Close: {
  backgroundColor: 'red',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize:25
},
modalText1: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize:20
},
buttonText:{
  fontWeight: 700,
  lineHeight: 22,
  fontSize: 18, 
  color: "#0061C1",
  textAlign:'center'
}

});



export default DetailsScreen