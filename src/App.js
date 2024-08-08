import React from 'react';
import Sidebar from "./component/sidebar";
import Information from "./component/information";
import { PlacesProvider } from "./component/PlacesContext";

function App() {
  return (
    <div className="bg-zinc-400 w-full h-screen">
      <div className="p-12 h-full w-full flex">
        <PlacesProvider>
          <Sidebar />
          <Information />
        </PlacesProvider>
      </div>
    </div>
  );
}

export default App;
