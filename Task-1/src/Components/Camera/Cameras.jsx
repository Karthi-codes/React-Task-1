import { Box, Typography } from '@mui/material'
import rectangle_1 from "../../assets/Rectangle (1).png"
import rectangle_2 from "../../assets/Rectangle (2).png"
import rectangle_3 from "../../assets/Rectangle (3).png"
import rectangle_4 from "../../assets/Rectangle.png"
import "../Camera/Cameras.css"


const values = [
    { id: 1, title: "AI-Powered Focus", des: "Advanced subject tracking", img: rectangle_4 },
    { id: 2, title: "8K Video", des: "Cinema-quality recording", img: rectangle_1 },
    { id: 3, title: "Fast Processing", des: "Next-gen image processor", img: rectangle_2 },
    { id: 4, title: "Low Light Master", des: "Enhanced night shooting", img: rectangle_3 }
]


const Cameras = () => {
    return (
        <Box className="camera">
            <Box className='heading'>
                <Typography sx={{ color: "rgb(67,24,209)", fontSize: "20px" }}>WHY CHOOSE US</Typography>
                <Typography sx={{ color: "white", fontSize: "45px", pt: "15px", fontWeight: "bold" }}>Revolutionary Features</Typography>
                <Typography sx={{ color: "rgb(135,132,143)", fontSize: "20px", pt: "15px" }}>Experience photography like never before with our cutting-edge technology</Typography>

                <Box className="items">
                    {values.map((value) => (
                        <Box key={value.id} sx={{ position: "relative" }} >
                            <Box component="img" src={value.img}></Box>
                            <Box sx={{ position: "absolute", top: 70, left: 70, textAlign: "start", lineHeight: 2, color: "white" }}>
                                <Box>{value.title}</Box>
                                <Box>{value.des}</Box>
                            </Box>
                        </Box>

                    ))}
                </Box>


            </Box>
        </Box>

    )
}

export default Cameras