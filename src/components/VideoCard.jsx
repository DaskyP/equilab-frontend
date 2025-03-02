const VideoCard = ({ video }) => {
    return (
      <a href={video.link} className="block bg-white rounded-lg shadow-md overflow-hidden">
        <img src={video.thumbnail} alt={video.title} className="w-full h-24 object-cover" />
        <div className="p-3">
          <h5 className="text-sm font-semibold">{video.title}</h5>
          <p className="text-xs text-gray-600">{video.description}</p>
          <span className="text-blue-500 text-xs font-semibold">Ver más</span>
        </div>
      </a>
    );
  };
  
  export default VideoCard;
  