import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Pdf() {
    const [pdfs, setPdfs] = useState([]);
   
    let baseUrl = 'http://localhost:4000/pdf'
     let data = async()=>{
        let d = await axios.get(baseUrl);
        
       setPdfs(d.data)
     }
     useEffect(() => {
       
        data();
      
     }, [])
 
     const deletePdf = async (id) => {
        try {
            const response = await axios.post('http://localhost:4000/pdfDelete', { _id: id });
            console.log(response.data.message);
            // Update the list after deletion
            setPdfs(prevPdfs => prevPdfs.filter(pdf => pdf._id !== id));
        } catch (error) {
            console.error("Error deleting PDF:", error);
        }
    };

 
  useEffect(() => {
    
  deletePdf();
   
  }, [])
  
   
    
  return (
    <div>
            <h1>PDF List</h1>
            {pdfs.length > 0 ? (
                pdfs.map((item) => (
                    <div key={item._id}>
                        <Link to={`http://localhost:4000/uploads/${item.pdfName}`} target="_blank">
                            {item.pdfName}
                        </Link>
                        <button onClick={() => deletePdf(item._id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No PDFs available.</p>
            )}
        </div>
  )
}

export default Pdf
