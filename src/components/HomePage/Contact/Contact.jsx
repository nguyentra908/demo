import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_title">Liên hệ</div>
        <div className="row align-items-center">
          <div className="col-12">
            <FormGroup>
              <Label>Họ và tên</Label>
              <Input type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="Email" />
            </FormGroup>
          </div>
          <div className="col-6 ">
            <FormGroup>
              <Label>Số điện thoại</Label>
              <Input placeholder="Phone" />
            </FormGroup>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12">
            <FormGroup>
              <Label>Chủ đề</Label>
              <Input placeholder="Subject" />
            </FormGroup>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12">
            <FormGroup>
              <Label>Nội dung</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="..."
              />
            </FormGroup>
          </div>
        </div>
        <div className="buton_send">Send Message</div>
      </div>
    </div>
  );
}

export default Contact;
