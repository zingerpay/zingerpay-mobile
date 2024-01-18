import { IconButton, SafeAreaView, useColors } from '@hoddy-ui/core'
import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Wrapper from './Wrapper'
import { HEADERPROPS } from '../../generic/types'

function Header({center,right,navigation,back}:HEADERPROPS) {
    const colors = useColors()
    const styles = ScaledSheet.create({
        root:{
            minHeight:"90@s",
            backgroundColor:colors.secondary.main
            ,borderBottomLeftRadius:25,
            borderBottomRightRadius:25,
            width:"100%",padding:"15@s"
        }
    })
  return (
  <View  style={styles.root}>
 
    <Wrapper mt={40} jc='space-between' ai='center'>
<View   >
<IconButton
            icon= {back?"arrow-back": "menu"}
            size={28}
            color="light"
            onPress={() => {
              back?navigation.goBack():
              navigation?.openDrawer()
            }}
          />
</View>
<View >
{center}
</View>
<View  >
<IconButton color="light" icon="person" size={28} />
</View>
    </Wrapper>
  </View>
  )
}

export default Header