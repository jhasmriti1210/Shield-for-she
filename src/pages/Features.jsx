import React from "react";
import "../styles/features.css";
import search from "../gifs/search.gif";
import puzzle from "../gifs/puzzle.gif";
import statis from "../gifs/statis.gif";
import noti from "../gifs/noti.gif";
import rock from "../gifs/rock.gif";
import proct from "../gifs/proct.gif";
import lgpic from "../images/lgprofile.png";
import RideImg from "../images/rideimg.png";
import Emergency from "./../images/Emergency.png";

const Features = () => {
  return (
    <div>
      <div className="features-wrapper">
        <img src={lgpic} alt="Large Profile" style={{ width: "100%" }} />
      </div>
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">
                AI- and ML-Powered Platform for Women’s Safety
              </p>
              <h2 className="features_title">
                Our one-stop platform is designed to enhance women’s safety
                through the following features:
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://static.vecteezy.com/system/resources/previews/036/259/520/non_2x/ai-generated-wall-mount-cctv-security-camera-isolated-on-transparent-background-free-png.png" alt="Real-Time Crime Detection" width={150} height={130} />
                <h3 className="mt-4">Real-Time Crime Detection</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                We will integrate our solution with existing CCTV cameras at the server level, processing RTPS footage in real time to detect suspicious activities like harassment or unauthorized intrusions. Using computer vision and ML algorithms, gesture and behavior recognition models identify distress signals and trigger instant alerts. Facial recognition can further enhance public safety
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Cartogram_of_2008-2020_US_presidential_elections.svg/350px-Cartogram_of_2008-2020_US_presidential_elections.svg.png" alt="Emergency Service Support" width={150}height={130} />
                <h3 className="mt-4">Safety Zone Classification</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                Classification of public spaces into Red (unsafe), Yellow (moderately safe), and Green (safe) zones is based on historical crime data, real-time feedback, and crowd-sourced inputs. Predictive ML models identify potential crime hotspots by analyzing trends and patterns, enabling authorities to take proactive measures such as increasing patrols or improving surveillance in high-risk areas.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src="https://thumbs.dreamstime.com/b/incident-sign-stamp-white-background-vector-illustration-incident-sign-stamp-156239613.jpg" alt="Incident Reporting" width={150} height={130}/>
                <h3 className="mt-4">Incident Reporting</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                We take your communitys safety seriously, which is why we have implemented an incident reporting system with advanced encryption protocols. Your details are safeguarded using the latest cybersecurity technologies to ensure privacy and confidentiality. Additionally, AI-driven anomaly detection helps validate reports, preventing false alarms while ensuring genuine concerns receive immediate attention.

                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRZGWoeTAPPo4i6atni2P2WFMzL0Wemwb6tspshpYgccJwFM8Gy0WaQzGSWukTD1dIRQ&usqp=CAU" alt="Live Location" width={150} height={130}/>
                <h3 className="mt-4">Street Lighting Optimization</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>

                Existing cameras analyze luminous intensity, while real-time inputs from users and authorities provide continuous updates on streetlight functionality. ML algorithms identify and prioritize poorly lit areas for urgent repairs, considering safety classifications and feedback. Smart analysis ensures well-lit pathways, enhancing security and significantly reducing crime risks in vulnerable locations.







</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img src={RideImg} alt="Emergency Chat" width={150} height={130} />
                <h3 className="mt-4">SheRide</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                A transport feature offering bike taxi services for women by women is integrated with safety protocols such as GPS tracking, panic buttons, and automated route alerts to nearby police stations. AI-powered route optimization provides personalized safety recommendations based on real-time safety zone data, ensuring secure and efficient travel. Verified drivers undergo background checks for passengers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img src={Emergency} alt="Mail Services" width={150} height={130} />
                <h3 className="mt-4">Crime Reporting Assistance:</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                One-tap reporting of crimes is integrated with NLP-based chatbots for instant communication in multiple languages. AI-powered predictive analytics optimize resource allocation for emergency responses, ensuring rapid intervention. The system intelligently prioritizes incidents based on severity, directing law enforcement and medical assistance to critical locations faster
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
