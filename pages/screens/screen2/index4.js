import { useCallback, useEffect } from "react";
import { Text, TouchableHighlight, Modal, StyleSheet, View, Pressable, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';
import Select from "./Select";
import { LinearGradient } from "expo-linear-gradient"
import { useRecoilState } from "recoil";
import { DurationTime } from "../../../atom";





function LastScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [durationTime, setDurationTime] = useRecoilState(DurationTime);


  const onClick = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);



  const open1 = () => {
    setIsModalVisible(true)
    setCorrect(true)
  }

  useEffect(() => {

    return () => setDurationTime(0);
  }, [])


  return (
    <LinearGradient
      colors={['#0091EA', '#9EDAFF']}
      style={styles.container1}
    >
      <View style={styles.centeredView}>
        <Modal
          animationType={"slide"}
          style={{ width: 40, height: 10 }}
          transparent={true}
          visible={true}
          onRequestClose={() => {
            isModalVisible(!isModalVisible)
          }}
        >
          <View style={styles.centeredView1}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>문제를 푸는데 </Text>
              <View>
                <Text style={styles.modalText1}>
                  <Image
                    style={styles.tinyLogo2}
                    source={require('../../../assets/yes1.png')}
                  />
                  총 <Text style={{ color: "#3498DB" }}>{durationTime}초</Text>가 걸렸어요
                  <Image
                    style={styles.tinyLogo2}
                    source={require('../../../assets/yes1.png')}
                  />
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', width: 270, justifyContent: 'space-between' }}>
                <Pressable
                  style={styles.button1}
                  onPress={onClick}>
                  <Text style={styles.textStyle1}>그만하기</Text>
                </Pressable>
                <Pressable
                  style={styles.button2}
                >
                  <Text style={styles.textStyle2}>계속하기</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
}




const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",


  },
  tinyLogo2: {
    width: 20,
    height: 20
  },

  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
  button1: {
    backgroundColor: "#4B778D",
    padding: 18,
    marginTop: 20,
    borderRadius: 8,
    width: 130,
    height: 57,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 16,

    borderColor: '#3498DB',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',


  },
  button2: {
    backgroundColor: "#4B778D",
    padding: 18,
    marginTop: 20,
    borderRadius: 8,
    width: 130,
    height: 57,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3498DB',
    borderRadius: 16

  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle1: {
    color: '#3498DB',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  modalText: {
    marginBottom: 0,
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 34
  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',

    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 34,
    display: 'flex',
    flexDirection: 'row'
  },
});

//  const styles = StyleSheet.create({

//   centeredView: {
//   position:"absolute",
//   bottom:280,
//   margin:'auto'

// },
// modalView: {
//   display:'flex',
//   backgroundColor: 'white',
//   width:300,
//   margin:'auto',
//   justifyContent:'cetner',
//   padding: 35,
//   alignItems: 'center',
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 4,
//   elevation: 5,
// },
// button: {
//   backgroundColor: "#4B778D",
//   padding: 18,
//   margin: 10,
//   borderRadius: 8,
//   width:165,
//   height:62,
//   display:'flex',
//   justifyContent:'center',

// },
// button1: {
//   backgroundColor: "#4B778D",
//   padding: 18,
//   marginTop: 20,
//   borderRadius: 8,
//   width:300,
//   display:'flex',
//   justifyContent:'center',

// },
// textStyle: {
//   color: 'white',
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// modalText: {
//   marginBottom: 15,
//   textAlign: 'center',
//   fontSize:25
// },
// modalText1: {
//   marginBottom: 15,
//   textAlign: 'center',
//   fontSize:20
// },

// });



export default LastScreen