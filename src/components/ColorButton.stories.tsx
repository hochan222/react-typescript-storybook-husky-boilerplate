import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorButton from './ColorButton';
import { action } from '@storybook/addon-actions';
storiesOf('ColorButton', module)
  .add('red', () => <ColorButton color="red" onClick={action('clicked')} />)
  .add('blue', () => <ColorButton color="blue" onClick={action('clicked')} />);
