import React, { useState, useEffect } from 'react';

// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
// import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

const Hexbin = () => {

    const hexbin =
    "<iframe align='middle' width= '1000' height= '450'  src='https://1901849-linshixuan.github.io/HexBinMap' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";
  
  return (
<div>

<div dangerouslySetInnerHTML={{ __html: hexbin ? hexbin : "" }} />
</div>

  );
}

export default Hexbin;