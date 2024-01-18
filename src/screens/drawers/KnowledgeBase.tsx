import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Header from "../../components/custom/Header";
import { ScreenDefaultProps } from "../../generic/types";
import { Typography } from "@hoddy-ui/core";
import { Entypo } from "@expo/vector-icons";
import Wrapper from "../../components/custom/Wrapper";
function KnowledgeBase({ navigation }: ScreenDefaultProps) {
    const credentialsArray = [
        {
          type: 'Username',
          value: 'Your Profile Email Address',
        },
        {
          type: 'Password',
          value: 'Send a Password'}
      ];
  const styles = ScaledSheet.create({
    root: {
      flex: 1,
    },
    content: {
      padding: "15@s",
    },
  });
  return (
    <View style={styles.root}>
      <Header
        navigation={navigation}
        center={
          <Typography fontWeight={600} color="light" variant="h5">
            Knowledge Base
          </Typography>
        }
      />
      <View style={styles.content}>
        <Typography gutterBottom={15} variant="h5" fontWeight={500}>
          Knowkledge Base and Learning Management Systems (LMS)
        </Typography>
        <Typography gutterBottom={20}>
          Self Paced Training has been deployed to the Learning Management
          System(LMS).
        </Typography>
        <Typography >
          Use the Credentials below to gain access to the system.
        </Typography>
        
        <View style={{marginTop:20}}>
            {
                credentialsArray?.map((cur,i)=>(
                    <View>
                <Wrapper ai="center" mt={10}>
               <Entypo name="dot-single" size={24} color="black" />
               <Typography fontWeight={600}>{cur.type} : </Typography>
               <Typography  color="textSecondary">{cur.value}</Typography>
                </Wrapper>
            

                </View>
                ))
            }
        </View>
      </View>
    </View>
  );
}

export default KnowledgeBase;
