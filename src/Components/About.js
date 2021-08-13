import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom'
import Map from '../Components/Map'



class About extends React.Component {

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    render() {


        return (
            <>
                <FadeIn>
                    <div class="container-fluid">
                        <div className="content">
                            <center>
                                <h3 className="display-5"> Explore More <br /> About Us</h3>
                            </center>

                            <br />
                            <div class="container">
                                <div class="row">
                                    <div className="col-md-6">
                                        <h3 className="display-6">Interculturality</h3>

                                        We are a multicultural preschool and we have an intercultural approach. This means that different cultures interact, complement and enrich each other. We have a well-resourced library at the preschool with some books in the children's mother tongue that our multilingual staff read to the children. The objective is to familiarise children with literature from many different cultures
                                        The staff's language skills are also used to support communication with the children. We see interculturality in our preschool as an asset in education.
                                        <br />
                                        <br />
                                        <h3 className="display-6">Opening hours</h3>
                                        School is opened as early as 6:30 to 3:00 with optional after school care available..
                                        <br />
                                        <br />
                                        <br />
                                        <h3 className="display-6">  Complaints handling routines</h3>

                                        If you as a guardian have comments or complaints at the preschool, we would like to know. We see it as an opportunity to develop and improve our business.
                                        You always have the right to submit your complaints to us anonymously. If we receive an anonymous complaint or an anonymous comment, we treat it according to the same procedure as non-anonymous complaints / comments.
                                        In this way we can:
                                        Strengthen the influence for you as a guardian
                                        Maintain an open dialogue with parents and guardians
                                        Make sure that any deficiencies are rectified as soon as possible
                                        Make sure your comments are received and feedback received
                                    </div>


                                    <div class="col-md-6">

                                        <br />
                                        <br />
                                        <h3 className="display-6">  Equal Treatment Plan </h3>

                                        All people are born free and equal in value and rights. Creative Minds strives to ensure a safe and secure environment for children and staff at the preschool. No person should ever have to feel any form of abuse or discrimination. We work actively against all forms of discrimination and abusive treatment thus, We strive to promote the equal rights of children and adults regardless of gender, ethnicity, religion, or disability.

                                        <br />
                                        <br />
                                        <br />
                                        <h3 className="display-6"> Food And Health </h3>

                                        We have lunch catering from our own kitchen, serving hot, good and freshly cooked food and fruits to us every day. We offer equivalent special diets for those who need them.
                                        We care about the children's health and about laying the foundation for developing healthy eating habits and a healthy attitude to physical activity in every child.
                                        We use our local area as an additional educational environment when we carry out planned activities and excursions to, for example, the legon botanical garden, CSIR farms and other natural environments.
                                        <br />
                                        <br />
                                        <h3 className="display-6">  Virtual tour </h3>

                                        Click to take a virtual tour of the schools facility
                                        <br />
                                        <Link to="/Gallery">   <button class="btn-1"><i class="fa fa-more"></i>Virtual Tour</button></Link>
                                    </div>
                                    <i class="fa fa-facebook-f" aria-hidden="true"></i>
                                </div>
                            </div>



                        </div>


                    </div>

                    <Map />

                </FadeIn>
            </>
        )
    }
}

export default About;