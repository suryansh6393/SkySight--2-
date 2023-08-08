import React from "react";
import {Container, Form } from "react-bootstrap";

function ToggleButton({ mode, handleToggle }) {
  return (
    
    <Container>
         <Form>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Dark mode"
        />
      </Form>

    </Container>
     
    
  );
}

export default ToggleButton;
