import React from 'react'
import {create} from 'react-test-renderer'

import Captcha from './Captcha'

describe("[RENDER] Captcha - Snapshot test", () => {
    test("Matches the snapshot", ()=> {
        const captcha = create(<Captcha/>)
        expect(captcha.toJSON()).toMatchSnapshot()
    })
})

