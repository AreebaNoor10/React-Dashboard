import React from 'react';
import '../Dash.css'; 
import Progressbar from '../Progress/Progressbar';
import Progressbar1 from '../Progress/Progressbar1'
import Progressbar2 from '../Progress/Progressbar2'
import Progressbar3 from '../Progress/Progressbar3';
import { Button } from '@mui/material';
const data = [
  { id: '01', name: 'Home Decor Range', Popularity:<Progressbar/>,Sales:<Button style={{border:'1px solid #0195ff',height:'4vh', color:'#0195ff', borderRadius:'80px'}}>45%</Button> },
  { id: '02', name: 'Disney Princess Pink Bag 18', Popularity:<Progressbar1/>,Sales:<Button style={{border:'1px solid #00e097',height:'4vh', color:'#00e097', borderRadius:'80px'}}>29%</Button>  },
  { id: '03', name: 'Bathroom Essentials', Popularity:<Progressbar2/>,Sales:<Button style={{border:'1px solid #884dff',height:'4vh', color:'#884dff', borderRadius:'80px'}}>18%</Button>  },
  { id: '04', name: 'Apple Smartwatches', Popularity:<Progressbar3/>,Sales:<Button style={{border:'1px solid #ff8f0d',height:'4vh', color:'#ff8f0d', borderRadius:'80px'}}>25%</Button>  },
  // ... more data
];

const Table1 = () => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.Popularity}</td>
            <td>{item.Sales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table1;
