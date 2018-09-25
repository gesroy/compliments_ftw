/*global module*/
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, files } from '@storybook/addon-knobs/react'

import Footer from '../components/Footer'
import Button from '../components/Button'
import ComplimentCard from '../components/ComplimentCard'
import { BrowserRouter as Router } from 'react-router-dom'
import Inputfield from '../components/Inputfield'
import kompliment13 from '../images/kompliment13-small.jpg'

const image = {
  src: kompliment13,
  alt: 'compliment image',
}

storiesOf('Footer', module).add('with text', () => (
  <Router>
    <Footer onClick={action('clicked')} />
  </Router>
))

storiesOf('ComplimentCard', module)
  .addDecorator(withKnobs)
  .add('show static', () => (
    <ComplimentCard
      image={'/static/media/kompliment13-small.8a44b51b.jpg'}
      compliment={text('text', 'Alles wird gut.')}
    />
  ))
  .add('here is an image', () => <img src={image.src} alt={image.alt} />)

storiesOf('Button', module)
  .add('show long', () => (
    <Button onClick={action('clicked')}>
      This is a very nice Button with quite some long text
    </Button>
  ))
  .add('show short', () => <Button onClick={action('clicked')}>Short</Button>)

storiesOf('Inputfield', module).add('show static', () => <Inputfield />)
