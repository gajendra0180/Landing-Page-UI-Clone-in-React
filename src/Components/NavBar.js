import React from "react";
import "./NavBar.css";
import Button from "@material-ui/core/Button";
import "./uber-iosreel.mp4";
import Typography from "@material-ui/core/Typography";
import Card1 from "./Card1";
import OpenPos from "./OpenPos";
import Intermediate_Area_Part2 from "./Intermediate_Area_Part2";
const NavBar = () => {
  return (
    <>
      <div className="TopArea">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0vh",
            padding: "3%",
          }}
        >
          <div style={{ marginLeft: "2vw" }}>
            <strong style={{ fontSize: "1.8rem" }}>ueno.</strong>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <a className="underLine2 hide_on_responsive">
              <Button variant="text" color="default">
                SERVICES
              </Button>
            </a>
            <a className="underLine2 hide_on_responsive" href="">
              <Button variant="text" color="default">
                CLIENTS
              </Button>
            </a>
            <a className="underLine2 hide_on_responsive" href="">
              <Button variant="text" color="default">
                CAREERS
              </Button>
            </a>
            <a className="underLine2 hide_on_responsive" href="">
              <Button variant="text" color="default">
                ABOUT
              </Button>
            </a>
            <a className="underLine2">
              <Button variant="outlined" color="secondary">
                CONTACT
              </Button>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "5%",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "white",
          }}
          className="Top_Area_Responsive"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4vh",
            }}
            className="Top_Area_Text_Left_Responsive"
          >
            <div>Featured Project</div>
            <div
              style={{
                marginTop: "5vh",
                fontSize: "50px",
                width: "35vw",
                cursor: "pointer",
              }}
            >
              <span
                className="underLine"
                style={{
                  fontFamily: " 'Ubuntu', sans-serif",
                  fontWeight: "bolder",
                }}
              >
                Uber Design
              </span>{" "}
              <br />{" "}
              <span
                className="underLine1"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: "100",
                }}
              >
                Looking under the hood
              </span>
            </div>
            <div style={{ marginTop: "10vh" }}>
              <Button variant="contained" color="secondary">
                More Projects
              </Button>
            </div>
          </div>
          <div style={{ padding: "2%" }} data-aos="zoom-in-up">
            <video
              className="Vid"
              src="https://prismic-io.s3.amazonaws.com/ueno-www/1c8050cb-58c7-4577-9186-b9a50d89d6b2_uber-iosreel.mp4"
              poster="https://images.prismic.io/ueno-www/ec540bbd-bb41-4e3b-a09c-f8712b8a83a7_uber-poster.jpg?auto=compress,format"
            ></video>
          </div>
        </div>
        <div style={{}}>
          <Typography
            style={{
              width: "45vw",
              fontSize: "30px",
              margin: "auto",
              textAlign: "center",
              fontWeight: "lighter",
            }}
            variant="subtitle1"
            color="initial"
          >
            Ueno is a full-service agency, busy designing and building beautiful
            digital products, brands, and experiences.
            <br />
            <Button variant="outlined" color="secondary">
              Contact us
            </Button>
          </Typography>
        </div>
        <div className="vl">&nbsp;</div>
        <div className="vlt">
          {" "}
          <span style={{ fontSize: "30px" }}>All work, all play </span>
          <br />
          <span style={{ fontSize: "25px", fontWeight: "lighter" }}>
            {" "}
            Selected project
          </span>
        </div>
      </div>

      <div
        className="CardsContainer"   
        style={{ marginTop: "12vh", marginBottom: "20vh", padding: "4%" }}
      >
        <Card1 
          src1="https://ueno.co/static/2fa64aeba6c76d13d61a1f6e6c810286/8fc1f/6805d3d5-174a-4355-8265-a4446e971882_copper-image.webp"
          src2="https://ueno.co/static/e28e0e34acc9e67279406d1604fbf8d2/8fc1f/af5a8967-cf90-46f0-b241-5537faeda98f_reuters-news-app-home.webp"
        />
        <Card1
          src1="https://ueno.co/static/6de8d4d5c9c9553938c4b4aa1a589b98/8fc1f/53f3f30d-b24d-4da9-ad4d-96cdf8c6292b_dropdbox-guide.webp"
          src2="https://ueno.co/static/fb65a052c22192a5ab78fd2c84798325/8fc1f/798efde1-7b06-4d72-93fb-d98a45ea64e3_redbull.webp"
        />
        <Card1
          src1="https://ueno.co/static/da4eb8d9f3845cb563400f68d440d1bd/8fc1f/d3a97c0e-446e-49f7-aa2e-b0187a813c5f_santatracker.webp"
          src2="https://ueno.co/static/4a8222b171e682312a7771e9e51ff1d7/8fc1f/668f801c-fad1-465e-a023-9b83348aa070_clearmotion-grid.webp"
        />
        <Card1
          src1="https://ueno.co/static/72299ba88c8105be346665e058b42e0b/e7405/ca3d4561-c5b2-4e99-8147-f916251f451f_uber-thumb.webp"
          src2="https://ueno.co/static/5038419186136bcececcf44c09df777a/8fc1f/fa4cfb00-b4bc-497c-8691-b6187f3affce_lonelyplanet_hero.webp"
        />
        <Card1
          src1="https://ueno.co/static/b6fbef506b1a46b67d12ccc60c076470/8fc1f/30a872c9-ec6d-4da8-a40e-cf597409cb05_Cowboy1200x1200.webp"
          src2="https://ueno.co/static/6aaadd9ae00abb7450ff868e7cd1c1b3/e7405/02be3ae3-c281-47ca-b8f1-e8a29a5cf474_dorsia_casestudy_hero.webp"
        />
      </div>

      <div className="Intermediate_Area">
        <div>
          <div className="Intermediate_Area_Part1">What's new?</div>
          <div style={{ fontSize: "1.8rem", color: "grey", opacity: "0.5" }}>
            Our blog and news
          </div>
          <br />
          <br />
        </div>
        <div className="Intermediate_Area_Part2">
          <Intermediate_Area_Part2
            date=" Jan 6 Blog"
            text="24,895 Hours Later"
          />
          <Intermediate_Area_Part2
            date=" Oct 19 News"
            text="Figma Wanted Our CEO's insights for some reason"
          />
          <Intermediate_Area_Part2
            date="Oct 12 News"
            text="This Guy Really Won't Shut Up"
          />
        </div>
      </div>

      <div className="AboveFooter_Vid" data-aos="zoom-in-up" style={{ marginLeft: "10vw" }} >
        <video
          autoPlay
          muted
          src="https://ueno.co/static/interview-white-17edfff518080c24e6248ae5e6b232dc.mp4"
        ></video>
      </div>

      <div className="Footer_1">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="Footer_1_1">Join Us</div>
          <div style={{ fontSize: "1.8rem", color: "grey", opacity: "0.5" }}>
            Open positions
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "8%",
            paddingLeft: "20%",
            paddingRight: "20%",
            marginBottom: "30vh",
          }}
          className="Footer_1_Names"
        >
          <OpenPos
            countryName="San Francisco"
            openPositions="No open positions"
          />
          <OpenPos countryName="New York" openPositions="No open positions" />
          <OpenPos
            countryName="Los Angeles"
            openPositions="No open positions"
          />
        </div>
        <hr style={{ opacity: ".5", height: ".1px" }} />
      </div>

      <div className="Footer_2">
        <div>
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "100",
              letterSpacing: "-.025em",
            }}
          >
            Got a project?
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              color: "#8d8f9a",
              fontWeight: "100",
              opacity: "0.6",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Let's talk
          </div>
          <br />
          <Button variant="outlined" color="primary">
            Tell us everything
          </Button>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "8vw",
            }}
          >
            <ul>
              <li>
                <Button variant="text" color="default">
                  Clients
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  About
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  News
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Contact
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Careers
                </Button>{" "}
              </li>
              <li>
                <Button variant="text" color="default">
                  Press
                </Button>{" "}
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <Button variant="text" color="default">
                San Fransicso
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                New York
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Tokyo
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Los Angeles
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Osaka
              </Button>{" "}
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "8vw",
            }}
          ></div>
          <ul>
            <li>
              <Button variant="text" color="default">
                Newsletter
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Blog
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Bueno.co
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Ueno.store
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Ueno.design
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Ueno.land
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                Playground
              </Button>{" "}
            </li>
            <li>
              <Button variant="text" color="default">
                The Interview
              </Button>{" "}
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "8vw",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="Footer_3"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginLeft: "2vw", width: "70vw" }}>
            <hr style={{ opacity: ".5", height: ".1px" }} />
          </div>

          <div style={{ marginLeft: "2vw", width: "100%" }}>
            <strong style={{ fontSize: "1.8rem" }}>ueno.</strong>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            left: "-10vw",
            top: "7vh",
          }}
        >
          <li>
            <svg viewBox="0 0 18 18" width="18" height="18">
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M5.2 0h7.6C15.7 0 18 2.3 18 5.2v7.6c0 2.9-2.3 5.2-5.2 5.2H5.2A5.2 5.2 0 010 12.8V5.2C0 2.3 2.3 0 5.2 0zM5 1.8A3.2 3.2 0 001.8 5v8c0 1.8 1.4 3.2 3.2 3.2h8c1.7 0 3.2-1.5 3.2-3.2V5c0-1.8-1.4-3.2-3.2-3.2H5zm8.7 1.3a1.1 1.1 0 110 2.3 1.1 1.1 0 010-2.3zM9 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4z"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="18" height="17" viewBox="0 0 18 17">
              <path
                fill="currentColor"
                d="M8.7 0A8.7 8.7 0 006 17c.4 0 .5-.2.5-.4V15c-2.4.5-2.9-1.2-2.9-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.3 1 1.3 1 .8 1.2 2 .8 2.6.6 0-.5.3-1 .5-1.1-2-.3-4-1-4-4.3 0-1 .4-1.8 1-2.4-.1-.2-.4-1.1 0-2.3 0 0 .8-.2 2.4.9a8.2 8.2 0 014.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1 0 2.3.6.6 1 1.4 1 2.4 0 3.3-2 4-4 4.3.3.2.6.8.6 1.6v2.4c0 .2.1.5.6.4A8.7 8.7 0 008.7 0z"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <title>LinkedIn icon</title>
              <path
                fill="currentColor"
                d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
              ></path>
            </svg>
          </li>
          <li>
            <svg width="9" height="18" viewBox="0 0 9 18">
              <path
                fill="currentColor"
                d="M9 0v3.6H7.2c-.6 0-.9.7-.9 1.4v2.2H9v3.6H6.3V18H2.7v-7.2H0V7.2h2.7V3.6c0-2 1.6-3.6 3.6-3.6H9z"
              ></path>
            </svg>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
