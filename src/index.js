/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTrianglesCount(preferences = []) {

var d = preferences
    var count = 0;
for (var i = 0; i < d.length; i++){
     var first = d[i];
     var second = d[first-1];
     var third = d[second-1];

 if ( third == i + 1  && first !==second && second !== third && third !== first){

 	count++} else continue
 }
    
    return Math.floor(count/3);
}
