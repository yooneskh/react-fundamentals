import moment from 'moment-jalaali';
import { useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function App() {

  // const [c, sc] = useState(0);
  // const timeEpoch = 1614172059000;
  // const timeString = '1399-05-12'

  const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page A 1', uv: 410, pv: 2500, amt: 2400},
    {name: 'Page A 2', uv: 420, pv: 2600, amt: 2400},
    {name: 'Page A 3', uv: 430, pv: 2700, amt: 2400},
    {name: 'Page A 4', uv: 440, pv: 2800, amt: 2400},
    {name: 'Page A 5', uv: 490, pv: 2900, amt: 2400},
  ]

  return (
    <div>
      {/* Learn React { moment(timeString, "jYYYY-jMM-jDD").format('jYYYY jMM jDD HH:mm:ss') }
     sssssssssssssss { moment(timeString, "jYYYY-jMM-jDD").valueOf() } */}
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="step" dataKey="pv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>

    </div>
  );
}

export default App;
