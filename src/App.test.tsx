import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Login } from 'components'

test('Check is render', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  )
  expect(getByText(/react/i)).toBeInTheDocument()
})
