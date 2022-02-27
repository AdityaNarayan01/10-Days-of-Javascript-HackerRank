/*
Task

First,s print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, s print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
*/

function vowelsAndConsonants(s) {
    const vowels = "aeiou";
    var cons = "";
    
    for(let i = 0; i < s.length; i++)
    {
        if(vowels.includes(s[i])){
            console.log(s[i])
        }
        else {
            cons += s[i] + '\n';
            }
            
    }console.log(cons);
    
    
}