import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Avatar,
  Button,
  Typography,
  UIThemeContext,
  useColors,
} from "@hoddy-ui/core";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import { Linking, StyleSheet, View } from "react-native";
import Divider from "../custom/Divider";

const CustomDrawerScreen = (props: any) => {
  const colors = useColors();
  const { themeState } = useContext(UIThemeContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: 6,
      justifyContent: "space-between",
      width: "100%",
      backgroundColor: colors.black[4],
    },
    drawerHeader: {
      // marginTop: 10,
      marginBottom: 10,

      padding: 10,
    },
    drawerheaderprofile: {
      flex: 0,
      flexDirection: "row",
      gap: 15,
      width: "100%",
      alignItems: "center",
    },

    driverprofile: {
      flex: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 30,
    },
    drawerHeaderText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    drawerFooter: {
      padding: 15,
      alignItems: "center",
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.container}>
      <DrawerContentScrollView scrollEnabled={false} {...props}>
        <View style={styles.drawerHeader}>
          <Typography gutterBottom={2} variant="h5" color="light">
            Sandbox Dev
          </Typography>
          <Divider />
          <Typography
            gutterBottom={10}
            style={{ marginTop: 10, marginLeft: 10 }}
            color="light"
          >
            developer@sandboxapp.com
          </Typography>
          <Divider />
        </View>
        {/* <Divider style={{ width: "100%", marginBottom: 20 }} /> */}
        <DrawerItemList {...props} />
{/* 
        <DrawerItem
          icon={(props) => {
            return <Ionicons name="code" {...props} />;
          }}
          label="Credentials"
          inactiveTintColor={colors.white[5]}
          onPress={() => Linking.openURL("https://mywebsite.com/help")}
        /> */}
      </DrawerContentScrollView>
      <View style={styles.drawerFooter}>
        <Button
          color="error"
          fullWidth
          title="Log Out "
          end={
            <Ionicons
              name="ios-exit-outline"
              size={20}
              color={colors.light.main}
            />
          }
        />
      </View>
    </View>
  );
};

export default CustomDrawerScreen;
