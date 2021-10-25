import React from 'react';
import { connect } from 'react-redux';
import { nextPage, previousPage, showAlbums, showPhotos } from '../redux/action';
import Album from './Album';

//const props = {view, nextPage, previousPage, showAlbums, showPhotos(albumId)};

function Counter(props) {

   return (
      <div className = "App">
         <div className = "App"> { props.view.map(e => <div className="album-div" key={e} ><span>Album #{e}</span></div>) } </div>
         <div className = "pageLine">
            <button onClick = {props.previousPage}>{'<'}</button>
            <button onClick = {props.nextPage}>{'>'}</button>
         </div>
      </div>
   );
}

function outputAlbums(albumsArr, startPoint, maxSize, size) {
   let albumsOutputArr = [];
   for (let i = startPoint; i < maxSize; i++ ) {
      if (albumsArr[i]) albumsOutputArr.push(albumsArr[i].id);
      else break;
   }
   if (albumsOutputArr.length < size) albumsOutputArr.push('add');
   
   return albumsOutputArr;
}
 /*{ albumsOutputArr.map(e => <div className="album-div" key={e} onClick={props.showPhotos(e)}><span>Album #{e}</span></div>) }*/

function outputPhotos(photosArr, startPoint, maxSize) {
   return (
      <div>'Photos'</div>
   );
}

const mapStateToProps = (state) => {
   let startPoint = state.page * state.elementsOnPage;
   let maxSize = startPoint + state.elementsOnPage;
   let size = state.elementsOnPage;
   let output = (state.currentAlbum < 0) ? outputAlbums(state.albumsArr, startPoint, maxSize, size) : outputPhotos(state.albumsArr[state.currentAlbum], startPoint, maxSize, size);
   return {view : output};
};
const mapDispatchToProps = (dispatch) => {
   return {
      nextPage: () => dispatch(nextPage()),
      previousPage: () => dispatch(previousPage()),
      showAlbums: () => dispatch(showAlbums()),
      showPhotos: () => dispatch(showPhotos())
   }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);