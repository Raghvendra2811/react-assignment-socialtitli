import React, { useRef, useState } from "react";
import "../styles/Teams.css";
import { useEffect } from "react";

const Teams = ({data}) => {
  
  let [showModal, setshowModal] = useState(false);
  let [modalData, setModalData] = useState({});
  let ref = useRef(0);
//   console.log(ref.current);

  const openModal = (index) => {
    setModalData(data[index]);
    setshowModal(!showModal);
  };



  const moveSlider=(value)=>{
    // console.log(value)
    if(ref.current===0&&value===-1){
      ref.current=5
    }
    ref.current=Math.abs(ref.current+value)%5
    console.log(ref.current)
    let slider = document.getElementsByName("slider");
    slider[ref.current].checked = true;
  }


  useEffect(() => {
    setTimeout(() => {
      let slider = document.getElementsByName("slider");

      // console.log(slider);

      setInterval(() => {
        if (ref.current === slider.length) {
          ref.current = 0;
        }
        slider[ref.current].checked = true;
        ref.current = ref.current + 1;
        // console.log(ref.current);
      }, 3000);
    }, 2000);
  }, []);

  return (
    <div>
        <i onClick={()=>{moveSlider(-1)}} class="fa-solid fa-arrow-left"></i>
      <div class="container">
        <input type="radio" name="slider" class="d-none" id="s2" checked />
        <input type="radio" name="slider" class="d-none" id="s3" />
        <input type="radio" name="slider" class="d-none" id="s1" />
        <input type="radio" name="slider" class="d-none" id="s4" />
        <input type="radio" name="slider" class="d-none" id="s5" />

        <div
          onClick={() => {
            openModal(ref.current);
          }}
          class="cards"
        >
          <label for="s1" id="slide1">
            <div class="card">
              <div class="image">
                <img src={data[0].image} alt="" />
              </div>
              <div class="infos">
                <h2>{data[0].name}</h2>
                <h2>{data[0].post}</h2>
              </div>
            </div>
          </label>

          <label for="s2" id="slide2">
            <div class="card">
              <div class="image">
                <img src={data[1].image} alt="" />
              </div>
              <div class="infos">
                <h2>{data[1].name}</h2>
                <h2>{data[1].post}</h2>
              </div>
            </div>
          </label>

          <label for="s3" id="slide3">
            <div class="card">
              <div class="image">
                <img src={data[2].image} alt="" />
              </div>
              <div class="infos">
                <h2>{data[2].name}</h2>
                <h2>{data[2].post}</h2>
              </div>
            </div>
          </label>

          <label for="s4" id="slide4">
            <div class="card">
              <div class="image">
                <img src={data[3].image} alt="" />
              </div>
              <div class="infos">
                <h2>{data[3].name}</h2>
                <h2>{data[3].post}</h2>
              </div>
            </div>
          </label>

          <label for="s5" id="slide5">
            <div class="card">
              <div class="image">
                <img src={data[4].image} alt="" />
              </div>
              <div class="infos">
                <h2>{data[4].name}</h2>
                <h2>{data[4].post}</h2>
              </div>
            </div>
          </label>
        </div>
      </div>
      <i onClick={()=>{moveSlider(1)}} class="fa-solid fa-arrow-right"></i>

      {showModal ? (
        <div id="teamModal">
          <div></div>
          <div id="detailsModal">
            <h1>{modalData.name}</h1>
            <h2>{modalData.post}</h2>
            <h3>{modalData.para1}</h3>
            <h3>{modalData.para2}</h3>
            <h3>{modalData.para3}</h3>
          </div>
          <img src={modalData.image} alt="-userimage" />
          <i
            onClick={() => {
              openModal(ref.current);
            }}
            class="fa-solid fa-xmark"
          ></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Teams;
