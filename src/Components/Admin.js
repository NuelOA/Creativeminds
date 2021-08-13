
import React from 'react'
import Logo from '../Images/logo.png'
import FadeIn from 'react-fade-in';
// const axios = require('axios').default;

class Admin extends React.Component {

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


    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <FadeIn>

                    <div class="container-fluid">
                        <div class="container">
                            <div id="adHead">
                                <form
                                    enctype="multipart/form-data" >
                                    {/* <img id="logo" src={Logo} /> */}
                                    <h1 id="adminformhead"><img id="logo" src={Logo} /></h1>
                                    <p class="adform">Admin Portal</p>

                                    <div class="adform">
                                        <div class="row">
                                            <div class="col">
                                                {/* <label>First Name:</label> */}
                                                <input type="text" name="Username" class="form-control" placeholder="Username" required />
                                            </div>

                                        </div>


                                        <br />

                                        <div class="row">
                                            <div class="col">
                                                {/* <label>Password:</label> */}
                                                <input type="password" name="" class="form-control" placeholder="Password" required />
                                            </div>
                                        </div>


                                        <button type="submit" value="send" class="btn-1"><i class="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;Login</button>
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

export default Admin