import { NavigationProp, RouteProp } from "@react-navigation/native";
import { ReactDOM } from "react";

export interface ScreenDefaultProps {
    navigation: NavigationProp<any, any> |any;
    route: RouteProp<any, any>;
  }
  export interface HEADERPROPS {
    left?:any,
    right?:any,
    center?:any
    navigation: NavigationProp<any, any> |any;
    back?:boolean

  }