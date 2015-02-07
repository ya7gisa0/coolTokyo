(function(doc){
  doc.addEventListener('DOMContentLoaded', init);
  function init() {
    console.log('hello world');
  }

  function getData() {
    var deferred = $.Deferred();
    var url = '../assets/images/test_fix';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(event) {
      if(xhr.readyState === 4) {
        return deferrred.resolve(xhr);
      }
    };
    xhr.open('GET', url, true);
    xhr.send(null);

    // return promise
    return deferred.promise();
    }
})(document);
