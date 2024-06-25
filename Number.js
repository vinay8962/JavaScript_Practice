// ---------------------------------Number-----------------------------------------

// Parse Int

function explainParseInt(value){
    console.log("Original Value:" , value)
    let result = parseInt(value);
    console.log("after parseInt : ", result)
}

explainParseInt("42")
explainParseInt("42px")
explainParseInt("3.13")

//  parse Float

function explainparseFloat(value){
    console.log("Original Value:" , value)
    let result = parseFloat(value);
    console.log("after FloatInt : ", result)
}

explainparseFloat("42")
explainparseFloat("42px")
explainparseFloat("3.13")

