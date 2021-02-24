import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>  
            <Spacer>
                <Text h3 style={{textAlign: 'center'}}>Sign Up for NNH</Text> 
            </Spacer>
            <Spacer>
                <Input 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input 
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false} />
            </Spacer>
            <Spacer>
                <Button 
                title = "Sign Up"
                onPress={() => signup({ email, password })}
                />
            </Spacer>
            <Button
                title="Go to Signin"
                onPress={() => navigation.navigate('Signin')}
            />
              <Button 
                title="Go to main flow"
                onPress={() => navigation.navigate('mainFlow')}
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
    }
});

export default SignupScreen;