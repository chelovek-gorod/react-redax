const initialState = {
   albumsArr : [
      {
         id:0,
         photos: ['a', 'b' , 'c', 'd', 'e', 'f', 'g']
      },{
         id:1,
         photos: ['b' , 'c', 'd', 'e', 'f', 'g', 'h', 'j']
      },{
         id:2,
         photos: ['c', 'd', 'e', 'f', 'g', 'h', 'j', 'i', 'k']
      },{
         id:3,
         photos: ['d', 'e', 'f', 'g', 'h', 'j', 'i', 'k', 'l', 'm']
      },{
         id:4,
         photos: ['e', 'f', 'g', 'h', 'j', 'i', 'k', 'l', 'm', 'n', 'o']
      },{
         id:5,
         photos: ['f', 'g', 'h', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q']
      },{
         id:6,
         photos: ['g', 'h', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's']
      }
   ],
   currentAlbum : -1,
   page : 0,
   elementsOnPage : 6
};

function toPage(obj, toNext) {
   let size = obj.currentAlbum < 0 ? obj.albumsArr.length : obj.albumsArr[obj.currentAlbum].length;
   let pagesSize = Math.ceil((size + 1) / obj.elementsOnPage);
   if(toNext) return (obj.page + 1 < pagesSize) ? obj.page + 1 : 0;
   return (obj.page - 1 >= 0) ? obj.page - 1 : pagesSize - 1;
}

const reducer = (state = initialState, action) => {

   let obj = Object.assign({}, state);
   console.log(obj);
   switch (action.type) {
      case 'NEXT_PAGE': 
         obj.page = toPage(obj, true);
         return obj;
      case 'PREVIOUS_PAGE': 
         obj.page = toPage(obj, false);
         return obj;
      case 'SHOW_ALBUMS':
         obj.currentAlbum = -1;
         return obj;
      case 'SHOW_PHOTOS':
         obj.currentAlbum = action.payload.albumId;
         return obj;
      default: return state;
   }
}
export default reducer;