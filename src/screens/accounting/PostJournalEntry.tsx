import { SafeAreaView } from '@hoddy-ui/core'
import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import WebView from 'react-native-webview'
import Header from '../../components/custom/Header'
import { ScreenDefaultProps } from '../../generic/types'

function PostJournalEntry({navigation}:ScreenDefaultProps) {
    const styles = ScaledSheet.create({
        root:{
            flex:1
        }
    })
  return (
<View style={styles.root}>
    <Header/>

</View>
  )
}

export default PostJournalEntry