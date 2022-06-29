import '@testing-library/jest-dom'
import React from 'react'

global.React = React
// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'
import { server } from '../mocks/server'

beforeAll(() => {
  server.listen()
})

beforeAll(() => {
  server.resetHandlers()
})

afterEach(() => server.resetHandlers())

afterAll(() => {
  server.close()
})
