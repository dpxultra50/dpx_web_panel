import styled from "styled-components";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Slider from "react-slick";
import Reviewcard from "../Cards/Reviewcard";

const Testimonials = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 900000,
  //   centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };
  var data = [
    {
      name: "Kristjan Keskull",
      image: "/images/clintprofiles/20250211_104047.webp",
      comapnyimg: "/images/clintlogo/ramirent-group.svg",
      jobTitle: "Service Owner at Ramirent Group",
      reating: 5,
      comment:
        "DataPollex delivered outstanding business automation solutions, streamlining our operations seamlessly. Their expertise, professionalism, and support made the entire process smooth and efficient. Highly recommended!",
    },
    {
      name: "Mohammed Nurul Islam Khan",
      image: "/images/clintprofiles/𝗡𝘂𝗿𝘂𝗹_𝗜𝘀𝗹𝗮𝗺_𝗞𝗵𝗮𝗻.webp",
      jobTitle: "CEO at Mayfair Global Education",
      comapnyimg: "/images/clintlogo/𝐌𝐚𝐲𝐟𝐚𝐢𝐫_𝐆𝐥𝐨𝐛𝐚𝐥_𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧.png",
      reating: 4.3,
      comment:
        "DataPollex provided exceptional in-house IT services and system implementation, ensuring a seamless and efficient transition for our organization. Their expertise and commitment to excellence greatly enhanced our operations. recommended!",
    },
    {
      name: "Mo Mansoor",
      image: "/images/clintprofiles/20250211_103319.webp",
      jobTitle: "Director Of Acquisitions at Kings Capital",
      comapnyimg: "/images/clintlogo/kingscapitalre.webp",
      reating: 4.3,
      comment:
        "Kings Capital is highly satisfied with the IT consultation and development services. Their expertise and efficient solutions has greatly enhanced our operations. Highly recommended for any business seeking top-tier IT solutions.",
    },
    {
      name: "Engr. Sheikh Korban Ali",
      image: "/images/clintprofiles/Sheikh-Korban-Ali.webp",
      comapnyimg: "/images/clintlogo/malisha_header-logo (3).svg",
      jobTitle: "Chairman of MalishaEdu",
      reating: 5,
      comment:
        "Heartfelt appreciation to DataPollex for rescuing us from our challenges. We were facing various problems managing the several branches in many countries, students, agents. They automated our entire business from all ends.",
    },
    {
      name: "Syed Mohammed Walid Karim",
      image: "/images/clintprofiles/Syed_Mohammed_Walid_Karim.webp",
      comapnyimg: "/images/clintlogo/wafimaedu.png",
      jobTitle: "CEO, WAFIMA EDU",
      reating: 5,
      comment:
        "It was a great experience working with team DataPollex. Their genius developers took our problem and solved it in the most efficient way. They automated our entire educational consultancy system and made it paperless.",
    },
    {
      name: "Matthew Cagney",
      image: "/images/clintprofiles/20250211_105105.webp",
      comapnyimg: "/images/clintlogo/Aqualane-Logo_full-color.png",
      jobTitle: "Clinical Research Coordinator",
      reating: 5,
      comment:
        "Aqualane Clinical Research is highly impressed with the exceptional software development services provided. Their team delivered a secure, scalable, and user-friendly solution tailored to our needs. Their ongoing support & expertise has greatly enhanced our tech side.",
    },
    {
      name: "Akib Mostafa",
      image: "/images/clintprofiles/akib_mostafa.webp",
      comapnyimg: "/images/clintlogo/Logo_Lockup_Vertical_White.png",
      jobTitle: "Founder & CEO, Transmove",
      reating: 5,
      comment:
        "Many thanks to DataPollex for believing in me and making my dream come true. Their talented developers worked tirelessly to bring Transmove to life, turning my vision into reality with their dedication and expertise.",
    },
    {
      name: "Dr. Molla Maruf",
      image: "/images/clintprofiles/Molla-Maruf.webp",
      comapnyimg: "/images/clintlogo/BRCC.png",
      jobTitle: "Director of the Belt & Road Chinese Center",
      reating: 5,
      comment:
        "Datapollex realized my vision and made my dream E-Learning platform come true. I would be grateful to them for all the services they have provided so far and I'm also looking forward to working with them on new projects.",
    },
    {
      name: "Md. Firoj Alam",
      image: "/images/clintprofiles/Md-Firoj-Alam.webp",
      comapnyimg: "/images/clintlogo/wafimalogo.png",
      jobTitle: "Founder and GM, WAFIMA GROUP",
      reating: 5,
      comment:
        "DataPollex exceeded our expectations by a huge margin while designing our website according to our branding. Because it was a tough task and many have failed before. The entire WAFIMA will always be indebted to them.",
    },
    {
      name: "Golam Kibria",
      image: "/images/clintprofiles/Golam-Kibria.webp",
      comapnyimg: "/images/clintlogo/Study-Room-Logo.png",
      jobTitle: "Owner of StudyRoom",
      reating: 5,
      comment:
        "I highly recommend for DataPollex's e-commerce development. Their team's expertise are exceptional, resulting in a seamless and user-friendly online shopping experience for our customers.",
    },
  ];
  return (
    <Container>
      <Shape1></Shape1>
      <Wraper>
        <TextBox>
          <AboutTitle>
            <p>
              <span>
                <CheckBoxOutlineBlankIcon />
              </span>
              What Our Partners Say
            </p>
            <h1>
              Over 30+ Leading Brands Rely <br /> On Our Expertise
            </h1>
          </AboutTitle>
        </TextBox>
      </Wraper>
      {/* <CardBox>
        <Slide {...settings}>
          {data &&
            data.map((data, index) => (
              <Reviewcard
                key={index}
                name={data.name}
                jobTitle={data.jobTitle}
                imgsrc={data.image}
                cpmimg={data.comapnyimg}
                reating={data.reating}
                comment={data.comment}
              />
            ))}
        </Slide>
      </CardBox> */}
      <CardBox>
        {data &&
          data.map((data, index) => (
            <Reviewcard
              key={index}
              name={data.name}
              jobTitle={data.jobTitle}
              imgsrc={data.image}
              cpmimg={data.comapnyimg}
              reating={data.reating}
              comment={data.comment}
            />
          ))}
      </CardBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 450px) {
    padding: 40px 0px 80px 0px;
  }
`;
const Shape1 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  mix-blend-mode: luminosity;
  opacity: 0.01;
  background-image: url(/images/service-back-01.png);
  z-index: -1;
`;
const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AboutTitle = styled.div`
  margin-bottom: 31px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 10px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
  }
  h1 {
    text-align: center;
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 20px;
    }
    @media (max-width: 450px) {
      margin-bottom: 20px;
    }
  }
`;
const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    > div:last-child {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 125px !important;
        background: linear-gradient(
          to bottom,
          rgba(22, 22, 25, 0.75) 0%,
          rgb(22, 22, 25) 95%,
          rgb(22, 22, 25) 90%,
          rgb(27, 27, 32) 100%
        );
        pointer-events: none;
      }
    }

    > div:nth-last-child(2)::after {
      content: none !important;
      display: none !important;
    }
  }

  > div:nth-last-child(-n + 2) {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(
        to bottom,
        rgba(22, 22, 25, 0.85) 0%,
        rgb(22, 22, 25) 95%,
        rgb(22, 22, 25) 90%,
        rgb(27, 27, 32) 100%
      );
      pointer-events: none;
    }
  }
`;

const Slide = styled(Slider)`
  .slick-dots {
    display: none !important;
  }
  .slick-dots li {
    display: none !important;
  }
  ul li button {
    display: none !important;
  }
  li.slick-active button:before {
    display: none !important;
  }
  .slick-prev {
    display: none !important;
  }
  .slick-next {
    display: none !important;
  }
`;
export default Testimonials;
