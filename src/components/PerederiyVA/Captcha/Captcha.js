import React from 'react'
import ReCaptcha from 'react-google-recaptcha'
import './Captcha.css'

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

class Captcha extends React.Component {
    render = () => {
        return (
                    <div className="perederiy_va_captcha">
                        <ReCaptcha
                            sitekey="6LdRIfQUAAAAAE-IILR878RvfBGsxTbWJCsUpQfA"
                            onChange={console.log("captcha has changed")}
                        />
                    </div>
                    
                )
    }
}

export default Captcha