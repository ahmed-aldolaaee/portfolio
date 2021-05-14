import { FaUniversity, FaBriefcase } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { IoLanguageOutline } from 'react-icons/io5';

const AboutScreen = () => {
  return (
    <div>
      <h1 className="gold-text mb-5">ABOUT</h1>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <p className="white-text about-text">
            Detail Oriented IT Student, enthusiastic about the latest stacks
            related to web development and UI design. I am keen to gain more
            experience and expand my knowledge in the web development field.
          </p>
          <h4 className="white-text about-text-h mt-4"><FaUniversity /> Education:</h4>
          <p className="white-text about-text">
            OCT 2017 - JUL 2021 <br />
            Asia Pacific University of Technology and Innovation (APU / APIIT)
            BSC (HONS) IN INFORMATION TECHNOLOGY
          </p>
          <h4 className="white-text about-text-h mt-4"><IoLanguageOutline /> Languages:</h4>
          <p className="white-text about-text">
            English: Fluent <br /> Arabic: Native
          </p>
        </div>
        <div className="col-sm-12 col-lg-6">
          <h4 className="white-text about-text-h"><FaBriefcase /> Experience:</h4>
          <p className="white-text about-text">
            Koadim - SEO internship <br />
            Oct 2019 - Jan 2020 <br />
            - Website optimization <br />
            - Keyword Research and discovery <br />
            - Analyze traffic <br />
            - Backlink generation <br />
            - Content recommendation <br />
          </p>
          <h4 className="white-text about-text-h mt-4"><ImLocation /> Location:</h4>
          <p className="white-text about-text">
            One South, Jln OS, Taman Serdang Perdana Seri Kembangan, Selangor,
            43300
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
