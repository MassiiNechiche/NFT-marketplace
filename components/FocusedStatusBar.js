import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
    const IsFocused = useIsFocused()
    return IsFocused ? <StatusBar animated={true} {...props} /> : null
}

export default FocusedStatusBar
