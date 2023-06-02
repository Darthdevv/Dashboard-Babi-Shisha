import React from 'react'
import { Form } from 'react-bootstrap';

function EditList() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Form>
        <div className="flex ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
            <Form.Control
              className="text-white"
              type="text"
              placeholder="vape,shisha,pipe"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="text-white"
              type="text"
              placeholder="Yousef Gohary"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              className="text-white"
              type="number"
              placeholder="99$"
            />
          </Form.Group>
        </div>

        <div className="flex">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              className="text-white"
              type="text"
              placeholder="write a description"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Features</Form.Label>
            <Form.Control
              className="text-white"
              type="text"
              placeholder="fast/easy"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Main-Image</Form.Label>
            <Form.Control className="text-white" type="file" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Other-Images</Form.Label>
          <Form.Control className="text-white" type="file" />
        </Form.Group>
        <button className=" w-28 text-white  bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 font-medium rounded-lg text-sm py-2">
          Save
        </button>
      </Form>
    </div>
  );
}

export default EditList