var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../libs/core/enums.d.ts"/>
// namespace pxsim.hare {
//     /**
//      * This is hop
//      */
//     //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
//     //% hop.fieldEditor="gridpicker"
//     export function hop(hop: Hop, color: number) {
//     }
//     //% blockId=sampleOnLand block="on land"
//     //% optionalVariableArgs
//     export function onLand(handler: (height: number, more: number, most: number) => void) {
//     }
// }
// namespace pxsim.turtle {
//     /**
//      * Moves the sprite forward
//      * @param steps number of steps to move, eg: 1
//      */
//     //% weight=90
//     //% blockId=sampleForward block="forward %steps"
//     export function forwardAsync(steps: number) {
//         // return board().sprite.forwardAsync(steps)
//         return Promise.resolve();
//     }
//     /**
//      * Moves the sprite forward
//      * @param direction the direction to turn, eg: Direction.Left
//      * @param angle degrees to turn, eg:90
//      */
//     //% weight=85
//     //% blockId=sampleTurn block="turn %direction|by %angle degrees"
//     //% angle.min=-180 angle.max=180
//     export function turnAsync(direction: Direction, angle: number) {
//         return Promise.delay(400);
//         // let b = board();
//         // if (direction == Direction.Left)
//         //     b.sprite.angle -= angle;
//         // else
//         //     b.sprite.angle += angle;
//         // return Promise.delay(400)
//     }
//     /**
//      * Triggers when the turtle bumps a wall
//      * @param handler 
//      */
//     //% blockId=onBump block="on bump"
//     export function onBump(handler: RefAction) {
//         let b = board();
//         b.bus.listen("Turtle", "Bump", handler);
//     }
// }
// namespace pxsim.loops {
//     /**
//      * Repeats the code forever in the background. On each iteration, allows other code to run.
//      * @param body the code to repeat
//      */
//     //% help=functions/forever weight=55 blockGap=8
//     //% blockId=device_forever block="forever" 
//     export function forever(body: RefAction): void {
//         thread.forever(body)
//     }
//     /**
//      * Pause for the specified time in milliseconds
//      * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
//      */
//     //% help=functions/pause weight=54
//     //% block="pause (ms) %pause" blockId=device_pause
//     export function pauseAsync(ms: number) {
//         return Promise.delay(ms)
//     }
// }
function logMsg(m) { console.log(m); }
// namespace pxsim.console {
//     /**
//      * Print out message
//      */
//     //% 
//     export function log(msg:string) {
//         logMsg("CONSOLE: " + msg)
//         // why doesn't that work?
//         board().writeSerial(msg + "\n")
//     }
// }
// namespace pxsim {
//     /**
//      * A ghost on the screen.
//      */
//     //%
//     export class Sprite {
//         /**
//          * The X-coordiante
//          */
//         //%
//         public x = 100;
//          /**
//          * The Y-coordiante
//          */
//         //%
//         public y = 100;
//         public angle = 90;
//         constructor() {
//         }
//         private foobar() {}
//         /**
//          * Move the thing forward
//          */
//         //%
//         public forwardAsync(steps: number) {
//             let deg = this.angle / 180 * Math.PI;
//             this.x += Math.cos(deg) * steps * 10;
//             this.y += Math.sin(deg) * steps * 10;
//             board().updateView();
//             if (this.x < 0 || this.y < 0)
//                 board().bus.queue("TURTLE", "BUMP");
//             return Promise.delay(400)
//         }
//     }
// }
// namespace pxsim.sprites {
//     /**
//      * Creates a new sprite
//      */
//     //% blockId="sampleCreate" block="createSprite"
//     export function createSprite(): Sprite {
//         return new Sprite();
//     }
// }
var pxsim;
(function (pxsim) {
    var device = null;
    var serial = null;
    function setupBoardView() {
        var _this = this;
        var view = $('.esp32.boardview');
        var connectPage = $('.esp32.connect.page');
        var connectBtn = $('.esp32.connect.button');
        var statusPage = $('.esp32.status.page');
        var deployBtn = $('.esp32.deploy.button');
        var resettingPage = $('.esp32.resetting.page');
        var sendingPage = $('.esp32.sending.page');
        var savingPage = $('.esp32.saving.page');
        var pages = [connectPage, statusPage, resettingPage, sendingPage, savingPage];
        var term = $('#esp32-terminal');
        var termbtn = $('i.terminal.icon');
        function updateView(stage) {
            pages.forEach(function (one) { return one.removeClass('active'); });
            pages[stage].addClass('active');
        }
        updateView(device ? 1 : 0);
        navigator.usb.ondisconnect = function (event) {
            var current = event.device;
            if (current == device) {
                device = null;
                serial = null;
                updateView(device ? 1 : 0);
            }
        };
        connectBtn[0].onclick = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var currentDevice, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.usb.requestDevice({
                            filters: [{ vendorId: 4292 }]
                        })];
                    case 1:
                        currentDevice = _a.sent();
                        serial = new pxsim.CP2102Serial(currentDevice);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, serial.open()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        // serial.readToConsole();
                        device = currentDevice;
                        updateView(device ? 1 : 0);
                        return [2 /*return*/];
                }
            });
        }); };
        deployBtn[0].onclick = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pxsim.getCode()];
                    case 1:
                        code = _a.sent();
                        return [4 /*yield*/, serial.writeMakePack({ op: 'sim.run', code: code }, function (stage) {
                                updateView(stage);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        // termbtn.on('click', e=> {
        //     const ti = new Terminal();
        //     ti.open(term[0]);
        //     ti.write('blah, hello');
        //     const modal = term[0].parentElement;
        //     modal.remove();
        //     parent.document.body.appendChild(modal);
        //     const p$ = (parent.window as any).$;
        //     p$(modal).modal('show');
        //     console.log(modal);
        // });
    }
    pxsim.setupBoardView = setupBoardView;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var Esp32Configure = /** @class */ (function () {
        function Esp32Configure(btn) {
            var _this = this;
            this.btn = btn;
            this._dialog = null;
            this.onClick = function () {
                if (_this._dialog.parentElement != parent.document.body) {
                    parent.document.body.appendChild(_this._dialog);
                }
                var p$ = parent.$;
                p$(_this._dialog).modal('show');
            };
            this.updateFileList = function () {
                var code = "return require('fs').readdirSync('node_modules')";
                pxsim.requestOp("http://" + pxsim.device.ip + ":" + pxsim.device.port, {
                    op: 'sim.run',
                    code: code
                }).then(function (res) {
                    var tbody = $(_this._dialog).find(".esp32-lib")[0];
                    tbody.innerText = '';
                    res.res.forEach(function (one) {
                        var tr = document.createElement('tr');
                        var tdn = document.createElement('td');
                        var tds = document.createElement('td');
                        tdn.innerText = one;
                        tr.appendChild(tdn);
                        tr.appendChild(tds);
                        tbody.appendChild(tr);
                    });
                });
            };
            btn.addEventListener("click", this.onClick);
            this._dialog = $('.ui.configure.modal')[0];
            $(this._dialog).find(".ui.button.refresh").on('click', this.updateFileList);
        }
        return Esp32Configure;
    }());
    pxsim.Esp32Configure = Esp32Configure;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var conn;
    (function (conn) {
        function initWS(addr) {
            if (addr === void 0) { addr = 'ws://localhost:8012'; }
            var ws = null;
            var wscb = [];
            function localws(cmd) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!!ws) return [3 /*break*/, 2];
                                ws = new WebSocket('ws://localhost:8012');
                                ws.onmessage = function (ev) {
                                    if (wscb.length) {
                                        wscb.shift()(ev);
                                    }
                                };
                                return [4 /*yield*/, new Promise(function (resolve, reject) {
                                        ws.onopen = resolve;
                                        ws.onerror = reject;
                                    })];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                                    wscb.push(function (msg) {
                                        window.console.log('[RECEIVED]', msg.data);
                                        resolve(JSON.parse(msg.data));
                                    });
                                    ws.send(JSON.stringify({ op: 'lua', lua: cmd }));
                                })];
                        }
                    });
                });
            }
            return localws;
        }
        conn.initWS = initWS;
    })(conn = pxsim.conn || (pxsim.conn = {}));
})(pxsim || (pxsim = {}));
var p$ = parent.window.$;
var pxsim;
(function (pxsim) {
    function getCode() {
        return __awaiter(this, void 0, void 0, function () {
            var E, editor, src;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        E = parent.E;
                        editor = E.getEditor();
                        if (!editor.isBlocksEditor()) return [3 /*break*/, 2];
                        return [4 /*yield*/, editor.saveBlocksToTypeScriptAsync()];
                    case 1:
                        src = _a.sent();
                        parent.console.log(true, src);
                        return [2 /*return*/, src];
                    case 2:
                        parent.console.log(false, editor, editor.textEditor.getCurrentSource());
                        return [2 /*return*/, editor.textEditor.getCurrentSource()];
                }
            });
        });
    }
    pxsim.getCode = getCode;
    pxsim.device = null;
    function requestOp(host, req) {
        return __awaiter(this, void 0, void 0, function () {
            var xhr, p;
            return __generator(this, function (_a) {
                xhr = new XMLHttpRequest();
                p = new Promise(function (resolve, reject) {
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState != 4)
                            return;
                        if (xhr.status == 200 || xhr.status == 201)
                            resolve(JSON.parse(xhr.responseText));
                        else {
                            reject(xhr);
                        }
                    };
                });
                xhr.open("POST", host);
                xhr.send(JSON.stringify(req));
                return [2 /*return*/, p];
            });
        });
    }
    pxsim.requestOp = requestOp;
    var Esp32Connect = /** @class */ (function () {
        function Esp32Connect(connectBtn, deployBtn) {
            var _this = this;
            this.connectBtn = connectBtn;
            this.deployBtn = deployBtn;
            this._connectStatus = "awaiting";
            this._deployStatus = "awaiting";
            this._device = null;
            this.onConnect = function () {
                if (_this._dialog.parentElement != parent.document.body) {
                    parent.document.body.appendChild(_this._dialog);
                }
                if (_this._connectStatus == "connecting") {
                    _this._connectStatus = "awaiting";
                    _this.updateView();
                    return;
                }
                else {
                    _this._dialogCtx.ip.querySelector('input').value = _this._device ? _this._device.ip : "";
                    _this._dialogCtx.port.querySelector('input').value = _this._device ? "" + _this._device.port : "";
                    p$(_this._dialog).modal('show');
                }
            };
            this.onDeploy = function () {
                if (_this._deployStatus == "deploying") {
                    _this._deployStatus = "awaiting";
                    _this.updateView();
                    return;
                }
                _this._deployStatus = "deploying";
                _this.updateView();
                getCode().then(function (code) {
                    var host = "http://" + _this._device.ip + ":" + _this._device.port;
                    return requestOp(host, {
                        op: "sim.run",
                        code: code
                    }).then(function (resp) {
                        parent.console.log(resp);
                        _this._deployStatus = "awaiting";
                        _this.updateView();
                    });
                });
            };
            connectBtn.addEventListener("click", this.onConnect);
            deployBtn.addEventListener("click", this.onDeploy);
            this._dialog = $('.ui.connector.modal')[0];
            var confirm = this._dialog.querySelector(".button.confirm");
            var cancel = this._dialog.querySelector(".button.cancel");
            var ip = this._dialog.querySelector(".field.ip-esp32");
            var port = this._dialog.querySelector(".field.port-esp32");
            confirm.addEventListener("click", function () {
                _this._device = pxsim.device = {
                    ip: ip.querySelector("input").value || "192.168.3.175",
                    port: parseInt(port.querySelector("input").value) || 80
                };
                _this._connectStatus = "connecting";
                _this.updateView();
                p$(_this._dialog).modal('hide');
                var req = requestOp("http://" + _this._device.ip + ":" + _this._device.port, {
                    op: "pm.ls"
                }).then(function (resp) {
                    parent.window.console.log('connected:', resp);
                    if (resp && resp.res) {
                        _this._connectStatus = "connected";
                        _this.updateView();
                    }
                }).catch(function (e) {
                    _this.connectBtn.innerHTML = "Failed to connect..";
                });
            });
            cancel.addEventListener("click", function () {
                p$(_this._dialog).modal('hide');
            });
            this._dialogCtx = { confirm: confirm, cancel: cancel, ip: ip, port: port };
        }
        Esp32Connect.prototype.updateView = function () {
            if (this._connectStatus == "awaiting")
                this.connectBtn.innerHTML = "Connect Device";
            else if (this._connectStatus == "connecting")
                this.connectBtn.innerHTML = "Connecting to " + this._device.ip + ":" + this._device.port;
            else
                this.connectBtn.innerHTML = "Connected to " + this._device.ip + ":" + this._device.port;
            if (this.deployBtn.classList.contains("disabled") == (this._connectStatus == "connected")) {
                this.deployBtn.classList.toggle("disabled");
            }
            if (this._deployStatus == "awaiting") {
                this.deployBtn.innerHTML = "Deploy Code";
            }
            else {
                this.deployBtn.innerHTML = "Deploying...";
            }
        };
        return Esp32Connect;
    }());
    pxsim.Esp32Connect = Esp32Connect;
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    /**
     * This function gets called each time the program restarts
     */
    pxsim.initCurrentRuntime = function () {
        pxsim.runtime.board = new Board();
    };
    /**
     * Gets the current 'board', eg. program state.
     */
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    var Board = /** @class */ (function (_super) {
        __extends(Board, _super);
        // public btnDeploy: HTMLButtonElement;
        function Board() {
            var _this = _super.call(this) || this;
            _this.bus = new pxsim.EventBus(pxsim.runtime);
            pxsim.setupBoardView();
            return _this;
        }
        Board.prototype.initAsync = function (msg) {
            // document.body.innerHTML = ''; // clear children
            // document.body.appendChild(this.element);
            return new Promise(function () { });
        };
        Board.prototype.updateView = function () {
        };
        return Board;
    }(pxsim.BaseBoard));
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    function cto(device, request, value) {
        return device.controlTransferOut({
            requestType: 'vendor',
            recipient: 'device',
            index: 0x00,
            request: request,
            value: value,
        });
    }
    function cti(device, request, value, length) {
        return device.controlTransferIn({
            requestType: 'vendor',
            recipient: 'device',
            index: 0x00,
            request: request,
            value: value,
        }, length);
    }
    var enc = new window.TextEncoder;
    var dec = new window.TextDecoder;
    // https://gist.github.com/seiyanuta/2c70ba8855f50c536a51f0c5993c1e4c
    // https://github.com/felHR85/UsbSerial/blob/master/usbserial/src/main/java/com/felhr/usbserial/CP2102SerialDevice.java
    var CP2102Serial = /** @class */ (function () {
        function CP2102Serial(device) {
            this.device = device;
            this._buffer = '';
            this._awaiting = null;
            this.consoleBuffer = '';
        }
        ;
        CP2102Serial.prototype.open = function () {
            return __awaiter(this, void 0, void 0, function () {
                var device;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            device = this.device;
                            return [4 /*yield*/, device.open()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, device.selectConfiguration(1)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, device.claimInterface(0)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.setEnabled(1)];
                        case 4:
                            _a.sent();
                            // await this.setRTSCTS();
                            // await this.setDSRDTR();
                            // await this.setMHS(0x202 | 0x100);
                            return [4 /*yield*/, this.setXONXOFF()];
                        case 5:
                            // await this.setRTSCTS();
                            // await this.setDSRDTR();
                            // await this.setMHS(0x202 | 0x100);
                            _a.sent();
                            return [4 /*yield*/, this.setBAUDRate(115200)];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, this.setLINE(0x800)];
                        case 7:
                            _a.sent();
                            this.readDataToBuffer();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.getPartNumber = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, cti(this.device, 0xff, 0x370b, 1)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data.buffer];
                    }
                });
            });
        };
        CP2102Serial.prototype.getCTL = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, cti(this.device, 0x04, 0, 2)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data.buffer];
                    }
                });
            });
        };
        CP2102Serial.prototype.getCOMM = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, cti(this.device, 0x10, 0, 19)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data.buffer];
                    }
                });
            });
        };
        CP2102Serial.prototype.getBAUDRate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, cti(this.device, 0x1D, 0, 4)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data.buffer];
                    }
                });
            });
        };
        CP2102Serial.prototype.setEnabled = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, cto(this.device, 0x00, value)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.setMHS = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, cto(this.device, 0x07, value)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.setBAUDRate = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var ab, int;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ab = new ArrayBuffer(4);
                            int = new Int32Array(ab);
                            int[0] = value;
                            return [4 /*yield*/, this.device.controlTransferOut({
                                    requestType: 'vendor', recipient: 'device',
                                    request: 0x1E, value: 0, index: 0
                                }, ab)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.setRTSCTS = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ab, ia;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ab = new ArrayBuffer(0x10);
                            ia = new Int8Array(ab);
                            ia[0] = 0x09;
                            ia[4] = 0x40;
                            ia[9] = 0x80;
                            ia[13] = 0x20;
                            return [4 /*yield*/, this.device.controlTransferOut({
                                    requestType: 'vendor', recipient: 'device',
                                    request: 0x13, value: 0, index: 0
                                }, ab)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.setMHS(0x202)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.setDSRDTR = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ab, ia;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ab = new ArrayBuffer(0x10);
                            ia = new Int8Array(ab);
                            ia[0] = 0x11;
                            ia[4] = 0x40;
                            ia[9] = 0x80;
                            ia[13] = 0x20;
                            return [4 /*yield*/, this.device.controlTransferOut({
                                    requestType: 'vendor', recipient: 'device',
                                    request: 0x13, value: 0, index: 0
                                }, ab)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.setMHS(0x101)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.setXONXOFF = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ab, ia;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ab = new ArrayBuffer(6);
                            ia = new Int8Array(ab);
                            ia[4] = 0x11;
                            ia[5] = 0x13;
                            return [4 /*yield*/, this.device.controlTransferOut({
                                    requestType: 'vendor', recipient: 'device',
                                    request: 0x10, value: 0, index: 0
                                }, ab)];
                        case 1:
                            _a.sent();
                            ab = new ArrayBuffer(0x10);
                            ia = new Int8Array(ab);
                            ia[0] = 0x01;
                            ia[4] = 0x43;
                            ia[9] = 0x80;
                            ia[13] = 0x20;
                            return [4 /*yield*/, this.device.controlTransferOut({
                                    requestType: 'vendor', recipient: 'device',
                                    request: 0x13, value: 0, index: 0
                                }, ab)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.setLINE = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, cto(this.device, 0x03, value)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.readData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var device, res, arr, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            device = this.device;
                            return [4 /*yield*/, device.transferIn(2, 64)];
                        case 1:
                            res = _a.sent();
                            arr = new Uint8Array(res.data.buffer);
                            result = dec.decode(arr);
                            this.feedToConsole(result);
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        CP2102Serial.prototype.readDataToBuffer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!true) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.readData()];
                        case 1:
                            data = _a.sent();
                            this._buffer += data;
                            if (this._awaiting) {
                                this._awaiting(this._buffer);
                                this._awaiting = null;
                                this._buffer = '';
                            }
                            return [3 /*break*/, 0];
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.waitForPrompt = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!true) return [3 /*break*/, 2];
                            return [4 /*yield*/, new Promise(function (resolve) {
                                    if (_this._buffer.length) {
                                        var data = _this._buffer;
                                        _this._buffer = '';
                                        resolve(data);
                                    }
                                    else {
                                        _this._awaiting = resolve;
                                    }
                                })];
                        case 1:
                            resp = _a.sent();
                            if (resp[resp.length - 1] == '>')
                                return [3 /*break*/, 2];
                            return [3 /*break*/, 0];
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.waitForResetDone = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var resp, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            resp = '';
                            _b.label = 1;
                        case 1:
                            if (!true) return [3 /*break*/, 3];
                            _a = resp;
                            return [4 /*yield*/, new Promise(function (resolve) {
                                    if (_this._buffer.length) {
                                        var data = _this._buffer;
                                        _this._buffer = '';
                                        resolve(data);
                                    }
                                    else {
                                        _this._awaiting = resolve;
                                    }
                                })];
                        case 2:
                            resp = _a + _b.sent();
                            if (resp[resp.length - 1] != '>')
                                return [3 /*break*/, 1];
                            if (resp.indexOf("http://espruino.com/Donate") == -1)
                                return [3 /*break*/, 1];
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.writeData = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var ab, device;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ab = enc.encode(data);
                            device = this.device;
                            return [4 /*yield*/, device.transferOut(1, ab)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.writeDataThrottled = function (data, length) {
            return __awaiter(this, void 0, void 0, function () {
                var ab, device, i, abv;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ab = enc.encode(data).buffer;
                            device = this.device;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < ab.byteLength)) return [3 /*break*/, 4];
                            abv = new DataView(ab, i, Math.min(64, ab.byteLength - i));
                            return [4 /*yield*/, device.transferOut(1, abv)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i += 64;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.writeMakePack = function (pack, onStageComplete) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, code;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('pack:', pack);
                            payload = JSON.stringify(pack);
                            if (onStageComplete)
                                onStageComplete(2);
                            return [4 /*yield*/, this.writeData("reset()\n")];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.waitForResetDone()];
                        case 2:
                            _a.sent();
                            console.log('resetting done');
                            if (onStageComplete)
                                onStageComplete(3);
                            code = "function onInit(){ require('make').handle(" + payload + ") }\n";
                            return [4 /*yield*/, this.writeDataThrottled(code, 64)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.waitForPrompt()];
                        case 4:
                            _a.sent();
                            console.log('writing done');
                            if (onStageComplete)
                                onStageComplete(4);
                            return [4 /*yield*/, this.writeData("save()\n")];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, this.waitForPrompt()];
                        case 6:
                            _a.sent();
                            console.log('saving done');
                            if (onStageComplete)
                                onStageComplete(1);
                            return [2 /*return*/];
                    }
                });
            });
        };
        CP2102Serial.prototype.feedToConsole = function (data) {
            this.consoleBuffer += data;
            var lines = this.consoleBuffer.split('\n');
            for (var i = 0; i < lines.length - 1; i++)
                console.log('%c [SERIAL]' + lines[i], 'backgroud: #222; color: #bada55');
            this.consoleBuffer = lines[lines.length - 1];
        };
        return CP2102Serial;
    }());
    pxsim.CP2102Serial = CP2102Serial;
})(pxsim || (pxsim = {}));
