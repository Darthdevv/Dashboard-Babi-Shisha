import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Modal4Add() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="w-28 text-white  bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 font-medium rounded-lg text-sm py-2 mt-2 ml-5"
        onClick={handleShow}
      >
        Add
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Delivery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Yousef Gohary" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Licence</Form.Label>
              <Form.Control type="number" placeholder="1234" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="+1 (123) 456-7890" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Delivery-Type-Id</Form.Label>
              <Form.Control type="number" placeholder="1" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className=" border-[1px] border-gray-500 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-[3px]"
            onClick={handleClose}
          >
            Close
          </button>
          <button className="  border-[1px] border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-[3px]">
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal4Add;
