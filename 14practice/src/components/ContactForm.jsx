import React, { useState } from "react";
import Btn from "./Btn";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ContactHeader from './ContactHeader';

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mssg, setMssg] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
    
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setMssg(event.target[2].value);

        console.log(event.target);
      };

  return (
    <>
    <ContactHeader />
    <section className="flex pt-10">
      <div className="flex-1"> 
        <form onSubmit={onSubmit}>
        <div className="flex space-x-5">
          <Btn title="Via Chat" icon={<MdMessage fontSize="26px" />} />
          <Btn title="via call" icon={<FaPhoneAlt fontSize="20px" />} />
        </div>
          <div className="pt-5">
            <label htmlFor="name" className="font-bold text-lg italic">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              className="outline outline-1 w-2/5 p-1"
            />
          </div>
          <div className="pt-5">
            <label htmlFor="email" className="font-bold text-lg italic">
              E-Mail
            </label>
            <br />
            <input
              type="email"
              name="email"
              className="outline outline-1 w-2/5 p-1"
            />
          </div>
          <div className="pt-5">
            <label htmlFor="text" className="font-bold text-lg italic">
              Text
            </label>
            <br />
            <textarea
              name="text"
              rows="3"
              cols="25"
              className="outline outline-1 w-2/5 p-1"
            ></textarea>
          </div>
          <div className="pt-2">
            <Btn title="SUBMIT" />
          </div>
        </form>
      </div>
        <div className="flex-1">
            <img src="images/contact.svg" alt="contact" width="450px" />
        </div>
    </section>
    </>
  );
};

export default ContactForm;
