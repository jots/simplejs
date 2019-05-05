(function () {
  var get_all_recs;

  get_all_recs = async function (domain) {
    var i, len, type, types;
    types = ["A", "NS", "MX", "TXT"];
    for (i = 0, len = types.length; i < len; i++) {if (window.CP.shouldStopExecution(0)) break;
      type = types[i];
      console.log(type);
      await fetch(`https://dns.google.com/query?name=yahoo.com&type=${type}`);
    }window.CP.exitedLoop(0);
    return data;
  };

  get_all_recs("yahoo.com");

}).call(this);
