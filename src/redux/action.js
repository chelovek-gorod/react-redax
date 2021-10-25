export function nextPage() {
   return {
      type: 'NEXT_PAGE'
   }
}
export function previousPage() {
   return {
      type: 'PREVIOUS_PAGE'
   }
}
export function showAlbums() {
   return {
      type: 'SHOW_ALBUMS'
   }
}
export function showPhotos(albumId) {
   return {
      type: 'SHOW_PHOTOS',
      payload : {
         albumId : albumId
      }
   }
}