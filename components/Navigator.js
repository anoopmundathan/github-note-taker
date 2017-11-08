import React from 'react'
import { StackNavigator } from 'react-navigation'
import GitHubNoteTaker from './GitHubNoteTaker'
import UserDetail from './UserDetail'

export const MainStack = StackNavigator({
  Main: {
    screen: GitHubNoteTaker,
    navigationOptions: {
      title: 'GitHub Note Taker'
    }
  },
  UserDetail: {
    screen: UserDetail
  }
})
