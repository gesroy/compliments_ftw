/*global module*/
import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../components/Footer'
import ComplimentScreen from '../components/ComplimentScreen'

storiesOf('Footer', module).add('with text', () => (
  <Footer>Some text is here! Yeah!</Footer>
))

storiesOf('ComplimentScreen', module).add('show state', () => (
  <ComplimentScreen />
))
