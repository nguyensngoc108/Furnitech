import React from "react";
import Section from "../components/Section.js";

function LandingPage() {
  return (
    <>
      <section className="w-full h-auto bg-brown-400 bg-center">
        <section
          className="w-full max-w-screen bg-cover bg-center h-screen"
          style={{ backgroundImage: `url('./assets/Container.jpg')` }}
        >
          <section className="flex  flex-col justify-center items-center">
            <section
              className="
              hero  flex flex-col justify-center items-start  font-DM Sans gap-10 
              w-[868px] p-[60px]       
              absolute top-[290px] left-[312px]       
              rounded-[40px] border border-[rgba(255,255,255,0.30)] bg-gradient-to-r from-[rgba(255,255,255,0.10)] via-[rgba(255,255,255,0.30)] to-[rgba(255,255,255,0.60)] backdrop-blur-[16px]
          "
            >
              <div
                className=" 
              flex flex-col items-start gap-4 self-stretch    
            "
              >
                {/* Frame 6 */}

                <div className="flex flex-col items-start gap-4">
                  <h1 className="text-[68px] font-sans font-bold leading-[1.1] text-orange-500">
                    Perfect Pieces{" "}
                    <span className="text-heading-black text-[68px] font-dm-sans font-bold leading-[110%]">
                      for
                    </span>
                    <span
                      className="
                  flex 
                  text-heading-black text-[68px] font-dm-sans font-bold leading-[110%]"
                    >
                      Every Corner You Love.
                    </span>
                  </h1>
                  <h2
                    className="

              text-neutral-500 font-medium text-2xl leading-[1.1] font-dm-san
              "
                  >
                    where quality, style, and your vision all come together.
                  </h2>
                </div>
              </div>

              {/* Master Button */}

              <a
                className="
              flex w-[195px] px-9 py-6 justify-center items-center gap-2
            bg-brown rounded-[40px]
              "
                href="/"
              >
                <h1 className="font-DM Sans text-white text-center text-[18px] font-bold leading-[18px]">
                  Explore
                </h1>
                <img
                  className="
                flex w-[18px] h-[18px] px-[2.654px] py-[2.25px] justify-center items-center shrink-0
                "
                  src="./assets/Arrow Right.png"
                  alt="ArrowRight"
                />
              </a>
            </section>

            {/* Product Details */}

            <section
              className="
            inline-flex flex-col items-end gap-2
            absolute top-[771px] left-[1348px]
          "
            >
              <h1
                className="
              self-stretch
              text-black text-right text-[24px] font-semibold leading-[1.1]
              font-DM Sans
            "
              >
                H&D Flower Lamp
              </h1>

              {/* Frame 8 */}
              <div
                className="
              flex items-center gap-6
            "
              >
                {/* Frame 9 */}
                <div
                  className="
                flex pr-[6px] pl-[12px] justify-center items-center gap-[10px]
                rounded-[100px] bg-white/25
              "
                >
                  <h2 className="text-[14px] font-DM Sans text-orange-400 font-extrabold leading-[1.1] [font-variant-ligatures:normal]">
                    -20%
                  </h2>
                </div>

                <h1
                  className="
                flex w-[134px] h-[28px] flex-col justify-center
                 text-black text-right font-dm-sans text-3xl font-extrabold leading-tight 
              "
                >
                  199.99$
                </h1>
              </div>
            </section>
          </section>
        </section>
        {/* Why Choosing US */}

        <section
          className="
          flex w-full py-[80px] px-[350px] justify-center items-center gap-[92px]
          bg-brown
        "
        >
          <h1
            className="
            w-[319.786px] shrink-0
            text-white font-DM Sans text-[40px]  font-bold leading-[1.25]
          
          "
          >
            <span className="block">Why</span>
            Choosing Us
          </h1>

          <div
            className="
            flex justify-center items-start gap-[60px] flex-1
          "
          >
            <div
              className="
              flex flex-col justify-center items-start gap-4  
            "
            >
              <h1
                className="
                text-white font-DM Sans
                text-[28px]  font-bold leading-normal tracking-[0.4px]
              "
              >
                Unique facilities
              </h1>

              <h2
                className="
                w-[240px] text-white font-DM Sans text-dm-base font-normal
              "
              >
                Furnitech offers personalized recommendations, easy checkout,
                and top-tier customer support to ensure a seamless shopping
                experience.
              </h2>
            </div>

            {/* Frame 3744 (Affordable Price) */}
            <div
              className="
              flex flex-col justify-center items-start gap-4 
            "
            >
              <h1
                className="
              text-white 
                text-[28px]  font-bold leading-normal tracking-[0.4px]
              "
              >
                Affordable Price
              </h1>
              <h2
                className="
                  w-[240px] text-white font-DM Sans text-dm-base font-normal

              "
              >
                We provide high-quality products at competitive prices, with
                clear pricing and regular promotions to offer great value.
              </h2>
            </div>

            {/* Frame 3745 (Wide Choices) */}

            <div
              className="
              flex flex-col justify-center items-start gap-4 
            "
            >
              <h1
                className="
                text-white font-DM Sans
                text-[28px]  font-bold leading-normal tracking-[0.4px]
              "
              >
                Wide Choices
              </h1>
              <h2
                className="
                w-[240px] text-white font-DM Sans text-dm-base font-normal

              "
              >
                Explore our wide range of furniture and home decor, updated
                regularly to meet every style and need.
              </h2>
            </div>
          </div>
        </section>

        {/* Slide 2 */}
        <section className="flex  flex-col justify-center items-center ">
          {/* Header 2 */}
          {/* <div>
            <Header />
          </div> */}

          {/* Categories By Spaces */}
          <section
            className="
            flex w-[1220px] pt-[140px] flex-col items-center gap-20
          "
          >
            {/* Frame 12 */}
            <div
              className="
              flex w-[850px] flex-col items-center gap-6
            "
            >
              <h1
                className="
                self-stretch 
                text-black text-center font-DM Sans text-[56px] font-bold leading-[125%]
              "
              >
                Beautiful Spaces That{" "}
                <span className="block">
                  <span
                    className="
                    text-orange-400
                    font-DM Sans text-[56px] font-bold leading-[125%]
                "
                  >
                    Inspire
                  </span>{" "}
                  Every Moment
                </span>
              </h1>

              <h1
                className="
                w-[613.671px]
                text-neutral-text-gray text-center font-DM Sans text-5 font-normal leading-[150%]
              "
              >
                Discover furniture crafted to transform every room into a space{" "}
                <span className="block">
                  that inspires, comforts, and reflects your unique style.
                </span>
              </h1>
            </div>

            {/* Frame 13 */}
            <section className="flex items-center gap-7 self-stretch">
              {/* Room card 1 */}
              <div className="flex p-4 flex-col items-start gap-6 flex-1">
                <img
                  src="./assets/C1.svg"
                  alt="Description 1"
                  className="h-[220px] self-stretch rounded-[10px] bg-lightgray bg-cover bg-center bg-no-repeat "
                />
                {/* Frame 15 */}
                <div className="flex flex-col items-start gap-3 self-stretch">
                  <h1
                    className="
                      self-stretch
                      text-black font-DM Sans text-[20px]  font-bold leading-5
                  "
                  >
                    Living Room Comfort
                  </h1>

                  <h2
                    className="
                    self-stretch
                    text-gray font-DM Sans text-[18px] font-normal  leading-[30px]
                  "
                  >
                    Transform your living room into the heart of your home with
                    stylish, cozy furniture that invites relaxation and
                    connection.
                  </h2>
                </div>
              </div>
              {/* Room card 2 */}
              <div className="flex p-4 flex-col items-start gap-6 flex-1 self-stretch">
                <img
                  src="./assets/C2.svg"
                  alt="Description 2"
                  className="h-[220px] self-stretch rounded-[10px] bg-lightgray bg-cover bg-center bg-no-repeat "
                />
                {/* Frame 15 */}
                <div className="flex flex-col items-start gap-3 self-stretch">
                  <h1
                    className="
                      self-stretch
                      text-black font-DM Sans text-[20px]  font-bold leading-5
                  "
                  >
                    Bedroom Bliss
                  </h1>

                  <h2
                    className="
                    self-stretch
                    text-gray font-DM Sans text-[18px] font-normal  leading-[30px]
                  "
                  >
                    Create a peaceful retreat with pieces that bring warmth,
                    comfort, and style to your personal sanctuary.
                  </h2>
                </div>
              </div>
              {/* Room card 3 */}
              <div className="flex p-4 flex-col items-start gap-6 flex-1">
                <img
                  src="./assets/C3.svg"
                  alt="Description 1"
                  className="h-[220px] self-stretch rounded-[10px] bg-lightgray bg-cover bg-center bg-no-repeat "
                />
                {/* Frame 15 */}
                <div className="flex flex-col items-start gap-3 self-stretch">
                  <h1
                    className="
                      self-stretch
                      text-black font-DM Sans text-[20px]  font-bold leading-5
                  "
                  >
                    Workplace Essentials
                  </h1>

                  <h2
                    className="
                    self-stretch
                    text-gray font-DM Sans text-[18px] font-normal  leading-[30px]
                  "
                  >
                    Design a workspace that enhances productivity and
                    creativity, with furniture that’s functional, stylish, and
                    tailored to your needs.
                  </h2>
                </div>
              </div>
              {/* Room card 4 */}
              <div className="flex p-4 flex-col items-start gap-6 flex-1">
                <img
                  src="./assets/C4.svg"
                  alt="Description 1"
                  className="h-[220px] self-stretch rounded-[10px] bg-lightgray bg-cover bg-center bg-no-repeat "
                />
                {/* Frame 15 */}
                <div className="flex flex-col items-start gap-3 self-stretch">
                  <h1
                    className="
                      self-stretch
                      text-black font-DM Sans text-[20px]  font-bold leading-5
                  "
                  >
                    Dining Delights
                  </h1>

                  <h2
                    className="
                    self-stretch
                    text-gray font-DM Sans text-[18px] font-normal  leading-[30px]
                  "
                  >
                    Enhance your dining experience with furniture that elegance,
                    functionality, and comfort, perfect for every meal and
                    gathering.
                  </h2>
                </div>
              </div>
            </section>
          </section>
          {/* Recommended */}
          <section className="flex w-[1220px] py-[140px] flex-col items-start gap-20">
            {/* Frame 14 */}
            <div className="flex w-[613.671px] flex-col items-start gap-6">
              <h1
                className="
                  self-stretch
                  text-black font-DM Sans text-[56px] font-bold leading-[70px]
                "
              >
                Recommended For You
              </h1>

              <h2
                className="
                  self-stretch 
                  text-neutral-text-gray font-DM Sans text-[20px] font-normal leading-[30px]
                "
              >
                Explore our handpicked selections crafted to match your style
                and elevate every corner of your home.
              </h2>
            </div>

            {/* Frame 17 */}
            <section className="flex flex-col items-center gap-[60px] self-stretch">
              {/* Tab */}
              <div
                className="
                  flex justify-center items-start self-stretch
                  transition-all duration-300 ease-out 
                  text-brown-1000
                "
              >
                {/* Categories Tab */}
                <ul className="flex-col w-[105px] flex items-center gap-3 font-semibold">
                  <li>
                    <a href="#Furniture" class="hover:text-brown text-lg">
                      Furniture
                    </a>
                  </li>
                </ul>
                <ul className="flex-col w-[105px] flex items-center gap-3">
                  <li>
                    <a href="#Decoration" class="hover:text-brown text-lg">
                      Decoration
                    </a>
                  </li>
                </ul>
                <ul className="flex-col w-[105px] flex items-center gap-3">
                  <li>
                    <a href="#Storage" class="hover:text-brown text-lg">
                      Storage
                    </a>
                  </li>
                </ul>
                <ul className="flex-col w-[105px] flex items-center gap-3">
                  <li>
                    <a href="#Lighting" class="hover:text-brown text-lg">
                      Lighting
                    </a>
                  </li>
                </ul>
              </div>

              {/* Product List */}
              <div className="flex w-full items-center justify-between">
                {/* Product Card */}
                <div className="flex w-[268px] flex-col items-center shrink-0 shadow-lg rounded-xl bg-white">
                  {/* Image  */}
                  <div className="h-[240px] self-stretch pl-[47px] pr-[47px] pt-[26.7px] pb-[9.26px]">
                    <img
                      src="./assets/chair.png"
                      alt="chair"
                      className="w-[173.476px] h-[203.733px] shrink-0"
                    />
                  </div>
                  {/* Frame 175 */}
                  <div
                    className="
                            flex p-5 flex-col items-start gap-8 self-stretch
                            rounded-bl-[20px] rounded-br-[20px]
                            bg-white
                          "
                  >
                    {/* Frame 3739 */}
                    <div className="flex flex-col items-start gap-[6px] self-stretch">
                      {/* Product infor */}
                      <div className="flex flex-col items-start gap-1 self-stretch">
                        <h2
                          className="
                                  self-stretch
                                  text-brown-900 font-DM Sans text-[12px] font-semibold leading-normal uppercase
                                "
                        >
                          FURNITURE
                        </h2>
                        <h1
                          className="
                                w-[188.879px]
                                text-black font-DM Sans text-[24px] font-semibold leading-normal capitalize
                              "
                        >
                          Sakarias
                        </h1>
                        <h2
                          className="
                                h-[36px] self-stretch
                                text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal
                              "
                        >
                          This is the sample product description on 2 lines.
                        </h2>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-[3px] pt-[6px]">
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                      </div>

                      {/* Card Buttom */}
                      <div className="flex justify-between items-center self-stretch">
                        {/* Pricing */}
                        <div className="flex items-center gap-[2px]">
                          <h2
                            className="
                                  w-[10.663px] h-[18.279px]
                                  text-black font-Inter text-[14px] font-normal leading-normal
                                "
                          >
                            $
                          </h2>
                          <h1
                            className="
                                  w-[41.172px] h-[25.895px]
                                  text-black font-DM Sans text-[21.325px] font-normal leading-normal
                                "
                          >
                            392
                          </h1>
                        </div>

                        {/* Button */}
                        <a className="w-[50px] h-[50px]">
                          <img src="./assets/Circle Button.svg" alt="Plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product Card */}
                <div className="flex w-[268px] flex-col items-center shrink-0 shadow-lg rounded-xl bg-white">
                  {/* Image  */}
                  <div className="h-[240px] self-stretch pl-[47px] pr-[47px] pt-[26.7px] pb-[9.26px]">
                    <img
                      src="https://www.ikea.com/us/en/images/products/finnala-sleeper-sofa-gunnared-beige__0686037_pe721537_s5.jpg?f=xl"
                      alt="chair"
                      className="w-[173.476px] h-[203.733px] shrink-0"
                    />
                  </div>
                  {/* Frame 175 */}
                  <div
                    className="
                            flex p-5 flex-col items-start gap-8 self-stretch
                            rounded-bl-[20px] rounded-br-[20px]
                            bg-white
                          "
                  >
                    {/* Frame 3739 */}
                    <div className="flex flex-col items-start gap-[6px] self-stretch">
                      {/* Product infor */}
                      <div className="flex flex-col items-start gap-1 self-stretch">
                        <h2
                          className="
                                  self-stretch
                                  text-brown-900 font-DM Sans text-[12px] font-semibold leading-normal uppercase
                                "
                        >
                          FURNITURE
                        </h2>
                        <h1
                          className="
                                w-[188.879px]
                                text-black font-DM Sans text-[24px] font-semibold leading-normal capitalize
                              "
                        >
                          Sleeper Sofa
                        </h1>
                        <h2
                          className="
                                h-[36px] self-stretch
                                text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal
                              "
                        >
                          A stylish and comfortable modern sofa perfect for any
                          living room.
                        </h2>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-[3px] pt-[6px]">
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                      </div>

                      {/* Card Buttom */}
                      <div className="flex justify-between items-center self-stretch">
                        {/* Pricing */}
                        <div className="flex items-center gap-[2px]">
                          <h2
                            className="
                                  w-[10.663px] h-[18.279px]
                                  text-black font-Inter text-[14px] font-normal leading-normal
                                "
                          >
                            $
                          </h2>
                          <h1
                            className="
                                  w-[41.172px] h-[25.895px]
                                  text-black font-DM Sans text-[21.325px] font-normal leading-normal
                                "
                          >
                            1599
                          </h1>
                        </div>

                        {/* Button */}
                        <a className="w-[50px] h-[50px]">
                          <img src="./assets/Circle Button.svg" alt="Plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product Card */}
                <div className="flex w-[268px] flex-col items-center shrink-0 shadow-lg rounded-xl bg-white">
                  {/* Image  */}
                  <div className="h-[240px] self-stretch pl-[47px] pr-[47px] pt-[26.7px] pb-[9.26px]">
                    <img
                      src="https://www.ikea.com/us/en/images/products/styrspel-gaming-chair-dark-gray-gray__1115362_pe872046_s5.jpg?f=xl"
                      alt="chair"
                      className="w-[173.476px] h-[203.733px] shrink-0"
                    />
                  </div>
                  {/* Frame 175 */}
                  <div
                    className="
                            flex p-5 flex-col items-start gap-8 self-stretch
                            rounded-bl-[20px] rounded-br-[20px]
                            bg-white
                          "
                  >
                    {/* Frame 3739 */}
                    <div className="flex flex-col items-start gap-[6px] self-stretch">
                      {/* Product infor */}
                      <div className="flex flex-col items-start gap-1 self-stretch">
                        <h2
                          className="
                                  self-stretch
                                  text-brown-900 font-DM Sans text-[12px] font-semibold leading-normal uppercase
                                "
                        >
                          FURNITURE
                        </h2>
                        <h1
                          className="
                                w-[188.879px]
                                text-black font-DM Sans text-[24px] font-semibold leading-normal capitalize
                              "
                        >
                          Gaming Chair
                        </h1>
                        <h2
                          className="
                                h-[36px] self-stretch
                                text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal
                              "
                        >
                          A sleek and ergonomic chair for comfortable gaming
                          sessions.
                        </h2>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-[3px] pt-[6px]">
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                      </div>

                      {/* Card Buttom */}
                      <div className="flex justify-between items-center self-stretch">
                        {/* Pricing */}
                        <div className="flex items-center gap-[2px]">
                          <h2
                            className="
                                  w-[10.663px] h-[18.279px]
                                  text-black font-Inter text-[14px] font-normal leading-normal
                                "
                          >
                            $
                          </h2>
                          <h1
                            className="
                                  w-[41.172px] h-[25.895px]
                                  text-black font-DM Sans text-[21.325px] font-normal leading-normal
                                "
                          >
                            389.55
                          </h1>
                        </div>

                        {/* Button */}
                        <a className="w-[50px] h-[50px]">
                          <img src="./assets/Circle Button.svg" alt="Plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product Card */}
                <div className="flex w-[268px] flex-col items-center shrink-0 shadow-lg rounded-xl bg-white">
                  {/* Image  */}
                  <div className="h-[240px] self-stretch pl-[47px] pr-[47px] pt-[26.7px] pb-[9.26px]">
                    <img
                      src="https://www.ikea.com/us/en/images/products/norden-froesvi-table-and-4-chairs-birch-knisa-dark-gray__1328452_pe944787_s5.jpg?f=xl"
                      alt="chair"
                      className="w-[173.476px] h-[203.733px] shrink-0"
                    />
                  </div>
                  {/* Frame 175 */}
                  <div
                    className="
                            flex p-5 flex-col items-start gap-8 self-stretch
                            rounded-bl-[20px] rounded-br-[20px]
                            bg-white
                          "
                  >
                    {/* Frame 3739 */}
                    <div className="flex flex-col items-start gap-[6px] self-stretch">
                      {/* Product infor */}
                      <div className="flex flex-col items-start gap-1 self-stretch">
                        <h2
                          className="
                                  self-stretch
                                  text-brown-900 font-DM Sans text-[12px] font-semibold leading-normal uppercase
                                "
                        >
                          FURNITURE
                        </h2>
                        <h1
                          className="
                                w-[188.879px]
                                text-black font-DM Sans text-[24px] font-semibold leading-normal capitalize
                              "
                        >
                          Table Set
                        </h1>
                        <h2
                          className="
                                h-[36px] self-stretch
                                text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal
                              "
                        >
                          A classic wooden dining set for your dining room or
                          patio.
                        </h2>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-[3px] pt-[6px]">
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                        <img src="./assets/star.svg" alt="star" />
                      </div>

                      {/* Card Buttom */}
                      <div className="flex justify-between items-center self-stretch">
                        {/* Pricing */}
                        <div className="flex items-center gap-[2px]">
                          <h2
                            className="
                                  w-[10.663px] h-[18.279px]
                                  text-black font-Inter text-[14px] font-normal leading-normal
                                "
                          >
                            $
                          </h2>
                          <h1
                            className="
                                  w-[41.172px] h-[25.895px]
                                  text-black font-DM Sans text-[21.325px] font-normal leading-normal
                                "
                          >
                            645.24
                          </h1>
                        </div>

                        {/* Button */}
                        <a className="w-[50px] h-[50px]">
                          <img src="./assets/Circle Button.svg" alt="Plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Image Link Note */}
            <a href="/" alt="More Information">
              <img src="./assets/CTA.svg" />
            </a>
          </section>

          {/* Wrapper */}
          <section className="flex w-[1220px] pt-[140px] pb-[80px] flex-col justify-center items-center gap-[80px]">
            {/* Frame 3752 */}
            <div className="flex flex-col items-center gap-[23px]">
              <h1
                className="
                    text-black font-DM Sans text-[56px] font-bold leading-[70px]
                  "
              >
                Shop with{" "}
                <span
                  className="
                      text-orange-500 font-DM Sans font-bold leading-[70px]
                    "
                >
                  Confidence
                </span>
              </h1>
              <h2
                className="
                    text-neutral-text-gray text-center font-DM Sans text-[20px] font-normal leading-[30px]
                  "
              >
                Experience peace of mind with our warranty, easy returns, and
                flexible payment plans—crafted to ensure a seamless shopping
                experience from start to finish.
              </h2>
            </div>

            {/* Frame 3742 */}
            <div className="flex items-start gap-7">
              {/* Feature 1 */}
              <div className=" flex w-[364px] flex-col items-center gap-5">
                <img
                  src="./assets/Tick.svg"
                  alt="Feature 1"
                  className="w-[160px] h-[160px] "
                />
                <h1
                  className="
                      self-stretch
                      text-black text-center font-DM Sans text-[28px] font-bold leading-[38px]
                    "
                >
                  Warranty Coverage
                </h1>
                <h2
                  className="
                      self-stretch
                      text-neutral-text-gray text-center font-DM Sans text-[18px] font-normal leading-[30px]
                    "
                >
                  Any manufacturing defects in materials or craftsmanship? We’ll
                  take care of it. Just contact our support team, and we’ll
                  handle the rest, ensuring your furniture stays in top shape.
                </h2>
              </div>

              {/* Feature 2 */}
              <div className=" flex w-[364px] flex-col items-center gap-5">
                <img
                  src="./assets/Circle.svg"
                  alt="Feature 2"
                  className="w-[160px] h-[160px] bg-brown-400"
                />
                <h1
                  className="
                      self-stretch
                      text-black text-center font-DM Sans text-[28px] font-bold leading-[38px]
                    "
                >
                  Returns & Exchanges
                </h1>
                <h2
                  className="
                      self-stretch
                      text-neutral-text-gray text-center font-DM Sans text-[18px] font-normal leading-[30px]
                    "
                >
                  We understand that sometimes things don’t work out. If your
                  new piece doesn’t meet your expectations, take advantage of
                  our 30-day return policy for a full refund or exchange.
                </h2>
              </div>

              {/* Feature 3 */}
              <div className=" flex w-[364px] flex-col items-center gap-5">
                <img
                  src="./assets/Packet.svg"
                  alt="Feature 3"
                  className="w-[160px] h-[160px] bg-brown-400"
                />
                <h1
                  className="
                      self-stretch
                      text-black text-center font-DM Sans text-[28px] font-bold leading-[38px]
                    "
                >
                  Flexible Payment
                </h1>
                <h2
                  className="
                      self-stretch
                      text-neutral-text-gray text-center font-DM Sans text-[18px] font-normal leading-[30px]
                    "
                >
                  we offer flexible payment plans, including interest-free
                  installments over 3, 6, or 12 months. With all major credit
                  cards and digital wallets accepted, you can choose the option
                  that best fits your budget.
                </h2>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="flex w-[1010px] py-[140px] flex-col items-center gap-20">
            {/* Frame 3749 */}
            <div className="flex w-[716px] flex-col items-start gap-6">
              <h1
                className="
                    self-stretch
                    text-black font-DM Sans text-[56px] font-semibold   leading-[70px]
                  "
              >
                Frequently Asked Questions
              </h1>

              <h2
                className="
                    self-stretch
                    text-neutral-text-gray text-center font-DM Sans text-[20px] font-normal leading-[30px]
                  "
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id
                volutpat imperdiet quis at pellentesque nunc commodo nunc purus
                pulvinar nisi fusce.
              </h2>
            </div>

            {/* Accordion */}
            <div className=" flex flex-col items-start gap-6 self-stretch">
              {/* Question Card */}
              <div
                className="
                flex p-12 justify-between items-start self-stretch
                rounded-lg border border-gray-400
                "
              >
                {/* Frame 3751 */}
                <div className="flex w-[771.283px] flex-col items-start  gap-4">
                  <h1
                    className="
                      self-stretch
                      text-black font-DM Sans  text-[28px] font-semibold leading-[38px] 
                     "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </h1>

                  <h2
                    className="
                      w-[735.576px] text-neutral-text-gray font-DM Sans text-[18px] font-normal  leading-[30px]
                    "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                    venenatis pretium risus euismod dictum egestas orci netus
                    feugiat ut egestas ut sagittis tincidunt phasellus elit
                    etiam cursus orci in. Id sed montes.
                  </h2>
                </div>
                <a href="/">
                  <img
                    src="./assets/Down.svg"
                    alt="Down"
                    className="h-[35px] w-[36.69px]"
                  />
                </a>
              </div>

              {/* Question Card 2 */}
              <div
                className="
                  flex p-12 justify-between items-start self-stretch
                  rounded-lg border border-gray-400"
              >
                {/* Frame 3751 */}
                <div className="flex w-[771.283px] flex-col items-start  gap-4">
                  <h1
                    className="
                      self-stretch
                      text-black font-DM Sans  text-[28px] font-semibold leading-[38px] 
                     "
                  >
                    Lorem ipsum dolor sit amet?
                  </h1>
                </div>
              </div>

              {/* Question card 3 */}
              <div
                className="
                  flex p-12 justify-between items-start self-stretch
                  rounded-lg border border-gray-400"
              >
                {/* Frame 3751 */}
                <div className="flex w-[771.283px] flex-col items-start  gap-4">
                  <h1
                    className="
                      self-stretch
                      text-black font-DM Sans  text-[28px] font-semibold leading-[38px] 
                     "
                  >
                    Lorem ipsum dolor sit amet?
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default LandingPage;
