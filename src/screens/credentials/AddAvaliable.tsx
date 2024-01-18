import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Header from "../../components/custom/Header";
import { ScreenDefaultProps } from "../../generic/types";
import { Button, TextField2, Typography } from "@hoddy-ui/core";

function AddAvaliable({ navigation }: ScreenDefaultProps) {
  const styles = ScaledSheet.create({
    root: {
      flex: 1,
    },
    content:{
        padding:"15@s"
    },
    action:{
        marginTop:20
    }
  });
  return (
    <View style={styles.root}>
      <Header
        back
        navigation={navigation}
        center={
          <Typography fontWeight={600} color="light" variant="h5">
            Available Creditials
          </Typography>
        }
      />
      <View style={styles.content}>
        <TextField2 placeholder="kimjay" label="Credential ID**"/>
        <TextField2 placeholder="kimjay" label="Credential Name**"/>
        <TextField2 placeholder="kimjay" label="Credential Start Date**"/>
        <TextField2 placeholder="kimjay" label="Credential Expriration Date**"/>
        <TextField2 placeholder="kimjay" label="Issuing Authority**"/>
        <TextField2 placeholder="kimjay" label="Crdential Description**"/>
        <View  style={styles.action} >
            <Button gutterBottom={10} fullWidth title="Add"/>
            {/* <Button fullWidth variant="outlined" title="Cancel"/> */}
        </View>
      </View>
    </View>
  );
}

export default AddAvaliable;
