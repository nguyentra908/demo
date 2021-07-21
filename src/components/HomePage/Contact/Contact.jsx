import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./Contact.css";
import swal from 'sweetalert';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [showErrorName, setShowErrorName] = useState(false);
  const [showErrorContent, setShowErrorContent] = useState(false);
  const onSubmitClicked = (e) => {
    let message = "Send Successful!";
    if (!name || !email || !phone || !subject || !content) {
      message = 'Please fill out all require infomation!'
    }
    swal(message);
    e.preventDefault();
  }

  const onNameChanged = (e) => {
    setName(e.target.value)
  }

  const onEmailChanged = (e) => {
    setEmail(e.target.value)
  }
  const onPhoneChanged = (e) => {
    console.log("change");

    setPhone(e.target.value)
  }
  const onSubjectChanged = (e) => {
    setSubject(e.target.value)
  }
  const onContentChanged = (e) => {
    setContent(e.target.value)
  }
  const onBlurName = (e) => {
    if (!name) {
      setShowErrorName(true)
    }
  }
  const onFocusName = () => {
    setShowErrorName(false)
  }
  const onBlurContent = (e) => {
    if (!content) {
      setShowErrorContent(true)
    }
  }
  const onFocusContent = () => {
    setShowErrorContent(false)
  }


  return (
    <div className="contact">
      <div className="container">
        <div className="row ">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0604534553577!2d106.7795138142877!3d10.883006660194505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d885564f40f1%3A0x69ba5a55a3ec0e6f!2sHCMC%20National%20University%20Dormitory%20Zone%20B!5e0!3m2!1sen!2s!4v1607420621230!5m2!1sen!2s" ></iframe>
        </div>
        <div className="contact_contain">
          <div className="contact_title">Contact</div>

          <div className="row align-items-center">
            <div className="col-12">
              <FormGroup>
                <Input type="text" name="name" id="name" placeholder="Name" value={name}
                  onChange={onNameChanged} onBlur={onBlurName} onFocus={onFocusName} />
                {
                  showErrorName && <span className="text-danger">Required</span>
                }
              </FormGroup>

            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              <FormGroup>
                <Input type="email" placeholder="Email" value={email} onChange={onEmailChanged} />
              </FormGroup>
            </div>
            <div className="col-6 ">
              <FormGroup>
                <Input placeholder="Phone" value={phone} type="number" onChange={onPhoneChanged} />
              </FormGroup>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
              <FormGroup>
                <Input placeholder="Subject" value={subject} onChange={onSubjectChanged} />
              </FormGroup>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-12">
              <FormGroup>

                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Content ..."
                  value={content}
                  onChange={onContentChanged}
                  onFocus={onFocusContent}
                  onBlur={onBlurContent}
                />
                {
                  showErrorContent && <span className="text-danger">Required</span>
                }
              </FormGroup>

            </div>
          </div>
          <div className="buton_send" onClick={onSubmitClicked}>Send</div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
