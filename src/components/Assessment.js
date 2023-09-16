import React from 'react';
import "./Assessment.css";

const Assessment = () => {
  return (
    <div className="assessment">
      <img className="assessment-child" alt="" src="/rectangle-391.svg" />
      <img className="j-and-j-1-icon1" alt="" src="/jandj-1@2x.png" />
      <img className="untitled-1-2-icon1" alt="" src="/untitled1-2@2x.png" />
      <div className="questions-related-to">{`Questions related to Perception of AI & ML:`}</div>
      <div className="which-job-function-do-you-beli-parent">
        <div className="which-job-function-container">
          <p className="which-job-function">{`1. Which job function do you believe can benefit from incorporating `}</p>
          <p className="which-job-function">
            AI and Machine Learning technologies? (Check all that Apply)
          </p>
        </div>
        <div className="data-analysis-process-container">
          <p className="which-job-function">Data Analysis</p>
          <p className="which-job-function">Process Automation</p>
          <p className="which-job-function">Decision Making</p>
          <p className="which-job-function">
            Forecasting and Predictive Analysis
          </p>
          <p className="which-job-function">{`Other (please specify) `}</p>
          <p className="which-job-function">Not sure</p>
        </div>
        <input className="ellipse-input" type="radio" />
        <input className="frame-child2" type="radio" />
        <input className="frame-child3" type="radio" />
        <input className="frame-child4" type="radio" />
        <input className="frame-child5" type="radio" />
        <input className="frame-child6" type="radio" />
        <img className="frame-child7" alt="" src="/vector-271.svg" />
      </div>
      <div className="how-comfortable-are-container">
        <p className="how-comfortable-are-you-with-t"></p>
          <p className="how-comfortable-are">{`3. How comfortable are you with the idea of incorporating AI and `}</p>
        
        <p className="which-job-function">
          Machine Learning technologies into your everyday work?
        </p>
      </div>
      <div className="very-comfortable-i-container">
        <p className="which-job-function">
          Very comfortable, I see it as an opportunity for growth
        </p>
        <p className="which-job-function">
          Somewhat comfortable, but I have concerns or reservations
        </p>
        <p className="which-job-function">
          Not comfortable at all, I prefer traditional methods
        </p>
        <p className="which-job-function">
          Unsure, I need more information and training
        </p>
      </div>
      <input className="assessment-item" type="radio" />
      <input className="assessment-inner" type="radio" />
      <input className="assessment-child1" type="radio" />
      <input className="assessment-child2" type="radio" />
      <div className="in-your-opinion-which-specifi-parent">
        <div className="which-job-function-container">
          <p className="which-job-function">
            2. In your opinion, which specific tasks in your job could be
            improved
          </p>
          <p className="which-job-function">
            by AI and Machine Learning? (Check all that Apply)
          </p>
        </div>
        <div className="data-analysis-process-container">
          <p className="which-job-function">Data collection and analysis</p>
          <p className="which-job-function">
            Report generation and data visualization
          </p>
          <p className="which-job-function">Customer interaction and support</p>
          <p className="which-job-function">
            Workflow optimization and task prioritization
          </p>
          <p className="which-job-function">Other (please specify)</p>
          <p className="which-job-function">Not sure</p>
        </div>
        <input className="ellipse-input" type="radio" />
        <input className="frame-child2" type="radio" />
        <input className="frame-child3" type="radio" />
        <input className="frame-child4" type="radio" />
        <input className="frame-child5" type="radio" />
        <input className="frame-child6" type="radio" />
        <img className="frame-child7" alt="" src="/vector-271.svg" />
      </div>
      <div className="rectangle-parent">
        <button className="frame-child15" />
        <div className="submit">SUBMIT</div>
      </div>
    </div>
  );
};

export default Assessment;
