import { StatPlayer, StatRanking, Player, Team } from "./pages";
interface Route {
  path: string;
  name: string;
  component: any;
  onHeader?: boolean;
  auth?: boolean;
};

const Routes: Route[] = [
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
    onHeader: true,
  },
  {
    path: '/stat-player',
    name: 'Stat Player',
    component: StatPlayer,
    onHeader: true,
  }
];

export default Routes;