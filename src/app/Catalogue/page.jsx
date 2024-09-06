import React from 'react';
import Paintings from './Paintings';
import Prints from './Prints';
import Merch from './Merch';

const Catalogue = () => {
  return (
        <div>
            <Paintings text={'Paintings'} imageUrls={cataloguePaintings}/>
            <Prints text={'Prints'} imageUrls={cataloguePrints}/>
            <Merch text={'Merch'} imageUrls={catalogueMerch}/>
        </div>
  );
};

export default Catalogue;
