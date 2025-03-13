"use client";

import React, { useState } from "react";
import { Col, Form, Input, Row, Notification, toaster } from "rsuite";
import "react-phone-number-input/style.css";
import { TextAnimate } from "../../../src/components/magicui/text-animate";

// Create a PhoneInput component that properly handles client-side rendering
const ClientPhoneInput = ({ value, onChange, ...props }) => {
  const [PhoneInput, setPhoneInput] = useState(null);

  React.useEffect(() => {
    // Import PhoneInput only on the client side
    import("react-phone-number-input").then((module) => {
      setPhoneInput(() => module.default);
    });
  }, []);

  if (!PhoneInput) {
    // Return a placeholder during SSR and initial client render
    return (
      <input
        type="tel"
        placeholder="Enter phone number"
        className="border rounded-lg w-full px-3 py-2"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    );
  }

  return (
    <PhoneInput
      value={value}
      onChange={onChange}
      defaultCountry="IN"
      className="border rounded-lg w-full px-3"
      {...props}
    />
  );
};

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (value, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors({
        ...errors,
        [fieldName]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.mail.trim()) {
      newErrors.mail = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.mail)) {
      newErrors.mail = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success notification
      toaster.push(
        <Notification type="success" header="Success" closable>
          Your message has been sent successfully. We'll get back to you soon!
        </Notification>
      );

      // Set submitted state to show thank you message
      setSubmitted(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toaster.push(
        <Notification type="error" header="Error" closable>
          Failed to send message. Please try again later.
        </Notification>
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-16 lg:px-44 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <Row className="py-8 items-stretch">
          <Col xs={24} md={24} lg={12} className="mb-8 lg:mb-0">
            <div className="p-8 bg-white rounded-2xl shadow-xl h-full">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact our team</h2>
              <p className="text-xl text-gray-600 mb-8">
                Got a project in mind or just curious about our services? Reach out — we're here to help!
              </p>

              <div className="flex flex-col gap-5 mt-8">
                <div className="flex gap-4 items-center group transition-all duration-300 hover:translate-x-2">
                  <span className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-800">
                    <TextAnimate animation="blurInUp" by="character" once>
                      Email us for quick queries
                    </TextAnimate>
                  </span>
                </div>

                <div className="flex gap-4 items-center group transition-all duration-300 hover:translate-x-2">
                  <span className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                      <path d="M12 16v.01" />
                      <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-800">
                    <TextAnimate animation="blurInUp" by="character" once>
                      Ask about custom design solution
                    </TextAnimate>
                  </span>
                </div>

                <div className="flex gap-4 items-center group transition-all duration-300 hover:translate-x-2">
                  <span className="p-3 bg-purple-100 rounded-full text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 10h10" />
                      <path d="M9 14h5" />
                      <path d="M12.4 3a5.34 5.34 0 0 1 4.906 3.239a5.333 5.333 0 0 1 -1.195 10.6a4.26 4.26 0 0 1 -5.28 1.863l-3.831 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.33 5.33 0 0 1 4.287 -2.16" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-800">
                    <TextAnimate animation="blurInUp" by="character" once>
                      Request a logo design consultation
                    </TextAnimate>
                  </span>
                </div>

                <div className="flex gap-4 items-center group transition-all duration-300 hover:translate-x-2">
                  <span className="p-3 bg-green-100 rounded-full text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                      <path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M15 8l2 0" />
                      <path d="M15 12l2 0" />
                      <path d="M7 16l10 0" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-800">
                    <TextAnimate animation="blurInUp" by="character" once>
                      Ask about social media post designs
                    </TextAnimate>
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={24} lg={12}>
            <div className="p-8 bg-white rounded-2xl shadow-xl h-full">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
                  <Form fluid>
                    <Row className="mb-4">
                      <Col xs={24} md={12} className="pr-md-2 mb-4 md:mb-0">
                        <Form.Group>
                          <Form.ControlLabel>First Name *</Form.ControlLabel>
                          <Form.Control
                            name="firstName"
                            value={formData.firstName}
                            onChange={(value) => handleChange(value, "firstName")}
                            placeholder="First Name"
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <div className="text-red-500 mt-1 text-sm">{errors.firstName}</div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col xs={24} md={12} className="pl-md-2">
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

                    <Row className="mb-4">
                      <Col xs={24}>
                        <Form.Group>
                          <Form.ControlLabel>Email *</Form.ControlLabel>
                          <Form.Control
                            name="mail"
                            value={formData.mail}
                            onChange={(value) => handleChange(value, "mail")}
                            type="email"
                            placeholder="example@gmail.com"
                            className={errors.mail ? "border-red-500" : ""}
                          />
                          {errors.mail && <div className="text-red-500 mt-1 text-sm">{errors.mail}</div>}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col xs={24}>
                        <Form.Group>
                          <Form.ControlLabel>Phone Number</Form.ControlLabel>
                          <ClientPhoneInput
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={(value) => handleChange(value, "phone")}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-6">
                      <Col xs={24}>
                        <Form.Group controlId="textarea-1">
                          <Form.ControlLabel>Message *</Form.ControlLabel>
                          <Form.Control
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={(value) => handleChange(value, "message")}
                            accepter={Textarea}
                            placeholder="Write your message here..."
                            className={errors.message ? "border-red-500" : ""}
                          />
                          {errors.message && <div className="text-red-500 mt-1 text-sm">{errors.message}</div>}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={24}>
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={loading}
                          className={`group relative w-full flex items-center justify-center ${
                            loading ? "bg-blue-400" : "bg-blue-600"
                          } text-white text-lg px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg active:scale-98 disabled:opacity-70`}
                        >
                          {loading ? (
                            <>
                              <span className="mr-2">Sending</span>
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="p-4 bg-green-100 rounded-full mb-4">
                    <svg
                      className="h-16 w-16 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;