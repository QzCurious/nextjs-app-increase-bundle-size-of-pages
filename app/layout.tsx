import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>Layout</div>
        {children}
      </body>
    </html>
  );
};

export default Layout;