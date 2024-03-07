import React, { useState, useEffect } from "react";
import { Icon } from "@blueprintjs/core";

const SuccessMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="success-message">
          <Icon icon="tick-circle" iconSize={25} color="green" />
          <span className="success-text">Meddelande har skickats</span>
        </div>
      )}
    </>
  );
};

export default SuccessMessage;
