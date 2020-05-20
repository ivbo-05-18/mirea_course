import React from 'react';
import ReCaptcha from 'react-google-recaptcha';
import './Captcha.css';

// const Captcha = () => {
//     return (
//         <div className="perederiy_va_captcha">
//             <ReCaptcha
//                 sitekey="6LdRIfQUAAAAAE-IILR878RvfBGsxTbWJCsUpQfA"
//                 onChange={console.log("captcha has changed")}
//             />
//         </div>

//     )
// }

const Captcha = () => (
  <div className="perederiy_va_captcha">
    <ReCaptcha
      sitekey="6LdRIfQUAAAAAE-IILR878RvfBGsxTbWJCsUpQfA"
    />
  </div>
);

export default Captcha;
