function Contact (){
    return (
        <section id="contact" class="p-5 pt-0">
        <div class="container mt-3 contactContent">
            <h1 class="text-center">Contact Me</h1>

            <div class="row mt-4">

                <div class="col-lg-12 pt-3">
                    <form>
                        <input type="text" class="form-control form-control-lg" placeholder="Name"></input>
                        <input type="email" class="form-control mt-3" placeholder="Email"></input>
                        <input type="text" class="form-control mt-3" placeholder="Subject"></input>
                        <div class="mb-3 mt-3">
                            <textarea class="form-control" rows="5" id="comment" name="text"
                                placeholder="Project Details"></textarea>
                        </div>
                    </form>
                    <button type="button" class="btn btn-success mt-3">Contact Me</button>

                </div>

            </div>
        </div>
        <p className="contact">Please feel free to contact me at 
            <span> josephakah@live.co.uk </span> 
</p>

    </section>


    );
}
export default Contact;