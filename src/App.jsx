import React from 'react'
import Header from './components/header/Header'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'
import useSticky from './hooks/useSticky'

function App() {
  const { isSticky, element } = useSticky()
  return (
    <div data-testid='app'>
      <Header isSticky={isSticky} />
      <MainContent element={element} />
      <Footer />
    </div>
  )
}

export default App
