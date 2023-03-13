import pdf from '../Images/Joseph Akah.pdf'
function Home (){
    return (
        <section class="bgimage text-center p-5" id="home">
        <div class="container-fluid">
            <div class="row">
                <div class=" col-md-6 hero-text">
                    <h2 class="hero_title">Hi, It's me Joseph</h2>
                    <div class="banner">
                        <img src={require("../Images/me.JPG")} alt="" height="300" width="300"
                            class="rounded-circle"></img>
                    </div>
                </div>
                <section id="about" class="col-md-6 ">
                    <h1 class="text-center">About Me</h1>
                    <div class="text-start">

                        <p> I am a student on the front end web dev course who also happens to work fulltime in banking
                            and i am hoping to cross over and switch careers after this course.

                        </p>


                        <div class="row mt-3">
                            <div class="col-md-6">
                                <ul>
                                    <li>Name: Joseph Akah</li>
                                    <li>Age: 33</li>
                                    <li>Occupation: Web Developer</li>

                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul>
                                    <li>learning: Front end Web Devh</li>
                                    <li>Teacher: Andrew Hoang</li>
                                    <li>Occupation: Web Developer</li>

                                </ul>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <p> At this stage of learning Web development in Drews course we have learnt how to operate
                                our Github, learned HTML and also learnt CSS, grids, and will learn more in the coming
                                weeks. Watch this space. In addition to Drews classes i have also picked up other
                                techniques on other web videos and training apps
                            </p>
                        </div>
                        <div className="resume">
                            <p><a href={pdf} target='_blank'> 
                                My Resume</a></p>
                        </div>
 

                    </div>
                    </section>

            </div>
            </div>

    </section>

    );
}
export default Home;