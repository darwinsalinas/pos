(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./public/js/sb-admin-2.min.js":
/*!*************************************!*\
  !*** ./public/js/sb-admin-2.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Start Bootstrap - SB Admin 2 v4.0.6 (https://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */
!function (t) {
  "use strict";

  t("#sidebarToggle, #sidebarToggleTop").on("click", function (o) {
    t("body").toggleClass("sidebar-toggled"), t(".sidebar").toggleClass("toggled"), t(".sidebar").hasClass("toggled") && t(".sidebar .collapse").collapse("hide");
  }), t(window).resize(function () {
    t(window).width() < 768 && t(".sidebar .collapse").collapse("hide");
  }), t("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (o) {
    if (768 < t(window).width()) {
      var e = o.originalEvent,
          l = e.wheelDelta || -e.detail;
      this.scrollTop += 30 * (l < 0 ? 1 : -1), o.preventDefault();
    }
  }), t(document).on("scroll", function () {
    100 < t(this).scrollTop() ? t(".scroll-to-top").fadeIn() : t(".scroll-to-top").fadeOut();
  }), t(document).on("click", "a.scroll-to-top", function (o) {
    var e = t(this);
    t("html, body").stop().animate({
      scrollTop: t(e.attr("href")).offset().top
    }, 1e3, "easeInOutExpo"), o.preventDefault();
  });
}(jQuery);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ../../public/js/sb-admin-2.min.js */ "./public/js/sb-admin-2.min.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


__webpack_require__(/*! ./components/Pos */ "./resources/js/components/Pos.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/Impuestos/AmbitoImpuestoList.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Impuestos/AmbitoImpuestoList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AmbitoImpuestoList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function AmbitoImpuestoList(_ref) {
  var handleChange = _ref.handleChange,
      etiqueta = _ref.etiqueta,
      name = _ref.name,
      selected = _ref.selected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var getList = function getList() {
    var url = '/ambitos-impuestos';
    axios.get(url).then(function (resp) {
      setList(resp.data.data);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var handleChangeEvent = function handleChangeEvent(e) {
    if (handleChange) {
      handleChange(e);
    } else {
      console.info('no se ha definido una funcion manejadora del evento change');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(getList, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: ""
  }, etiqueta ? etiqueta : 'Seleccione:'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: handleChangeEvent,
    className: "form-control",
    name: name ? name : '',
    value: selected
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 0
  }, "Seleccione una opci\xF3n de la lista"), list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: item.id,
      value: item.id
    }, item.nombre);
  })));
}

/***/ }),

/***/ "./resources/js/components/Impuestos/CalculoImpuestoList.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Impuestos/CalculoImpuestoList.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalculoImpuestoList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function CalculoImpuestoList(_ref) {
  var handleChange = _ref.handleChange,
      etiqueta = _ref.etiqueta,
      name = _ref.name,
      selected = _ref.selected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var getList = function getList() {
    var url = '/calculos-impuestos';
    axios.get(url).then(function (resp) {
      setList(resp.data.data);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var handleChangeEvent = function handleChangeEvent(e) {
    if (handleChange) {
      handleChange(e);
    } else {
      console.info('no se ha definido una funcion manejadora del evento change');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(getList, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: ""
  }, etiqueta ? etiqueta : 'Seleccione:'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: handleChangeEvent,
    className: "form-control",
    name: name ? name : '',
    value: selected
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: 0
  }, "Seleccione una opci\xF3n de la lista"), list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: item.id,
      value: item.id
    }, item.nombre);
  })));
}

/***/ }),

/***/ "./resources/js/components/Impuestos/Impuestos.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Impuestos/Impuestos.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Impuestos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImpuestosForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImpuestosForm */ "./resources/js/components/Impuestos/ImpuestosForm.js");
/* harmony import */ var _TablaImpuestos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TablaImpuestos */ "./resources/js/components/Impuestos/TablaImpuestos.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Impuestos() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModalForm = _useState2[0],
      setShowModalForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentItem = _useState4[0],
      setCurrentItem = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      impuestos = _useState6[0],
      setImpuestos = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nombre: '',
    importe: 0,
    etiqueta: '',
    ambito_impuesto_id: '',
    calculo_impuesto_id: '',
    ambito: null,
    calculo: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      form = _useState8[0],
      setForm = _useState8[1];

  var loadDataSingle = function loadDataSingle() {
    if (currentItem) {
      var url = "impuestos/".concat(currentItem);
      axios.get(url).then(function (resp) {
        setForm(_objectSpread({}, resp.data.data));
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(loadDataSingle, [currentItem]);

  var hadleEdit = function hadleEdit(id) {
    setShowModalForm(true);
    setCurrentItem(id);
    console.log('editar', id);
  };

  var handleDelete = function handleDelete(id) {
    var url = "/impuestos/".concat(id);
    axios["delete"](url).then(function (resp) {
      loadData();
    })["catch"](function (err) {
      console.log(err.response.data.message);
    });
  };

  var handleAdd = function handleAdd() {
    setCurrentItem(null);
    setShowModalForm(true);
  };

  var handleChange = function handleChange(e) {
    setForm(_objectSpread({}, form, _defineProperty({}, e.target.name, e.target.value)));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var url = '/impuestos';
    var method = 'POST';

    if (currentItem) {
      method = 'PATCH';
      url = "/impuestos/".concat(currentItem);
    }

    axios({
      method: method,
      url: url,
      data: form
    }).then(function (resp) {
      console.log('completado');
      loadData();
      setShowModalForm(false);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var loadData = function loadData() {
    var url = "/impuestos";
    axios.get(url).then(function (resp) {
      setImpuestos(resp.data.data);
    })["catch"](function (err) {
      console.log(err.response.data.message);
    });
  };

  var toggleModal = function toggleModal() {
    setShowModalForm(!showModalForm);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(loadData, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TablaImpuestos__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleAdd: handleAdd,
    hadleEdit: hadleEdit,
    lista: impuestos,
    handleDelete: handleDelete
  }), showModalForm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImpuestosForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: currentItem,
    toggleModal: toggleModal,
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    form: form
  }))));
}

/***/ }),

/***/ "./resources/js/components/Impuestos/ImpuestosForm.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Impuestos/ImpuestosForm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImpuestosForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AmbitoImpuestoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmbitoImpuestoList */ "./resources/js/components/Impuestos/AmbitoImpuestoList.js");
/* harmony import */ var _CalculoImpuestoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalculoImpuestoList */ "./resources/js/components/Impuestos/CalculoImpuestoList.js");



function ImpuestosForm(_ref) {
  var titulo = _ref.titulo,
      id = _ref.id,
      toggleModal = _ref.toggleModal,
      handleSubmit = _ref.handleSubmit,
      form = _ref.form,
      _handleChange = _ref.handleChange;
  var styles = {
    display: "block"
  };
  var modalStyle = {
    maxHeight: '70vh',
    overflow: 'scroll-y'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    style: styles,
    role: "dialog",
    "aria-modal": "true"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog modal-lg",
    role: "document"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "modal-title"
  }, titulo ? titulo : 'Formulario de impuestos'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    style: modalStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: ""
  }, "Nombre del impuesto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: _handleChange,
    value: form.nombre,
    type: "text",
    name: "nombre",
    className: "form-control",
    placeholder: "Nombre del impuesto"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AmbitoImpuestoList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selected: form.ambito_impuesto_id,
    etiqueta: "\xC1mbito del impuesto",
    name: "ambito_impuesto_id",
    handleChange: _handleChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CalculoImpuestoList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selected: form.calculo_impuesto_id,
    etiqueta: "C\xE1lculo del impuesto",
    name: "calculo_impuesto_id",
    handleChange: function handleChange(e) {
      return _handleChange(e);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: ""
  }, "Importe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: _handleChange,
    value: form.importe,
    type: "number",
    name: "importe",
    className: "form-control",
    placeholder: "Importe"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: ""
  }, "Etiqueta en facturas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: _handleChange,
    value: form.etiqueta,
    type: "text",
    name: "etiqueta",
    className: "form-control",
    placeholder: "Etiqueta en facturas"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Guardar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: toggleModal,
    type: "submit",
    className: "btn btn-primary"
  }, "Cancelar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal"
  }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary"
  }, "Save changes")))));
}

/***/ }),

/***/ "./resources/js/components/Impuestos/TablaImpuestos.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Impuestos/TablaImpuestos.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TablaImpuestos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TablaImpuestosItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaImpuestosItem */ "./resources/js/components/Impuestos/TablaImpuestosItem.js");


function TablaImpuestos(_ref) {
  var hadleEdit = _ref.hadleEdit,
      handleDelete = _ref.handleDelete,
      handleAdd = _ref.handleAdd,
      lista = _ref.lista;

  var editar = function editar(id) {
    hadleEdit(id);
  };

  var eliminar = function eliminar(id) {
    handleDelete(id);
  };

  var agregar = function agregar() {
    handleAdd();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Nombre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\xC1mbito"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "C\xE1lculo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Importe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Etiqueta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-group btn-group-sm",
    role: "group",
    "aria-label": ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: agregar,
    type: "button",
    className: "btn btn-primary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-plus"
  }), "   Agregar"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, lista.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TablaImpuestosItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      id: item.id,
      nombre: item.nombre,
      ambito: item.ambito.nombre,
      calculo: item.calculo.nombre,
      importe: item.importe,
      etiqueta: item.etiqueta,
      hadleEdit: editar,
      handleDelete: eliminar,
      handleAdd: agregar
    });
  })));
}

/***/ }),

/***/ "./resources/js/components/Impuestos/TablaImpuestosItem.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Impuestos/TablaImpuestosItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TablaImpuestosItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TablaImpuestosItem(_ref) {
  var id = _ref.id,
      nombre = _ref.nombre,
      ambito = _ref.ambito,
      calculo = _ref.calculo,
      importe = _ref.importe,
      etiqueta = _ref.etiqueta,
      hadleEdit = _ref.hadleEdit,
      handleDelete = _ref.handleDelete;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, nombre), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ambito), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, calculo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, importe), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, etiqueta), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-group btn-group-sm",
    role: "group",
    "aria-label": ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-eye"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return hadleEdit(id);
    },
    type: "button",
    className: "btn btn-secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-pencil-alt"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return handleDelete(id);
    },
    type: "button",
    className: "btn btn-danger"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-trash"
  })))));
}

/***/ }),

/***/ "./resources/js/components/Pos.js":
/*!****************************************!*\
  !*** ./resources/js/components/Pos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Impuestos_Impuestos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Impuestos/Impuestos */ "./resources/js/components/Impuestos/Impuestos.js");
/* harmony import */ var _productos_Productos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos/Productos */ "./resources/js/components/productos/Productos.js");
/* harmony import */ var _comunes_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comunes/Loader */ "./resources/js/components/comunes/Loader.js");





function Pos() {
  var cardStyles = {
    position: 'absolute',
    willChange: 'transform',
    top: '0px',
    left: '0px',
    transform: 'translate3d(17px, 17px, 0px)'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card shadow mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header py-3 d-flex flex-row align-items-center justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "m-0 font-weight-bold text-primary"
  }, "Lista de productos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown no-arrow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    role: "button",
    id: "dropdownMenuLink",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-ellipsis-v fa-sm fa-fw text-gray-400"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right shadow animated--fade-in",
    "aria-labelledby": "dropdownMenuLink",
    "x-placement": "bottom-end",
    style: cardStyles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-header"
  }, "Dropdown Header:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Impuestos_Impuestos__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

if (document.getElementById('appimpuestos')) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pos, null), document.getElementById('appimpuestos'));
}

/***/ }),

/***/ "./resources/js/components/comunes/Boton.js":
/*!**************************************************!*\
  !*** ./resources/js/components/comunes/Boton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Boton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Boton(_ref) {
  var texto = _ref.texto,
      tipo = _ref.tipo,
      accion = _ref.accion,
      icono = _ref.icono;
  var tipBoton = tipo ? tipo : 'primary';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: accion,
    className: "btn btn-".concat(tipBoton)
  }, icono ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas ".concat(icono)
  }) : null, texto ? " ".concat(texto) : ' Click');
}

/***/ }),

/***/ "./resources/js/components/comunes/Button.js":
/*!***************************************************!*\
  !*** ./resources/js/components/comunes/Button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Button(_ref) {
  var texto = _ref.texto,
      tipo = _ref.tipo,
      icono = _ref.icono,
      accion = _ref.accion;
  var tipoBoton = tipo ? "btn btn-".concat(tipo) : 'btn btn-primary';
  var iconoBoton = icono ? "fa fa-".concat(icono) : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: accion,
    className: tipoBoton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: iconoBoton
  }), texto ? ' ' + texto : 'Click');
}

/***/ }),

/***/ "./resources/js/components/comunes/Loader.js":
/*!***************************************************!*\
  !*** ./resources/js/components/comunes/Loader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Loader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader"
  }, "Cargando...");
}

/***/ }),

/***/ "./resources/js/components/comunes/Loading.js":
/*!****************************************************!*\
  !*** ./resources/js/components/comunes/Loading.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader"
  }, "Loading...");
}

/***/ }),

/***/ "./resources/js/components/productos/Productos.js":
/*!********************************************************!*\
  !*** ./resources/js/components/productos/Productos.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Productos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TablaProductos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaProductos */ "./resources/js/components/productos/TablaProductos.js");
/* harmony import */ var _comunes_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comunes/Loading */ "./resources/js/components/comunes/Loading.js");
/* harmony import */ var _comunes_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comunes/Loader */ "./resources/js/components/comunes/Loader.js");
/* harmony import */ var _Impuestos_ImpuestosForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Impuestos/ImpuestosForm */ "./resources/js/components/Impuestos/ImpuestosForm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Productos() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    data: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      lista = _useState2[0],
      setLista = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showModalForm = _useState6[0],
      setShowModalForm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      currentItem = _useState8[0],
      setCurrentItem = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nombre: '',
    disponible: false,
    costo: 0,
    precio_venta: '',
    tipo_producto_id: '',
    categoria_producto_id: '',
    tipo_producto: null,
    categoria_producto: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      form = _useState10[0],
      setForm = _useState10[1];

  var loadDataSingle = function loadDataSingle() {
    if (currentItem) {
      var url = "productos/".concat(currentItem);
      axios.get(url).then(function (resp) {
        setForm(_objectSpread({}, resp.data.data));
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(loadDataSingle, [currentItem]);

  var handleEdit = function handleEdit(id) {
    setShowModalForm(true);
    setCurrentItem(id);
    console.log('editar', id);
  };

  var handleDelete = function handleDelete(id) {
    var url = "/productos/".concat(id);
    axios["delete"](url).then(function (resp) {
      loadData();
    })["catch"](function (err) {
      console.log(err.response.data.message);
    });
  };

  var handleAdd = function handleAdd() {
    setCurrentItem(null);
    setShowModalForm(true);
  };

  var handleChange = function handleChange(e) {
    setForm(_objectSpread({}, form, _defineProperty({}, e.target.name, e.target.value)));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var url = '/productos';
    var method = 'POST';

    if (currentItem) {
      method = 'PATCH';
      url = "/productos/".concat(currentItem);
    }

    axios({
      method: method,
      url: url,
      data: form
    }).then(function (resp) {
      console.log('completado');
      loadData();
      setShowModalForm(false);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var loadData = function loadData() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/productos';

    if (!url) {
      return;
    } //let url = `/productos`


    axios.get(url).then(function (resp) {
      setLoading(false);
      setLista(resp.data.data);
    })["catch"](function (err) {
      setLoading(false);
      console.log(err.response.data.message);
    });
  };

  var toggleModal = function toggleModal() {
    setShowModalForm(!showModalForm);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(loadData, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12"
  }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comunes_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TablaProductos__WEBPACK_IMPORTED_MODULE_1__["default"], {
    lista: lista.data,
    handleEdit: handleEdit,
    handleDelete: handleDelete
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    "aria-label": "Page navigation example"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return loadData(lista.prev_page_url);
    },
    className: "page-link"
  }, "Anterior")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return loadData(lista.next_page_url);
    },
    className: "page-link"
  }, "Siguiente"))))));
}

/***/ }),

/***/ "./resources/js/components/productos/TablaProductos.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/productos/TablaProductos.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TablaProductos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TablaProductosItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablaProductosItem */ "./resources/js/components/productos/TablaProductosItem.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function TablaProductos(_ref) {
  var handleEdit = _ref.handleEdit,
      handleDelete = _ref.handleDelete,
      handleAdd = _ref.handleAdd,
      lista = _ref.lista;

  if (lista.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Producto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Costo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Precio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Tipo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Catagor\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Disponible"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, lista.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TablaProductosItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        key: item.id
      }, item, {
        handleDelete: handleDelete,
        handleEdit: handleEdit
      }));
    })));
  }

  return 'No hay datos';
}

/***/ }),

/***/ "./resources/js/components/productos/TablaProductosItem.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/productos/TablaProductosItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TablaProductosItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comunes_Boton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comunes/Boton */ "./resources/js/components/comunes/Boton.js");
/* harmony import */ var _comunes_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comunes/Button */ "./resources/js/components/comunes/Button.js");



function TablaProductosItem(_ref) {
  var id = _ref.id,
      nombre = _ref.nombre,
      costo = _ref.costo,
      precio_venta = _ref.precio_venta,
      tipo_producto = _ref.tipo_producto,
      categoria_producto = _ref.categoria_producto,
      disponible = _ref.disponible,
      handleEdit = _ref.handleEdit,
      handleDelete = _ref.handleDelete;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, nombre), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, costo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, precio_venta), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, tipo_producto.nombre), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, categoria_producto.nombre), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, disponible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-circle text-success"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-circle text-danger"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-group btn-group-sm",
    role: "group",
    "aria-label": ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comunes_Button__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comunes_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    texto: "Editar",
    icono: "pencil-alt",
    accion: function accion() {
      return handleEdit(id);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comunes_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tipo: "warning",
    icono: "trash"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comunes_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tipo: "danger"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-eye"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return handleEdit(id);
    },
    type: "button",
    className: "btn btn-secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-pencil-alt"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return handleDelete(id);
    },
    type: "button",
    className: "btn btn-danger"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-trash"
  })))));
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/darwin/Sites/pos/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/darwin/Sites/pos/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);