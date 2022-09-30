let myYoutubeVidiosOne = {
  title: "loops in js",
  vidioLength: 15,
  vidioCreator : 'ketul',
  description: "this is a vidio description",
};

let myYoutubeVidiosTwo = {
  title: "Function in js",
  vidioLength: 10,
  vidioCreator : 'ketul',
  description: "this is a vidio description",
};

let change = function(myObject){
  return {
    formatone: `time of this vidio is: ${myObject.vidioLength + 2}`,
    formattwo: `time of this vidio is: ${myObject.vidioLength - 1}`,
  }
}
let rslt = (change(myYoutubeVidiosTwo));
console.log(rslt.formatone);
console.log(rslt.formattwo);
