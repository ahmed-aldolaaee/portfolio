//import mouse from '../../public/images/mouse.svg';

const HomeScreen = () => {
  return (
    <div className="row">
      <div className="col d-flex align-items-center">
        <div>
          <p className="white-text main-text">Hello, I am</p>
          <h1 className="gold-text">AHMED ZEYAD</h1>
          <p className="white-text main-text">A Junior Frontend Developer</p>
        </div>
      </div>
      <div className="col">
        <img className="pepe" src={process.env.PUBLIC_URL + "/webdev.svg"} width="600px" height="600"></img>
      </div>
    </div>
  );
};

export default HomeScreen;
