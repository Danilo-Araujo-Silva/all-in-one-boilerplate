interface String {
  escapeQuotes(): string;
  escapeSingleQuotes(): string;
  escapeDoubleQuotes(): string;
};

String.prototype.escapeQuotes = function() {
  return this.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
};

String.prototype.escapeSingleQuotes = function() {
  return this.replace(/[\\']/g, '\\$&').replace(/\u0000/g, '\\0');
};

String.prototype.escapeDoubleQuotes = function() {
  return this.replace(/[\\"]/g, '\\$&').replace(/\u0000/g, '\\0');
};
