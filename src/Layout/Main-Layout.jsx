import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({children}) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};
