import React, { useState, useEffect } from "react";
import { Icon } from "@blueprintjs/core";

const FaieldMassege = () => {
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
        <div className="faield-message">
          <Icon icon="cross-circle" iconSize={25} intent="danger" />
          <span className="success-text">
            Your message has been successfully sent
          </span>
        </div>
      )}
    </>
  );
};

export default FaieldMassege;
