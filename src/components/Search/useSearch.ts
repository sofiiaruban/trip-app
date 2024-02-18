import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { KeyCode } from './constants'

interface SearchHookReturnType {
  inputValue: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSearchHandle: () => void
}

const useSearch = (onSearch: (value: string) => void): SearchHookReturnType => {
  const [inputValue, setInputValue] = useState('')
  const trimmedValue: string = inputValue.trim()

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const onEnterClick: (e: KeyboardEvent) => void = useCallback(
    (e) => {
      if (e.code === KeyCode.ENTER) {
        onSearchHandle()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trimmedValue, onSearch]
  )

  useEffect(() => {
    window.addEventListener('keydown', onEnterClick)

    return () => {
      window.removeEventListener('keydown', onEnterClick)
    }
  }, [onEnterClick])

  const onSearchHandle = () => {
    if (trimmedValue) {
      onSearch(trimmedValue)
    }
  }

  return {
    inputValue,
    onInputChange,
    onSearchHandle
  }
}

export default useSearch
