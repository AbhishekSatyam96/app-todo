import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';


const Login = ({ navigation }) => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '541102047627-be9dnk48ga5mn0o1d55mn9uhgjjil0pd.apps.googleusercontent.com'
        });
    }, []);
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo?.user?.id) {
                // AsyncStorage.setItem('id', userInfo.user.id);
                navigation.navigate("TodoList" , {
                    userId: userInfo.user.id,
                    userName: userInfo.user.name
                });
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log("inside catch1")

            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log("inside catch2")

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log("inside catch3")

            } else {
                // some other error happened
                console.log("inside catch4", error)

            }
        }
    };
    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Assignment of Groww</Text> */}
            <Text style={styles.title}>Simple ToDo Application</Text>
            <GoogleSigninButton
                style={{ width: 230, height: 65 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 34,
        margin: 10,
    },
    title: {
        fontSize: 16,
        margin: 5
    }
});

export default Login;