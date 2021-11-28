import React, {  useState } from 'react'
import { Form, Button, Card, Modal, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import {} from '../../firebase/firebase';
import {getAuth, createUserWithEmailAndPassword,sendEmailVerification,  onAuthStateChanged} from 'firebase/auth'
import { getDatabase, ref, set} from "firebase/database"
import './Login.css'
import ReCAPTCHA from 'react-google-recaptcha';

    export default function Register() {

        //declare authentication of firebases
         const auth = getAuth();

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [recaptchaHandler, setHandler] = useState(false);

        function onChange(value) {
    
           setHandler(true);
         
         }

        // Register Code
         // Register Code
         const [email, setEmail] = useState();
         const [password, setPass] = useState();
         const [password2, setPass2] = useState();
           const [fname, setFname] = useState();
       const [lname, setLname] = useState();
      const [bday, setBday] = useState();
       const [occu, setOccu] = useState();
         const [insti, setInsti] = useState();


  function onRegister  ()
  {
      if (recaptchaHandler === true) {
        if (password !== password2)
        {
        alert("Passwords do not Match");
          return
        }
  
        else {
  
          createUserWithEmailAndPassword(auth,email,password)
          .then(() => {
            //check if user succesfully created account in order to continue hehe
            onAuthStateChanged(auth, (user) => {
              if (user) {
  
                const uid = user.uid;
    
                const db = getDatabase();
                set(ref(db, 'users/' + uid), {
                  Name: fname +" "+ lname,
                  Birthday:bday,
                  Occupation: occu,
                    Institution: insti,
                    email: email,
                    level: 1
                });
              
                sendEmailVerification(auth.currentUser)

                .then(() => {
                setBday("")
                setEmail("")
                setFname("")
                setLname("")
                setOccu("")
                setInsti("")
                setPass("")
                setPass2("")
               alert('You have Succesfully Registered your Account!, Please Check your Email for Verification');
                  

                          
               return
               });
  
              } else {
  
                  return
  
              }
            });
          }).catch((e) => alert(e.message))
            
        }
        return
      } 
      else {
        alert("Please verify using Recaptcha")
      }
    
    }
  

    return (
     
        
<>

<div>
      <Helmet>
        <title>ConquError | Register</title>
        <meta name="description" content="ConquError Register page" />
      </Helmet>
    </div> 


      <div className="background-area" id="particles-js">
                
                  <div id='stars'></div>
                  <div id='stars2'></div>
                  <div id='stars3'></div>
                  <div id='title'></div>
                  
      <Link to="/" style={{ textDecoration: 'none' }}><img to="/home" src="../Assets/white-logo.svg" className="Headerlogo mt-2" alt="logo" style={{width: "190px",paddingLeft: "20px"}}/></Link>
      
      <Container className="d-flex align-items-center justify-content-center mt-5 mb-5" style={{ minHeight: "100vh"}}>
     <div className="w-100" style={{ maxWidth: "400px"}}>

                <Card>
                <Card.Body>
                <h3 className="text-center mb-4 text-primary fw-bold">Register</h3>
                <Form className="">
                <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control value={email || ''} onChange={e => setEmail(e.target.value)}  name = "email" type="email" autoComplete="username" required placeholder="Email Address"/>
                </Form.Group>
                <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password || ''} onChange={e => setPass(e.target.value)}   name = "password" type="password" autoComplete="new-password" required placeholder="Password"/>
                </Form.Group>
                <Form.Group id="password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control value={password2 || ''} onChange={e => setPass2(e.target.value)}   name = "password" type="password" autoComplete="new-password" required placeholder="Password"/>
                </Form.Group>
                <Form.Group id="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control value={fname || ''} onChange={e => setFname(e.target.value)}  name = "name" type="name" required placeholder="First Name"/>
                </Form.Group>
                <Form.Group id="lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control value={lname || ''} onChange={e => setLname(e.target.value)}   name = "name" type="name" placeholder="Last Name"/>
                </Form.Group>
                <Form.Group id="bday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control  value={bday || ''} onChange={e => setBday(e.target.value)}   name = "Birthday" type="date" required />
                </Form.Group>

                <Form.Group id="occu">
                <Form.Label>Occupation</Form.Label>
                <Form.Select aria-label="Default select example" value={occu || ''} onChange={e => setOccu(e.target.value)}>
                <option>Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Professor">Professor</option>
                <option value="Others...">Others...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group id="inst">
                <Form.Label>Institution</Form.Label>
                <Form.Select aria-label="Default select example" value={insti || ''} onChange={e => setInsti(e.target.value)}>
                <option>Select Institution</option>
                <option value="LSPU">LSPU</option>
                <option value="PUP">PUP</option>
                <option value="TUP">TUP</option>
                </Form.Select>
                </Form.Group>

                <Form.Group id="checkAgree" className="mt-3" required>
          
                <label onClick={handleShow} className="text-primary">Terms and Conditions</label>

                </Form.Group>

                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="modal-body text-justify">

                <p className=""><strong>ConquError</strong> values and respects your right to privacy. We are committed to protect the privacy of our website visitors. We will only collect, record, store, process, and use your personal information in accordance with the Data Privacy Act of 2012, its Implementing Rules and Regulations, the issuances by the National Privacy Commission, and other pertinent laws.
                </p>

                <p>This Privacy Policy informs you of updates in our corporate policies regarding the collection, use, storage, disclosure, and disposal of personal information we receive and collect from our customers, and any individual who communicates, raises inquiries and concerns, as well as transacts with us through our authorized representatives.

                We will only use your data based on the limitations set by this policy.
                </p>

                <p>We  only once to collect and stored your information, this policy will allow you to be  protected, and any update with regards of your current information will be done via request to the admin. The user will be notified of the changes.</p>
                
                <Button className="w-100 mt-2" >Agree</Button>

                </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
                </Modal>
               
                <div className="col-xs-1 mt-3" align="center">
                            <ReCAPTCHA
                            sitekey="6Lf0LR4dAAAAADXK477tFevARCNFk0rY-Z5ouawp"
                            onChange={onChange}
                            />
                </div>
                <Button className="w-100 mt-2" onClick={onRegister} >Sign Up</Button>
                
                </Form>
                </Card.Body>
                    <div className="w-100 text-center mt-2 mb-4">
                      Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
                    </div>
            </Card>

     </div>
      </Container>
          
     </div>
</>
     
    )
}


