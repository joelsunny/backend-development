/*
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*/
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }
  
async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
    console.log('function end');
}

asyncCall();
console.log('end');

/*
Output:
    calling
    end
    resolved
    function end
*/