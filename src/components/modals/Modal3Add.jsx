import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Modal3Add() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className=" text-pink-600 border-[1px] border-pink-600 hover:bg-pink-600 hover:text-white px-3 py-1 rounded-[3px]"
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
          <Modal.Title>Add Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Yousef Gohary" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Percentage</Form.Label>
              <Form.Control type="number" placeholder="100%" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Max Users</Form.Label>
              <Form.Control type="number" placeholder="200" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="flex flex-row items-center">
                <Form.Label>From</Form.Label>
                <Form.Control type="date" />
                <Form.Label>to</Form.Label>
                <Form.Control type="date" />
              </div>
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

export default Modal3Add;
