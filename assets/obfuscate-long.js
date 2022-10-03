
        function encaps(each){
        var code=[108,105,46,99,97,46,117,103,98,46,64]
        var common='' //variable to contain e-address
        var out='-'
        if (each!='-')
        {
          for (var i=1; i<code.length+1; i++)
          {
          common+=String.fromCharCode(code[code.length-i])
          }
        out='<a href="mailto:'+each+common+'">'+each+common+'</a>'
        }
        return out;
        }