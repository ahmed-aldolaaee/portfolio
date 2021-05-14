const ContactScreen = () => {
  return (
    <div>
      <h1 className="gold-text mb-5">CONTACT</h1>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <form>
            <div class="mb-3">
              <label for="name" className="form-label white-text about-text mb-4">
                Name:
              </label>
              <input
                className="form-control mb-5"
              ></input>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label white-text about-text mb-4">
                Email address:
              </label>
              <input
                type="email"
                className="form-control mb-5"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label white-text about-text mb-4" for="inquiry">
                Inquiry:
              </label>
              <textarea
                type="textarea"
                className="form-control mb-5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary rounded-pill">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
