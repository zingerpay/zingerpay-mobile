import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Header from '../../components/custom/Header'
import { ScreenDefaultProps } from '../../generic/types'
import { Typography } from '@hoddy-ui/core'
const MissionNav = [
  "Mission Fields",
  "Available Missions",
  "Mission Bids",
  "Submit Pilot Mission Reports",
  "Submit Farm Owner Mission Feedback",
  "View Mission Reports"
]
function Mission({navigation}:ScreenDefaultProps) {
  const styles = ScaledSheet.create({
    root:{
      flex:1
    },
    content:{
      padding:"15@s",
  
    },
    innerContent: {
      backgroundColor: "rgba(0, 0, 0, 0.075)",
      minHeight: 17,
      marginBottom: 10,
      padding: 15,
      borderRadius: 10,
    },
    container:{
      borderWidth:0.5,
      borderColor:"#aaa",
  
      minHeight:200,
      borderRadius:20,
      padding:15
    }
  })
  return (
 <View style={styles.root}>
<Header  navigation={navigation}    center={
          <Typography fontWeight={600} color="light" variant="h5">
         Mission
          </Typography>
        }/>
        <View  style={styles.content}>
<View style={styles.container}>
{MissionNav?.map((cur, i) => (
                <TouchableOpacity key={i} style={styles.innerContent}>
                  <Typography color="primary">{cur}</Typography>
                </TouchableOpacity>
              ))}
</View>
        </View>
 </View>
  )
}

export default Mission