import React from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";

function CarModal({ car, onHide }) {
  return (
    <Modal show={!!car} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{car.name} - Before & After</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h5>Before</h5>
            <Image src={car.before} fluid />
          </Col>
          <Col>
            <h5>After</h5>
            <Image src={car.after} fluid />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CarModal;
