import React from "react";
import "./landingpage.css";
import botLeft from './bottomLeftImage.png'
import botRight from './bottomRightImage.png'
import topLeft from './topLeftImage.png'
import topRight from './topRightImage.png'
const LandingPage = () => {
  return (
    <div
      style={{
        height: 750,
        width: "100%",
        // backgroundColor: "pink",
      }}
      className="parent-container"
    >
      <div style={{ display: "flex", height: 500 }} className="landing-view1">

        
        <div
          style={{
            // backgroundColor: "red",
            background: 'linear-gradient(45deg, rgba(0,76,156,255), rgba(0,96,230,255))',
            height: 400,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // fontWeight: 700,
            fontSize: 60,
            paddingTop: 50,
          }}
        >
          
      {/* <img src={topLeft} class="topLeft" />
      <img src={topRight} class="topRight"  />
      <img src={botLeft} class="bottomLeft" />
      <img src={botRight} class="bottomRight" /> */}
      {/* Your other content goes here */}
      <p style={{ fontFamily: 'CharlieDisplay', color: 'white', fontSize: 48, marginRight: 100 }}>Impossible Alone</p>

          <b><p style={{  fontFamily: 'CharlieDisplay', color:"white",marginLeft: 48 }}>Possible Together</p></b>
          <p style={{ fontFamily: 'CharlieDisplay', color:"white",fontSize: 24,}}> See how collaboration makes the impossible, possible. </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              color: "white",
              fontSize: 16,
            }}
          >
            <img
              src="https://img.icons8.com/ultraviolet/512/play-button-circled.png"
              style={{ height: 20, width: 20, objectFit: "cover" }}
            ></img>
           Play video
          </p>

        </div>
        {/* <div
          style={{
            backgroundColor: "pink",
            flex: 0.6,
            height: 500,
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <img
            src=""
            style={{ height: 500, objectFit: "cover" }}
          ></img>
        </div> */}
      </div>
      <div
        style={{
          //   backgroundColor: "green",
          height: 200,
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: 70,
        }}
      >
        
        <p style={{ fontFamily: 'CharlieDisplay',fontSize: 30, fontWeight: 700 }}>
          Atlassian solutions are designed for all types of work
        </p>
        <div
          style={{
            height: 100,
            width: "75%",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
          }}
          className="btn-container"
        >
          <button style={{ fontFamily: 'CharlieDisplay'}} className="services-btn-on">Work Management</button>
          <button style={{ fontFamily: 'CharlieDisplay'}} className="services-btn">IT Service Management</button>
          <button style={{ fontFamily: 'CharlieDisplay'}} className="services-btn">Agile and DevOps</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
