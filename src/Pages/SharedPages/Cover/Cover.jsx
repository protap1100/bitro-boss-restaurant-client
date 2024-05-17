import { Parallax } from "react-parallax";

const Cover = ({ bgImg, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgImg}
      bgImageAlt="The Menu"
      strength={-200}
    >
      <div>
        <div
          className="hero h-[700px]"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
              <p className="mb-5 uppercase">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
