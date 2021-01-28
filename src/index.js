import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// ///////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////

// function Hi() {
//     return <div>
//         <div className="myClass">My Name Is Mobeen</div>
//         <h1> Country Name</h1>
//         <div className="myList">
//             <ul>
//                 <li>Pkaistan</li>
//                 <li>Turkey</li>
//                 <li>England</li>
//                 <li>Japan</li>
//                 <li>Canada</li>
//             </ul>
//         </div>
//         <div className="add">
//             {2+3}

//         </div>

//  </div>
// }


// ReactDOM.render(<Hi /> , document.querySelector('#root'));

function MediaCard({ profilePic, title, time, body, imgUrl }) {
    return <div>
        <div className="fb-card">
            <div className="header">
                <div className="options"><i className="fa fa-chevorn-downs"></i></div>
                <img className="fb-logo" src={profilePic} alt="im"/>
                <div className="title">{title}</div>
                <div className="time">{time}</div>
                <div className="conteent">
                    <p>{body}<a href="https://my-chat1.herokuapp.com/">this is my first chat app pls comment !</a> See More</p>
                </div>
                <div className="reference">
                    <img className="reference-thumb" src={imgUrl} alt="img"/>
                </div>
            </div>
        </div>
        </div>
}

ReactDOM.render(
  <>
    <MediaCard profilePic="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"
      title="Mohammad Mobeen" time={new Date().toLocaleTimeString()} body="i am learning web-development , like HTML, CSS, JAVASCRIPT, SERVER, NODE-JS, REACT etc:"
      imgUrl="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-tips.png"/>
    <MediaCard profilePic="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/change_your_Gmail_profile_pict_1200x768.jpeg?mlP00zsZnci7V0HqgUZkTANz2ThFVWHp&size=770:433"
    
      title="Mohammad Mobeen" time={new Date().toLocaleTimeString()} body="i am learning web-development , like HTML, CSS, JAVASCRIPT, SERVER, NODE-JS, REACT etc :"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGXkn6Eo8eeiFv7O-1QEaenXwr_EcqmxtnQ&usqp=CAU" />
    <MediaCard profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgiIy-RFwO9l_2iYU58E_1DCsqP0l7Ehpcg&usqp=CAU"
      title="Mohammad Mobeen" time={new Date().toLocaleTimeString()} body="i am learning web-development , like HTML, CSS, JAVASCRIPT, SERVER, NODE-JS, REACT etc:"
      imgUrl="https://www.technologyrecord.com/Portals/0/EasyDNNnews/8283/img-Profile-Software_940x443.jpg" />
  </>,
  document.getElementById('root')
);
