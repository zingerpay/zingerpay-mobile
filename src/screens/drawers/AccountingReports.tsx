import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Header from "../../components/custom/Header";
import { ScreenDefaultProps } from "../../generic/types";
import { Typography } from "@hoddy-ui/core";
import { POSTJOURNALENTRY } from "../../generic/routes";
const AccountingReportNav = [
  { label: "Post Journal Entry", route:POSTJOURNALENTRY },
  { label: "Year To Date Line Item Tables", route: "/ytd-line-item-tables" },
  { label: "Year To Date Line Item Source View", route: "/ytd-line-item-source-view" },
  { label: "All Line Items Source View", route: "/all-line-items-source-view" },
  { label: "Balance Sheet Account CFBalances", route: "/balance-sheet-account-cfbalances" },
  { label: "Balance Sheet Account CFBalances Source View", route: "/balance-sheet-account-cfbalances-source-view" },
  { label: "Financial Report", route: "/financial-report" },
  { label: "GL Account Listing", route: "/gl-account-listing" },
];
function AccountingReport({ navigation }: ScreenDefaultProps) {
  const styles = ScaledSheet.create({
    root: {
      flex: 1,
    },
    content: {
      padding: "15@s",
    },
    innerContent: {
      backgroundColor: "rgba(0, 0, 0, 0.075)",
      minHeight: 17,
      marginBottom: 10,
      padding: 15,
      borderRadius: 10,
    },
    container: {
      borderWidth: 0.5,
      borderColor: "#aaa",

      minHeight: 200,
      borderRadius: 20,
      padding: 15,
    },
  });
  return (
    <View style={styles.root}>
      <Header
        navigation={navigation}
        center={
          <Typography fontWeight={600} color="light" variant="h5">
            Accounting Report
          </Typography>
        }
      />
      <View style={styles.content}>
        <View style={styles.container}>
          {AccountingReportNav?.map((cur, i) => (
            <TouchableOpacity onPress={()=>{navigation.navigate(cur.route)}} key={i} style={styles.innerContent}>
              <Typography color="primary">{cur.label}</Typography>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

export default AccountingReport;
