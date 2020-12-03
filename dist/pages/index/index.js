(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/list */ "./src/pages/layout/list/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_list__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null);
}); // export default () => {
//   const [newTodoText, setNewTodoText] = useState('')
//   const [todoList, setTodoList] = useState<{
//     text: string
//     isComplete: boolean
//   }[]>([])
//   const handleInput: InputProps['onInput'] = (e) => {
//     setNewTodoText(e.detail.value)
//   }
//   const handleClick: EventProps['onClick'] = () => {
//     setTodoList(p => [...p, {
//       text: newTodoText,
//       isComplete: false
//     }])
//     setNewTodoText('')
//   }
//   const handleCheck: CheckboxGroupProps['onChange'] = (e) => {
//     console.log('ss', e.detail.value);
//     setTodoList(p => p.map(item => ({
//       ...item,
//       isComplete: e.detail.value.includes(item.text)
//     })))
//   }
//   return (
//     <View>
//       <View>
//         <CheckboxGroup onChange={handleCheck}>
//           {todoList.map(item =>
//             <View key={item.text}>
//               <Label className={item.isComplete ? 'complete' : ''}>
//                 <Checkbox value={item.text} />
//                 <Text>{item.text}</Text>
//               </Label>
//             </View>
//           )}
//         </CheckboxGroup>
//       </View>
//       <Input value={newTodoText} onInput={handleInput} />
//       <Button onClick={handleClick} >add todo</Button>
//     </View>
//    )
// }

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/components/list-row/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/list-row/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function ListRow(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$note = _ref.note,
      note = _ref$note === void 0 ? '' : _ref$note,
      _ref$thumb = _ref.thumb,
      thumb = _ref$thumb === void 0 ? '' : _ref$thumb,
      _ref$extraText = _ref.extraText,
      extraText = _ref$extraText === void 0 ? '' : _ref$extraText,
      arrow = _ref.arrow,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isSwitch = _ref.isSwitch,
      isSwitch = _ref$isSwitch === void 0 ? false : _ref$isSwitch,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$switchColor = _ref.switchColor,
      switchColor = _ref$switchColor === void 0 ? '#6190E8' : _ref$switchColor,
      _ref$bordered = _ref.bordered,
      bordered = _ref$bordered === void 0 ? true : _ref$bordered,
      className = _ref.className,
      onClick = _ref.onClick,
      onSwitchChange = _ref.onSwitchChange;
  var propsTitle = String(title);
  var propsExtraText = String(extraText);
  var rootClass = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'ui-list-row', {
      'ui-list-row--thumb': thumb,
      'ui-list-row--disabled': disabled,
      'ui-list-row--no-border': !bordered
    });
  }, [bordered, className, disabled, thumb]);

  var handleClick = function handleClick(event) {
    if (typeof onClick === 'function' && !disabled) {
      onClick(event);
    }
  };

  var handleSwitchClick = function handleSwitchClick(e) {
    e.stopPropagation();
  };

  var handleSwitchChange = function handleSwitchChange(event) {
    if (typeof onSwitchChange === 'function' && !disabled) {
      onSwitchChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: rootClass,
    onClick: handleClick
  }, thumb && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "ui-list-row-thumb item-thumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "a"], {
    className: "item-thumb__info",
    mode: "scaleToFill",
    src: thumb
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "ui-list-row-content item-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "item-content__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "item-content__info-title"
  }, propsTitle), note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "item-content__info-note"
  }, note))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "ui-list-row-extra item-extra"
  }, propsExtraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "item-extra__info"
  }, propsExtraText), isSwitch && !propsExtraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "item-extra__switch",
    onClick: handleSwitchClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Switch */ "b"], {
    color: switchColor,
    disabled: disabled,
    checked: checked,
    onChange: handleSwitchChange
  })), arrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "item-extra__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "c"], {
    className: "at-icon item-extra__icon-arrow at-icon-chevron-".concat(arrow)
  }))));
}

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"mp-ui"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/layout/list/index.scss":
/*!******************************************!*\
  !*** ./src/pages/layout/list/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/layout/list/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/layout/list/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _components_list_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/list-row */ "./src/components/list-row/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/pages/layout/list/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




function ListPage() {
  var handleSwitchChange = function handleSwitchChange(e) {
    console.log('onSwitchChange', e);
  };

  var handleClick = function handleClick(e) {
    console.log('onClick', e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "doc-header"
  }, "ListRow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "doc-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__title"
  }, "\u57FA\u672C\u7528\u6CD5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "example-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    onClick: handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    arrow: "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    extraText: "\u67E5\u770B\u8BE6\u60C5",
    arrow: "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u7981\u7528\u72B6\u6001",
    disabled: true,
    extraText: "\u67E5\u770B\u8BE6\u60C5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__title"
  }, "\u5E26\u63CF\u8FF0\u4FE1\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "example-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    note: "\u63CF\u8FF0\u4FE1\u606F",
    onClick: handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    note: "\u63CF\u8FF0\u4FE1\u606F",
    arrow: "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    arrow: "right",
    note: "\u63CF\u8FF0\u4FE1\u606F",
    title: "\u6211\u662F\u4E00\u4E2A\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6807\u9898\u6587\u5B57",
    extraText: "\u67E5\u770B\u8BE6\u60C5\u67E5\u770B\u8BE6\u60C5\u67E5\u770B\u8BE6\u60C5\u67E5\u770B\u8BE6\u60C5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    disabled: true,
    arrow: "right",
    title: "\u6211\u662F\u4E00\u4E2A\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6807\u9898\u6587\u5B57",
    note: "\u7981\u7528\u72B6\u6001",
    extraText: "\u67E5\u770B\u8BE6\u60C5\u67E5\u770B\u8BE6\u60C5\u67E5\u770B\u8BE6\u60C5\u67E5\u770B\u8BE6\u60C5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__title"
  }, "\u5E26\u56FE\u7247"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "example-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    arrow: "right",
    thumb: "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
    onClick: handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    note: "\u63CF\u8FF0\u4FE1\u606F",
    arrow: "right",
    thumb: "http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    note: "\u63CF\u8FF0\u4FE1\u606F",
    extraText: "\u67E5\u770B\u8BE6\u60C5",
    arrow: "right",
    thumb: "http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    disabled: true,
    title: "\u6807\u9898\u6587\u5B57",
    note: "\u7981\u7528\u72B6\u6001",
    extraText: "\u67E5\u770B\u8BE6\u60C5",
    arrow: "right",
    thumb: "http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__title"
  }, "\u5E26 Switch \u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "example-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    isSwitch: true,
    title: "\u6807\u9898\u6587\u5B57",
    onClick: handleClick,
    onSwitchChange: handleSwitchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    isSwitch: true,
    checked: true,
    title: "\u6807\u9898\u6587\u5B57",
    onSwitchChange: handleSwitchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    isSwitch: true,
    disabled: true,
    checked: true,
    title: "\u7981\u7528\u72B6\u6001",
    onSwitchChange: handleSwitchChange
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__title"
  }, "\u65E0\u8FB9\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "panel__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "example-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    isSwitch: true,
    checked: true,
    title: "\u6807\u9898\u6587\u5B57",
    bordered: false,
    onClick: handleClick,
    onSwitchChange: handleSwitchChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list_row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "\u6807\u9898\u6587\u5B57",
    note: "\u63CF\u8FF0\u4FE1\u606F",
    extraText: "\u67E5\u770B\u8BE6\u60C5",
    arrow: "right",
    bordered: false
  }))))));
}

/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map