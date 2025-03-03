import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full flex bg-gradient-to-r from-yellow-100 to-yellow-400 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">{children}</div>
    </div>
  );
};

export default Layout;
