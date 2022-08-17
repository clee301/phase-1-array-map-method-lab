const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {	
  
    const wordCap = x => {
    const firstChar = x.charAt(0).toUpperCase()    
    const remaining = x.substring(1)      
      return `${firstChar}${remaining}`}
  
  const wordSplit = x => {
    const split = x.split(" ")
    const split2 = split.map((y) => wordCap(y))
    const split3 = split2.join(" ")
    return split3}
    
    const newArray = tutorials.map(wordSplit)
  return newArray
  }