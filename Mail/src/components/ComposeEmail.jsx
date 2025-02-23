import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ComposeEmail = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Compose Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>To</Form.Label>
            <Form.Control type="email" placeholder="recipient@example.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary">Send</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ComposeEmail;
