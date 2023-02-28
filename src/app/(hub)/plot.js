'use client';
import Plot from 'react-plotly.js';

export function Plotly(props) {

  if (props.x.length < 2){
    return <div>
      Select 2 or more models to compare them!
    </div>
  }
  return <Plot
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