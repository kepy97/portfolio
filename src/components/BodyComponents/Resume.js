import React from 'react';

export default class Resume extends React.Component {
    render() {
        return (
            <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
               <div className="container">
                  <div className="row">
                     <div className="col-md-3">
                        <nav id="navi">
                           <ul>
                              <li><a href="#page-1">Education</a></li>
                              <li><a href="#page-2">Experience</a></li>
                              <li><a href="#page-3">Skills</a></li>
                              <li><a href="#page-4">Awards</a></li>
                           </ul>
                        </nav>
                     </div>
                     <div className="col-md-9">
                        <div id="page-1" className="page one">
                           <h2 className="heading">Education</h2>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Sep 2019 - May 2021</span>
                                 <h2>Master in Computer Science</h2>
                                 <span className="position">University of Wisconsin-Milwaukee</span>
                                 <p>Currently, I am doing my masters in computer science. My focus is on Artificial Intelligence. Starting my education off in Fall 2019, my expected graduation is May 2021.</p>
                              </div>
                           </div>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Sep 2014 - May 2018</span>
                                 <h2>Bachelor of Engineering in Computer Engineering</h2>
                                 <span className="position">Gujarat Technological University</span>
                                 <p>I received my bachelor's degree with first className distinction grades. My gpa is 8.72 out of 10. I have learned basics and advanced knowledge of computers and programming.</p>
                              </div>
                           </div>
                        </div>
                        <div id="page-2" className="page two">
                           <h2 className="heading">Experience</h2>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Jun 2018 - Jul 2019</span>
                                 <h2>Software Developer</h2>
                                 <span className="position">SculptSoft</span>
                                 <p>After completing my internship at SculptSoft at end of May 2018, they admired my working ethics. I was offered a position as a full-time Software Developer. I worked on many large projects. I've used different programming languages, all still to create web and moblie applications.</p>
                              </div>
                           </div>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Dec 2017 - May 2018</span>
                                 <h2>Data Analyst Intern</h2>
                                 <span className="position">SculptSoft</span>
                                 <p>During 2017-18, I was working with Sculptsoft as an intern. My task is to find patterns in large purchasing datas and visualize them in different formats. To visualize these patterns I've used Tableau, PowerBI, and D3.js to create charts.</p>
                              </div>
                           </div>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Jan 2017 - Dec 2017</span>
                                 <h2>Java Developer Intern</h2>
                                 <span className="position">iCreate Technologies</span>
                                 <p>iCreate Technologies was a place I interned at, I worked with a great team and learned about Industrial Software Engineering. I've created java windows applications. I've used java top frameworks to create web applications.</p>
                              </div>
                           </div>
                        </div>
                        <div id="page-3" className="page three">
                           <h2 className="heading">Skills</h2>
                           <div className="row progress-circle mb-5">
                              <div className="col-lg-4 mb-4">
                                 <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="h5 font-weight-bold text-center mb-4">Programming</h2>
                                    <div className="progress mx-auto" data-value='100'>
                                       <span className="progress-left">
                                       <span className="progress-bar border-primary"></span>
                                       </span>
                                       <span className="progress-right">
                                       <span className="progress-bar border-primary"></span>
                                       </span>
                                       <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                          <div className="h2 font-weight-bold">100<sup className="small">%</sup></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4 mb-4">
                                 <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="h5 font-weight-bold text-center mb-4">Problem solving</h2>
                                    <div className="progress mx-auto" data-value='100'>
                                       <span className="progress-left">
                                       <span className="progress-bar border-primary"></span>
                                       </span>
                                       <span className="progress-right">
                                       <span className="progress-bar border-primary"></span>
                                       </span>
                                       <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                          <div className="h2 font-weight-bold">100<sup className="small">%</sup></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4 mb-4">
                                 <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="h5 font-weight-bold text-center mb-4">Team Work</h2>
                                    <div className="progress mx-auto" data-value='100'>
                                       <span className="progress-left">
                                       <span className="progress-bar border-primary"></span>
                                       </span>
                                       <span className="progress-right">
                                       <span className="progress-bar border-primary"></span>
                                       </span>
                                       <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                          <div className="h2 font-weight-bold">100<sup className="small">%</sup></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-6 animate-box">
                                 <div className="progress-wrap ftco-animate">
                                    <h3>Python</h3>
                                    <div className="progress">
                                       <div className="progress-bar color-1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                          <span>100%</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 animate-box">
                                 <div className="progress-wrap ftco-animate">
                                    <h3>PHP</h3>
                                    <div className="progress">
                                       <div className="progress-bar color-2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                          <span>100%</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 animate-box">
                                 <div className="progress-wrap ftco-animate">
                                    <h3>JavaScript</h3>
                                    <div className="progress">
                                       <div className="progress-bar color-3" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                          <span>100%</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 animate-box">
                                 <div className="progress-wrap ftco-animate">
                                    <h3>Java</h3>
                                    <div className="progress">
                                       <div className="progress-bar color-4" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                          <span>100%</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 animate-box">
                                 <div className="progress-wrap ftco-animate">
                                    <h3>Node.js</h3>
                                    <div className="progress">
                                       <div className="progress-bar color-5" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                                          <span>80%</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6 animate-box">
                                 <div className="progress-wrap ftco-animate">
                                    <h3>D3.js</h3>
                                    <div className="progress">
                                       <div className="progress-bar color-6" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                          <span>70%</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="page-4" className="page four">
                           <h2 className="heading">Latest Awards & Certificates</h2>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Dec 2019</span>
                                 <h2>Chancellor’s Graduate Student Award</h2>
                                 <span className="position">University of Wisconsin-Milwaukee</span>
                                 <p>The Chancellor’s Graduate Student Award <a href="https://uwm.edu/graduateschool/chancellors-graduate-student-awards/" target="_blank">(CGSA)</a> program is designed to give UWM a competitive edge in attracting and retaining high quality, talented graduate students.</p>
                              </div>
                           </div>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Mar 2019</span>
                                 <h2>Young Performer Of the Month</h2>
                                 <span className="position">SculptSoft</span>
                                 <p>Even due to the lack of experience, I had learned fast and did work that was praiseworthy also at a young age. I received this award, check out this linkedin <a href="https://www.linkedin.com/posts/sculptsoft-hr_whole-sculptsoft-family-congratulates-you-activity-6521387185143418881-n7S-/" target="_blank">post</a> and <a href="images/sculptSoftCertificate.jpg" target="_blank">certificate</a>.</p>
                              </div>
                           </div>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Feb 2019</span>
                                 <h2>Certificate of Excellence</h2>
                                 <span className="position">Umiya Education Trust</span>
                                 <p>Received <a href="images/BECertificate.png" target="_blank">certificate</a> of third rank in Bachelor degree in Kadava Patidar Community.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
        );
    }
}
