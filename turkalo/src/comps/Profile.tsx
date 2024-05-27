import { auth , googleProvider} from "../firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import '../CSS/Profile.css';
import React from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

export const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password);
    } catch (err){
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Login</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="emailInput">Email</Label>
                  <Input
                    type="email"
                    id="emailInput"
                    placeholder="Email.."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="passwordInput">Password</Label>
                  <Input
                    type="password"
                    id="passwordInput"
                    placeholder="Password.."
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Container className="mt-5">
                <Row className="justify-content-center">
                  <Col md={6}>
                    <Button color="primary" block onClick={signIn} className="bold-text" style={{ width: '50%'  }}>Signin</Button>
                    <Button color="danger" block onClick={signInWithGoogle} className="mt-2 bold-text" style={{ width: '50%' }}>Signin with Google</Button>
                    <Button color="secondary" block onClick={logOut} className="mt-2 bold-text" style={{ width: '50%' }}>Log Out</Button>
                  </Col>
                </Row>
              </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};