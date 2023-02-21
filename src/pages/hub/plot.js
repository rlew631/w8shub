import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const DynamicPlot = dynamic(
  () => import('react-plotly.js').then((module) => {
    return module.default
  }),
  { ssr: false }
)

export function Plot(props) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null
  }

  if (props.x.length < 2){
    return <div>
      Select 2 or more models to compare them!
    </div>
  }
  return <DynamicPlot
    data={[
      {type: 'bar',
      x:props.x,
      y:props.y,
    },
    ]}
    layout={{
      // {width: 320, height: 240, title: 'A Fancy Plot'}
      title: {
        text:'Model Performance',
        font: {
          family: 'Courier New, monospace',
          size: 24
        },
        xref: 'paper',
        x: 0.05,
      },
      xaxis: {
        title: {
          text: 'Model',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        },
      },
      yaxis: {
        range: [0,100],
        title: {
          text: 'mAP-50',
          font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#7f7f7f'
          }
        }
      }
    }}
  />
}