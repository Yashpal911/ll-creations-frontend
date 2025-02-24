"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Card, Col, Row, Text } from 'rsuite';

const data = [
  {
    img: "/Images/img1.jpg",
    heading: "LOGO DESIGN",
    description:
      "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "January 2023",
  },
  {
    img: "/Images/img2.jpg",
    heading: "POSTER DESIGN",
    description:
  "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "March 2022",
  },
  {
    img: "/Images/img2.jpg",
    heading: "POSTER DESIGN",
    description:
  "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "March 2022",
  },
  {
    img: "/Images/img2.jpg",
    heading: "POSTER DESIGN",
    description:
  "We transform ideas into stunning logos that capture your brand’s essence. Stand out with a design that speaks for you.",
    joined: "March 2022",
  },
];

export default function Home() {

  return (
    <>
      <div>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[85vh]"
        >
          <SwiperSlide>
            <img src='/Images/img1.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/Images/img2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/Images/img3.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/Images/img4.jpg' />
          </SwiperSlide>
        </Swiper>

        <section className='p-24 flex justify-center items-center'>
          <div className="w-[50%] text-center">
            <h1>About</h1>
            <p className="aboutsubheading">
              Welcome to my digital playground, where creativity meets functionality! As a UI/UX designer, I specialize in building visually compelling and user-friendly interfaces that enhance engagement and elevate brands. With a deep understanding of user psychology, wireframing, and prototyping, I transform ideas into pixel-perfect designs.
            </p>
          </div>
        </section>

        <section className='p-5 bg-[#f1f1f1] serviceSection'>
          <h1 className='text-center'>Our Services</h1>
          <Row className='w-4/5'>
          {data.map((data, index) => (
        <Col lg={8} key={index}>
          <Card className="serviceCard mb-10">
            <Card.Header className='flex gap-5 items-center'>
              <span><img src={data.img} width={150}/></span>
              <h5>{data.heading}</h5>
              </Card.Header>
            <Card.Body>{data.description}</Card.Body>
            <Card.Footer>
              <a className="text-muted">Read More</a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
          </Row>
        </section>


        <section className='clientsSection'>
          <h1>Clients</h1>
        </section>
      </div>
    </>
  );
}
