import React, { Component } from 'react';

class Evening extends Component {
  render() {
    return (
      <div className='modal-container'>
        <div className='playlist-modal' id='evening'>
          <h2>Evening</h2>
          <div className='playlist-div'>
            <table className='playlist-table'>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                {this.props.eveningSongs.map((song, id) => (
                  <tr key={id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className='button' id='close-button' onClick={() => this.props.showEvening}>Close</button>
        </div>
      </div>
    );
  }
}

export default Evening;
