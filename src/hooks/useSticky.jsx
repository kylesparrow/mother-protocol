import { useEffect, useState, useRef } from 'react'

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    // This function handle the scroll performance issue
    const debounce = (func, wait = 20, immediate = true) => {
      let timeOut
      return () => {
        const context = this
        // const args = arguments
        const later = () => {
          timeOut = null
          if (!immediate) func.apply(context, [wait, immediate])
        }
        const callNow = immediate && !timeOut
        clearTimeout(timeOut)
        timeOut = setTimeout(later, wait)
        if (callNow) func.apply(context, [wait, immediate])
      }
    }

    window.addEventListener('scroll', debounce(handleScroll))
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [isSticky])

  return { isSticky, element }
}

export default useSticky
