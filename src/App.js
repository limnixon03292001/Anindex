import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import {QueryClient, QueryClientProvider} from 'react-query';
import { Route, Routes } from 'react-router-dom';
import AnimeFull from './Pages/AnimeFull/AnimeFull';
import TopAnime from './Pages/TopAnime/TopAnime';
import SeasonNow from './Pages/SeasonNow/SeasonNow';
import TopUpcoming from './Pages/TopUpcoming/TopUpcoming';
import ScrollButton from './components/ScrollButton/ScrollButton';


const queryClient = new QueryClient();


function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/anime/:id" element={<AnimeFull/>}/>
        <Route path="/season-now" element={<SeasonNow/>}/>
        <Route path="/top-anime" element={<TopAnime/>}/>
        <Route path="/top-upcoming" element={<TopUpcoming/>}/>
      </Routes>
      <ScrollButton />      
    </QueryClientProvider>
  );
}

export default App;
