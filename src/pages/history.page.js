import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {history} from '../data/History';

export default function HistoryPage() {
  var formatter = new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
  });
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
          <Text style={styles.subTitle}>Berikut Riwayat Perjalanan anda</Text>
        </View>
      </View>

      <View>
        <View style={styles.headListWrapper}>
          <Text style={styles.headText}>Tap Pintu Tol</Text>
          <Text style={styles.headText}>Saldo Terpakai</Text>
          <Text style={styles.headText}>Saldo Sisa</Text>
        </View>

        <View style={styles.bodyListWrapper}>
          {history.map(tol => (
            <View style={styles.listWrapper} key={tol.key}>
              <Text style={styles.list1}>{tol.pintuTol}</Text>
              <Text style={styles.list2}>
                Rp. {formatter.format(tol.saldoTerpakai)}
              </Text>
              <Text style={styles.list3}>
                Rp. {formatter.format(tol.saldoSisa)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4F82CD',
    padding: 6,
    borderRadius: 5,
  },
  bodyListWrapper: {
    backgroundColor: '#4F82CD',
    padding: 6,
    borderRadius: 5,
    marginTop: 5,
  },
  listWrapper: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  list3: {
    width: 90,
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
    width: 100,
  },
  headText: {color: 'white', fontWeight: 'bold', fontSize: 15},
  listText: {color: 'white', fontSize: 15},
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
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#225084',
  },
});
