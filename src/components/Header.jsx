import styles from "./Header.module.css";

const Header = ({name, wb}) => {
    // console.log(props);
    //logics and data
    const appname = "Chopchop Fastfood";
    let productsCount = 10;
    const rowStyle = {
        minHeight: "200px",
        border: "2px solid red",
        padding: "50px 20px"
    }

    
    return (// return handles things u want to display alone
        <div className= {`row ${styles.myrow}`} style={rowStyle}>
            <div className="col-md-12">
                <h1> {name} </h1>
                <h2>Wallet Balance: {wb} </h2>
                <h4> Total Products: {productsCount+1}  </h4>
                <button className="btn btn-primary" onClick={()=>{alert(`You are welcome to ${appname}`)} }>Click Me</button>
            </div>
        </div>
    )
}

export default Header;