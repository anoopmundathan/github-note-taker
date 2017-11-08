import React from 'react'
import { StackNavigator } from 'react-navigation'
import Main from './Main'
import UserDetail from './UserDetail'

export const MainStack = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'GitHub Note Taker'
    }
  },
  UserDetail: {
    screen: UserDetail
  }
})
