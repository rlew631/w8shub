import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {rows, columns} from './data'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {Plot} from './plot'
import "../styles.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const [pageSize, setPageSize] = React.useState(10);
  // create another hook here for a list of selected items' names from the chart
  // create another hook here for a list of selected items' mAP from the chart
  const [plotX, setPlotX] = React.useState([]);
  const [plotY, setPlotY] = React.useState([]);


  const onRowsSelectionHandler = (ids) => {
    // this function needs to be hijacked to update the list of items in the above hook
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    console.log(selectedRowsData);
    const xvals = selectedRowsData.map(row => row.modelName + row.subModel)
    const yvals = selectedRowsData.map(row => row.map50)
    setPlotX(xvals)
    setPlotY(yvals)
  };

  function renderPlot(plotX){}

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1>HUB</h1>
        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10,20,50]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </Box>
        <Plot x={plotX} y={plotY}/>

      </ThemeProvider>
    </>
  );
}