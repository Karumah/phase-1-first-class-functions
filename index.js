function receivesAFunction (spy) {
    spy();
}


function returnsANamedFunction () {
   
    return function returnedFunction () {
        console.log('I\'m a named function that has been returned');
    }
}


function returnsAnAnonymousFunction () {
    return function () {
    return 'Im an anonymous function ';
    }
    
}