const ProjectsScreen = () => {
  return (
    <div>
      <h1 className="gold-text mb-5">PROJECTS</h1>
      <div className="row">
        <div className="col-4">
          <img
            src="https://via.placeholder.com/500"
            class="card-img-top mb-3"
            alt="..."
          ></img>
          <h5 class="main-text white-text mb-3">E-Commerce Shop</h5>
          <p class="about-text white-text mb-3">
            full stack e-commerce web application build using react with
            node/express.
          </p>
        </div>
        <div className="col-4">
          <img
            src="https://via.placeholder.com/500"
            class="card-img-top mb-3"
            alt="..."
          ></img>
          <h5 class="main-text white-text mb-3">Chat application</h5>
          <p class="about-text white-text mb-3">
            real-time message chatting webapplication build with react,
            node/express, and mongodb.
          </p>
        </div>
        <div className="col-4">
          <img
            src="https://via.placeholder.com/500"
            class="card-img-top mb-3"
            alt="..."
          ></img>
          <h5 class="main-text white-text mb-3">Portfolio</h5>
          <p class="about-text white-text mb-3">personal poftfolio made with reactjs and materialUI.</p>  
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;