
import './App.css';
import {Col ,Container,Form,Row} from 'react-bootstrap';
 import {use, useState} from 'react';
// function App() {
//      let[uname,setuname]=useState('');
//      let[pass,setpass]=useState('');
//      let handleSubmit=(event)=>{
//          event.preventDefault();
//          console.log(uname,pass)

//      }
//     //  let getUname=(event)=>{
//     //       setuname(event.target.value)
//     //  }


//   return (
//     <div className="App">
//       <div className='container'>
//          <div className='row'>
//              <div className='col-lg-6'>
//                 <form onSubmit={handleSubmit}>
//                      <div className='text-start my-3'>
//                          <label>Username</label>
//                          <input type='text' onChange={(event)=>setuname(event.target.value)} className='form-control' value={uname}/>
//                      </div>
//                      <div className='text-start my-3'>
//                          <label>Password</label>
//                          <input type='password' onChange={(event)=>setpass(event.target.value)} className='form-control'/>
//                      </div>
//                      <div className='text-start my-3'>
//                          <button>login</button>
//                      </div>
//                 </form>
//              </div>
//          </div>

//       </div>
//     </div>
//   );
// }
function App(){
   let[formData,setformData]=useState(
    {
      uname:'',
      uemail:'',
      uphone:'',
      umessage:'',
      index:''
    }
   );
   let [userdata,setuserdata]=useState([]);
   let getValue=(event)=>{
        let oldData={...formData}
        let inputname=event.target.name;
        let inputvalue=event.target.value;
        oldData[inputname]=inputvalue;
        setformData(oldData)
   }
   let handleSubmit=(event)=>{
       let currentformdata={
         uname:formData.uname
         ,uemail:formData.uemail,uphone:formData.uphone
         ,umessage:formData.umessage
       }
       let olduserdata=[...userdata,currentformdata];
       setuserdata(olduserdata);
       event.preventDefault();

   }



  return(
    <Container fluid>
      <Container>
        <Row>
          
          <Col className='text-center py-5'>
          <h1>Enquiry Now</h1></Col>
        </Row>
        <Row>
          <Col lg={5}>
             <Form onSubmit={handleSubmit}>
                <div className='pb-3'>
                   <label className='form-label'>Name</label>
                   <input type='text' onChange={ getValue } name="uname" value={formData.uname} className='form-control'/>
                </div>
                <div className='pb-3'>
                   <label className='form-label'>Email</label>
                   <input type='email'  name="uemail"  onChange={ getValue } value={formData.uemail} className='form-control'/>
                </div>
                <div className='pb-3'>
                   <label className='form-label'>Phone</label>
                   <input type='text'  name="uphone" onChange={ getValue } value={formData.uphone} className='form-control'/>
                </div>
                <div className='mb-3'>
                   <label className='form-label'>Message</label>
                   <textarea class='form-control'  name='umessage' onChange={ getValue }  value={formData.umessage} id="" rows="3"/>
                </div>
              <button className='btn btn-primary'>
                {
                  formData.index!=="" ? 'Update':'Save'
                }
              </button>
             </Form>
          </Col>
          <Col lg={7}></Col>
        </Row>
      </Container>
    </Container>
  )
}




export default App;
