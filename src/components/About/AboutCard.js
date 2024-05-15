import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vamsi Saketh </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I'm a full-stack developer passionate about building modern and interactive web applications. I utilize a versatile skillset that includes front-end frameworks like <b className="purple"> React and Tailwind CSS </b>to craft user-friendly interfaces, alongside back-end technologies like Node.js, and databases like<b className="purple"> PostgreSQL, MongoDB and SQL</b> (with Prisma for smooth data access).  
            <br />
            <br />
             Beyond coding, I'm fascinated by the potential of <b className="purple"> Machine Learning </b> and constantly learning new things in this field. 
             <br />
             <br />
           In my free time, I turn my analytical eye to the financial markets, constantly learning and refining my trading strategies.
           <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
