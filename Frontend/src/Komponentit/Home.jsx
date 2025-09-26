import Landing from './Landing';
import Hallitus from './Yhteystiedot';
import Galleria from './Galleria';
import Mökki from './Mökki';
import { useState } from 'react';

const näkymäVaihtuu = (näkymä) => {
  const [näkymäTila, setNäkymäTila] = useState('home');
  setNäkymäTila(näkymä);
  console.log('Näkymä vaihdettiin:', näkymä);
}

const Home = () => (
  <>
    <Landing />
    <Hallitus />
    <Galleria />
    <Mökki />
  </>
);

export default Home;