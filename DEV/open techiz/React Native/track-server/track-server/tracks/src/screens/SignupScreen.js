import React, {useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {

    const {state, signup} = useContext(AuthContext);


    return(
        <View style={styles.container}>  
            <AuthForm 
                headerText="Sign up for NNH"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <TouchableOpacity 
            onPress={() => navigation.navigate('Signin')
            }>
                <Spacer>
                    <>
                        <Text>Already have an account? <Text style={styles.link}>Sign in</Text></Text>
                    </>
                </Spacer>
            </TouchableOpacity>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        marginBottom: 200
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;