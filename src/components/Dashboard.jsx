import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import UserProfile from "./UserProfile";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 p-6">
        <div className="flex gap-6 mt-6">
          <MainContent />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
