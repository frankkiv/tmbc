import { Route } from "@tmbc/ui/theme";
import { StatPlayer, StatRanking, Player, Team } from "./pages";

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