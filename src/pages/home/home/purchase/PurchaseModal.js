import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PurchaseModal = ({ open, handleClose, exploreProduct }) => {
  const { name, price } = exploreProduct;
  const { user } = useAuth();
  const initialInfo = {
    Name: user.displayName,
    email: user.email,
    phone: "",
  };
  const [purchaseInfo, setpurchaseInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...purchaseInfo };
    newInfo[field] = value;
    setpurchaseInfo(newInfo);
  };

  const handlePurchaseSubmit = () => {
    // collect data
    const buyerInfo = {
      ...purchaseInfo,
      serviceName: name,
      price,
    };
    console.log(buyerInfo);
    // send data

    // fetch("https://young-reef-21634.herokuapp.com/buyersInfo", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(buyerInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <form onSubmit={handlePurchaseSubmit}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={name}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              onBlur={handleOnBlur}
              name="buyerName"
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="Phone"
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={price}
              size="small"
            />
            <Button variant="contained">Buy Now</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PurchaseModal;
