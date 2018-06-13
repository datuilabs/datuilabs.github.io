var pxtTargetBundle = {
  "id": "botcraft-esp32",
  "name": "botcraft-esp32",
  "title": "Botcraft Esp32 Box Code Editor",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "bundleddirs": [
    "libs/core",
    "libs/lolin32"
  ],
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": true,
    "functionBlocks": true,
    "listsBlocks": true
  },
  "simulator": {
    "autoRun": true
  },
  "compile": {
    "saveAsPNG": true,
    "floatingPoint": true,
    "vtableShift": 2,
    "noSourceInFlash": true
  },
  "appTheme": {
    "logoUrl": "/./",
    "logo": "https://datui.tv/img/index/index-banner-tip.png",
    "cardLogo": "https://datui.tv/img/index/index-banner-tip.png",
    "portraitLogo": "https://datui.tv/img/index/index-banner-tip.png",
    "rightLogo": "https://datui.tv/img/index/index-banner-tip.png",
    "docsLogo": "https://datui.tv/img/index/index-banner-tip.png",
    "appLogo": "https://datui.tv/img/index/index-banner-tip.png",
    "homeUrl": "/./",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "betaUrl": "https://datui.tv/",
    "extendEditor": true,
    "accentColor": "#F3DF49",
    "docMenu": [
      {
        "name": "About",
        "path": "/./docs/about"
      },
      {
        "name": "Docs",
        "path": "/./docs/docs"
      }
    ],
    "coloredToolbox": false,
    "monacoToolbox": true,
    "invertedMenu": true,
    "showHomeScreen": true,
    "homeScreenHero": "docs/static/part-three.jpg",
    "blocklyOptions": {
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": true
      }
    },
    "simAnimationEnter": "fly right in",
    "simAnimationExit": "fly right out",
    "selectLanguage": true,
    "availableLocales": [
      "en",
      "zh-CN"
    ],
    "monacoColors": {
      "editor.background": "#ecf0f1"
    },
    "TOC": [
      {
        "name": "About",
        "subitems": [],
        "path": "/about",
        "nextName": "FAQ",
        "nextPath": "/faq"
      },
      {
        "name": "FAQ",
        "subitems": [],
        "path": "/faq",
        "prevName": "About",
        "prevPath": "/about",
        "nextName": "Blocks",
        "nextPath": "/blocks"
      },
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "prevName": "FAQ",
        "prevPath": "/faq",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
            "nextName": "About",
            "nextPath": "/about"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "About",
            "subitems": [],
            "path": "/about",
            "prevName": "Function",
            "prevPath": "/types/function",
            "nextName": "Support",
            "nextPath": "/support"
          },
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "About",
            "prevPath": "/about",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Save",
            "nextPath": "/save"
          },
          {
            "name": "Save",
            "subitems": [],
            "path": "/save",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Function",
        "prevPath": "/types/function"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Save",
            "prevPath": "/save",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Blocks Embed",
            "nextPath": "/blocks-embed"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code"
          }
        ],
        "prevName": "Save",
        "prevPath": "/save"
      }
    ],
    "embedUrl": "http://microsoft.github.io/pxt-sample/",
    "id": "botcraft-esp32",
    "title": "Botcraft Esp32 Box Code Editor",
    "name": "botcraft-esp32",
    "htmlDocIncludes": {}
  },
  "versions": {
    "target": "2.0.1",
    "pxt": "3.19.2"
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": " ",
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
      "main.ts": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "README.md": " ",
      "main.ts": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# basic\n\nAdd your docs here...",
      "enums.d.ts": "declare const enum Direction {\n    //% block=left\n    Left,\n    //% block=right\n    Right\n}\n\ndeclare const enum Hop {\n    //% block=short\n    Short,\n    //% block=long\n    Long,\n    //% block=silly\n    Silly,\n    //% block=wow\n    Incredible,\n    //% block=\"to the moon!\"\n    Astronomical\n}\n\n\n",
      "ns.ts": "/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=100\n// namespace turtle {\n\n// }\n\n//% color=#D4BC00 weight=95\n// namespace hare {\n\n// }\n\n/**\n * Control flow\n */\n//% color=#FF5722 weight=90\n// namespace control {\n\n// }\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockGap=64\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * joins all elements of an array into a string and returns this string.\n      * @param sep the string separator\n      */\n    //% helper=arrayJoin weight=40\n    join(sep: string): string;\n    \n    /**\n      * Tests whether at least one element in the array passes the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arraySome weight=40\n    some(callbackfn: (value: T, index: number) => boolean): boolean;\n\n    /**\n      * Tests whether all elements in the array pass the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayEvery weight=40\n    every(callbackfn: (value: T, index: number) => boolean): boolean;\n    \n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Call a defined callback function on each element of an array.\n      * @param callbackfn A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayForEach weight=40\n    forEach(callbackfn: (value: T, index: number) => void): void;\n    \n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=15\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    export function arrayJoin<T>(arr: T[], sep: string): string {\n        let r = \"\";\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            if (i > 0 && sep)\n                r += sep;\n            r += arr[i] || \"\";\n        }\n        return r;\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arraySome<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (callbackfn(arr[i], i))\n                return true;\n        return false;\n    }\n\n    export function arrayEvery<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (!callbackfn(arr[i], i))\n                return false;\n        return true;\n    }\n\n    export function arrayForEach<T>(arr: T[], callbackfn: (value: T, index: number) => void): void {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            callbackfn(arr[i], i);\n        }\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n\n    /**\n     * Rounds ``x`` to a number with the given number of ``digits``\n     * @param x the number to round\n     * @param digits the number of resulting digits\n     */\n    //%\n    export function roundWithPrecision(x: number, digits: number): number {\n        digits = digits | 0;\n        // invalid digits input\n        if (digits <= 0) return Math.round(x);\n        if (x == 0) return 0;\n        let r = 0;\n        do {\n            const d = Math.pow(10, digits);\n            r = Math.round(x * d) / d;\n            digits++;\n        } while (r == 0 && digits < 21);\n        return r;\n    }\n}\n\n\n//% blockHidden=1\nnamespace __internal {\n    /**\n     * A shim to render a boolean as a down/up toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleDownUp block=\"%down\"\n    //% down.fieldEditor=toggledownup\n    //% down.fieldOptions.decompileLiterals=true\n    export function __downUp(down: boolean): boolean {\n        return down;\n    }\n\n    /**\n     * A shim to render a boolean as a up/down toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleUpDown block=\"%up\"\n    //% up.fieldEditor=toggleupdown\n    //% up.fieldOptions.decompileLiterals=true\n    export function __upDown(up: boolean): boolean {\n        return up;\n    }\n\n    /**\n     * A shim to render a boolean as a high/low toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleHighLow block=\"%high\"\n    //% high.fieldEditor=togglehighlow\n    //% high.fieldOptions.decompileLiterals=true\n    export function __highLow(high: boolean): boolean {\n        return high;\n    }\n\n    /**\n     * A shim to render a boolean as a on/off toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleOnOff block=\"%on\"\n    //% on.fieldEditor=toggleonoff\n    //% on.fieldOptions.decompileLiterals=true\n    export function __onOff(on: boolean): boolean {\n        return on;\n    }\n\n    /**\n     * A shim to render a boolean as a yes/no toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleYesNo block=\"%yes\"\n    //% yes.fieldEditor=toggleyesno\n    //% yes.fieldOptions.decompileLiterals=true\n    export function __yesNo(yes: boolean): boolean {\n        return yes;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param color color, eg: #ff0000\n     */\n    //% blockId=colorNumberPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colornumber\" value.fieldOptions.decompileLiterals=true\n    //% value.defl='#ff0000'\n    //% value.fieldOptions.colours='[\"#ff0000\",\"#ff8000\",\"#ffff00\",\"#ff9da5\",\"#00ff00\",\"#b09eff\",\"#00ffff\",\"#007fff\",\"#65471f\",\"#0000ff\",\"#7f00ff\",\"#ff0080\",\"#ff00ff\",\"#ffffff\",\"#999999\",\"#000000\"]'\n    //% value.fieldOptions.columns=4 value.fieldOptions.className='rgbColorPicker'\n    export function __colorNumberPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param value value between 0 to 255 to get a color value, eg: 10\n     */\n    //% blockId=colorWheelPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    export function __colorWheelPicker(value: number) {\n        return value;\n    }\n\n    /**\n    * Get the color wheel field editor using HSV values\n    * @param value value between 0 to 255 to get a color value, eg: 10\n    */\n    //% blockId=colorWheelHsvPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    //% value.fieldOptions.channel=hsvfast\n    export function __colorWheelHsvPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * A speed picker\n     * @param speed the speed, eg: 50\n     */\n    //% blockId=speedPicker block=\"%speed\" shim=TD_ID\n    //% speed.fieldEditor=\"speed\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 speed.fieldOptions.decompileLiterals=1\n    export function __speedPicker(speed: number): number {\n        return speed;\n    }\n\n    /**\n     * A turn ratio picker\n     * @param turnratio the turn ratio, eg: 0\n     */\n    //% blockId=turnRatioPicker block=\"%turnratio\" shim=TD_ID\n    //% turnratio.fieldEditor=\"turnratio\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 turnRatio.fieldOptions.decompileLiterals=1\n    export function __turnRatioPicker(turnratio: number): number {\n        return turnratio;\n    }\n\n    /**\n     * A field editor that displays a protractor\n     */\n    //% blockId=protractorPicker block=\"%angle\"\n    //% shim=TD_ID\n    //% angle.fieldEditor=protractor\n    //% angle.fieldOptions.decompileLiterals=1    \n    //% colorSecondary=\"#FFFFFF\"\n    //% blockHidden=1\n    export function __protractor(angle: number) {\n        return angle;\n    }\n\n    /**\n      * Get the time field editor\n      * @param ms time duration in milliseconds, eg: 500, 1000\n      */\n    //% blockId=timePicker block=\"%ms\"\n    //% blockHidden=true\n    //% colorSecondary=\"#FFFFFF\"\n    //% ms.fieldEditor=\"numberdropdown\" ms.fieldOptions.decompileLiterals=true\n    //% ms.fieldOptions.data='[[\"100 ms\", 100], [\"200 ms\", 200], [\"500 ms\", 500], [\"1 second\", 1000], [\"2 seconds\", 2000]]'\n    export function __timePicker(ms: number): number {\n        return ms;\n    }\n}",
      "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"A target sample for PXT\",\n    \"files\": [\n        \"README.md\",\n        \"pxt-core.d.ts\",\n        \"pxt-helpers.ts\",\n        \"enums.d.ts\",\n        \"sims.d.ts\",\n        \"ns.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"dependencies\": {},\n    \"targetVersions\": {\n        \"target\": \"2.0.1\"\n    }\n}",
      "sims.d.ts": "// Auto-generated from simulator. Do not edit.\n    /**\n     * A ghost on the screen.\n     */\n    //%\n    declare class Sprite {\n        /**\n         * The X-coordiante\n         */\n        //%\n        //% shim=.x\n        public x: number;\n\n        /**\n         * The Y-coordiante\n         */\n        //%\n        //% shim=.y\n        public y: number;\n\n        /**\n         * Move the thing forward\n         */\n        //%\n        //% shim=.forwardAsync promise\n        public forward(steps: number): void;\n\n    }\n\n// Auto-generated. Do not edit. Really.\n",
      "test.ts": ""
    },
    "lolin32": {
      "README.md": "# LOLIN32\n\nso, uh, docs for LOLIN32\n",
      "_locales/zh/lolin32-jsdoc-strings.json": "{\n    \"pins.analogWrite\": \"输出PWM\",\n    \"pins.analogRead\": \"读入模拟值\",\n    \"pins.setWatch\": \"在指定针脚输入值改变时，执行代码\"\n}\n",
      "_locales/zh/lolin32-strings.json": "{\n    \"ReadPin.read|block\": \"读取%pin的高低电平\",\n    \"WritePin.write|block\": \"向%pin写入%val电平\",\n    \"pins.analogWrite|block\": \"向%pin输出PWM, 占空比为百分之 %duty，频率为%freqHZ\",\n    \"pins.analogRead|block\": \"从%pin读取模拟值\",\n    \"pins.setWatch|block\": \"当%pin电平发生%edge改变时执行\",\n\n    \"timer.setTimeout|block\": \"等待%ms毫秒之后执行\",\n    \"timer.setInterval|block\": \"每隔%ms毫秒执行\",\n    \"timer.forEvery|block\": \"从%st数到%ed，每隔%ms毫秒执行\",\n\n    \"Motor.setMotorPower|block\": \"将%motor的力度设置为%power，方向设置为%dir\",\n\n    \"screen.drawString|block\": \"将屏幕第%line行内容设置为%content\",\n\n    \"ps2controller.isButtonPressed|block\": \"按钮%button是否被按下\",\n    \"ps2controller.setWatch|block\": \"按钮%button值发生%edge改变时执行\",\n\n    \"pins.BoardLED|block\": \"板载LED\",\n    \"pins.Falling|block\": \"松开\",\n    \"pins.Rising|block\": \"按下\",\n    \"pins.FallingAndRising|block\": \"按下或松开\",\n\n    \"pins.Pin1|block\": \"主控P1\",\n    \"pins.Pin2|block\": \"主控P2\",\n    \"pins.Pin3|block\": \"主控P3\",\n    \"pins.Pin4|block\": \"主控P4\",\n    \"pins.Pin5|block\": \"主控P5\",\n    \"pins.Pin6|block\": \"主控P6\",\n    \"pins.Pin7|block\": \"主控P7\",\n    \"pins.Pin8|block\": \"主控P8\",\n\n    \"pins.Lower1|block\": \"驱动1\",\n    \"pins.Lower2|block\": \"驱动2\",\n    \"pins.Lower3|block\": \"驱动3\",\n    \"pins.Lower4|block\": \"驱动4\",\n    \"pins.Lower5|block\": \"驱动5\",\n    \"pins.Lower6|block\": \"驱动6\",\n    \"pins.Lower7|block\": \"驱动7\",\n    \"pins.Lower8|block\": \"驱动8\",\n\n    \"motors.MotorA|block\": \"马达A\",\n    \"motors.MotorB|block\": \"马达B\",\n    \"motors.MotorC|block\": \"马达C\",\n    \"motors.MotorD|block\": \"马达D\",\n    \"motors.Forward|block\": \"正向\",\n    \"motors.Backward|block\": \"反向\",\n\n    \"{id:category}Pins\": \"针脚\",\n    \"{id:category}Timer\": \"计时\",\n    \"{id:category}Motors\": \"驱动\",\n    \"{id:category}Ps2controller\": \"PS2手柄\",\n    \"{id:category}Screen\": \"屏幕\"\n}\n",
      "enums.d.ts": "//% blockNamespace=pins\ndeclare const enum Edge {\n    //% block=Falling\n    Falling,\n    //% block=Rising\n    Rising,\n    //% block=\"Falling and Rising\"\n    FallingAndRising\n}\n",
      "ns.ts": "//% fixedInstances\n//% blockNamespace=pins\ndeclare interface ReadPin{\n    /**\n     * Read a digital value from the pin input.\n     */\n    //% blockId=\"digitalRead\" block=\"get value on pin %pin\"\n    //% blockNamespace=pins\n    //% pin.fieldEditor=\"gridpicker\"\n    read(): boolean\n}\n\n//% fixedInstances\n//% blockNamespace=pins\ndeclare interface WritePin{\n    /**\n     * Write a digital value to the pin output.\n     * @param val true for high, false for low. eg: true\n     */\n    //% blockId=\"digitalWrite\" block=\"set pin %pin to %val\"\n    //% blockNamespace=pins\n    //% pin.fieldEditor=\"gridpicker\"\n    write(val: boolean): void\n}\n\n//% fixedInstances\n//% blockNamespace=pins\ndeclare interface ReadWritePin extends ReadPin, WritePin{\n}\n\n//% fixedInstances\n//% blockNamespace=pins\ndeclare interface PinEdge{}\n\n//% color=#00BCD4 weight=100\ndeclare namespace pins {\n    //% fixedInstance block=\"Releasing\"\n    export const Falling : PinEdge;\n    //% fixedInstance block=\"Pressing\"\n    export const Rising : PinEdge;\n    //% fixedInstance block=\"Releaseing and Pressing\"\n    export const FallingAndRising : PinEdge;\n\n    //% fixedInstance block=\"BoardLED\"\n    export const BoardLED : WritePin;\n    //% fixedInstance block=\"P1\"\n    export const Pin1 : ReadWritePin;\n    //% fixedInstance block=\"P2\"\n    export const Pin2 : ReadWritePin;\n    //% fixedInstance block=\"P3\"\n    export const Pin3 : ReadWritePin;\n    //% fixedInstance block=\"P4\"\n    export const Pin4 : ReadWritePin;\n    //% fixedInstance block=\"P5\"\n    export const Pin5 : ReadWritePin;\n    //% fixedInstance block=\"P6\"\n    export const Pin6 : ReadWritePin;\n    //% fixedInstance block=\"P7\"\n    export const Pin7 : ReadWritePin;\n    //% fixedInstance block=\"P8\"\n    export const Pin8 : ReadWritePin;\n\n    //% fixedInstance block=\"Button 1\"\n    export const Btn1 : ReadPin;\n    //% fixedInstance block=\"Button 2\"\n    export const Btn2 : ReadPin;\n\n    //% fixedInstance block=\"Servo 1\"\n    export const Lower1 : WritePin;\n    //% fixedInstance block=\"Servo 2\"\n    export const Lower2 : WritePin;\n    //% fixedInstance block=\"Servo 3\"\n    export const Lower3 : WritePin;\n    //% fixedInstance block=\"Servo 4\"\n    export const Lower4 : WritePin;\n\n    //% fixedInstance block=\"Servo 5\"\n    export const Lower5 : WritePin;\n    //% fixedInstance block=\"Servo 6\"\n    export const Lower6 : WritePin;\n    //% fixedInstance block=\"Servo 7\"\n    export const Lower7 : WritePin;\n    //% fixedInstance block=\"Servo 8\"\n    export const Lower8 : WritePin;\n}\n\n//% blockNamespace=pins\nnamespace pins{\n    /**\n     * Write a PWM to the pin output.\n     * @param duty percentage of high voltage per cycle. eg: 50\n     * @param freq frequency of the PWM. eg: 1000\n     */\n    //% blockId=analogWrite block=\"set PWM on %pin to %duty percent at %freq HZ\"\n    //% duty.min=0 duty.max=100\n    //% pin.fieldEditor=\"gridpicker\"\n    export function analogWrite(pin: WritePin, duty: number, freq?: number): void{};\n\n\n    /**\n     * Read an analog value from the pin, as a number 0-1\n     */\n    //% blockId=analogRead block=\"read analog from pin %pin\"\n    //% pin.fieldEditor=\"gridpicker\"\n    export function analogRead(pin: ReadPin): number{return 0};\n\n    /**\n     * Run the code inside whenever the digital input value on pin changes.\n     * @param edge choose to run the code when the change is from high to low, or low to high, or both.\n     */\n    //% blockId=\"setWatch\" block=\"interrupt %pin on %edge\"\n    //% blockNamespace=pins\n    //% pin.fieldEditor=\"gridpicker\"\n    export function setWatch(pin: ReadPin, edge: PinEdge, cb: () => void): void{}\n}\n\n//% color=#D4BC00 weight=95\nnamespace timer {\n\n    /**\n     * Run the code after a period of time.\n     * @param ms time to wait. eg: 1000\n     */\n    //% blockId=\"setTimeout\" block=\"run after %ms ms\"\n    //% handlerStatement\n    export function setTimeout(ms: number, callback: () => void): void{};\n\n    /**\n     * Repeat the code with an interval.\n     * @param ms time interval to wait. eg: 2000\n     */\n    //% blockId=\"setInterval\" block=\"run every %ms ms\"\n    export function setInterval(ms: number, callback: () => void): void{};\n\n    /**\n     * Repeat the code with an interval for every number within a range.\n     * @param st starting index. eg: 1\n     * @param ed starting index. eg: 5\n     * @param ms time interval to wait. eg: 2000\n     */\n    //% blockId=\"forEvery\" block=\"run from %st to %ed every %ms ms, index as\"\n    //% handlerStatement\n    export function forEvery(st: number, ed: number, ms: number, callback: (i: number) => void): void{};\n}\n\n//% fixedInstances\n//% blockNamespace=motors\ndeclare interface Motor{\n    /**\n     * Repeat the code with an interval for every number within a range.\n     * @param st starting index. eg: 1\n     * @param ed starting index. eg: 5\n     * @param ms time interval to wait. eg: 2000\n     */\n    //% blockId=\"setMotorPower\" block=\"set power of %motor to %speed percent %forward\"\n    //% blockNamespace=motors speed.min=0 speed.max=100\n    setMotorPower(speed: number, forward: MotorDirection): void;\n}\n\n//% fixedInstances\n//% blockNamespace=motors\ndeclare interface MotorDirection{}\n\n//% color=#FF5722 weight=90\ndeclare namespace motors {\n    //% fixedInstance block=\"forward\"\n    export const Forward: MotorDirection;\n    //% fixedInstance block=\"backward\"\n    export const Backward: MotorDirection;\n\n    //% fixedInstance block=\"motor A\"\n    export const MotorA: Motor;\n    //% fixedInstance block=\"motor B\"\n    export const MotorB: Motor;\n    //% fixedInstance block=\"motor C\"\n    export const MotorC: Motor;\n    //% fixedInstance block=\"motor D\"\n    export const MotorD: Motor;\n}\n\n//% color=#D4BC00 weight=95\nnamespace screen {\n    /**\n     * Draw text on the OLED screen.\n     * @param line write one which line. eg: 0\n     * @param text text to draw. eg: \"Hello, Datui\"\n     */\n    //% blockId=drawString block=\"set line %line on screen to %text\"\n    //% line.min=0 line.max=3\n    export function drawString(line: number, text: string){}\n}\n\n//% fixedInstances\n//% blockNamespace=ps2controller\ndeclare interface PS2Button{}\n\ndeclare namespace ps2controller {\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/6/69/PlayStation_button_T.svg\"\n    export const BtnTriangle: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/PlayStation_button_C.svg\"\n    export const BtnO: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/8/8f/PlayStation_button_X.svg\"\n    export const BtnX: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/4/49/PlayStation_button_S.svg\"\n    export const BtnSquare: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/7/71/PlayStation_button_Select.svg\"\n    export const BtnSelect: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/d/d3/PlayStation_button_Start.svg\"\n    export const BtnStart: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/4/48/PlayStation_button_L3.svg\"\n    export const BtnL3: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/8/8a/PlayStation_button_R3.svg\"\n    export const BtnR3: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/e/ea/PlayStation_Up_button.svg\"\n    export const BtnUp: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/d/de/PlayStation_Right_button.svg\"\n    export const BtnRight: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/4/45/PlayStation_Down_button.svg\"\n    export const BtnDown: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/4/4b/PlayStation_Left_button.svg\"\n    export const BtnLeft: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/9/97/PlayStation_button_L2.svg\"\n    export const BtnL2: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/0/0e/PlayStation_button_R2.svg\"\n    export const BtnR2: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/6/66/PlayStation_button_L1.svg\"\n    export const BtnL1: PS2Button;\n\n    //% fixedInstance\n    //% iconURL=\"https://upload.wikimedia.org/wikipedia/commons/7/7c/PlayStation_button_R1.svg\"\n    export const BtnR1: PS2Button;\n}\n\n//% color=#FF5722 weight=95\nnamespace ps2controller {\n\n    /**\n     * whether a button is pressed\n     * @param button button to test.\n     */\n    //% blockId=isButtonPressed block=\"is ps2 button %button pressed\"\n    //% button.fieldEditor=\"gridpicker\"\n    export function isButtonPressed(button: PS2Button){return false;}\n\n    /**\n     * watch for button change.\n     * @param button button to change.\n     * @param edge which kind of change. eg: pins.Rising\n     */\n    //% blockId=ps2setWatch block=\"ps2 button %button %edge\"\n    //% button.fieldEditor=\"gridpicker\"\n    export function setWatch(button: PS2Button, edge: PinEdge, cb: ()=>void){}\n}\n\n//% color=#FF5722 weight=90\nnamespace debug{\n    export function log(msg: string){};\n}\n",
      "pxt.json": "{\n    \"name\": \"lolin32\",\n    \"description\": \"PXT lolin32 support module\",\n    \"files\": [\n        \"README.md\",\n        \"enums.d.ts\",\n        \"sims.d.ts\",\n        \"ns.ts\",\n        \"_locales/zh/lolin32-strings.json\",\n        \"_locales/zh/lolin32-jsdoc-strings.json\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"dependencies\": {},\n    \"targetVersions\": {\n        \"target\": \"2.0.1\"\n    }\n}",
      "sims.d.ts": "\ndeclare namespace pxsim.pin {\n    //% blockId=\"setPin\" block=\"set pin %pin to %val\"\n    //% pin.fieldEditor=\"gridpicker\"\n    // function setPin(pin: Lolin32Pin, val: boolean): void;\n}\n\ndeclare namespace pxsim.timer {\n    //% blockId=\"setTimeout\" block=\"run after %ms milliseconds\"\n    // export function setTimeout(callback: () => void, ms: number): void;\n}\n",
      "test.ts": ""
    }
  }
}