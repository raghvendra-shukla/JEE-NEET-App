import React, { useCallback } from 'react'
import { useState } from "react";
import axios from 'axios';
import { useEffect,useRef } from 'react';
import Infocard from './Infocard';

function Dashboard(props) {
  {document.body.style.backgroundColor="#b7acac"};
  const { showAlert } = props;
  const ref=useRef(null);
  const refclose=useRef(null);
  const [img, setimg] = useState(null);
  const [pic, setpic] = useState("");
  const [showimg,setshowimg]=useState(null);
  const [Info, setInfo] = useState({name:"",email:"",phone:"",country:"",city:"",state:"",address:""});
  const [profile, setprofile] = useState(null);
  const getprofile = async () => {
    //API call
    const response = await fetch(
      "http://localhost:5000/api/dashboard/fetchInfo",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    // console.log(json);
    setprofile(json);
  };
  //editing a Info
  const editprofile = async (
    id,
    name,
    email,
    phone,
    country,
    city,
    state,
    address
  ) => {
    // Api call
    const response = await fetch(`http://localhost:5000/api/dashboard/updateInfo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name,
        email,
        country,
        phone,
        city,
        state,
        address}),
      });
    const json = response.json();
    //logic to Editing a profile
    const newprof = JSON.parse(JSON.stringify(Info));
    for (let index = 0; index < newprof.length; index++) {
      const element = newprof[index];
      if (element._id === id) {
        newprof[index].name = name;
        newprof[index].email = email;
        newprof[index].phone = phone;
        newprof[index].country = country;
        newprof[index].city = city;
        newprof[index].state = state;
        newprof[index].address = address;
        break;
      }
    }
    setprofile(newprof);
  };

  const [proff, setproff] = useState({id:"",ename:"",eemail:"",ephone:"",ecountry:"",ecity:"",estate:"",eaddress:""});
  const updateprofile = (currentproff) => {
    ref.current.click();
    setproff({id:currentproff._id,ename:currentproff.name,eemail:currentproff.email,ephone:currentproff.phone,ecountry:currentproff.country,ecity:currentproff.city,estate:currentproff.state,eaddress:currentproff.address});
  };
const handleonclick=(e)=>{
    e.preventDefault();
    editprofile(proff.id,proff.ename,proff.eemail,proff.ephone,proff.ecountry,proff.ecity,proff.estate,proff.eaddress);
    props.showAlert("Information has been updated","success");
    // console.log("Updating a note...",proff);
    refclose.current.click();
}
const handleonchange=(e)=>{ 
  setproff({...proff,[e.target.name]:e.target.value})
}

const addInfo= async(name,email,phone,country,city,state,address)=>{
  //API call
  const response = await fetch("http://localhost:5000/api/dashboard/addInfo", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({name,email,phone,country,city,state,address})
    });
    // const info= await response.json();
    // console.log(info);
    // setInfo
  }
  
  // const addImage= async(image)=>{
    //   //API call
    //   const formData = new FormData()
    //       formData.append('testImage', image)
    //       const config = {
      //         headers: {
        //             'content-type': 'multipart/form-data'
        //           }
        //       };
        //       axios.post("http://localhost:5000/api/pic/addimage", formData,config, {
          //       }).then(res => {
            //           console.log(res)
            //       })
            // }
            const handleImageonChange=(e)=>{
              //   if (!e.target.files || e.target.files.length === 0) {
                //     setimg(undefined)
                //     return
                // }
                setimg(e.target.files[0]);
                const objecturl=URL.createObjectURL(e.target.files[0]);
                setshowimg(objecturl);
              }
              
              const handleImageonClick=(e)=>{
                e.preventDefault();
    const formData = new FormData()
    // addImage(img);
    formData.append('testImage', img)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        "auth-token": localStorage.getItem("token"),
      }
    };
    axios.post("http://localhost:5000/api/pic/addimage", formData,config, {
    }).then(res => {
      // console.log(res)
    })
    props.showAlert("Image has been added successfully","success");
    setshowimg(null);
  }
  
  const handleInfochange=(e)=>{ 
    setInfo({...Info,[e.target.name]:e.target.value})
  }
  const handleInfoclick=(e)=>{
    e.preventDefault();
    addInfo(Info.name,Info.email,Info.phone,Info.country,Info.city,Info.state,Info.address)
    setInfo({name:"",email:"",phone:"",country:"",city:"",state:"",address:""})
    props.showAlert("Info has been added successfully","success");
  }
  
  const getpic= async()=>{
    const config = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      }
    };
    const response  = await axios.get('http://localhost:5000/api/pic/fetchImage',config)
    // let base64Flag = 'data:image/jpg;base64,';
    // let imgstr = arrayBufferToBase64(response.data.data.data);
    // get the data as endoded in base 64 from the backend
    setpic(response.data);
    // console.log(pic);
    // console.log(base64Flag+imgstr);
    // console.log(response.data);
  }
  useEffect(() => {
    getpic();
    // console.log(toggle);
  },[handleImageonClick])
  // useCallback(
    //   () => {
      //     getpic();
      //   },
      //   [toggle],
      // )
      
      useEffect(() => {
          getprofile();
          // console.log(profile);
      },[updateprofile]);
      
      return (
        <>
    <div>
      <div className="showimage">
      </div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    {(pic!=="Not Found")?(<img src={`data:image/jpg;base64,${pic}`}  width={150} alt="Not Found" />):(<svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>)}
                        {/* <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg> */}
                      </span>
                      {/* <button
                        type="button"
                        className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Change
                      </button> */}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                      {(showimg!==null)?(img &&  <img src={showimg}/>):(<svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>)}
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a Profile Pic/Change a Profile Pic</span>
                            <input id="file-upload" name="testImage" type="file" className="sr-only" onChange={handleImageonChange} />
                          </label>
                          {/* <p className="pl-1">or drag and drop</p> */}
                        </div>
                        <p className="text-xs text-gray-500">In JPG Format Only</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleImageonClick}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            </div>
          </div>
          {(profile==null)?(
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                         Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={Info.name}
                        onChange={handleInfochange} 
                        minLength={5}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={Info.email}
                        onChange={handleInfochange}
                        minLength={5}
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone 
                      </label>
                      <input
                        type="phone"
                        name="phone"
                        id="phone"
                        value={Info.phone}
                        onChange={handleInfochange}
                        minLength={5}
                        autoComplete="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={Info.country}
                        onChange={handleInfochange}
                        minLength={5}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={Info.city}
                        onChange={handleInfochange}
                        minLength={5}
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="region"
                        value={Info.state}
                        onChange={handleInfochange}
                        minLength={5}
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={Info.address}
                        onChange={handleInfochange}
                        minLength={5}
                        autoComplete="address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleInfoclick}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>):(
          <>
          <button
          ref={ref}
          type="button"
          className="btn btn-primary my-2 d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Edit your profile
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Profile
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span>&#10005;</span></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleonchange}
                      id="ename"
                      name="ename"
                      aria-describedby="emailHelp"
                      value={proff.ename}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eemail"
                      onChange={handleonchange}
                      name="eemail"
                      value={proff.eemail}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ephone"
                      onChange={handleonchange}
                      name="ephone"
                      value={proff.ephone}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Country" className="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleonchange}
                      id="ecountry"
                      name="ecountry"
                      value={proff.ecountry}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleonchange}
                      id="ecity"
                      name="ecity"
                      value={proff.ecity}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleonchange}
                      id="eaddress"
                      name="eaddress"
                      value={proff.eaddress}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn bg-black text-white my-2 mx-2 hover:bg-green-600 active:bg-green-600"
                  data-bs-dismiss="modal"
                  ref={refclose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn bg-black text-white my-2 mx-2 hover:bg-green-600 active:bg-green-600"
                  onClick={handleonclick}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <Infocard id={profile._id} name={profile.name} email={profile.email} phone={profile.phone} country={profile.country} city={profile.city} state={profile.state} address={profile.address} updateprofile={updateprofile} profile={profile} showAlert={showAlert}/>
  </>)}
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  )
}

export default Dashboard