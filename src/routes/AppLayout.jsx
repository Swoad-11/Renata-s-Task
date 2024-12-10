import { Navbar } from "../components/Navbar";

// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-10">{children}</div>
    </>
  );
}

export default AppLayout;
