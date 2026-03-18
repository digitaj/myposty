

const Footer = (props) => {

    return(
        <div className="col-md-12">
            <h1>Footer section</h1>
            <h3>Your wallet balance is : {props.wb} </h3>
        </div>
    )

}

export default Footer;