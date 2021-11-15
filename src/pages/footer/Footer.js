import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "black",
        height: "250px",
        borderRadius: "7",
      }}
      sx={{ mt: 5 }}
    >
      <Typography variant="h4" sx={{ color: "ext.secondary" }}>
        Genius Sunglass Collection
      </Typography>

      <div>
        Copyright © 1998-2021 Focus Technology Co., Ltd. All Rights Reserved
      </div>
    </Box>
  );
};

export default Footer;
