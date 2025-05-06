const firstMethod = function() {
    let promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('first method completed');
            resolve({data: '123'});
        }, 2000)
    });

    return promise;
}

const secondMethod = function(dataIn) {
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('second method completed');
            resolve({newData: dataIn.data + 'some more data'});
        }, 2000);
    });

    return promise;
}

const thirdMethod = function(dataIn) {
    let promise = new Promise(function(resolve, reject){
          setTimeout(function(){
            console.log('third method completed');
            resolve({result: dataIn.newData});
        }, 3000);
    });

    return promise;
}

const value = firstMethod()
.then(secondMethod)
.then(thirdMethod).then(function(finalValue){
    console.log(finalValue.result);
})