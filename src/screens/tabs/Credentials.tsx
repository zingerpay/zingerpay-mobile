import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Header from "../../components/custom/Header";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { IconButton, TextField2, Typography, useColors } from "@hoddy-ui/core";
import { ScreenDefaultProps } from "../../generic/types";
import Wrapper from "../../components/custom/Wrapper";
import FAB from "react-native-fab";
import { FloatingAction } from "react-native-floating-action";
import { ADDAVAILABLECREDENTIALS } from "../../generic/routes";
function Credentials({ navigation }: ScreenDefaultProps) {
  const colors = useColors();
  const [activeTab, setActiveTab] = useState(false);
  const actions = [
    {
      text: "Add Pilot Credentials",
      // icon: require("./images/ic_accessibility_white.png"),
      name: "",
      position: 2,
    },
    {
      text: "Add Available Credentials",
      // icon: require("./images/ic_language_white.png"),
      name: ADDAVAILABLECREDENTIALS,
      position: 1,
    },
  ];
  const credentials_array = [
    {
      label: "Available Credentials",
      route: true,
    },
    {
      label: "Pilot Credentials",
      route: false,
    },
  ];
  const styles = ScaledSheet.create({
    root: {
      flex: 1,
    },
    content: {
      padding: "15@s",
    },
    tabContainer: {
      flex: 0,
      width: "100%",
      flexDirection: "row",
    },
    tab: {
      height: 45,
      alignItems: "center",
      width: "50%",
      justifyContent: "center",
      backgroundColor: colors.white[3],
    },
    activeTab: {
      height: 45,
      alignItems: "center",
      width: "50%",
      justifyContent: "center",
      backgroundColor: colors.secondary.main,
    },
  });
  return (
    <View style={styles.root}>
      <Header
        navigation={navigation}
        center={
          <Typography fontWeight={600} color="light" variant="h5">
            Credentials
          </Typography>
        }
      />
      <View style={styles.content}>
        <ScrollView stickyHeaderIndices={[1]}>
          <TextField2
            placeholder="Search"
            end={<Ionicons name="search" size={24} color="black" />}
          />
          <Wrapper>
            {credentials_array?.map((cur) => (
              <TouchableOpacity
                onPress={() => {
                  setActiveTab(cur.route);
                }}
                style={cur.route === activeTab ? styles.activeTab : styles.tab}
              >
                <Typography
                  style={{ color: cur.route === activeTab ? "#fff" : "#000" }}
                >
                  {cur.label}
                </Typography>
              </TouchableOpacity>
            ))}
          </Wrapper>
        </ScrollView>
      </View>
      <FloatingAction
        color={colors.primary.main}
        actions={actions}
        onPressItem={(name) => {
          navigation.navigate(name)
        }}
      />
    </View>
  );
}

export default Credentials;
