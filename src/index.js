import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


function Hi() {
    return <div>
        <div className="myClass">My Name Is Mobeen</div>
        <h1> Country Name</h1>
        <div className="myList">
            <ul>
                <li>Pkaistan</li>
                <li>Turkey</li>
                <li>England</li>
                <li>Japan</li>
                <li>Canada</li>
            </ul>
        </div>
        <div className="add">
            {2+3}
            
        </div>

 </div>
}


ReactDOM.render(<Hi /> , document.querySelector('#root'));

