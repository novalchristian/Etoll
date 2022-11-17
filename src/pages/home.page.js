/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [saldoSekarang, setSaldoSekarang] = React.useState(0);
  // const [saldoTambahan, setSaldoTambahan] = React.useState(saldoSekarang);
  var formatter = new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
  });

  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      AsyncStorage.getItem('saldo').then(value => {
        setSaldoSekarang(saldoSekarang + JSON.parse(value));
      });
    });
    return focusHandler;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#225084"
        barStyle="light-content"
        translucent
      />
      <View style={styles.wrapper}>
        <View style={{marginBottom: 60}}>
          <Text style={styles.title}>Halo, Rezki Fadli</Text>
          <Text style={styles.subTitle}>Saldo anda tersisa</Text>
        </View>

        <View style={{marginBottom: 80}}>
          <View style={styles.costWrapper}>
            <Text style={styles.cost}>
              Rp. {formatter.format(saldoSekarang)}
            </Text>
          </View>
        </View>

        <View style={styles.navigationWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Bayar')}>
            <Text style={styles.textButton}>Bayar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('History')}>
            <Text style={styles.textButton}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TopUp')}>
            <Text style={styles.textButton}>Isi Ulang Saldo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width / 4.5;
const height = Dimensions.get('window').height / 8.5;
const styles = StyleSheet.create({
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
    textAlign: 'center',
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
  button: {
    backgroundColor: '#4DEEDB',
    width: 160,
    borderRadius: 5,
    paddingVertical: 5,
    marginBottom: 10,
  },
  textButton: {textAlign: 'center', fontSize: 18, fontWeight: 'bold'},
  image: {
    width: width + 50,
    height: height + 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#225084',
  },
});
