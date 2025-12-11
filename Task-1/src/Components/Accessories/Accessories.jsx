import { Box, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as React from 'react';
import Rating from '@mui/material/Rating';


const Accessories = () => {

  const [value, setValue] = React.useState(2);

  return (

    <Box
      sx={{
        background: "linear-gradient(rgb(61,16,85),rgb(10,10,22))",
        height: { xs: "auto", md: "auto", sm: "auto", xl: "90vh" },
        pt: 5,
        pb: { xs: 5, md: 0 },
      }}
    >
      <Typography
        sx={{
          color: "rgb(67,24,209)",
          textAlign: "center",
          fontSize: { xs: "18px", sm: "22px", md: "25px" },
        }}
      >
        Testimonials
      </Typography>

      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: { xs: "28px", sm: "34px", md: "40px" },
        }}
      >
        What Photographers Say
      </Typography>

      <Box
        sx={{
          pt: { xs: 5, sm: 10, md: 15 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          gap: { xs: 3, md: 0 },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <ArrowBackIosIcon
            sx={{
              backgroundColor: "rgb(24,26,38)",
              color: "white",
              p: 1,
              height: "50px",
              width: "50px",
              borderRadius: 15,
              pl: 2,
              mt: 15,
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "95%", sm: "80%", md: "600px" },
            backgroundColor: "rgba(15,16,29,0.350)",
            borderRadius: "20px",
            p: { xs: 2, sm: 3, md: 4 },
            border: "1px solid rgba(15,16,29,0.1)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: "rgb(196,196,196)",
                borderRadius: 20,
              }}
            />
            <Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold", pl: 2 }}>
                Alex Chen
              </Typography>
              <Typography sx={{ fontSize: "14px", opacity: 0.9, pl: 2 }}>
                Professional Photographer
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{ color: "white", opacity: 0.8, mb: 2, fontSize: { xs: "14px", sm: "16px" } }}
          >
            The autofocus system is revolutionary. I've never seen anything like it.
          </Typography>

          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              sx={{ color: "rgb(67,24,209)" }}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
            />
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <ArrowForwardIosIcon
            sx={{
              backgroundColor: "rgb(24, 26, 38)",
              color: "white",
              p: 1,
              borderRadius: 10,
              fontSize: "45px",
              mt: 15,
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>


  )
}

export default Accessories
