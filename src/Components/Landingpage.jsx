import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Slick core styles
import 'slick-carousel/slick/slick-theme.css'; // Slick theme styles
import slide from '../assets/slide.gif'
import slid1 from '../assets/slid1.gif'
import slide0 from '../assets/galaxyai_f01_ft03_kv_pc_v2.0.webp'
import { Button, Card } from 'react-bootstrap';
import card1 from '../assets/card/card1 Galaxy s24 ultra.jpeg'
import card4 from '../assets/card/Samsung Galaxy Z Fold 4 card4.jpeg'
import card2 from '../assets/card/Render of Samsung Galaxy S24 Ultra, card2.jpeg'
import card3 from '../assets/card/card6.jpeg'




function Landingpage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section m-3">
        <h1 style={{
          backgroundImage: 'linear-gradient(to right, rgb(255, 92, 92), rgb(255, 174, 0))',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text', // For Safari compatibility
          color: 'transparent', // Makes the text fill transparent to show gradient
        }}>Welcome to Samsung</h1>
        <p>Explore the latest innovations in technology.</p>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container m-5">
        <Slider {...settings}>
          <div>
            <img
              src={slide}
              alt="Slide 1"
              style={{ width: '100%', height: '80vh', borderRadius: '10px', }}
            />
            <p style={{ marginTop: '-350px', marginLeft: '55px', color: 'white', fontSize: '50px' }}>samsung </p><p style={{ marginTop: '-30px', marginLeft: '55px', color: 'white', fontSize: '50px' }}>Galaxy s24 ultra</p>
          </div>
          <div>
            <img
              src={slid1}
              alt="Slide 2"
              style={{ width: '100%', height: '80vh', borderRadius: '10px' }}
            />
          </div>
          <div>
            <img
              src={slide0}
              alt="Slide 3"
              style={{ width: '100%', height: '80vh', borderRadius: '10px' }}
            />
          </div>
        </Slider>
      </div>


      <div className='text-center'>
        <h3>This Week’s Highlights</h3>
      </div>


      {/* Product Highlights Section */}

      <div className="product-highlights">
        <h2>Explore Our Latest Products</h2>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
            <img
              src={card1}
              alt="Galaxy s24 ultra"
              className="product-image"
            />
            <h3>Galaxy s24 ultra</h3>
            <p>Experience ultimate clarity and detail in 8K resolution..</p>
            <Button className='mb-2' variant="dark">Buy Now</Button>
          </div>
          {/* Product 2 */}
          <div className="product-card">
            <img
              src={card4}
              alt="Samsung Galaxy Z Fold 4"
              className="product-image"
            />
            <h3>Samsung Galaxy Z Fold 4</h3>
            <p>The compact foldable phone with innovative features</p>
            <Button variant="dark">Buy Now</Button>
          </div>
          {/* Product 3 */}
          <div className="product-card">
            <img
              src={card2}
              alt="Render of Samsung Galaxy S24 Ultra"
              className="product-image"
            />
            <h3>Render of Samsung Galaxy S24 Ultra</h3>
            <p>Experience ultimate clarity.</p>
            <Button variant="dark">Buy Now</Button>
          </div>
          {/* Product 4 */}
          <div className="product-card">
            <img
              src={card3}
              alt=" Galaxy Book3 Ultra"
              className="product-image"
            />
            <h3> Galaxy Book3 Ultra</h3>
            <p>Powerful performance in a sleek and lightweight design</p>
            <Button variant="dark">Buy Now</Button>
          </div>
        </div>
      </div>


      <div className='text-center fw-bold'>
        <h2>CIRCLE TO SEARCH</h2>
        <h4>Circle it to search on the big screen1</h4>
      </div>

      {/* Video Section */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            objectFit: 'cover',
          }}
        >
          <source
            src="https://images.samsung.com/is/content/samsung/assets/in/2407/galaxyai/galaxyai_f02-02_ft03_circle-to-search_pc_v2.0.mp4"
            type="video/mp4"
          />

        </video>
      </div>


      <div className='text-center m-5  fw-bold'>
        <h2>FlexCam with auto zoom. </h2>
        <h4>Capture your best angle3</h4>
      </div>

      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            objectFit: 'cover',
          }}
        >
          <source
            src="https://images.samsung.com/is/content/samsung/assets/in/2407/galaxyai/galaxyai_f03_ft03_flexcam_pc_v2.0.mp4"
            type="video/mp4"
          />

        </video>
      </div>


    </>
  );
}

export default Landingpage;