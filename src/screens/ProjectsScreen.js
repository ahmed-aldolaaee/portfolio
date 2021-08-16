const ProjectsScreen = () => {
  return (
    <div>
      <h1 className="gold-text mb-5">PROJECTS</h1>
      <div className="row">
        <div className="col-lg-4 col-12 mb-4">
          <img
            src="/images/project2PNG.png"
            className="card-img-top mb-3"
            alt="..."
          ></img>
          <h5 className="main-text white-text mb-3">E-Commerce Shop</h5>
          <p className="about-text white-text mb-3">
            full stack e-commerce web application build using react with
            node/express.
          </p>
          <a className="button" target="_blank" rel="noreferrer" href="https://github.com/ahmed-aldolaaee/ecommerce-shop">Check Repository</a>
        </div>
        <div className="col-lg-4 col-12 mb-4">
          <img
            src="/images/project3PNG.png"
            className="card-img-top mb-3"
            alt="..."
          ></img>
          <h5 className="main-text white-text mb-3">Bug Reporting system</h5>
          <p className="about-text white-text mb-3">
            a web application used for reporting and keeping track of bugs, build with react,
            node/express, and mongodb.
          </p>
          <a className="button" target="_blank" rel="noreferrer" href="https://github.com/ahmed-aldolaaee/bug-tracker">Check Repository</a>
        </div>
        <div className="col-lg-4 col-12 mb-4">
          <img
            src="/images/project1PNG.png"
            className="card-img-top mb-3"
            alt="..."
          ></img>
          <h5 className="main-text white-text mb-3">Portfolio</h5>
          <p className="about-text white-text mb-3">personal poftfolio custom made with reactjs, designed with figma.</p>
          <a className="button" target="_blank" rel="noreferrer" href="https://github.com/ahmed-aldolaaee/portfolio">Check Repository</a>  
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;
