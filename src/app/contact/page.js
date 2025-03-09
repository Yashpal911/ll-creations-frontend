"use client";

import React, { useState } from "react";
import { Col, Form, Grid, Input, Row } from "rsuite";
import dynamic from "next/dynamic";
import "react-phone-number-input/style.css"; // Ensure styles are imported

// Dynamically import PhoneInput to prevent SSR issues
const PhoneInput = dynamic(() => import("react-phone-number-input"), { ssr: false });

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
        message: "",
    });

    const handleChange = (value, name) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value || "", // Ensure controlled component
        }));
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault(); // Prevent default form submission
        }
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="py-5">
            <div className="text-center">
                <h2>Contact our team</h2>
                <p className="text-lg">Got any questions? We're here to help.</p>
            </div>
            <Grid>
                <Row className="my-5">
                    <Col lg={12}>
                        <Form fluid onSubmit={handleSubmit}>
                            <Row className="my-5">
                                <Col lg={12}>
                                    <Form.Group>
                                        <Form.ControlLabel>First Name</Form.ControlLabel>
                                        <Form.Control
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={(value) => handleChange(value, "firstName")}
                                            placeholder="First Name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group>
                                        <Form.ControlLabel>Last Name</Form.ControlLabel>
                                        <Form.Control
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={(value) => handleChange(value, "lastName")}
                                            placeholder="Last Name"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col lg={24}>
                                    <Form.Group>
                                        <Form.ControlLabel>Email</Form.ControlLabel>
                                        <Form.Control
                                            name="mail"
                                            value={formData.mail}
                                            onChange={(value) => handleChange(value, "mail")}
                                            type="email"
                                            placeholder="example@gmail.com"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col lg={24}>
                                    <Form.Group>
                                        <Form.ControlLabel>Phone Number</Form.ControlLabel>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={formData.phone}
                                            onChange={(value) => handleChange(value, "phone")}
                                            defaultCountry="IN"
                                            className="border rounded-lg w-full px-3 py-2"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col lg={24}>
                                    <Form.Group controlId="textarea-1">
                                        <Form.ControlLabel>Message</Form.ControlLabel>
                                        <Form.Control
                                            rows={5}
                                            name="message"
                                            value={formData.message}
                                            onChange={(value) => handleChange(value, "message")}
                                            accepter={Textarea}
                                            placeholder="Write your message here..."
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={24}>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex items-center justify-center bg-blue-600 text-white text-lg px-6 py-3 rounded-2xl overflow-hidden transition-all duration-200 ease-in-out hover:shadow-lg active:scale-95"
                                    >
                                        <div className="relative flex justify-center items-center w-6 h-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="transition-transform duration-300 ease-in-out group-hover:translate-x-5 group-hover:rotate-45 group-hover:scale-110"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 transition-transform duration-300 ease-in-out group-hover:translate-x-6 opacity-100 group-hover:opacity-0">
                                            Send
                                        </span>
                                    </button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Contact;
