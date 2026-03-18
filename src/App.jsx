import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./style.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const App = () => {
    const appName = "Chopchop App"; //assume this is coming from an api

    let walletBalance = 1000;
    let isLoggedIn = true;
    const students = ["Yemi", "David", "Scoffield", "Ojule"];
    const products = [
        {id:1, name:"handkerchief", price: 1000},
        {id:2, name:"Dettol soap", price: 2000},
        {id:3, name:"fuel", price: 1200},
        {id:4, name:"Exortic fruit salad", price: 5000}
    ];

    return (
      <div className="container">

        {/* conditional rendering */}
        {isLoggedIn ? <Dashboard /> : <Login />}  

          <Header   name={appName} wb = {walletBalance} />
          <div className="row myrow">
              <Main products={products} />
              <Sidebar students = {students} />
          </div>
                <Footer  wb = {walletBalance} />
      </div>
    )
}

export default App;