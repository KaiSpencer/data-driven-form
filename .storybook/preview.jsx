import { addDecorator } from '@storybook/react'
import React from 'react'
import './main.scss'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'


addDecorator(story => (
  <Router history={createMemoryHistory({ initialEntries: ['/page-1'] })}>
    <Route path="/:pagePath" component={() => story()} />
  </Router>
))