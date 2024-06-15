import React, { useState } from 'react';
import { FaPhoneSquare } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Resume = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    // Create a temporary textarea element to copy text to clipboard
    const textarea = document.createElement('textarea');
    textarea.value = 'shristipriya1207@gmail.com'; // Replace with your actual email address
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Show copied message for a few seconds
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <div className="content content-box">
      <div className="desc">
        <p>Hello! I'm Daniel Curry. Web designer from USA, California, San Francisco. I have rich experience in website design and building, also I am good at WordPress. I love to talk with you about our unique.</p>
        <div className="info-list">
          <ul>
            <li><strong><FaPhoneSquare className="icon" /></strong>  6200685948</li>
            <li><strong><MdOutlineEmail className="icon" /></strong>  shristipriya1207@gmail.com</li>
          </ul>
        </div>
        <div className="bts">
            <br></br>
          <a href="path/to/your/resume.pdf" download className="btn hover-animated">
            <span className="circle"></span>
            <span className="lnk">Download CV</span>
          </a>
          <button className="btn hover-animated" onClick={copyEmailToClipboard}>
            <span className="circle"></span>
            <span className="lnk">Copy Email</span>
          </button>
          {isCopied && <span className="copied-msg">Copied!</span>}
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Resume;
