import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";

function Products() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="products-section" id={"Products"}>
      <div className="industries-served">
        <div className="scope">
          <div className={"scope-title"}>INDUSTRIES SERVED</div>
          {/*<div className={"scope-intro"}>We recognize the importance of the Industries and their requirements of inputs.*/}
          {/*  Thus, in turn, it is our endeavor to provide services to most of the pioneers of the said Industry Verticals*/}
          {/*  from any of our Business Verticals. Hence, offering a composite package of products and enhanced services.*/}
          {/*</div>*/}
        </div>
        <div className="industries-served-info">
          <div className="industry-logo">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 110.85">
              <title>paint-roller-bucket</title>
              <path
                d="M66.15,45.69a2.29,2.29,0,0,1,1.43,2.12v1.71c0,.1,0,.2,0,.3s0,.21,0,.31V95a2.19,2.19,0,0,1-.17.85,14.74,14.74,0,0,1-3.6,5.88,22.67,22.67,0,0,1-6.38,4.39c-6.6,3.17-15.18,4.75-23.7,4.72s-17-1.65-23.49-4.89a20.64,20.64,0,0,1-5.9-4.22,14.7,14.7,0,0,1-3.52-6.1,2.13,2.13,0,0,1-.09-.71V52.1a2.58,2.58,0,0,1-.08-.26C-1.92,40.76,3.34,32.57,11.91,27.7a41.06,41.06,0,0,1,17-4.91A45.22,45.22,0,0,1,47,25c9.31,3.25,16.82,9.86,18.75,20.21.13.16.26.32.37.47ZM52.17,15H50.3a.57.57,0,0,1-.56-.57V11a.57.57,0,0,1,.56-.57h1.87V7.72a7.65,7.65,0,0,1,.59-2.95A7.54,7.54,0,0,1,54.41,2.3l0,0A7.73,7.73,0,0,1,59.89,0H107a7.73,7.73,0,0,1,7.72,7.72v2.43h.41a7.78,7.78,0,0,1,2.94.58,8,8,0,0,1,2.51,1.68,7.84,7.84,0,0,1,1.68,2.52,7.56,7.56,0,0,1,.59,2.94V32.44a7.6,7.6,0,0,1-.59,2.94,7.69,7.69,0,0,1-1.65,2.48l0,0a7.75,7.75,0,0,1-2.5,1.68,7.65,7.65,0,0,1-3,.59c-6.83,0-13.69.09-20.51,0a29.43,29.43,0,0,0-4.1.11,7.11,7.11,0,0,0-3.33,1.1,3.55,3.55,0,0,0-.63.59,3.33,3.33,0,0,0-.49.73,4.83,4.83,0,0,0-.37,1,7.26,7.26,0,0,0-.19,1.15v15.1h2.14a5.16,5.16,0,0,1,3.65,1.51,5.32,5.32,0,0,1,1.12,1.68,5.17,5.17,0,0,1,.39,2V92.5a5.16,5.16,0,0,1-5.16,5.15h-9a5.17,5.17,0,0,1-2-.39,5.06,5.06,0,0,1-1.64-1.09l0,0a5.33,5.33,0,0,1-1.12-1.67,5.2,5.2,0,0,1-.39-2V65.07a5.14,5.14,0,0,1,1.51-3.65,5.37,5.37,0,0,1,1.68-1.12,5.17,5.17,0,0,1,2-.39H81c0-5-.19-10.36,0-15.31a12.51,12.51,0,0,1,.35-2.12,9.37,9.37,0,0,1,.68-1.82l0,0A8.16,8.16,0,0,1,83.16,39a8.48,8.48,0,0,1,1.39-1.28l0,0c3-2.17,6.73-2.12,10.09-2.06,6.69-.22,13.75,0,20.49,0a3.12,3.12,0,0,0,1.22-.24,3.27,3.27,0,0,0,1.74-1.74,3.12,3.12,0,0,0,.24-1.22V17.87a3.16,3.16,0,0,0-.94-2.26,3.18,3.18,0,0,0-1-.7,3.13,3.13,0,0,0-1.22-.25h-.41v1.8a7.65,7.65,0,0,1-.59,2.95,7.74,7.74,0,0,1-1.68,2.51A7.92,7.92,0,0,1,110,23.6a7.64,7.64,0,0,1-3,.58H59.89A7.67,7.67,0,0,1,54.47,22l0,0a7.79,7.79,0,0,1-1.68-2.51,7.65,7.65,0,0,1-.59-2.95V15ZM107,4.51H59.89a3.22,3.22,0,0,0-1.21.24,3.42,3.42,0,0,0-1,.71,3.18,3.18,0,0,0-.7,1,3.12,3.12,0,0,0-.24,1.22v8.74a3.12,3.12,0,0,0,.24,1.22,3.27,3.27,0,0,0,1.74,1.74,3.12,3.12,0,0,0,1.22.24H107a3.12,3.12,0,0,0,1.22-.24A3.27,3.27,0,0,0,110,17.68a3.13,3.13,0,0,0,.25-1.22V7.71A3.13,3.13,0,0,0,110,6.49a3.27,3.27,0,0,0-1.74-1.74A3.12,3.12,0,0,0,107,4.51ZM34.15,36.33c8.85,0,16.91,1.31,22.8,3.42a33.45,33.45,0,0,1,3.11,1.3c-2.77-5.87-8.1-9.83-14.39-12A41.05,41.05,0,0,0,29.2,27,36.93,36.93,0,0,0,14,31.4c-4.83,2.75-8.38,6.76-9.43,11.91a24.92,24.92,0,0,1,6.83-3.56c5.89-2.12,14-3.42,22.8-3.42ZM63,56.88a23.54,23.54,0,0,1-4,2.18,13,13,0,0,0-.94,1.81C56,66,59.34,75.18,53,77.18a5.17,5.17,0,0,1-6.55-5.24c-.07-8.82-9.19-7.88-9,2a50.52,50.52,0,0,0,.18,6.42c.38,3.88,2.34,11.79-4.37,11.78-2.9,0-5.92-2.5-5.89-6.92l-.57-10.81c-.86-16.13-7.42-4.13-12-4.36-3.26-.17-4.46-5.3-5.48-9.33l-.49-1.92a23.56,23.56,0,0,1-3.51-2V94.67a10.28,10.28,0,0,0,2.37,3.94,16.4,16.4,0,0,0,4.63,3.29c5.89,2.93,13.66,4.39,21.47,4.42s15.77-1.4,21.75-4.27a18.15,18.15,0,0,0,5.09-3.49A10.31,10.31,0,0,0,63,94.67V56.88ZM55.41,44c-5.39-1.94-12.9-3.14-21.26-3.14S18.28,42.09,12.89,44c-4.7,1.69-7.61,3.76-7.61,5.79s2.91,4.1,7.61,5.79c5.39,2,12.9,3.15,21.26,3.15S50,57.56,55.41,55.61c3.17-1.14,5.52-2.44,6.72-3.8a2,2,0,0,1,0-.43,25.69,25.69,0,0,0-.18-3.77A18,18,0,0,0,55.41,44Z"/>
            </svg>
            <div className={"industry-logo-info"}>
              PAINT, COATINGS AND RESINS
            </div>
            <div className={"industry-logo-details"}>
              Paint, Coatings, Inks and Resins is our forte. Being the renowned Chemical Supplier in Surat, we enjoy a
              dominating position in this industry with excellent penetration and market share.
            </div>
          </div>
          <div className="industry-logo">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.4">
              <title>pharma</title>
              <path className="cls-1"
                    d="M120.8,40A19.29,19.29,0,0,1,87.64,59.55L120.8,40ZM36.6,10A20.07,20.07,0,0,1,63.94,2.67h0A20.08,20.08,0,0,1,71.26,30c-11.38,19.7-22.73,39.21-34.1,58.92h0A20,20,0,0,1,10,96.22h0A20,20,0,0,1,2.66,69h0C14,49.28,25.2,29.73,36.6,10ZM47.89,61.55,21.17,46.13,6.67,71.24h0a15.5,15.5,0,0,0,5.64,21.08h0a15.48,15.48,0,0,0,21.08-5.65h0l14.5-25.12ZM90.31,89.4A19.29,19.29,0,0,1,63.76,115a19,19,0,0,1-6.61-6L90.31,89.4Zm-34.06-.63a19.27,19.27,0,0,1,26.2-7.52,19,19,0,0,1,6.23,5.49L55.63,106.22a19.16,19.16,0,0,1,.62-17.45ZM86.74,39.36a19.29,19.29,0,0,1,32.44-2L86.11,56.83a19.3,19.3,0,0,1,.63-17.47Z"/>
            </svg>
            <div className={"industry-logo-info"}>
              PHARMACEUTICAL INDUSTRIES
            </div>
            <div className={"industry-logo-details"}>
              Our products are used extensively in pharmaceutical preparations and cosmetics. Sodium
              benzoate and Benzoic acid are well known and widely used preservative for pharmaceutical products.
            </div>
          </div>
          <div className="industry-logo">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 120.79 122.88">
              <g>
                <path className="st0"
                      d="M103.87,44.5h-48H43.39l1.01,4.9c18.68,1.25,32.45,9.27,39.21,17.08c2.6,3,4.42,6.21,5.37,9.34 c1.39,4.58,1.05,9.04-1.13,12.96c-0.28,0.51-0.59,1-0.92,1.48c0.41,0.88,0.72,1.76,0.97,2.61c0.08,0.23,0.16,0.47,0.22,0.71l0.01,0 c0.32,1.13,0.48,2.23,0.48,3.32c0,0.38-0.02,0.26-0.04,0.59l0.01,0.27h0.03c0-0.18,0-0.29,0,0c0,0.28-0.01,0.57-0.03,0.86h15.23 l12.55-54.1H103.87L103.87,44.5L103.87,44.5z M3.19,108.88c23.89-0.04,47.77-0.07,71.66,0c1.42,0.01,2.59,1.17,2.59,2.59 c0,3.86-1.62,11.42-10.35,11.42c-18.71,0-37.42,0-56.13,0c-8.73,0-10.35-7.55-10.35-11.42C0.6,110.04,1.77,108.88,3.19,108.88 L3.19,108.88L3.19,108.88z M56.69,69.07c2.2,0,3.98,1.78,3.98,3.98c0,2.2-1.78,3.98-3.98,3.98c-2.2,0-3.98-1.78-3.98-3.98 C52.71,70.85,54.49,69.07,56.69,69.07L56.69,69.07L56.69,69.07z M21.98,69.35c2.2,0,3.98,1.78,3.98,3.98c0,2.2-1.78,3.98-3.98,3.98 c-2.2,0-3.98-1.78-3.98-3.98S19.78,69.35,21.98,69.35L21.98,69.35L21.98,69.35z M39.19,65.55c2.2,0,3.98,1.78,3.98,3.98 c0,2.2-1.78,3.98-3.98,3.98c-2.2,0-3.98-1.78-3.98-3.98C35.22,67.33,37,65.55,39.19,65.55L39.19,65.55L39.19,65.55z M71.47,86.14 H7.41c-4.07,0-7.41-3.33-7.41-7.4l0,0c0-10.54,21.01-18.2,38.64-18.38C73.35,60.01,88.92,86.14,71.47,86.14L71.47,86.14 L71.47,86.14z M77.27,96.29c0.11,0.19,0.17,0.38,0.17,0.6c0,0.13-0.01,0.28-0.01,0.43c0.01,0.15,0.01,0.29,0.01,0.43 c0,0.21-0.06,0.41-0.17,0.6c-0.59,2.57-2.95,5.93-10.18,5.93c-18.71,0-37.42,0-56.13,0c-7.24,0-9.59-3.36-10.18-5.93 c-0.11-0.19-0.17-0.38-0.17-0.6c0-0.13,0.01-0.28,0.01-0.43c-0.01-0.15-0.01-0.29-0.01-0.43c0-0.21,0.06-0.41,0.17-0.6 c0.59-2.57,2.94-5.93,10.18-5.93h29.07l10.72,11.07l10.65-11.07h5.7C74.33,90.37,76.68,93.73,77.27,96.29L77.27,96.29L77.27,96.29z M88.57,97.75c0.02,0.87,0.03,0.32,0.03,0H88.57L88.57,97.75z M43.48,22.3h31.41l3.42-15.2c0.99-3.67,3.87-5.72,8.95-7.1 c4.31,0,8.62,0,12.92,0c1.97,0.39,3.11,1.76,3.41,4.12c0,1.33,0,2.65,0,3.98c-0.65,2.17-1.96,3.05-3.98,3.41H88.83l-2.29,10.79 h29.72c2.5,0,4.53,2.04,4.53,4.53v5.15c0,2.5-2.04,4.53-4.53,4.53H43.48c-2.5,0-4.53-2.04-4.53-4.53v-5.15 C38.95,24.34,40.99,22.3,43.48,22.3L43.48,22.3L43.48,22.3z M86.38,121.89h5.41h3.12c3.64-0.78,6.17-2.5,7.24-6.11l0.82-8.58H87.92 c0.45,1.35,0.69,2.78,0.69,4.27C88.61,114.23,88.1,118.1,86.38,121.89L86.38,121.89z"/>
              </g>
            </svg>
            <div className={"industry-logo-info"}>
              FOOD INDUSTRY
            </div>
            <div className={"industry-logo-details"}>
              Our product mainly Sodium benzoate used food as preservative with an E number of E211.
              Sodium benzoate is most suitable for use as an antimicrobial agent in foods and beverages.
            </div>
          </div>
        </div>

      </div>
      <hr className={"products-hr"} width="80%"/>
      <div className="products-info">
        <div className={"scope-title"}>PRODUCTS</div>
        <div className={"slider-container"}>
          <Slider {...sliderSettings} className="industries-slider">
            <Link to={'/swk-industries/sodium-benzoate'} style={{textDecoration:'none', color:'white'}}>
            <div className="industries-slider__slider part">
              <div className={"product-info"}>
                SODIUM BENZOATE
              </div>
            </div>
            </Link>
            <Link to={'/swk-industries/benzoic-acid'} style={{textDecoration:'none', color:'white'}}>
            <div className="industries-slider__slider part">
              <div className={"product-info"}>
                BENZOIC ACID
              </div>
            </div>
          </Link>
            <Link to={'/swk-industries/titanium-dioxide'} style={{textDecoration:'none', color:'white'}}>
            <div className="industries-slider__slider part">
              <div className={"product-info"}>
                TITANIUM DIOXIDE
              </div>
            </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Products;