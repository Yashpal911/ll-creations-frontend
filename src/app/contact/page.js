"use client";

import React, { useState } from "react";
import { Col, Form, Input, Row } from "rsuite";
import dynamic from "next/dynamic";
import "react-phone-number-input/style.css"; // Ensure styles are imported
import { TextAnimate } from "../../../src/components/magicui/text-animate"

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
    const handleChange = (value, fieldName) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value
        }));
    };



    return (
        <div className="py-5 px-44">
            <Row className="my-5">
                <Col lg={12}>
                    <div className="pe-20">
                        <h2>Contact our team</h2>
                        <p className="text-xl">Got a project in mind or just curious about our services? Reach out — we’re here to help!</p>
                        <div className="flex flex-col gap-3 mt-16">
                            <div className="flex gap-2 items-center">
                                <span className="contactliIcon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg></span>
                                <span className="font-bold text-lg">
                                    <TextAnimate animation="blurInUp" by="character" once>
                                        Email us for quick queries
                                    </TextAnimate>
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="contactliIcon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-help-hexagon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" /><path d="M12 16v.01" /><path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg></span>
                                <span className="font-bold text-lg">
                                    <TextAnimate animation="blurInUp" by="character" once>
                                        Ask about custom design solution
                                    </TextAnimate>
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="contactliIcon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bubble-text"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10h10" /><path d="M9 14h5" /><path d="M12.4 3a5.34 5.34 0 0 1 4.906 3.239a5.333 5.333 0 0 1 -1.195 10.6a4.26 4.26 0 0 1 -5.28 1.863l-3.831 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.33 5.33 0 0 1 4.287 -2.16" /></svg></span>
                                <span className="font-bold text-lg">
                                    <TextAnimate animation="blurInUp" by="character" once>
                                        Request a logo design consultation
                                    </TextAnimate>
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="contactliIcon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 8l2 0" /><path d="M15 12l2 0" /><path d="M7 16l10 0" /></svg></span>
                                <span className="font-bold text-lg">
                                    <TextAnimate animation="blurInUp" by="character" once>
                                        Ask about social media post designs and promotions
                                    </TextAnimate>
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={12}>
                    <Form fluid>
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
                                        className="border rounded-lg w-full px-3 "
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
                                    type="button"
                                    className="group relative w-full flex items-center justify-center bg-blue-600 text-white text-lg px-6 py-3 rounded-2xl overflow-hidden transition-all duration-200 ease-in-out hover:shadow-lg active:scale-95"
                                >
                                    Send
                                </button>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;