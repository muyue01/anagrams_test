function anagram(str){
    var result = []
    if(!str) {
        return result
    }
    if(str.length == 1){
        return [str]
    }
    if(str.lengh == 2){
        return [str[0]+str[1],str[1] + str[0]]
    }
    for(var i = 0;i<str.length;i++){
        for(var j = 0;j<str.length;j++){
            result.push(str[i] + anagram(str)[j]);
        }
    }
    
    // result.push("a" + anagram("bc")[1]);
    // result.push("b" + anagram("ac")[0]);
    // result.push("b" + anagram("ac")[1]);
    // result.push("c" + anagram("ab")[0]);
    // result.push("c" + anagram("ab")[1]);
    return result
}
function drop(str,n){
    var result = ""
    for(var j = 0;i < str.length;i++){
        if(str[i] != n){
            continue
        }
        result += str[i]
    }
}
}
module.exports = anagram