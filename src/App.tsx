import { LiFiWidget } from '@lifi/widget'

export function App() {
  return (
    <LiFiWidget
      integrator="Liminal-Stables"
      config={{
        theme: {
          container: {
            border: '1px solid rgb(234, 234, 234)',
            borderRadius: '16px',
          },
        },
      }}
    />
  )
}
