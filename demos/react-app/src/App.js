import './App.css';

import { WcPlayer } from '@wcplayer/components'

function App() {
  return (
    <div className="App">
      <WcPlayer muted autoplay controls src="https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4" />
    </div>
  );
}

export default App;
