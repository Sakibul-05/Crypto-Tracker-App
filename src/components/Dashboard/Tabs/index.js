import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import "./styles.css";
import List from '../List';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    fontSize: "1.2rem" ,
    fontWeight: 600,
    // fontFamily: "Inter",
    textTransform: "capitalize"
  }

  const theme = createTheme({
    palette: {
        primary: {
            main: "#3a88e9"
        }
    }
  })

  return (
    <ThemeProvider theme={theme}>
        <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="grid" value="grid" sx={style}/>
            <Tab label="list" value="list" sx={style}/>
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className='grid-flex'>
            {
              coins?.map((coin) => (
                <Grid key={coin.id} coin={coin}/>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className='list-table'>
           <tbody>
           {
              coins?.map((coin) => (
                <List key={coin.id} coin={coin}/>
              ))
            }
           </tbody>
          </table>
        </TabPanel>
         
      </TabContext>
    </div>
    </ThemeProvider>
  );
}