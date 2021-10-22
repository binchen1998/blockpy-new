BlockMirrorTextToBlocks['ast_Image'] = function (node, parent, bmttb) {
    if (!bmttb.blockMirror.configuration.imageMode) {
        throw "Not using image constructor";
    }
    if (node.args.length !== 1) {
        throw "More than one argument to Image constructor";
    }
    if (node.args[0]._astname !== "Str") {
        throw "First argument for Image constructor must be string literal";
    }
    return BlockMirrorTextToBlocks.create_block("ast_Image", node.lineno, {}, {}, {},
        {"@src": Sk.ffi.remapToJs(node.args[0].s)});
};


BlockMirrorTextToBlocks.prototype.FUNCTION_SIGNATURES = {
    'abs': {
        'returns': true,
        'full': ['x'], colour: BlockMirrorTextToBlocks.COLOR.MATH
    },
    'all': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LOGIC},
    'any': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LOGIC},
    'ascii': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'bin': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'bool': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LOGIC,
    simple: ['x']},
    'breakpoint': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'bytearray': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'bytes': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'callable': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LOGIC},
    'chr': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'classmethod': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'compile': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'complex': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'delattr': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.VARIABLES},
    'dict': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    'dir': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'divmod': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'enumerate': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'eval': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'exec': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'filter': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'float': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH,
    simple: ['x']},
    'format': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'frozenset': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'getattr': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'globals': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.VARIABLES},
    'hasattr': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'hash': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'help': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'hex': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'id': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'Image': {custom: BlockMirrorTextToBlocks.ast_Image},
    'input': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.FILE,
    simple: ['prompt']},
    'int': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH,
    simple: ['x']},
    'isinstance': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LOGIC},
    'issubclass': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LOGIC},
    'iter': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'len': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'list': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'locals': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.VARIABLES},
    'map': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'max': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'memoryview': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'min': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'next': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'object': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'oct': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'open': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.FILE},
    'ord': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'pow': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'print': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.FILE,
    simple: ['message'], full: ['*messages', 'sep', 'end', 'file', 'flush']},
    'property': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'range': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES,
    simple: ['stop'], full: ['start', 'stop', 'step']},
    'repr': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'reversed': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'round': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH,
    full: ['x', 'ndigits'],
    simple: ['x']},
    'set': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'setattr': {
        'returns': false,
        'full': ['object', 'name', 'value'], colour: BlockMirrorTextToBlocks.COLOR.OO
    },
    'slice': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'sorted': {
        'full': ['iterable', '*', '**key', '**reverse'],
        'simple': ['iterable'],
        'returns': true,
        colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES
    },
    'staticmethod': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'str': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT,
    simple: ['x']},
    'sum': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'super': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'tuple': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TUPLE},
    'type': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    'vars': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.VARIABLES},
    'zip': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    '__import__': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.PYTHON}


};

BlockMirrorTextToBlocks.prototype.METHOD_SIGNATURES = {
    'conjugate': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'trunc': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'floor': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'ceil': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'bit_length': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'to_bytes': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'from_bytes': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'as_integer_ratio': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'is_integer': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'hex': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    'fromhex': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.MATH},
    '__iter__': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    '__next__': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'index': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'count': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'append': {
        'returns': false,
        'full': ['x'],
        'message': '添加',
        'premessage': '向列表', colour: BlockMirrorTextToBlocks.COLOR.LIST
    },
    'clear': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'copy': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'extend': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'insert': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'pop': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'remove': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SEQUENCES},
    'reverse': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'sort': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.LIST},
    'capitalize': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'casefold': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'center': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'encode': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'endswith': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'expandtabs': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'find': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'format': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'format_map': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isalnum': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isalpha': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isascii': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isdecimal': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isdigit': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isidentifier': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'islower': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isnumeric': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isprintable': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isspace': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'istitle': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'isupper': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'join': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'ljust': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'lower': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'lstrip': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'maketrans': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'partition': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'replace': {
        'returns': true,
        'full': ['old', 'new', 'count'],
        'simple': ['old', 'new'], colour: BlockMirrorTextToBlocks.COLOR.TEXT
    },
    'rfind': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'rindex': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'rjust': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'rpartition': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'rsplit': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'rstrip': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'split': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'splitlines': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'startswith': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'strip': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'swapcase': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'title': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'translate': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'upper': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'zfill': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    'decode': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.TEXT},
    '__eq__': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.LOGIC},
    'tobytes': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'tolist': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'release': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'cast': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.PYTHON},
    'isdisjoint': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'issubset': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'issuperset': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'union': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'intersection': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'difference': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'symmetric_difference': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'update': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'intersection_update': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'difference_update': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'symmetric_difference_update': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'add': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'discard': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.SET},
    'fromkeys': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    'get': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    'items': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    'keys': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    'popitem': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    'setdefault': {returns: false, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    'values': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.DICTIONARY},
    '__enter__': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.CONTROL},
    '__exit__': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.CONTROL},
    'mro': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
    '__subclasses__': {returns: true, colour: BlockMirrorTextToBlocks.COLOR.OO},
};


BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_IMPORTS = {
    "plt": "import matplotlib.pyplot as plt",
    "turtle": "import turtle"
};

BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES = {
    "cisc108": {
        'assert_equal': {
            returns: false,
            simple: ["left", "right"],
            message: "assert_equal",
            colour: BlockMirrorTextToBlocks.COLOR.PYTHON
        }
    },
    "turtle": {},
    'plt': {
        'show': {
            returns: false,
            simple: [],
            message: 'show plot canvas',
            colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
        },
        'hist': {
            returns: false,
            simple: ['values'],
            message: 'plot histogram',
            colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
        },
        'plot': {
            returns: false,
            simple: ['values'],
            message: 'plot line',
            colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
        },
        'scatter': {
            returns: false,
            simple: ['xs', 'ys'],
            message: 'plot scatter',
            colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
        },
        'title': {
            returns: false,
            simple: ['label'],
            message: "make plot's title",
            colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
        },
        'xlabel': {
            returns: false,
            simple: ['label'],
            message: "make plot's x-axis label",
            colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
        },
        'ylabel': {
            returns: false,
            simple: ['label'],
            message: "make plot's y-axis label",
            colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
        }
    }
};

BlockMirrorTextToBlocks.prototype.FUNCTION_SIGNATURES['assert_equal'] =
    BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['cisc108']['assert_equal'];

function makeTurtleBlock(name, returns, values, message, aliases) {
    BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['turtle'][name] = {
        "returns": returns,
        "simple": values,
        "message": message,
        colour: BlockMirrorTextToBlocks.COLOR.PLOTTING
    };
    if (aliases) {
        aliases.forEach(function(alias) {
            BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['turtle'][alias] =
                BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['turtle'][name];
        });
    }
}

makeTurtleBlock("forward", false, ["amount"], "向前移动海龟", ["fd"]);
makeTurtleBlock("backward", false, ["amount"], "向后移动海", ["bd"]);
makeTurtleBlock("right", false, ["angle"], "海龟向右转", ["rt"]);
makeTurtleBlock("left", false, ["angle"], "海龟向左转", ["lt"]);
makeTurtleBlock("goto", false, ["x", "y"], "移动海龟到", ["setpos", "setposition"]);
makeTurtleBlock("setx", false, ["x"], "设置海龟的x坐标 ", []);
makeTurtleBlock("sety", false, ["y"], "设置海龟的x坐标 ", []);
makeTurtleBlock("setheading", false, ["angle"], "设置海龟朝向 ", ["seth"]);
makeTurtleBlock("home", false, [], "移动海龟到起点 ", []);
makeTurtleBlock("circle", false, ["radius"], "按圆圈移动海龟 ", []);
makeTurtleBlock("dot", false, ["size", "color"], "海龟画一个点 ", []);
makeTurtleBlock("stamp", true, [], "海龟形状印章 ", []);
makeTurtleBlock("clearstamp", false, ["stampid"], "删除印章 ", []);
makeTurtleBlock("clearstamps", false, [], "删除所有的印章 ", []);
makeTurtleBlock("undo", false, [], "回退上次动作 ", []);
makeTurtleBlock("speed", true, ["x"], "设置或得到海龟速度", []);
makeTurtleBlock("position", true, [], "得到海龟位置 ", ["pos"]);
makeTurtleBlock("towards", true, ["x", "y"], "得到海龟相对点的角度 ", []);
makeTurtleBlock("xcor", true, [], "得到海龟的x坐标 ", []);
makeTurtleBlock("ycor", true, [], "得到海龟的y坐标 ", []);
makeTurtleBlock("heading", true, [], "得到海龟的方向 ", []);
makeTurtleBlock("distance", true, ["x", "y"], "得到到海龟的距离 ", []);
makeTurtleBlock("degrees", false, [], "设置作图模式为角度 ", []);
makeTurtleBlock("radians", false, [], "设置作图模式为弧度 ", []);
makeTurtleBlock("pendown", false, [], "放下海龟作图画笔 ", ["pd", "down"]);
makeTurtleBlock("penup", false, [], "抬起海龟作图画笔 ", ["pu", "up"]);
// Skipped some
makeTurtleBlock("pensize", false, [], "设置或得笔大小 ", ["width"]);
// Skipped some
makeTurtleBlock("pencolor", false, [], "设置或得到笔颜色 ", []);
makeTurtleBlock("fillcolor", false, [], "设置或得填充颜色 ", []);
makeTurtleBlock("reset", false, [], "重置绘画", []);
makeTurtleBlock("clear", false, [], "清除绘画", []);
makeTurtleBlock("write", false, ["message"], "写下文字 ", []);
// Skipped some
makeTurtleBlock("bgpic", false, ["url"], "设置背景图片 ", []);
makeTurtleBlock("done", false, [], "开始海龟作图循环 ", ["mainloop"]);
makeTurtleBlock("setup", false, ["width", "height"], "设置作图区域大小 ", []);
makeTurtleBlock("title", false, ["message"], "设置作图区域标题 ", []);
makeTurtleBlock("bye", false, [], "向海龟作图说再见 ", []);


BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['matplotlib.pyplot'] =
    BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES['plt'];

BlockMirrorTextToBlocks.getFunctionBlock = function(name, values, module) {
    if (values === undefined) {
        values = {};
    }
    // TODO: hack, we shouldn't be accessing the prototype like this
    let signature;
    let method = false;
    if (module !== undefined) {
        signature = BlockMirrorTextToBlocks.prototype.MODULE_FUNCTION_SIGNATURES[module][name];
    } else if (name.startsWith('.')) {
        signature = BlockMirrorTextToBlocks.prototype.METHOD_SIGNATURES[name.substr(1)];
        method = true;
    } else {
        signature = BlockMirrorTextToBlocks.prototype.FUNCTION_SIGNATURES[name];
    }
    let args = (signature.simple !== undefined ? signature.simple :
               signature.full !== undefined ? signature.full : []);
    let argumentsMutation = {
        "@arguments": args.length,
        "@returns": (signature.returns || false),
        "@parameters": true,
        "@method": method,
        "@name": module ? module+"."+name : name,
        "@message": signature.message ? signature.message : name,
        "@premessage": signature.premessage ? signature.premessage : "",
        "@colour": signature.colour ? signature.colour : 0,
        "@module": module || ""
    };
    for (let i = 0; i < args.length; i += 1) {
        argumentsMutation["UNKNOWN_ARG:" + i] = null;
    }
    let newBlock = BlockMirrorTextToBlocks.create_block("ast_Call", null, {},
        values, {inline: true}, argumentsMutation);
    // Return as either statement or expression
    return BlockMirrorTextToBlocks.xmlToString(newBlock);
};
