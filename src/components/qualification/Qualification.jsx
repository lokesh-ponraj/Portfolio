import React,{ useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    } 
 
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">QUALIFICATION</h2>
        <span className="section__subtitle">Till date</span>


        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className= {toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex "} onClick={() => toggleTab(1)}>
              
              <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div>
            <div className= {toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex "} onClick={() => toggleTab(2)}>
              <i className="uil uil-graduation-cap qualification__icon"></i>Experience
            </div>

            
          </div>

          {/* ******* Education infos  ******* */}
          <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active  qualification__content" : "qualification__content"}>
              
                <div className="qualification__data">
                  
                  
                  
                <div>
                      <h3 className="qualification__title">B.E.</h3>
                      <span className="qualification__subtitle">P.A.College of Engineering and Tech</span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> 2018 - 2022
                      </div>
                </div>
                <div>
                     <span className="qualification__rounder"></span>
                     <span className="qualification__line"></span>
                </div>
                
               
                </div>

                <div className="qualification__data">
                <div></div>
              
              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

                <div>
                      <h3 className="qualification__title">HSC</h3>
                      <span className="qualification__subtitle">R.G.Matric Higher Secondary School</span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> 2017-2018
                      </div>
                </div>

              
                </div>

                <div className="qualification__data">
                
              
              

                <div>
                      <h3 className="qualification__title">SSLC</h3>
                      <span className="qualification__subtitle">R.G Matric Higher Secondary School</span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> 2015-2016
                      </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
                </div>
            </div>

            
          {/* ******* Experience infos  ******* */}
            <div className={toggleState === 2 ? "qualification__content qualification__content-active  qualification__content" : "qualification__content"}>
              
              <div className="qualification__data">
                <div></div>
              <div>
                   <span className="qualification__rounder"></span>
                   <span className="qualification__line"></span>
              </div>
                
                
              <div>
                    <h3 className="qualification__title">B.E.</h3>
                    <span className="qualification__subtitle">P.A.College of Engineering and Tech</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i> 2018 - 2022
                    </div>
              </div>
              
              
             
              </div>

              <div className="qualification__data">
              
            
           

              <div>
                    <h3 className="qualification__title">HSC</h3>
                    <span className="qualification__subtitle">R.G.Matric Higher Secondary School</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i> 2017-2018
                    </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>

            
              </div>

              <div className="qualification__data">
                <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            
            

              <div>
                    <h3 className="qualification__title">SSLC</h3>
                    <span className="qualification__subtitle">R.G Matric Higher Secondary School</span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i> 2015-2016
                    </div>
              </div>
              
              </div>
          </div>




          </div>
        </div>
    </section>
  )
}

export default Qualification