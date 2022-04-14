
//import './App.css';
import Navbar from './components/navbar';
import Bar from './components/bar';
import Subs from './components/subscription';
import Review from './components/review';
import Coupons from './components/coupons';
import Order from './components/order';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Bar></Bar>
     <Review></Review>
     <Subs></Subs>

    </div>
  );
}

export default App;
