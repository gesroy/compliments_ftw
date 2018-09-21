/*global module*/
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Footer from '../components/Footer'
import Button from '../components/Button'
import ComplimentScreen from '../components/ComplimentScreen'
import ComplimentCard from '../components/ComplimentCard'
import { BrowserRouter as Router } from 'react-router-dom'
import Inputfield from '../components/Inputfield'
import InputScreen from '../components/InputScreen'

storiesOf('Footer', module).add('with text', () => (
  <Router>
    <Footer onClick={action('clicked')} />
  </Router>
))

storiesOf('ComplimentCard', module).add('show static', () => <ComplimentCard />)

storiesOf('Screens/ComplimentScreen', module).add('show static', () => (
  <ComplimentScreen />
))

storiesOf('Button', module)
  .add('show long', () => (
    <Button onClick={action('clicked')}>
      This is a very nice Button with quite some long text
    </Button>
  ))
  .add('show short', () => <Button onClick={action('clicked')}>Short</Button>)

storiesOf('Inputfield', module).add('show static', () => <Inputfield />)

storiesOf('Screens/Inputscreen', module).add('show static', () => (
  <Router>
    <InputScreen onSaveComplimentText={action('onSaveComplimentText')} />
  </Router>
))
