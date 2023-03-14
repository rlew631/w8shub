import React, {useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Navbar from '../../components/Navbar'
import {rows, columns} from '../../components/hub/plot_data'
import {Plot} from '../../components/hub/plot'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function App() {
    // dark mode toggle
    const [darkMode, setDarkMode] = useState(false);
    const theme = darkMode ? darkTheme : lightTheme;
  
  // for the toggle
  const [viewModels, setViewModels] = React.useState('Classification');
  const handleChange = (event, newViewModels) => {
    setViewModels(newViewModels);
  };
  const rowEntries = rows.filter(entry => entry.modelType == viewModels);

  // for the data grid
  const [pageSize, setPageSize] = React.useState(10);
  const [plotX, setPlotX] = React.useState([]);
  const [plotY, setPlotY] = React.useState([]);


  const onRowsSelectionHandler = (ids) => {
    // this creates the graph
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar page='HUB' darkMode={darkMode} toggleDarkMode={setDarkMode}/>
        <Box sx={{
          flexGrow: 1,
          padding: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
          width: '100%'
        }}
        >
          <ToggleButtonGroup
            color="primary"
            value={viewModels}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{paddingBottom: '20px'}}
          >
            <ToggleButton value="Classification">Classification</ToggleButton>
            <ToggleButton value="Segmentation">Segmentation</ToggleButton>
            <ToggleButton value="Pose">Pose Estimation</ToggleButton>
          </ToggleButtonGroup>
          <DataGrid
            sx={{height: 111 + Math.min(38*pageSize, 38*rowEntries.length)}}
            rows={rowEntries}
            columns={columns}
            pageSize={pageSize}
            rowHeight={38}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10,20,50]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
          {viewModels != 'Pose' &&
          <Plot x={plotX} y={plotY}/>
          }
        </Box>

      </ThemeProvider>
    </>
  );
}