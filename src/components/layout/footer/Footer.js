import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          textAlign: "center",
          boxSizing: "border-box",
          background: "#470060",
          color: "white",
        }}
      >
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item xs={6} sm={3}>
            <Box sx={{ backgroundColor: "white", padding: "10px" }}>
              <Typography variant="h6">Contact Information</Typography>
              <Box>
                <Typography variant="subtitle1">123-456-7890</Typography>
                <Typography variant="subtitle1">example@example.com</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                // backgroundColor: "white",
                // padding: "10px",
                textAlign: "left",
                marginTop: "10%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  textAlign: "left",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Box sx={{ marginTop: "5%" }}>
                <Typography variant="subtitle1">+91 88552 23366</Typography>
                <Typography variant="subtitle1">
                  anandpranichealing24@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Second Column */}
          <Grid item xs={6} sm={3}>
            <Typography sx={{ textAlign: "left" }} variant="h6">
              Useful links
            </Typography>
            <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; About us
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Gallery
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; FAQ's
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Inquire now
              </li>
            </ul>
          </Grid>
          {/* Third Column */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" style={{ textAlign: "left" }}>
              Events
            </Typography>
            <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Full Moon Meditation
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Mega Healing Camp
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Boot camp
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Forgiveness
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Meditation on Twin Hearts
              </li>
            </ul>
          </Grid>
          {/* Fourth Column */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" style={{ textAlign: "left" }}>
              Courses
            </Typography>
            <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Basic Pranic Healing Course
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Advanced Pranic Healing Course
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Pranic Psychotherapy Course
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Achieving Oneness With Higher Soul
              </li>
              <li
                style={{
                  marginBottom: "15px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: "#FFFFF",
                }}
              >
                &gt; Arhatic Yoga
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "8%" }}>
          <hr />
        </Box>
        <Box sx={{ marginTop: "8%" }}>
          <Typography>
            Copyright © 2024 All Rights Reserved | Developed with
            theinfinitydesignstudio 
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
