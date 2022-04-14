
//import './App.css';
import Navbar from './components/navbar';
import Bar from './components/bar';
import Subs from './components/subscription';
import Review from './components/review';
import Coupons from './components/coupons';
import Order from './components/order';
import Merchandise from './components/merchandise';
import Giftboxes from './components/giftboxes';
import Location from './components/location';
import Deal from './components/deal';
import Beforefootor from './components/beforefootor';
import Footor from './components/footor';
import Blank from './components/blank';
import Contact from './components/contact'










function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Blank></Blank>
     <Bar></Bar>
     <Review></Review>
     <Order></Order>
     <Location></Location>
     <Deal></Deal>
     <Giftboxes></Giftboxes>
     <Merchandise></Merchandise>
     <Coupons></Coupons>
     <Contact></Contact>
     <Subs></Subs>
     <Beforefootor></Beforefootor>
    <Footor></Footor>
    </div>
  );
}

export default App;
