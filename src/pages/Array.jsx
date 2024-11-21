




import { useEffect, useState } from "react";
const Array = () =>{
const [contractPerforma, setContractPerforma] = useState([])
const [shippingTransaction, setShippingTransaction] = useState([])
const [selectedShippingTransaction,setSelectedShippingTransaction] = useState(0)
// const [selectedStatus,setSelectedStatus] = useState(0)
const deleteproduct = (contractPerformas) =>{
}
useEffect (() =>{
fetch('http://localhost/project/a_ContractPerforma.php')
.then( response => response.json())
.then(contractPerforma =>
    {
    //    console.log("data: ",contractPerforma);setContractPerforma(contractPerforma)
       setContractPerforma(contractPerforma)
    })
},[])
useEffect (() => {
fetch('http://localhost/project/a_ShippingTransactionFilter.php?status=1&id='+selectedShippingTransaction)
.then(response => response.json())
.then(shippingTransaction =>
    {
        // console.log(shippingTransaction)
      setShippingTransaction(shippingTransaction)
    })
},[selectedShippingTransaction])
return(
<>
<div className="container ">
    <div className="row">
            <table className="table table-striped table-hover mt-5" >
                <thead>
                <tr>
                    <th className='border'>ContractNo</th>
                    <th className='border'>Quantity</th>
                    <th className='border'>EstimatedContainer</th>
                    <th className='border'>Packaging</th>
                    <th className='border'>PackedInID</th>
                    <th className='border'>Action</th>
                </tr>
                </thead>
                <tbody>
                {contractPerforma.map((contractPerformas) => (
                    <tr key={contractPerformas.ContractPerformaID} onClick={() => setSelectedShippingTransaction(contractPerformas.ContractPerformaID)}
                    style={{ cursor: "pointer"}}>
                    <td>{contractPerformas.ContractNo}</td>
                    <td>{contractPerformas.Quantity}</td>
                    <td>{contractPerformas.EstimatedContainer}</td>
                    <td>{contractPerformas.Packaging}</td>
                    <td>{contractPerformas.PackedInID}</td>
                    <td>
                        <button
                        className="btn btn-danger"
                        onClick={() => deleteproduct(contractPerformas)}>
                        Delete
                        </button>
                        <button
                        className="btn btn-success"
                        onClick={() => deleteproduct(contractPerformas)}>
                        Edit
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className="row mt-5">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th className='border'>MBL</th>
                    <th className='border'>NoOfTruck</th>
                    <th className='border'>RawMaterialID</th>
                    <th className='border'>ShippingLineID</th>
                    <th className='border'>SupplierID</th>
                    <th className='border'>Action</th>
                </tr>
                </thead>
                <tbody>
                {shippingTransaction.map((shippingTransactions) => (
                    <tr key={shippingTransactions.ShippingTransactionID} >
                    <td>{shippingTransactions.MBL}</td>
                    <td>{shippingTransactions.NoOfTruck}</td>
                    <td>{shippingTransactions.RawMaterialID}</td>
                    <td>{shippingTransactions.ShippingLineID}</td>
                    <td>{shippingTransactions.SupplierID}</td>
                    <td>
                        <button
                        className="btn btn-danger"
                        onClick={() => deleteproduct(shippingTransaction)}>
                        Delete
                        </button>
                        <button
                        className="btn btn-success"
                        onClick={() => deleteproduct(shippingTransaction)}>
                        Edit
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody> 
            </table>
            </div>
        </div>
   </>
);
}
export default Array



