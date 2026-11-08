import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (  
<View style={styles.container}>
      <Modal 
        animationType='fade'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modal}>
          <Text>Yoo you opened the modal</Text>
          <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.closetext}>CLOSE</Text>
          </Pressable>
          <StatusBar style="auto" />
          </View>
        </View>
      </Modal>
      <Pressable
        style ={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style ={styles.opentext}>OPEN MODAL</Text>
      </Pressable>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 600, 
  },
  button: {
    borderRadius: 20,
    padding: 10, 
    elevation: 1,
  },
  buttonClose: {
    backgroundColor: '#ff0000',
    marginTop: 30
  },
  buttonOpen: {
    backgroundColor: '#12e60b'
  },
  opentext: {
    color: '#000300'
  },
  closetext: {
    color: '#fffefd'
    
  },
  modal: {
    margin: 20,
    backgroundColor: '#b5cfa6',
    borderRadius: 25,
    padding: 35,
    alignItems: 'center',
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
