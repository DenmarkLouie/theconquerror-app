import React, {useEffect,useState} from 'react';
import Helmet from 'react-helmet';
import { onSnapshot,collection,getFirestore, query, orderBy} from 'firebase/firestore';
import {} from '../../firebase/firebase'
import Navbar from '../../Components/Navbar/Navbar'
import { Button, Row, Container, Col, Card, Offcanvas, Tab, Tabs, Accordion } from 'react-bootstrap';
import {  useHistory} from "react-router-dom"
import { getAuth } from 'firebase/auth'
import {  Link } from "react-router-dom"

//Icons for buttons
import * as FcIcons from "react-icons/fc";

const Lessons = () => {
    //Get Firestore Service from Firebase
    const forumdb = getFirestore();

    const auth = getAuth();

    const currentUser = auth.currentUser;
    //For Routing
    const history = useHistory()

    //declare area to throw list for forum
  const [courses, setCourse] = useState([]);


  //Lessons Collection Side Menu
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Automatically Fetches Data from Firestore to show all offered Lessons
  useEffect(
    () => {

      const collectionRef = collection(forumdb, "courses");
      const q = query(collectionRef,orderBy("Difficulty","asc"));
      onSnapshot(q, (snapshot) =>
        setCourse(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        
      )
      
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
 
    


  const enroll = async function(e){

    const listkey = e.target.getAttribute("data-id");
      if (currentUser === null)
      {
        if (window.confirm('You need to be logged-in to continue, Press Yes to Proceed to our Log-in Page')) {
          // Save it!
         history.push("/login")
        } else {
              //nothing
        }
      }
      else
      {
        sessionStorage.setItem('getLesson',listkey)
        history.push("/lessonscontent")
      }
};


    const showCourse = courses.map((courses) => (  
    <div key={courses.id} className="card mb-5">
      <div className="single-feature wow fadeInUp m-2 p-1" data-wow-delay=".4s">
        <h1 className="text-primary fw-bold">{courses.Difficulty}</h1>
        <img className="w-50 mx-auto d-block" src={courses.Image} alt={courses.Title} />
        <h3>{courses.Title}</h3>
        <p>{courses.Description}</p>
        <p className="mt-3 mb-4"><FcIcons.FcClock/> Duration {courses.Duration} hrs</p>
        <Button onClick={enroll}  data-id={courses.id} >Get Started</Button>
      </div>
    </div>
 ))

    return (
        <>

        {/* Division for Tab Page and Description*/}
        <div>
            <Helmet>
            <title>ConquError | Course</title>
            <meta name="description" content="ConquError Course page" />
            </Helmet>
        </div>
        <Navbar/>

      {/* Section for Course List*/}
        <section className="features section" style={{marginTop:"2rem"}}>
          
              <Container fluid="md" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              
                <Row>
                    <Col className="text-center text-secondary">
                      <div className="">
                          <h1 className="text-center text-secondary fw-bold">Welcome to Programming Course</h1>
                          <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                <div style={{textAlign:"center"}}>
                                  <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/3763/3763359.png" />
                                </div>
                              <Card.Body>
                                <Card.Title>My level: <strong>-</strong></Card.Title>
                                  <Card.Text>Your journey has just begun.</Card.Text>
                              </Card.Body>
                          </Card>
                      </div>
                    </Col>
    
                <Card className="mt-5">
                  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-3">
                    <Tab eventKey="profile" title="Overview" className=" mb-5 p-3">
                      <Container className="mb-2">
                        <Row xs="auto">
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcReading/> 7 Lessons</Button></Col>
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcQuestions/> 7 Assessment</Button></Col>
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcClock/> 21 Hours</Button></Col>
                          <Col className="mb-2"><Button variant="light"><FcIcons.FcVideoCall/> 7 Tutorials</Button></Col>
                        </Row>
                      </Container>
                      
                        <p className="mt-2 text-justify">
                          Hello Warrior, we know you’re new to computer programming, and you want to be ready and prepared to the upcoming battle.  This Course is design to help you and boost your knowledge in basic and fundamentals of C++ programming. 
                        </p>
                        <strong>Why start in this course?</strong>
                        <p>
                          According to Guru99, C++ is a general-purpose, object-oriented programming language. It was created by Bjarne Stroustrup at Bell Labs circa 1980. C++ is very similar to C (invented by Dennis Ritchie in the early 1970s). C++ is so compatible with C that it will probably compile over 99% of C programs without changing a line of source code. Though C++ is a lot of well-structured and safer language than C as its OOPs based.
                        </p>
                        <p>
                          Some computer languages are written for a specific purpose. Like, Java was initially devised to control toasters and some other electronics. C was developed for programming OS. Pascal was conceptualized to teach proper programming techniques. But C++ is a general-purpose language. It well deserves the widely acknowledged nickname “Swiss Pocket Knife of Languages.”
                        </p>

                        <strong>Course Path</strong>
                        <p>
                        The course path is composed of 7 lessons and good for 21hrs, you can learn everything from basics and fundamentals as well as watch video tutorial and programming demo from us ConquError team.
                        </p>
                        <p>
                          This practical C++ course will provide you with everything you need to get started. Then you'll be able to utilize this C++ foundation to learn and work in a variety of fields:
                        </p>
                        <ul>
                          <li>•	Operating system</li>
                          <li>•	Desktop Application</li>
                          <li>•	Video games</li>
                          <li>•	Artificial Intelligence</li>
                          <li>•	Arduino Application</li>
                        </ul>
                        <strong>How do I conquer my  error?</strong>
                        <ul>
                          <li>•	Simple and Practical: I show you exactly what you need to know to perform meaningful things using C++. This entails concentrating on what may provide you with the most benefit right now.</li>
                          <li>•	Step by step: each lesson under computer programming course is divided to its sub-content and it will help you to understand piece by piece so you can adjust and motivated to go further.</li>
                          <li>•	Tutorial: we add tutorial video to help you to visualize and have an idea on how programs created, and variables use in the programming.</li>
                        </ul>
                        <p>I show you exactly what you need to know to perform meaningful things using C++. This entails concentrating on what may provide you with the most benefit right now.</p>
                        <br/>
                        <Button variant="primary" onClick={handleShow}> Explore C++ </Button>
                    </Tab>

                    <Tab eventKey="home" title="Mechanics">

                      <Container>
                      <h1 className="fw-bold text-primary mb-2">Learn to Code and Conquer your error!</h1>

                      <h3 className="text-justify fw-bold">What’s your goal?</h3>
                        <Row>
                          <Col>
                            <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                  <div style={{textAlign:"center"}}>
                                    <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons.flaticon.com/png/512/2267/premium/2267676.png?token=exp=1638000379~hmac=ab215fe3559a1f6b44254c0adb0713b8" />
                                  </div>
                                <Card.Body>
                                  <Card.Title><strong>Explore Course </strong></Card.Title>
                                    <Card.Text>Begin your journey and explore the world of computer programming.</Card.Text>
                                </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                            <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                  <div style={{textAlign:"center"}}>
                                    <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/1535/1535019.png" />
                                  </div>
                                <Card.Body>
                                  <Card.Title><strong>Gain Skill </strong></Card.Title>
                                    <Card.Text className="text-justify">Focus your mind on what's needed to improve. The wind will be your guide.</Card.Text>
                                </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                            <Card style={{ width: '18rem', marginTop: '2rem' }} className="container mb-4">
                                  <div style={{textAlign:"center"}}>
                                    <Card.Img variant="top" className="mt-2 w-50" src="https://cdn-icons-png.flaticon.com/512/2906/2906496.png" />
                                  </div>
                                <Card.Body>
                                  <Card.Title><strong>Learn the Language</strong></Card.Title>
                                    <Card.Text>Be part of the nature, widen your knowledge by learning the language.</Card.Text>
                                </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                      <Container>
                        <h3>My Course Timeline</h3>
                        <section id="cd-timeline" className="cd-container rounded">
                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-picture">
                            </div>

                            <div className="cd-timeline-content">
                              <h2>Programming Concepts</h2>
                              <div class="timeline-content-info">
                                <span className="timeline-content-info-title">
                                  <i className="fa fa-certificate" aria-hidden="true"></i>
                                  Start Here!
                                </span>
                              
                              </div>
                              <p>Begin your journey by exploring the basic fundamentals of computer programming course.</p>
                              <ul class="content-skills">
                              <li>Variables</li>
                              <li>Conditions</li>
                              <li>Introductions</li>
                              <li>Fundamentals</li>
                              <li>Core</li>
                              </ul>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-movie">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Basic Programming Structures</h2>
                              <p>Programming structures defines the set of fundamentals that needs to be learned first to be able to understand the programming environment and create a well construct algorithm.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-picture">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Conditional Structures</h2>
                              <p>Conditional structures are computer programming that allows developer to set a conditional flow to a program using a set of conditions like if, if else, nested if, while and do while.Conditional structures are computer programming that allows developer to set a conditional flow to a program using a set of conditions like if, if else, nested if, while and do while.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-location">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Nested Condition</h2>
                              <p>A nested condition is the use of a condition in a condition. This way you can create a cascade of conditions: a certain paragraph will be displayed only if a certain condition is true.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-location">
                            </div> 

                            <div className="cd-timeline-content">
                              <h2>Looping Constructs</h2>
                              <p>In programming Looping constructors is useful to determine the program directions and assess the conditions created, it is being done using a for loop, and do while loop.</p>
                            </div>
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-movie">
                            </div>

                            <div className="cd-timeline-content">
                              <h2>Functions</h2>
                              <p>Functions allow to structure programs in segments of code to perform individual tasks. In C++, a function is a group of statements that is given a name, and which can be called from some point of the program.</p>
                            </div> 
                          </div> 

                          <div className="cd-timeline-block">
                            <div className="cd-timeline-img cd-movie">
                            </div>

                            <div className="cd-timeline-content">
                              <h2>Arrays</h2>
                              <p>Array is a form of solutions that allows the program to have a sequence and orderly arrange execution and results base on the conditions in the array form.</p>
                            </div> 
                          </div> 
                        </section> 
                      </Container>
                      <Container className="mb-5">
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>How to level-up my skills?</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                              est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                              est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Container>

                    </Tab>
                  </Tabs>
                </Card>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Programming Course</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {showCourse} 
                  </Offcanvas.Body>
                </Offcanvas>
                                        
                </Row>  
              </Container>
        </section>

      <a href="#top" className="scroll-top">
        <i className="fa fa-chevron-up"></i>
      </a>

   
    </>
    )
}

export default Lessons
