import React, { Component } from 'react';

// AllMusic.js <- SHOWEDIT
// App.js <--- Main.js <-- AllMusic.js <- DELETESONGS

class AllMusicSongs extends Component {
  render() {
    return (
      <tr>
        <td className='title' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.title}</td>
        <td className='artist' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.artist}</td>
        <td className='album' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.album}</td>
        <td className='energy'>{this.props.song.energy}</td>
        <td className='weight'>{this.props.song.what}</td>
        <td className='delete-button' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>X</td>
      </tr>
    );
  }
}

export default AllMusicSongs;
// <tr className='songs'>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.title}</td>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.artist}</td>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.album}</td>
//   <td className='secondary'>{this.props.song.energy}</td>
//   <td className='secondary'>{this.props.song.what}</td>
//   <td className='delete-button' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>X</td>
// </tr>
