import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BasicExample() {
return (
<Container style={{width:350, paddingTop:200}}>
<Form> 
<Form.Group className="mb-3" controlId="formBasicEmail">
    <h3 class="text-center">Login</h3>
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Senha</Form.Label>
<Form.Control type="password" placeholder="" />
</Form.Group>
<button class="btn btn-primary btn-block confirm-button">Acessar</button>
</Form>
</Container>
);
}