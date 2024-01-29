import React, { useState, useRef,useEffect } from 'react';
import Uploaded from '../Uploaded/uploaded';
import './fileupload.css';
import myImage from "../../data/dp.png"
import SideBar from '../SideBar/SideBar';
export default function Fileupload() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [isDisabled,setIsDisabled]=useState(true)
  const inputRef = useRef(null);
  const [isSideBar,setSideBar]=useState(false)
  const [isMobile, setIsMobile] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
    console.log("Show data is ",showData)
    setIsDisabled(false)
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleRemove = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Is it reaching here")
    setIsLoading(true);
    setIsDisabled(true)
    setTimeout(() => {
      setIsLoading(false);
      setShowData(true);
      setSelectedFile(null)
    }, 1000);
    // handle form submission
  };

const handleClick=()=>{
    console.log("coming")
setSideBar(true)
}

const setClose=()=>{
setSideBar(false)
}





  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Set breakpoint as per your design
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);
  return (
    <div>
    {isSideBar && <SideBar setClose={setClose}/>}
    <div className={`outer-container ${isSideBar ? 'overlay-visible' : ''}`}>

        
        <div className='mob-header'>
            <div className='left-ele'>
            <div onClick={handleClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
    <path d="M1 1H17M1 13H17M1 7H17" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9902 12.6291L19.7848 9.44685C19.4943 8.735 18.7951 8.23336 17.9787 8.23336C17.1081 8.23336 16.3707 8.80392 16.1202 9.59152L9.99098 14.6481C9.67551 14.4286 9.29214 14.3 8.87872 14.3C8.36808 14.3 7.90328 14.4963 7.55566 14.8175L0.121365 11.1829C1.00521 4.86344 6.43234 0 12.9954 0C20.051 0 25.7938 5.62091 25.9902 12.6291ZM6.99929 16.7717L0 13.3498C0.185401 20.3678 5.93266 26 12.9954 26C19.6871 26 25.1979 20.944 25.9161 14.4437L25.7557 14.7565L19.4134 11.504C19.0571 11.891 18.5462 12.1334 17.9787 12.1334C17.5037 12.1334 17.0683 11.9635 16.73 11.6812L10.8023 16.5715C10.649 17.4955 9.84616 18.2 8.87872 18.2C7.98246 18.2 7.22743 17.5953 6.99929 16.7717Z" fill="#605BFF"/>
</svg>
<p> Base</p>

            </div>
            <div className='head-icons'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
  <path d="M16.3862 13.3255V9.20108C16.3862 5.5011 14.2012 2.38423 11.2412 1.44687C10.9482 0.59807 10.2322 0 9.38623 0C8.54023 0 7.82423 0.59807 7.53123 1.44687C4.57123 2.38538 2.38623 5.5011 2.38623 9.20108V13.3255L0.679231 15.2887C0.586189 15.3954 0.512401 15.5221 0.462116 15.6617C0.411831 15.8012 0.386041 15.9508 0.386232 16.1019V18.4022C0.386232 18.7072 0.491588 18.9997 0.679125 19.2154C0.866661 19.4311 1.12102 19.5523 1.38623 19.5523H17.3862C17.6514 19.5523 17.9058 19.4311 18.0933 19.2154C18.2809 18.9997 18.3862 18.7072 18.3862 18.4022V16.1019C18.3864 15.9508 18.3606 15.8012 18.3103 15.6617C18.2601 15.5221 18.1863 15.3954 18.0932 15.2887L16.3862 13.3255ZM16.3862 17.252H2.38623V16.578L4.09323 14.6148C4.18627 14.5081 4.26006 14.3814 4.31035 14.2419C4.36063 14.1023 4.38642 13.9527 4.38623 13.8016V9.20108C4.38623 6.03016 6.62923 3.45041 9.38623 3.45041C12.1432 3.45041 14.3862 6.03016 14.3862 9.20108V13.8016C14.3862 14.1076 14.4912 14.3997 14.6792 14.6148L16.3862 16.578V17.252ZM9.38623 23.0027C10.0055 23.0036 10.6097 22.7826 11.1147 22.3703C11.6198 21.9581 12.0006 21.3751 12.2042 20.7024H6.56823C6.77189 21.3751 7.15271 21.9581 7.65774 22.3703C8.16277 22.7826 8.76693 23.0036 9.38623 23.0027Z" fill="black"/>
</svg> 
            </div>
            <div>
            <img src={myImage} alt="My Image" className="circular-image" />
            </div> 
            </div>
        
        </div>
        
      <div className='upload-head'>
        <div className='head-text'>Upload CSV </div>
        <div className='head-icons'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23" fill="none">
  <path d="M16.3862 13.3255V9.20108C16.3862 5.5011 14.2012 2.38423 11.2412 1.44687C10.9482 0.59807 10.2322 0 9.38623 0C8.54023 0 7.82423 0.59807 7.53123 1.44687C4.57123 2.38538 2.38623 5.5011 2.38623 9.20108V13.3255L0.679231 15.2887C0.586189 15.3954 0.512401 15.5221 0.462116 15.6617C0.411831 15.8012 0.386041 15.9508 0.386232 16.1019V18.4022C0.386232 18.7072 0.491588 18.9997 0.679125 19.2154C0.866661 19.4311 1.12102 19.5523 1.38623 19.5523H17.3862C17.6514 19.5523 17.9058 19.4311 18.0933 19.2154C18.2809 18.9997 18.3862 18.7072 18.3862 18.4022V16.1019C18.3864 15.9508 18.3606 15.8012 18.3103 15.6617C18.2601 15.5221 18.1863 15.3954 18.0932 15.2887L16.3862 13.3255ZM16.3862 17.252H2.38623V16.578L4.09323 14.6148C4.18627 14.5081 4.26006 14.3814 4.31035 14.2419C4.36063 14.1023 4.38642 13.9527 4.38623 13.8016V9.20108C4.38623 6.03016 6.62923 3.45041 9.38623 3.45041C12.1432 3.45041 14.3862 6.03016 14.3862 9.20108V13.8016C14.3862 14.1076 14.4912 14.3997 14.6792 14.6148L16.3862 16.578V17.252ZM9.38623 23.0027C10.0055 23.0036 10.6097 22.7826 11.1147 22.3703C11.6198 21.9581 12.0006 21.3751 12.2042 20.7024H6.56823C6.77189 21.3751 7.15271 21.9581 7.65774 22.3703C8.16277 22.7826 8.76693 23.0036 9.38623 23.0027Z" fill="black"/>
</svg> 
            </div>
            <div>
            <img src={myImage} alt="My Image" className="circular-image" />
            </div>
        </div>
      </div>
      <div className='form-div'>
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={handleSubmit} >
        <div className='upload-cont'>
            {console.log("Show data is ",showData)}
          <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} style={{ display: 'none' }} />
          
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
            {selectedFile ? (
            <div className="file-info">
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22_2395)">
<path d="M22.7801 17.2998L10.9556 15.1998V30.7167C10.9556 31.4253 11.5264 31.9998 12.2305 31.9998H32.6341C33.3382 31.9998 33.9091 31.4253 33.9091 30.7167V24.9998L22.7801 17.2998Z" fill="#185C37"/>
<path d="M22.7801 4H12.2305C11.5264 4 10.9556 4.57446 10.9556 5.2831V11L22.7801 18L29.0401 20.1L33.9091 18V11L22.7801 4Z" fill="#21A366"/>
<path d="M10.9556 11H22.7801V18H10.9556V11Z" fill="#107C41"/>
<path opacity="0.1" d="M19.4185 9.60049H10.9556V27.1005H19.4185C20.1216 27.0982 20.6911 26.5251 20.6934 25.8174V10.8836C20.6911 10.1759 20.1216 9.60279 19.4185 9.60049Z" fill="black"/>
<path opacity="0.2" d="M18.7229 10.3002H10.9556V27.8002H18.7229C19.4261 27.7979 19.9956 27.2248 19.9978 26.5171V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z" fill="black"/>
<path opacity="0.2" d="M18.7229 10.3002H10.9556V26.4002H18.7229C19.4261 26.3979 19.9956 25.8248 19.9978 25.1172V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z" fill="black"/>
<path opacity="0.2" d="M18.0273 10.3002H10.9556V26.4002H18.0273C18.7305 26.3979 19.3 25.8248 19.3023 25.1172V11.5833C19.3 10.8757 18.7305 10.3025 18.0273 10.3002Z" fill="black"/>
<path d="M5.27496 10.3002H18.0274C18.7315 10.3002 19.3023 10.8747 19.3023 11.5833V24.4171C19.3023 25.1258 18.7315 25.7002 18.0274 25.7002H5.27496C4.57082 25.7002 4 25.1258 4 24.4171V11.5833C4 10.8747 4.57082 10.3002 5.27496 10.3002Z" fill="url(#paint0_linear_22_2395)"/>
<path d="M7.94873 22.1706L10.6308 17.9881L8.1734 13.8287H10.1502L11.4912 16.4887C11.615 16.7414 11.6999 16.929 11.7458 17.0529H11.7632C11.8513 16.8513 11.944 16.6555 12.0414 16.4656L13.475 13.8301H15.2897L12.7696 17.965L15.3537 22.1706H13.4228L11.8738 19.2509C11.8008 19.1267 11.7389 18.9962 11.6888 18.861H11.6658C11.6204 18.9934 11.5602 19.1203 11.4864 19.239L9.89144 22.1706H7.94873Z" fill="white"/>
<path d="M32.634 4H22.78V11H33.909V5.2831C33.909 4.57446 33.3382 4 32.634 4Z" fill="#33C481"/>
<path d="M22.78 18H33.909V25H22.78V18Z" fill="#107C41"/>
</g>
<defs>
<linearGradient id="paint0_linear_22_2395" x1="6.65832" y1="9.29766" x2="16.7396" y2="26.6473" gradientUnits="userSpaceOnUse">
<stop stop-color="#18884F"/>
<stop offset="0.5" stop-color="#117E43"/>
<stop offset="1" stop-color="#0B6631"/>
</linearGradient>
<clipPath id="clip0_22_2395">
<rect width="29.9091" height="28" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
              <p>{selectedFile.name}</p>
              <button onClick={handleRemove} className='remove-btn'>Remove</button>
            </div>
          ) : (
              <div className='upload-text'>
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22_2395)">
<path d="M22.7801 17.2998L10.9556 15.1998V30.7167C10.9556 31.4253 11.5264 31.9998 12.2305 31.9998H32.6341C33.3382 31.9998 33.9091 31.4253 33.9091 30.7167V24.9998L22.7801 17.2998Z" fill="#185C37"/>
<path d="M22.7801 4H12.2305C11.5264 4 10.9556 4.57446 10.9556 5.2831V11L22.7801 18L29.0401 20.1L33.9091 18V11L22.7801 4Z" fill="#21A366"/>
<path d="M10.9556 11H22.7801V18H10.9556V11Z" fill="#107C41"/>
<path opacity="0.1" d="M19.4185 9.60049H10.9556V27.1005H19.4185C20.1216 27.0982 20.6911 26.5251 20.6934 25.8174V10.8836C20.6911 10.1759 20.1216 9.60279 19.4185 9.60049Z" fill="black"/>
<path opacity="0.2" d="M18.7229 10.3002H10.9556V27.8002H18.7229C19.4261 27.7979 19.9956 27.2248 19.9978 26.5171V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z" fill="black"/>
<path opacity="0.2" d="M18.7229 10.3002H10.9556V26.4002H18.7229C19.4261 26.3979 19.9956 25.8248 19.9978 25.1172V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z" fill="black"/>
<path opacity="0.2" d="M18.0273 10.3002H10.9556V26.4002H18.0273C18.7305 26.3979 19.3 25.8248 19.3023 25.1172V11.5833C19.3 10.8757 18.7305 10.3025 18.0273 10.3002Z" fill="black"/>
<path d="M5.27496 10.3002H18.0274C18.7315 10.3002 19.3023 10.8747 19.3023 11.5833V24.4171C19.3023 25.1258 18.7315 25.7002 18.0274 25.7002H5.27496C4.57082 25.7002 4 25.1258 4 24.4171V11.5833C4 10.8747 4.57082 10.3002 5.27496 10.3002Z" fill="url(#paint0_linear_22_2395)"/>
<path d="M7.94873 22.1706L10.6308 17.9881L8.1734 13.8287H10.1502L11.4912 16.4887C11.615 16.7414 11.6999 16.929 11.7458 17.0529H11.7632C11.8513 16.8513 11.944 16.6555 12.0414 16.4656L13.475 13.8301H15.2897L12.7696 17.965L15.3537 22.1706H13.4228L11.8738 19.2509C11.8008 19.1267 11.7389 18.9962 11.6888 18.861H11.6658C11.6204 18.9934 11.5602 19.1203 11.4864 19.239L9.89144 22.1706H7.94873Z" fill="white"/>
<path d="M32.634 4H22.78V11H33.909V5.2831C33.909 4.57446 33.3382 4 32.634 4Z" fill="#33C481"/>
<path d="M22.78 18H33.909V25H22.78V18Z" fill="#107C41"/>
</g>
<defs>
<linearGradient id="paint0_linear_22_2395" x1="6.65832" y1="9.29766" x2="16.7396" y2="26.6473" gradientUnits="userSpaceOnUse">
<stop stop-color="#18884F"/>
<stop offset="0.5" stop-color="#117E43"/>
<stop offset="1" stop-color="#0B6631"/>
</linearGradient>
<clipPath id="clip0_22_2395">
<rect width="29.9091" height="28" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>

<p>
      {isMobile ? 'Upload your excel sheet ' : 'Drop your excel sheet here or '}
      <a className="browse-link" onClick={onButtonClick}>
        {isMobile ? 'here' : 'browse'}
      </a>
    </p>
                
              </div> 
          )}
            </label>
          
          { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
          <div className='upload-btn'>
          <button type="submit" disabled={isDisabled} id={isDisabled ? 'disabled' : ''}>
    {isLoading ? (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="17" height="17" rx="8.5" stroke="url(#paint0_angular_22_3041)" stroke-width="2"/>
      <defs>
      <radialGradient id="paint0_angular_22_3041" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(90) scale(9.5)">
      <stop offset="0.482539" stop-color="white"/>
      <stop offset="0.482639" stop-color="white" stop-opacity="0"/>
      <stop offset="0.612852" stop-color="white" stop-opacity="0"/>
      <stop offset="0.612952" stop-color="white"/>
      </radialGradient>
      </defs>
      </svg>
      
    ) : (
      <div className='btn-text'>
        <div className="upload-svg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Upload</p>
                </div>
      </div>
    )}
  </button>
          </div>
          </div>
          {showData && (
            <div /* className="upload-data" */>
              <Uploaded/>
            </div>
          )}
         
        </form>
        </div>
        
      </div>
      </div>
    
  );
}
