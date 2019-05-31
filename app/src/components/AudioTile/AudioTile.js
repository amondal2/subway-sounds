import React from 'react';
import { TileContainer, Icon } from './AudioTile.styles';
import SpeakerIcon from '../../Speaker_Icon.svg';
import NYCSubway from '../../nycsubway.m4a';

const AudioTile = () => {
  const audio = new Audio(NYCSubway);
  return (
    <TileContainer>
      <Icon src={SpeakerIcon} alt="Speaker Icon" onClick={() => audio.play()} />
    </TileContainer>
  );
};

export default AudioTile;
