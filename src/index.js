/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTrianglesCount(preferences = []) {

    let d = preferences;
    let count = 0;

    for (let i = 0, length = d.length; i < length; i++) {
        let first = d[i];
        let second = d[first-1];
        let third = d[second-1];

        if ( third == i + 1 && third !== first) {
            count++ ;
        } else continue;
    }
    
    return Math.floor(count/3);
}
