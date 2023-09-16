import React from 'react'
import "./Assessment1.css";
import { Link } from 'react-router-dom';

const Assessment1 = () => {
  return (
    <div className="assessment1">
      <img className="assessment-child3" alt="" src="/rectangle-3911.svg" />
      <img className="j-and-j-1-icon1" alt="" src="/jandj-1@2x.png" />
      <img className="untitled-1-2-icon2" alt="" src="/untitled1-2@2x.png" />
      <div className="assessment-questions">Assessment Questions</div>
      <div className="critical-thinking">
        <ul className="use-cases-for-how-machine-lear">1. Critical Thinking</ul>
      </div>
      <div className="use-cases-for-container">
        <ul className="use-cases-for-how-machine-lear">
          {/* <li className="use-cases-for">{`Use cases for how Machine Learning can solve business `}</li> */}
          3. Use cases for how Machine Learning can solve business
        </ul>
        <p className="challenges-or-create">
          {" "}
          challenges or create efficiencies
        </p>
      </div>
      <div className="machine-learning-using-container">
        <ul className="use-cases-for-how-machine-lear">
          2. Machine Learning using reinforcement models
        </ul>
      </div>
      <div className="code-development-in-container">
        <ul className="use-cases-for-how-machine-lear">
          4. Code development in any programming language
        </ul>
      </div>
      <div className="python-programming-language-container">
        <ul className="use-cases-for-how-machine-lear">
          5. Python programming language
        </ul>
      </div>
      <div className="in-effort-to">{`In effort to help measure the success of the J&J AWS DeepRacer event, we are requesting you to complete a brief survey. This will take about 5 minutes.`}</div>
      <div className="please-provide-a">
        Please provide a self-assessment on a Scale of 1 to 5 based on
        definitions above for the following skills:
      </div>
      <div className="definition-critical-thinking-container">
        <span className="definition">Definition:</span>
        <span>
          {" "}
          Critical thinking is the ability to analyze and evaluate information
          objectively, through logical reasoning and evidence-based thinking. It
          involves questioning assumptions, exploring alternatives, and making
          informed judgments. It is a process that allows individuals to think
          independently, identify biases and fallacies, and draw well-informed
          conclusions.
        </span>
      </div>
      <div className="definition-machine-learning-container">
        <span className="definition">Definition:</span>
        <span>
          {" "}
          Machine learning can be applied to supply chain in demand forecasting.
          Machine learning algorithms can analyze historical sales data, market
          trends, customer behavior, and other relevant factors to predict
          future demand for products or services. By accurately forecasting
          demand, businesses can optimize their inventory management, production
          planning, and logistics operations.
        </span>
      </div>
      <div className="definition-critical-thinking-container1">
        <span className="definition">Definition:</span>
        <span>
          {" "}
          Critical thinking is the ability to analyze and evaluate information
          objectively, through logical reasoning and evidence-based thinking. It
          involves questioning assumptions, exploring alternatives, and making
          informed judgments. It is a process that allows individuals to think
          independently, identify biases and fallacies, and draw well-informed
          conclusions.
        </span>
      </div>
      <div className="definition-application-develo-container">
        <span className="definition">Definition:</span>
        <span>
          {" "}
          Application development using programming languages such as, but not
          limited to (ABAP, Java, JavaScript, Python)
        </span>
      </div>
      <div className="definition-python-is-container">
        <span className="definition">Definition:</span>
        <span>
          {" "}
          Python is a high-level, general-purpose programming language known for
          its simplicity and readability.
        </span>
      </div>
      <img className="assessment-child4" alt="" src="/vector-266.svg" />
      <img className="assessment-child5" alt="" src="/vector-266.svg" />
      <img className="assessment-child6" alt="" src="/vector-266.svg" />
      <img className="assessment-child7" alt="" src="/vector-266.svg" />
      <img className="assessment-child8" alt="" src="/vector-266.svg" />
      <select className="scale-parent" required={true}>
      <option value="1">Scale</option>
        <option value="2">Scale 1</option>
        <option value="3">Scale 2</option>
        <option value="4">Scale 3</option>
        <option value="5">Scale 4</option>
        <option value="6">Scale 5</option>
      </select>
      <select className="scale-group" required={true}>
      <option value="1">Scale</option>
        <option value="2">Scale 1</option>
        <option value="3">Scale 2</option>
        <option value="4">Scale 3</option>
        <option value="5">Scale 4</option>
        <option value="6">Scale 5</option>
      </select>
      <select className="scale-container" required={true}>
      <option value="1">Scale</option>
        <option value="2">Scale 1</option>
        <option value="3">Scale 2</option>
        <option value="4">Scale 3</option>
        <option value="5">Scale 4</option>
        <option value="6">Scale 5</option>
      </select>
      <select className="scale-parent1" required={true}>
      <option value="1">Scale</option>
        <option value="2">Scale 1</option>
        <option value="3">Scale 2</option>
        <option value="4">Scale 3</option>
        <option value="5">Scale 4</option>
        <option value="6">Scale 5</option>
      </select>
      <select className="scale-parent2" required={true}>
      <option value="1">Scale</option>
        <option value="2">Scale 1</option>
        <option value="3">Scale 2</option>
        <option value="4">Scale 3</option>
        <option value="5">Scale 4</option>
        <option value="6">Scale 5</option>
      </select>
      <Link to="/assessment" className="start"> 
        <img className="start-icon" alt="" src="/start.svg" />
        </Link>
    </div>
  );
};

export default Assessment1;
