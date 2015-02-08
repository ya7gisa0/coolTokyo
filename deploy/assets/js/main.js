(function(doc, $) {
  function init() {
    setMapManager();
    //getData();
  }
  doc.addEventListener('DOMContentLoaded', init, false);

  function setMapManager() {
    var ymap = new Y.Map("map");

    //公園ラベル生成
    var label1 = new Y.Label(new Y.LatLng(35.71413, 139.77264),"上野公園 36.1&#8451;");
    var label2 = new Y.Label(new Y.LatLng(35.654938, 139.747984),"芝公園 39.0&#8451;");
    var label3 = new Y.Label(new Y.LatLng(35.673824, 139.756163),"日比谷公園 39.4&#8451;");
    var label4 = new Y.Label(new Y.LatLng(35.671736, 139.694945),"代々木公園 40.1&#8451;");
    var label5 = new Y.Label(new Y.LatLng(35.676114, 139.713496),"明治公園 44.1&#8451;");

    // setStyle
    setStyle();

    // set array
    var labels = [label1, label2, label3, label4, label5];

    //中心点設定（皇居）
    ymap.drawMap(new Y.LatLng(35.685175, 139.752799), 13, Y.LayerSetId.NORMAL);


    setFeatures(labels, ymap);

    setEventListener(labels);
  }

  function setFeatures(labels, map) {
    var length = labels.length;
    for(var i = 0; i < length; i++) {
      map.addFeature(labels[i]);
    }
  }

  function setStyle() {
    var elms = doc.getElementsByClassName('yolp-tlchp');
    console.log(elms);
    for(var i = 0; i < elms.length; i++) {
      console.log(elms[i]);
      elms[i].style.width = '25vw';
    }
  }

  function setEventListener(labels) {
    console.log(labels[0]);
    labels[0].bind('click',function(){
      window.location.href = "video1.html";
    });
    labels[1].bind('click',function(){
      window.location.href = "video1.html";
    });
    labels[2].bind('click',function(){
      window.location.href = "video1.html";
    });
    labels[3].bind('click',function(){
      window.location.href = "video1.html";
    });
    labels[4].bind('click',function(){
      window.location.href = "video1.html";
    });
  }

  function getData() {
    //var deferred = $.Deferred();
    var url = '../assets/images/test_fix';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(event) {
      if(xhr.readyState === 4) {
        //return deferrred.resolve(xhr);
      }
    };
    xhr.open('GET', url, true);
    xhr.send(null);

    // return promise
    //return deferred.promise();
    }
})(document, window.jQuery);
