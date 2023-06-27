import React from "react";

const LandingPage4 = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          //   height: 350,
          width: "80%",
          display: "flex",
          //   backgroundColor: "yellow",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 0.31 }}>
          <p
            style={{
              color: "008DA6",
              letterSpacing: 1,
              textAlign: "start",
              fontWeight: 1200,
              paddingTop: 50,
              fontSize: 16,
              color:'blue'
            }}
          >
            EVENTS
          </p>
          <p
            style={{
              textAlign: "start",
              paddingTop: 20,
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            Hear from today’s fearless builders and innovators
          </p>
          <p style={{ textAlign: "start", paddingTop: 20, color: "blue" }}>
            Learn more
          </p>
        </div>
        <div
          style={{
            flex: 0.31,
            // backgroundColor: "orange",
            height: 350,
            width: 350,
          }}
        >
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:bca5f1fd-1b12-405b-8653-15749924ea13/ITSM%20High%20Velocity%2023.png?cdnVersion=1074"
            style={{ height: 350, width: 350, objectFit: "cover" }}
          ></img>
        </div>
        <div
          style={{
            flex: 0.31,
            // backgroundColor: "orange",
            height: 350,
            width: 350,
          }}
        >
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:d65f8071-632d-46d3-9a6f-7cdc275a6cb5/Team23_Event2x.png?cdnVersion=1074"
            style={{ height: 350, width: 350, objectFit: "cover" }}
          ></img>
        </div>
      </div>
      <div
        style={{
          height: 450,
          width: "100%",
          backgroundColor: "white",
          marginTop: 50,
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            // flex: 0.5,
            // backgroundColor: "red",
            height: 450,
            width: 570,
            // position: "relative",
            left: -100,
          }}
        >
          <img
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:50b6fe06-dbe3-4c29-8a3a-92e5a9c59a67/careers%20image%20footer_left_540x450@2x.png?cdnVersion=651"
            style={{ height: 450, width: 570, objectFit: "cover" }}
          ></img>
        </div>
        <div
          style={{
            position: "absolute",
            // overflow: "auto",
            right: 0,
            left: 0,
            marginTop: 100,
            zIndex: 99,
            // top: 0,
            // bottom: 0,
            // whiteSpace: "nowrap",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              color: "teal",
              fontWeight: 900,
              fontSize: 16,
            }}
          >
            careers
          </p>
          <p
            style={{
              fontSize: 44,
              color: "#253858",
              paddingTop: 20,
              fontWeight: 700,
            }}
          >
            We can’t do it alone
          </p>
          <p
            style={{
              fontSize: 20,
              color: "#42526E",
              paddingTop: 20,
              width: "29%",
              margin: "auto",
              fontWeight: 500,
            }}
          >
            We have an ambitious road ahead, and we’re looking for people to
            join our global team to help shape the future of Atlassian.
          </p>
          <button
            style={{
              width: 138,
              height: 40,
              fontSize: 16,
              backgroundColor: "#0052CC",
              color: "white",
              borderRadius: 5,
              border: 0,
              marginTop: 20,
            }}
          >
            Join the team
          </button>
        </div>
        <div
          style={{
            flex: 0.5,
            // backgroundColor: "red",
            // overflow: "hidden",
            height: 450,
            width: 570,
            // position: "relative",
            right: -100,
          }}
        >
          <img
            src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:50b6fe06-dbe3-4c29-8a3a-92e5a9c59a67/careers%20image%20footer_left_540x450@2x.png?cdnVersion=651"
            style={{ height: 450, width: 570, objectFit: "cover" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;
