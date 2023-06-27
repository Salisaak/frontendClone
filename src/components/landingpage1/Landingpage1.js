import React from "react";
import "./landingpage1.css";

const Landingpage1 = () => {
  return (
    <div
      style={{
        height: 700,
        width: "100%",
        // backgroundColor: "red",
        display: "flex",
        marginTop: 100,
      }}
    >
      <div
        style={{
          //backgroundColor: "green",
          flex: 0.4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            // backgroundColor: "pink",
            flex: 0.2,
            width: "70%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ fontFamily: 'CharlieDisplay', fontSize: 26, fontWeight: 500, textAlign: "start" }}>
            Make work flow across teams while connecting back to company goals
          </p>
          <p style={{ fontFamily: 'CharlieDisplay',textAlign: "start", color: "blue", paddingTop: 20 }}>
            Work differently, together
            <img
              src="https://img.icons8.com/material-two-tone/512/right.png"
              style={{
                height: 10,
                width: 10,
                objectFit: "cover",
              }}
            ></img>
          </p>
        </div>

        <div style={{ flex: 0.8 }}>
          <div
            style={{
              //   backgroundColor: "green",
              height: 350,
              width: "70%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
       {/* style={{ fontFamily: 'CharlieDisplay'}} */}
            <div
              style={{
                flex: 0.1,
                // backgroundColor: "magenta",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "lightgray",
                  height: 80,
                  width: 80,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: 40,
                  }}
                >
                  <img
                    src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:11bf5039-aff1-4df0-8080-fd030e097290/logos-confluence-icon-gradient-blue.svg?cdnVersion=645"
                    style={{ height: 40, width: 40, objectFit: "cover" }}
                  ></img>
                </div>
              </div>
              <div
                style={{
                  flex: 0.9,
                  //   backgroundColor: "green",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start", fontWeight: 700 }}>
                    Confluence
                  </p>
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start" }}>Content collaboration</p>
                </div>
              </div>
            </div>
            {/* //-----img2 starts-----------// */}
            <div
              style={{
                flex: 0.1,
                // backgroundColor: "magenta",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "lightgray",
                  height: 80,
                  width: 80,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: 40,
                  }}
                >
                  <img
                    src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:b32a598a-e04e-4f21-a1b2-9f9096e58e40/trello-icon-gradient-blue.svg?cdnVersion=645"
                    style={{ height: 40, width: 40, objectFit: "cover" }}
                  ></img>
                </div>
              </div>

              <div
                style={{
                  flex: 0.9,
                  //   backgroundColor: "green",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start", fontWeight: 700 }}>Trello</p>
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start" }}>
                    Visual Project Management
                  </p>
                </div>
              </div>
            </div>
            {/* //-----img3 starts-----// */}
            <div
              style={{
                flex: 0.1,
                // backgroundColor: "magenta",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "lightgray",
                  height: 80,
                  width: 80,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: 40,
                  }}
                >
                  <img
                    src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:9ce7a706-fc8c-457c-a9c6-1cf193ebd41a/mark-gradient-blue-jira-work-management.svg?cdnVersion=645"
                    style={{ height: 40, width: 40, objectFit: "cover" }}
                  ></img>
                </div>
              </div>
                  

              <div
                style={{
                  flex: 0.9,
                  //   backgroundColor: "green",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start", fontWeight: 700 }}>
                    Jira Work Management
                  </p>
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start" }}>
                    Business team collaboration
                  </p>
                </div>
              </div>
            </div>
            <div
  style={{
    flex: 0.1,
    // backgroundColor: "magenta",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div
    style={{
      backgroundColor: "lightgray",
      height: 80,
      width: 80,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    }}
  >
    <div
      style={{
        height: 40,
        width: 40,
      }}
    >
      <img
src="https://wac-cdn.atlassian.com/dam/jcr:0cfc067b-20ad-4e96-bc47-eac6a7101f24/logos-atlas-icon-gradient-blue.svg?cdnVersion=1074"
style={{ height: 40, width: 40, objectFit: "cover" }}
      ></img>
      
    </div>
  </div>
  <div
                style={{
                  flex: 0.9,
                  //   backgroundColor: "green",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start", fontWeight: 700 }}>
                    Atlas
                  </p>
                  <p style={{fontFamily: 'CharlieDisplay', textAlign: "start" }}>
                    Teamwork directory
                  </p>
                </div>
              </div>
</div>

          </div>
        </div>
      </div>
      <div style={{ flex: 0.6 }}>
        <div
          style={{
            height: 600,
            width: 800,
            // backgroundColor: "red",
            margin: "auto",
            marginTop: 100,
          }}
        >
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:f83cb33d-1f08-42a6-a70f-b0923553ded5/solutions_1_Con_Trello_JWM.svg?cdnVersion=1074"
            style={{ height: 600, width: 800, objectFit: "cover" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Landingpage1;
