'use strict';
goog.module("bs-platform.marshal");

var Caml_string             = goog.require("bs-platform.caml_string");
var Caml_missing_polyfill   = goog.require("bs-platform.caml_missing_polyfill");
var Caml_builtin_exceptions = goog.require("bs-platform.caml_builtin_exceptions");

function to_buffer(buff, ofs, len, _, _$1) {
  if (ofs < 0 || len < 0 || ofs > (buff.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.to_buffer: substring out of bounds"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_output_value_to_buffer not implemented by bucklescript yet\n");
  }
}

function data_size(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 20 | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.data_size"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_marshal_data_size not implemented by bucklescript yet\n");
  }
}

function total_size(buff, ofs) {
  return 20 + data_size(buff, ofs) | 0;
}

function from_bytes(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 20 | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.from_bytes"
        ];
  } else {
    var len = Caml_missing_polyfill.not_implemented("caml_marshal_data_size not implemented by bucklescript yet\n");
    if (ofs > (buff.length - (20 + len | 0) | 0)) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Marshal.from_bytes"
          ];
    } else {
      return Caml_missing_polyfill.not_implemented("caml_input_value_from_string not implemented by bucklescript yet\n");
    }
  }
}

function from_string(buff, ofs) {
  return from_bytes(Caml_string.bytes_of_string(buff), ofs);
}

function to_channel(_, _$1, _$2) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function from_channel() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

var header_size = 20;

exports.to_channel   = to_channel;
exports.to_buffer    = to_buffer;
exports.from_channel = from_channel;
exports.from_bytes   = from_bytes;
exports.from_string  = from_string;
exports.header_size  = header_size;
exports.data_size    = data_size;
exports.total_size   = total_size;
/* No side effect */
