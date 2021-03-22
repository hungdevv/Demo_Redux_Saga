import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
import { RadioButton } from 'react-native-paper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch } from 'react-redux';
import { getOrigin } from '../redux/actions/User';
import styles from '../styles/styles';
import BottomComponent from './BottomComponent';
import HeaderFormComponent from './HeaderFormComponent';

const OriginFormComponent = ({navigation}) => {
  const data = [
    {id: 0, name: 'Peu importe'},
    {id: 1, name: 'Algérien'},
    {id: 2, name: 'Marocain'},
    {id: 3, name: 'Tunisien'},
    {id: 4, name: 'Autre'},
    {id: 5, name: 'Je la garde pour moi'},
  ];
  const [checked, setChecked] = React.useState(0);
  const [showErr, setShowErr] = React.useState(true);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF59F4', '#FF5978']}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <HeaderFormComponent
            title={'Quelle est votre origine ?'}
            back={'BirthdayFormComponent'}
            navigation={navigation}
            icon={<SimpleLineIcons name="map" color="#fff" size={24} />}
          />
          <View style={styles.content}>
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <View style={styles.contentView}>
                    <Text style={styles.textStyleContent}>{item.name}</Text>
                    <RadioButton
                      value={`${item.id}`}
                      status={
                        checked === `${item.id}` ? 'checked' : 'unchecked'
                      }
                      theme={{colors: {accent: 'white', text: 'white'}}}
                      onPress={() => {
                        setShowErr(false);
                        setChecked(`${item.id}`);
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
        <BottomComponent
          navigation={navigation}
          errMess={showErr}
          next={'FromFormComponent'}
          onClick={() => {
            dispatch(getOrigin(parseInt(checked)));
          }}
        />
      </LinearGradient>
    </View>
  );
};

export default OriginFormComponent;
