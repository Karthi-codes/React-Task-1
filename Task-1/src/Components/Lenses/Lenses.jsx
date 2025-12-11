import "../Lenses/Lenses.css"
import { Box, Button, Typography, Fab } from "@mui/material"
import rectangle_1 from "../../assets/Rectangle_1.png"
import rectangle_2 from "../../assets/Rectangle_2.png"
import rectangle_3 from "../../assets/Rectangle_3.png"
import rectangle_4 from "../../assets/Rectangle_4.png"
import rectangle_5 from "../../assets/Rectangle_5.png"
import rectangle_6 from "../../assets/Rectangle_6.png"
import AddIcon from '@mui/icons-material/Add';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const values = [
  { id: 1, name: "Nikon S44", quality: "45.7MP | 8K Video", works: ["No Mechanical Shutter", "8K60p", "Pro Body"], price: "$6999", img: rectangle_6 },
  { id: 2, name: "Canon D55", quality: "45MP | 8K RAW", works: ["Dual Pixel AF", "8K RAW", "Weather Sealed"], price: "$4999", img: rectangle_5 },
  { id: 5, name: "Sony A2 V", quality: "61MP | 8K Video", works: ["AI Focus", "8K Video", "IBIS"], price: "$4589", img: rectangle_4 },
  { id: 3, name: "Nikon Z9", quality: "45.7MP | 8K Video", works: ["No Mechanical Shutter", "8K60p", "Pro Body"], price: "$5499", img: rectangle_3 },
  { id: 4, name: "Canon R5", quality: "45MP | 8K RAW", works: ["Dual Pixel AF", "8K RAW", "Weather Sealed"], price: "$3499", img: rectangle_2 },
  { id: 6, name: "Sony A7R V", quality: "61MP | 8K Video", works: ["AI Focus", "8K Video", "IBIS"], price: "$3899", img: rectangle_1 },
]



const Lenses = () => {
  return (

    <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, backgroundColor: "rgb(12,15,26)", height: { xs: "auto", md: "375vh", xl: "225vh" } }}>

      <Typography sx={{ color: "rgb(67,24,209)", textAlign: "center", pt: 5 }}>
        OUR COLLECTION
      </Typography>

      <Typography sx={{ color: "white", pt: 2, fontSize: "40px", textAlign: "center" }}>
        Featured Cameras
      </Typography>

      <Box
        sx={{
          pt: 3,
          display: "flex",
          gap: 3,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button sx={{ color: "white", backgroundColor: "rgb(67,24,209)", textTransform: "none", borderRadius: 10 }}>
          ALL
        </Button>

        <Button sx={{ color: "white", backgroundColor: "rgb(27,30,40)", textTransform: "none", borderRadius: 10, p: 2 }}>
          Mirrorless
        </Button>

        <Button sx={{ color: "white", backgroundColor: "rgb(27,30,40)", textTransform: "none", borderRadius: 10, p: 2 }}>
          Professional
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          mt: 5,
          justifyContent: "center",
        }}
      >
        {values.map((value) => (
          <Box
            key={value.id}
            sx={{
              backgroundColor: "rgb(17,20,30)",
              width: { xs: "90%", sm: "380px", md: "400px" },
              borderRadius: "10px",
              border: "2px solid rgb(37,39,49)",
              boxShadow: "20px 10px 10px rgb(22,16,62)",
              p: 3,
            }}
          >

            <Box
              component="img"
              src={value.img}
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <Box sx={{ position: { xl: "relative" } }}>
              <Button
                sx={{
                  position: { xl: "absolute" },
                  bottom: { xl: 30 },
                  mt: { xs: 2, xl: 0 },
                  ml: { xl: 30 },
                  backgroundColor: "rgb(67,24,209)",
                  color: "white",
                  borderRadius: 2,
                  fontSize: 13,
                  textTransform: "none",
                }}
              >
                Add to Cart
              </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                {value.name}
              </Typography>

              <Fab
                sx={{
                  backgroundColor: "rgb(32,35,44)",
                  height: "35px",
                  width: "40px", zIndex: { xs: 2, md: 2, xl: 2 }
                }}
              >
                <ContentPasteIcon sx={{ color: "white" }} />
              </Fab>
            </Box>

            <Typography sx={{ color: "rgb(136,139,143)", fontSize: "15px", mt: 1 }}>
              {value.quality}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              {value.works.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "white",
                    backgroundColor: "rgb(31,34,44)",
                    height: "40px",
                    width: "80px",
                    fontSize: 10,
                    borderRadius: 3,
                    textTransform: "none",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Typography sx={{ color: "white", fontSize: 25 }}>
                {value.price}
              </Typography>

              <Fab sx={{ backgroundColor: "rgb(67,24,209)", zIndex: { xs: 2, md: 2, xl: 2 } }}>
                <AddIcon sx={{ color: "black" }} />
              </Fab>
            </Box>

          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Lenses
