import { useState,useEffect } from'react'
// import bootstrap from 'bootstrap'
// import css from'../css/Test.css'
// import { Link} from 'react-router-dom'
const TestPage = () => {
// const [data, setData] = useState([])


// const bootstrap = require('bootstrap')
const [finishProduct, setFinishProduct] = useState([]);
// const [newTask, setNewTask] = useState("");



// const addTask = () => {

// setTodoList([...todoList, newTask]);

// }
const deleteproduct = (taskName) =>{
// const arr = 

}
useEffect(() =>{
fetch('http://localhost/project/a_FinishProduct.php')
      .then(response => response.json())
      .then(finishProduct => {
        console.log("data: ", finishProduct);setFinishProduct(finishProduct)})
},[])


const [isTableView, setIsTableView] = useState(true);
  const toggleView = () => setIsTableView(!isTableView);

  return (
        <div className='row'>
    <div className='col-8'>
    <div className="container">
      <center>
      <h1>Finish Product List</h1>
      </center>
    <div className='d-flex justify-content-end' > 

        <button className="btn bg-success text-dark bg-opacity-25" onClick={toggleView}>
     <i className={isTableView ? "bi bi-card-checklist" : "bi bi-table"}></i> {/* Toggle icons */}
      </button>
    </div>

      {isTableView ? (
        // Table View
        <div className="row ">
          <table className="table table-striped table-hover  mt-2">
            <thead>
              <tr>
                <th className='border'>FinishProductID</th>
                <th className='border'>FinishProductCode</th>
                <th className='border'>FinishProduct</th>
                <th className='border'>Quantity</th>
                <th className='border'>Weight</th>
                <th className='border'>Action</th>
              </tr>
            </thead>
            <tbody>
              {finishProduct.map((product) => (
                <tr key={product.FinishProductID}>
                  <td>{product.FinishProductID}</td>
                  <td>{product.FinishProductCode}</td>
                  <td>{product.FinishProduct}</td>
                  <td>{product.Quantity}</td>
                  <td>{product.Weight}</td>
              
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteproduct(product)}>
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => deleteproduct(product)}>
                      Edit
                    </button>

                       
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card View
        <div className="row mt-2">
          {finishProduct.map((product) => (
            <div key={product.FinishProductID} className="col-md-3  mb-4 ">
              <div className="card border-gray ">
                <div className="card-body">
                  <h5 className="card-title">Finish Product ID: {product.FinishProductID}</h5>
                  <p className="card-text">
                    <strong>Finish Product Code:</strong> {product.FinishProductCode}
                  </p>
                  <p className="card-text">
                    <strong>Finish Product:</strong> {product.FinishProduct}
                  </p>
                  <p className="card-text">
                    <strong>Quantity:</strong> {product.Quantity}
                  </p>
                  <p className="card-text">
                    <strong>Weight:</strong> {product.Weight}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteproduct(product)}>
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => deleteproduct(product)}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
     </div>
  );
} 




export default TestPage