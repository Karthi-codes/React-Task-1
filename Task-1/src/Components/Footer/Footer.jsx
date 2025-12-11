import { Box, Button, Typography, List, ListItem, TextField } from '@mui/material'
import wildlife from "../../assets/The beauty of wildlife.png"

const Footer = () => {
    return (

        <Box>

            <Box
                sx={{
                    backgroundColor: "rgb(20,22,23)",
                    width: "100%",
                    height: { xs: "79vh", sm: "65vh", md: "70vh",lg:"68vh" ,xl: "68vh" },
                    p: { xs: 2, sm: 4, md: 5 },
                    position: "relative", mt: -1
                }}
            >
                <Box
                    component="img"
                    src={wildlife}
                    sx={{
                        width: "100%",
                        height: { xs: "65vh", sm: "45vh", md: "50vh" },
                        objectFit: "cover",
                        borderRadius: 2, mt: 3
                    }}
                />

                <Typography
                    sx={{
                        color: "white",
                        position: "absolute",
                        top: { xs: "25%", sm: "30%", md: "125px" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        fontSize: { xs: "18px", sm: "22px", md: "24px" },
                        fontWeight: "bold",
                        width: "90%",
                    }}
                >
                    Ready to Elevate Your Photography?
                </Typography>

                <Typography
                    sx={{
                        color: "white",
                        position: "absolute",
                        top: { xs: "38%", sm: "43%", md: "200px" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        width: { xs: "90%", sm: "80%", md: "60%" },
                    }}
                >
                    Join thousands of photographers who have already transformed their <br />
                    craft with our cutting-edge cameras.
                </Typography>

                <Button
                    sx={{
                        textTransform: "none",
                        backgroundColor: "white",
                        color: "black",
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 3,
                        position: "absolute",
                        top: { xs: "55%", sm: "58%", md: "290px" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        width: { xs: "70%", sm: "auto" },
                    }}
                >
                    Get Started Today
                </Button>
            </Box>

            <Box
                className="footer"
                sx={{
                    backgroundColor: "#000",
                    color: "white",
                    p: { xs: "40px 20px", md: "50px 60px" },
                    display: "flex",
                    justifyContent: { xs: "center", sm: "space-between" },
                    flexWrap: "wrap",
                    gap: { xs: 4, md: 5 },
                }}
            >

                <Box sx={{ width: { xs: "100%", sm: "250px" }, textAlign: { xs: "center", sm: "left" } }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 1 }}>
                        About Us
                    </Typography>

                    <Typography>
                        Leading the future of professional <br />
                        photography with cutting-edge <br />
                        technology and innovation.
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: "100%", sm: "200px" }, textAlign: { xs: "center", sm: "left" } }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 1 }}>
                        Quick Links
                    </Typography>

                    <List sx={{ paddingTop: 0, fontFamily: "sans-serif" }}>
                        <ListItem sx={{ paddingLeft: 0, justifyContent: { xs: "center", sm: "flex-start" } }}>
                            Home
                        </ListItem>
                        <ListItem sx={{ paddingLeft: 0, justifyContent: { xs: "center", sm: "flex-start" } }}>
                            Camera
                        </ListItem>
                        <ListItem sx={{ paddingLeft: 0, justifyContent: { xs: "center", sm: "flex-start" } }}>
                            Lense
                        </ListItem>
                        <ListItem sx={{ paddingLeft: 0, justifyContent: { xs: "center", sm: "flex-start" } }}>
                            Setting
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{ width: { xs: "100%", sm: "300px" }, textAlign: { xs: "center", sm: "right" } }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 3 }}>
                        Join The Vision Of Idea
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: { xs: "center", sm: "flex-end" } }}>
                        <TextField
                            placeholder="Enter E-Mail"
                            sx={{
                                backgroundColor: "rgb(59,61,69)",
                                borderRadius: 4,
                                width: { xs: "90%", sm: "100%" },
                                input: { color: "white" },
                            }}
                        />

                        <Button
                            sx={{
                                textTransform: "none",
                                backgroundColor: "rgb(51,53,61)",
                                color: "white",
                                p: 2,
                                borderRadius: 2,
                                width: { xs: "60%", sm: "150px" },
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ width: "100%", textAlign: "center", mt: 5 }}>
                    <Typography>All Rights Reserved © 2025</Typography>
                </Box>
            </Box>

        </Box>

    )
}

export default Footer