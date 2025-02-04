import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const OtpInput = () => {
  const [otp, setOtp] = useState("");

  return (
    <MuiOtpInput
      length={6}
      value={otp}
      onChange={(value) => setOtp(value)}
      TextFieldsProps={{
        sx: {
          "& .MuiOutlinedInput-root": {
            borderColor: "orange",
            backgroundColor: "white",
            "& fieldset": { borderColor: "orange" },
            "&:hover fieldset": { borderColor: "darkorange" },
            "&.Mui-focused fieldset": { borderColor: "orangered" },
          },
          input: {
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
      }}
    />
  );
};

export default OtpInput;
