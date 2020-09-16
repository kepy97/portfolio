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
                                 <p>Currently, I am doing my <a href="https://uwm.edu" target="_blank" rel="noopener noreferrer">masters</a> in computer science. I want to grow and sharpen my skills through this degree. My cumulative GPA is <b>3.6 out of 4.0.</b> Starting my education off in Fall 2019, my expected graduation is May 2021.</p>
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
                                 <p>I received my <a href="https://www.gtu.edu" target="_blank" rel="noopener noreferrer">bachelor's</a> degree with first-class distinction grades. My GPA is <b>8.7 out of 10.0.</b> I have learned the basics and advanced knowledge of computers and programming.</p>
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
                                 <span className="date">May 2020 - Present</span>
                                 <h2>LEAD R&D Intern</h2>
                                 <span className="position">ABB</span>
                                 <p>I'm working on a new web application portal for internal usage at <a href="https://global.abb/group/en" target="_blank" rel="noopener noreferrer">ABB.</a> This is the first project of my life where I'm developing it from <a href="https://www.kepy.online/blog/building-web-application-from-scratch" target="_blank" rel="noopener noreferrer">scratch by myself.</a> I cherished having complete ownership of the project - being able to work with end-users to gather requirements, incorporate feedback, propose new stretch goals, and work on additional features.</p>
                              </div>
                           </div>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">Jun 2018 - Jul 2019</span>
                                 <h2>Software Developer</h2>
                                 <span className="position">SculptSoft</span>
                                 <p>After completing my internship at <a href="https://www.sculptsoft.com/" target="_blank" rel="noopener noreferrer">SculptSoft</a> at end of May 2018, they admired my working ethics. So, I was offered a position as a full-time Software Developer. I worked on many large projects. I've used different programming languages, all still to create web and mobile applications.</p>
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
                                 <p>During 2017-18, I was working with <a href="https://www.sculptsoft.com/" target="_blank" rel="noopener noreferrer">Sculptsoft</a> as an intern. My task is to find patterns in large purchasing data and visualize them in different formats. To visualize these patterns I've used different tools like Tableau, PowerBI, and D3.js to create charts.</p>
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
                                 <p>iCreate Technologies was a place where I worked with a great team and learned about Industrial Software Engineering. I've created java windows applications. I've used java top frameworks to create web applications as well.</p>
                              </div>
                           </div>
                        </div>
                        <div id="page-3" className="page three">
                           <h2 className="heading">Skills</h2>
                           <div className="row progress-circle mb-5">
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
                                    <h2 className="h5 font-weight-bold text-center mb-4">Multitasking</h2>
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
                                 <p>The Chancellor’s Graduate Student Award <a href="https://uwm.edu/graduateschool/chancellors-graduate-student-awards/" target="_blank" rel="noopener noreferrer">(CGSA)</a> program is designed to give UWM a competitive edge in attracting and retaining high quality, talented graduate students.</p>
                              </div>
                           </div>
                           <div className="resume-wrap d-flex ftco-animate">
                              <div className="icon d-flex align-items-center justify-content-center">
                                 <span className="flaticon-ideas"></span>
                              </div>
                              <div className="text pl-3">
                                 <span className="date">May 2019</span>
                                 <h2>Certificate of Excellence</h2>
                                 <span className="position">Umiya Education Trust</span>
                                 <p>Received <a href={process.env.PUBLIC_URL+"/images/BECertificate.png"} target="_blank" rel="noopener noreferrer">certificate</a> of third rank in Bachelor degree in Kadava Patidar Community.</p>
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
                                 <p>Even due to the lack of experience, I had learned fast and done work that was praiseworthy also at a young age. So, I received this award, check out this LinkedIn <a href="https://www.linkedin.com/posts/sculptsoft-hr_whole-sculptsoft-family-congratulates-you-activity-6521387185143418881-n7S-/" target="_blank" rel="noopener noreferrer">post</a> and <a href={process.env.PUBLIC_URL+ "/images/sculptSoftCertificate.jpg"} target="_blank" rel="noopener noreferrer">certificate</a>.</p>
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
