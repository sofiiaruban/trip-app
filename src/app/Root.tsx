import { store } from '@app/store/store'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

interface RootProps {
  children?: ReactNode
}

const Root: FC<RootProps> = ({ children }) => {
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>{children}</HashRouter>
      </PersistGate>
    </Provider>
  )
}
export default Root
