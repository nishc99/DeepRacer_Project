import React from 'react'
import "./Form.css";
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className="form">
      <img
        className="c6cba7ea1a17b4867cd47dcb85ea3e-icon"
        alt=""
        src="/c6cba7ea1a17b4867cd47dcb85ea3e87-2@2x.png"
      />
      <img className="form-child" alt="" src="/rectangle-39.svg" />
      <div className="first-name">First Name</div>
      <input
        className="enter-your-first"
        placeholder="Enter your first name"
        type="text"
      />
      <img className="form-item" alt="" src="/vector-253.svg" />
      <div className="last-name">Last Name</div>
      <input
        className="enter-your-last"
        placeholder="Enter your last name"
        type="text"
      />
      <img className="form-inner" alt="" src="/vector-253.svg" />
      <div className="jj-wwid-parent">
        <div className="jj-wwid">{`J&J WWID`}</div>
        <input
          className="enter-your-jj"
          placeholder={`Enter your J&J WWID`}
          type="text"
        />
        <img className="frame-child" alt="" src="/vector-253.svg" />
      </div>
      <div className="email">Email</div>
      <input
        className="enter-your-email"
        placeholder="Enter your email"
        type="email"
      />
      <img className="vector-icon" alt="" src="/vector-253.svg" />
      <div className="job-title-parent">
        <div className="jj-wwid">Job Title</div>
        <input
          className="enter-your-jj"
          placeholder="Enter your job title"
          type="text"
        />
        <img className="frame-child" alt="" src="/vector-253.svg" />
      </div>
      <div className="country-parent">
        <div className="jj-wwid">Country</div>
        <input
          className="enter-your-jj"
          placeholder="Enter your country"
          type="text"
        />
        <img className="frame-child" alt="" src="/vector-253.svg" />
      </div>
      <img className="form-child1" alt="" src="/vector-255.svg" />
      <img className="form-child2" alt="" src="/vector-255.svg" />
      <img className="form-child3" alt="" src="/vector-255.svg" />
      <img className="form-child4" alt="" src="/vector-255.svg" />
      <img className="form-child5" alt="" src="/vector-255.svg" />
      <img className="form-child6" alt="" src="/vector-255.svg" />
      <img className="form-child7" alt="" src="/vector-255.svg" />
      <img className="form-child8" alt="" src="/vector-255.svg" />
      <Link to="/assessment1"><button className="rectangle-button" /></Link>
      <div className="submit-next">{`SUBMIT & NEXT`}</div>
      <img className="get2-1-icon" alt="" src="/get2-1@2x.png" />
      <img className="untitled-1-2-icon1" alt="" src="/untitled1-2@2x.png" />
      <div className="region-parent">
        <div className="jj-wwid">Region</div>
        <input
          className="enter-your-jj"
          placeholder="Select your region"
          type=""
        />
        <img className="frame-child" alt="" src="/vector-253.svg" />
        <select className="frame-select" required={true}>
        <option value="1"></option>
      <option value="2">NA</option>
        <option value="3">EMEA</option>
        <option value="4">LATAM</option>
        <option value="5">ASPAC</option>
        
      </select>
      </div>
      <img className="form-child9" alt="" src="/vector-253.svg" />
      <div className="team">{`Team `}</div>
      <div className="select-your-team">{`Select your team or create new `}</div>
      <select className="group-select" required={true}>
      <option value="1"></option>
        <option value="2">Team 1</option>
        <option value="3">Team 2</option>
        <option value="4">Team 3</option>
        <option value="5">Team 4</option>
      </select>
      <div className="johnson-johnson">{`Johnson & Johnson and AWS Registration Form`}</div>
      <img
        className="px-johnson-and-johnson-logo-1-icon"
        alt=""
        src="/2560pxjohnson-and-johnson-logo-1@2x.png"
      />
    </div>
  );
};

export default Form;
