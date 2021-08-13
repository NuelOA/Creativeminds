import React from 'react';


// const mapStyles = {
//   top: '7em',
//   bottom: '10em',
//   width: '100%',
//   height: '80%',
//   alignItems: 'center',
// };

// export class MapContainer extends Component {
//   render() {
//     return (

//       <Map
//         google={this.props.google}
//         zoom={12}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 5.747999555424577,
//             lng: -0.1376281894012735

//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper(
//     (props) => ({
//         apiKey: 'AIzaSyBmQP4BLI0DnjvRyigZ6W-1jadXESxH2xQ',
//       apiKey: props.apiKey
//     }
//   ))(MapContainer)

class Map extends React.Component {
  render() {
    return (
      <>
        <div className="map">
          <h2 class="display-2" id="location"><center>Location</center></h2>
          <center>
            <hr id="hr1" />
            <div class="container">
              <p className="textfont">Locate us with the map provided below. Enroll your kids today and be pleased with the stunning acadamic performace.</p>
            </div>
          </center>

          {/* <Map/> */}
          <div>
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.7596235470273!2d-0.1397846852331759!3d5.74770599583449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf79d357b755f5%3A0x267e9e2153d4b750!2sCreative%20Minds!5e0!3m2!1sen!2sgh!4v1618931852485!5m2!1sen!2sgh"
            ></iframe>
          </div>
        </div>
      </>
    )
  }
}

export default Map;

