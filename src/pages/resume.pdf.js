import React from 'react';
import ResumeFile from '../images/resume.pdf';

const Resume = () => (
  <div>
    <a href={ResumeFile} className="cta-btn cta-btn--primary">
      Click to View Resume PDF for Download
    </a>
  </div>
);

export default Resume;
