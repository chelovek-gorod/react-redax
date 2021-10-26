const initialState = {
   albumsArr : [/*
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
      },{
         id:7,
         photos: ['h', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u']
      },{
         id:8,
         photos: ['j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w']
      },{
         id:9,
         photos: ['i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']
      }*/
   ],
   showAlbums : true,
   currentAlbum : 0,
   pageAlbums : 0,
   pagePhotos : 0,
   elementsOnPage : 6
};

function toPage(obj, page, toNext) { 
   let size = obj.showAlbums ? obj.albumsArr.length : obj.albumsArr[obj.currentAlbum].photos.length;
   let pagesSize = Math.ceil((size + 1) / obj.elementsOnPage);
   if(toNext) return (page + 1 < pagesSize) ? page + 1 : 0;
   return (page - 1 >= 0) ? page - 1 : pagesSize - 1;
}

const reducer = (state = initialState, action) => {

   let obj = Object.assign({}, state);
   switch (action.type) {
      case 'NEXT_PAGE':
         if (obj.showAlbums) obj.pageAlbums = toPage(obj, obj.pageAlbums, true);
         else obj.pagePhotos = toPage(obj, obj.pagePhotos, true);
         return obj;
      case 'PREVIOUS_PAGE': 
         if (obj.showAlbums) obj.pageAlbums = toPage(obj, obj.pageAlbums, false);
         else obj.pagePhotos = toPage(obj, obj.pagePhotos, false);
         return obj;
      case 'SHOW_ALBUMS':
         obj.showAlbums = true;
         obj.pagePhotos = 0;
         return obj;
      case 'SHOW_PHOTOS':
         obj.showAlbums = false;
         obj.currentAlbum = action.albumId;
         //obj.currentAlbum = action.payload.albumId;
         return obj;
      case 'ADD_ALBUM':
         obj.albumsArr.push({id: obj.albumsArr.length,  photos: []});
         return obj;
      case 'ADD_PHOTO':
         obj.albumsArr[obj.currentAlbum].photos.push('z' + obj.albumsArr[obj.currentAlbum].photos.length);
         return obj;

      case 'LOAD_ALBUMS':
         obj.albumsArr = [...action.arr];
         return obj;
      default: return state;
   }
}
export default reducer; // loadAlbums