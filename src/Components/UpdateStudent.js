import {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

//import Form from 'react-bootstrap/Form';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


//import {ScaleLoader} from 'react-spinners';
//import {spinnerOverride} from '../spinnerStyles'



const UpdateStudent =() => {

    const { id }  = useParams();
    //const baseURL = process.env.REACT_AAPP_BASE_URL
    //const [loading, setLoading] = useState(false);



    useEffect(() => {

      //console.log('id',id)
        //const token = sessionStorage.getItem("accessToken")
        //console.log("student_id", student_id);

       //setLoading(true);

       axios.get(`http://localhost:4000/getStudent/${id}`,{

        /*headers:{
          Authorization: Bearer ${token},
          'Content-Type': 'application/json',
        },*/
      })

      .then(res => {
   
        setData({
        
            id: res.data._id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            gender: res.data.gender

        });

        /*.catch(err =>console.log(err)).finally(() =>{
          setLoading(false);
       });*/

      });


    },[id]);


    const [data, setData] = useState({
        _id: "",
        firstname: "",
        lastname: "",
        gender: ""
    });

const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
}

//................................................................

const UpdateStudent = (e) => {

    e.preventDefault()

//const token = sessionStorage.getItem("accessToken")
        
       //setLoading(true);

       axios.patch(`http://localhost:4000/updateStudent/${id}`, data, {
        /*headers:{
          Authorization: Bearer ${token},
          'Content-Type': 'application/json',
        },*/
       })

       //.then(res=>console.log(res));
       .then(res => {

        toast.success('Student updated successfully',{
            position : toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        })
        //navigate ('/UnitofMeasurement)
       })
    
        //.then(res=>console.log(res));


        .catch (err => {
            toast.error('An error occured while updating the Student ', {
              position : toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
        
        })/*.finally(() => {
            setLoading(false)
        })*/



}

return (



  <div>





  <Form onSubmit={UpdateStudent }>

  <h3 className="createHeading"> Update Student  </h3>


  <Form.Group className="mb-3" controlId="student_id">

<Form.Label>id: </Form.Label>
<Form.Control  type="input"  required
 placeholder="Enter Student Name"

onChange={handleChange}

value={data.id}
name="id"
disabled="disabled"
hidden
/>
</Form.Group>

    <Form.Group className="mb-3" controlId="student_id">

      <Form.Label>Firstname:</Form.Label>
      <Form.Control  type="input"  required
       placeholder="Enter Student Name"

      onChange={handleChange}

      value={data.firstname}
    name="firstname"
     />
    </Form.Group>


    <Form.Group className="mb-3" controlId="unit">
      <Form.Label>Lastname:</Form.Label>
      <Form.Control    
      
      type="input"
placeholder="Enter Student Name"
required 
onChange={handleChange}
value={data.lastname}
name="lastname"
 
      />
    </Form.Group>


    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Select  name="gender" value={data.gender}  onChange={handleChange}>
    <option>--Gender</option>
    <option>Male</option>
    <option>Female</option>
    </Form.Select>
    </Form.Group>




    

    <Button variant="primary" type="submit"> Update Student </Button>
    
    <ToastContainer/>

  </Form>
</div>








)
}

export default UpdateStudent;