import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Normal from './Normal';
import Basic from './Basic';
import Background from './Background';
import Long from './Long';

storiesOf('Dropdown Menu', module)
  .add('Normal', () => <Normal />)
  .add('Basic', () => <Basic />)
  .add('Background', () => <Background />)
  .add('Long', () => <Long />);
