import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
