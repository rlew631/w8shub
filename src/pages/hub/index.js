import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import Navbar from '../../components/navbar'
import {rows, columns} from '../../components/hub/plot_data'
import {Plot} from '../../components/hub/plot'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import "../styles.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const [pageSize, setPageSize] = React.useState(10);
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

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar page='HUB'/>
        <br/>
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