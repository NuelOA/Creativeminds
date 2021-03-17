import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Logo from '../Images/logo.png'
import Admission from '../Images/undraw_education.svg'
import FadeIn from 'react-fade-in';
// const axios = require('axios').default;

class Admissions extends React.Component{
       
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName:'',
//       email: '',
//       number:'',
//       select: ''
//     }
// }

// onNameChange(event) {
//   this.setState({firstName: event.target.value})
// }

// onNameChange(event) {
//   this.setState({lastName: event.target.value})
// }


// onEmailChange(event) {
//   this.setState({email: event.target.value})
// }

// onSubjectChange(event) {
//   this.setState({number: event.target.value})
// }

// onMsgChange(event) {
//   this.setState({select: event.target.value})
// }

// submitEmail(e){
//   e.preventDefault();
//   axios({
//     method: "POST", 
//     url:"/send", 
//     data:  this.state
//   }).then((response)=>{
//     if (response.data.status === 'success'){
//         alert("Message Sent."); 
//         this.resetForm()
//     }else if(response.data.status === 'fail'){
//         alert("Message failed to send.")
//     }
//   })
// }

// resetForm(){
//   this.setState({firstName:'', lastName: '', email: '',number:'', select: ''})
// }


    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <>                
                      <FadeIn>   
                    <header className="App-header">
                    <div class="container-fluid">
                            <div class="container">
                          <h1 class="display-2"> <img id="admilogo" src={Admission} /><br />Admissions</h1>
                          
                          <p id="adform">Select a program of your choice in the form below and fill the form for the program selected 
                           to apply. We will get back to you shortly. Or call any of our numbers below for assistance or admission
                         
                           <br />
                           <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                           </p>
                           </div>
                           </div>
                          </header>
                          


                       <div class="container-fluid">
                           <div class="container">
                             <div id="adHead">
                  <form id="admission-form"method="POST"action="https://formspree.io/f/xvovjnbq"
                  enctype="multipart/form-data">
                         {/* <img id="logo" src={Logo} /> */}
                         <h1 id="adminformhead">Creative Minds Preschool<br />Admission Form</h1>

                         
                           <div class="adform">
                          <div class="row">
                          <div class="col">
                      <input type="text" name="firstName"class="form-control" placeholder="First name" required/>
                        </div>
                       <div class="col">
                     <input type="text" name="lastName"class="form-control" placeholder="Last name"required/>
                     </div>
                     
                          </div>
                             

                             <br />
                         
                    <div class="row">
                    <div class="col">
                    <input type="email" name="_replyto"class="form-control" placeholder="Email"required/>
                    </div>
                    <div class="col">
                    <input type="number"name="number" class="form-control" placeholder="Phone Number"required/>
                    </div>
                </div>
                    

                    
                   
                   <div class="adform"></div>

                <div class="form-group">
    <label for="exampleFormControlSelect1">Select Program</label>
    <select name="select"class="form-control" id="exampleFormControlSelect1"required >
      <option>Infant</option>
      <option>Toddler</option>
      <option>Preschool</option>
      <option>Kindergarten</option>
    </select>
  </div> 


               <button type="submit" value="send" class="btn-1"><i class="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;Apply</button>
              </div>

                           
                  </form>
                  </div>
                
                  </div>
                  </div>

                  </FadeIn>    
            </>
        )
    }
}

export default Admissions