import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const OtpInput = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex justify-center">
      <MuiOtpInput
        length={6}
        value={otp}
        onChange={(value) => setOtp(value)}
        TextFieldsProps={{
          sx: {
            "& .MuiInputBase-root": {
              border: "2px solid orange",
              backgroundColor: "white",
              width: "50px",
              height: "50px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "orange" },
              "&:hover fieldset": { borderColor: "darkorange" },
              "&.Mui-focused fieldset": { borderColor: "orangered" },
            },
            input: {
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default OtpInput;
