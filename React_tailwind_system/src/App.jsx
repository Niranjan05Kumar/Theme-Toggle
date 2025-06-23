import "./App.css";
import img from "./assets/img.jpg";
import Switch from './components/Switch'

const App = () => {
  return (
    
    <div>
      <div className="mb-10 mx-auto flex justify-center">
        <Switch />
      </div>
      <div className="bg-bg card w-[90%] mx-auto max-w-lg outline-2 outline-border-dark rounded-2xl p-8">
        <div className="card__content flex flex-col gap-5 relative">
          <div className="card__badge absolute -right-4 top-3 bg-secondary text-bg-dark py-1 px-3 font-semibold rounded-md rotate-24 hover:rotate-0 origin-top-right duration-300">
            NEW
          </div>
          <div className="card__image w-full h-full overflow-hidden rounded-2xl">
            <img src={img} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="card__text flex flex-col">
            <p className="card__title text-xl font-semibold text-text leading-9">
              Premium Design
            </p>
            <p className="card__description text-md text-text-muted font-normal">
              Hover to reveal stunning effects
            </p>
          </div>
          <div className="card__footer flex w-full justify-between">
            <div className="card__price text-primary font-bold text-xl">$49.99</div>
            <div className="card__button bg-bg-light hover:bg-bg-dark outline-2 outline-border-light py-2 px-4 rounded-full font-extrabold cursor-pointer hover:outline-border-light duration-300">
              <svg height="18" width="18" viewBox="0 0 24 24">
                <path
                  strokeWidth="3"
                  stroke="currentColor"
                  d="M4 12H20M12 4V20"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
