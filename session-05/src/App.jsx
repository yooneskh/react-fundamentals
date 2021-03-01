import React, { useEffect, useState } from 'react'
import { Accordion, Button, OverlayTrigger, Spinner, Tab, Tabs, Tooltip } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Line, LineChart } from 'recharts';

function TestOverlay(props) {
  return (
    <p>Testing component prop: {props.overlay} </p>
  )
}


function TestOverlay2(props) {
  return (
    <p>Testing component: {props.children} </p>
  )
}

function App() {

  // const [tooltip, setTooltip] = useState(<p>Hi</p>);

  // const [isLoggingIn, setLoggingIn] = useState(false);
  // const [markerPosition, setMarkerPosition] = useState([29.6655016, 52.3929309]);

  // useEffect(() => {

  //   setInterval(() => {
  //     setMarkerPosition(currentMarkerPosition => {
  //       return [
  //         currentMarkerPosition[0] + 0.02,
  //         currentMarkerPosition[1] + 0.02
  //       ]
  //     })
  //   }, 500);

  // }, [])

  // const doLogin = () => {
  //   setLoggingIn(true);
  //   setTimeout(() => {
  //     setLoggingIn(false);
  //     /// do work
  //     alert(2);
  //   }, 3000);
  // }
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

  return (
    <div style={{ padding: 12 }}>

      {/* <Button variant="primary">This is out button</Button>

      <OverlayTrigger
        placement="top"
        overlay={tooltip}>
        <h1>My Title</h1>
      </OverlayTrigger>
      <TestOverlay overlay={<button>This is asd button!</button>} />
      <TestOverlay2>
        <button>My CHIsLDRENNNN Button!</button>
      </TestOverlay2> */}

      {/* spinner example */}
      {/* {isLoggingIn && <Spinner animation="border" />}
      {!isLoggingIn && <Button onClick={doLogin}>Login User</Button>} */}
      {/* <Button onClick={isLoggingIn ? undefined : doLogin}>
        { isLoggingIn ? 'Loading ...' : 'Login User' }
      </Button> */}

      {/* <Tabs defaultActiveKey="home" variant="pills">
        <Tab eventKey="home" title="Home">
          Hoem page!
        </Tab>
        <Tab eventKey="home2" title={<><button>Login User</button> <h1>Home</h1></>}>
          Hoem page! 2
          <Button>My Button</Button>
        </Tab>
        <Tab eventKey="home3" title="Home3">
          Hoem page! 3
        </Tab>
        <Tab eventKey="home4" title="Home4">
          Hoem page! 4
        </Tab>
        <Tab eventKey="home5" title="Home5">
          Hoem page! 5
        </Tab>
      </Tabs> */}

      {/* <Accordion>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <p>Hello! I'm the body 0</p>
        </Accordion.Collapse>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <p>Hello! I'm another body 1</p>
        </Accordion.Collapse>
      </Accordion> */}


      {/* {moment().format('HH:mm')} */}

      {/* <MapContainer center={[29.6655016, 52.3929309]} zoom={13} scrollWheelZoom={true} style={{ height: 500 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={markerPosition}></Marker>
      </MapContainer> */}

    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>

    </div>
  )
}

export default App
