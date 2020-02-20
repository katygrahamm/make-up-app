import React, { Component } from 'react';
import { connect } from 'react-redux';


class MakeUpList extends Component {
 renderWeather(cityData) {
  // const name = cityData.city.name;
  // const temps = cityData.list.map(weather => weather.main.temp);
  // const pressures = cityData.list.map(weather => weather.main.pressure);
  // const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key=''>
        <td></td>
       
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
    {/* //     <thead>
    //       <tr>
    //         <th>City</th>
    //         <th>Temperature (K)</th>
    //         <th>Pressure (hPa)</th>
    //         <th>Humidity (%)</th>
    //       </tr>
    //     </thead>
    //     <tbody>{this.props.weather.map(this.renderWeather)}</tbody> */}
      </table>
    )
    }
}

function mapStateToProps({ makeUp }) {
  return { makeUp };
}

export default connect(mapStateToProps)(MakeUpList);
