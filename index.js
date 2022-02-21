function returnsAnAnonymousFunction () {
    return function (){
    }
}
function receivesAFunction (callback){
    return callback()
}
function returnsANamedFunction (){
    return receivesAFunction
}