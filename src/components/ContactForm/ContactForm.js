// import React, { useState } from "react";
// import { Row, Col, Form, Button } from "react-bootstrap";
// import "./contactform.css"


// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:3000/#/Contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
   
// <Form
// id="contact-form"
// onSubmit={handleSubmit}
// >
// {/* Name input text box */}
// <Form.Group controlId="formGroupText">
//   <Form.Label className="contacttext" htmlFor="name">
//     what do you call yourself?
//   </Form.Label>
//   <Row>
//     <Col>
//       <Form.Control
//         placeholder="name"
//         id="name"
//         type="text"
//         required
//       />
//     </Col>
//     <Col></Col>
//   </Row>
// </Form.Group>
// {/* Email input box */}
// <Form.Group controlId="formGroupEmail">
//   <Form.Label className="contacttext" htmlFor="email">
//     how can i reach you?
//   </Form.Label>
//   <Row>
//     <Col>
//       <Form.Control
//         type="email"
//         placeholder="email"
//         id="email"
//         required
//       />
//     </Col>
//     <Col></Col>
//   </Row>
// </Form.Group>
// {/* Text area input box */}
// <Form.Group controlId="exampleForm.ControlTextarea1">
//   <Form.Label className="contacttext" htmlFor="message">
//     what would you like to say?
//   </Form.Label>
//   <Form.Control
//     as="textarea"
//     rows={3}
//     id="message"
//     required
//   />
// </Form.Group>
// <Button variant="primary" type="submit">
//   {status}
// </Button>
// </Form>
//   );
// };

// export default ContactForm;