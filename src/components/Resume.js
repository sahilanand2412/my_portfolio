import React, { useState } from 'react';
import { FaPhoneSquare } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import resume from "../assets/resume.pdf";
import about1 from "../assets/about1.avif";
import additionalImage1 from "../assets/about3.jpeg";
import additionalImage2 from "../assets/about2.webp";

const Resume = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'shristipriya1207@gmail.com';
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="content content-box">
      <div className="desc">
        <div className="image-container border-animation">
          <img src={about1} alt="About Me" className="about-image" />
          <div className="image-overlay">
            <h2>Innovative approaches drive my design and development methodologies every day.</h2>
          </div>
        </div>

        <p>
          I am a skilled web developer, full-stack developer, and UI/UX designer adept at innovative problem-solving and strategic optimization. Experienced in leading teams and adapting to diverse challenges, I thrive on collaborating to deliver impactful solutions.
        </p>

        <div className="info-list">
          <ul>
            <li><strong><FaPhoneSquare className="icon" /></strong> 6200685948</li>
            <li><strong><MdOutlineEmail className="icon" /></strong> shristipriya1207@gmail.com</li>
          </ul>
        </div>

        <div className="bts">
          <br />
          <a
            href={resume}
            download
            className="btn hover-animated"
            style={{ color: 'black' }}
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="lnk">Download CV</span>
          </a>

          <button
            className="btn hover-animated"
            onClick={copyEmailToClipboard}
            style={{ color: 'black' }}
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="lnk">Copy Email</span>
          </button>

          {isCopied && <span className="copied-msg">Copied!</span>}
        </div>
      </div>

      <div className="additional-images">
        <div className="additional-image-container border-animation">
          <div className="image-overlay">
            <h3>"I have analyzed data to optimize performance and ensure efficiency.</h3>
          </div>
          <img src={additionalImage1} alt="Additional Image 1" className="additional-image" />
        </div>
        <div className="additional-image-container border-animation">
          <div className="image-overlay">
            <h3>On-time availability ensures consistent progress and timely project completion.</h3>
          </div>
          <img src={additionalImage2} alt="Additional Image 2" className="additional-image" />
        </div>
      </div>

      <div className="clear"></div>
    </div>
  );
};

export default Resume;
