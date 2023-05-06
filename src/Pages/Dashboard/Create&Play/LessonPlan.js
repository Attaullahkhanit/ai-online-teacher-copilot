import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { MdPlayLesson } from "react-icons/md";
import Dashbaord from "../Dashboard/Dashboard";
import { TbRefreshDot } from "react-icons/tb";
import {
  ImDownload,
  ImDownload3,
  ImFilesEmpty,
  ImHistory,
} from "react-icons/im";
import { Configuration, OpenAIApi } from "openai";
//  import Translation from "./components/Translation";
import { arrayItems } from "../../../Components/OptionSelection";
import WywisingEditor from "../../../Components/wywising-editor/wywising-editor";
import PDFGenerator from "../../../Components/pdf/generate-pdf";
import { getFileSrcFromPublicimg } from "../../../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LessonPlan() {
  const [conversation, setConversation] = useState([]);
  const [inputText, setInputText] = useState("");
  const [topicsInput, setTopicInput] = useState("");
  const [studentAge, setstudentAge] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location, "locationData");
  function gotToCreateAndPlayPage() {
    navigate("/createplay");
  }

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState(arrayItems[0].option);
  const [result, setResult] = useState("");

  const callAIModel = async () => {
    setResult("");
    setLoading(true);
    let object = {
      ...option,
      prompt: `Primary Prompt: Can you prepare a lesson plan for the following topic: ${topicsInput} Secondary Prompt: The age of the students is identified below: ${studentAge}`,
    };
    const response = await openai.createCompletion(object);
    await setResult(response.data.choices[0].text);
  };

  useEffect(() => {
    result !== "" && setLoading(false);
  }, [result]);

  let textresult = result.replace(/\n+/g, "<br>");
  //  textresult= textresult.replace(/\.(\d)/g, '.$1')
  //  textresult= textresult.replace(/\./g, '.<br>')

  const savePdf = () => {
    let loginResponse = localStorage.getItem("loginResponse");
    loginResponse = JSON.parse(loginResponse);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_id: loginResponse.userDetail._id,
      description: result,
      boxname: location.state.title,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/user_content_save", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        toast.success("You saved successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => console.log("error", error));
  };

  function filterAndBoldFirstString(str) {
    const substrings = str.split(":");
    const firstString = substrings[0];
    const boldFirstString = `<b>${firstString}</b>`;
    const result = `${boldFirstString}:${substrings.slice(1).join(":")}`;
    return result;
  }
  return (
    <>
      <Dashbaord>
        <section className="min-vh-100">
          <div className="container-fluid">
            <div className="align-item-center py-3">
              <BsArrowLeft className="text-primary fs-5 " />
              <span
                onClick={gotToCreateAndPlayPage}
                className="text-primary text-decoration-none pe-auto px-2"
              >
                Back To WorkShop
              </span>
            </div>
            <div className="row px-3">
              <div className="col-md-6">
                <div className="py-4 d-flex flex-row justify-content-between">
                  <div>
                    <h2 className="">
                      {location.state?.title}{" "}
                      <MdPlayLesson className="text-warning" />
                    </h2>
                  </div>
                </div>
                {/* <div>      
                  <p className='fw-bold py-1 my-0'>Topic or {location.state?.title}</p>
                </div>
                <div class="input-group">
                  <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="form-control" placeholder="Enter Text" onKeyDown={async (e) => {
                    if (e.key === 'Enter') { 
                      callAIModel()
                     }
                  }} />
                </div> */}
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">Choose Topics</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={topicsInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    className="form-control"
                    placeholder="Topic"
                  />
                </div>
                <div className="mt-3">
                  <p className="fw-bold py-1 my-0">Audience Age</p>
                </div>
                <div class="input-group">
                  <input
                    type="text"
                    value={studentAge}
                    onChange={(e) => setstudentAge(e.target.value)}
                    className="form-control"
                    placeholder="Audience Age Text"
                  />
                </div>
                <div>
                  {loading ? (
                    <button className="btn btn-primary mt-3 mb-4 w-100">
                      Generate{" "}
                      <img
                        src={getFileSrcFromPublicimg("loader.svg")}
                        alt="aboutimg"
                        style={{ height: "21px" }}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={callAIModel}
                      className="btn btn-primary mt-3 mb-4 w-100"
                    >
                      Generate
                    </button>
                  )}

                  <p className="fw-bold">
                    Save time and quickly draft lesson plans for any subject
                    matter.
                  </p>
                </div>
                <div>
                  {conversation.map((message, index) => (
                    <div key={index}>{message}</div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 border-start border-gray border-3 ">
                {location.state.isPdf ? (
                  <>
                    <PDFGenerator
                      style={{ cursor: "pointer" , float: "right", position: "relative", zIndex: 99999, right: 0 }}
                      content={result}
                      title={""}
                    />
                    <ImFilesEmpty
                     style={{ cursor: "pointer" , float: "right", position: "relative", zIndex: 99999, float: "right" }}
                      onClick={savePdf}
                      className="fs-2 text-info pb-2 "
                    />
                    <WywisingEditor content={result.replace(/\n+/g, "<br>")} />
                  </>
                ) : (
                  //  <>
                  //   {result && <><PDFGenerator style={{cursor:"pointer"}} content={result} title={""} />
                  //   <ImFilesEmpty style={{cursor:"pointer", float:"right"}} onClick={savePdf} className='fs-2 text-info pb-2 '/></>}
                  //     <div className=' p-2 w-100 min-vh-100 bg-light d-flex align-items-center justify-content-center mb-4 downloadpdfready'>
                  //      {result?
                  //       <>
                  //        <WywisingEditor content={result.replace(/\n+/g, "<br>")} />
                  //       </>
                  //      :
                  //        <div className='justify-content-center text-center'>
                  //         <p className='fst-italic text-secondary'>Your lesson plan will appear here, once it<br/>
                  //            is available for download.
                  //         </p>
                  //         {result?<PDFGenerator content={result} title={""}/>
                  //         :<ImDownload className='fs-2 text-info endownload'/>}
                  //        </div>}
                  //     </div>
                  //      </>:
                  <WywisingEditor content={result.replace(/\n+/g, "<br>")} />
                )}
              </div>
            </div>
          </div>
        </section>
      </Dashbaord>
      <ToastContainer />
    </>
  );
}

export default LessonPlan;
