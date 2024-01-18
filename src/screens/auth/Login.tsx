import {
  Button,
  CheckBox,
  IconButton,
  LinkButton,
  SafeAreaView,
  TextField2,
  Typography
} from "@hoddy-ui/core";
import React, { useState } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Wrapper from "../../components/custom/Wrapper";
import { DRAWERNAVIGATION, RESETPASSWORD_SCREEN, TABNAVIGATION } from "../../generic/routes";
import { ScreenDefaultProps } from "../../generic/types";
function Login({navigation}:ScreenDefaultProps) {
    const [showPassword,setShowPassword]= useState<boolean>(false)
  const styles = ScaledSheet.create({
    root: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "15@s",
    },
    content: {
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: "#aaa",
      //   minHeight: 200,
      width: "100%",
      padding: 15,
    },
  });
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.content}>
          <Typography gutterBottom={20} align="center">
            Sign in to start your session
          </Typography>
          <TextField2 placeholder="User Name" gutterBottom={15} />
          <TextField2 placeholder="Password" gutterBottom={15} end={
            <IconButton icon={showPassword?"visibility":"visibility-off"}  onPress={()=>{setShowPassword(!showPassword)}} />
          } />
          <Wrapper mb={15} gap={5}>
            <CheckBox />
            <Typography>Remember me</Typography>
          </Wrapper>
          <Button title="Login" fullWidth onPress={()=>{navigation.navigate(DRAWERNAVIGATION)}} />
          <Wrapper mt={15}  jc="center" ai="center">
            <LinkButton color="primary" onPress={()=>{navigation?.navigate(RESETPASSWORD_SCREEN)}} title="Reset Password" />
          </Wrapper>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
