// import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient
import { TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import MessErrFunc from '../components/MessErr';
import {signUp } from '../redux/actions/User';

const SignUpFormComponent = ({navigation}) => {
  const {control, errors, handleSubmit} = useForm();
  // const [test, setTest] = useState(false);
  const [err1, setErr1] = useState(false);
  const [eye, setEye] = React.useState(true);
  const [isSelected, setSelected] = useState(false);
  const [isSelected2, setSelected2] = useState(false);

  const dispatch = useDispatch();
  const errAuth = useSelector(state => state.auth.statusErr);
  const loading = useSelector(state => state.auth.isLoading)
  console.log(errAuth);
  const datatest = useSelector(state => state.auth);
  console.log('data', datatest);
  const [errAuthMess, setErrAuthMess] = useState(false);
  const {
    geoname_id,
    origin,
    gender,
    birthday,
    mailing,  
    affiliate,
  } = useSelector(state => state.user);

  const onSubmit = data => {
    if(data) {
      // dispatch()
      setErrAuthMess(false);
      console.log(errAuthMess + 'errAuthMess')
      const {email, password, firstname} = data;
      console.log(data.email + data.password + data.firstname);
      if (!isSelected || !isSelected2) {
        setErr1(true);
      } else {
        setErr1(false);
        dispatch(
          signUp(
            email,
            password,
            firstname,
            gender,
            birthday,
            origin,
            affiliate,
            mailing,
            geoname_id,
          ),
        );
        if (errAuth) {
          setErrAuthMess(true);
        }
      }
    }
  };


  // useEffect(() => {
  //   if (errAuth) {
  //     setErrAuthMess(true);
  //   }
  //   else{
  //     setErrAuthMess(false);
  //   }
  // }, [errAuth]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF59F4', '#FF5978']}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <View style={styles.headerStyle}>
            <Ionicons
              name="chevron-back"
              size={24}
              color="white"
              style={styles.iconBack}
              onPress={() => {
                navigation.navigate('CityFormComponent');
              }}
            />
            <View style={styles.headerTitle}>
              <Text style={styles.headerText}>Inscription</Text>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={styles.textHeader}>Déjà un compte?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentView}>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  label="Email"
                  onChangeText={onChange}
                  value={value}
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  theme={{
                    colors: {
                      primary: '#f2f2f2',
                      underlineColor: 'transparent',
                      placeholder: '#fff',
                      text: '#fff',
                    },
                  }}
                />
              )}
              name="email"
              rules={{
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }}
              defaultValue=""
            />
            {errors.email ? (
              <MessErrFunc err={`L'Email n'est pas valide`} />
            ) : null}
          </View>
          <View style={styles.contentView}>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  label="Prénom"
                  onChangeText={onChange}
                  value={value}
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  theme={{
                    colors: {
                      primary: '#f2f2f2',
                      underlineColor: 'transparent',
                      placeholder: '#fff',
                      text: '#fff',
                    },
                  }}
                />
              )}
              name="firstname"
              rules={{required: true, minLength: 5}}
              defaultValue=""
            />
            {errors.firstname ? (
              <MessErrFunc err={`Le mot de passe ne peut pas être vide`} />
            ) : null}
          </View>
          <View style={[styles.contentView, styles.contentView2]}>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  label="Mot de Passe"
                  style={styles.textInput}
                  secureTextEntry={eye}
                  underlineColorAndroid="transparent"
                  theme={{
                    colors: {
                      primary: '#f2f2f2',
                      underlineColor: 'white',
                      placeholder: '#fff',
                      text: '#fff',
                      borderBottomColor: '#fff',
                    },
                  }}
                />
              )}
              name="password"
              rules={{required: true, minLength: 8}}
              defaultValue=""
            />
            {errors.password ? (
              <MessErrFunc err={`Le mot de passe ne peut pas être vide`} />
            ) : null}
            {errAuthMess ? (
              <MessErrFunc err={`Catte adresse email est déjà prise`} />
            ) : null}
            {err1 ? (
              <MessErrFunc
                err={`Vous devez accepter la charte de vie privée`}
              />
            ) : null}
            <View style={styles.testStyle}>
              <TouchableOpacity
                onPress={() => {
                  setEye(!eye);
                }}>
                {eye ? (
                  <AntDesign name="eye" size={24} color="white" />
                ) : (
                  <AntDesign name="eyeo" size={24} color="white" />
                )}
              </TouchableOpacity>
              <Text style={styles.textStyleContent}>Faible</Text>
            </View>
            <View></View>
          </View>
          <View style={{marginTop: 40}}>
            <View
              style={{flexDirection: 'row', marginBottom: 10, marginLeft: 10}}>
              <View style={styles.boxCheckBox}>
                <TouchableOpacity 
                  style={styles.checkBox} 
                  onPress={() => {
                    setSelected(!isSelected);
                    console.log('isSelected', isSelected);

                  }}>
                  {isSelected ? (
                    (<MaterialIcons name="done" color="#fff" size={30} />)
                  ) : null}
                </TouchableOpacity>
              </View>
              <Text style={{color: '#fff', opacity: 0.7}}>
                Je certifie être majeur(e) et j'accepte les. Conditions
                généralesd'utillisations
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
                paddingRight: 50,
                marginLeft: 10,
              }}>
                   <View style={styles.boxCheckBox}>
                <TouchableOpacity 
                  style={styles.checkBox}
                  onPress={() => {
                    setSelected2(!isSelected2)
                    console.log('isSelected2', isSelected2);
                  }}>
                  {isSelected2 ? (
                    (<MaterialIcons name="done" color="#fff" size={30} /> )
                  ) : null}
                </TouchableOpacity>
              </View>
              <Text style={{color: '#fff', opacity: 0.7}}>
                J'accepte que mes données renseignées, y compris celles
                facultatices à mon origine, soient accssibles qu service clinet
                de Mektoube et autres utillisateurs du site dán & hors I'UE
                conformément à la charte privée
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          {
            !loading ? (<TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <AntDesign name="check" size={24} color="white" />
              <Text style={styles.textButton}>ME CONNECTER</Text>
            </TouchableOpacity>)
              : (<View style={styles.loadingWrapper}>
                <Image
                  style={styles.loadingImage}
                  source={require('../../src/assets/load.gif')}
                />
              </View>)
          }
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    position: 'absolute',
    right: 10,
  },
  contentView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    margin: 10,
    position: 'relative',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    flex: 10,
  },
  textStyleContent: {
    color: 'white',
    marginLeft: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'red',
  },
  textHeader: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titleHeader: {
    marginBottom: 16,
  },

  testStyle: {
    flexDirection: 'row',
    height: 25,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  headerStyle: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    flex: 1,
  },
  iconBack: {
    position: 'absolute',
    top: 4,
    left: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  boxCheckBox: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: 35,
    height: 35,
    overflow: 'hidden',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    position: 'relative',
    width: '100%',
  },
  textInput: {
    backgroundColor: 'transparent',
    flex: 1,
    marginTop: 5,
    paddingLeft: 10,
    color: 'white',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentView2: {
    position: 'relative',
  },
  checkBox: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderTopWidth: 1,
    borderTopColor: 'white',
    width: '100%',
    padding: 10,
    height: 50
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  loadingImage: {
    width: 30,
    height: 30,
  },
});

export default SignUpFormComponent;
