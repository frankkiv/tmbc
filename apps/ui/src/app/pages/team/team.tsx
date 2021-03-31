import React from 'react';
import { useParams } from 'react-router-dom';
import './team.module.scss';

/* eslint-disable-next-line */
export interface TeamProps {}

export function Team(props: TeamProps) {
  const { id } = useParams<{ id: string }>() ;
  return (
    <div>
      <h1>Welcome to Team {id}!</h1>
    </div>
  );
}

export default Team;
