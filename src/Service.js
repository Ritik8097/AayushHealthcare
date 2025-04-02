import React from 'react'
import './service.css';

const Service = () => {
  return (
    <>
    <div className="service-title ">
    
    <h2>OUR SERVICES</h2>
   
  </div>
    <div  
    style={{
          backgroundImage: "url('https://cdn.shopify.com/s/files/1/0653/9830/9053/files/2_jpg.png?v=1740143293')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        
          scrollSnapType:"x mandatory"
        }} className="d-flex  overflow-scroll   css-Pk3Di  justify-start md:justify-center md:flex-wrap relative z-[5] md:min-h-[100vh] min-h-auto">
   
    <div className="work-bx"> 
      <div className="work-num-bx">01</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">Children's Healthcare</h5>
          <p>Comprehensive care for pediatric patients, ensuring the health and happiness of your little ones.</p>
        </div>
        {/* <a href="/verticals/intensive-care-and-general-medicine/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
    <div className="work-bx">
      <div className="work-num-bx">02</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">Women's Healthcare</h5>
          <p>Specialized services addressing the unique health needs of women at every stage of life.</p>
        </div>
        {/* <a href="/verticals/child-care/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
    <div className="work-bx">
      <div className="work-num-bx">03</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">Laparoscopic<br />Surgery</h5>
          <p>Minimally invasive procedures for abdominal and thoracic conditions, promoting quicker recovery times.</p>
        </div>
        {/* <a href="/verticals/laparoscopic-surgery/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
    <div className="work-bx">
      <div className="work-num-bx">04</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">Urology <br />Procedure</h5>
          <p> Expert care for kidney, bladder, and prostate issues, utilizing the latest medical advancements.</p>
        </div>
        {/* <a href="/verticals/urology/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
    <div className="work-bx">
      <div className="work-num-bx">05</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">Orthopaedic <br />Surgery</h5>
          <p> Treatment for bones, ligaments, and muscles, restoring mobility and quality of life.</p>
        </div>
        {/* <a href="/verticals/orthopaedics/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
    <div className="work-bx">
      <div className="work-num-bx">06</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">ENT &amp; Airway<br />Surgery</h5>
          <p>Advanced endoscopic and microsurgical techniques for ear, nose, and throat conditions.</p>
        </div>
        {/* <a href="/verticals/ent-surgery/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
    <div className="work-bx">
      <div className="work-num-bx">07</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">Cancer Care</h5>
          <p>Comprehensive oncology services, providing support and treatment for various types of cancer.</p>
        </div>
        {/* <a href="/verticals/cancer-care/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
    <div className="work-bx">
      <div className="work-num-bx">08</div>
      <div className="for">
        <div className="work-content">
          <h5 className=" text-dark mb-10">Day Care<br />Surgeries</h5>
          <p>Efficient and safe day-care surgical procedures for a range of conditions.</p>
        </div>
        {/* <a href="/verticals/day-care/" className="btn btn-success">View <i className="btn-icon-bx fas fa-chevron-right" /></a> */}
      </div>
    </div>
  </div>
  </>
  )
}

export default Service;

