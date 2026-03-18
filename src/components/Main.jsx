


//import the image like a component

import contact from "../images/contact.jpg"
const Main = ({products}) => {

    let sn=1;
    return(
        <div className="col-md-8">
            <h1>Main Section</h1>
            <img src={contact} alt="background picture" className="img-fluid" />
            <table className="table">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((pro) =>{
                            return (
                                
                                <tr key={pro.id}>
                                    <td>{sn++}</td>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Main;