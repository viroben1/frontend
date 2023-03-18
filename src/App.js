import React from "react";
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


function App() {
return (
<div>
<Header/>
<main className="pt-16 bg-teal-100 min-h-[calc(100vh)]">
          <Outlet/>
        </main>
</div>
);
}

export default App;
