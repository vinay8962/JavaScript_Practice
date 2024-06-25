// ------------------------------String----------------------------------------

// Length of string

function getLength(str){
   console.log("original string :" , str)
   console.log("Length :" , str.length)
}
getLength("hello world")

// Find of indexof

function findIndexOf(str , target){
    console.log("original string :" , str)
    const data = str.indexOf(target);
    console.log(data)

}
findIndexOf("hello world" , "world")


// find of last indexof



function findLastIndexOf(str , target){
    console.log("original string :" , str)
    console.log("Index:" , str.lastIndexOf(target))

}
findLastIndexOf("hello world world" , "world")


// get Slice

function getSlice(str , start , end){
    console.log("original string :" , str)
    console.log("Index:" , str.slice(start , end))

}
getSlice("hello world world" , 5 , 15)

// get substring


function getSubstring(str , start , end){
    console.log("original string :" , str)
    console.log("Index:" , str.substr(start , end))

}
getSubstring("hello world world" , 5 , 15)


//  get Replace


function replaceString(str , target , replacement){
   console.log(str.replace(target , replacement))
}

replaceString("Hello World" ,"World" , "Javascript")



// Split

function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", "");


// Trim


function trimString(str){
  console.log(str.trim())
}
trimString( "    hello world   ")


// toUpperCase

function stringToupperCase(str){
    console.log(str.toUpperCase())
}

stringToupperCase("hello world")


// toLowerCase

function stringToLowerCase(str){
    console.log(str.toLowerCase())
}

stringToLowerCase("HELLO WORLD")

