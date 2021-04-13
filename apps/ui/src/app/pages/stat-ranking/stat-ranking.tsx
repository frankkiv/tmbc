import React from 'react';

import './stat-ranking.module.scss';

/* eslint-disable-next-line */
export interface StatRankingProps {
  id?
}

export function StatRanking(props: StatRankingProps) {
  return (
    <div>
      <h1>Welcome to StatRanking! {props?.id || 'no id'} </h1>
    </div>
  );
}

export default StatRanking;
