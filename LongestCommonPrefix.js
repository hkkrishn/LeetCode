//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
//Input: ["flower","flow","flight"]
//Output: "fl"

let comparisonWord = strs[0];
let comparisonIndex = 0;

    for(let comparisonLetter of comparisonWord){
        console.log(comparisonLetter)
        for(let i = 1;i<strs.length;i++){
            let currWord = strs[i]
            let currLetter = currWord.charAt(comparisonIndex)
            // console.log(currLetter)
            if(comparisonLetter !== currLetter ||comparisonIndex > currWord.length){
               return prefix
               }else if(currWord === comparisonWord && strs.length === 2){
                   prefix = currWord
                   return currWord
               }else{
                   // prefix += comparisonLetter
               }
        }
        comparisonIndex ++;
          prefix += comparisonLetter
    }

    return prefix

};