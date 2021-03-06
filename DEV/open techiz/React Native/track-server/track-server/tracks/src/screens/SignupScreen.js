import React, {useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import NavLink from '../components/NavLink';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);


    return(
        <View style={styles.container}> 
            <NavigationEvents 
            onWillFocus={clearErrorMessage}
            />  
            <AuthForm 
                headerText="Sign up for NNH"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink 
                routeName="Signin"
                text="Already have an account? Sign in"    
            />
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
});

export default SignupScreen;