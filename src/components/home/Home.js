import React from "react";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import Landing1 from "../../assets/L1.jpg";
import Landing2 from "../../assets/L2.jpg";
import Landing3 from "../../assets/L3.jpg";
import Landing4 from "../../assets/L4.jpg";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "./Home.css";
import ReasonOne from "../../assets/ReasonOne.png";
import ReasonTwo from "../../assets/ReasonTwo.png";
import ReasonThree from "../../assets/ReasonThree.png";
import ReasonFour from "../../assets/ReasonFour.png";
import threeLinePic from "../../assets/threeLinePic.png";
import Check from "../../assets/check.png";

const reasonsData = [
  {
    imageSrc: ReasonOne,
    text: "Physical Ailments",
  },
  {
    imageSrc: ReasonTwo,
    text: "Psychological Ailments",
  },
  {
    imageSrc: ReasonThree,
    text: "Emotional Problems",
  },
  {
    imageSrc: ReasonFour,
    text: "Financial Problems",
  },
];

const useStyles = makeStyles(() => ({
  homeMain: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // // height: "100vh",
  },
  swiperContainer: {
    position: "relative",
    width: "100%",
    height: "50%",
  },
}));

function Home() {
  const classes = useStyles();
  const eventData = [
    {
      date: new Date("2023-04-01"),
      name: "Event 1",
      description: "Description 1",
    },
    {
      date: new Date("2023-04-10"),
      name: "Event 2",
      description: "Description 2",
    },
    {
      date: new Date("2023-04-15"),
      name: "Event 3",
      description: "Description 3",
    },
    {
      date: new Date("2023-04-20"),
      name: "Event 4",
      description: "Description 4",
    },
    {
      date: new Date("2023-04-25"),
      name: "Event 5",
      description: "Description 5",
    },
    {
      date: new Date("2023-04-30"),
      name: "Event 6",
      description: "Description 6",
    },
  ];

  const textStyles = {
    // fontSize: ["1.2rem", "2.4vw"],
    // color: "#470060",
    // lineHeight: [1, 10],
    // fontWeight: 600,
  };

  const infoTextStyles = {
    // fontSize: ["0.6rem", "1.1vw"],
    // color: "#470060",
    // fontWeight: 400,
    // textAlign: "justify",
  };

  const checkIconStyles = {
    // width: ["12px", "12px"],
    // height: ["12px", "12px"],
    // marginRight: "3%",
  };

  const info = [
    "Pranic Healing was founded by a Scientist and Philanthropist, Grand Master Choa Kok Sui. It is a modern no-touch and no-drug therapy that works on the auras and chakras of an individual to heal them of their physical, emotional and mental health.",
    "Conducting meditations and workshops",
    "Physical and psychological wellness",
    "Heal yourself and others",
    "Empowering workshops",
  ];

  return (
    <>
      <div className={classes.homeMain}>
        <Box sx={{ borderRadius: "10px" }}>
          <Swiper
            className={classes.swiperContainer}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   dynamicBullets: true,
            // }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <text className="landingSliderText">helloe</text>
              <img src={Landing1} style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <text className="landingSliderText">helloe</text>
              <img src={Landing2} style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <text className="landingSliderText">helloe</text>
              <img src={Landing3} style={{ width: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <text className="landingSliderText">helloe</text>
              <img src={Landing4} style={{ width: "100%" }} />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
            mt: "4%",
          }}
        >
          <Typography
            sx={{
              border: "1px solid black",
              padding: "2%",
              width: "40%",
              display: "flex",
              justifyContent: "center",
              background: "#470060",
              color: "white",
              fontSize: ["0.6rem", "1.2vw"],
              fontWeight: "275",
              textAlign: "center",
            }}
          >
            No upcoming events from <br /> Anand Pranic Healing Centre at the
            moment!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3%",
          }}
        >
          <Typography
            sx={{
              fontSize: ["0.7rem", "1.5vw"],
              fontWeight: "500",
              lineHeight: "42.59px",
            }}
          >
            Past Events by Anand Pranic Healing Centre
          </Typography>
        </Box>
        <Box sx={{ paddingX: { xs: 2, sm: 5, md: 10 } }}>
          <Grid container spacing={2} justifyContent="center">
            {eventData.map((event, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className="event-card">
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Event Image"
                  />
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <div className="date">
                        <Typography variant="h6" className="event-date">
                          APR
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="event-date"
                          style={{ display: "block" }}
                        >
                          {event.date.getDate()}
                        </Typography>
                      </div>
                      <Box
                        sx={{
                          width: 2,
                          height: 40,
                          bgcolor: "black",
                          margin: "0 16px",
                        }}
                      ></Box>
                      <div className="event-name">
                        <Typography variant="h6" className="event-name">
                          {event.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className="event-description"
                        >
                          {event.description}
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            width: "40%",
            marginX: "auto",
            marginTop: "1%",
            textAlign: "center",
          }}
        >
          <fieldset
            style={{
              padding: "0",
              borderWidth: 2,
              borderColor: "#470060",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <legend>
              <Typography variant="subtitle1" color="#470060" fontWeight={600}>
                HEALTHY LIFESTYLE
              </Typography>
            </legend>
            <Typography
              variant="subtitle1"
              color="#470060"
              fontWeight={600}
              margin="3%"
              fontSize={["0.9rem", "1.8vw"]}
            >
              WHY PRANIC HEALING?
            </Typography>
          </fieldset>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          mx="5%"
          my="3%"
        >
          <Grid container spacing={3}>
            {reasonsData.map((reason, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card sx={{ borderRadius: 3 }}>
                  <img
                    src={reason.imageSrc}
                    alt={reason.text}
                    style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
                  />
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      {reason.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          flex={["2", "2", "2"]}
          padding="3%"
          textAlign={["center", "left"]}
          sx={{ marginX: ["3%", "6%"] }}
        >
          {/* <Box display="flex" flexDirection="column" alignItems="center" mt={4}> */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Box
                flex={["1", "1", "2"]}
                padding="3%"
                textAlign={["center", "left"]}
              >
                <Typography
                  sx={{
                    fontSize: ["1.2rem", "2.4vw"],
                    color: "#470060",
                    lineHeight: "60px",
                    // lineHeight: [1, 10],
                    fontWeight: 600,
                  }}
                  marginBottom={"1%"}
                >
                  An Ancient Science and Art of Pranic Healing
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    lineHeight: "23.87px",
                    textAlign: "left",
                    color: "#470060",
                    textAlign: "justify",
                    marginBottom: "1%",
                  }}
                >
                  Pranic Healing was founded by a Scientist and Philanthropist,
                  Grand Master Choa Kok Sui. It is a modern no-touch and no-drug
                  therapy that works on the auras and chakras of an individual
                  to heal them of their physical, emotional and mental health.
                </Typography>

                {info.slice(1).map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "1%",
                      marginTop: "2%",
                    }}
                  >
                    <img src={Check} width="7%" height="7%" alt="Check Icon" />
                    <Typography
                      sx={{
                        fontSize: ["0.6rem", "1.1vw"],
                        color: "#470060",
                        fontWeight: 400,
                        textAlign: "justify",
                        marginLeft: "2%",
                        lineHeight: "40px",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                flex={["1", "1", "2"]}
                display="flex"
                justifyContent="center"
              >
                <img
                    src={threeLinePic}
                    style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
                  />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  marginTop: "25%",
                  // display:"flex",
                  // justifyContent:"center",
                  // alignItems:"center",
                  // textAlign:"center"
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    // fontSize: "15.91px",
                    fontWeight: 400,
                    lineHeight: "23.87px",
                    textAlign: "left",
                    // fontSize: ["0.6rem", "1.1vw"],
                    color: "#470060",
                    textAlign: "justify",
                    marginBottom: "1%",
                  }}
                >
                  Anand Pranic Healing Centre was founded on 9th July’2017 with
                  an intention of spreading the good work of MCKS Pranic Healing
                  and Arhatic Yoga.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    // fontSize: "15.91px",
                    fontWeight: 400,
                    lineHeight: "23.87px",
                    textAlign: "left",
                    // fontSize: ["0.6rem", "1.1vw"],
                    color: "#470060",
                    textAlign: "justify",
                    marginBottom: "1%",
                  }}
                  marginTop="3%"
                >
                  Pranic healing is an energy healing technique developed by
                  Master Choa Kok Sui, utilizing Prana or Life Force to heal
                  physical, emotional, and mental ailments, by working on two
                  major principles: Life Force and the ability of the body to
                  heal.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    // fontSize: "15.91px",
                    fontWeight: 400,
                    lineHeight: "23.87px",
                    textAlign: "left",
                    // fontSize: ["0.6rem", "1.1vw"],
                    color: "#470060",
                    textAlign: "justify",
                    marginBottom: "1%",
                  }}
                  marginTop="3%"
                >
                  The art and science of Pranic Healing was introduced in 1987
                  through his 1st book called "The Ancient Science and Art of
                  Pranic Healing now titled Miracles through Pranic Healing."
                </Typography>
              </Box>
              {/* <Typography variant="h6" align="center">
                Section 3
              </Typography>
              <Typography align="center">Content for section 3</Typography> */}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Home;
