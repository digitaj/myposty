

const Dashboard = () => {

    let appmode = "dark";
    //conditional rendering using if else statement

    if(appmode == "dark"){
            return (
            <div className='row bg-dark text-primary'>
                <div className="col-md-12">
                    <h1>Dashboard</h1>
                    <p>You are welcome</p>
                </div>
            </div>
        )

    }else{
            return (
            <div className='row'>
                <div className="col-md-12">
                    <h1>Dashboard</h1>
                    <p>You are welcome</p>
                </div>
            </div>
        )
    }
}

export default Dashboard