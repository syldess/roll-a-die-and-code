import React, { useState } from 'react';
import Cube from './rotating-cube/cube/Cube';
import { codingSites } from '../data/coding-sites';

function Die() {
  const [sites] = useState(codingSites);
  const [chosenSiteTitle, setChosenSiteTitle] = useState('?')
  const [chosenSiteUrl, setChosenSiteUrl] = useState('#')
  
  const customBackground = {
    front: 'hsla(120, 100%, 10%, .60)',
    right: 'hsla(120, 100%, 10%, .60)',
    back: 'hsla(120, 100%, 10%, .60)',
    left: 'hsla(120, 100%, 10%, .60)',
    top: 'hsla(120, 100%, 10%, .60)',
    bottom: 'hsla(120, 100%, 10%, .60)',
  };

  const getSite = () => {
    console.log(sites);
    const randomChoice = Math.floor(Math.random() * sites.length);
    return sites[randomChoice];
  };

  const fetchSite = () => {
    const newSite = getSite();
    setChosenSiteTitle(newSite.title);
    setChosenSiteUrl(newSite.url);
  };

  const renderFaces = () => {
    return {
      front: '',
      right: '',
      back: '',
      left: '',
      top: '',
      bottom: '',
    };
  };

  return (
    <div>
      <Cube
        customBackground={customBackground}
        faces={renderFaces()}
        fetchSite={fetchSite}
        siteTitle={chosenSiteTitle}
        siteUrl={chosenSiteUrl}
      />
    </div>
  );
}

export default Die;
