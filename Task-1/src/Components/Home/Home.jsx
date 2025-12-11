import { Box, Button, Typography } from '@mui/material'
import rectangle from "../../assets/Rectangle 2.png"
import "../Home/Home.css"

const Home = () => {
    return (


        <Box sx={{ position: "relative" }}>
            <Box component="img"
                src={rectangle}
                alt="Photo"
                sx={{
                    width: "100%",
                    height: { xs: "auto" ,sm:"100vh",md:"120vh",xl:"105vh"},
                    objectFit: "cover",
                }}
            ></Box>


            <Box
                sx={{
                    position: "absolute",
                    top: { xs: 20, sm: 40, md: 80 },
                    left: { xs: 20, sm: 40, md: 60 },
                    width: { xs: "90%", sm: "80%", md: "60%" },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: "black",
                        fontFamily: "sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: 32, sm: 45, md: 55, lg: 65 },
                        pt: { xs: 10, sm: 10, md: 15 },
                    }}
                >
                    Capture
                </Typography>

                <Typography className="content"
                    sx={{
                        color: "rgb(73,24,209)",
                        pt: { xs: 2, sm: 3 },
                        fontSize: { xs: 40, sm: 55, md: 70, lg: 80 },
                        fontFamily: "sans-serif",
                        fontWeight: 700,

                    }}
                >
                    Tomorrow
                </Typography>

                <Typography
                    sx={{
                        width: { xs: "100%", sm: "80%", md: "600px" },
                        pt: { xs: 2, sm: 3 },
                        fontSize: { xs: 16, sm: 18, md: 22, lg: 25 },
                        pl: { xs: 0, sm: 1, md: 2 },
                    }}
                >
                    Experience the future of imaging with our cutting-edge camera collection.
                    Powered by advanced AI <br />and breakthrough sensor technology.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 2, sm: 5, md: 10 },
                        pt: { xs: 3, sm: 4 },
                    }}
                >
                    <Button
                        sx={{
                            backgroundColor: "rgb(164,24,209)",
                            color: "white",
                            width: { xs: "100%", sm: "auto" },
                        }}
                    >
                        Shop Latest Models
                    </Button>

                    <Button
                        sx={{
                            backgroundColor: "rgb(82,69,155)",
                            color: "white",
                            width: { xs: "100%", sm: "auto" },
                        }}
                    >
                        Watch Demo
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 2, sm: 8, md: 10 },
                        pt: { xs: 3, sm: 4 },
                        pl: { xs: 0, sm: 2, md: 3 },
                    }}
                >

                    <Box sx={{ display: { xs: "flex" } }}>
                        <Box>
                            <Typography className="value" sx={{ fontSize: { xs: 28, sm: 32, md: 40 } }}>
                                50+
                            </Typography>
                            <Typography className="value_1" sx={{ textAlign: "left" }}>
                                Models
                            </Typography>
                        </Box>

                        <Box sx={{ ml: { xs: 3 } }}>
                            <Typography className="value" sx={{ fontSize: { xs: 28, sm: 32, md: 40 } }}>
                                10K
                            </Typography>
                            <Typography className="value_1" sx={{ textAlign: { md: "center", xl: "center" } }}>
                                Users
                            </Typography>
                        </Box>

                        <Box sx={{ ml: { xs: 3, } }}>
                            <Typography className="value" sx={{ fontSize: { xs: 28, sm: 32, md: 40 }, ml: { xl: 0 } }}>
                                24/7
                            </Typography>
                            <Typography className="value_1">Support</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Home
