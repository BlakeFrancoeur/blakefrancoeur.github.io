import React from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components'

function App() {
  return (
    <FluentProvider theme={webDarkTheme}>
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <div />
      </main>
    </FluentProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
