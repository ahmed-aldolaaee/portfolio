import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const SkillsScreen = () => {
  return (
    <div>
      <h1 className="gold-text">SKILLS</h1>
      <div className="row mt-5">
        <div className="col-3 d-flex justify-content-center">
          <AiFillHtml5 className="skill html p-3 my-4" />
        </div>
        <div className="col-3  d-flex justify-content-center">
          <FaCss3Alt className="skill css p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <IoLogoJavascript className="skill javascript p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <BsBootstrap className="skill bootstrap p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <FaReact className="skill react p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <IoLogoNodejs className="skill node p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <FaGitAlt className="skill git p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <SiPostgresql className="skill postgres p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <SiMongodb className="skill mongo p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <FiFigma className="skill figma p-3 my-4" />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <FaSass className="skill sass p-3 my-4" />
        </div>
      </div>
    </div>
  );
};

export default SkillsScreen;
