import { Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// for looking at the different color palette themes

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ColorPalette = () => {
  const colors = Object.keys(darkTheme.palette).filter(
    (color) => color !== 'common'
  );
  console.log(darkTheme)
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      justifyContent="center"
    >
      {colors.map((color) => (
        <Box
          key={color}
          width={100}
          height={100}
          borderRadius={4}
          bgcolor={darkTheme.palette[color].main}
        />
      ))}
    </Box>
  );
};

export default ColorPalette;