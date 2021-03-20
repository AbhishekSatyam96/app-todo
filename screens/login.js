import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import Todo from './todo';


const Login = () => {
    const [gId, setGid] = useState(null);
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
                setGid(userInfo.user.id);
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
    const signOut = async () => {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setGid(null);
    }
    console.log("gid...>", gId);
    return (
        <View>
            {gId ? <Todo /> : null}
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            // disabled={this.state.isSigninInProgress} 
            />
            <Button
                onPress={signOut}
                title="LogOut"
            />
        </View>
    )
}

export default Login;