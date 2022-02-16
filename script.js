let data0 = {
  photo: 'pictures/adam-kool-ndN00KmbJ1c-unsplash.jpg',
  title: 'The Forest',
  description: 'Quiet place, great for getting new energy'
};
let data1 = {
  photo: 'pictures/david-marcu-78A265wPiO4-unsplash.jpg ',
  title: 'The Mountains',
  description: 'In the middle of green world'
};
let data2 = {
  photo: 'pictures/fabian-quintero-UWQP2mh5YJI-unsplash.jpg',
  title: 'The Bay',
  description: 'Hugged by the trees'
}
let data3 = {
  photo: 'pictures/igor-kasalovic-tNDvFkxkBHo-unsplash.jpg',
  title: 'The Colors',
  description: 'Where the sea meets the sky'
}
let data4 = {
  photo: 'pictures/jason-ortego-buF62ewDLcQ-unsplash.jpg',
  title: 'The Treetops',
  description: 'Hidden in the middle of forest',
}
let data5 = {
  photo: 'pictures/qingbao-meng-01_igFr7hd4-unsplash.jpg',
  title: 'The Green hills',
  description: 'Find the sheep!',
}
let data6 = {
  photo: 'pictures/tim-swaan-eOpewngf68w-unsplash.jpg',
  title: 'The Bridge',
  description: 'Welcome to the jungle!',
}

let currentPhoto = 0;
let imagesData=[data0,data1,data2,data3,data4,data5,data6];

//$('#firstPicture').attr('src', imagesData[currentPhoto].photo);
//$('#photoTitle').append(imagesData[currentPhoto].title);
//$('#photoDescription').append(imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
  $('#firstPicture').attr('src', imagesData[photoNumber].photo);
  $('#photoTitle').text(imagesData[photoNumber].title);
  $('#photoDescription').text(imagesData[photoNumber].description);
}
loadPhoto(currentPhoto);

$('#rightArrow').click(() => {
  if (currentPhoto < 6) {
    currentPhoto++;
  }
  loadPhoto(currentPhoto);
})

$('#leftArrow').click(() => {
  if (currentPhoto > 0) {
    currentPhoto--;
  } 
  loadPhoto(currentPhoto);
})
let currentThumbnail=0;
let loadThumbnail = (thumbnailNumber) => {
  $('.firstThumbnail').attr('src',imagesData[thumbnailNumber].photo);
};


  $('#firstThumbnail').attr('src',imagesData[0].photo);
  $('#secondThumbnail').attr('src',imagesData[1].photo);
  $('#thirdThumbnail').attr('src',imagesData[2].photo);
  $('#forthThumbnail').attr('src',imagesData[3].photo);
  $('#fifthThumbnail').attr('src',imagesData[4].photo);
  $('#sixthThumbnail').attr('src',imagesData[5].photo);
  $('#seventhThumbnail').attr('src',imagesData[6].photo);

  $('#firstThumbnail').click(()=>{
    loadPhoto(currentPhoto);
  })

  $('#secondThumbnail').click(()=>{
    loadPhoto(currentPhoto+1);
  })
  $('#thirdThumbnail').click(()=>{
    loadPhoto(currentPhoto+2);
  })
  $('#forthThumbnail').click(()=>{
    loadPhoto(currentPhoto+3);
  })
  $('#fifthThumbnail').click(()=>{
    loadPhoto(currentPhoto+4);
  })
  $('#sixthThumbnail').click(()=>{
    loadPhoto(currentPhoto+5);
  })
  $('#seventhThumbnail').click(()=>{
    loadPhoto(currentPhoto+6);
  })

//imagesData.forEach((photoNumber)=>{
//  $('#firstThumbnail').append('src', imagesData[photoNumber].photo)
//})
