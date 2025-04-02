import React, { useState } from 'react'
import axios from "axios"

const AdminPage = () => {
    const url ="http://localhost:4000/pdf"
    
    const [pdfName, setPicture] = useState(null); // State to handle file input

    function handle(e) {
        if (e.target.id === 'pdfName') {
            setPicture(e.target.files[0]); // Update file state for 'picture'
        } else{
            console.log("err")
        }
    }
      
    function submit(e) {
        e.preventDefault();

        const formData = new FormData();
       
        formData.append('pdf', pdfName);

        axios
            .post(url, formData)
            .then(function (response) {
                console.log(response);
                // Handle success
            })
            .catch(function (error) {
                console.log(error);
                // Handle error
            });
    }


  return (
    <div>
    <form onSubmit={(e) => submit(e)}>
   
   
        
        <input onChange={(e) => handle(e)} id="pdfName" type="file" />
       
        <button type="submit">Submit</button>
    </form>
</div>
  )
}

export default AdminPage
