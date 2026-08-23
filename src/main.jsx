import React from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider, Button, Card, CardHeader, Text, Title1, webDarkTheme } from '@fluentui/react-components'

const theme = {
  ...webDarkTheme,
  colorBrandBackground: '#f5f5f5',
  colorBrandBackgroundHover: '#ffffff',
  colorBrandForeground1: '#ffffff',
  colorNeutralBackground1: '#171717',
  colorNeutralBackground2: '#202020',
}

function App() {
  return (
    <FluentProvider theme={theme}>
      <div style={{ minHeight: '100vh', background: '#111111', color: '#fff' }}>
        <header style={{ height: 64, borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 32px', gap: 32 }}>
          <Text weight="bold" size={500}>BLAKE</Text>
          <nav style={{ display: 'flex', gap: 8 }}>
            <Button appearance="subtle">About</Button>
            <Button appearance="subtle">Projects</Button>
            <Button appearance="subtle">Tech</Button>
          </nav>
        </header>

        <main style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 32px' }}>
          <Text size={200} style={{ letterSpacing: 2 }}>PERSONAL PORTAL</Text>
          <Title1 style={{ display: 'block', marginTop: 12, marginBottom: 24 }}>Blake Francoeur</Title1>
          <Text size={500}>Technology, networking, hardware, cameras, and whatever I'm building next.</Text>

          <section style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            <Card>
              <CardHeader header={<Text weight="semibold">About Me</Text>} description="A little about Blake." />
            </Card>
            <Card>
              <CardHeader header={<Text weight="semibold">Projects</Text>} description="Things I'm building and experimenting with." />
            </Card>
            <Card>
              <CardHeader header={<Text weight="semibold">Tech</Text>} description="Networks, servers, cameras, hardware, and software." />
            </Card>
          </section>
        </main>
      </div>
    </FluentProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
