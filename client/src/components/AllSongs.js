import React, { Component } from 'react';

// AllMusic.js <- SHOWEDIT
// App.js <--- Main.js <-- AllMusic.js <- DELETESONGS

class AllMusicSongs extends Component {
  render() {
    return (
      <tr className='song-rows'>
        <td className='titles' id='song' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.title}</td>
        <td className='artists' id='song' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.artist}</td>
        <td className='albums' id='song' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.album}</td>
        <td className='locations' id='song' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.where.map((playlist, index) => (<span key={index}> {playlist} |</span>))}</td>
        <td className='delete'><button className='button' id='delete' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>x</button></td>
      </tr>
    );
  }
}

export default AllMusicSongs;
// <td className='energy'>{this.props.song.energy}</td>
// <td className='weight'>{this.props.song.what}</td>
// <tr className='songs'>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.title}</td>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.artist}</td>
//   <td className='primary' onClick={() => {this.props.showEdit(this.props.song)}}>{this.props.song.album}</td>
//   <td className='secondary'>{this.props.song.energy}</td>
//   <td className='secondary'>{this.props.song.what}</td>
//   <td className='delete-button' onClick={() => {this.props.deleteSongs(this.props.song._id)}}>X</td>
// </tr>
