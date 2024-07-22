import { useState } from 'react';
import Solo from './SoloMode';
import Duo from './DuoMode';
import Squad from './SquadMode';
import ClashSquad from './ClashSquad';

import Container from './Container';
import { Link } from 'react-router-dom';

export default function TournamentsMode() {
  const [activeComponent, setActiveComponent] = useState('Solo');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Solo':
        return <Solo />;
      case 'Duo':
        return <Duo />;
      case 'Squad':
        return <Squad />;
      case 'ClashSquad':
        return <ClashSquad />;
      default:
        return <Solo />;
    }
  };

  const getButtonClass = (mode) => {
    return activeComponent === mode
      ? 'bg-blue-700 p-2 rounded-full text-white'
      : 'bg-slate-800 p-2 rounded-full text-white';
  };

  return (
    <Container>
      <div className="h-[200px] bg-slate-900 mt-2">
        <div className="flex items-center p-3 justify-around h-full">
          <div>
            <a href="/" className="text-white md:text-[1.2rem] sm:text-[0.6rem] font-bold underline w-fit">
              Change your free fire max username
            </a>
            <h1 className="text-black font-bold mt-5 bg-yellow-500 w-fit sm:p-1 md:p-2 rounded-lg">
              ORP.RDX
            </h1>
          </div>
          <div>
            <Link to={"/my-contest"} className="p-2 bg-yellow-500 text-black font-bold rounded-md">
              MYCONTEST
            </Link>
          </div>
        </div>
      </div>
      {/* {ff mode} */}
      <div>
        <div className="p-4 rounded-lg w-full bg-slate-900 mt-4">
          <div className="text-white flex items-center gap-2 justify-between sm:mr-3">
            <button
              className={getButtonClass('Solo')}
              onClick={() => setActiveComponent('Solo')}
            >
              SOLO
            </button>
            <button
              className={getButtonClass('Duo')}
              onClick={() => setActiveComponent('Duo')}
            >
              DUO
            </button>
            <button
              className={getButtonClass('Squad')}
              onClick={() => setActiveComponent('Squad')}
            >
              SQUAD
            </button>
            <button
              className={getButtonClass('ClashSquad')}
              onClick={() => setActiveComponent('ClashSquad')}
            >
              CLASH SQUAD
            </button>
          </div>
        </div>
        <div className="mt-4">
          {renderComponent()}
        </div>
      </div>
    </Container>
  );
}
