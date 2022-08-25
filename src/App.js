import Navbar from "./component/navbar";
import LandPage from './pages/landpage';

import React, { useEffect } from "react";

function App() {
  // const dispath = useDispatch();

  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // console.log(isLoggedIn);
  // useEffect(() => {
  //   if (localStorage.getItem("userId")) {
  //     dispath(authActions.login());
  //   }
  // }, [dispath]);
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <LandPage/>
      </main>
    </React.Fragment>
  );
}

export default App;
