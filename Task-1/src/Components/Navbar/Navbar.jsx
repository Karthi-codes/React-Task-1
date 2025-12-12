import { Box, List, ListItem, Typography, } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgb(8,10,22)",
                color: "white",
                p: { xs: 1.5, sm: 2 },
                position: "fixed",
                zIndex: 10,
                width: "100%",
            }}
        >

            <Typography
                variant="h5"
                sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "20px", sm: "24px", md: "28px" },
                    pl:{md:7}
                }}
            >
                Logo
            </Typography>

            <List
                sx={{
                    display: { xs: "none", md: "flex" },
                    fontFamily: "sans-serif",
                    gap: 4,
                }}
            >
                <ListItem sx={{ cursor: "pointer", padding: 0 }}>Home</ListItem>
                <ListItem sx={{ cursor: "pointer", padding: 0 }}>Cameras</ListItem>
                <ListItem sx={{ cursor: "pointer", padding: 0 }}>Lenses</ListItem>
                <ListItem sx={{ cursor: "pointer", padding: 0 }}>Accessories</ListItem>
            </List>

            <Box
                sx={{
                    display: "flex",
                    gap: { xs: 2, sm: 3, md: 5 },
                    alignItems: "center",
                }}
            >
                <IconButton>
                    <SearchIcon
                        sx={{
                            backgroundColor: "rgb(16,18,29)",
                            color: "white",
                            borderRadius: "50%",
                            p: 1,
                            fontSize: { xs: "40px", sm: "40px", md: "50px" },
                        }}
                    />
                </IconButton>

                <IconButton>
                    <ShoppingCartIcon
                        sx={{
                            backgroundColor: "rgb(16,18,29)",
                            color: "white",
                            borderRadius: "50%",
                            p: 1.2,
                            fontSize: { xs: "40px", sm: "40px", md: "50px" },
                        }}
                    />
                </IconButton>

                <IconButton
                    sx={{
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <MenuIcon
                        sx={{
                            backgroundColor: "rgb(16,18,29)",
                            color: "white",
                            borderRadius: "10px",
                            p: 1,
                            fontSize: "35px",
                        }}
                    />
                </IconButton>
            </Box>
        </Box>

    )
}

export default Navbar