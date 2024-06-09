import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../Component/Pageheader';
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = 'RXgdJNOfdM1bBFLHN'; // Replace with your actual user ID

    emailjs.send("service_ihllboc","template_pqcjnpk", formData, userId)
      .then((result) => {
        console.log(result.text);
        setSubmissionStatus('success'); // Update submission status to 'success'
      }, (error) => {
        console.error(error.text);
        setSubmissionStatus('error'); // Update submission status to 'error' if there's an error
      });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={handleSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type="text"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Animate>
        {submissionStatus === 'success' && (
          <div className="submission-success-message">
            Email sent successfully!
          </div>
        )}
        {submissionStatus === 'error' && (
          <div className="submission-error-message">
            Failed to send email. Please try again later.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
