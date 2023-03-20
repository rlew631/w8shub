import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';

// import { DataGrid } from '@mui/x-data-grid';

import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {rows, columns} from '../../components/hub/plot_data'
import {Plot} from '../../components/hub/plot'

export default function App(props) {
  
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

  const [selectedRows, setSelectedRows] = useState();

  const onRowsSelectionHandler = () => {
    // this creates the graph
    // this function needs to be hijacked to update the list of items in the above hook
    // const selectedRowsData = selectedRows.map((row) => row.find((row) => row.id === id));
    console.log(selectedRows);
    // const xvals = selectedRowsData.map(row => row.modelName + row.subModel)
    // const yvals = selectedRowsData.map(row => row.map50)
    // setPlotX(xvals)
    // setPlotY(yvals)
  };

  useEffect(() => {
    onRowsSelectionHandler();  // this method call API to get data 
  },[selectedRows]);

  return (
    <>
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
          // see: https://github.com/adazzle/react-data-grid/blob/main/README.md
          // sx={{height: 111 + Math.min(38*pageSize, 38*rowEntries.length)}}
          rows={rowEntries}
          columns={columns}
          rowHeight={32}
          selectedRows={selectedRows}
          onSelectedRowsChange={setSelectedRows}
          rowKeyGetter={row => row.id}
          // pageSize={pageSize}
          // rowHeight={38}
          // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          // rowsPerPageOptions={[10,20,50]}
          // checkboxSelection
          // disableSelectionOnClick
          // experimentalFeatures={{ newEditingApi: true }}
          // onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
        {viewModels != 'Pose' &&
        <Plot x={plotX} y={plotY} theme={props.theme}/>
        }
      </Box>
    </>
  );
}