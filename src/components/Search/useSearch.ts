import debounce from '@app/helpers/debounce'
import { ChangeEvent, useEffect, useState } from 'react'

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

  useEffect(() => {
    const handler = debounce(() => {
      onSearch(trimmedValue)
    }, 300)

    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [trimmedValue, onSearch])

  const onSearchHandle = () => {
    onSearch(trimmedValue)
  }

  return {
    inputValue,
    onInputChange,
    onSearchHandle
  }
}

export default useSearch
