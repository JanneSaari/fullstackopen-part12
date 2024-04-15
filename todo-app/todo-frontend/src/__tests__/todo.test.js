import {expect, it} from '@jest/globals';
import Todo from '../Todos/Todo';
import {render, screen} from '@testing-library/react';


it("single Doto is rendered correctly on screen", () => {
  const mockfn1 = () => {}
  const mockfn2 = () => {}
  const todo = {
    text: 'testing',
    done: true
  }
  render(<Todo todo={todo} onClickComplete={mockfn1} onClickDelete={mockfn2}></Todo>)
  expect(screen.getByText('testing')).toBeInTheDocument()
  expect(screen.getByText('This todo is done')).toBeInTheDocument()
})