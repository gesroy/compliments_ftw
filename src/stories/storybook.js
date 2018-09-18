/*global module*/
import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../components/Footer'
import ComplimentScreen from '../components/ComplimentScreen'
import ComplimentCard from '../components/ComplimentCard'

storiesOf('Footer', module).add('with text', () => <Footer />)

storiesOf('ComplimentCard', module).add('show state', () => <ComplimentCard />)

storiesOf('ComplimentScreen', module).add('show state', () => (
  <ComplimentScreen />
))
