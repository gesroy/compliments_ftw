/*global module*/
import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ComplimentScreen from '../components/ComplimentScreen'
import ComplimentCard from '../components/ComplimentCard'
import { BrowserRouter as Router } from 'react-router-dom'
import Inputfield from '../components/Inputfield'
import InputScreen from '../components/InputScreen'

storiesOf('Footer', module).add('with text', () => (
  <Router>
    <Footer />
  </Router>
))

storiesOf('ComplimentCard', module).add('show static', () => <ComplimentCard />)

storiesOf('ComplimentScreen', module).add('show static', () => (
  <ComplimentScreen />
))

storiesOf('Button', module).add('show static', () => <Button />)

storiesOf('Inputfield', module).add('show static', () => <Inputfield />)

storiesOf('Inputscreen', module).add('show static', () => (
  <Router>
    <InputScreen />
  </Router>
))
