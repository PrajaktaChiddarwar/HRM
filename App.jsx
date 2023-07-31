
import Registration from './src/Component/Registration'
import Contractor from './src/Component/Contractor';

import { Routes,Route,BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Registration />}></Route>
          <Route exact path="/contractor" element={<Contractor />}></Route>
        </Routes> 
</BrowserRouter>
        {/* <Contractor/> */}
  </>
  )
}

export default App
