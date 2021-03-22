import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TextInput, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../redux/actions/User';

const SignInScreen = ({navigation}) => {
  const err = useSelector(state => state.auth.statusErr);
  console.log(err);
  const [eye, setEye] = React.useState(true);
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const background = require('../assets/background.png');
  const Load = useSelector(state => state.auth.isLoading);

  const onSubmit = data => {
    dispatch(signIn(data.email, data.password));
  };

  return (
    <ImageBackground style={styles.container} source={background}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          style={styles.buttonHeader}>
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <View style={styles.boxMess}>
          <Text style={styles.titleStyle}>Connexion</Text>
          {err ? (
            <View style={styles.boxTextMess}>
              <Text style={styles.textMess}>
                Identifiant ou mot de passe incorrect
              </Text>
            </View>
          ) : null}
        </View>
        <View style={styles.action}>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <TextInput
                label="Email"
                placeholder="Email"
                onChangeText={onChange}
                value={value}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                theme={{
                  colors: {
                    primary: '#111',
                    underlineColor: 'transparent',
                    placeholder: '#111',
                    text: '#111',
                  },
                  fonts: {
                    regular: {fontFamily: 'ANC-Bold'}
                  },
                }}
              />
            )}
            name="email"
            rules={{required: true}}
            defaultValue=""
          />
        </View>
        <View style={styles.boxPassword}>
          <View style={styles.action}>
            <Controller
              control={control}
              render={({onChange, value}) => (
                <TextInput
                  style={styles.marginInput}
                  placeholder="Mot de Passe"
                  label="Mot de Passe"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={eye}
                  theme={{
                    colors: {
                      primary: '#111',
                      underlineColor: 'transparent',
                      placeholder: '#111',
                      text: '#111',
                    },
                    fonts: {
                      regular: {fontFamily: 'ANC-Bold'}
                    },
                  }}
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                />
              )}
              name="password"
              rules={{required: true}}
              defaultValue=""
            />
          </View>
          <View style={styles.iconPassword}>
            <Text style={styles.textPassword}>Mot de passe oublié ?</Text>
            <TouchableOpacity
              onPress={() => {
                setEye(!eye);
              }}>
              {eye ? (
                <AntDesign name="eye" size={24} color="black" />
              ) : (
                <AntDesign name="eyeo" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={styles.textBottom}>Nous contacter</Text>
          </TouchableOpacity>
          <Text style={styles.textBottom2}>ou</Text>
          <TouchableOpacity>
            <Text style={styles.textBottom}>Aide</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              height: 55,
              width: '100%',
              backgroundColor: '#24cf5f',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
            }}
            onPress={handleSubmit(onSubmit)}>
            {Load ? (
              <View style={styles.loadingWrapper}>
                <Image
                  style={styles.loadingImage}
                  source={require('../assets/load.gif')}
                />
              </View>
            ) : (
              <Text style={{fontSize: 16, color: 'white', fontFamily: 'ANC-Bold'}}>ME CONNECTER</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.boxFooter}>
          <Text style={styles.textFooter}>Vous n'avez pas de compte? </Text>
          <TouchableOpacity
            onPress={() =>{navigation.navigate('EntityFormComponent')}}
          >
            <Text style={[styles.textFooter2, styles.textFooter]}>
              Inscrivez-vous gratuitemen
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderColor: 'green',
    position: 'relative',
  },
  buttonHeader: {
    position: 'absolute',
    top: 30,
    right: 10,
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textBottom: {
    color: '#111',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontFamily: 'ANC',
    letterSpacing: 0.8
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    fontFamily: 'ANC',
    letterSpacing: 0.8 
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderColor: '#111',
    flex: 1,
    marginTop: 5,
    paddingLeft: 10,
    color: '#05375a',
    fontFamily: 'ANC',
    letterSpacing: 0.8 
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    paddingTop: 10,
    height: 70,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backGround: {
    resizeMode: 'stretch',
    width: 300,
    alignSelf: 'center',
    marginBottom: 6,
  },
  titleStyle: {
    fontSize: 26,
    fontFamily: 'ANC-Bold',
    marginBottom: 10,
  },
  boxPassword: {
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconPassword: {
    paddingRight: 20,
    position: 'absolute',
    alignItems: 'flex-end',
    right: 0,
    top: 30,
  },
  textPassword: {
    fontSize: 10,
    color: '#24cf5f',
    fontFamily: 'ANC-Bold'
  },
  boxMess: {
    position: 'relative',
    marginBottom: 40,
  },
  boxTextMess: {
    position: 'absolute',
    top: 50,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'rgba(255,0,0,0.2)',
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loadingImage: {
    width: 30,
    height: 30,
  },
  textMess: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'ANC',
  },
  textBottom2: {
    color: '#111',
    marginTop: 10,
    marginHorizontal: 5,
    fontFamily: 'ANC',
  },
  boxFooter: {
    flexDirection: 'row',
  },
  textFooter2: {
    textDecorationLine: 'underline',
    color: '#24cf5f',
  },
  textFooter: {
    fontSize: 14,
    fontFamily: 'ANC',
    letterSpacing: 0.8 
  },
});
