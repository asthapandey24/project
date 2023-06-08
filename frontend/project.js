function createcontact(event){
    event.preventDefault();

    

    const contactDetails={
       firstname : event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        mobilenumber: event.target.mobilenumber.value
    }


 axios.post(`http://localhost:3000/add-user`,contactDetails )
.then((response)=>{
    displayUser(contactDetails)
   console.log(response);
})
 .catch((err)=>{
    document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
    console.log(err)
})

}
    


window.addEventListener('DOMContentLoaded', (event) => { 
    axios.get(`http://localhost:3000/get-user`)
       .then((response) =>{
        console.log(response)
        for(var i=0; i< response.data.details.length; i++){
            displayUser(response.data.details[i])
        }
       })
       .catch((error)=>{
         console.log(error)
       })
    })




    function displayUser(details){
 
        
        
    
     const parentNode = document.getElementById('Users');
     const childHTML = `<li id = ${details.id} >${details.firstname} - ${details.lastname} - ${details.email} - ${details.mobilenumber}
     <button onClick = deleteUser('${details.id}')>Delete</button>
    <button onclick = edituser('${details.id}','${details.email}','${details.mobilenumber}')>Edit</button> </li>`
    
     parentNode.innerHTML = parentNode.innerHTML + childHTML;
    
    
    
     }
    
    
     function deleteUser(userId){
          axios.delete(`http://localhost:3000/delete-user/${userId}`)
          .then((response)=>{
            removeItemfromScreen(userId);
            console.log(response)
          })
        .catch((err)=>{
            console.log(err)
        })
    
         
     }
    
    
     function removeItemfromScreen(userId){
          
    
        const parentNode = document.getElementById('Users')
        const elem = document.getElementById(userId)
         parentNode.removeChild(elem)
    
     }
    
    
    
      // function edituser(userId, email, mobilenumber) {
      //   const updatedDetails = {
      //     email: email,
      //     mobilenumber: mobilenumber
      //   };
      // let promise1;
      // promise1 =   axios.put(`http://localhost:3000/update-user/${userId}`, updatedDetails)
      //     if(promise1){
      //       console.log(response);
      //       deleteUser(userId);
      //       alert('sucessfully updated');
      //     }
      //     else{
      //       try{
      //         promise1=  axios.post("http://localhost:3000/",updatedDetails);
      //         if(promise1)
      //            {
      //                alert("suceesfully inserted");
      //            }
      //      }catch(err){
      //        console.log(err);
      //      }
      //     }
      // }
      
    
      // function cleardataInputBox()
      // {
      //    document.getElementById('id3').value ="";
      //    document.getElementById('id4').value ="";
      // }
     
    
    
    







