exports.run = function (req, res) {
  var html = '<html>';
  html += '<head><title>Crime Report</title></head>';
  html += '<body><center>';
  html += 'Intrusive activity detected. A report including your IP (' + req.connection.remoteAddress + ') and attack details has been submitted to the ICCC (http://ic3.gov)';
  html += '</center></body>';
  res.writeHead(200);
  res.write(html, 'utf8');
  res.end();
};

