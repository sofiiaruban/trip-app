import { useState } from 'react';

const useActiveIndex = (initialIndex: number = 0) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const setActive = (index: number) => {
    setActiveIndex(index);
  };

  return { activeIndex, setActive };
};

export default useActiveIndex;
