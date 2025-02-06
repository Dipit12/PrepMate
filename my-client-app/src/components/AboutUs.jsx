import React, { useState, useEffect } from 'react';
import Desktop from '../assets/Desktop.png';
import OBJECTS from '../assets/OBJECTS.png';

const AboutUs = () => {
  const [aboutUsText, setAboutUsText] = useState("");
  const fullTextAboutUs = "ABOUT US";

  const [paragraphText, setParagraphText] = useState(""); // Now a single string
  const fullTextParagraph = `PrepMate, created by four VIT University CSE students, is a platform designed to help university students succeed. We offer quizzes based on uploaded materials and YouTube videos, along with concise video summaries, and more. Our team consists of two frontend developers, a backend developer, and a designer, all working together to make studying easier and more effective.`;

  const [paragraphAnimationStarted, setParagraphAnimationStarted] = useState(false);

  useEffect(() => {
    let aboutUsIndex = 0;
    const aboutUsInterval = setInterval(() => {
      if (aboutUsIndex <= fullTextAboutUs.length) {
        setAboutUsText(fullTextAboutUs.substring(0, aboutUsIndex));
        aboutUsIndex++;
      } else {
        clearInterval(aboutUsInterval);
        setTimeout(() => { // Start paragraph animation after ABOUT US is done
          setParagraphAnimationStarted(true);
          animateParagraph();
        }, 50); // 1-second delay before paragraph starts
      }
    }, 200); // 1-second delay for ABOUT US letters

    const animateParagraph = () => {
      let charIndex = 0;
      const paragraphInterval = setInterval(() => {
        if (charIndex <= fullTextParagraph.length) {
          setParagraphText(fullTextParagraph.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(paragraphInterval);
        }
      }, 5); // Adjust speed here

      return () => clearInterval(paragraphInterval);
    };

    return () => {
      clearInterval(aboutUsInterval);
      // Paragraph interval is cleared inside animateParagraph
    };
  }, []);


  return (
    <div
      className='flex'
      style={{
        height: '810px',
        width: '1400px',
        backgroundImage: `url(${Desktop})`
      }}
    >
      <div className='w-[900px] h-[600px] '>
        <div className='text-9xl font-poppins font-[900] text-fuchsia-100 opacity-40 mx-20 mt-40'>
          {aboutUsText}
        </div>
        <div className={`mx-20 my-20 text-2xl font-[500] opacity-70 transition-colors duration-500 text-white`}
          style={{ transition: 'color 0.5s ease' }}
        >
          {paragraphAnimationStarted && ( // Conditionally render the paragraph
            <p>
              {paragraphText}
            </p>
          )}
        </div>
      </div>

      <div>
        <img src={OBJECTS} className='w-[650px] h-[350px] my-50' alt="Objects" />
      </div>
    </div>
  );
};

export default AboutUs;