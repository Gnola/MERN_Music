import React, { Component } from 'react';
import AllSongs from './AllSongs.js';
import NewSong from './NewSong.js'
import EditSong from './EditSong.js'

class AllMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showEdit:false,
          showAdd:false,
          id: null,
          title:'',
          artist:'',
          album:'',
          // genre:'',
          energy:'',
          what:'',
          // mood:''
        }
    }


    // SHOW EDIT MODAL <- AllSongs.js
    showEdit = (song) => {
      this.setState({
        showEdit: true,
        id:song._id,
        title:song.title,
        artist:song.artist,
        album:song.album,
        // genre:song.genre,
        energy:song.energy,
        what:song.what,
        // mood:song.mood,
      })
    }

    // CLOSE EDIT MODAL <- EditSong.js
    closeEdit = () => {
      this.setState({
        showEdit:false,
        title:'',
        artist:'',
        album: '',
        // genre: '',
        energy:'',
        what:'',
        // mood:'',
      })
    }

    // OPEN ADD SONG MODAL
    showAdd = () => {
      this.setState({
        showAdd: true
      })
    }

    // CLOSE ADD SONG MODAL <- NewSong.js
    closeAdd = () => {
      this.setState({
        showAdd:false
      })
    }


  render() {
    return (
      <div className='all-music'>

        {(this.props.allMusic) ? <button className='add-song-button' onClick={this.showAdd}>Add Music</button> : null}

        {(this.state.showEdit) ? <EditSong editedSong={this.state} updateSong={this.props.updateSong} closeEdit={this.closeEdit}/> : null}

        {(this.state.showAdd) ? <NewSong addSong={this.props.addSong} closeAdd={this.closeAdd}/> : null}

        <table className='all-music-table'>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Energy Level</th>
              <th>Song Weight</th>
            </tr>
          </thead>
          <tbody>
            {this.props.songs.map((song, _id) => (
              <AllSongs
                key={_id}
                song={song}
                addSong={this.props.addSong}
                showEdit={this.showEdit}
                updateSong={this.props.updateSong}
                deleteSongs={this.props.deleteSongs}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllMusic;
