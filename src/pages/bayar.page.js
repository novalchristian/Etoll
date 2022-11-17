import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import {QR} from '../../assets/index';

export default function Home({navigation}) {
  const [isQr, setisQr] = React.useState(true);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#225084"
        barStyle="light-content"
        translucent
      />
      <View style={styles.wrapper}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.title}>Halo, Rezki Fadli</Text>
          <Text style={styles.subTitle}>Silahkan scan QR</Text>
        </View>
        {isQr ? (
          <Image style={{width: 300, height: 300}} source={QR} />
        ) : (
          <View
            style={{
              width: 250,
              height: 280,
              backgroundColor: '#838383',
              padding: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{backgroundColor: '#D9D9D9', width: 200, height: 240}}
            />
          </View>
        )}
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => setisQr(true)}
          style={isQr ? styles.buttonLeftOn : styles.buttonLeftOff}>
          <Text style={isQr ? styles.textOn : styles.textOff}>Qr Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setisQr(false)}
          style={isQr ? styles.buttonRightOff : styles.buttonRightOn}>
          <Text style={isQr ? styles.textOff : styles.textOn}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width / 4.5;
const height = Dimensions.get('window').height / 8.5;
const styles = StyleSheet.create({
  buttonWrapper: {display: 'flex', flexDirection: 'row', marginTop: 20},
  textOff: {fontWeight: 'bold', color: 'black', textAlign: 'center'},
  textOn: {fontWeight: 'bold', color: '#8c8c8c', textAlign: 'center'},
  buttonLeftOff: {
    backgroundColor: 'white',
    width: 100,
    paddingVertical: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonLeftOn: {
    backgroundColor: '#D9D9D9',
    width: 100,
    paddingVertical: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonRightOff: {
    backgroundColor: 'white',
    width: 100,
    paddingVertical: 12,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonRightOn: {
    backgroundColor: '#D9D9D9',
    width: 100,
    paddingVertical: 12,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
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
    textTransform: 'uppercase',
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
