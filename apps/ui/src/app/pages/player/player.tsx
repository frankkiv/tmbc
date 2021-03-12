import React from 'react';
import { useParams } from 'react-router-dom'
import './player.module.scss';

/* eslint-disable-next-line */
export interface PlayerProps {}

export function Player(props: PlayerProps) {
  const { id } = useParams();
  return (
    <div>
      <h1>Welcome to Player {id} ! </h1>
    </div>
  );
}

export default Player;
