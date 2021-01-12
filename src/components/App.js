import video from "../data/video.js";
import VideoDetails from "./VideoDetails";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDetails video={video}/>
    </div>
  );
}

export default App;

/*
HIERARCHY:
App
  -VideoDetails
  -CommentBox
    -Comment
*/