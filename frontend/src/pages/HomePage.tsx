import landingimage from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl tracking-tight font-bold text-orange-600">
          Welcome to E-Shop
        </h1>
        <span className="text-xl ">Food is Just a Click Away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingimage} alt="landing-image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order Your Favorite Food
          </span>
          <span>
            Download the app and order your favorite food from your favorite
          </span>
          <img src={appDownloadImg} alt="app-download-img" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
