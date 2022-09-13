	import styled from 'styled-components';
    import React from "react";
    import { useNavigate } from "react-router-dom";
    import Header from "./component/Header"
    import Footer from "./component/Footer"

function Home() {
    const navigate = useNavigate()
  return (
    <Header />,
    <div>
        test 
    </div>,
    <Footer />

  );
}

export default Home;
