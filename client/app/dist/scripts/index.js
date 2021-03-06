"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
      }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      module.exports = {
        fade_out: function fade_out(template, delay) {
          var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          template.element.setAttribute('style', "\n            transition: all ease-in " + delay + "s;\n            opacity: 0;\n            ");
          if (after) setTimeout(after, delay * 1000);
        }

      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\building_elements\\animations.js", "/components\\building_elements");
  }, { "9FoBSB": 27, "buffer": 25 }], 2: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var request = require('browser-request');

      module.exports = {
        get: function get(url) {
          return new Promise(function (resolve, reject) {
            request.get(url, function (err, res, body) {
              body = JSON.parse(body);
              if (err) reject(err);else if (body.Error) reject(body.Error);else resolve(body);
            });
          });
        },

        post: function post(url, data) {
          return new Promise(function (resolve, reject) {
            request.post({ url: url, form: data }, function (err, httpResponse, body) {
              if (err) reject(err);else if (body.Error) reject(body.Error);else resolve(body);
            });
          });
        }
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\building_elements\\handle-request.js", "/components\\building_elements");
  }, { "9FoBSB": 27, "browser-request": 24, "buffer": 25 }], 3: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../building_elements/template');

      module.exports = {
        generate: function generate(markup, dataList, script) {
          return dataList.map(function (data) {
            return new Template({ markup: markup, data: data }, script);
          });
        }
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\building_elements\\template-generator.js", "/components\\building_elements");
  }, { "../building_elements/template": 4, "9FoBSB": 27, "buffer": 25 }], 4: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      module.exports = function Template(_ref, script) {
        var markup = _ref.markup,
            data = _ref.data;

        var _this = this;

        var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


        for (var key in data) {
          var replace = "{{" + key + "}}";
          markup = markup.replace(new RegExp(replace, 'g'), data[key]);
        }

        this.script = script.bind(this);
        self.parent = parent;
        this.data = data;
        this.element = document.createElement('wd-template');
        this.element.innerHTML = markup;

        this.addToRender = function () {
          document.getElementById('render').innerHTML = '';
          document.getElementById('render').appendChild(_this.element);
        };

        this.clearAndRender = function () {
          document.getElementById('render').innerHTML = '';
          document.getElementById('render').appendChild(_this.element);
          _this.script();
        };

        this.clearSelf = function () {
          _this.element.innerHTML = '';
        };

        this.removeFromDocument = function () {
          document.body.removeChild(_this.element);
        };

        this.appendChild = function (template) {
          _this.element.appendChild(template.element);
          template.script();
        };
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\building_elements\\template.js", "/components\\building_elements");
  }, { "9FoBSB": 27, "buffer": 25 }], 5: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      module.exports = "    <div class=\"background\"></div>\n<div class='wd__widgets'>\n        \n    </div>\n";
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\desktop-markup.js", "/components\\desktop");
  }, { "9FoBSB": 27, "buffer": 25 }], 6: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../building_elements/template');
      var widgets = require('./widgets/widgets-template');
      var markup = require('./desktop-markup');
      var iconsContainer = require('./icons/icons-container-template');
      var toolbar = require('./toolbar/toolbar-template');
      var store = require('../store/store-template');
      var animate = require('../building_elements/animations');

      module.exports = new Template({ markup: markup }, function () {
        var _this2 = this;

        this.appendChild(toolbar);
        this.appendChild(iconsContainer);
        var dis = this;
        var storeBtn = document.getElementsByClassName('footer__button--second')[0];
        storeBtn.addEventListener('click', function () {
          animate.fade_out(_this2, 1, function () {
            var bckBtn = store.element.getElementsByClassName('back__button')[0];
            bckBtn.addEventListener('click', function () {
              animate.fade_out(store, 1, function () {
                dis.addToRender();
                dis.element.setAttribute('style', "\n                            transition: all ease-in 0.5s;\n                            opacity: 1;\n                            ");
              });
            });
            store.addToRender();
            store.element.setAttribute('style', "\n                    transition: all ease-in 0.5s;\n                    opacity: 1;\n                    ");
          });
        });
      });
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\desktop-template.js", "/components\\desktop");
  }, { "../building_elements/animations": 1, "../building_elements/template": 4, "../store/store-template": 21, "./desktop-markup": 5, "./icons/icons-container-template": 11, "./toolbar/toolbar-template": 13, "./widgets/widgets-template": 17, "9FoBSB": 27, "buffer": 25 }], 7: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var generator = require('../../../building_elements/template-generator');
      var markup = require('./folder-markup');

      module.exports = {
        generate: function generate(dataList) {
          return generator.generate(markup, dataList, function () {
            var rect = this.element.getBoundingClientRect();
            this.element.setAttribute('draggable', 'true');
            var el = this.element;
            this.rect = rect;
            this.element.addEventListener('drag', function (ev) {
              el.getElementsByClassName('folder__container')[0].setAttribute('style', "top: " + (ev.clientY - rect.top + 15) + "px; left: " + (ev.clientX - rect.left) + "px; cursor: move;");
            });
            this.element.addEventListener('dragend', function (ev) {
              el.getElementsByClassName('folder__container')[0].setAttribute('style', "top: " + (ev.clientY - rect.top + 15) + "px; left: " + (ev.clientX - rect.left) + "px;");
            });
            this.element.addEventListener("dragstart", function (e) {
              console.log(e.clientX);
              var crt = this.cloneNode(true);
              crt.style.backgroundColor = "red";
              crt.style.display = "none";
              e.dataTransfer.setDragImage(crt, 0, 0);
            }, false);
            this.element.setAttribute('dragover', function (ev) {
              console.log('DRAGOVER');
              ev.preventDefault();
            });
            this.element.setAttribute('drop', function (ev) {
              ev.preventDefault();
              console.log(ev.dataTransfer.getData('text'));
            });
          });
        }
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\icons\\folder_generator\\folder-generator.js", "/components\\desktop\\icons\\folder_generator");
  }, { "../../../building_elements/template-generator": 3, "./folder-markup": 8, "9FoBSB": 27, "buffer": 25 }], 8: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      module.exports = "<div class=\"folder__container\">\n<div class=\"icon \">Y\n    <div class=\"icon__favicon icon__favicon--first\"></div>\n</div>\n<div class=\"icon__hover__container\">\n    <div class=\"icon__hover\">{{name}}</div>\n    <div class=\"icon__links\">\n</div>\n</div>\n</div>";
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\icons\\folder_generator\\folder-markup.js", "/components\\desktop\\icons\\folder_generator");
  }, { "9FoBSB": 27, "buffer": 25 }], 9: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var generator = require('../../../building_elements/template-generator');
      var markup = require('./icon-markup');

      module.exports = {
        generate: function generate(dataList) {
          return generator.generate(markup, dataList, function () {
            console.log(this.data.position);
            this.element.getElementsByClassName('icon__container')[0].setAttribute('style', "top: " + this.data.position[1] + "px; left: " + this.data.position[0] + "px; cursor: move;");
            var favicon = this.element.getElementsByClassName('icon__favicon')[0];
            favicon.setAttribute('style', "background-image: url(" + this.data.image_url + ")");
            var url = this.data.url;
            var rect = this.element.getBoundingClientRect();
            this.rect = rect;
            this.element.addEventListener('click', function () {
              window.open(url);
            });
            this.element.setAttribute('draggable', 'true');
            var el = this.element;

            this.element.addEventListener('drag', function (ev) {
              el.getElementsByClassName('icon__container')[0].setAttribute('style', "top: " + (ev.clientY - rect.top + 15) + "px; left: " + (ev.clientX - rect.left) + "px; cursor: move;");
            });
            this.element.addEventListener('dragend', function (ev) {
              ev.preventDefault();
              el.getElementsByClassName('icon__container')[0].setAttribute('style', "top: " + (ev.clientY - rect.top + 15) + "px; left: " + (ev.clientX - rect.left) + "px;");
            });
            this.element.addEventListener("dragstart", function (e) {
              var crt = this.cloneNode(true);
              crt.style.backgroundColor = "red";
              crt.style.display = "none";
              e.dataTransfer.setDragImage(crt, 0, 0);
              e.dataTransfer.setData('text', this.data);
            }, false);
          });
        }
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\icons\\icon_generator\\icon-generator.js", "/components\\desktop\\icons\\icon_generator");
  }, { "../../../building_elements/template-generator": 3, "./icon-markup": 10, "9FoBSB": 27, "buffer": 25 }], 10: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      module.exports = "\n<div class=\"icon__container\">\n<div class=\"icon \">Y\n    <div class=\"icon__favicon icon__favicon--first\"></div>\n</div>\n<div class=\"icon__hover__container\">\n    <div class=\"icon__hover\">{{name}}</div>\n</div>\n</div>";
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\icons\\icon_generator\\icon-markup.js", "/components\\desktop\\icons\\icon_generator");
  }, { "9FoBSB": 27, "buffer": 25 }], 11: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../../building_elements/template');
      var icons = require('./icon_generator/icon-generator');
      var folder = require('./folder_generator/folder-generator');
      var requestHandle = require('../../building_elements/handle-request');

      module.exports = new Template({ markup: "" }, function () {
        var _this3 = this;

        this.element.className = 'wd__icons';
        var mail = JSON.parse(window.localStorage.getItem('user')).mail;
        var url = "http://127.0.0.1:5000/user/get_icons?mail=" + mail;
        requestHandle.get(url).then(function (res) {
          console.log(res);
          var user = JSON.parse(window.localStorage.getItem('user'));
          user.icons = res;
          window.localStorage.setItem('user', JSON.stringify(user));

          iconData = JSON.parse(window.localStorage.getItem('user')).icons;
          iconData = iconData.filter(function (ele) {
            return ele.type == 'folder';
          });
          folder.generate(iconData).forEach(function (element) {
            _this3.appendChild(element);
          });

          var iconData = JSON.parse(window.localStorage.getItem('user')).icons;
          iconData = iconData.filter(function (ele) {
            return ele.type == 'icon';
          });
          icons.generate(iconData).forEach(function (element) {
            _this3.appendChild(element);
            console.log(element);
          });
        });

        var addFolder = document.getElementsByClassName('footer__button--first')[0];
        var el = this;
        addFolder.addEventListener('click', function () {
          var icon = {
            url: '',
            name: 'Folder',
            user_mail: JSON.parse(window.localStorage.getItem('user')).mail,
            image_url: '',
            type: 'folder',
            child: [],
            position: [0, 0]
          };
          requestHandle.post('http://127.0.0.1:5000/user/append_icon', icon).then(function (res) {
            var user = JSON.parse(window.localStorage.getItem('user'));
            user.icons.push(icon);
            window.localStorage.setItem('user', JSON.stringify(user));
          });
          var fld = folder.generate([icon])[0];
          el.appendChild(fld);
        });

        window.addEventListener('beforeunload', function () {
          var iconList = JSON.parse(window.localStorage.getItem('user')).icons;
          console.log(iconList);
          iconList = iconList.map(function (ele) {
            ele.data.position = [ele.rect.left, ele.rect.top];
          });
          var user = JSON.parse(window.localStorage.getItem('user'));
          var data = {
            icons: JSON.stringify(iconList),
            mail: user.mail
          };
          requestHandle.post('http://127.0.0.1:5000/user/update_icons', data).then(function (res) {
            console.log('exiting');
          });
        });

        var deleteBt = document.getElementsByClassName('delete__button')[0];
        deleteBt.setAttribute('dragover', function (ev) {
          ev.preventDefault();
          console.log('chmar');
        });
        deleteBt.setAttribute('drop', function (ev) {
          ev.preventDefault();
          console.log('DROP');
        });
      });
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\icons\\icons-container-template.js", "/components\\desktop\\icons");
  }, { "../../building_elements/handle-request": 2, "../../building_elements/template": 4, "./folder_generator/folder-generator": 7, "./icon_generator/icon-generator": 9, "9FoBSB": 27, "buffer": 25 }], 12: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      module.exports = "<div class=\"widget__container\">\n<header class=\"widget__header\">\n    <div class=\"header__button\"></div>\n    <div class=\"header__name\">John Doe</div>\n</header>\n<div class=\"widget__clock\">\n    <div class=\"hours-container\">\n        <div class=\"hours\"></div>\n    </div>\n    <div class=\"minutes-container\">\n        <div class=\"minutes\"></div>\n    </div>\n</div>\n<div class=\"widget__clock-digital\">\n    <div class=\"clock-digital__hour\"></div>\n    <div class=\"clock-digital__date\">January 2nd</div>\n</div>\n<div class=\"widget__calendar\">\n    <div class=\"calendar__month\"> \n        <ul>\n            <li>January</li>\n        </ul>\n    </div>  \n    <ul class=\"calendar__days\"> \n        <li>1</li>\n        <li><div class=\"active\">2</div></li>\n        <li>3</li>\n        <li>4</li>\n        <li>5</li>\n        <li>6</li>\n        <li>7</li>\n        <li>8</li>\n        <li>9</li>\n        <li>10</li>\n        <li>11</li>\n        <li>12</li>\n        <li>13</li>\n        <li>14</li>\n        <li>15</li>\n        <li>16</li>\n        <li>17</li>\n        <li>18</li>\n        <li>19</li>\n        <li>20</li>\n        <li>21</li>\n        <li>22</li>\n        <li>23</li>\n        <li>24</li>\n        <li>25</li>\n        <li>26</li>\n        <li>27</li>\n        <li>28</li>\n        <li>29</li>\n        <li>30</li>\n        <li>31</li>\n    </ul>\n    <div class=\"calendar__weekdays\"> \n        <ul>\n            <li>Friday</li>\n        </ul>\n    </div>  \n</div>\n<footer class=\"widget__footer\">\n    <div class=\"delete__button\"></div>\n    <div class=\"header__button footer__button footer__button--first\"></div>\n    <div class=\"header__button footer__button footer__button--second\"></div>\n</footer>\n</div>";
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\toolbar\\toolbar-markup.js", "/components\\desktop\\toolbar");
  }, { "9FoBSB": 27, "buffer": 25 }], 13: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../../building_elements/template');
      var markup = require('./toolbar-markup');

      function digitalClock() {
        var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes();
        document.getElementsByClassName('clock-digital__hour')[0].innerHTML = harold(time.getHours()) + ":" + harold(time.getMinutes());
        function harold(standIn) {
          if (standIn < 10) {
            standIn = '0' + standIn;
          }
          return standIn;
        }
      }

      function analogClock() {
        var date = new Date();
        var degreeMin = 6 * date.getMinutes();
        var degreeHr = 0;
        if (date.getHours > 12) {
          degreeHr = 30 * (date.getHours() - 12);
        } else {
          degreeHr = 30 * date.getHours();
        }
        console.log(degreeHr);
        document.getElementsByClassName('minutes-container')[0].setAttribute('style', "transform: rotate(" + degreeMin + "deg);");
        document.getElementsByClassName('hours-container')[0].setAttribute('style', "transform: rotate(" + degreeHr + "deg);");
      }

      module.exports = new Template({ markup: markup }, function () {
        setInterval(digitalClock, 1000);
        analogClock();
        var deleteButton = this.element.getElementsByClassName('delete__button');
      });
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\toolbar\\toolbar-template.js", "/components\\desktop\\toolbar");
  }, { "../../building_elements/template": 4, "./toolbar-markup": 12, "9FoBSB": 27, "buffer": 25 }], 14: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../../building_elements/template');
      var widgetMng = require('./widget-manager');
      var widget = require('./widget-generator');

      module.exports = function (data) {
        return new Template({
          markup: "<div>\n            Name: {{name}}\n            </br>\n            Author: {{author}}\n            </bar>\n            <button Id='widget__get__{{name}}'>Download</button></div>\n            ",
          data: data
        }, function () {
          var _this4 = this;

          document.getElementById("widget__get__" + this.data.name).addEventListener('click', function () {
            widgetMng.getWidget(_this4.data.name).then(function (resp) {
              _this4.appendChild(widget(resp));
            });
          });
        });
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\widgets\\preview-widget-template-generator.js", "/components\\desktop\\widgets");
  }, { "../../building_elements/template": 4, "./widget-generator": 15, "./widget-manager": 16, "9FoBSB": 27, "buffer": 25 }], 15: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../../building_elements/template');

      module.exports = function (data) {
        console.log(data);
        return new Template({
          markup: "\n        <iframe id='widget__{{name}}' frameborder=\"0\" scrolling=\"no\"\">\n        </iframe>\n        <style>\n            height: inherit;\n            width: inherit;\n        </style>\n        ",
          data: data
        }, function () {
          var element = document.createElement('wd-widget');
          element.innerHTML = this.data.code;
          console.log(document.getElementById("widget__" + this.data.name).contentWindow.eval(element.getElementsByTagName('script')[0].innerHTML));
          document.getElementById("widget__" + this.data.name).setAttribute('srcdoc', element.getElementsByClassName('widg')[0].innerHTML);
        });
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\widgets\\widget-generator.js", "/components\\desktop\\widgets");
  }, { "../../building_elements/template": 4, "9FoBSB": 27, "buffer": 25 }], 16: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      "use strict";

      var request = require('browser-request');
      var requestHandle = require('../../building_elements/handle-request');

      module.exports = {
        getWidget: function getWidget(name) {
          return requestHandle.get("http://127.0.0.1:5000/widget/get?name=" + name);
        },

        getWidgetList: function getWidgetList() {
          return requestHandle.get('http://127.0.0.1:5000/widget/get/all');
        }
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\widgets\\widget-manager.js", "/components\\desktop\\widgets");
  }, { "../../building_elements/handle-request": 2, "9FoBSB": 27, "browser-request": 24, "buffer": 25 }], 17: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../../building_elements/template');
      var widgetMng = require('./widget-manager');
      var widgetPreview = require('./preview-widget-template-generator');

      module.exports = new Template({
        markup: "<wd-widgets>\n            <button id='w-get'>Get me the widgets</button>\n        </wd-widgets>\n\n        " }, function () {
        var _this5 = this;

        document.getElementById('w-get').addEventListener('click', function () {
          widgetMng.getWidgetList().then(function (resp) {
            resp.forEach(function (element) {
              _this5.appendChild(widgetPreview(element));
            });
          });
        });
      });
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\desktop\\widgets\\widgets-template.js", "/components\\desktop\\widgets");
  }, { "../../building_elements/template": 4, "./preview-widget-template-generator": 14, "./widget-manager": 16, "9FoBSB": 27, "buffer": 25 }], 18: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var loginTemplate = require('./login-template');

      module.exports = {
        isLogedIn: function isLogedIn() {
          return window.localStorage.getItem('user') == null;
        },

        renderLoginScreen: function renderLoginScreen() {
          loginTemplate.clearAndRender();
        }
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\login\\login-controller.js", "/components\\login");
  }, { "./login-template": 19, "9FoBSB": 27, "buffer": 25 }], 19: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var Template = require('../building_elements/template');
      var requestHandle = require('../building_elements/handle-request');
      var animate = require('../building_elements/animations');
      var desktop = require('../desktop/desktop-template');

      var markup = "\n    <div class=\"background background--blur\"></div>\n    <div class=\"login__shade\"></div>\n    <div class=\"login__content\">\n        <div class=\"login__container\">\n            <input class=\"input\" type=\"text\" placeholder=\"E-mail\"></input>\n            <input class=\"input\" type=\"password\" placeholder=\"Password\"></input>\n            <div class=\"login__accept\">log in</div>\n            <div class=\"login__signin\">Don't have an account? SIGN UP!</div>\n        </div>\n    </div>\n    ";

      var script = function script() {
        var _this6 = this;

        var login_button = this.element.getElementsByClassName('login__accept')[0];

        var _document$getElements = document.getElementsByClassName('input'),
            _document$getElements2 = _slicedToArray(_document$getElements, 2),
            mail = _document$getElements2[0],
            password = _document$getElements2[1];

        login_button.addEventListener('click', function () {
          var url = "http://127.0.0.1:5000/user/get?mail=" + mail.value + "&password=" + password.value;
          requestHandle.get(url).then(function (res) {
            localStorage.setItem('user', JSON.stringify(res));
            animate.fade_out(_this6, 0.4, function () {
              desktop.clearAndRender();
            });
          }).catch(function (err) {
            console.log(err);
          });
        });
      };

      module.exports = new Template({
        markup: markup,
        data: { podatak: 20 }
      }, script);
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\login\\login-template.js", "/components\\login");
  }, { "../building_elements/animations": 1, "../building_elements/handle-request": 2, "../building_elements/template": 4, "../desktop/desktop-template": 6, "9FoBSB": 27, "buffer": 25 }], 20: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      module.exports = "    <div class=\"background\"></div>\n<div class=\"widget__container\">\n    <header class=\"widget__header\">\n        <div class=\"header__button\"></div>\n        <div class=\"header__name\">John Doe</div>\n    </header>\n    <div class=\"widget__clock\">\n        <div class=\"hours-container\">\n            <div class=\"hours\"></div>\n        </div>\n        <div class=\"minutes-container\">\n            <div class=\"minutes\"></div>\n        </div>\n    </div>\n    <div class=\"widget__clock-digital\">\n        <div class=\"clock-digital__hour\"></div>\n        <div class=\"clock-digital__date\">January 2nd</div>\n    </div>\n    <div class=\"widget__calendar\">\n        <div class=\"calendar__month\"> \n            <ul>\n                <li>January</li>\n            </ul>\n        </div>  \n        <ul class=\"calendar__days\"> \n            <li>1</li>\n            <li><div class=\"active\">2</div></li>\n            <li>3</li>\n            <li>4</li>\n            <li>5</li>\n            <li>6</li>\n            <li>7</li>\n            <li>8</li>\n            <li>9</li>\n            <li>10</li>\n            <li>11</li>\n            <li>12</li>\n            <li>13</li>\n            <li>14</li>\n            <li>15</li>\n            <li>16</li>\n            <li>17</li>\n            <li>18</li>\n            <li>19</li>\n            <li>20</li>\n            <li>21</li>\n            <li>22</li>\n            <li>23</li>\n            <li>24</li>\n            <li>25</li>\n            <li>26</li>\n            <li>27</li>\n            <li>28</li>\n            <li>29</li>\n            <li>30</li>\n            <li>31</li>\n        </ul>\n        <div class=\"calendar__weekdays\"> \n            <ul>\n                <li>Friday</li>\n            </ul>\n        </div>  \n    </div>\n    <footer class=\"widget__footer\">\n        <div class=\"header__button back__button\"></div>\n    </footer>\n\n\n</div>\n";
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\store\\store-markup.js", "/components\\store");
  }, { "9FoBSB": 27, "buffer": 25 }], 21: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var markup = require('./store-markup');
      var Template = require('../building_elements/template');
      var desktop = require('../desktop/desktop-template');
      var animate = require('../building_elements/animations');

      function analogClock() {
        var date = new Date();
        var degreeMin = 6 * date.getMinutes();
        var degreeHr = 0;
        if (date.getHours > 12) {
          degreeHr = 30 * (date.getHours() - 12);
        } else {
          degreeHr = 30 * date.getHours();
        }
        console.log(degreeHr);
        document.getElementsByClassName('minutes-container')[0].setAttribute('style', "transform: rotate(" + degreeMin + "deg);");
        document.getElementsByClassName('hours-container')[0].setAttribute('style', "transform: rotate(" + degreeHr + "deg);");
      }

      module.exports = new Template({ markup: markup }, function () {
        console.log('store');
        analogClock();
      });
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/components\\store\\store-template.js", "/components\\store");
  }, { "../building_elements/animations": 1, "../building_elements/template": 4, "../desktop/desktop-template": 6, "./store-markup": 20, "9FoBSB": 27, "buffer": 25 }], 22: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      "use strict";

      var login = require('./components/login/login-controller');
      var desktop = require('./components/desktop/desktop-template');
      var animate = require('./components/building_elements/animations');

      window.onload = function () {
        if (login.isLogedIn()) {
          login.renderLoginScreen();
        } else {
          desktop.clearAndRender();
        }
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_599df43d.js", "/");
  }, { "./components/building_elements/animations": 1, "./components/desktop/desktop-template": 6, "./components/login/login-controller": 18, "9FoBSB": 27, "buffer": 25 }], 23: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

      ;(function (exports) {
        'use strict';

        var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

        var PLUS = '+'.charCodeAt(0);
        var SLASH = '/'.charCodeAt(0);
        var NUMBER = '0'.charCodeAt(0);
        var LOWER = 'a'.charCodeAt(0);
        var UPPER = 'A'.charCodeAt(0);
        var PLUS_URL_SAFE = '-'.charCodeAt(0);
        var SLASH_URL_SAFE = '_'.charCodeAt(0);

        function decode(elt) {
          var code = elt.charCodeAt(0);
          if (code === PLUS || code === PLUS_URL_SAFE) return 62; // '+'
          if (code === SLASH || code === SLASH_URL_SAFE) return 63; // '/'
          if (code < NUMBER) return -1; //no match
          if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
          if (code < UPPER + 26) return code - UPPER;
          if (code < LOWER + 26) return code - LOWER + 26;
        }

        function b64ToByteArray(b64) {
          var i, j, l, tmp, placeHolders, arr;

          if (b64.length % 4 > 0) {
            throw new Error('Invalid string. Length must be a multiple of 4');
          }

          // the number of equal signs (place holders)
          // if there are two placeholders, than the two characters before it
          // represent one byte
          // if there is only one, then the three characters before it represent 2 bytes
          // this is just a cheap hack to not do indexOf twice
          var len = b64.length;
          placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;

          // base64 is 4/3 + up to two characters of the original data
          arr = new Arr(b64.length * 3 / 4 - placeHolders);

          // if there are placeholders, only get up to the last complete 4 chars
          l = placeHolders > 0 ? b64.length - 4 : b64.length;

          var L = 0;

          function push(v) {
            arr[L++] = v;
          }

          for (i = 0, j = 0; i < l; i += 4, j += 3) {
            tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
            push((tmp & 0xFF0000) >> 16);
            push((tmp & 0xFF00) >> 8);
            push(tmp & 0xFF);
          }

          if (placeHolders === 2) {
            tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
            push(tmp & 0xFF);
          } else if (placeHolders === 1) {
            tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
            push(tmp >> 8 & 0xFF);
            push(tmp & 0xFF);
          }

          return arr;
        }

        function uint8ToBase64(uint8) {
          var i,
              extraBytes = uint8.length % 3,
              // if we have 1 byte left, pad 2 bytes
          output = "",
              temp,
              length;

          function encode(num) {
            return lookup.charAt(num);
          }

          function tripletToBase64(num) {
            return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
          }

          // go through the array every three bytes, we'll deal with trailing stuff later
          for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
            temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
            output += tripletToBase64(temp);
          }

          // pad the end with zeros, but make sure to not forget the extra bytes
          switch (extraBytes) {
            case 1:
              temp = uint8[uint8.length - 1];
              output += encode(temp >> 2);
              output += encode(temp << 4 & 0x3F);
              output += '==';
              break;
            case 2:
              temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
              output += encode(temp >> 10);
              output += encode(temp >> 4 & 0x3F);
              output += encode(temp << 2 & 0x3F);
              output += '=';
              break;
          }

          return output;
        }

        exports.toByteArray = b64ToByteArray;
        exports.fromByteArray = uint8ToBase64;
      })(typeof exports === 'undefined' ? this.base64js = {} : exports);
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/..\\..\\..\\node_modules\\base64-js\\lib\\b64.js", "/..\\..\\..\\node_modules\\base64-js\\lib");
  }, { "9FoBSB": 27, "buffer": 25 }], 24: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      // Browser Request
      //
      // Licensed under the Apache License, Version 2.0 (the "License");
      // you may not use this file except in compliance with the License.
      // You may obtain a copy of the License at
      //
      //     http://www.apache.org/licenses/LICENSE-2.0
      //
      // Unless required by applicable law or agreed to in writing, software
      // distributed under the License is distributed on an "AS IS" BASIS,
      // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      // See the License for the specific language governing permissions and
      // limitations under the License.

      // UMD HEADER START 
      (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
          // AMD. Register as an anonymous module.
          define([], factory);
        } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
          // Node. Does not work with strict CommonJS, but
          // only CommonJS-like enviroments that support module.exports,
          // like Node.
          module.exports = factory();
        } else {
          // Browser globals (root is window)
          root.returnExports = factory();
        }
      })(this, function () {
        // UMD HEADER END

        var XHR = XMLHttpRequest;
        if (!XHR) throw new Error('missing XMLHttpRequest');
        request.log = {
          'trace': noop, 'debug': noop, 'info': noop, 'warn': noop, 'error': noop
        };

        var DEFAULT_TIMEOUT = 3 * 60 * 1000; // 3 minutes

        //
        // request
        //

        function request(options, callback) {
          // The entry-point to the API: prep the options object and pass the real work to run_xhr.
          if (typeof callback !== 'function') throw new Error('Bad callback given: ' + callback);

          if (!options) throw new Error('No options given');

          var options_onResponse = options.onResponse; // Save this for later.

          if (typeof options === 'string') options = { 'uri': options };else options = JSON.parse(JSON.stringify(options)); // Use a duplicate for mutating.

          options.onResponse = options_onResponse; // And put it back.

          if (options.verbose) request.log = getLogger();

          if (options.url) {
            options.uri = options.url;
            delete options.url;
          }

          if (!options.uri && options.uri !== "") throw new Error("options.uri is a required argument");

          if (typeof options.uri != "string") throw new Error("options.uri must be a string");

          var unsupported_options = ['proxy', '_redirectsFollowed', 'maxRedirects', 'followRedirect'];
          for (var i = 0; i < unsupported_options.length; i++) {
            if (options[unsupported_options[i]]) throw new Error("options." + unsupported_options[i] + " is not supported");
          }options.callback = callback;
          options.method = options.method || 'GET';
          options.headers = options.headers || {};
          options.body = options.body || null;
          options.timeout = options.timeout || request.DEFAULT_TIMEOUT;

          if (options.headers.host) throw new Error("Options.headers.host is not supported");

          if (options.json) {
            options.headers.accept = options.headers.accept || 'application/json';
            if (options.method !== 'GET') options.headers['content-type'] = 'application/json';

            if (typeof options.json !== 'boolean') options.body = JSON.stringify(options.json);else if (typeof options.body !== 'string') options.body = JSON.stringify(options.body);
          }

          //BEGIN QS Hack
          var serialize = function serialize(obj) {
            var str = [];
            for (var p in obj) {
              if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              }
            }return str.join("&");
          };

          if (options.qs) {
            var qs = typeof options.qs == 'string' ? options.qs : serialize(options.qs);
            if (options.uri.indexOf('?') !== -1) {
              //no get params
              options.uri = options.uri + '&' + qs;
            } else {
              //existing get params
              options.uri = options.uri + '?' + qs;
            }
          }
          //END QS Hack

          //BEGIN FORM Hack
          var multipart = function multipart(obj) {
            //todo: support file type (useful?)
            var result = {};
            result.boundry = '-------------------------------' + Math.floor(Math.random() * 1000000000);
            var lines = [];
            for (var p in obj) {
              if (obj.hasOwnProperty(p)) {
                lines.push('--' + result.boundry + "\n" + 'Content-Disposition: form-data; name="' + p + '"' + "\n" + "\n" + obj[p] + "\n");
              }
            }
            lines.push('--' + result.boundry + '--');
            result.body = lines.join('');
            result.length = result.body.length;
            result.type = 'multipart/form-data; boundary=' + result.boundry;
            return result;
          };

          if (options.form) {
            if (typeof options.form == 'string') throw 'form name unsupported';
            if (options.method === 'POST') {
              var encoding = (options.encoding || 'application/x-www-form-urlencoded').toLowerCase();
              options.headers['content-type'] = encoding;
              switch (encoding) {
                case 'application/x-www-form-urlencoded':
                  options.body = serialize(options.form).replace(/%20/g, "+");
                  break;
                case 'multipart/form-data':
                  var multi = multipart(options.form);
                  //options.headers['content-length'] = multi.length;
                  options.body = multi.body;
                  options.headers['content-type'] = multi.type;
                  break;
                default:
                  throw new Error('unsupported encoding:' + encoding);
              }
            }
          }
          //END FORM Hack

          // If onResponse is boolean true, call back immediately when the response is known,
          // not when the full request is complete.
          options.onResponse = options.onResponse || noop;
          if (options.onResponse === true) {
            options.onResponse = callback;
            options.callback = noop;
          }

          // XXX Browsers do not like this.
          //if(options.body)
          //  options.headers['content-length'] = options.body.length;

          // HTTP basic authentication
          if (!options.headers.authorization && options.auth) options.headers.authorization = 'Basic ' + b64_enc(options.auth.username + ':' + options.auth.password);

          return run_xhr(options);
        }

        var req_seq = 0;
        function run_xhr(options) {
          var xhr = new XHR(),
              timed_out = false,
              is_cors = is_crossDomain(options.uri),
              supports_cors = 'withCredentials' in xhr;

          req_seq += 1;
          xhr.seq_id = req_seq;
          xhr.id = req_seq + ': ' + options.method + ' ' + options.uri;
          xhr._id = xhr.id; // I know I will type "_id" from habit all the time.

          if (is_cors && !supports_cors) {
            var cors_err = new Error('Browser does not support cross-origin request: ' + options.uri);
            cors_err.cors = 'unsupported';
            return options.callback(cors_err, xhr);
          }

          xhr.timeoutTimer = setTimeout(too_late, options.timeout);
          function too_late() {
            timed_out = true;
            var er = new Error('ETIMEDOUT');
            er.code = 'ETIMEDOUT';
            er.duration = options.timeout;

            request.log.error('Timeout', { 'id': xhr._id, 'milliseconds': options.timeout });
            return options.callback(er, xhr);
          }

          // Some states can be skipped over, so remember what is still incomplete.
          var did = { 'response': false, 'loading': false, 'end': false };

          xhr.onreadystatechange = on_state_change;
          xhr.open(options.method, options.uri, true); // asynchronous
          if (is_cors) xhr.withCredentials = !!options.withCredentials;
          xhr.send(options.body);
          return xhr;

          function on_state_change(event) {
            if (timed_out) return request.log.debug('Ignoring timed out state change', { 'state': xhr.readyState, 'id': xhr.id });

            request.log.debug('State change', { 'state': xhr.readyState, 'id': xhr.id, 'timed_out': timed_out });

            if (xhr.readyState === XHR.OPENED) {
              request.log.debug('Request started', { 'id': xhr.id });
              for (var key in options.headers) {
                xhr.setRequestHeader(key, options.headers[key]);
              }
            } else if (xhr.readyState === XHR.HEADERS_RECEIVED) on_response();else if (xhr.readyState === XHR.LOADING) {
              on_response();
              on_loading();
            } else if (xhr.readyState === XHR.DONE) {
              on_response();
              on_loading();
              on_end();
            }
          }

          function on_response() {
            if (did.response) return;

            did.response = true;
            request.log.debug('Got response', { 'id': xhr.id, 'status': xhr.status });
            clearTimeout(xhr.timeoutTimer);
            xhr.statusCode = xhr.status; // Node request compatibility

            // Detect failed CORS requests.
            if (is_cors && xhr.statusCode == 0) {
              var cors_err = new Error('CORS request rejected: ' + options.uri);
              cors_err.cors = 'rejected';

              // Do not process this request further.
              did.loading = true;
              did.end = true;

              return options.callback(cors_err, xhr);
            }

            options.onResponse(null, xhr);
          }

          function on_loading() {
            if (did.loading) return;

            did.loading = true;
            request.log.debug('Response body loading', { 'id': xhr.id });
            // TODO: Maybe simulate "data" events by watching xhr.responseText
          }

          function on_end() {
            if (did.end) return;

            did.end = true;
            request.log.debug('Request done', { 'id': xhr.id });

            xhr.body = xhr.responseText;
            if (options.json) {
              try {
                xhr.body = JSON.parse(xhr.responseText);
              } catch (er) {
                return options.callback(er, xhr);
              }
            }

            options.callback(null, xhr, xhr.body);
          }
        } // request

        request.withCredentials = false;
        request.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;

        //
        // defaults
        //

        request.defaults = function (options, requester) {
          var def = function def(method) {
            var d = function d(params, callback) {
              if (typeof params === 'string') params = { 'uri': params };else {
                params = JSON.parse(JSON.stringify(params));
              }
              for (var i in options) {
                if (params[i] === undefined) params[i] = options[i];
              }
              return method(params, callback);
            };
            return d;
          };
          var de = def(request);
          de.get = def(request.get);
          de.post = def(request.post);
          de.put = def(request.put);
          de.head = def(request.head);
          return de;
        };

        //
        // HTTP method shortcuts
        //

        var shortcuts = ['get', 'put', 'post', 'head'];
        shortcuts.forEach(function (shortcut) {
          var method = shortcut.toUpperCase();
          var func = shortcut.toLowerCase();

          request[func] = function (opts) {
            if (typeof opts === 'string') opts = { 'method': method, 'uri': opts };else {
              opts = JSON.parse(JSON.stringify(opts));
              opts.method = method;
            }

            var args = [opts].concat(Array.prototype.slice.apply(arguments, [1]));
            return request.apply(this, args);
          };
        });

        //
        // CouchDB shortcut
        //

        request.couch = function (options, callback) {
          if (typeof options === 'string') options = { 'uri': options

            // Just use the request API to do JSON.
          };options.json = true;
          if (options.body) options.json = options.body;
          delete options.body;

          callback = callback || noop;

          var xhr = request(options, couch_handler);
          return xhr;

          function couch_handler(er, resp, body) {
            if (er) return callback(er, resp, body);

            if ((resp.statusCode < 200 || resp.statusCode > 299) && body.error) {
              // The body is a Couch JSON object indicating the error.
              er = new Error('CouchDB error: ' + (body.error.reason || body.error.error));
              for (var key in body) {
                er[key] = body[key];
              }return callback(er, resp, body);
            }

            return callback(er, resp, body);
          }
        };

        //
        // Utility
        //

        function noop() {}

        function getLogger() {
          var logger = {},
              levels = ['trace', 'debug', 'info', 'warn', 'error'],
              level,
              i;

          for (i = 0; i < levels.length; i++) {
            level = levels[i];

            logger[level] = noop;
            if (typeof console !== 'undefined' && console && console[level]) logger[level] = formatted(console, level);
          }

          return logger;
        }

        function formatted(obj, method) {
          return formatted_logger;

          function formatted_logger(str, context) {
            if ((typeof context === "undefined" ? "undefined" : _typeof(context)) === 'object') str += ' ' + JSON.stringify(context);

            return obj[method].call(obj, str);
          }
        }

        // Return whether a URL is a cross-domain request.
        function is_crossDomain(url) {
          var rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;

          // jQuery #8138, IE may throw an exception when accessing
          // a field from window.location if document.domain has been set
          var ajaxLocation;
          try {
            ajaxLocation = location.href;
          } catch (e) {
            // Use the href attribute of an A element since IE will modify it given document.location
            ajaxLocation = document.createElement("a");
            ajaxLocation.href = "";
            ajaxLocation = ajaxLocation.href;
          }

          var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [],
              parts = rurl.exec(url.toLowerCase());

          var result = !!(parts && (parts[1] != ajaxLocParts[1] || parts[2] != ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));

          //console.debug('is_crossDomain('+url+') -> ' + result)
          return result;
        }

        // MIT License from http://phpjs.org/functions/base64_encode:358
        function b64_enc(data) {
          // Encodes string using MIME base64 algorithm
          var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          var o1,
              o2,
              o3,
              h1,
              h2,
              h3,
              h4,
              bits,
              i = 0,
              ac = 0,
              enc = "",
              tmp_arr = [];

          if (!data) {
            return data;
          }

          // assume utf8 data
          // data = this.utf8_encode(data+'');

          do {
            // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
          } while (i < data.length);

          enc = tmp_arr.join('');

          switch (data.length % 3) {
            case 1:
              enc = enc.slice(0, -2) + '==';
              break;
            case 2:
              enc = enc.slice(0, -1) + '=';
              break;
          }

          return enc;
        }
        return request;
        //UMD FOOTER START
      });
      //UMD FOOTER END
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/..\\..\\..\\node_modules\\browser-request\\index.js", "/..\\..\\..\\node_modules\\browser-request");
  }, { "9FoBSB": 27, "buffer": 25 }], 25: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */

      var base64 = require('base64-js');
      var ieee754 = require('ieee754');

      exports.Buffer = Buffer;
      exports.SlowBuffer = Buffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.poolSize = 8192;

      /**
       * If `Buffer._useTypedArrays`:
       *   === true    Use Uint8Array implementation (fastest)
       *   === false   Use Object implementation (compatible down to IE6)
       */
      Buffer._useTypedArrays = function () {
        // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
        // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
        // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
        // because we need to be able to add all the node Buffer API methods. This is an issue
        // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
        try {
          var buf = new ArrayBuffer(0);
          var arr = new Uint8Array(buf);
          arr.foo = function () {
            return 42;
          };
          return 42 === arr.foo() && typeof arr.subarray === 'function'; // Chrome 9-10 lack `subarray`
        } catch (e) {
          return false;
        }
      }();

      /**
       * Class: Buffer
       * =============
       *
       * The Buffer constructor returns instances of `Uint8Array` that are augmented
       * with function properties for all the node `Buffer` API functions. We use
       * `Uint8Array` so that square bracket notation works as expected -- it returns
       * a single octet.
       *
       * By augmenting the instances, we can avoid modifying the `Uint8Array`
       * prototype.
       */
      function Buffer(subject, encoding, noZero) {
        if (!(this instanceof Buffer)) return new Buffer(subject, encoding, noZero);

        var type = typeof subject === "undefined" ? "undefined" : _typeof(subject);

        // Workaround: node's base64 implementation allows for non-padded strings
        // while base64-js does not.
        if (encoding === 'base64' && type === 'string') {
          subject = stringtrim(subject);
          while (subject.length % 4 !== 0) {
            subject = subject + '=';
          }
        }

        // Find the length
        var length;
        if (type === 'number') length = coerce(subject);else if (type === 'string') length = Buffer.byteLength(subject, encoding);else if (type === 'object') length = coerce(subject.length); // assume that object is array-like
        else throw new Error('First argument needs to be a number, array or string.');

        var buf;
        if (Buffer._useTypedArrays) {
          // Preferred: Return an augmented `Uint8Array` instance for best performance
          buf = Buffer._augment(new Uint8Array(length));
        } else {
          // Fallback: Return THIS instance of Buffer (created by `new`)
          buf = this;
          buf.length = length;
          buf._isBuffer = true;
        }

        var i;
        if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
          // Speed optimization -- use set if we're copying from a typed array
          buf._set(subject);
        } else if (isArrayish(subject)) {
          // Treat array-ish objects as a byte array
          for (i = 0; i < length; i++) {
            if (Buffer.isBuffer(subject)) buf[i] = subject.readUInt8(i);else buf[i] = subject[i];
          }
        } else if (type === 'string') {
          buf.write(subject, 0, encoding);
        } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
          for (i = 0; i < length; i++) {
            buf[i] = 0;
          }
        }

        return buf;
      }

      // STATIC METHODS
      // ==============

      Buffer.isEncoding = function (encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'binary':
          case 'base64':
          case 'raw':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;
          default:
            return false;
        }
      };

      Buffer.isBuffer = function (b) {
        return !!(b !== null && b !== undefined && b._isBuffer);
      };

      Buffer.byteLength = function (str, encoding) {
        var ret;
        str = str + '';
        switch (encoding || 'utf8') {
          case 'hex':
            ret = str.length / 2;
            break;
          case 'utf8':
          case 'utf-8':
            ret = utf8ToBytes(str).length;
            break;
          case 'ascii':
          case 'binary':
          case 'raw':
            ret = str.length;
            break;
          case 'base64':
            ret = base64ToBytes(str).length;
            break;
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            ret = str.length * 2;
            break;
          default:
            throw new Error('Unknown encoding');
        }
        return ret;
      };

      Buffer.concat = function (list, totalLength) {
        assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' + 'list should be an Array.');

        if (list.length === 0) {
          return new Buffer(0);
        } else if (list.length === 1) {
          return list[0];
        }

        var i;
        if (typeof totalLength !== 'number') {
          totalLength = 0;
          for (i = 0; i < list.length; i++) {
            totalLength += list[i].length;
          }
        }

        var buf = new Buffer(totalLength);
        var pos = 0;
        for (i = 0; i < list.length; i++) {
          var item = list[i];
          item.copy(buf, pos);
          pos += item.length;
        }
        return buf;
      };

      // BUFFER INSTANCE METHODS
      // =======================

      function _hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }

        // must be an even number of digits
        var strLen = string.length;
        assert(strLen % 2 === 0, 'Invalid hex string');

        if (length > strLen / 2) {
          length = strLen / 2;
        }
        for (var i = 0; i < length; i++) {
          var byte = parseInt(string.substr(i * 2, 2), 16);
          assert(!isNaN(byte), 'Invalid hex string');
          buf[offset + i] = byte;
        }
        Buffer._charsWritten = i * 2;
        return i;
      }

      function _utf8Write(buf, string, offset, length) {
        var charsWritten = Buffer._charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length);
        return charsWritten;
      }

      function _asciiWrite(buf, string, offset, length) {
        var charsWritten = Buffer._charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length);
        return charsWritten;
      }

      function _binaryWrite(buf, string, offset, length) {
        return _asciiWrite(buf, string, offset, length);
      }

      function _base64Write(buf, string, offset, length) {
        var charsWritten = Buffer._charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length);
        return charsWritten;
      }

      function _utf16leWrite(buf, string, offset, length) {
        var charsWritten = Buffer._charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length);
        return charsWritten;
      }

      Buffer.prototype.write = function (string, offset, length, encoding) {
        // Support both (string, offset, length, encoding)
        // and the legacy (string, encoding, offset, length)
        if (isFinite(offset)) {
          if (!isFinite(length)) {
            encoding = length;
            length = undefined;
          }
        } else {
          // legacy
          var swap = encoding;
          encoding = offset;
          offset = length;
          length = swap;
        }

        offset = Number(offset) || 0;
        var remaining = this.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        encoding = String(encoding || 'utf8').toLowerCase();

        var ret;
        switch (encoding) {
          case 'hex':
            ret = _hexWrite(this, string, offset, length);
            break;
          case 'utf8':
          case 'utf-8':
            ret = _utf8Write(this, string, offset, length);
            break;
          case 'ascii':
            ret = _asciiWrite(this, string, offset, length);
            break;
          case 'binary':
            ret = _binaryWrite(this, string, offset, length);
            break;
          case 'base64':
            ret = _base64Write(this, string, offset, length);
            break;
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            ret = _utf16leWrite(this, string, offset, length);
            break;
          default:
            throw new Error('Unknown encoding');
        }
        return ret;
      };

      Buffer.prototype.toString = function (encoding, start, end) {
        var self = this;

        encoding = String(encoding || 'utf8').toLowerCase();
        start = Number(start) || 0;
        end = end !== undefined ? Number(end) : end = self.length;

        // Fastpath empty strings
        if (end === start) return '';

        var ret;
        switch (encoding) {
          case 'hex':
            ret = _hexSlice(self, start, end);
            break;
          case 'utf8':
          case 'utf-8':
            ret = _utf8Slice(self, start, end);
            break;
          case 'ascii':
            ret = _asciiSlice(self, start, end);
            break;
          case 'binary':
            ret = _binarySlice(self, start, end);
            break;
          case 'base64':
            ret = _base64Slice(self, start, end);
            break;
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            ret = _utf16leSlice(self, start, end);
            break;
          default:
            throw new Error('Unknown encoding');
        }
        return ret;
      };

      Buffer.prototype.toJSON = function () {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };

      // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
      Buffer.prototype.copy = function (target, target_start, start, end) {
        var source = this;

        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (!target_start) target_start = 0;

        // Copy 0 bytes; we're done
        if (end === start) return;
        if (target.length === 0 || source.length === 0) return;

        // Fatal error conditions
        assert(end >= start, 'sourceEnd < sourceStart');
        assert(target_start >= 0 && target_start < target.length, 'targetStart out of bounds');
        assert(start >= 0 && start < source.length, 'sourceStart out of bounds');
        assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds');

        // Are we oob?
        if (end > this.length) end = this.length;
        if (target.length - target_start < end - start) end = target.length - target_start + start;

        var len = end - start;

        if (len < 100 || !Buffer._useTypedArrays) {
          for (var i = 0; i < len; i++) {
            target[i + target_start] = this[i + start];
          }
        } else {
          target._set(this.subarray(start, start + len), target_start);
        }
      };

      function _base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }

      function _utf8Slice(buf, start, end) {
        var res = '';
        var tmp = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; i++) {
          if (buf[i] <= 0x7F) {
            res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
            tmp = '';
          } else {
            tmp += '%' + buf[i].toString(16);
          }
        }

        return res + decodeUtf8Char(tmp);
      }

      function _asciiSlice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; i++) {
          ret += String.fromCharCode(buf[i]);
        }return ret;
      }

      function _binarySlice(buf, start, end) {
        return _asciiSlice(buf, start, end);
      }

      function _hexSlice(buf, start, end) {
        var len = buf.length;

        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;

        var out = '';
        for (var i = start; i < end; i++) {
          out += toHex(buf[i]);
        }
        return out;
      }

      function _utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = '';
        for (var i = 0; i < bytes.length; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }

      Buffer.prototype.slice = function (start, end) {
        var len = this.length;
        start = clamp(start, len, 0);
        end = clamp(end, len, len);

        if (Buffer._useTypedArrays) {
          return Buffer._augment(this.subarray(start, end));
        } else {
          var sliceLen = end - start;
          var newBuf = new Buffer(sliceLen, undefined, true);
          for (var i = 0; i < sliceLen; i++) {
            newBuf[i] = this[i + start];
          }
          return newBuf;
        }
      };

      // `get` will be removed in Node 0.13+
      Buffer.prototype.get = function (offset) {
        console.log('.get() is deprecated. Access using array indexes instead.');
        return this.readUInt8(offset);
      };

      // `set` will be removed in Node 0.13+
      Buffer.prototype.set = function (v, offset) {
        console.log('.set() is deprecated. Access using array indexes instead.');
        return this.writeUInt8(v, offset);
      };

      Buffer.prototype.readUInt8 = function (offset, noAssert) {
        if (!noAssert) {
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset < this.length, 'Trying to read beyond buffer length');
        }

        if (offset >= this.length) return;

        return this[offset];
      };

      function _readUInt16(buf, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
        }

        var len = buf.length;
        if (offset >= len) return;

        var val;
        if (littleEndian) {
          val = buf[offset];
          if (offset + 1 < len) val |= buf[offset + 1] << 8;
        } else {
          val = buf[offset] << 8;
          if (offset + 1 < len) val |= buf[offset + 1];
        }
        return val;
      }

      Buffer.prototype.readUInt16LE = function (offset, noAssert) {
        return _readUInt16(this, offset, true, noAssert);
      };

      Buffer.prototype.readUInt16BE = function (offset, noAssert) {
        return _readUInt16(this, offset, false, noAssert);
      };

      function _readUInt32(buf, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
        }

        var len = buf.length;
        if (offset >= len) return;

        var val;
        if (littleEndian) {
          if (offset + 2 < len) val = buf[offset + 2] << 16;
          if (offset + 1 < len) val |= buf[offset + 1] << 8;
          val |= buf[offset];
          if (offset + 3 < len) val = val + (buf[offset + 3] << 24 >>> 0);
        } else {
          if (offset + 1 < len) val = buf[offset + 1] << 16;
          if (offset + 2 < len) val |= buf[offset + 2] << 8;
          if (offset + 3 < len) val |= buf[offset + 3];
          val = val + (buf[offset] << 24 >>> 0);
        }
        return val;
      }

      Buffer.prototype.readUInt32LE = function (offset, noAssert) {
        return _readUInt32(this, offset, true, noAssert);
      };

      Buffer.prototype.readUInt32BE = function (offset, noAssert) {
        return _readUInt32(this, offset, false, noAssert);
      };

      Buffer.prototype.readInt8 = function (offset, noAssert) {
        if (!noAssert) {
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset < this.length, 'Trying to read beyond buffer length');
        }

        if (offset >= this.length) return;

        var neg = this[offset] & 0x80;
        if (neg) return (0xff - this[offset] + 1) * -1;else return this[offset];
      };

      function _readInt16(buf, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
        }

        var len = buf.length;
        if (offset >= len) return;

        var val = _readUInt16(buf, offset, littleEndian, true);
        var neg = val & 0x8000;
        if (neg) return (0xffff - val + 1) * -1;else return val;
      }

      Buffer.prototype.readInt16LE = function (offset, noAssert) {
        return _readInt16(this, offset, true, noAssert);
      };

      Buffer.prototype.readInt16BE = function (offset, noAssert) {
        return _readInt16(this, offset, false, noAssert);
      };

      function _readInt32(buf, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
        }

        var len = buf.length;
        if (offset >= len) return;

        var val = _readUInt32(buf, offset, littleEndian, true);
        var neg = val & 0x80000000;
        if (neg) return (0xffffffff - val + 1) * -1;else return val;
      }

      Buffer.prototype.readInt32LE = function (offset, noAssert) {
        return _readInt32(this, offset, true, noAssert);
      };

      Buffer.prototype.readInt32BE = function (offset, noAssert) {
        return _readInt32(this, offset, false, noAssert);
      };

      function _readFloat(buf, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
        }

        return ieee754.read(buf, offset, littleEndian, 23, 4);
      }

      Buffer.prototype.readFloatLE = function (offset, noAssert) {
        return _readFloat(this, offset, true, noAssert);
      };

      Buffer.prototype.readFloatBE = function (offset, noAssert) {
        return _readFloat(this, offset, false, noAssert);
      };

      function _readDouble(buf, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset + 7 < buf.length, 'Trying to read beyond buffer length');
        }

        return ieee754.read(buf, offset, littleEndian, 52, 8);
      }

      Buffer.prototype.readDoubleLE = function (offset, noAssert) {
        return _readDouble(this, offset, true, noAssert);
      };

      Buffer.prototype.readDoubleBE = function (offset, noAssert) {
        return _readDouble(this, offset, false, noAssert);
      };

      Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset < this.length, 'trying to write beyond buffer length');
          verifuint(value, 0xff);
        }

        if (offset >= this.length) return;

        this[offset] = value;
      };

      function _writeUInt16(buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 1 < buf.length, 'trying to write beyond buffer length');
          verifuint(value, 0xffff);
        }

        var len = buf.length;
        if (offset >= len) return;

        for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
          buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
        }
      }

      Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
        _writeUInt16(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
        _writeUInt16(this, value, offset, false, noAssert);
      };

      function _writeUInt32(buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 3 < buf.length, 'trying to write beyond buffer length');
          verifuint(value, 0xffffffff);
        }

        var len = buf.length;
        if (offset >= len) return;

        for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
          buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
        }
      }

      Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
        _writeUInt32(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
        _writeUInt32(this, value, offset, false, noAssert);
      };

      Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset < this.length, 'Trying to write beyond buffer length');
          verifsint(value, 0x7f, -0x80);
        }

        if (offset >= this.length) return;

        if (value >= 0) this.writeUInt8(value, offset, noAssert);else this.writeUInt8(0xff + value + 1, offset, noAssert);
      };

      function _writeInt16(buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 1 < buf.length, 'Trying to write beyond buffer length');
          verifsint(value, 0x7fff, -0x8000);
        }

        var len = buf.length;
        if (offset >= len) return;

        if (value >= 0) _writeUInt16(buf, value, offset, littleEndian, noAssert);else _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert);
      }

      Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
        _writeInt16(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
        _writeInt16(this, value, offset, false, noAssert);
      };

      function _writeInt32(buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
          verifsint(value, 0x7fffffff, -0x80000000);
        }

        var len = buf.length;
        if (offset >= len) return;

        if (value >= 0) _writeUInt32(buf, value, offset, littleEndian, noAssert);else _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert);
      }

      Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
        _writeInt32(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
        _writeInt32(this, value, offset, false, noAssert);
      };

      function _writeFloat(buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
          verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }

        var len = buf.length;
        if (offset >= len) return;

        ieee754.write(buf, value, offset, littleEndian, 23, 4);
      }

      Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
        _writeFloat(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
        _writeFloat(this, value, offset, false, noAssert);
      };

      function _writeDouble(buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
          assert(value !== undefined && value !== null, 'missing value');
          assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
          assert(offset !== undefined && offset !== null, 'missing offset');
          assert(offset + 7 < buf.length, 'Trying to write beyond buffer length');
          verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }

        var len = buf.length;
        if (offset >= len) return;

        ieee754.write(buf, value, offset, littleEndian, 52, 8);
      }

      Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
        _writeDouble(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
        _writeDouble(this, value, offset, false, noAssert);
      };

      // fill(value, start=0, end=buffer.length)
      Buffer.prototype.fill = function (value, start, end) {
        if (!value) value = 0;
        if (!start) start = 0;
        if (!end) end = this.length;

        if (typeof value === 'string') {
          value = value.charCodeAt(0);
        }

        assert(typeof value === 'number' && !isNaN(value), 'value is not a number');
        assert(end >= start, 'end < start');

        // Fill 0 bytes; we're done
        if (end === start) return;
        if (this.length === 0) return;

        assert(start >= 0 && start < this.length, 'start out of bounds');
        assert(end >= 0 && end <= this.length, 'end out of bounds');

        for (var i = start; i < end; i++) {
          this[i] = value;
        }
      };

      Buffer.prototype.inspect = function () {
        var out = [];
        var len = this.length;
        for (var i = 0; i < len; i++) {
          out[i] = toHex(this[i]);
          if (i === exports.INSPECT_MAX_BYTES) {
            out[i + 1] = '...';
            break;
          }
        }
        return '<Buffer ' + out.join(' ') + '>';
      };

      /**
       * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
       * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
       */
      Buffer.prototype.toArrayBuffer = function () {
        if (typeof Uint8Array !== 'undefined') {
          if (Buffer._useTypedArrays) {
            return new Buffer(this).buffer;
          } else {
            var buf = new Uint8Array(this.length);
            for (var i = 0, len = buf.length; i < len; i += 1) {
              buf[i] = this[i];
            }return buf.buffer;
          }
        } else {
          throw new Error('Buffer.toArrayBuffer not supported in this browser');
        }
      };

      // HELPER FUNCTIONS
      // ================

      function stringtrim(str) {
        if (str.trim) return str.trim();
        return str.replace(/^\s+|\s+$/g, '');
      }

      var BP = Buffer.prototype;

      /**
       * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
       */
      Buffer._augment = function (arr) {
        arr._isBuffer = true;

        // save reference to original Uint8Array get/set methods before overwriting
        arr._get = arr.get;
        arr._set = arr.set;

        // deprecated, will be removed in node 0.13+
        arr.get = BP.get;
        arr.set = BP.set;

        arr.write = BP.write;
        arr.toString = BP.toString;
        arr.toLocaleString = BP.toString;
        arr.toJSON = BP.toJSON;
        arr.copy = BP.copy;
        arr.slice = BP.slice;
        arr.readUInt8 = BP.readUInt8;
        arr.readUInt16LE = BP.readUInt16LE;
        arr.readUInt16BE = BP.readUInt16BE;
        arr.readUInt32LE = BP.readUInt32LE;
        arr.readUInt32BE = BP.readUInt32BE;
        arr.readInt8 = BP.readInt8;
        arr.readInt16LE = BP.readInt16LE;
        arr.readInt16BE = BP.readInt16BE;
        arr.readInt32LE = BP.readInt32LE;
        arr.readInt32BE = BP.readInt32BE;
        arr.readFloatLE = BP.readFloatLE;
        arr.readFloatBE = BP.readFloatBE;
        arr.readDoubleLE = BP.readDoubleLE;
        arr.readDoubleBE = BP.readDoubleBE;
        arr.writeUInt8 = BP.writeUInt8;
        arr.writeUInt16LE = BP.writeUInt16LE;
        arr.writeUInt16BE = BP.writeUInt16BE;
        arr.writeUInt32LE = BP.writeUInt32LE;
        arr.writeUInt32BE = BP.writeUInt32BE;
        arr.writeInt8 = BP.writeInt8;
        arr.writeInt16LE = BP.writeInt16LE;
        arr.writeInt16BE = BP.writeInt16BE;
        arr.writeInt32LE = BP.writeInt32LE;
        arr.writeInt32BE = BP.writeInt32BE;
        arr.writeFloatLE = BP.writeFloatLE;
        arr.writeFloatBE = BP.writeFloatBE;
        arr.writeDoubleLE = BP.writeDoubleLE;
        arr.writeDoubleBE = BP.writeDoubleBE;
        arr.fill = BP.fill;
        arr.inspect = BP.inspect;
        arr.toArrayBuffer = BP.toArrayBuffer;

        return arr;
      };

      // slice(start, end)
      function clamp(index, len, defaultValue) {
        if (typeof index !== 'number') return defaultValue;
        index = ~~index; // Coerce to integer.
        if (index >= len) return len;
        if (index >= 0) return index;
        index += len;
        if (index >= 0) return index;
        return 0;
      }

      function coerce(length) {
        // Coerce length to a number (possibly NaN), round up
        // in case it's fractional (e.g. 123.456) then do a
        // double negate to coerce a NaN to 0. Easy, right?
        length = ~~Math.ceil(+length);
        return length < 0 ? 0 : length;
      }

      function isArray(subject) {
        return (Array.isArray || function (subject) {
          return Object.prototype.toString.call(subject) === '[object Array]';
        })(subject);
      }

      function isArrayish(subject) {
        return isArray(subject) || Buffer.isBuffer(subject) || subject && (typeof subject === "undefined" ? "undefined" : _typeof(subject)) === 'object' && typeof subject.length === 'number';
      }

      function toHex(n) {
        if (n < 16) return '0' + n.toString(16);
        return n.toString(16);
      }

      function utf8ToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; i++) {
          var b = str.charCodeAt(i);
          if (b <= 0x7F) byteArray.push(str.charCodeAt(i));else {
            var start = i;
            if (b >= 0xD800 && b <= 0xDFFF) i++;
            var h = encodeURIComponent(str.slice(start, i + 1)).substr(1).split('%');
            for (var j = 0; j < h.length; j++) {
              byteArray.push(parseInt(h[j], 16));
            }
          }
        }
        return byteArray;
      }

      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; i++) {
          // Node's code seems to be doing this and not & 0x7F..
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }
        return byteArray;
      }

      function utf16leToBytes(str) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; i++) {
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }

        return byteArray;
      }

      function base64ToBytes(str) {
        return base64.toByteArray(str);
      }

      function blitBuffer(src, dst, offset, length) {
        var pos;
        for (var i = 0; i < length; i++) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }

      function decodeUtf8Char(str) {
        try {
          return decodeURIComponent(str);
        } catch (err) {
          return String.fromCharCode(0xFFFD); // UTF 8 invalid char
        }
      }

      /*
       * We have to make sure that the value is a valid integer. This means that it
       * is non-negative. It has no fractional component and that it does not
       * exceed the maximum allowed value.
       */
      function verifuint(value, max) {
        assert(typeof value === 'number', 'cannot write a non-number as a number');
        assert(value >= 0, 'specified a negative value for writing an unsigned value');
        assert(value <= max, 'value is larger than maximum value for type');
        assert(Math.floor(value) === value, 'value has a fractional component');
      }

      function verifsint(value, max, min) {
        assert(typeof value === 'number', 'cannot write a non-number as a number');
        assert(value <= max, 'value larger than maximum allowed value');
        assert(value >= min, 'value smaller than minimum allowed value');
        assert(Math.floor(value) === value, 'value has a fractional component');
      }

      function verifIEEE754(value, max, min) {
        assert(typeof value === 'number', 'cannot write a non-number as a number');
        assert(value <= max, 'value larger than maximum allowed value');
        assert(value >= min, 'value smaller than minimum allowed value');
      }

      function assert(test, message) {
        if (!test) throw new Error(message || 'Failed assertion');
      }
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/..\\..\\..\\node_modules\\buffer\\index.js", "/..\\..\\..\\node_modules\\buffer");
  }, { "9FoBSB": 27, "base64-js": 23, "buffer": 25, "ieee754": 26 }], 26: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];

        i += d;

        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/..\\..\\..\\node_modules\\ieee754\\index.js", "/..\\..\\..\\node_modules\\ieee754");
  }, { "9FoBSB": 27, "buffer": 25 }], 27: [function (require, module, exports) {
    (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
      // shim for using process in browser

      var process = module.exports = {};

      process.nextTick = function () {
        var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
        var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

        if (canSetImmediate) {
          return function (f) {
            return window.setImmediate(f);
          };
        }

        if (canPost) {
          var queue = [];
          window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
              ev.stopPropagation();
              if (queue.length > 0) {
                var fn = queue.shift();
                fn();
              }
            }
          }, true);

          return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
          };
        }

        return function nextTick(fn) {
          setTimeout(fn, 0);
        };
      }();

      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      // TODO(shtylman)
      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
    }).call(this, require("9FoBSB"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/..\\..\\..\\node_modules\\process\\browser.js", "/..\\..\\..\\node_modules\\process");
  }, { "9FoBSB": 27, "buffer": 25 }] }, {}, [22]);