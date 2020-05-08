import React from 'react';
//import Draw_Controller from './paint';

const STYLE = {
    height: '400px',
    width: '300px',
    margin: 0,
    padding: 0,
}

class Draw_Element extends React.Component {
    render() {
        return (
        <div>
        <div style={STYLE} id="paint"></div>
        <script type="text/javascript" src="./jscolor.js"></script>
        <script type="text/javascript" src="./jquery.js"></script>
        <script type="text/javascript" src="./paint.js?v=1"></script>
        </div>
        )
    }
}

export default Draw_Element;