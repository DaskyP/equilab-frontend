import Layout from "../components/Layout";
import MainContent from "../components/MainContent";
import UserProfile from "../components/UserProfile";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="flex flex-1 p-6 gap-6">
        <MainContent>
          <UserProfile />
        </MainContent>
      </div>
    </Layout>
  );
};

export default DashboardPage;
