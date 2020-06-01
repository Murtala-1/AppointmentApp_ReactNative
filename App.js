import React from 'react'
import {YellowBox} from 'react-native'
import EventList from './EventList'

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceivedProps is desprecated"
])
const App = ()=> {
  return(
    <EventList />
    
  )
}
export default App