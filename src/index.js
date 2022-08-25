import React from "react";
import ReactDOM,{createRoot} from "react-dom";
import "./index.css";
import Router from './pages/Router';

const root = createRoot(document.getElementById('root'));
root.render(<Router/>
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   </BrowserRouter>
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
