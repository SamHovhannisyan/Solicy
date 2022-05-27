import React from 'react';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Layout from './components/Layout/index';
import Item from './components/Items/item';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Item />} />
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
