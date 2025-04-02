import React, {useState} from "react";
import "./Homedoctor.css";

const Homedoctor = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const testimonials = [
        {
          id: "style-B65FD",
          quote: "Booking an online consultation was quick and easy. The doctor was very understanding and provided me with a personalized treatment plan. I feel much healthier and more confident now!",
          name: "Rohit, 35",
          product: "Online Consultation"
        },
        {
          id: "style-RAU56",
          quote: "I was struggling with constant fatigue, but after getting my blood test and consulting with the specialists, I finally got the right vitamins and lifestyle recommendations. Now, I feel more energetic than ever!",
          name: "Sachin, 40",
          product: "Wellness & Nutrition Plan"
        },
        {
          id: "style-Xrq8z",
          quote: "I had been ignoring my skin issues for a while, but this platform made it so easy to get expert advice. The prescribed skincare routine worked wonders, and my skin has never been clearer!",
          name: "Kajal, 28",
          product: "Dermatology Consultation"
        },
        {
          id: "style-LY4J2",
          quote: "After struggling with anxiety for years, I finally decided to try online therapy. My therapist has been incredibly supportive, and I’ve learned techniques that help me stay calm and focused every day.",
          name: "Dev, 38",
          product: "Mental Health Therapy"
        },
        {
          id: "style-l637p",
          quote: "I was worried about my high cholesterol levels, but the doctors provided me with a clear plan, including diet and medication options. Now, my health is back on track, and I feel so much better!",
          name: "Shreya, 50",
          product: "Heart Health Program"
        }
      ];
      
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      };


  return (
    <div className="homedoctor-container blocks">
      <div className="shortOffset-tilesstyle__OffsetTilesComponentHeadline-sc-ams4gs-1 kptVHS snipcss-YosCm">
        <span className=" md:text-6xl text-[25px] leading-[1.2] md:leading-[1.2]  text-black  font-[500]   uppercase">
          Expert-approved solutions,{" "}
          <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
          personalized to your health.
          </div>
        </span>
      </div>
    
      <div className="shortOffset-tilesstyle__InnerTileContainer-sc-ams4gs-2 gkoHKP snipcss-sYH3A">
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva !text-black">
            Advanced Healthcare Solutions
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva ">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                your schedule
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0" >
            Get access to clinically tested wellness solutions, diagnostic services, and expert-driven healthcare—all in one place.
            </p>
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo">
            Affordable health checkups & diagnostics Personalized treatment plans Backed by science, driven by care
            </p>
          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="/">
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG"> Find My Healthcare Solution</span>
            </button>
          </a>
          <div className="shortOffset-tilesstyle__MediaContainer-sc-ams4gs-4 jFQpTd">
            <span className="picturestyle__LazyLoadPictureWrapper-sc-yn6p7g-1 fBgVUB">
              <picture className="picturestyle__PictureWrapper-sc-yn6p7g-0 jIQBvI">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/homepage_card_1.png?v=1741699969"
                  alt="Picture of cards depicting losing weight"
                />
              </picture>
            </span>
          </div>
        </div>
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva ">
            Partnered for Your Well-Being
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                licensed providers
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0">
            We collaborate with leading insurance providers, hospitals, and diagnostic centers to ensure comprehensive & connected healthcare services.
            </p>
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo">
            Wide network of partnered hospitals & clinics Hassle-free insurance partners Integrated health services for a smoother experience.
            </p>
          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="/" >
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG">  Explore Our Healthcare Partners</span>
            </button>
          </a>
          <div className="shortOffset-tilesstyle__MediaContainer-sc-ams4gs-4 jFQpTd">
            <span className="picturestyle__LazyLoadPictureWrapper-sc-yn6p7g-1 fBgVUB">
              <picture className="picturestyle__PictureWrapper-sc-yn6p7g-0 jIQBvI">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/homepage_card_med_1_08cf0cff-98ef-4826-8012-9ea2934aa601.png?v=1742033047"
                  alt="Image"                 
                />
              </picture>
            </span>
          </div>
        </div>
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
            Medical Support at Your Fingertips
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                proven ingredients
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0">
            From telemedicine consultations to instant diagnostic results, manage your health needs with ease—anytime, anywhere.
            </p>
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo">
            Affordable, Quick and Quality care Online & In-person consultations at your convenienceSmart Health ATMs & Digital health kiosks for instant testing.
            </p>
          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="/healthcare">
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG">Get Started with Digital Healthcare</span>
            </button>
          </a>
          <div className="shortOffset-tilesstyle__MediaContainer-sc-ams4gs-4 jFQpTd">
            <span className="picturestyle__LazyLoadPictureWrapper-sc-yn6p7g-1 fBgVUB">
              <picture className="picturestyle__PictureWrapper-sc-yn6p7g-0 jIQBvI">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/homepage_doc_image_2.png?v=1741700486"
                  alt="Image"
                />
              </picture>
            </span>
          </div>
        </div>
        <div className="shortOffset-tilesstyle__OffsetTileContainer-sc-ams4gs-0 bpBxoP">
          <div className="shortOffset-tilesstyle__TileCopyContainer-sc-ams4gs-6 dEcTFg">
            <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
            Certified Experts, Trusted Healthcare
            </span>
            {/* <span className="typographystyle__Typography-sc-1r2rdgq-0 feKJva">
              <div className="shortOffset-tilesstyle__HighlightText-sc-ams4gs-5 dICZFB">
                pharmacies
              </div>
            </span> */}
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo !pb-0">
            Connect with certified medical professionals for expert advice, second opinions, and accurate diagnostics.
            </p>
            <p className="typographystyle__Typography-sc-1r2rdgq-1 shortOffset-tilesstyle__SubTextTypography-sc-ams4gs-3 dJKpaf dnlbgo">
            Instant consultation with experienced doctorsComprehensive Health Checkups & health monitoringServing Communities with Affordable & Accessible Care.
            </p>
          </div>
          <a rel="" tabIndex={-1} className="cAOSLu hlVOrJ" href="/">
            <button className="cAruRV dOQfTS" type="button">
              <span className="dKfXOG">Book My Consultation</span>
            </button>
          </a>

          <div className="testimonial-cardstyle__SlideOuterWrapper-sc-1f80141-1 eiAZRs" style={{ position: 'relative' }}>
  {/* Video Element - Stays fixed at the top-left */}
  <video
    className="testimonial-video"
    src="https://cdn.shopify.com/videos/c/o/v/a11eabec21b44e4aaf7ede428f75cca4.mp4" // Replace with your video URL
    
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: 'relative',
      top: '10px',
      left: '150px',
      width: '90px', // Adjust size as needed
      height: 'auto',
      borderRadius: '10px', // Optional: Adds rounded corners
      zIndex: 10, // Ensures the video stays on top
    }}
  />

  <div className="testimonial-cardstyle__SlideWrapper-sc-1f80141-2 ljFWsD keen-slider">
    {testimonials.map((testimonial, index) => (
      <div
        key={testimonial.id}
        className={`testimonial-cardstyle__SlideItemWrapper-sc-1f80141-5 cSThpo keen-slider__slide ${
          index === currentIndex ? 'active' : 'hidden'
        }`}
        id={testimonial.id}
        style={{
          display: index === currentIndex ? 'flex' : 'none',
          justifyContent: 'left',
          alignItems: 'center',
          textAlign: 'left',
          height: '100%',
          paddingTop: '10px',
        }}
      >
        <div
          className="testimonial-cardstyle__SlideItem-sc-1f80141-6 dIMjIe"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            width: '100%',
          }}
        >
          <p className="testimonial-cardstyle__Quote-sc-1f80141-8 bshcsw">{testimonial.quote}</p>
          <div className="testimonial-cardstyle__UserDetailWrapper-sc-1f80141-10 jGXlEb">
            <h3 className="!text-black">{testimonial.name}</h3>
            <h3 className="!text-black">{testimonial.product}</h3>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Slider Buttons */}
  <button className="testimonial-cardstyle__SlideNavigationButton-sc-1f80141-3 jPltbT" onClick={prevSlide}>
    &#10094;
  </button>
  <button className="testimonial-cardstyle__SlideNavigationButton-sc-1f80141-3 gSCsvg" onClick={nextSlide}>
    &#10095;
  </button>

  {/* Slider Dots */}
  <div className="testimonial-cardstyle__Footer-sc-1f80141-11 ObQZJ">
    <div className="testimonial-cardstyle__SlideIndicatorOuterWrapper-sc-1f80141-12 koQJgw">
      <div className="testimonial-cardstyle__SlideIndicatorWrapper-sc-1f80141-13 MZjm">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`testimonial-cardstyle__SlideIndicator-sc-1f80141-15 knJYxX ${
              index === currentIndex ? 'active' : 'small'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="testimonial-cardstyle__SlideIndicatorDot-sc-1f80141-14 lklafC" />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};
export default Homedoctor;
