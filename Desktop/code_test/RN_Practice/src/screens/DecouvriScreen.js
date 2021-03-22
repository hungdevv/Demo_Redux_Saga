import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DecouvriScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
        style={styles.headerImg}
        source={require('../assets/headerDecouvri.png')}
      />
      </View>
      <View style={styles.button}>
        <View style={styles.boxButton}>
          <Text style={styles.textButton}>Votre Recherche</Text>
          <Text style={styles.textButton2}>Autour de moi</Text>
        </View>
        <View style={styles.buttonFil}>
          <TouchableOpacity style={styles.boxFil}>
          <MaterialIcons name="sort" size={12} color="white" />
            <Text style={styles.textButtonFil}>
              Filtres
            </Text>
            </TouchableOpacity>
            <Text style={styles.noti}>1</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.boxFooter}>
        <Image
        style={styles.footerImg}
        source={require('../assets/footerDecouvri.png')}
      />
      <Text style={styles.textFooter}>Shaladin</Text>
      <Text style={styles.textFooter2}>29 ans, Epinay-sur-Seine</Text>
        </View>
        <View style={styles.boxFooter}>
        <Image
        style={styles.footerImg}
        source={require('../assets/footerDecouvri.png')}
      />
      <Text style={styles.textFooter}>Shaladin</Text>
      <Text style={styles.textFooter2}>29 ans, Epinay-sur-Seine</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

container: {
    flex: 1,
    top: 60,
  },
header: {
  flex: 2,
},
headerImg: {
  width: '100%',
},
button: {
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row',
  paddingHorizontal: 20,
},
boxButton: {
  flex: 1,
},
textButton: {
  fontSize: 18,
  fontWeight: 'bold'
},
textButton2: {
  color: '#24cf5f'
},
content: {
  flex: 4,
  flexDirection: 'row',

},
textButtonFil: {
  color: 'white',
  fontSize: 12
},
buttonFil: {
  backgroundColor: '#24cf5f',
  height: 40,
  width: 80,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6
},
boxFil: {
  flexDirection: 'row'
},
noti: {
  textAlign: 'center',
  borderRadius: 1,
  right: 4,
  top: 4,
  position: 'absolute',
  color: '#24cf5f',
  backgroundColor: 'white',
  fontSize: 8,
  width: 10,
  height: 10
},
boxFooter: {
  flex: 1,
  alignItems: 'center'
},
footerImg: {
  width: 180,
  height: 180,
  borderRadius: 20
},
textFooter: {
  fontSize: 18,
  fontWeight: 'bold'
},
textFooter2: {
  color: '#888'
}
});

export default DecouvriScreen;