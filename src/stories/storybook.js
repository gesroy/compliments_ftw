/*global module*/
import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../components/Footer'
import ComplimentScreen from '../components/ComplimentScreen'
import ComplimentCard from '../components/ComplimentCard'
import { BrowserRouter as Router } from 'react-router-dom'

storiesOf('Footer', module).add('with text', () => (
  <Router>
    <Footer />
  </Router>
))

storiesOf('ComplimentCard', module).add('show state', () => <ComplimentCard />)

storiesOf('ComplimentScreen', module).add('show state', () => (
  <ComplimentScreen />
))
