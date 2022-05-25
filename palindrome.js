function palindromeIndex(s) {
    // Write your code here
    const len = s.length;
    if(isPalindrome(s)) return -1;
    for(let i=0; i< len; i++){
        let tempArray = s.split('');
        tempArray[i] = '';
        const tempStr = tempArray.join('');
        console.log(tempStr);
        if(isPalindrome(tempStr)) return i;
    }
    return -1;
}

function isPalindrome(s){
    const len = s.length;
    for(let i=0; i<len/2; i++){
        if(s[i] !== s[len-i-1]) return false;
    }
    return true;
}

console.log(palindromeIndex('aaa'));