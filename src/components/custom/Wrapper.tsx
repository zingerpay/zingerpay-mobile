import React from "react";
import { View } from "react-native";
interface WRAPPERPROPS {
  p?: number | string;
  mt?: number | string;
  mb?: number | string;
  pr?: number | string;
  pl?: number | string;
  gap?: number | string;
  ai?: "center" | "flex-start" | "flex-end";
  fw?: "wrap" | "nowrap" | "wrap-reverse" | "initial" | "inherit";
  jc?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  d?: "row" | "column" | "row-reverse" | "column-reverse";
  children: any;
  h?: number | string;
  w?: number | string;
}
function Wrapper({
  p,
  mt = 1,
  mb = 1,
  pl,
  pr,
  h,
  gap: gap,
  d = "row",
  ai,
  jc,
  children,
  w,
  fw,
}: WRAPPERPROPS) {
  return (
    <View
      style={{
 flex: 0,
        padding: p,
        paddingLeft: pl,
        paddingRight: pr,
        width: w,
        marginTop: mt,
        marginBottom: mb,
        gap: gap,
        height: h,
        flexDirection: d,
        alignItems: ai,
        justifyContent: jc,
        flexWrap: fw,
      }}
    >
      {children}
    </View>
  );
}

export default Wrapper;
