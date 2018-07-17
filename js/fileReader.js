var openFile = function(event) {
    var input = event.target;
    //console.log(typeof(input));
    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      var line= text.split("\n");
       
      //console.log(text);
      for(var i=0;i<line.length;i++)
      {
        var url=line[i];
        console.log(line.length);
        window.open(url);
      }
    
    };
    reader.readAsText(input.files[0]);
    //console.log(input.files[0]);
  };
