import React from 'react'
import { StackNavigator } from 'react-navigation'
import Main from './Main'
import UserDetail from './UserDetail'
import Profile from './Profile'
import Repo from './Repo'
import Note from './Note'

export const MainStack = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'GitHub Note Taker'
    }
  },
  UserDetail: {
    screen: UserDetail
  },
  Profile: {
    screen: Profile, 
    navigationOptions: {
      title: 'Profile'
    }
  },
  Repo: {
    screen: Repo, 
    navigationOptions: {
      title: 'Repo'
    }
  },
  Note: {
    screen: Note, 
    navigationOptions: {
      title: 'Note'
    }
  }
})
