import React from 'react';
import { Map, YMaps,Placemark } from 'react-yandex-maps';

class CustomMap extends React.Component {
   constructor(props) {
     super(props)
     this.coordinates = [
       [this.props.lat, this.props.long]
];
    }
   render () {
       return (
           <div>
           <YMaps query={{ lang: 'en_RU' }}>
               <Map defaultState={{ center: [this.props.lat, this.props.long], zoom: 3, }} width="900px" height="550px">
               {this.coordinates.map(coordinate => <Placemark geometry={coordinate} key={coordinate}/>)}
               </Map>
           </YMaps>
           </div>
       );
   }
}
export default CustomMap;




