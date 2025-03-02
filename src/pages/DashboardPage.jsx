import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import UserProfile from "../components/UserProfile";

const DashboardPage = () => {
  return (
    <div className="h-screen w-screen flex bg-gradient-to-r from-yellow-100 to-yellow-400 p-6">
      <Sidebar />

      <div className="flex flex-1">
        <MainContent />

        <UserProfile />
      </div>
    </div>
  );
};

export default DashboardPage;
