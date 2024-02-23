import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ModalBox from '../ModalBox'
import { MODAL_BOX_TEST_ID } from '../constants'

const commonProps = {
  isOpen: true,
  title: 'Test Modal'
}
const closeModalMock = jest.fn()

const testChild = <div data-testid="test-child">Hello, World!</div>

test('ModalBox component matches snapshot when open', async () => {
  const { getByTestId } = render(
    <ModalBox closeModal={closeModalMock} {...commonProps}>
      {testChild}
    </ModalBox>
  )
  const modalOverlay = getByTestId(MODAL_BOX_TEST_ID)
  expect(modalOverlay).toBeInTheDocument()
  expect(document.body).toMatchSnapshot()
})
