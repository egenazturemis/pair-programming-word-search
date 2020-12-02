const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return "letters matrix is empty."
    }

    if (Array.isArray(letters) === false){
        return "letters matrix is not of type: Array."
    }

    // normal horizontal search 
    const horizontalJoin = letters.map(ls => ls.join(''))

  
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    // normal vertical search 
    const lettersTransposed = transpose(letters);
    const verticalJoin = lettersTransposed.map(ls => ls.join(''))
  
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    // backwards horizontal search 
      let lettersBackwardsH = letters.map(ls => ls.reverse());
      const horizontalJoinBackwards = lettersBackwardsH.map(ls => ls.join(''));

      for (l of horizontalJoinBackwards) {
        if (l.includes(word)) return true;
    }
     // backwards vertical search 
     const lettersTransposed2 = transpose(letters);
     const lettersTransposedBackwards = lettersTransposed2.map(ls => ls.reverse());
     const verticalJoinBackwards = lettersTransposedBackwards.map(ls => ls.join(''));
   
     for (l of verticalJoinBackwards) {
         if (l.includes(word)) return true;
     }


    return false;
}

module.exports = wordSearch


function transpose(matrix){
    let newArray = [];
    for(let i = 0; i < matrix[0].length; i++){
        newArray.push([]);
    };
  
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length; j++){
            newArray[i].push(matrix[j][i]);
        };
    };
  
    return newArray;
  }