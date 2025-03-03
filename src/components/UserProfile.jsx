import { useState, useEffect } from "react";
import { recentVideos } from "../data/mockData"; 
import VideoCard from "./VideoCard"; 

const UserProfile = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(recentVideos);
  }, []);

  return (
    <aside className="w-[30rem] p-8 bg-[#F6F2DD] rounded-3xl shadow-md flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <img src="/image.png" alt="User Avatar" className="w-32 h-32 rounded-full mb-3" />
        <h3 className="text-2xl font-bold text-gray-800">Rodrigo Gogi</h3>
        <p className="text-gray-500 text-lg">Estudiante Universitario</p>
      </div>

      <hr className="border-gray-300 my-5" />

      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold">Continúa donde lo dejaste</h4>
        <img src="/notification.svg" alt="Notificaciones" className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="space-y-5 flex-1 overflow-y-auto">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </aside>
  );
};

export default UserProfile;
