import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NoteForm from './index'

test('<NoteForm /> updates parent state and calls onSubmit', () => {
  const testString = "testiteksti"
  const postNote = jest.fn()

  const component = render(
    <NoteForm postNote={postNote} />
  )

  const input = component.container.querySelector('input')
  const form = component.container.querySelector('form')

  fireEvent.change(input, {
    target: { value: testString }
  })
  fireEvent.submit(form)

  expect(postNote.mock.calls).toHaveLength(1)
  expect(postNote.mock.calls[0][0]).toBe(testString)
})