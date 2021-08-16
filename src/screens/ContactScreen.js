import emailjs from 'emailjs-com';

const ContactScreen = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_517657n', 'template_aj37c2d', e.target, 'user_aEf5uajb9xK93DeC9z921')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
      <h1 className="gold-text mb-5">CONTACT</h1>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <form onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label white-text about-text mb-4">
                Name:
              </label>
              <input
                className="form-control mb-5" name="from_name"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label white-text about-text mb-4">
                Email address:
              </label>
              <input
                type="email"
                className="form-control mb-5" name="from_email"
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label white-text about-text mb-4" htmlFor="inquiry">
                Inquiry:
              </label>
              <textarea
                type="textarea"
                className="form-control mb-5" name="message"
              ></textarea>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
