import React from "react";
import { ScrollView, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ScaledSheet } from "react-native-size-matters";
import Header from "../../components/custom/Header";
import { Button, IconButton, TextField2, Typography } from "@hoddy-ui/core";
import { ScreenDefaultProps } from "../../generic/types";
import Wrapper from "../../components/custom/Wrapper";
import Table from "../../components/custom/Table";
import TableComponent from "../../components/custom/Table";

function Profile({ navigation }: ScreenDefaultProps) {
  const styles = ScaledSheet.create({
    root: {
      flex: 1,
    },
    content: {
      padding: "15@s",
    },
    row: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
  return (
    <View style={styles.root}>
      <Header
   navigation={navigation}
       
        center={
          <Typography fontWeight={600} color="light" variant="h5">
            My Profile
          </Typography>
        }
      
      />
      <View style={styles.content}>
        <TextField2 placeholder="Search" end={<Ionicons name="search" size={24} color="black" />} />
        <View >
            <ScrollView horizontal>
                <TableComponent/>
            </ScrollView>
            
        </View>
      </View>
    </View>
  );
}

export default Profile;
