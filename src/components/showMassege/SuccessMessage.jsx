import React, { useState, useEffect } from "react";
import { Icon } from "@blueprintjs/core";

const SuccessMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="success-message">
          <Icon icon="tick-circle" iconSize={25} color="green" />
          <span className="success-text">
            Your message has been successfully sent
          </span>
        </div>
      )}
    </>
  );
};

export default SuccessMessage;
