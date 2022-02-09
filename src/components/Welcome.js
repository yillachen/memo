import "./Welcome.css";
import { Parallax } from "react-parallax";
import waterfall from "./images/waterfall.gif";
import google from "./images/google.png";
import meditation from "./images/meditation.gif";

const Welcome = () => (
  <>
    <Parallax bgImage={waterfall} style={{ opacity: "0.9" }} strength={500}>
      <div className="parallaxBox">
        <h2 className="inline">enjoy conversations without the noise.</h2>
      </div>
    </Parallax>
    <div className="welcomeDiv">
      <p className="welcomeMsg">
        memo is a minimalist chatroom for your mains or a personal note-taker.
      </p>
    </div>
    <Parallax bgImage={meditation} style={{ opacity: "0.9" }} strength={500}>
      <div className="parallaxBox">
        <h2 className="inline">
          a good conversation is hard to find. just sign in.
        </h2>
      </div>
    </Parallax>
    <div className="welcomeDiv">
      <span className="welcomeMsg">
        Protected by Google
        <br />
        <br />
        <img src={google} alt="" style={{ width: "20px" }} />
      </span>
    </div>
    <footer>
      Designed by <a href="https://github.com/yillachen">Yilla Chen</a>.
    </footer>
  </>
);

export default Welcome;
