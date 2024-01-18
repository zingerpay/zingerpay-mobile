import {
  IconButton,
  SafeAreaView,
  Typography,
  useColors,
} from "@hoddy-ui/core";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Wrapper from "../../components/custom/Wrapper";
import Header from "../../components/custom/Header";
import { ScreenDefaultProps } from "../../generic/types";
const paymentTasks = [
  "Create Payments",
  "Approve Payment Requests",
  "Additional Payment Activities",
];
const invoiceTasks = [
  "Create / Approve Customer Invoices",
  "Manage Customer Profiles",
  "Additional Incoming Payments Activities",
];
function Home({ navigation }: ScreenDefaultProps) {
  const colors = useColors();
  const styles = ScaledSheet.create({
    root: {
      flex: 1,
      paddingHorizontal: "15@s",
    },
    container: {
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: "#aaa",
      //   minHeight: 200,
      width: "100%",
      padding: 15,
      marginBottom: 20,
    },
    content: {
      padding: "15@s",
      marginBottom:90
    },
    innerContent: {
      backgroundColor: "rgba(0, 0, 0, 0.075)",
      minHeight: 17,
      marginBottom: 10,
      padding: 15,
      borderRadius: 10,
    },
  });
  return (
    <View>
      <Header
      navigation={navigation}

        center={
          <Typography fontWeight={600} color="light" variant="h5">
            Treasury
          </Typography>
        }
      
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.container}>
            <Typography gutterBottom={20} fontWeight={600} align="center">
              Outgoing Payments
            </Typography>
            <View>
              {paymentTasks?.map((cur, i) => (
                <TouchableOpacity key={i} style={styles.innerContent}>
                  <Typography color="primary">{cur}</Typography>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.container}>
            <Typography gutterBottom={15} fontWeight={600} align="center">
              Incoming Payments
            </Typography>
            <View>
              {invoiceTasks?.map((cur, i) => (
                <TouchableOpacity key={i} style={styles.innerContent}>
                  <Typography color="primary">{cur}</Typography>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.container}>
            <Typography gutterBottom={15} fontWeight={600} align="center">
              Bank Account Balances
            </Typography>
            <View>
              <TouchableOpacity style={styles.innerContent}>
                <Typography color="primary">
                  View Bank Account Balances
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <Typography gutterBottom={15} fontWeight={600} align="center">
              Cash Forecast Reporting
            </Typography>
            <View>
              <TouchableOpacity style={styles.innerContent}>
                <Typography color="primary">
                  View Bank Account Balances
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
