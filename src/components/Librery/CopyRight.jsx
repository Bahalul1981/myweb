import React from "react";

function CopyRight() {
  return (
    <div>
      <p className="header-p">
        <p>&copy; {new Date().getFullYear()}. All rights reserved to Arvid.</p>
      </p>
    </div>
  );
}

export default CopyRight;
