import {
    Button,
    IconButton,
    SafeAreaView,
    TextField2,
    Typography
} from "@hoddy-ui/core";
import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { ScreenDefaultProps } from "../../generic/types";
function ResetPassword({navigation}:ScreenDefaultProps) {
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
      width: "100%",
      padding: 15,
    },
    returnButton: {
      position: "absolute",
      top: 0,
      left: 20,
    },
  });
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.returnButton}>
          <IconButton onPress={()=>{navigation.goBack()}} icon="arrow-back" size={40} bg />
        </View>
        <View style={styles.content}>
          <Typography gutterBottom={20} align="center">
            Reset Password
          </Typography>
          <TextField2 placeholder="Email" gutterBottom={15} />
          <Button title="Send" fullWidth />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ResetPassword;
