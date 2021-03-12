import { StatPlayer, StatRanking, Player, Team } from "./pages";


const Routes: {
  path: string;
  name: string;
  component: any;
  hidden?: boolean;
  auth?: boolean;
}[] = [
  {
    path: '/player/:id',
    name: 'Player',
    component: Player,
  },
  {
    path: '/team/:id',
    name: 'Team',
    component: Team,
  },
  {
    path: '/stat-ranking',
    name: 'Stat Ranking',
    component: StatRanking,
  },
  {
    path: '/stat-player',
    name: 'Stat Player',
    component: StatPlayer,
  }
];

export default Routes;