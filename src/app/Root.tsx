import { FC, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface RootProps {
  children?: ReactNode
}

const Root: FC<RootProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
export default Root
