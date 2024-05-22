import { Container, Image, Row, Col } from 'react-bootstrap';
import { MouseEventHandler, useState } from "react";


function Login(props: { toggle: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e: { preventDefault: () => void; }) {
      e.preventDefault()
      // Code to handle login goes here
      props.toggle()
  }

  return (
      <div className="popup">
          <div className="popup-inner">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                  <label>
                      Username:
                      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                  </label>
                  <label>
                      Password:
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                  </label>
                  <button type="submit">Login</button>
              </form>
              <button onClick={props.toggle}>Close</button>
          </div>
      </div>
  )
}


export function Profile() {
    const [seen, setSeen] = useState(false)
    function togglePop () {
      setSeen(!seen);
    };

    return (
      <>
      <Container>
        <Row>

          <div>
              <button onClick={togglePop}>Login</button>
              {seen ? <Login toggle={togglePop} /> : null}
          </div>
        </Row>
        
      </Container>
      </>
    )
  }