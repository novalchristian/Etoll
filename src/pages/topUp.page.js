/* eslint-disable no-alert */
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TopUpPage({navigation}) {
  const [number, setNumber] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const Home = () => {
    toggleModal();
    navigation.navigate('Home');
  };

  const saveValue = () => {
    if (number) {
      AsyncStorage.setItem('saldo', number);
      setNumber('');
      setModalVisible(!isModalVisible);
    } else {
      alert('Silahkan Masukkan Saldo');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#225084"
        barStyle="light-content"
        translucent
      />
      <View style={styles.wrapper}>
        <View style={{marginBottom: 50}}>
          <Text style={styles.title}>Halo, Rezki Fadli</Text>
          <Text style={styles.subTitle}>Silahkan Isi Ulang Saldo Anda</Text>
        </View>

        <View style={styles.navigationWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Masukkan Nominal"
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.buttonAccept} onPress={saveValue}>
            <Text style={styles.textButtonAccept}>Bayar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalWrapper}>
          <View style={styles.logoWrapper}>
            <FontAwesomeIcon
              size={35}
              style={styles.logo}
              icon={faCheckCircle}
            />
            <Text style={styles.textModal}>Transaksi Berhasil</Text>
            <TouchableOpacity
              onPress={() => Home()}
              style={styles.buttonAccept}>
              <Text style={styles.textButtonAccept}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const width = Dimensions.get('window').width / 1.2;
const height = Dimensions.get('window').height / 8.5;
const styles = StyleSheet.create({
  modalWrapper: {justifyContent: 'center', alignItems: 'center'},
  textModal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  logo: {color: 'white', marginVertical: 15},
  logoWrapper: {
    borderRadius: 10,
    backgroundColor: '#225084',
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: width,
    backgroundColor: 'white',
    fontSize: 18,
  },
  listWrapper: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  list3: {
    width: 80,
    color: 'white',
    fontSize: 15,
    textAlign: 'right',
  },
  list2: {
    width: 130,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  list1: {
    color: 'white',
    fontSize: 15,
    width: 93,
  },
  headText: {color: 'white', fontWeight: 'bold', fontSize: 15},
  listText: {color: 'white', fontSize: 15},
  cost: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  costWrapper: {
    backgroundColor: 'white',
    width: 250,
    paddingVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  navigationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonAccept: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    fontColor: 'black',
  },
  buttonAccept: {
    marginTop: 20,
    backgroundColor: '#4DEEDB',
    width: 120,
    borderRadius: 5,
    paddingVertical: 5,
    marginBottom: 10,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: width + 50,
    height: height + 30,
  },
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#225084',
  },
});
