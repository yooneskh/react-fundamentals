import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Card, Form, Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';


function App() {
  
  const [poster, setPoster] = useState({
    name: '---',
    salavats: 0,
    picture: {
      path: ''
    }
  });

  const [loading, setLoading] = useState(false);
  const [incrementing, setIncrementing] = useState(false);

  const [show, setShow] = useState(false);

  const loadPosterRequest = (silent = false) => {
    setLoading(!silent);
    axios.get('https://api.tasliatbegu.ir/api/condolences/identifier/1')
      .then(response => {
        setTimeout(() => {
          setLoading(false);
          setPoster(response.data);
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      })
  };

  useEffect(loadPosterRequest, []);

  const sendIncrementSalavat = () => {
    setIncrementing(true);
    axios.post(`https://api.tasliatbegu.ir/api/condolences/${poster._id}/increment`, { property: 'salavats' })
      .then(response => {
        setTimeout(() => {
          setIncrementing(false);
          // setPoster({
          //   ...poster,
          //   salavats: poster.salavats + 1
          // });
          loadPosterRequest(true);
          // setPoster({
          //   ...poster,
          //   salavats: response.data
          // });
        }, 2000);
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    
    const socket = io('ws://api.tasliatbegu.ir', { forceNew: true });

    socket.on('connect', () => {
      console.log('Socket Connected!');
      socket.emit('condolence-changes', '');
    });

    socket.on('condolence-changed', (data) => {
      if (data._id === poster._id) {
        setPoster(data);
      }
    });

    socket.on('disconnect', () => {

    })

    return () => {
      socket.disconnect();
    };

  }, []);

  if (loading) {
    return <div>
      Loading ...
    </div>
  }

  return (
    // <div className="App">
    //   <p>تسلیت</p>
    //   <h1>{ poster.name }</h1>
    //   <img src={poster.picture.path} />

    //   <p>تعداد صلوات: { poster.salavats }</p>
    //   {incrementing && <div>Loading ...</div>}
    //   {!incrementing &&
    //     <button type="button" onClick={sendIncrementSalavat}>ارسال صلوات</button>
    //   }
    // </div>
    <div style={{ padding: 12 }}>
      <Alert variant="success">
        Thiws is a danger
      </Alert>
      <Button variant='danger'>Do thw work!</Button>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={"asdf"} onChange={event => alert(event.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>

      <Button variant="primary" onClick={() => setShow(true)}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <DataTable
        columns={[
          { name: 'First Name 2', selector: 'firstName', sortable: true }
        ]}
        data={[
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
          { firstName: 'Yoones' },
        ]}
      />

    </div>
  );

}

export default App
