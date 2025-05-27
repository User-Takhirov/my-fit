import { Children } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{Children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};
