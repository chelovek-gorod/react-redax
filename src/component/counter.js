import React from 'react';
import { connect } from 'react-redux';
import { nextPage, previousPage, showAlbums, showPhotos, addAlbum, addPhoto } from '../redux/action';

function Counter(props) {

   function getContent(albums, arr) {
      if (albums) return arr.map(album => {
         return <div className="album-div" key={album} onClick={() => props.showPhotos(album)}><span>Album #{album}</span></div>
      });

      return arr.map(photo => {
         return <div className="photo-div" key={photo} ><span>Photo {photo}</span></div>
      });
   }

   function getButtonBack() {
      if (!props.albums) return <button onClick = { props.showAlbums }>{'<-'}</button>
   }

   function getAddNew(size) {
      if (size < props.maxOnPage) {
         if (props.albums) return <div className="add-photo-div" key={'add'} onClick = { props.addAlbum }><span> add album</span></div>
         return <div className="add-photo-div" key={'add'} onClick = { props.addPhoto }><span>add photo</span></div>
      }
   }

   function getPages(pages) {
      if (pages.last === 1) return <span><b>{'[1]'}</b></span>
      if (pages.current === 1) return <span><b>{'[1]'}</b>...{pages.last}</span>
      if (pages.current === pages.last) return <span>1...<b>{'[' + pages.last + ']'}</b></span>
      return <span>1...<b>{'[' + pages.current + ']'}</b>...{pages.last}</span>
   }

   return (
      <div className = "App">
         <div className = "App">
            { getButtonBack() }
            { getContent(props.albums, props.view) }
            { getAddNew(props.view.length) }
         </div>
         <div className = "pageLine">
            <button onClick = { props.previousPage }>{'<<'}</button>
            { getPages(props.pages) }
            <button onClick = { props.nextPage }>{'>>'}</button>
         </div>
      </div>
   );
}

function outputAlbums(albumsArr, startPoint, lastPoint, maxSize) {
   let albumsOutputArr = [];
   for (let i = startPoint; i < lastPoint; i++ ) {
      if (albumsArr[i]) albumsOutputArr.push(albumsArr[i].id);
      else break;
   }
   if (albumsOutputArr.length < maxSize) albumsOutputArr.push('add');
   
   return albumsOutputArr;
}

function outputPhotos(photosArr, startPoint, lastPoint, maxSize) {
   let photosOutputArr = [];
   for (let i = startPoint; i < lastPoint; i++ ) {
      if (photosArr[i]) photosOutputArr.push(photosArr[i]);
      else break;
   }
   if (photosOutputArr.length < maxSize) photosOutputArr.push('add');
   
   return photosOutputArr;
}

const mapStateToProps = (state) => {
   let startPoint = (state.showAlbums) ? state.pageAlbums * state.elementsOnPage : state.pagePhotos * state.elementsOnPage;
   let lastPoint = startPoint + state.elementsOnPage;
   let pages = {
      current : (state.showAlbums) ? state.pageAlbums + 1 : state.pagePhotos + 1,
      last : (state.showAlbums) ?
         Math.floor(state.albumsArr.length / state.elementsOnPage) + 1 :
         Math.floor(state.albumsArr[state.currentAlbum].photos.length / state.elementsOnPage) + 1
   }
   if (state.showAlbums) return {
      albums : state.showAlbums,
      maxOnPage : state.elementsOnPage,
      pages: pages,
      view : outputAlbums(state.albumsArr, startPoint, lastPoint)
   };
   return {
      albums : state.showAlbums,
      maxOnPage : state.elementsOnPage,
      pages: pages,
      view : outputPhotos(state.albumsArr[state.currentAlbum].photos, startPoint, lastPoint)
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      nextPage: () => dispatch(nextPage()),
      previousPage: () => dispatch(previousPage()),
      showAlbums: () => dispatch(showAlbums()),
      showPhotos: (id) => dispatch(showPhotos(id)),
      addAlbum: () => dispatch(addAlbum()),
      addPhoto: () => dispatch(addPhoto()),
   }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);