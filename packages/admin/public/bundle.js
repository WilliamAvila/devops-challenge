"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.2.0";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign2 = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign2(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement4(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps2 = type.defaultProps;
              for (propName in defaultProps2) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps2[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement3(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign2({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps2;
              if (element.type && element.type.defaultProps) {
                defaultProps2 = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps2 !== void 0) {
                    props[propName] = defaultProps2[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement2(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match2) {
              return escaperLookup[match2];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement2(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement2(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext6(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps2;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps2;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps2 = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef14(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext9(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState5(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef8(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect7(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect3(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect3(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback3(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo3(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle3(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign2({}, props, {
                    value: prevLog
                  }),
                  info: assign2({}, props, {
                    value: prevInfo
                  }),
                  warn: assign2({}, props, {
                    value: prevWarn
                  }),
                  error: assign2({}, props, {
                    value: prevError
                  }),
                  group: assign2({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign2({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign2({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix2;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix2 === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match2 = x.stack.trim().match(/\n( *(at )?)/);
                  prefix2 = match2 && match2[1] || "";
                }
              }
              return "\n" + prefix2 + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values3, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node2, parentType) {
            if (typeof node2 !== "object") {
              return;
            }
            if (isArray(node2)) {
              for (var i = 0; i < node2.length; i++) {
                var child = node2[i];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node2)) {
              if (node2._store) {
                node2._store.validated = true;
              }
            } else if (node2) {
              var iteratorFn = getIteratorFn(node2);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node2.entries) {
                  var iterator = iteratorFn.call(node2);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement4.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement3.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children3 = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children3;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext6;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef14;
          exports.isValidElement = isValidElement2;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback3;
          exports.useContext = useContext9;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect7;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle3;
          exports.useInsertionEffect = useInsertionEffect3;
          exports.useLayoutEffect = useLayoutEffect3;
          exports.useMemo = useMemo3;
          exports.useReducer = useReducer;
          exports.useRef = useRef8;
          exports.useState = useState5;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
  var require_react = __commonJS({
    "../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/formatMuiErrorMessage/formatMuiErrorMessage.js
  var require_formatMuiErrorMessage = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/formatMuiErrorMessage/formatMuiErrorMessage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = formatMuiErrorMessage;
      function formatMuiErrorMessage(code) {
        let url = "https://mui.com/production-error/?code=" + code;
        for (let i = 1; i < arguments.length; i += 1) {
          url += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/formatMuiErrorMessage/index.js
  var require_formatMuiErrorMessage2 = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/formatMuiErrorMessage/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _formatMuiErrorMessage.default;
        }
      });
      var _formatMuiErrorMessage = _interopRequireDefault(require_formatMuiErrorMessage());
    }
  });

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var init_extends = __esm({
    "../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/extends.js"() {
    }
  });

  // ../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
  function memoize(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache[arg] === void 0)
        cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var init_emotion_memoize_esm = __esm({
    "../../node_modules/.pnpm/@emotion+memoize@0.8.1/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"() {
    }
  });

  // ../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
  var reactPropsRegex, isPropValid;
  var init_emotion_is_prop_valid_esm = __esm({
    "../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"() {
      init_emotion_memoize_esm();
      reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      isPropValid = /* @__PURE__ */ memoize(
        function(prop) {
          return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
        }
        /* Z+1 */
      );
    }
  });

  // ../../node_modules/.pnpm/@emotion+sheet@1.2.2/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet;
  var init_emotion_sheet_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+sheet@1.2.2/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js"() {
      StyleSheet = /* @__PURE__ */ function() {
        function StyleSheet2(options) {
          var _this = this;
          this._insertTag = function(tag) {
            var before;
            if (_this.tags.length === 0) {
              if (_this.insertionPoint) {
                before = _this.insertionPoint.nextSibling;
              } else if (_this.prepend) {
                before = _this.container.firstChild;
              } else {
                before = _this.before;
              }
            } else {
              before = _this.tags[_this.tags.length - 1].nextSibling;
            }
            _this.container.insertBefore(tag, before);
            _this.tags.push(tag);
          };
          this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
          this.tags = [];
          this.ctr = 0;
          this.nonce = options.nonce;
          this.key = options.key;
          this.container = options.container;
          this.prepend = options.prepend;
          this.insertionPoint = options.insertionPoint;
          this.before = null;
        }
        var _proto = StyleSheet2.prototype;
        _proto.hydrate = function hydrate(nodes) {
          nodes.forEach(this._insertTag);
        };
        _proto.insert = function insert(rule) {
          if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
            this._insertTag(createStyleElement(this));
          }
          var tag = this.tags[this.tags.length - 1];
          if (true) {
            var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
            if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
              console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
            }
            this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
          }
          if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
              sheet.insertRule(rule, sheet.cssRules.length);
            } catch (e) {
              if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
                console.error('There was a problem inserting the following rule: "' + rule + '"', e);
              }
            }
          } else {
            tag.appendChild(document.createTextNode(rule));
          }
          this.ctr++;
        };
        _proto.flush = function flush() {
          this.tags.forEach(function(tag) {
            return tag.parentNode && tag.parentNode.removeChild(tag);
          });
          this.tags = [];
          this.ctr = 0;
          if (true) {
            this._alreadyInsertedOrderInsensitiveRule = false;
          }
        };
        return StyleSheet2;
      }();
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
  var MS, MOZ, WEBKIT, COMMENT, RULESET, DECLARATION, IMPORT, KEYFRAMES, LAYER;
  var init_Enum = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js"() {
      MS = "-ms-";
      MOZ = "-moz-";
      WEBKIT = "-webkit-";
      COMMENT = "comm";
      RULESET = "rule";
      DECLARATION = "decl";
      IMPORT = "@import";
      KEYFRAMES = "@keyframes";
      LAYER = "@layer";
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  var abs, from, assign;
  var init_Utility = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js"() {
      abs = Math.abs;
      from = String.fromCharCode;
      assign = Object.assign;
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
  function node(value, root, parent, type, props, children, length2) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }
  var line, column, length, position, character, characters;
  var init_Tokenizer = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js"() {
      init_Utility();
      line = 1;
      column = 1;
      length = 0;
      position = 0;
      character = 0;
      characters = "";
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k = 0; i < index; ++i)
      for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
        if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
          props[k++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root, parent, length2) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }
  var init_Parser = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js"() {
      init_Enum();
      init_Utility();
      init_Tokenizer();
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Prefixer.js
  var init_Prefixer = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Prefixer.js"() {
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i = 0; i < length2; i++)
      output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  var init_Serializer = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js"() {
      init_Enum();
      init_Utility();
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i = 0; i < length2; i++)
        output += collection[i](element, index, children, callback) || "";
      return output;
    };
  }
  var init_Middleware = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js"() {
      init_Utility();
    }
  });

  // ../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/index.js
  var init_stylis = __esm({
    "../../node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/index.js"() {
      init_Enum();
      init_Utility();
      init_Parser();
      init_Prefixer();
      init_Tokenizer();
      init_Serializer();
      init_Middleware();
    }
  });

  // ../../node_modules/.pnpm/@emotion+weak-memoize@0.3.1/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
  var weakMemoize;
  var init_emotion_weak_memoize_esm = __esm({
    "../../node_modules/.pnpm/@emotion+weak-memoize@0.3.1/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js"() {
      weakMemoize = function weakMemoize2(func) {
        var cache = /* @__PURE__ */ new WeakMap();
        return function(arg) {
          if (cache.has(arg)) {
            return cache.get(arg);
          }
          var ret = func(arg);
          cache.set(arg, ret);
          return ret;
        };
      };
    }
  });

  // ../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
  var emotion_cache_browser_esm_exports = {};
  __export(emotion_cache_browser_esm_exports, {
    default: () => createCache
  });
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
          }
        break;
      case 4949:
        if (charat(value, length2 + 1) !== 115)
          break;
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var identifierWithPointTracking, toRules, getRules, fixedElements, compat, removeLabel, ignoreFlag, isIgnoringComment, createUnsafeSelectorsAlarm, isImportRule, isPrependedWithRegularRules, nullifyElement, incorrectImportAlarm, prefixer, defaultStylisPlugins, createCache;
  var init_emotion_cache_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"() {
      init_emotion_sheet_browser_esm();
      init_stylis();
      init_emotion_weak_memoize_esm();
      init_emotion_memoize_esm();
      identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
        var previous = 0;
        var character2 = 0;
        while (true) {
          previous = character2;
          character2 = peek();
          if (previous === 38 && character2 === 12) {
            points[index] = 1;
          }
          if (token(character2)) {
            break;
          }
          next();
        }
        return slice(begin, position);
      };
      toRules = function toRules2(parsed, points) {
        var index = -1;
        var character2 = 44;
        do {
          switch (token(character2)) {
            case 0:
              if (character2 === 38 && peek() === 12) {
                points[index] = 1;
              }
              parsed[index] += identifierWithPointTracking(position - 1, points, index);
              break;
            case 2:
              parsed[index] += delimit(character2);
              break;
            case 4:
              if (character2 === 44) {
                parsed[++index] = peek() === 58 ? "&\f" : "";
                points[index] = parsed[index].length;
                break;
              }
            default:
              parsed[index] += from(character2);
          }
        } while (character2 = next());
        return parsed;
      };
      getRules = function getRules2(value, points) {
        return dealloc(toRules(alloc(value), points));
      };
      fixedElements = /* @__PURE__ */ new WeakMap();
      compat = function compat2(element) {
        if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
        // negative .length indicates that this rule has been already prefixed
        element.length < 1) {
          return;
        }
        var value = element.value, parent = element.parent;
        var isImplicitRule = element.column === parent.column && element.line === parent.line;
        while (parent.type !== "rule") {
          parent = parent.parent;
          if (!parent)
            return;
        }
        if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
          return;
        }
        if (isImplicitRule) {
          return;
        }
        fixedElements.set(element, true);
        var points = [];
        var rules = getRules(value, points);
        var parentRules = parent.props;
        for (var i = 0, k = 0; i < rules.length; i++) {
          for (var j = 0; j < parentRules.length; j++, k++) {
            element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
          }
        }
      };
      removeLabel = function removeLabel2(element) {
        if (element.type === "decl") {
          var value = element.value;
          if (
            // charcode for l
            value.charCodeAt(0) === 108 && // charcode for b
            value.charCodeAt(2) === 98
          ) {
            element["return"] = "";
            element.value = "";
          }
        }
      };
      ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
      isIgnoringComment = function isIgnoringComment2(element) {
        return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
      };
      createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
        return function(element, index, children) {
          if (element.type !== "rule" || cache.compat)
            return;
          var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
          if (unsafePseudoClasses) {
            var isNested = !!element.parent;
            var commentContainer = isNested ? element.parent.children : (
              // global rule at the root level
              children
            );
            for (var i = commentContainer.length - 1; i >= 0; i--) {
              var node2 = commentContainer[i];
              if (node2.line < element.line) {
                break;
              }
              if (node2.column < element.column) {
                if (isIgnoringComment(node2)) {
                  return;
                }
                break;
              }
            }
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
              console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
            });
          }
        };
      };
      isImportRule = function isImportRule2(element) {
        return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
      };
      isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
        for (var i = index - 1; i >= 0; i--) {
          if (!isImportRule(children[i])) {
            return true;
          }
        }
        return false;
      };
      nullifyElement = function nullifyElement2(element) {
        element.type = "";
        element.value = "";
        element["return"] = "";
        element.children = "";
        element.props = "";
      };
      incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
        if (!isImportRule(element)) {
          return;
        }
        if (element.parent) {
          console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
          nullifyElement(element);
        } else if (isPrependedWithRegularRules(index, children)) {
          console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
          nullifyElement(element);
        }
      };
      prefixer = function prefixer2(element, index, children, callback) {
        if (element.length > -1) {
          if (!element["return"])
            switch (element.type) {
              case DECLARATION:
                element["return"] = prefix(element.value, element.length);
                break;
              case KEYFRAMES:
                return serialize([copy(element, {
                  value: replace(element.value, "@", "@" + WEBKIT)
                })], callback);
              case RULESET:
                if (element.length)
                  return combine(element.props, function(value) {
                    switch (match(value, /(::plac\w+|:read-\w+)/)) {
                      case ":read-only":
                      case ":read-write":
                        return serialize([copy(element, {
                          props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                        })], callback);
                      case "::placeholder":
                        return serialize([copy(element, {
                          props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                        }), copy(element, {
                          props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                        }), copy(element, {
                          props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                        })], callback);
                    }
                    return "";
                  });
            }
        }
      };
      defaultStylisPlugins = [prefixer];
      createCache = function createCache2(options) {
        var key = options.key;
        if (!key) {
          throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
        }
        if (key === "css") {
          var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
          Array.prototype.forEach.call(ssrStyles, function(node2) {
            var dataEmotionAttribute = node2.getAttribute("data-emotion");
            if (dataEmotionAttribute.indexOf(" ") === -1) {
              return;
            }
            document.head.appendChild(node2);
            node2.setAttribute("data-s", "");
          });
        }
        var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
        if (true) {
          if (/[^a-z-]/.test(key)) {
            throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
          }
        }
        var inserted = {};
        var container;
        var nodesToHydrate = [];
        {
          container = options.container || document.head;
          Array.prototype.forEach.call(
            // this means we will ignore elements which don't have a space in them which
            // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
            document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
            function(node2) {
              var attrib = node2.getAttribute("data-emotion").split(" ");
              for (var i = 1; i < attrib.length; i++) {
                inserted[attrib[i]] = true;
              }
              nodesToHydrate.push(node2);
            }
          );
        }
        var _insert;
        var omnipresentPlugins = [compat, removeLabel];
        if (true) {
          omnipresentPlugins.push(createUnsafeSelectorsAlarm({
            get compat() {
              return cache.compat;
            }
          }), incorrectImportAlarm);
        }
        {
          var currentSheet;
          var finalizingPlugins = [stringify, true ? function(element) {
            if (!element.root) {
              if (element["return"]) {
                currentSheet.insert(element["return"]);
              } else if (element.value && element.type !== COMMENT) {
                currentSheet.insert(element.value + "{}");
              }
            }
          } : rulesheet(function(rule) {
            currentSheet.insert(rule);
          })];
          var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
          var stylis = function stylis2(styles) {
            return serialize(compile(styles), serializer);
          };
          _insert = function insert(selector, serialized, sheet, shouldCache) {
            currentSheet = sheet;
            if (serialized.map !== void 0) {
              currentSheet = {
                insert: function insert2(rule) {
                  sheet.insert(rule + serialized.map);
                }
              };
            }
            stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
            if (shouldCache) {
              cache.inserted[serialized.name] = true;
            }
          };
        }
        var cache = {
          key,
          sheet: new StyleSheet({
            key,
            container,
            nonce: options.nonce,
            speedy: options.speedy,
            prepend: options.prepend,
            insertionPoint: options.insertionPoint
          }),
          nonce: options.nonce,
          inserted,
          registered: {},
          insert: _insert
        };
        cache.sheet.hydrate(nodesToHydrate);
        return cache;
      };
    }
  });

  // ../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment4 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment4;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // ../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // ../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      var reactIs = require_react_is();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
            }
          }
          var keys = getOwnPropertyNames(sourceComponent);
          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e) {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics2;
    }
  });

  // ../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js
  var import_hoist_non_react_statics, hoistNonReactStatics;
  var init_emotion_react_isolated_hnrs_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js"() {
      import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
      hoistNonReactStatics = function(targetComponent, sourceComponent) {
        return (0, import_hoist_non_react_statics.default)(targetComponent, sourceComponent);
      };
    }
  });

  // ../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var isBrowser, registerStyles, insertStyles;
  var init_emotion_utils_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"() {
      isBrowser = true;
      registerStyles = function registerStyles2(cache, serialized, isStringTag2) {
        var className = cache.key + "-" + serialized.name;
        if (
          // we only need to add the styles to the registered cache if the
          // class name could be used further down
          // the tree but if it's a string tag, we know it won't
          // so we don't have to add it to registered cache.
          // this improves memory usage since we can avoid storing the whole style string
          (isStringTag2 === false || // we need to always store it if we're in compat mode and
          // in node since emotion-server relies on whether a style is in
          // the registered cache to know whether a style is global or not
          // also, note that this check will be dead code eliminated in the browser
          isBrowser === false) && cache.registered[className] === void 0
        ) {
          cache.registered[className] = serialized.styles;
        }
      };
      insertStyles = function insertStyles2(cache, serialized, isStringTag2) {
        registerStyles(cache, serialized, isStringTag2);
        var className = cache.key + "-" + serialized.name;
        if (cache.inserted[serialized.name] === void 0) {
          var current = serialized;
          do {
            cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
            current = current.next;
          } while (current !== void 0);
        }
      };
    }
  });

  // ../../node_modules/.pnpm/@emotion+hash@0.9.1/node_modules/@emotion/hash/dist/emotion-hash.esm.js
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }
  var init_emotion_hash_esm = __esm({
    "../../node_modules/.pnpm/@emotion+hash@0.9.1/node_modules/@emotion/hash/dist/emotion-hash.esm.js"() {
    }
  });

  // ../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
  var unitlessKeys;
  var init_emotion_unitless_esm = __esm({
    "../../node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js"() {
      unitlessKeys = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        // SVG-related properties
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
    }
  });

  // ../../node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
        throw new Error(noComponentSelectorMessage);
      }
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next2 = interpolation.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (interpolation.map !== void 0) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
      case "string":
        if (true) {
          var matched = [];
          var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
            var fakeVarName = "animation" + matched.length;
            matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
            return "${" + fakeVarName + "}";
          });
          if (matched.length) {
            console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
          }
        }
        break;
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== void 0 ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && true) {
            throw new Error(noComponentSelectorMessage);
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (_key) {
              case "animation":
              case "animationName": {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                if (_key === "undefined") {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var ILLEGAL_ESCAPE_SEQUENCE_ERROR, UNDEFINED_AS_OBJECT_KEY_ERROR, hyphenateRegex, animationRegex, isCustomProperty, isProcessableValue, processStyleName, processStyleValue, contentValuePattern, contentValues, oldProcessStyleValue, msPattern, hyphenPattern, hyphenatedCache, noComponentSelectorMessage, labelPattern, sourceMapPattern, cursor, serializeStyles;
  var init_emotion_serialize_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"() {
      init_emotion_hash_esm();
      init_emotion_unitless_esm();
      init_emotion_memoize_esm();
      ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
      UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
      hyphenateRegex = /[A-Z]|^ms/g;
      animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
      isCustomProperty = function isCustomProperty2(property) {
        return property.charCodeAt(1) === 45;
      };
      isProcessableValue = function isProcessableValue2(value) {
        return value != null && typeof value !== "boolean";
      };
      processStyleName = /* @__PURE__ */ memoize(function(styleName) {
        return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
      });
      processStyleValue = function processStyleValue2(key, value) {
        switch (key) {
          case "animation":
          case "animationName": {
            if (typeof value === "string") {
              return value.replace(animationRegex, function(match2, p1, p2) {
                cursor = {
                  name: p1,
                  styles: p2,
                  next: cursor
                };
                return p1;
              });
            }
          }
        }
        if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
          return value + "px";
        }
        return value;
      };
      if (true) {
        contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
        contentValues = ["normal", "none", "initial", "inherit", "unset"];
        oldProcessStyleValue = processStyleValue;
        msPattern = /^-ms-/;
        hyphenPattern = /-(.)/g;
        hyphenatedCache = {};
        processStyleValue = function processStyleValue3(key, value) {
          if (key === "content") {
            if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
              throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
            }
          }
          var processed = oldProcessStyleValue(key, value);
          if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
            hyphenatedCache[key] = true;
            console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
              return _char.toUpperCase();
            }) + "?");
          }
          return processed;
        };
      }
      noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
      labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      if (true) {
        sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
      }
      serializeStyles = function serializeStyles2(args, registered, mergedProps) {
        if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
          return args[0];
        }
        var stringMode = true;
        var styles = "";
        cursor = void 0;
        var strings = args[0];
        if (strings == null || strings.raw === void 0) {
          stringMode = false;
          styles += handleInterpolation(mergedProps, registered, strings);
        } else {
          if (strings[0] === void 0) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
          }
          styles += strings[0];
        }
        for (var i = 1; i < args.length; i++) {
          styles += handleInterpolation(mergedProps, registered, args[i]);
          if (stringMode) {
            if (strings[i] === void 0) {
              console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles += strings[i];
          }
        }
        var sourceMap;
        if (true) {
          styles = styles.replace(sourceMapPattern, function(match3) {
            sourceMap = match3;
            return "";
          });
        }
        labelPattern.lastIndex = 0;
        var identifierName = "";
        var match2;
        while ((match2 = labelPattern.exec(styles)) !== null) {
          identifierName += "-" + // $FlowFixMe we know it's not null
          match2[1];
        }
        var name = murmur2(styles) + identifierName;
        if (true) {
          return {
            name,
            styles,
            map: sourceMap,
            next: cursor,
            toString: function toString() {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            }
          };
        }
        return {
          name,
          styles,
          next: cursor
        };
      };
    }
  });

  // ../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
  var React, syncFallback, useInsertionEffect2, useInsertionEffectAlwaysWithSyncFallback, useInsertionEffectWithLayoutFallback;
  var init_emotion_use_insertion_effect_with_fallbacks_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"() {
      React = __toESM(require_react());
      syncFallback = function syncFallback2(create) {
        return create();
      };
      useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
      useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;
      useInsertionEffectWithLayoutFallback = useInsertionEffect2 || React.useLayoutEffect;
    }
  });

  // ../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js
  function withTheme(Component) {
    var componentName = Component.displayName || Component.name || "Component";
    var render = function render2(props, ref) {
      var theme = React2.useContext(ThemeContext);
      return /* @__PURE__ */ React2.createElement(Component, _extends({
        theme,
        ref
      }, props));
    };
    var WithTheme = /* @__PURE__ */ React2.forwardRef(render);
    WithTheme.displayName = "WithTheme(" + componentName + ")";
    return hoistNonReactStatics(WithTheme, Component);
  }
  var React2, import_react, isBrowser2, hasOwn, EmotionCacheContext, CacheProvider, __unsafe_useEmotionCache, withEmotionCache, ThemeContext, useTheme, getTheme, createCacheWithTheme, ThemeProvider, getLastPart, getFunctionNameFromStackTraceLine, internalReactFunctionNames, sanitizeIdentifier, getLabelFromStackTrace, typePropName, labelPropName, createEmotionProps, Insertion, Emotion, Emotion$1;
  var init_emotion_element_43c6fea0_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"() {
      React2 = __toESM(require_react());
      import_react = __toESM(require_react());
      init_emotion_cache_browser_esm();
      init_extends();
      init_emotion_weak_memoize_esm();
      init_emotion_react_isolated_hnrs_browser_esm();
      init_emotion_utils_browser_esm();
      init_emotion_serialize_browser_esm();
      init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
      isBrowser2 = true;
      hasOwn = {}.hasOwnProperty;
      EmotionCacheContext = /* @__PURE__ */ React2.createContext(
        // we're doing this to avoid preconstruct's dead code elimination in this one case
        // because this module is primarily intended for the browser and node
        // but it's also required in react native and similar environments sometimes
        // and we could have a special build just for that
        // but this is much easier and the native packages
        // might use a different theme context in the future anyway
        typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
          key: "css"
        }) : null
      );
      if (true) {
        EmotionCacheContext.displayName = "EmotionCacheContext";
      }
      CacheProvider = EmotionCacheContext.Provider;
      __unsafe_useEmotionCache = function useEmotionCache() {
        return (0, import_react.useContext)(EmotionCacheContext);
      };
      withEmotionCache = function withEmotionCache2(func) {
        return /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
          var cache = (0, import_react.useContext)(EmotionCacheContext);
          return func(props, cache, ref);
        });
      };
      if (!isBrowser2) {
        withEmotionCache = function withEmotionCache3(func) {
          return function(props) {
            var cache = (0, import_react.useContext)(EmotionCacheContext);
            if (cache === null) {
              cache = createCache({
                key: "css"
              });
              return /* @__PURE__ */ React2.createElement(EmotionCacheContext.Provider, {
                value: cache
              }, func(props, cache));
            } else {
              return func(props, cache);
            }
          };
        };
      }
      ThemeContext = /* @__PURE__ */ React2.createContext({});
      if (true) {
        ThemeContext.displayName = "EmotionThemeContext";
      }
      useTheme = function useTheme2() {
        return React2.useContext(ThemeContext);
      };
      getTheme = function getTheme2(outerTheme, theme) {
        if (typeof theme === "function") {
          var mergedTheme = theme(outerTheme);
          if (mergedTheme == null || typeof mergedTheme !== "object" || Array.isArray(mergedTheme)) {
            throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
          }
          return mergedTheme;
        }
        if (theme == null || typeof theme !== "object" || Array.isArray(theme)) {
          throw new Error("[ThemeProvider] Please make your theme prop a plain object");
        }
        return _extends({}, outerTheme, theme);
      };
      createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
        return weakMemoize(function(theme) {
          return getTheme(outerTheme, theme);
        });
      });
      ThemeProvider = function ThemeProvider2(props) {
        var theme = React2.useContext(ThemeContext);
        if (props.theme !== theme) {
          theme = createCacheWithTheme(theme)(props.theme);
        }
        return /* @__PURE__ */ React2.createElement(ThemeContext.Provider, {
          value: theme
        }, props.children);
      };
      getLastPart = function getLastPart2(functionName) {
        var parts = functionName.split(".");
        return parts[parts.length - 1];
      };
      getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line2) {
        var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
        if (match2)
          return getLastPart(match2[1]);
        match2 = /^([A-Za-z0-9$.]+)@/.exec(line2);
        if (match2)
          return getLastPart(match2[1]);
        return void 0;
      };
      internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);
      sanitizeIdentifier = function sanitizeIdentifier2(identifier2) {
        return identifier2.replace(/\$/g, "-");
      };
      getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
        if (!stackTrace)
          return void 0;
        var lines = stackTrace.split("\n");
        for (var i = 0; i < lines.length; i++) {
          var functionName = getFunctionNameFromStackTraceLine(lines[i]);
          if (!functionName)
            continue;
          if (internalReactFunctionNames.has(functionName))
            break;
          if (/^[A-Z]/.test(functionName))
            return sanitizeIdentifier(functionName);
        }
        return void 0;
      };
      typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
      labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
      createEmotionProps = function createEmotionProps2(type, props) {
        if (typeof props.css === "string" && // check if there is a css declaration
        props.css.indexOf(":") !== -1) {
          throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
        }
        var newProps = {};
        for (var key in props) {
          if (hasOwn.call(props, key)) {
            newProps[key] = props[key];
          }
        }
        newProps[typePropName] = type;
        if (!!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
          var label = getLabelFromStackTrace(new Error().stack);
          if (label)
            newProps[labelPropName] = label;
        }
        return newProps;
      };
      Insertion = function Insertion2(_ref) {
        var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
        registerStyles(cache, serialized, isStringTag2);
        useInsertionEffectAlwaysWithSyncFallback(function() {
          return insertStyles(cache, serialized, isStringTag2);
        });
        return null;
      };
      Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
        var cssProp = props.css;
        if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
          cssProp = cache.registered[cssProp];
        }
        var WrappedComponent = props[typePropName];
        var registeredStyles = [cssProp];
        var className = "";
        if (typeof props.className === "string") {
          className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(registeredStyles, void 0, React2.useContext(ThemeContext));
        if (serialized.name.indexOf("-") === -1) {
          var labelFromStack = props[labelPropName];
          if (labelFromStack) {
            serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
          }
        }
        className += cache.key + "-" + serialized.name;
        var newProps = {};
        for (var key in props) {
          if (hasOwn.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
            newProps[key] = props[key];
          }
        }
        newProps.ref = ref;
        newProps.className = className;
        return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Insertion, {
          cache,
          serialized,
          isStringTag: typeof WrappedComponent === "string"
        }), /* @__PURE__ */ React2.createElement(WrappedComponent, newProps));
      });
      if (true) {
        Emotion.displayName = "EmotionCssPropInternal";
      }
      Emotion$1 = Emotion;
    }
  });

  // ../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
  var emotion_react_browser_esm_exports = {};
  __export(emotion_react_browser_esm_exports, {
    CacheProvider: () => CacheProvider,
    ClassNames: () => ClassNames,
    Global: () => Global,
    ThemeContext: () => ThemeContext,
    ThemeProvider: () => ThemeProvider,
    __unsafe_useEmotionCache: () => __unsafe_useEmotionCache,
    createElement: () => jsx,
    css: () => css,
    jsx: () => jsx,
    keyframes: () => keyframes,
    useTheme: () => useTheme,
    withEmotionCache: () => withEmotionCache,
    withTheme: () => withTheme
  });
  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  function merge(registered, css3, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css3(registeredStyles);
  }
  var React3, import_hoist_non_react_statics2, pkg, jsx, warnedAboutCssPropForGlobal, Global, keyframes, classnames, Insertion3, ClassNames, isBrowser3, isTestEnv, globalContext, globalKey;
  var init_emotion_react_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"() {
      init_emotion_element_43c6fea0_browser_esm();
      init_emotion_element_43c6fea0_browser_esm();
      React3 = __toESM(require_react());
      init_emotion_utils_browser_esm();
      init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
      init_emotion_serialize_browser_esm();
      init_emotion_cache_browser_esm();
      init_extends();
      init_emotion_weak_memoize_esm();
      import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
      pkg = {
        name: "@emotion/react",
        version: "11.11.4",
        main: "dist/emotion-react.cjs.js",
        module: "dist/emotion-react.esm.js",
        browser: {
          "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
        },
        exports: {
          ".": {
            module: {
              worker: "./dist/emotion-react.worker.esm.js",
              browser: "./dist/emotion-react.browser.esm.js",
              "default": "./dist/emotion-react.esm.js"
            },
            "import": "./dist/emotion-react.cjs.mjs",
            "default": "./dist/emotion-react.cjs.js"
          },
          "./jsx-runtime": {
            module: {
              worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
              browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
              "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
            },
            "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
            "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
          },
          "./_isolated-hnrs": {
            module: {
              worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
              browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
              "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
            },
            "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
            "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
          },
          "./jsx-dev-runtime": {
            module: {
              worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
              browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
              "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
            },
            "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
            "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
          },
          "./package.json": "./package.json",
          "./types/css-prop": "./types/css-prop.d.ts",
          "./macro": {
            types: {
              "import": "./macro.d.mts",
              "default": "./macro.d.ts"
            },
            "default": "./macro.js"
          }
        },
        types: "types/index.d.ts",
        files: [
          "src",
          "dist",
          "jsx-runtime",
          "jsx-dev-runtime",
          "_isolated-hnrs",
          "types/*.d.ts",
          "macro.*"
        ],
        sideEffects: false,
        author: "Emotion Contributors",
        license: "MIT",
        scripts: {
          "test:typescript": "dtslint types"
        },
        dependencies: {
          "@babel/runtime": "^7.18.3",
          "@emotion/babel-plugin": "^11.11.0",
          "@emotion/cache": "^11.11.0",
          "@emotion/serialize": "^1.1.3",
          "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
          "@emotion/utils": "^1.2.1",
          "@emotion/weak-memoize": "^0.3.1",
          "hoist-non-react-statics": "^3.3.1"
        },
        peerDependencies: {
          react: ">=16.8.0"
        },
        peerDependenciesMeta: {
          "@types/react": {
            optional: true
          }
        },
        devDependencies: {
          "@definitelytyped/dtslint": "0.0.112",
          "@emotion/css": "11.11.2",
          "@emotion/css-prettifier": "1.1.3",
          "@emotion/server": "11.11.0",
          "@emotion/styled": "11.11.0",
          "html-tag-names": "^1.1.2",
          react: "16.14.0",
          "svg-tag-names": "^1.1.1",
          typescript: "^4.5.5"
        },
        repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
        publishConfig: {
          access: "public"
        },
        "umd:main": "dist/emotion-react.umd.min.js",
        preconstruct: {
          entrypoints: [
            "./index.js",
            "./jsx-runtime.js",
            "./jsx-dev-runtime.js",
            "./_isolated-hnrs.js"
          ],
          umdName: "emotionReact",
          exports: {
            envConditions: [
              "browser",
              "worker"
            ],
            extra: {
              "./types/css-prop": "./types/css-prop.d.ts",
              "./macro": {
                types: {
                  "import": "./macro.d.mts",
                  "default": "./macro.d.ts"
                },
                "default": "./macro.js"
              }
            }
          }
        }
      };
      jsx = function jsx2(type, props) {
        var args = arguments;
        if (props == null || !hasOwn.call(props, "css")) {
          return React3.createElement.apply(void 0, args);
        }
        var argsLength = args.length;
        var createElementArgArray = new Array(argsLength);
        createElementArgArray[0] = Emotion$1;
        createElementArgArray[1] = createEmotionProps(type, props);
        for (var i = 2; i < argsLength; i++) {
          createElementArgArray[i] = args[i];
        }
        return React3.createElement.apply(null, createElementArgArray);
      };
      warnedAboutCssPropForGlobal = false;
      Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
        if (!warnedAboutCssPropForGlobal && // check for className as well since the user is
        // probably using the custom createElement which
        // means it will be turned into a className prop
        // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
        (props.className || props.css)) {
          console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
          warnedAboutCssPropForGlobal = true;
        }
        var styles = props.styles;
        var serialized = serializeStyles([styles], void 0, React3.useContext(ThemeContext));
        if (!isBrowser2) {
          var _ref;
          var serializedNames = serialized.name;
          var serializedStyles = serialized.styles;
          var next2 = serialized.next;
          while (next2 !== void 0) {
            serializedNames += " " + next2.name;
            serializedStyles += next2.styles;
            next2 = next2.next;
          }
          var shouldCache = cache.compat === true;
          var rules = cache.insert("", {
            name: serializedNames,
            styles: serializedStyles
          }, cache.sheet, shouldCache);
          if (shouldCache) {
            return null;
          }
          return /* @__PURE__ */ React3.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = cache.sheet.nonce, _ref));
        }
        var sheetRef = React3.useRef();
        useInsertionEffectWithLayoutFallback(function() {
          var key = cache.key + "-global";
          var sheet = new cache.sheet.constructor({
            key,
            nonce: cache.sheet.nonce,
            container: cache.sheet.container,
            speedy: cache.sheet.isSpeedy
          });
          var rehydrating = false;
          var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
          if (cache.sheet.tags.length) {
            sheet.before = cache.sheet.tags[0];
          }
          if (node2 !== null) {
            rehydrating = true;
            node2.setAttribute("data-emotion", key);
            sheet.hydrate([node2]);
          }
          sheetRef.current = [sheet, rehydrating];
          return function() {
            sheet.flush();
          };
        }, [cache]);
        useInsertionEffectWithLayoutFallback(function() {
          var sheetRefCurrent = sheetRef.current;
          var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
          if (rehydrating) {
            sheetRefCurrent[1] = false;
            return;
          }
          if (serialized.next !== void 0) {
            insertStyles(cache, serialized.next, true);
          }
          if (sheet.tags.length) {
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            sheet.before = element;
            sheet.flush();
          }
          cache.insert("", serialized, sheet, false);
        }, [cache, serialized.name]);
        return null;
      });
      if (true) {
        Global.displayName = "EmotionGlobal";
      }
      keyframes = function keyframes2() {
        var insertable = css.apply(void 0, arguments);
        var name = "animation-" + insertable.name;
        return {
          name,
          styles: "@keyframes " + name + "{" + insertable.styles + "}",
          anim: 1,
          toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          }
        };
      };
      classnames = function classnames2(args) {
        var len = args.length;
        var i = 0;
        var cls = "";
        for (; i < len; i++) {
          var arg = args[i];
          if (arg == null)
            continue;
          var toAdd = void 0;
          switch (typeof arg) {
            case "boolean":
              break;
            case "object": {
              if (Array.isArray(arg)) {
                toAdd = classnames2(arg);
              } else {
                if (arg.styles !== void 0 && arg.name !== void 0) {
                  console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
                }
                toAdd = "";
                for (var k in arg) {
                  if (arg[k] && k) {
                    toAdd && (toAdd += " ");
                    toAdd += k;
                  }
                }
              }
              break;
            }
            default: {
              toAdd = arg;
            }
          }
          if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
          }
        }
        return cls;
      };
      Insertion3 = function Insertion4(_ref) {
        var cache = _ref.cache, serializedArr = _ref.serializedArr;
        useInsertionEffectAlwaysWithSyncFallback(function() {
          for (var i = 0; i < serializedArr.length; i++) {
            insertStyles(cache, serializedArr[i], false);
          }
        });
        return null;
      };
      ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
        var hasRendered = false;
        var serializedArr = [];
        var css3 = function css4() {
          if (hasRendered && true) {
            throw new Error("css can only be used during render");
          }
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var serialized = serializeStyles(args, cache.registered);
          serializedArr.push(serialized);
          registerStyles(cache, serialized, false);
          return cache.key + "-" + serialized.name;
        };
        var cx = function cx2() {
          if (hasRendered && true) {
            throw new Error("cx can only be used during render");
          }
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return merge(cache.registered, css3, classnames(args));
        };
        var content = {
          css: css3,
          cx,
          theme: React3.useContext(ThemeContext)
        };
        var ele = props.children(content);
        hasRendered = true;
        return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Insertion3, {
          cache,
          serializedArr
        }), ele);
      });
      if (true) {
        ClassNames.displayName = "EmotionClassNames";
      }
      if (true) {
        isBrowser3 = true;
        isTestEnv = typeof jest !== "undefined" || typeof vi !== "undefined";
        if (isBrowser3 && !isTestEnv) {
          globalContext = // $FlowIgnore
          typeof globalThis !== "undefined" ? globalThis : isBrowser3 ? window : global;
          globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
          if (globalContext[globalKey]) {
            console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
          }
          globalContext[globalKey] = true;
        }
      }
    }
  });

  // ../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
  var React4, testOmitPropsOnStringTag, testOmitPropsOnComponent, getDefaultShouldForwardProp, composeShouldForwardProps, ILLEGAL_ESCAPE_SEQUENCE_ERROR2, Insertion5, createStyled;
  var init_emotion_styled_base_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"() {
      init_extends();
      React4 = __toESM(require_react());
      init_emotion_is_prop_valid_esm();
      init_emotion_react_browser_esm();
      init_emotion_utils_browser_esm();
      init_emotion_serialize_browser_esm();
      init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
      testOmitPropsOnStringTag = isPropValid;
      testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
        return key !== "theme";
      };
      getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
        return typeof tag === "string" && // 96 is one less than the char code
        // for "a" so this is checking that
        // it's a lowercase character
        tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
      };
      composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
        var shouldForwardProp2;
        if (options) {
          var optionsShouldForwardProp = options.shouldForwardProp;
          shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
          } : optionsShouldForwardProp;
        }
        if (typeof shouldForwardProp2 !== "function" && isReal) {
          shouldForwardProp2 = tag.__emotion_forwardProp;
        }
        return shouldForwardProp2;
      };
      ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
      Insertion5 = function Insertion6(_ref) {
        var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
        registerStyles(cache, serialized, isStringTag2);
        useInsertionEffectAlwaysWithSyncFallback(function() {
          return insertStyles(cache, serialized, isStringTag2);
        });
        return null;
      };
      createStyled = function createStyled2(tag, options) {
        if (true) {
          if (tag === void 0) {
            throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
          }
        }
        var isReal = tag.__emotion_real === tag;
        var baseTag = isReal && tag.__emotion_base || tag;
        var identifierName;
        var targetClassName;
        if (options !== void 0) {
          identifierName = options.label;
          targetClassName = options.target;
        }
        var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
        var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
        var shouldUseAs = !defaultShouldForwardProp("as");
        return function() {
          var args = arguments;
          var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
          if (identifierName !== void 0) {
            styles.push("label:" + identifierName + ";");
          }
          if (args[0] == null || args[0].raw === void 0) {
            styles.push.apply(styles, args);
          } else {
            if (args[0][0] === void 0) {
              console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
            }
            styles.push(args[0][0]);
            var len = args.length;
            var i = 1;
            for (; i < len; i++) {
              if (args[0][i] === void 0) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
              }
              styles.push(args[i], args[0][i]);
            }
          }
          var Styled = withEmotionCache(function(props, cache, ref) {
            var FinalTag = shouldUseAs && props.as || baseTag;
            var className = "";
            var classInterpolations = [];
            var mergedProps = props;
            if (props.theme == null) {
              mergedProps = {};
              for (var key in props) {
                mergedProps[key] = props[key];
              }
              mergedProps.theme = React4.useContext(ThemeContext);
            }
            if (typeof props.className === "string") {
              className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
            } else if (props.className != null) {
              className = props.className + " ";
            }
            var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name;
            if (targetClassName !== void 0) {
              className += " " + targetClassName;
            }
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
            var newProps = {};
            for (var _key in props) {
              if (shouldUseAs && _key === "as")
                continue;
              if (
                // $FlowFixMe
                finalShouldForwardProp(_key)
              ) {
                newProps[_key] = props[_key];
              }
            }
            newProps.className = className;
            newProps.ref = ref;
            return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(Insertion5, {
              cache,
              serialized,
              isStringTag: typeof FinalTag === "string"
            }), /* @__PURE__ */ React4.createElement(FinalTag, newProps));
          });
          Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
          Styled.defaultProps = tag.defaultProps;
          Styled.__emotion_real = Styled;
          Styled.__emotion_base = baseTag;
          Styled.__emotion_styles = styles;
          Styled.__emotion_forwardProp = shouldForwardProp2;
          Object.defineProperty(Styled, "toString", {
            value: function value() {
              if (targetClassName === void 0 && true) {
                return "NO_COMPONENT_SELECTOR";
              }
              return "." + targetClassName;
            }
          });
          Styled.withComponent = function(nextTag, nextOptions) {
            return createStyled2(nextTag, _extends({}, options, nextOptions, {
              shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
            })).apply(void 0, styles);
          };
          return Styled;
        };
      };
    }
  });

  // ../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
  var emotion_styled_browser_esm_exports = {};
  __export(emotion_styled_browser_esm_exports, {
    default: () => newStyled
  });
  var import_react3, tags, newStyled;
  var init_emotion_styled_browser_esm = __esm({
    "../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.2.79_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"() {
      init_emotion_styled_base_browser_esm();
      init_extends();
      import_react3 = __toESM(require_react());
      init_emotion_is_prop_valid_esm();
      init_emotion_utils_browser_esm();
      init_emotion_serialize_browser_esm();
      init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
      tags = [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        // SVG
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan"
      ];
      newStyled = createStyled.bind();
      tags.forEach(function(tagName) {
        newStyled[tagName] = newStyled(tagName);
      });
    }
  });

  // ../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from2;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from2 = Object(arguments[s]);
          for (var key in from2) {
            if (hasOwnProperty.call(from2, key)) {
              to[key] = from2[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from2);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from2, symbols[i])) {
                to[symbols[i]] = from2[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values3, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign2 = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement2, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement2(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign2({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement2(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var React30 = require_react();
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React30.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var assign2 = Object.assign;
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign2({}, props, {
                    value: prevLog
                  }),
                  info: assign2({}, props, {
                    value: prevInfo
                  }),
                  warn: assign2({}, props, {
                    value: prevWarn
                  }),
                  error: assign2({}, props, {
                    value: prevError
                  }),
                  group: assign2({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign2({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign2({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix2;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix2 === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match2 = x.stack.trim().match(/\n( *(at )?)/);
                  prefix2 = match2 && match2[1] || "";
                }
              }
              return "\n" + prefix2 + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values3, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          var didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type, config, maybeKey, source, self) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                {
                  checkKeyStringCoercion(maybeKey);
                }
                key = "" + maybeKey;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config, self);
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
              if (type && type.defaultProps) {
                var defaultProps2 = type.defaultProps;
                for (propName in defaultProps2) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps2[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement2(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              if (source !== void 0) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
              }
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node2, parentType) {
            {
              if (typeof node2 !== "object") {
                return;
              }
              if (isArray(node2)) {
                for (var i = 0; i < node2.length; i++) {
                  var child = node2[i];
                  if (isValidElement2(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement2(node2)) {
                if (node2._store) {
                  node2._store.validated = true;
                }
              } else if (node2) {
                var iteratorFn = getIteratorFn(node2);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node2.entries) {
                    var iterator = iteratorFn.call(node2);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement2(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
              var validType = isValidElementType(type);
              if (!validType) {
                var info = "";
                if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum(source);
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                  typeString = "null";
                } else if (isArray(type)) {
                  typeString = "array";
                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type, props, key, source, self);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children = props.children;
                if (children !== void 0) {
                  if (isStaticChildren) {
                    if (isArray(children)) {
                      for (var i = 0; i < children.length; i++) {
                        validateChildKeys(children[i], type);
                      }
                      if (Object.freeze) {
                        Object.freeze(children);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children, type);
                  }
                }
              }
              if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, false);
            }
          }
          var jsx4 = jsxWithValidationDynamic;
          var jsxs2 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx4;
          exports.jsxs = jsxs2;
        })();
      }
    }
  });

  // ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/StyledEngineProvider/StyledEngineProvider.js
  var require_StyledEngineProvider = __commonJS({
    "../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/StyledEngineProvider/StyledEngineProvider.js"(exports) {
      "use strict";
      "use client";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = StyledEngineProvider2;
      var React30 = _interopRequireWildcard(require_react());
      var _propTypes = _interopRequireDefault(require_prop_types());
      var _react2 = (init_emotion_react_browser_esm(), __toCommonJS(emotion_react_browser_esm_exports));
      var _cache = _interopRequireDefault((init_emotion_cache_browser_esm(), __toCommonJS(emotion_cache_browser_esm_exports)));
      var _jsxRuntime = require_jsx_runtime();
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap)
          return null;
        var r2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(e2) {
          return e2 ? t : r2;
        })(e);
      }
      function _interopRequireWildcard(e, r2) {
        if (!r2 && e && e.__esModule)
          return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
          return { default: e };
        var t = _getRequireWildcardCache(r2);
        if (t && t.has(e))
          return t.get(e);
        var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
        return n.default = e, t && t.set(e, n), n;
      }
      var cache;
      if (typeof document === "object") {
        cache = (0, _cache.default)({
          key: "css",
          prepend: true
        });
      }
      function StyledEngineProvider2(props) {
        const {
          injectFirst,
          children
        } = props;
        return injectFirst && cache ? /* @__PURE__ */ (0, _jsxRuntime.jsx)(_react2.CacheProvider, {
          value: cache,
          children
        }) : children;
      }
      true ? StyledEngineProvider2.propTypes = {
        /**
         * Your component tree.
         */
        children: _propTypes.default.node,
        /**
         * By default, the styles are injected last in the <head> element of the page.
         * As a result, they gain more specificity than any other style sheet.
         * If you want to override MUI's styles, set this prop.
         */
        injectFirst: _propTypes.default.bool
      } : void 0;
    }
  });

  // ../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/StyledEngineProvider/index.js
  var require_StyledEngineProvider2 = __commonJS({
    "../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/StyledEngineProvider/index.js"(exports) {
      "use strict";
      "use client";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _StyledEngineProvider.default;
        }
      });
      var _StyledEngineProvider = _interopRequireDefault(require_StyledEngineProvider());
    }
  });

  // ../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/GlobalStyles/GlobalStyles.js
  var require_GlobalStyles = __commonJS({
    "../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/GlobalStyles/GlobalStyles.js"(exports) {
      "use strict";
      "use client";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = GlobalStyles;
      var React30 = _interopRequireWildcard(require_react());
      var _propTypes = _interopRequireDefault(require_prop_types());
      var _react2 = (init_emotion_react_browser_esm(), __toCommonJS(emotion_react_browser_esm_exports));
      var _jsxRuntime = require_jsx_runtime();
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap)
          return null;
        var r2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(e2) {
          return e2 ? t : r2;
        })(e);
      }
      function _interopRequireWildcard(e, r2) {
        if (!r2 && e && e.__esModule)
          return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
          return { default: e };
        var t = _getRequireWildcardCache(r2);
        if (t && t.has(e))
          return t.get(e);
        var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
        return n.default = e, t && t.set(e, n), n;
      }
      function isEmpty2(obj) {
        return obj === void 0 || obj === null || Object.keys(obj).length === 0;
      }
      function GlobalStyles(props) {
        const {
          styles,
          defaultTheme: defaultTheme4 = {}
        } = props;
        const globalStyles = typeof styles === "function" ? (themeInput) => styles(isEmpty2(themeInput) ? defaultTheme4 : themeInput) : styles;
        return /* @__PURE__ */ (0, _jsxRuntime.jsx)(_react2.Global, {
          styles: globalStyles
        });
      }
      true ? GlobalStyles.propTypes = {
        defaultTheme: _propTypes.default.object,
        styles: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object, _propTypes.default.func])
      } : void 0;
    }
  });

  // ../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/GlobalStyles/index.js
  var require_GlobalStyles2 = __commonJS({
    "../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/GlobalStyles/index.js"(exports) {
      "use strict";
      "use client";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _GlobalStyles.default;
        }
      });
      var _GlobalStyles = _interopRequireDefault(require_GlobalStyles());
    }
  });

  // ../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/index.js
  var require_node = __commonJS({
    "../../node_modules/.pnpm/@mui+styled-engine@5.15.14_@emotion+react@11.11.4_@emotion+styled@11.11.5_react@18.2.0/node_modules/@mui/styled-engine/node/index.js"(exports) {
      "use strict";
      "use client";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "GlobalStyles", {
        enumerable: true,
        get: function() {
          return _GlobalStyles.default;
        }
      });
      Object.defineProperty(exports, "StyledEngineProvider", {
        enumerable: true,
        get: function() {
          return _StyledEngineProvider.default;
        }
      });
      Object.defineProperty(exports, "ThemeContext", {
        enumerable: true,
        get: function() {
          return _react.ThemeContext;
        }
      });
      Object.defineProperty(exports, "css", {
        enumerable: true,
        get: function() {
          return _react.css;
        }
      });
      exports.default = styled4;
      exports.internal_processStyles = void 0;
      Object.defineProperty(exports, "keyframes", {
        enumerable: true,
        get: function() {
          return _react.keyframes;
        }
      });
      var _styled = _interopRequireDefault((init_emotion_styled_browser_esm(), __toCommonJS(emotion_styled_browser_esm_exports)));
      var _react = (init_emotion_react_browser_esm(), __toCommonJS(emotion_react_browser_esm_exports));
      var _StyledEngineProvider = _interopRequireDefault(require_StyledEngineProvider2());
      var _GlobalStyles = _interopRequireDefault(require_GlobalStyles2());
      function styled4(tag, options) {
        const stylesFactory = (0, _styled.default)(tag, options);
        if (true) {
          return (...styles) => {
            const component = typeof tag === "string" ? `"${tag}"` : "component";
            if (styles.length === 0) {
              console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
            } else if (styles.some((style4) => style4 === void 0)) {
              console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
            }
            return stylesFactory(...styles);
          };
        }
        return stylesFactory;
      }
      var internal_processStyles = (tag, processor) => {
        if (Array.isArray(tag.__emotion_styles)) {
          tag.__emotion_styles = processor(tag.__emotion_styles);
        }
      };
      exports.internal_processStyles = internal_processStyles;
    }
  });

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/extends.js
  var require_extends = __commonJS({
    "../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
      function _extends2() {
        module.exports = _extends2 = Object.assign ? Object.assign.bind() : function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _extends2.apply(this, arguments);
      }
      module.exports = _extends2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/deepmerge/deepmerge.js
  var require_deepmerge = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/deepmerge/deepmerge.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = deepmerge8;
      exports.isPlainObject = isPlainObject3;
      var _extends2 = _interopRequireDefault(require_extends());
      function isPlainObject3(item) {
        if (typeof item !== "object" || item === null) {
          return false;
        }
        const prototype = Object.getPrototypeOf(item);
        return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
      }
      function deepClone(source) {
        if (!isPlainObject3(source)) {
          return source;
        }
        const output = {};
        Object.keys(source).forEach((key) => {
          output[key] = deepClone(source[key]);
        });
        return output;
      }
      function deepmerge8(target, source, options = {
        clone: true
      }) {
        const output = options.clone ? (0, _extends2.default)({}, target) : target;
        if (isPlainObject3(target) && isPlainObject3(source)) {
          Object.keys(source).forEach((key) => {
            if (key === "__proto__") {
              return;
            }
            if (isPlainObject3(source[key]) && key in target && isPlainObject3(target[key])) {
              output[key] = deepmerge8(target[key], source[key], options);
            } else if (options.clone) {
              output[key] = isPlainObject3(source[key]) ? deepClone(source[key]) : source[key];
            } else {
              output[key] = source[key];
            }
          });
        }
        return output;
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/deepmerge/index.js
  var require_deepmerge2 = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/deepmerge/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {};
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _deepmerge.default;
        }
      });
      var _deepmerge = _interopRequireWildcard(require_deepmerge());
      Object.keys(_deepmerge).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _deepmerge[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _deepmerge[key];
          }
        });
      });
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap)
          return null;
        var r2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(e2) {
          return e2 ? t : r2;
        })(e);
      }
      function _interopRequireWildcard(e, r2) {
        if (!r2 && e && e.__esModule)
          return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
          return { default: e };
        var t = _getRequireWildcardCache(r2);
        if (t && t.has(e))
          return t.get(e);
        var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
        return n.default = e, t && t.set(e, n), n;
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/capitalize/capitalize.js
  var require_capitalize = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/capitalize/capitalize.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = capitalize5;
      var _formatMuiErrorMessage2 = _interopRequireDefault(require_formatMuiErrorMessage2());
      function capitalize5(string) {
        if (typeof string !== "string") {
          throw new Error(true ? `MUI: \`capitalize(string)\` expects a string argument.` : (0, _formatMuiErrorMessage2.default)(7));
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/capitalize/index.js
  var require_capitalize2 = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/capitalize/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _capitalize.default;
        }
      });
      var _capitalize = _interopRequireDefault(require_capitalize());
    }
  });

  // ../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development2 = __commonJS({
    "../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                    case REACT_SUSPENSE_LIST_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_SERVER_CONTEXT_TYPE:
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment4 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          var hasWarnedAboutDeprecatedIsConcurrentMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isConcurrentMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                hasWarnedAboutDeprecatedIsConcurrentMode = true;
                console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          function isSuspenseList(object) {
            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
          }
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment4;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.SuspenseList = SuspenseList;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isSuspenseList = isSuspenseList;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // ../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js
  var require_react_is2 = __commonJS({
    "../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development2();
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/getDisplayName/getDisplayName.js
  var require_getDisplayName = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/getDisplayName/getDisplayName.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = getDisplayName2;
      exports.getFunctionName = getFunctionName;
      var _reactIs = require_react_is2();
      var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
      function getFunctionName(fn) {
        const match2 = `${fn}`.match(fnNameMatchRegex);
        const name = match2 && match2[1];
        return name || "";
      }
      function getFunctionComponentName(Component, fallback = "") {
        return Component.displayName || Component.name || getFunctionName(Component) || fallback;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        const functionName = getFunctionComponentName(innerType);
        return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
      }
      function getDisplayName2(Component) {
        if (Component == null) {
          return void 0;
        }
        if (typeof Component === "string") {
          return Component;
        }
        if (typeof Component === "function") {
          return getFunctionComponentName(Component, "Component");
        }
        if (typeof Component === "object") {
          switch (Component.$$typeof) {
            case _reactIs.ForwardRef:
              return getWrappedName(Component, Component.render, "ForwardRef");
            case _reactIs.Memo:
              return getWrappedName(Component, Component.type, "memo");
            default:
              return void 0;
          }
        }
        return void 0;
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/getDisplayName/index.js
  var require_getDisplayName2 = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/getDisplayName/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {};
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _getDisplayName.default;
        }
      });
      var _getDisplayName = _interopRequireWildcard(require_getDisplayName());
      Object.keys(_getDisplayName).forEach(function(key) {
        if (key === "default" || key === "__esModule")
          return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key))
          return;
        if (key in exports && exports[key] === _getDisplayName[key])
          return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _getDisplayName[key];
          }
        });
      });
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap)
          return null;
        var r2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(e2) {
          return e2 ? t : r2;
        })(e);
      }
      function _interopRequireWildcard(e, r2) {
        if (!r2 && e && e.__esModule)
          return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
          return { default: e };
        var t = _getRequireWildcardCache(r2);
        if (t && t.has(e))
          return t.get(e);
        var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
        return n.default = e, t && t.set(e, n), n;
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/clamp/clamp.js
  var require_clamp = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/clamp/clamp.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        return Math.max(min, Math.min(val, max));
      }
      var _default = exports.default = clamp;
    }
  });

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/clamp/index.js
  var require_clamp2 = __commonJS({
    "../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/node/clamp/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _clamp.default;
        }
      });
      var _clamp = _interopRequireDefault(require_clamp());
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/merge.js
  var require_merge = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/merge.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _deepmerge = _interopRequireDefault(require_deepmerge2());
      function merge3(acc, item) {
        if (!item) {
          return acc;
        }
        return (0, _deepmerge.default)(acc, item, {
          clone: false
          // No need to clone deep, it's way faster.
        });
      }
      var _default = exports.default = merge3;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/responsivePropType.js
  var require_responsivePropType = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/responsivePropType.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _propTypes = _interopRequireDefault(require_prop_types());
      var responsivePropType2 = true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.object, _propTypes.default.array]) : {};
      var _default = exports.default = responsivePropType2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/breakpoints.js
  var require_breakpoints = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/breakpoints.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.computeBreakpointsBase = computeBreakpointsBase2;
      exports.createEmptyBreakpointObject = createEmptyBreakpointObject2;
      exports.default = void 0;
      exports.handleBreakpoints = handleBreakpoints2;
      exports.mergeBreakpointsInOrder = mergeBreakpointsInOrder2;
      exports.removeUnusedBreakpoints = removeUnusedBreakpoints2;
      exports.resolveBreakpointValues = resolveBreakpointValues2;
      exports.values = void 0;
      var _extends2 = _interopRequireDefault(require_extends());
      var _propTypes = _interopRequireDefault(require_prop_types());
      var _deepmerge = _interopRequireDefault(require_deepmerge2());
      var _merge = _interopRequireDefault(require_merge());
      var values3 = exports.values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536
        // large screen
      };
      var defaultBreakpoints2 = {
        // Sorted ASC by size. That's important.
        // It can't be configured as it's used statically for propTypes.
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: (key) => `@media (min-width:${values3[key]}px)`
      };
      function handleBreakpoints2(props, propValue, styleFromPropValue) {
        const theme = props.theme || {};
        if (Array.isArray(propValue)) {
          const themeBreakpoints = theme.breakpoints || defaultBreakpoints2;
          return propValue.reduce((acc, item, index) => {
            acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
            return acc;
          }, {});
        }
        if (typeof propValue === "object") {
          const themeBreakpoints = theme.breakpoints || defaultBreakpoints2;
          return Object.keys(propValue).reduce((acc, breakpoint) => {
            if (Object.keys(themeBreakpoints.values || values3).indexOf(breakpoint) !== -1) {
              const mediaKey = themeBreakpoints.up(breakpoint);
              acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
            } else {
              const cssKey = breakpoint;
              acc[cssKey] = propValue[cssKey];
            }
            return acc;
          }, {});
        }
        const output = styleFromPropValue(propValue);
        return output;
      }
      function breakpoints(styleFunction) {
        const newStyleFunction = (props) => {
          const theme = props.theme || {};
          const base = styleFunction(props);
          const themeBreakpoints = theme.breakpoints || defaultBreakpoints2;
          const extended = themeBreakpoints.keys.reduce((acc, key) => {
            if (props[key]) {
              acc = acc || {};
              acc[themeBreakpoints.up(key)] = styleFunction((0, _extends2.default)({
                theme
              }, props[key]));
            }
            return acc;
          }, null);
          return (0, _merge.default)(base, extended);
        };
        newStyleFunction.propTypes = true ? (0, _extends2.default)({}, styleFunction.propTypes, {
          xs: _propTypes.default.object,
          sm: _propTypes.default.object,
          md: _propTypes.default.object,
          lg: _propTypes.default.object,
          xl: _propTypes.default.object
        }) : {};
        newStyleFunction.filterProps = ["xs", "sm", "md", "lg", "xl", ...styleFunction.filterProps];
        return newStyleFunction;
      }
      function createEmptyBreakpointObject2(breakpointsInput = {}) {
        var _breakpointsInput$key;
        const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
          const breakpointStyleKey = breakpointsInput.up(key);
          acc[breakpointStyleKey] = {};
          return acc;
        }, {});
        return breakpointsInOrder || {};
      }
      function removeUnusedBreakpoints2(breakpointKeys, style4) {
        return breakpointKeys.reduce((acc, key) => {
          const breakpointOutput = acc[key];
          const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
          if (isBreakpointUnused) {
            delete acc[key];
          }
          return acc;
        }, style4);
      }
      function mergeBreakpointsInOrder2(breakpointsInput, ...styles) {
        const emptyBreakpoints = createEmptyBreakpointObject2(breakpointsInput);
        const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev2, next2) => (0, _deepmerge.default)(prev2, next2), {});
        return removeUnusedBreakpoints2(Object.keys(emptyBreakpoints), mergedOutput);
      }
      function computeBreakpointsBase2(breakpointValues, themeBreakpoints) {
        if (typeof breakpointValues !== "object") {
          return {};
        }
        const base = {};
        const breakpointsKeys = Object.keys(themeBreakpoints);
        if (Array.isArray(breakpointValues)) {
          breakpointsKeys.forEach((breakpoint, i) => {
            if (i < breakpointValues.length) {
              base[breakpoint] = true;
            }
          });
        } else {
          breakpointsKeys.forEach((breakpoint) => {
            if (breakpointValues[breakpoint] != null) {
              base[breakpoint] = true;
            }
          });
        }
        return base;
      }
      function resolveBreakpointValues2({
        values: breakpointValues,
        breakpoints: themeBreakpoints,
        base: customBase
      }) {
        const base = customBase || computeBreakpointsBase2(breakpointValues, themeBreakpoints);
        const keys = Object.keys(base);
        if (keys.length === 0) {
          return breakpointValues;
        }
        let previous;
        return keys.reduce((acc, breakpoint, i) => {
          if (Array.isArray(breakpointValues)) {
            acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
            previous = i;
          } else if (typeof breakpointValues === "object") {
            acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
            previous = breakpoint;
          } else {
            acc[breakpoint] = breakpointValues;
          }
          return acc;
        }, {});
      }
      var _default = exports.default = breakpoints;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/style.js
  var require_style = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/style.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.getPath = getPath2;
      exports.getStyleValue = getStyleValue2;
      var _capitalize = _interopRequireDefault(require_capitalize2());
      var _responsivePropType = _interopRequireDefault(require_responsivePropType());
      var _breakpoints = require_breakpoints();
      function getPath2(obj, path, checkVars = true) {
        if (!path || typeof path !== "string") {
          return null;
        }
        if (obj && obj.vars && checkVars) {
          const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
          if (val != null) {
            return val;
          }
        }
        return path.split(".").reduce((acc, item) => {
          if (acc && acc[item] != null) {
            return acc[item];
          }
          return null;
        }, obj);
      }
      function getStyleValue2(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
        let value;
        if (typeof themeMapping === "function") {
          value = themeMapping(propValueFinal);
        } else if (Array.isArray(themeMapping)) {
          value = themeMapping[propValueFinal] || userValue;
        } else {
          value = getPath2(themeMapping, propValueFinal) || userValue;
        }
        if (transform) {
          value = transform(value, userValue, themeMapping);
        }
        return value;
      }
      function style4(options) {
        const {
          prop,
          cssProperty = options.prop,
          themeKey,
          transform
        } = options;
        const fn = (props) => {
          if (props[prop] == null) {
            return null;
          }
          const propValue = props[prop];
          const theme = props.theme;
          const themeMapping = getPath2(theme, themeKey) || {};
          const styleFromPropValue = (propValueFinal) => {
            let value = getStyleValue2(themeMapping, transform, propValueFinal);
            if (propValueFinal === value && typeof propValueFinal === "string") {
              value = getStyleValue2(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : (0, _capitalize.default)(propValueFinal)}`, propValueFinal);
            }
            if (cssProperty === false) {
              return value;
            }
            return {
              [cssProperty]: value
            };
          };
          return (0, _breakpoints.handleBreakpoints)(props, propValue, styleFromPropValue);
        };
        fn.propTypes = true ? {
          [prop]: _responsivePropType.default
        } : {};
        fn.filterProps = [prop];
        return fn;
      }
      var _default = exports.default = style4;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/memoize.js
  var require_memoize = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/memoize.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = memoize3;
      function memoize3(fn) {
        const cache = {};
        return (arg) => {
          if (cache[arg] === void 0) {
            cache[arg] = fn(arg);
          }
          return cache[arg];
        };
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/spacing.js
  var require_spacing = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/spacing.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createUnarySpacing = createUnarySpacing2;
      exports.createUnaryUnit = createUnaryUnit2;
      exports.default = void 0;
      exports.getStyleFromPropValue = getStyleFromPropValue2;
      exports.getValue = getValue2;
      exports.margin = margin2;
      exports.marginKeys = void 0;
      exports.padding = padding2;
      exports.paddingKeys = void 0;
      var _responsivePropType = _interopRequireDefault(require_responsivePropType());
      var _breakpoints = require_breakpoints();
      var _style = require_style();
      var _merge = _interopRequireDefault(require_merge());
      var _memoize = _interopRequireDefault(require_memoize());
      var properties2 = {
        m: "margin",
        p: "padding"
      };
      var directions2 = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
        x: ["Left", "Right"],
        y: ["Top", "Bottom"]
      };
      var aliases2 = {
        marginX: "mx",
        marginY: "my",
        paddingX: "px",
        paddingY: "py"
      };
      var getCssProperties2 = (0, _memoize.default)((prop) => {
        if (prop.length > 2) {
          if (aliases2[prop]) {
            prop = aliases2[prop];
          } else {
            return [prop];
          }
        }
        const [a, b] = prop.split("");
        const property = properties2[a];
        const direction = directions2[b] || "";
        return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
      });
      var marginKeys2 = exports.marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
      var paddingKeys2 = exports.paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
      var spacingKeys2 = [...marginKeys2, ...paddingKeys2];
      function createUnaryUnit2(theme, themeKey, defaultValue, propName) {
        var _getPath;
        const themeSpacing = (_getPath = (0, _style.getPath)(theme, themeKey, false)) != null ? _getPath : defaultValue;
        if (typeof themeSpacing === "number") {
          return (abs2) => {
            if (typeof abs2 === "string") {
              return abs2;
            }
            if (true) {
              if (typeof abs2 !== "number") {
                console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs2}.`);
              }
            }
            return themeSpacing * abs2;
          };
        }
        if (Array.isArray(themeSpacing)) {
          return (abs2) => {
            if (typeof abs2 === "string") {
              return abs2;
            }
            if (true) {
              if (!Number.isInteger(abs2)) {
                console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
              } else if (abs2 > themeSpacing.length - 1) {
                console.error([`MUI: The value provided (${abs2}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs2} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
              }
            }
            return themeSpacing[abs2];
          };
        }
        if (typeof themeSpacing === "function") {
          return themeSpacing;
        }
        if (true) {
          console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
        }
        return () => void 0;
      }
      function createUnarySpacing2(theme) {
        return createUnaryUnit2(theme, "spacing", 8, "spacing");
      }
      function getValue2(transformer, propValue) {
        if (typeof propValue === "string" || propValue == null) {
          return propValue;
        }
        const abs2 = Math.abs(propValue);
        const transformed = transformer(abs2);
        if (propValue >= 0) {
          return transformed;
        }
        if (typeof transformed === "number") {
          return -transformed;
        }
        return `-${transformed}`;
      }
      function getStyleFromPropValue2(cssProperties, transformer) {
        return (propValue) => cssProperties.reduce((acc, cssProperty) => {
          acc[cssProperty] = getValue2(transformer, propValue);
          return acc;
        }, {});
      }
      function resolveCssProperty2(props, keys, prop, transformer) {
        if (keys.indexOf(prop) === -1) {
          return null;
        }
        const cssProperties = getCssProperties2(prop);
        const styleFromPropValue = getStyleFromPropValue2(cssProperties, transformer);
        const propValue = props[prop];
        return (0, _breakpoints.handleBreakpoints)(props, propValue, styleFromPropValue);
      }
      function style4(props, keys) {
        const transformer = createUnarySpacing2(props.theme);
        return Object.keys(props).map((prop) => resolveCssProperty2(props, keys, prop, transformer)).reduce(_merge.default, {});
      }
      function margin2(props) {
        return style4(props, marginKeys2);
      }
      margin2.propTypes = true ? marginKeys2.reduce((obj, key) => {
        obj[key] = _responsivePropType.default;
        return obj;
      }, {}) : {};
      margin2.filterProps = marginKeys2;
      function padding2(props) {
        return style4(props, paddingKeys2);
      }
      padding2.propTypes = true ? paddingKeys2.reduce((obj, key) => {
        obj[key] = _responsivePropType.default;
        return obj;
      }, {}) : {};
      padding2.filterProps = paddingKeys2;
      function spacing2(props) {
        return style4(props, spacingKeys2);
      }
      spacing2.propTypes = true ? spacingKeys2.reduce((obj, key) => {
        obj[key] = _responsivePropType.default;
        return obj;
      }, {}) : {};
      spacing2.filterProps = spacingKeys2;
      var _default = exports.default = spacing2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/compose.js
  var require_compose = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/compose.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _merge = _interopRequireDefault(require_merge());
      function compose2(...styles) {
        const handlers = styles.reduce((acc, style4) => {
          style4.filterProps.forEach((prop) => {
            acc[prop] = style4;
          });
          return acc;
        }, {});
        const fn = (props) => {
          return Object.keys(props).reduce((acc, prop) => {
            if (handlers[prop]) {
              return (0, _merge.default)(acc, handlers[prop](props));
            }
            return acc;
          }, {});
        };
        fn.propTypes = true ? styles.reduce((acc, style4) => Object.assign(acc, style4.propTypes), {}) : {};
        fn.filterProps = styles.reduce((acc, style4) => acc.concat(style4.filterProps), []);
        return fn;
      }
      var _default = exports.default = compose2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/borders.js
  var require_borders = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/borders.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.borderTopColor = exports.borderTop = exports.borderRightColor = exports.borderRight = exports.borderRadius = exports.borderLeftColor = exports.borderLeft = exports.borderColor = exports.borderBottomColor = exports.borderBottom = exports.border = void 0;
      exports.borderTransform = borderTransform2;
      exports.outlineColor = exports.outline = exports.default = void 0;
      var _responsivePropType = _interopRequireDefault(require_responsivePropType());
      var _style = _interopRequireDefault(require_style());
      var _compose = _interopRequireDefault(require_compose());
      var _spacing = require_spacing();
      var _breakpoints = require_breakpoints();
      function borderTransform2(value) {
        if (typeof value !== "number") {
          return value;
        }
        return `${value}px solid`;
      }
      function createBorderStyle2(prop, transform) {
        return (0, _style.default)({
          prop,
          themeKey: "borders",
          transform
        });
      }
      var border2 = exports.border = createBorderStyle2("border", borderTransform2);
      var borderTop2 = exports.borderTop = createBorderStyle2("borderTop", borderTransform2);
      var borderRight2 = exports.borderRight = createBorderStyle2("borderRight", borderTransform2);
      var borderBottom2 = exports.borderBottom = createBorderStyle2("borderBottom", borderTransform2);
      var borderLeft2 = exports.borderLeft = createBorderStyle2("borderLeft", borderTransform2);
      var borderColor2 = exports.borderColor = createBorderStyle2("borderColor");
      var borderTopColor2 = exports.borderTopColor = createBorderStyle2("borderTopColor");
      var borderRightColor2 = exports.borderRightColor = createBorderStyle2("borderRightColor");
      var borderBottomColor2 = exports.borderBottomColor = createBorderStyle2("borderBottomColor");
      var borderLeftColor2 = exports.borderLeftColor = createBorderStyle2("borderLeftColor");
      var outline2 = exports.outline = createBorderStyle2("outline", borderTransform2);
      var outlineColor2 = exports.outlineColor = createBorderStyle2("outlineColor");
      var borderRadius2 = (props) => {
        if (props.borderRadius !== void 0 && props.borderRadius !== null) {
          const transformer = (0, _spacing.createUnaryUnit)(props.theme, "shape.borderRadius", 4, "borderRadius");
          const styleFromPropValue = (propValue) => ({
            borderRadius: (0, _spacing.getValue)(transformer, propValue)
          });
          return (0, _breakpoints.handleBreakpoints)(props, props.borderRadius, styleFromPropValue);
        }
        return null;
      };
      exports.borderRadius = borderRadius2;
      borderRadius2.propTypes = true ? {
        borderRadius: _responsivePropType.default
      } : {};
      borderRadius2.filterProps = ["borderRadius"];
      var borders2 = (0, _compose.default)(border2, borderTop2, borderRight2, borderBottom2, borderLeft2, borderColor2, borderTopColor2, borderRightColor2, borderBottomColor2, borderLeftColor2, borderRadius2, outline2, outlineColor2);
      var _default = exports.default = borders2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/cssGrid.js
  var require_cssGrid = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/cssGrid.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.rowGap = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridTemplateAreas = exports.gridRow = exports.gridColumn = exports.gridAutoRows = exports.gridAutoFlow = exports.gridAutoColumns = exports.gridArea = exports.gap = exports.default = exports.columnGap = void 0;
      var _style = _interopRequireDefault(require_style());
      var _compose = _interopRequireDefault(require_compose());
      var _spacing = require_spacing();
      var _breakpoints = require_breakpoints();
      var _responsivePropType = _interopRequireDefault(require_responsivePropType());
      var gap2 = (props) => {
        if (props.gap !== void 0 && props.gap !== null) {
          const transformer = (0, _spacing.createUnaryUnit)(props.theme, "spacing", 8, "gap");
          const styleFromPropValue = (propValue) => ({
            gap: (0, _spacing.getValue)(transformer, propValue)
          });
          return (0, _breakpoints.handleBreakpoints)(props, props.gap, styleFromPropValue);
        }
        return null;
      };
      exports.gap = gap2;
      gap2.propTypes = true ? {
        gap: _responsivePropType.default
      } : {};
      gap2.filterProps = ["gap"];
      var columnGap2 = (props) => {
        if (props.columnGap !== void 0 && props.columnGap !== null) {
          const transformer = (0, _spacing.createUnaryUnit)(props.theme, "spacing", 8, "columnGap");
          const styleFromPropValue = (propValue) => ({
            columnGap: (0, _spacing.getValue)(transformer, propValue)
          });
          return (0, _breakpoints.handleBreakpoints)(props, props.columnGap, styleFromPropValue);
        }
        return null;
      };
      exports.columnGap = columnGap2;
      columnGap2.propTypes = true ? {
        columnGap: _responsivePropType.default
      } : {};
      columnGap2.filterProps = ["columnGap"];
      var rowGap2 = (props) => {
        if (props.rowGap !== void 0 && props.rowGap !== null) {
          const transformer = (0, _spacing.createUnaryUnit)(props.theme, "spacing", 8, "rowGap");
          const styleFromPropValue = (propValue) => ({
            rowGap: (0, _spacing.getValue)(transformer, propValue)
          });
          return (0, _breakpoints.handleBreakpoints)(props, props.rowGap, styleFromPropValue);
        }
        return null;
      };
      exports.rowGap = rowGap2;
      rowGap2.propTypes = true ? {
        rowGap: _responsivePropType.default
      } : {};
      rowGap2.filterProps = ["rowGap"];
      var gridColumn2 = exports.gridColumn = (0, _style.default)({
        prop: "gridColumn"
      });
      var gridRow2 = exports.gridRow = (0, _style.default)({
        prop: "gridRow"
      });
      var gridAutoFlow2 = exports.gridAutoFlow = (0, _style.default)({
        prop: "gridAutoFlow"
      });
      var gridAutoColumns2 = exports.gridAutoColumns = (0, _style.default)({
        prop: "gridAutoColumns"
      });
      var gridAutoRows2 = exports.gridAutoRows = (0, _style.default)({
        prop: "gridAutoRows"
      });
      var gridTemplateColumns2 = exports.gridTemplateColumns = (0, _style.default)({
        prop: "gridTemplateColumns"
      });
      var gridTemplateRows2 = exports.gridTemplateRows = (0, _style.default)({
        prop: "gridTemplateRows"
      });
      var gridTemplateAreas2 = exports.gridTemplateAreas = (0, _style.default)({
        prop: "gridTemplateAreas"
      });
      var gridArea2 = exports.gridArea = (0, _style.default)({
        prop: "gridArea"
      });
      var grid2 = (0, _compose.default)(gap2, columnGap2, rowGap2, gridColumn2, gridRow2, gridAutoFlow2, gridAutoColumns2, gridAutoRows2, gridTemplateColumns2, gridTemplateRows2, gridTemplateAreas2, gridArea2);
      var _default = exports.default = grid2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/palette.js
  var require_palette = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/palette.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.color = exports.bgcolor = exports.backgroundColor = void 0;
      exports.paletteTransform = paletteTransform2;
      var _style = _interopRequireDefault(require_style());
      var _compose = _interopRequireDefault(require_compose());
      function paletteTransform2(value, userValue) {
        if (userValue === "grey") {
          return userValue;
        }
        return value;
      }
      var color2 = exports.color = (0, _style.default)({
        prop: "color",
        themeKey: "palette",
        transform: paletteTransform2
      });
      var bgcolor2 = exports.bgcolor = (0, _style.default)({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: paletteTransform2
      });
      var backgroundColor2 = exports.backgroundColor = (0, _style.default)({
        prop: "backgroundColor",
        themeKey: "palette",
        transform: paletteTransform2
      });
      var palette2 = (0, _compose.default)(color2, bgcolor2, backgroundColor2);
      var _default = exports.default = palette2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/sizing.js
  var require_sizing = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/sizing.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sizeWidth = exports.sizeHeight = exports.minWidth = exports.minHeight = exports.maxWidth = exports.maxHeight = exports.height = exports.default = exports.boxSizing = void 0;
      exports.sizingTransform = sizingTransform2;
      exports.width = void 0;
      var _style = _interopRequireDefault(require_style());
      var _compose = _interopRequireDefault(require_compose());
      var _breakpoints = require_breakpoints();
      function sizingTransform2(value) {
        return value <= 1 && value !== 0 ? `${value * 100}%` : value;
      }
      var width2 = exports.width = (0, _style.default)({
        prop: "width",
        transform: sizingTransform2
      });
      var maxWidth2 = (props) => {
        if (props.maxWidth !== void 0 && props.maxWidth !== null) {
          const styleFromPropValue = (propValue) => {
            var _props$theme, _props$theme2;
            const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || _breakpoints.values[propValue];
            if (!breakpoint) {
              return {
                maxWidth: sizingTransform2(propValue)
              };
            }
            if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
              return {
                maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
              };
            }
            return {
              maxWidth: breakpoint
            };
          };
          return (0, _breakpoints.handleBreakpoints)(props, props.maxWidth, styleFromPropValue);
        }
        return null;
      };
      exports.maxWidth = maxWidth2;
      maxWidth2.filterProps = ["maxWidth"];
      var minWidth2 = exports.minWidth = (0, _style.default)({
        prop: "minWidth",
        transform: sizingTransform2
      });
      var height2 = exports.height = (0, _style.default)({
        prop: "height",
        transform: sizingTransform2
      });
      var maxHeight2 = exports.maxHeight = (0, _style.default)({
        prop: "maxHeight",
        transform: sizingTransform2
      });
      var minHeight2 = exports.minHeight = (0, _style.default)({
        prop: "minHeight",
        transform: sizingTransform2
      });
      var sizeWidth2 = exports.sizeWidth = (0, _style.default)({
        prop: "size",
        cssProperty: "width",
        transform: sizingTransform2
      });
      var sizeHeight2 = exports.sizeHeight = (0, _style.default)({
        prop: "size",
        cssProperty: "height",
        transform: sizingTransform2
      });
      var boxSizing2 = exports.boxSizing = (0, _style.default)({
        prop: "boxSizing"
      });
      var sizing2 = (0, _compose.default)(width2, maxWidth2, minWidth2, height2, maxHeight2, minHeight2, boxSizing2);
      var _default = exports.default = sizing2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/defaultSxConfig.js
  var require_defaultSxConfig = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/defaultSxConfig.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _spacing = require_spacing();
      var _borders = require_borders();
      var _cssGrid = require_cssGrid();
      var _palette = require_palette();
      var _sizing = require_sizing();
      var defaultSxConfig3 = {
        // borders
        border: {
          themeKey: "borders",
          transform: _borders.borderTransform
        },
        borderTop: {
          themeKey: "borders",
          transform: _borders.borderTransform
        },
        borderRight: {
          themeKey: "borders",
          transform: _borders.borderTransform
        },
        borderBottom: {
          themeKey: "borders",
          transform: _borders.borderTransform
        },
        borderLeft: {
          themeKey: "borders",
          transform: _borders.borderTransform
        },
        borderColor: {
          themeKey: "palette"
        },
        borderTopColor: {
          themeKey: "palette"
        },
        borderRightColor: {
          themeKey: "palette"
        },
        borderBottomColor: {
          themeKey: "palette"
        },
        borderLeftColor: {
          themeKey: "palette"
        },
        outline: {
          themeKey: "borders",
          transform: _borders.borderTransform
        },
        outlineColor: {
          themeKey: "palette"
        },
        borderRadius: {
          themeKey: "shape.borderRadius",
          style: _borders.borderRadius
        },
        // palette
        color: {
          themeKey: "palette",
          transform: _palette.paletteTransform
        },
        bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: _palette.paletteTransform
        },
        backgroundColor: {
          themeKey: "palette",
          transform: _palette.paletteTransform
        },
        // spacing
        p: {
          style: _spacing.padding
        },
        pt: {
          style: _spacing.padding
        },
        pr: {
          style: _spacing.padding
        },
        pb: {
          style: _spacing.padding
        },
        pl: {
          style: _spacing.padding
        },
        px: {
          style: _spacing.padding
        },
        py: {
          style: _spacing.padding
        },
        padding: {
          style: _spacing.padding
        },
        paddingTop: {
          style: _spacing.padding
        },
        paddingRight: {
          style: _spacing.padding
        },
        paddingBottom: {
          style: _spacing.padding
        },
        paddingLeft: {
          style: _spacing.padding
        },
        paddingX: {
          style: _spacing.padding
        },
        paddingY: {
          style: _spacing.padding
        },
        paddingInline: {
          style: _spacing.padding
        },
        paddingInlineStart: {
          style: _spacing.padding
        },
        paddingInlineEnd: {
          style: _spacing.padding
        },
        paddingBlock: {
          style: _spacing.padding
        },
        paddingBlockStart: {
          style: _spacing.padding
        },
        paddingBlockEnd: {
          style: _spacing.padding
        },
        m: {
          style: _spacing.margin
        },
        mt: {
          style: _spacing.margin
        },
        mr: {
          style: _spacing.margin
        },
        mb: {
          style: _spacing.margin
        },
        ml: {
          style: _spacing.margin
        },
        mx: {
          style: _spacing.margin
        },
        my: {
          style: _spacing.margin
        },
        margin: {
          style: _spacing.margin
        },
        marginTop: {
          style: _spacing.margin
        },
        marginRight: {
          style: _spacing.margin
        },
        marginBottom: {
          style: _spacing.margin
        },
        marginLeft: {
          style: _spacing.margin
        },
        marginX: {
          style: _spacing.margin
        },
        marginY: {
          style: _spacing.margin
        },
        marginInline: {
          style: _spacing.margin
        },
        marginInlineStart: {
          style: _spacing.margin
        },
        marginInlineEnd: {
          style: _spacing.margin
        },
        marginBlock: {
          style: _spacing.margin
        },
        marginBlockStart: {
          style: _spacing.margin
        },
        marginBlockEnd: {
          style: _spacing.margin
        },
        // display
        displayPrint: {
          cssProperty: false,
          transform: (value) => ({
            "@media print": {
              display: value
            }
          })
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        // flexbox
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        // grid
        gap: {
          style: _cssGrid.gap
        },
        rowGap: {
          style: _cssGrid.rowGap
        },
        columnGap: {
          style: _cssGrid.columnGap
        },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        // positions
        position: {},
        zIndex: {
          themeKey: "zIndex"
        },
        top: {},
        right: {},
        bottom: {},
        left: {},
        // shadows
        boxShadow: {
          themeKey: "shadows"
        },
        // sizing
        width: {
          transform: _sizing.sizingTransform
        },
        maxWidth: {
          style: _sizing.maxWidth
        },
        minWidth: {
          transform: _sizing.sizingTransform
        },
        height: {
          transform: _sizing.sizingTransform
        },
        maxHeight: {
          transform: _sizing.sizingTransform
        },
        minHeight: {
          transform: _sizing.sizingTransform
        },
        boxSizing: {},
        // typography
        fontFamily: {
          themeKey: "typography"
        },
        fontSize: {
          themeKey: "typography"
        },
        fontStyle: {
          themeKey: "typography"
        },
        fontWeight: {
          themeKey: "typography"
        },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: {
          cssProperty: false,
          themeKey: "typography"
        }
      };
      var _default = exports.default = defaultSxConfig3;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.js
  var require_styleFunctionSx = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/styleFunctionSx.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.unstable_createStyleFunctionSx = unstable_createStyleFunctionSx2;
      var _capitalize = _interopRequireDefault(require_capitalize2());
      var _merge = _interopRequireDefault(require_merge());
      var _style = require_style();
      var _breakpoints = require_breakpoints();
      var _defaultSxConfig = _interopRequireDefault(require_defaultSxConfig());
      function objectsHaveSameKeys2(...objects) {
        const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
        const union = new Set(allKeys);
        return objects.every((object) => union.size === Object.keys(object).length);
      }
      function callIfFn2(maybeFn, arg) {
        return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
      }
      function unstable_createStyleFunctionSx2() {
        function getThemeValue(prop, val, theme, config) {
          const props = {
            [prop]: val,
            theme
          };
          const options = config[prop];
          if (!options) {
            return {
              [prop]: val
            };
          }
          const {
            cssProperty = prop,
            themeKey,
            transform,
            style: style4
          } = options;
          if (val == null) {
            return null;
          }
          if (themeKey === "typography" && val === "inherit") {
            return {
              [prop]: val
            };
          }
          const themeMapping = (0, _style.getPath)(theme, themeKey) || {};
          if (style4) {
            return style4(props);
          }
          const styleFromPropValue = (propValueFinal) => {
            let value = (0, _style.getStyleValue)(themeMapping, transform, propValueFinal);
            if (propValueFinal === value && typeof propValueFinal === "string") {
              value = (0, _style.getStyleValue)(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : (0, _capitalize.default)(propValueFinal)}`, propValueFinal);
            }
            if (cssProperty === false) {
              return value;
            }
            return {
              [cssProperty]: value
            };
          };
          return (0, _breakpoints.handleBreakpoints)(props, val, styleFromPropValue);
        }
        function styleFunctionSx4(props) {
          var _theme$unstable_sxCon;
          const {
            sx,
            theme = {}
          } = props || {};
          if (!sx) {
            return null;
          }
          const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : _defaultSxConfig.default;
          function traverse(sxInput) {
            let sxObject = sxInput;
            if (typeof sxInput === "function") {
              sxObject = sxInput(theme);
            } else if (typeof sxInput !== "object") {
              return sxInput;
            }
            if (!sxObject) {
              return null;
            }
            const emptyBreakpoints = (0, _breakpoints.createEmptyBreakpointObject)(theme.breakpoints);
            const breakpointsKeys = Object.keys(emptyBreakpoints);
            let css3 = emptyBreakpoints;
            Object.keys(sxObject).forEach((styleKey) => {
              const value = callIfFn2(sxObject[styleKey], theme);
              if (value !== null && value !== void 0) {
                if (typeof value === "object") {
                  if (config[styleKey]) {
                    css3 = (0, _merge.default)(css3, getThemeValue(styleKey, value, theme, config));
                  } else {
                    const breakpointsValues = (0, _breakpoints.handleBreakpoints)({
                      theme
                    }, value, (x) => ({
                      [styleKey]: x
                    }));
                    if (objectsHaveSameKeys2(breakpointsValues, value)) {
                      css3[styleKey] = styleFunctionSx4({
                        sx: value,
                        theme
                      });
                    } else {
                      css3 = (0, _merge.default)(css3, breakpointsValues);
                    }
                  }
                } else {
                  css3 = (0, _merge.default)(css3, getThemeValue(styleKey, value, theme, config));
                }
              }
            });
            return (0, _breakpoints.removeUnusedBreakpoints)(breakpointsKeys, css3);
          }
          return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
        }
        return styleFunctionSx4;
      }
      var styleFunctionSx3 = unstable_createStyleFunctionSx2();
      styleFunctionSx3.filterProps = ["sx"];
      var _default = exports.default = styleFunctionSx3;
    }
  });

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
  var require_objectWithoutPropertiesLoose = __commonJS({
    "../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
      function _objectWithoutPropertiesLoose2(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      module.exports = _objectWithoutPropertiesLoose2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/extendSxProp.js
  var require_extendSxProp = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/extendSxProp.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = extendSxProp2;
      var _extends2 = _interopRequireDefault(require_extends());
      var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
      var _deepmerge = require_deepmerge2();
      var _defaultSxConfig = _interopRequireDefault(require_defaultSxConfig());
      var _excluded20 = ["sx"];
      var splitProps2 = (props) => {
        var _props$theme$unstable, _props$theme;
        const result = {
          systemProps: {},
          otherProps: {}
        };
        const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : _defaultSxConfig.default;
        Object.keys(props).forEach((prop) => {
          if (config[prop]) {
            result.systemProps[prop] = props[prop];
          } else {
            result.otherProps[prop] = props[prop];
          }
        });
        return result;
      };
      function extendSxProp2(props) {
        const {
          sx: inSx
        } = props, other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded20);
        const {
          systemProps,
          otherProps
        } = splitProps2(other);
        let finalSx;
        if (Array.isArray(inSx)) {
          finalSx = [systemProps, ...inSx];
        } else if (typeof inSx === "function") {
          finalSx = (...args) => {
            const result = inSx(...args);
            if (!(0, _deepmerge.isPlainObject)(result)) {
              return systemProps;
            }
            return (0, _extends2.default)({}, systemProps, result);
          };
        } else {
          finalSx = (0, _extends2.default)({}, systemProps, inSx);
        }
        return (0, _extends2.default)({}, otherProps, {
          sx: finalSx
        });
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/index.js
  var require_styleFunctionSx2 = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/styleFunctionSx/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _styleFunctionSx.default;
        }
      });
      Object.defineProperty(exports, "extendSxProp", {
        enumerable: true,
        get: function() {
          return _extendSxProp.default;
        }
      });
      Object.defineProperty(exports, "unstable_createStyleFunctionSx", {
        enumerable: true,
        get: function() {
          return _styleFunctionSx.unstable_createStyleFunctionSx;
        }
      });
      Object.defineProperty(exports, "unstable_defaultSxConfig", {
        enumerable: true,
        get: function() {
          return _defaultSxConfig.default;
        }
      });
      var _styleFunctionSx = _interopRequireWildcard(require_styleFunctionSx());
      var _extendSxProp = _interopRequireDefault(require_extendSxProp());
      var _defaultSxConfig = _interopRequireDefault(require_defaultSxConfig());
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap)
          return null;
        var r2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(e2) {
          return e2 ? t : r2;
        })(e);
      }
      function _interopRequireWildcard(e, r2) {
        if (!r2 && e && e.__esModule)
          return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
          return { default: e };
        var t = _getRequireWildcardCache(r2);
        if (t && t.has(e))
          return t.get(e);
        var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
        return n.default = e, t && t.set(e, n), n;
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/createBreakpoints.js
  var require_createBreakpoints = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/createBreakpoints.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.breakpointKeys = void 0;
      exports.default = createBreakpoints2;
      var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
      var _extends2 = _interopRequireDefault(require_extends());
      var _excluded20 = ["values", "unit", "step"];
      var breakpointKeys = exports.breakpointKeys = ["xs", "sm", "md", "lg", "xl"];
      var sortBreakpointsValues2 = (values3) => {
        const breakpointsAsArray = Object.keys(values3).map((key) => ({
          key,
          val: values3[key]
        })) || [];
        breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
        return breakpointsAsArray.reduce((acc, obj) => {
          return (0, _extends2.default)({}, acc, {
            [obj.key]: obj.val
          });
        }, {});
      };
      function createBreakpoints2(breakpoints) {
        const {
          // The breakpoint **start** at this value.
          // For instance with the first breakpoint xs: [xs, sm).
          values: values3 = {
            xs: 0,
            // phone
            sm: 600,
            // tablet
            md: 900,
            // small laptop
            lg: 1200,
            // desktop
            xl: 1536
            // large screen
          },
          unit = "px",
          step = 5
        } = breakpoints, other = (0, _objectWithoutPropertiesLoose2.default)(breakpoints, _excluded20);
        const sortedValues = sortBreakpointsValues2(values3);
        const keys = Object.keys(sortedValues);
        function up(key) {
          const value = typeof values3[key] === "number" ? values3[key] : key;
          return `@media (min-width:${value}${unit})`;
        }
        function down(key) {
          const value = typeof values3[key] === "number" ? values3[key] : key;
          return `@media (max-width:${value - step / 100}${unit})`;
        }
        function between(start, end) {
          const endIndex = keys.indexOf(end);
          return `@media (min-width:${typeof values3[start] === "number" ? values3[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values3[keys[endIndex]] === "number" ? values3[keys[endIndex]] : end) - step / 100}${unit})`;
        }
        function only(key) {
          if (keys.indexOf(key) + 1 < keys.length) {
            return between(key, keys[keys.indexOf(key) + 1]);
          }
          return up(key);
        }
        function not(key) {
          const keyIndex = keys.indexOf(key);
          if (keyIndex === 0) {
            return up(keys[1]);
          }
          if (keyIndex === keys.length - 1) {
            return down(keys[keyIndex]);
          }
          return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
        }
        return (0, _extends2.default)({
          keys,
          values: sortedValues,
          up,
          down,
          between,
          only,
          not,
          unit
        }, other);
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/shape.js
  var require_shape = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/shape.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var shape2 = {
        borderRadius: 4
      };
      var _default = exports.default = shape2;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/createSpacing.js
  var require_createSpacing = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/createSpacing.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = createSpacing2;
      var _spacing = require_spacing();
      function createSpacing2(spacingInput = 8) {
        if (spacingInput.mui) {
          return spacingInput;
        }
        const transform = (0, _spacing.createUnarySpacing)({
          spacing: spacingInput
        });
        const spacing2 = (...argsInput) => {
          if (true) {
            if (!(argsInput.length <= 4)) {
              console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
            }
          }
          const args = argsInput.length === 0 ? [1] : argsInput;
          return args.map((argument) => {
            const output = transform(argument);
            return typeof output === "number" ? `${output}px` : output;
          }).join(" ");
        };
        spacing2.mui = true;
        return spacing2;
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/applyStyles.js
  var require_applyStyles = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/applyStyles.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = applyStyles2;
      function applyStyles2(key, styles) {
        const theme = this;
        if (theme.vars && typeof theme.getColorSchemeSelector === "function") {
          const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
          return {
            [selector]: styles
          };
        }
        if (theme.palette.mode === key) {
          return styles;
        }
        return {};
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/createTheme.js
  var require_createTheme = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/createTheme.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _extends2 = _interopRequireDefault(require_extends());
      var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
      var _deepmerge = _interopRequireDefault(require_deepmerge2());
      var _createBreakpoints = _interopRequireDefault(require_createBreakpoints());
      var _shape = _interopRequireDefault(require_shape());
      var _createSpacing = _interopRequireDefault(require_createSpacing());
      var _styleFunctionSx = _interopRequireDefault(require_styleFunctionSx());
      var _defaultSxConfig = _interopRequireDefault(require_defaultSxConfig());
      var _applyStyles = _interopRequireDefault(require_applyStyles());
      var _excluded20 = ["breakpoints", "palette", "spacing", "shape"];
      function createTheme3(options = {}, ...args) {
        const {
          breakpoints: breakpointsInput = {},
          palette: paletteInput = {},
          spacing: spacingInput,
          shape: shapeInput = {}
        } = options, other = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded20);
        const breakpoints = (0, _createBreakpoints.default)(breakpointsInput);
        const spacing2 = (0, _createSpacing.default)(spacingInput);
        let muiTheme = (0, _deepmerge.default)({
          breakpoints,
          direction: "ltr",
          components: {},
          // Inject component definitions.
          palette: (0, _extends2.default)({
            mode: "light"
          }, paletteInput),
          spacing: spacing2,
          shape: (0, _extends2.default)({}, _shape.default, shapeInput)
        }, other);
        muiTheme.applyStyles = _applyStyles.default;
        muiTheme = args.reduce((acc, argument) => (0, _deepmerge.default)(acc, argument), muiTheme);
        muiTheme.unstable_sxConfig = (0, _extends2.default)({}, _defaultSxConfig.default, other == null ? void 0 : other.unstable_sxConfig);
        muiTheme.unstable_sx = function sx(props) {
          return (0, _styleFunctionSx.default)({
            sx: props,
            theme: this
          });
        };
        return muiTheme;
      }
      var _default = exports.default = createTheme3;
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/index.js
  var require_createTheme2 = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createTheme/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _createTheme.default;
        }
      });
      Object.defineProperty(exports, "private_createBreakpoints", {
        enumerable: true,
        get: function() {
          return _createBreakpoints.default;
        }
      });
      Object.defineProperty(exports, "unstable_applyStyles", {
        enumerable: true,
        get: function() {
          return _applyStyles.default;
        }
      });
      var _createTheme = _interopRequireDefault(require_createTheme());
      var _createBreakpoints = _interopRequireDefault(require_createBreakpoints());
      var _applyStyles = _interopRequireDefault(require_applyStyles());
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/colorManipulator.js
  var require_colorManipulator = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/colorManipulator.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.alpha = alpha4;
      exports.blend = blend;
      exports.colorChannel = void 0;
      exports.darken = darken3;
      exports.decomposeColor = decomposeColor;
      exports.emphasize = emphasize;
      exports.getContrastRatio = getContrastRatio2;
      exports.getLuminance = getLuminance;
      exports.hexToRgb = hexToRgb;
      exports.hslToRgb = hslToRgb;
      exports.lighten = lighten3;
      exports.private_safeAlpha = private_safeAlpha;
      exports.private_safeColorChannel = void 0;
      exports.private_safeDarken = private_safeDarken;
      exports.private_safeEmphasize = private_safeEmphasize;
      exports.private_safeLighten = private_safeLighten;
      exports.recomposeColor = recomposeColor;
      exports.rgbToHex = rgbToHex;
      var _formatMuiErrorMessage2 = _interopRequireDefault(require_formatMuiErrorMessage2());
      var _clamp = _interopRequireDefault(require_clamp2());
      function clampWrapper(value, min = 0, max = 1) {
        if (true) {
          if (value < min || value > max) {
            console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
          }
        }
        return (0, _clamp.default)(value, min, max);
      }
      function hexToRgb(color2) {
        color2 = color2.slice(1);
        const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
        let colors = color2.match(re);
        if (colors && colors[0].length === 1) {
          colors = colors.map((n) => n + n);
        }
        return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
          return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
        }).join(", ")})` : "";
      }
      function intToHex(int) {
        const hex = int.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
      }
      function decomposeColor(color2) {
        if (color2.type) {
          return color2;
        }
        if (color2.charAt(0) === "#") {
          return decomposeColor(hexToRgb(color2));
        }
        const marker = color2.indexOf("(");
        const type = color2.substring(0, marker);
        if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
          throw new Error(true ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, _formatMuiErrorMessage2.default)(9, color2));
        }
        let values3 = color2.substring(marker + 1, color2.length - 1);
        let colorSpace;
        if (type === "color") {
          values3 = values3.split(" ");
          colorSpace = values3.shift();
          if (values3.length === 4 && values3[3].charAt(0) === "/") {
            values3[3] = values3[3].slice(1);
          }
          if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
            throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, _formatMuiErrorMessage2.default)(10, colorSpace));
          }
        } else {
          values3 = values3.split(",");
        }
        values3 = values3.map((value) => parseFloat(value));
        return {
          type,
          values: values3,
          colorSpace
        };
      }
      var colorChannel = (color2) => {
        const decomposedColor = decomposeColor(color2);
        return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val).join(" ");
      };
      exports.colorChannel = colorChannel;
      var private_safeColorChannel = (color2, warning) => {
        try {
          return colorChannel(color2);
        } catch (error) {
          if (warning && true) {
            console.warn(warning);
          }
          return color2;
        }
      };
      exports.private_safeColorChannel = private_safeColorChannel;
      function recomposeColor(color2) {
        const {
          type,
          colorSpace
        } = color2;
        let {
          values: values3
        } = color2;
        if (type.indexOf("rgb") !== -1) {
          values3 = values3.map((n, i) => i < 3 ? parseInt(n, 10) : n);
        } else if (type.indexOf("hsl") !== -1) {
          values3[1] = `${values3[1]}%`;
          values3[2] = `${values3[2]}%`;
        }
        if (type.indexOf("color") !== -1) {
          values3 = `${colorSpace} ${values3.join(" ")}`;
        } else {
          values3 = `${values3.join(", ")}`;
        }
        return `${type}(${values3})`;
      }
      function rgbToHex(color2) {
        if (color2.indexOf("#") === 0) {
          return color2;
        }
        const {
          values: values3
        } = decomposeColor(color2);
        return `#${values3.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join("")}`;
      }
      function hslToRgb(color2) {
        color2 = decomposeColor(color2);
        const {
          values: values3
        } = color2;
        const h = values3[0];
        const s = values3[1] / 100;
        const l = values3[2] / 100;
        const a = s * Math.min(l, 1 - l);
        const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        let type = "rgb";
        const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
        if (color2.type === "hsla") {
          type += "a";
          rgb.push(values3[3]);
        }
        return recomposeColor({
          type,
          values: rgb
        });
      }
      function getLuminance(color2) {
        color2 = decomposeColor(color2);
        let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
        rgb = rgb.map((val) => {
          if (color2.type !== "color") {
            val /= 255;
          }
          return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
        });
        return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
      }
      function getContrastRatio2(foreground, background) {
        const lumA = getLuminance(foreground);
        const lumB = getLuminance(background);
        return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
      }
      function alpha4(color2, value) {
        color2 = decomposeColor(color2);
        value = clampWrapper(value);
        if (color2.type === "rgb" || color2.type === "hsl") {
          color2.type += "a";
        }
        if (color2.type === "color") {
          color2.values[3] = `/${value}`;
        } else {
          color2.values[3] = value;
        }
        return recomposeColor(color2);
      }
      function private_safeAlpha(color2, value, warning) {
        try {
          return alpha4(color2, value);
        } catch (error) {
          if (warning && true) {
            console.warn(warning);
          }
          return color2;
        }
      }
      function darken3(color2, coefficient) {
        color2 = decomposeColor(color2);
        coefficient = clampWrapper(coefficient);
        if (color2.type.indexOf("hsl") !== -1) {
          color2.values[2] *= 1 - coefficient;
        } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
          for (let i = 0; i < 3; i += 1) {
            color2.values[i] *= 1 - coefficient;
          }
        }
        return recomposeColor(color2);
      }
      function private_safeDarken(color2, coefficient, warning) {
        try {
          return darken3(color2, coefficient);
        } catch (error) {
          if (warning && true) {
            console.warn(warning);
          }
          return color2;
        }
      }
      function lighten3(color2, coefficient) {
        color2 = decomposeColor(color2);
        coefficient = clampWrapper(coefficient);
        if (color2.type.indexOf("hsl") !== -1) {
          color2.values[2] += (100 - color2.values[2]) * coefficient;
        } else if (color2.type.indexOf("rgb") !== -1) {
          for (let i = 0; i < 3; i += 1) {
            color2.values[i] += (255 - color2.values[i]) * coefficient;
          }
        } else if (color2.type.indexOf("color") !== -1) {
          for (let i = 0; i < 3; i += 1) {
            color2.values[i] += (1 - color2.values[i]) * coefficient;
          }
        }
        return recomposeColor(color2);
      }
      function private_safeLighten(color2, coefficient, warning) {
        try {
          return lighten3(color2, coefficient);
        } catch (error) {
          if (warning && true) {
            console.warn(warning);
          }
          return color2;
        }
      }
      function emphasize(color2, coefficient = 0.15) {
        return getLuminance(color2) > 0.5 ? darken3(color2, coefficient) : lighten3(color2, coefficient);
      }
      function private_safeEmphasize(color2, coefficient, warning) {
        try {
          return emphasize(color2, coefficient);
        } catch (error) {
          if (warning && true) {
            console.warn(warning);
          }
          return color2;
        }
      }
      function blend(background, overlay, opacity, gamma = 1) {
        const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
        const backgroundColor2 = decomposeColor(background);
        const overlayColor = decomposeColor(overlay);
        const rgb = [blendChannel(backgroundColor2.values[0], overlayColor.values[0]), blendChannel(backgroundColor2.values[1], overlayColor.values[1]), blendChannel(backgroundColor2.values[2], overlayColor.values[2])];
        return recomposeColor({
          type: "rgb",
          values: rgb
        });
      }
    }
  });

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createStyled.js
  var require_createStyled = __commonJS({
    "../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/createStyled.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = createStyled5;
      exports.shouldForwardProp = shouldForwardProp2;
      exports.systemDefaultTheme = void 0;
      var _extends2 = _interopRequireDefault(require_extends());
      var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require_objectWithoutPropertiesLoose());
      var _styledEngine = _interopRequireWildcard(require_node());
      var _deepmerge = require_deepmerge2();
      var _capitalize = _interopRequireDefault(require_capitalize2());
      var _getDisplayName = _interopRequireDefault(require_getDisplayName2());
      var _createTheme = _interopRequireDefault(require_createTheme2());
      var _styleFunctionSx = _interopRequireDefault(require_styleFunctionSx2());
      var _excluded20 = ["ownerState"];
      var _excluded23 = ["variants"];
      var _excluded33 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap)
          return null;
        var r2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(e2) {
          return e2 ? t : r2;
        })(e);
      }
      function _interopRequireWildcard(e, r2) {
        if (!r2 && e && e.__esModule)
          return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
          return { default: e };
        var t = _getRequireWildcardCache(r2);
        if (t && t.has(e))
          return t.get(e);
        var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
          }
        return n.default = e, t && t.set(e, n), n;
      }
      function isEmpty2(obj) {
        return Object.keys(obj).length === 0;
      }
      function isStringTag2(tag) {
        return typeof tag === "string" && // 96 is one less than the char code
        // for "a" so this is checking that
        // it's a lowercase character
        tag.charCodeAt(0) > 96;
      }
      function shouldForwardProp2(prop) {
        return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
      }
      var systemDefaultTheme3 = exports.systemDefaultTheme = (0, _createTheme.default)();
      var lowercaseFirstLetter2 = (string) => {
        if (!string) {
          return string;
        }
        return string.charAt(0).toLowerCase() + string.slice(1);
      };
      function resolveTheme2({
        defaultTheme: defaultTheme4,
        theme,
        themeId
      }) {
        return isEmpty2(theme) ? defaultTheme4 : theme[themeId] || theme;
      }
      function defaultOverridesResolver2(slot) {
        if (!slot) {
          return null;
        }
        return (props, styles) => styles[slot];
      }
      function processStyleArg2(callableStyle, _ref) {
        let {
          ownerState
        } = _ref, props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded20);
        const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle((0, _extends2.default)({
          ownerState
        }, props)) : callableStyle;
        if (Array.isArray(resolvedStylesArg)) {
          return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg2(resolvedStyle, (0, _extends2.default)({
            ownerState
          }, props)));
        }
        if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
          const {
            variants = []
          } = resolvedStylesArg, otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded23);
          let result = otherStyles;
          variants.forEach((variant) => {
            let isMatch = true;
            if (typeof variant.props === "function") {
              isMatch = variant.props((0, _extends2.default)({
                ownerState
              }, props, ownerState));
            } else {
              Object.keys(variant.props).forEach((key) => {
                if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
                  isMatch = false;
                }
              });
            }
            if (isMatch) {
              if (!Array.isArray(result)) {
                result = [result];
              }
              result.push(typeof variant.style === "function" ? variant.style((0, _extends2.default)({
                ownerState
              }, props, ownerState)) : variant.style);
            }
          });
          return result;
        }
        return resolvedStylesArg;
      }
      function createStyled5(input = {}) {
        const {
          themeId,
          defaultTheme: defaultTheme4 = systemDefaultTheme3,
          rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp2,
          slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp2
        } = input;
        const systemSx = (props) => {
          return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
            theme: resolveTheme2((0, _extends2.default)({}, props, {
              defaultTheme: defaultTheme4,
              themeId
            }))
          }));
        };
        systemSx.__mui_systemSx = true;
        return (tag, inputOptions = {}) => {
          (0, _styledEngine.internal_processStyles)(tag, (styles) => styles.filter((style4) => !(style4 != null && style4.__mui_systemSx)));
          const {
            name: componentName,
            slot: componentSlot,
            skipVariantsResolver: inputSkipVariantsResolver,
            skipSx: inputSkipSx,
            // TODO v6: remove `lowercaseFirstLetter()` in the next major release
            // For more details: https://github.com/mui/material-ui/pull/37908
            overridesResolver = defaultOverridesResolver2(lowercaseFirstLetter2(componentSlot))
          } = inputOptions, options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded33);
          const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
            // TODO v6: remove `Root` in the next major release
            // For more details: https://github.com/mui/material-ui/pull/37908
            componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
          );
          const skipSx = inputSkipSx || false;
          let label;
          if (true) {
            if (componentName) {
              label = `${componentName}-${lowercaseFirstLetter2(componentSlot || "Root")}`;
            }
          }
          let shouldForwardPropOption = shouldForwardProp2;
          if (componentSlot === "Root" || componentSlot === "root") {
            shouldForwardPropOption = rootShouldForwardProp2;
          } else if (componentSlot) {
            shouldForwardPropOption = slotShouldForwardProp2;
          } else if (isStringTag2(tag)) {
            shouldForwardPropOption = void 0;
          }
          const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
            shouldForwardProp: shouldForwardPropOption,
            label
          }, options));
          const transformStyleArg = (stylesArg) => {
            if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
              return (props) => processStyleArg2(stylesArg, (0, _extends2.default)({}, props, {
                theme: resolveTheme2({
                  theme: props.theme,
                  defaultTheme: defaultTheme4,
                  themeId
                })
              }));
            }
            return stylesArg;
          };
          const muiStyledResolver = (styleArg, ...expressions) => {
            let transformedStyleArg = transformStyleArg(styleArg);
            const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
            if (componentName && overridesResolver) {
              expressionsWithDefaultTheme.push((props) => {
                const theme = resolveTheme2((0, _extends2.default)({}, props, {
                  defaultTheme: defaultTheme4,
                  themeId
                }));
                if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
                  return null;
                }
                const styleOverrides = theme.components[componentName].styleOverrides;
                const resolvedStyleOverrides = {};
                Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
                  resolvedStyleOverrides[slotKey] = processStyleArg2(slotStyle, (0, _extends2.default)({}, props, {
                    theme
                  }));
                });
                return overridesResolver(props, resolvedStyleOverrides);
              });
            }
            if (componentName && !skipVariantsResolver) {
              expressionsWithDefaultTheme.push((props) => {
                var _theme$components;
                const theme = resolveTheme2((0, _extends2.default)({}, props, {
                  defaultTheme: defaultTheme4,
                  themeId
                }));
                const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
                return processStyleArg2({
                  variants: themeVariants
                }, (0, _extends2.default)({}, props, {
                  theme
                }));
              });
            }
            if (!skipSx) {
              expressionsWithDefaultTheme.push(systemSx);
            }
            const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
            if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
              const placeholders = new Array(numOfCustomFnsApplied).fill("");
              transformedStyleArg = [...styleArg, ...placeholders];
              transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
            }
            const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
            if (true) {
              let displayName;
              if (componentName) {
                displayName = `${componentName}${(0, _capitalize.default)(componentSlot || "")}`;
              }
              if (displayName === void 0) {
                displayName = `Styled(${(0, _getDisplayName.default)(tag)})`;
              }
              Component.displayName = displayName;
            }
            if (tag.muiName) {
              Component.muiName = tag.muiName;
            }
            return Component;
          };
          if (defaultStyledResolver.withConfig) {
            muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
          }
          return muiStyledResolver;
        };
      }
    }
  });

  // src/App.tsx
  var import_react7 = __toESM(require_react(), 1);

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/common.js
  var common = {
    black: "#000",
    white: "#fff"
  };
  var common_default = common;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/red.js
  var red = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  };
  var red_default = red;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/purple.js
  var purple = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  };
  var purple_default = purple;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/blue.js
  var blue = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  var blue_default = blue;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/lightBlue.js
  var lightBlue = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  };
  var lightBlue_default = lightBlue;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/green.js
  var green = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  var green_default = green;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/orange.js
  var orange = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  };
  var orange_default = orange;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/colors/grey.js
  var grey = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  var grey_default = grey;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/identifier.js
  var identifier_default = "$$material";

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/index.js
  var import_styled_engine4 = __toESM(require_node());

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createTheme/createTheme.js
  init_extends();
  var import_deepmerge3 = __toESM(require_deepmerge2());

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createTheme/createBreakpoints.js
  init_extends();
  var _excluded = ["values", "unit", "step"];
  var sortBreakpointsValues = (values3) => {
    const breakpointsAsArray = Object.keys(values3).map((key) => ({
      key,
      val: values3[key]
    })) || [];
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return _extends({}, acc, {
        [obj.key]: obj.val
      });
    }, {});
  };
  function createBreakpoints(breakpoints) {
    const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values: values3 = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536
        // large screen
      },
      unit = "px",
      step = 5
    } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded);
    const sortedValues = sortBreakpointsValues(values3);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values3[key] === "number" ? values3[key] : key;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
      const value = typeof values3[key] === "number" ? values3[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values3[start] === "number" ? values3[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values3[keys[endIndex]] === "number" ? values3[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
    }
    return _extends({
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit
    }, other);
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createTheme/shape.js
  var shape = {
    borderRadius: 4
  };
  var shape_default = shape;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/responsivePropType.js
  var import_prop_types = __toESM(require_prop_types());
  var responsivePropType = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.object, import_prop_types.default.array]) : {};
  var responsivePropType_default = responsivePropType;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/breakpoints.js
  init_extends();
  var import_deepmerge2 = __toESM(require_deepmerge2());

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/merge.js
  var import_deepmerge = __toESM(require_deepmerge2());
  function merge2(acc, item) {
    if (!item) {
      return acc;
    }
    return (0, import_deepmerge.default)(acc, item, {
      clone: false
      // No need to clone deep, it's way faster.
    });
  }
  var merge_default = merge2;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/breakpoints.js
  var values = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536
    // large screen
  };
  var defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (key) => `@media (min-width:${values[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === "object") {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;
    const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style4) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key];
      }
      return acc;
    }, style4);
  }
  function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
    const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
    const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev2, next2) => (0, import_deepmerge2.default)(prev2, next2), {});
    return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
  }
  function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
    if (typeof breakpointValues !== "object") {
      return {};
    }
    const base = {};
    const breakpointsKeys = Object.keys(themeBreakpoints);
    if (Array.isArray(breakpointValues)) {
      breakpointsKeys.forEach((breakpoint, i) => {
        if (i < breakpointValues.length) {
          base[breakpoint] = true;
        }
      });
    } else {
      breakpointsKeys.forEach((breakpoint) => {
        if (breakpointValues[breakpoint] != null) {
          base[breakpoint] = true;
        }
      });
    }
    return base;
  }
  function resolveBreakpointValues({
    values: breakpointValues,
    breakpoints: themeBreakpoints,
    base: customBase
  }) {
    const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
    const keys = Object.keys(base);
    if (keys.length === 0) {
      return breakpointValues;
    }
    let previous;
    return keys.reduce((acc, breakpoint, i) => {
      if (Array.isArray(breakpointValues)) {
        acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
        previous = i;
      } else if (typeof breakpointValues === "object") {
        acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
        previous = breakpoint;
      } else {
        acc[breakpoint] = breakpointValues;
      }
      return acc;
    }, {});
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/style.js
  var import_capitalize = __toESM(require_capitalize2());
  function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== "string") {
      return null;
    }
    if (obj && obj.vars && checkVars) {
      const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
      if (val != null) {
        return val;
      }
    }
    return path.split(".").reduce((acc, item) => {
      if (acc && acc[item] != null) {
        return acc[item];
      }
      return null;
    }, obj);
  }
  function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === "function") {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function style(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;
    const fn = (props) => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : (0, import_capitalize.default)(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = true ? {
      [prop]: responsivePropType_default
    } : {};
    fn.filterProps = [prop];
    return fn;
  }
  var style_default = style;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/memoize.js
  function memoize2(fn) {
    const cache = {};
    return (arg) => {
      if (cache[arg] === void 0) {
        cache[arg] = fn(arg);
      }
      return cache[arg];
    };
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/spacing.js
  var properties = {
    m: "margin",
    p: "padding"
  };
  var directions = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  };
  var aliases = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  var getCssProperties = memoize2((prop) => {
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b] = prop.split("");
    const property = properties[a];
    const direction = directions[b] || "";
    return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
  });
  var marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
  var paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
  var spacingKeys = [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    var _getPath;
    const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
    if (typeof themeSpacing === "number") {
      return (abs2) => {
        if (typeof abs2 === "string") {
          return abs2;
        }
        if (true) {
          if (typeof abs2 !== "number") {
            console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs2}.`);
          }
        }
        return themeSpacing * abs2;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return (abs2) => {
        if (typeof abs2 === "string") {
          return abs2;
        }
        if (true) {
          if (!Number.isInteger(abs2)) {
            console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
          } else if (abs2 > themeSpacing.length - 1) {
            console.error([`MUI: The value provided (${abs2}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs2} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
          }
        }
        return themeSpacing[abs2];
      };
    }
    if (typeof themeSpacing === "function") {
      return themeSpacing;
    }
    if (true) {
      console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
    }
    return () => void 0;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, "spacing", 8, "spacing");
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === "string" || propValue == null) {
      return propValue;
    }
    const abs2 = Math.abs(propValue);
    const transformed = transformer(abs2);
    if (propValue >= 0) {
      return transformed;
    }
    if (typeof transformed === "number") {
      return -transformed;
    }
    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return (propValue) => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer) {
    if (keys.indexOf(prop) === -1) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style2(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge_default, {});
  }
  function margin(props) {
    return style2(props, marginKeys);
  }
  margin.propTypes = true ? marginKeys.reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style2(props, paddingKeys);
  }
  padding.propTypes = true ? paddingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  padding.filterProps = paddingKeys;
  function spacing(props) {
    return style2(props, spacingKeys);
  }
  spacing.propTypes = true ? spacingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  spacing.filterProps = spacingKeys;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createTheme/createSpacing.js
  function createSpacing(spacingInput = 8) {
    if (spacingInput.mui) {
      return spacingInput;
    }
    const transform = createUnarySpacing({
      spacing: spacingInput
    });
    const spacing2 = (...argsInput) => {
      if (true) {
        if (!(argsInput.length <= 4)) {
          console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
        }
      }
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map((argument) => {
        const output = transform(argument);
        return typeof output === "number" ? `${output}px` : output;
      }).join(" ");
    };
    spacing2.mui = true;
    return spacing2;
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
  var import_capitalize2 = __toESM(require_capitalize2());

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/compose.js
  function compose(...styles) {
    const handlers = styles.reduce((acc, style4) => {
      style4.filterProps.forEach((prop) => {
        acc[prop] = style4;
      });
      return acc;
    }, {});
    const fn = (props) => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge_default(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn.propTypes = true ? styles.reduce((acc, style4) => Object.assign(acc, style4.propTypes), {}) : {};
    fn.filterProps = styles.reduce((acc, style4) => acc.concat(style4.filterProps), []);
    return fn;
  }
  var compose_default = compose;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/borders.js
  function borderTransform(value) {
    if (typeof value !== "number") {
      return value;
    }
    return `${value}px solid`;
  }
  function createBorderStyle(prop, transform) {
    return style_default({
      prop,
      themeKey: "borders",
      transform
    });
  }
  var border = createBorderStyle("border", borderTransform);
  var borderTop = createBorderStyle("borderTop", borderTransform);
  var borderRight = createBorderStyle("borderRight", borderTransform);
  var borderBottom = createBorderStyle("borderBottom", borderTransform);
  var borderLeft = createBorderStyle("borderLeft", borderTransform);
  var borderColor = createBorderStyle("borderColor");
  var borderTopColor = createBorderStyle("borderTopColor");
  var borderRightColor = createBorderStyle("borderRightColor");
  var borderBottomColor = createBorderStyle("borderBottomColor");
  var borderLeftColor = createBorderStyle("borderLeftColor");
  var outline = createBorderStyle("outline", borderTransform);
  var outlineColor = createBorderStyle("outlineColor");
  var borderRadius = (props) => {
    if (props.borderRadius !== void 0 && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
      const styleFromPropValue = (propValue) => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = true ? {
    borderRadius: responsivePropType_default
  } : {};
  borderRadius.filterProps = ["borderRadius"];
  var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/cssGrid.js
  var gap = (props) => {
    if (props.gap !== void 0 && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
      const styleFromPropValue = (propValue) => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = true ? {
    gap: responsivePropType_default
  } : {};
  gap.filterProps = ["gap"];
  var columnGap = (props) => {
    if (props.columnGap !== void 0 && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
      const styleFromPropValue = (propValue) => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = true ? {
    columnGap: responsivePropType_default
  } : {};
  columnGap.filterProps = ["columnGap"];
  var rowGap = (props) => {
    if (props.rowGap !== void 0 && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
      const styleFromPropValue = (propValue) => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = true ? {
    rowGap: responsivePropType_default
  } : {};
  rowGap.filterProps = ["rowGap"];
  var gridColumn = style_default({
    prop: "gridColumn"
  });
  var gridRow = style_default({
    prop: "gridRow"
  });
  var gridAutoFlow = style_default({
    prop: "gridAutoFlow"
  });
  var gridAutoColumns = style_default({
    prop: "gridAutoColumns"
  });
  var gridAutoRows = style_default({
    prop: "gridAutoRows"
  });
  var gridTemplateColumns = style_default({
    prop: "gridTemplateColumns"
  });
  var gridTemplateRows = style_default({
    prop: "gridTemplateRows"
  });
  var gridTemplateAreas = style_default({
    prop: "gridTemplateAreas"
  });
  var gridArea = style_default({
    prop: "gridArea"
  });
  var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/palette.js
  function paletteTransform(value, userValue) {
    if (userValue === "grey") {
      return userValue;
    }
    return value;
  }
  var color = style_default({
    prop: "color",
    themeKey: "palette",
    transform: paletteTransform
  });
  var bgcolor = style_default({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  var backgroundColor = style_default({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  var palette = compose_default(color, bgcolor, backgroundColor);

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/sizing.js
  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  var width = style_default({
    prop: "width",
    transform: sizingTransform
  });
  var maxWidth = (props) => {
    if (props.maxWidth !== void 0 && props.maxWidth !== null) {
      const styleFromPropValue = (propValue) => {
        var _props$theme, _props$theme2;
        const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
        if (!breakpoint) {
          return {
            maxWidth: sizingTransform(propValue)
          };
        }
        if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
          return {
            maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
          };
        }
        return {
          maxWidth: breakpoint
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ["maxWidth"];
  var minWidth = style_default({
    prop: "minWidth",
    transform: sizingTransform
  });
  var height = style_default({
    prop: "height",
    transform: sizingTransform
  });
  var maxHeight = style_default({
    prop: "maxHeight",
    transform: sizingTransform
  });
  var minHeight = style_default({
    prop: "minHeight",
    transform: sizingTransform
  });
  var sizeWidth = style_default({
    prop: "size",
    cssProperty: "width",
    transform: sizingTransform
  });
  var sizeHeight = style_default({
    prop: "size",
    cssProperty: "height",
    transform: sizingTransform
  });
  var boxSizing = style_default({
    prop: "boxSizing"
  });
  var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js
  var defaultSxConfig = {
    // borders
    border: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderTop: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderRight: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderBottom: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderLeft: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: borderTransform
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: borderRadius
    },
    // palette
    color: {
      themeKey: "palette",
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: "palette",
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: (value) => ({
        "@media print": {
          display: value
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
      themeKey: "shadows"
    },
    // sizing
    width: {
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
    },
    boxSizing: {},
    // typography
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  var defaultSxConfig_default = defaultSxConfig;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every((object) => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
  }
  function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme, config) {
      const props = {
        [prop]: val,
        theme
      };
      const options = config[prop];
      if (!options) {
        return {
          [prop]: val
        };
      }
      const {
        cssProperty = prop,
        themeKey,
        transform,
        style: style4
      } = options;
      if (val == null) {
        return null;
      }
      if (themeKey === "typography" && val === "inherit") {
        return {
          [prop]: val
        };
      }
      const themeMapping = getPath(theme, themeKey) || {};
      if (style4) {
        return style4(props);
      }
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : (0, import_capitalize2.default)(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, val, styleFromPropValue);
    }
    function styleFunctionSx3(props) {
      var _theme$unstable_sxCon;
      const {
        sx,
        theme = {}
      } = props || {};
      if (!sx) {
        return null;
      }
      const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig_default;
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === "function") {
          sxObject = sxInput(theme);
        } else if (typeof sxInput !== "object") {
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css3 = emptyBreakpoints;
        Object.keys(sxObject).forEach((styleKey) => {
          const value = callIfFn(sxObject[styleKey], theme);
          if (value !== null && value !== void 0) {
            if (typeof value === "object") {
              if (config[styleKey]) {
                css3 = merge_default(css3, getThemeValue(styleKey, value, theme, config));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme
                }, value, (x) => ({
                  [styleKey]: x
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css3[styleKey] = styleFunctionSx3({
                    sx: value,
                    theme
                  });
                } else {
                  css3 = merge_default(css3, breakpointsValues);
                }
              }
            } else {
              css3 = merge_default(css3, getThemeValue(styleKey, value, theme, config));
            }
          }
        });
        return removeUnusedBreakpoints(breakpointsKeys, css3);
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx3;
  }
  var styleFunctionSx = unstable_createStyleFunctionSx();
  styleFunctionSx.filterProps = ["sx"];
  var styleFunctionSx_default = styleFunctionSx;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createTheme/applyStyles.js
  function applyStyles(key, styles) {
    const theme = this;
    if (theme.vars && typeof theme.getColorSchemeSelector === "function") {
      const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
      return {
        [selector]: styles
      };
    }
    if (theme.palette.mode === key) {
      return styles;
    }
    return {};
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createTheme/createTheme.js
  var _excluded2 = ["breakpoints", "palette", "spacing", "shape"];
  function createTheme(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded2);
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing2 = createSpacing(spacingInput);
    let muiTheme = (0, import_deepmerge3.default)({
      breakpoints,
      direction: "ltr",
      components: {},
      // Inject component definitions.
      palette: _extends({
        mode: "light"
      }, paletteInput),
      spacing: spacing2,
      shape: _extends({}, shape_default, shapeInput)
    }, other);
    muiTheme.applyStyles = applyStyles;
    muiTheme = args.reduce((acc, argument) => (0, import_deepmerge3.default)(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx_default({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }
  var createTheme_default = createTheme;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/useThemeWithoutDefault.js
  var React5 = __toESM(require_react());
  var import_styled_engine = __toESM(require_node());
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function useTheme3(defaultTheme4 = null) {
    const contextTheme = React5.useContext(import_styled_engine.ThemeContext);
    return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme4 : contextTheme;
  }
  var useThemeWithoutDefault_default = useTheme3;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/useTheme.js
  var systemDefaultTheme = createTheme_default();
  function useTheme4(defaultTheme4 = systemDefaultTheme) {
    return useThemeWithoutDefault_default(defaultTheme4);
  }
  var useTheme_default = useTheme4;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
  init_extends();
  var import_deepmerge4 = __toESM(require_deepmerge2());
  var _excluded3 = ["sx"];
  var splitProps = (props) => {
    var _props$theme$unstable, _props$theme;
    const result = {
      systemProps: {},
      otherProps: {}
    };
    const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig_default;
    Object.keys(props).forEach((prop) => {
      if (config[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };
  function extendSxProp(props) {
    const {
      sx: inSx
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
    const {
      systemProps,
      otherProps
    } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
      finalSx = [systemProps, ...inSx];
    } else if (typeof inSx === "function") {
      finalSx = (...args) => {
        const result = inSx(...args);
        if (!(0, import_deepmerge4.isPlainObject)(result)) {
          return systemProps;
        }
        return _extends({}, systemProps, result);
      };
    } else {
      finalSx = _extends({}, systemProps, inSx);
    }
    return _extends({}, otherProps, {
      sx: finalSx
    });
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js
  var defaultGenerator = (componentName) => componentName;
  var createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  var ClassNameGenerator = createClassNameGenerator();
  var ClassNameGenerator_default = ClassNameGenerator;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createBox.js
  init_extends();
  var React6 = __toESM(require_react());

  // ../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e)
      n += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
      } else
        for (f in e)
          e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
      (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default = clsx;

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createBox.js
  var import_styled_engine2 = __toESM(require_node());
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var _excluded4 = ["className", "component"];
  function createBox(options = {}) {
    const {
      themeId,
      defaultTheme: defaultTheme4,
      defaultClassName = "MuiBox-root",
      generateClassName
    } = options;
    const BoxRoot = (0, import_styled_engine2.default)("div", {
      shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
    })(styleFunctionSx_default);
    const Box2 = /* @__PURE__ */ React6.forwardRef(function Box3(inProps, ref) {
      const theme = useTheme_default(defaultTheme4);
      const _extendSxProp = extendSxProp(inProps), {
        className,
        component = "div"
      } = _extendSxProp, other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded4);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoxRoot, _extends({
        as: component,
        ref,
        className: clsx_default(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
        theme: themeId ? theme[themeId] || theme : theme
      }, other));
    });
    return Box2;
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js
  var globalStateClasses = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js
  function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
    const result = {};
    slots.forEach((slot) => {
      result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
    });
    return result;
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/createStyled.js
  init_extends();
  var import_styled_engine3 = __toESM(require_node());
  var import_deepmerge5 = __toESM(require_deepmerge2());
  var import_capitalize3 = __toESM(require_capitalize2());
  var import_getDisplayName = __toESM(require_getDisplayName2());
  var _excluded5 = ["ownerState"];
  var _excluded22 = ["variants"];
  var _excluded32 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function isStringTag(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
  }
  function shouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  var systemDefaultTheme2 = createTheme_default();
  var lowercaseFirstLetter = (string) => {
    if (!string) {
      return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
  };
  function resolveTheme({
    defaultTheme: defaultTheme4,
    theme,
    themeId
  }) {
    return isEmpty(theme) ? defaultTheme4 : theme[themeId] || theme;
  }
  function defaultOverridesResolver(slot) {
    if (!slot) {
      return null;
    }
    return (props, styles) => styles[slot];
  }
  function processStyleArg(callableStyle, _ref) {
    let {
      ownerState
    } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded5);
    const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle(_extends({
      ownerState
    }, props)) : callableStyle;
    if (Array.isArray(resolvedStylesArg)) {
      return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg(resolvedStyle, _extends({
        ownerState
      }, props)));
    }
    if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
      const {
        variants = []
      } = resolvedStylesArg, otherStyles = _objectWithoutPropertiesLoose(resolvedStylesArg, _excluded22);
      let result = otherStyles;
      variants.forEach((variant) => {
        let isMatch = true;
        if (typeof variant.props === "function") {
          isMatch = variant.props(_extends({
            ownerState
          }, props, ownerState));
        } else {
          Object.keys(variant.props).forEach((key) => {
            if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
              isMatch = false;
            }
          });
        }
        if (isMatch) {
          if (!Array.isArray(result)) {
            result = [result];
          }
          result.push(typeof variant.style === "function" ? variant.style(_extends({
            ownerState
          }, props, ownerState)) : variant.style);
        }
      });
      return result;
    }
    return resolvedStylesArg;
  }
  function createStyled3(input = {}) {
    const {
      themeId,
      defaultTheme: defaultTheme4 = systemDefaultTheme2,
      rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
      slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
    } = input;
    const systemSx = (props) => {
      return styleFunctionSx_default(_extends({}, props, {
        theme: resolveTheme(_extends({}, props, {
          defaultTheme: defaultTheme4,
          themeId
        }))
      }));
    };
    systemSx.__mui_systemSx = true;
    return (tag, inputOptions = {}) => {
      (0, import_styled_engine3.internal_processStyles)(tag, (styles) => styles.filter((style4) => !(style4 != null && style4.__mui_systemSx)));
      const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded32);
      const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
      );
      const skipSx = inputSkipSx || false;
      let label;
      if (true) {
        if (componentName) {
          label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
        }
      }
      let shouldForwardPropOption = shouldForwardProp;
      if (componentSlot === "Root" || componentSlot === "root") {
        shouldForwardPropOption = rootShouldForwardProp2;
      } else if (componentSlot) {
        shouldForwardPropOption = slotShouldForwardProp2;
      } else if (isStringTag(tag)) {
        shouldForwardPropOption = void 0;
      }
      const defaultStyledResolver = (0, import_styled_engine3.default)(tag, _extends({
        shouldForwardProp: shouldForwardPropOption,
        label
      }, options));
      const transformStyleArg = (stylesArg) => {
        if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || (0, import_deepmerge5.isPlainObject)(stylesArg)) {
          return (props) => processStyleArg(stylesArg, _extends({}, props, {
            theme: resolveTheme({
              theme: props.theme,
              defaultTheme: defaultTheme4,
              themeId
            })
          }));
        }
        return stylesArg;
      };
      const muiStyledResolver = (styleArg, ...expressions) => {
        let transformedStyleArg = transformStyleArg(styleArg);
        const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
        if (componentName && overridesResolver) {
          expressionsWithDefaultTheme.push((props) => {
            const theme = resolveTheme(_extends({}, props, {
              defaultTheme: defaultTheme4,
              themeId
            }));
            if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
              return null;
            }
            const styleOverrides = theme.components[componentName].styleOverrides;
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, _extends({}, props, {
                theme
              }));
            });
            return overridesResolver(props, resolvedStyleOverrides);
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsWithDefaultTheme.push((props) => {
            var _theme$components;
            const theme = resolveTheme(_extends({}, props, {
              defaultTheme: defaultTheme4,
              themeId
            }));
            const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
            return processStyleArg({
              variants: themeVariants
            }, _extends({}, props, {
              theme
            }));
          });
        }
        if (!skipSx) {
          expressionsWithDefaultTheme.push(systemSx);
        }
        const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
        if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
          const placeholders = new Array(numOfCustomFnsApplied).fill("");
          transformedStyleArg = [...styleArg, ...placeholders];
          transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
        }
        const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
        if (true) {
          let displayName;
          if (componentName) {
            displayName = `${componentName}${(0, import_capitalize3.default)(componentSlot || "")}`;
          }
          if (displayName === void 0) {
            displayName = `Styled(${(0, import_getDisplayName.default)(tag)})`;
          }
          Component.displayName = displayName;
        }
        if (tag.muiName) {
          Component.muiName = tag.muiName;
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/styled.js
  var styled2 = createStyled3();
  var styled_default = styled2;

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/resolveProps/resolveProps.js
  init_extends();
  function resolveProps(defaultProps2, props) {
    const output = _extends({}, props);
    Object.keys(defaultProps2).forEach((propName) => {
      if (propName.toString().match(/^(components|slots)$/)) {
        output[propName] = _extends({}, defaultProps2[propName], output[propName]);
      } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
        const defaultSlotProps = defaultProps2[propName] || {};
        const slotProps = props[propName];
        output[propName] = {};
        if (!slotProps || !Object.keys(slotProps)) {
          output[propName] = defaultSlotProps;
        } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
          output[propName] = slotProps;
        } else {
          output[propName] = _extends({}, slotProps);
          Object.keys(defaultSlotProps).forEach((slotPropName) => {
            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
          });
        }
      } else if (output[propName] === void 0) {
        output[propName] = defaultProps2[propName];
      }
    });
    return output;
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
      return props;
    }
    return resolveProps(theme.components[name].defaultProps, props);
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
  function useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme4,
    themeId
  }) {
    let theme = useTheme_default(defaultTheme4);
    if (themeId) {
      theme = theme[themeId] || theme;
    }
    const mergedProps = getThemeProps({
      theme,
      name,
      props
    });
    return mergedProps;
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js
  var React7 = __toESM(require_react());
  var useEnhancedEffect = typeof window !== "undefined" ? React7.useLayoutEffect : React7.useEffect;
  var useEnhancedEffect_default = useEnhancedEffect;

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/chainPropTypes/chainPropTypes.js
  function chainPropTypes(propType1, propType2) {
    if (false) {
      return () => null;
    }
    return function validate(...args) {
      return propType1(...args) || propType2(...args);
    };
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.js
  var import_prop_types2 = __toESM(require_prop_types());
  function isClassComponent(elementType) {
    const {
      prototype = {}
    } = elementType;
    return Boolean(prototype.isReactComponent);
  }
  function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === "undefined") {
      return null;
    }
    let warningHint;
    if (typeof propValue === "function" && !isClassComponent(propValue)) {
      warningHint = "Did you accidentally provide a plain function component instead?";
    }
    if (warningHint !== void 0) {
      return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
    }
    return null;
  }
  var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types2.default.elementType, elementTypeAcceptingRef);

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/refType/refType.js
  var import_prop_types3 = __toESM(require_prop_types());
  var refType = import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]);
  var refType_default = refType;

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/setRef/setRef.js
  function setRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/useEventCallback/useEventCallback.js
  var React8 = __toESM(require_react());
  function useEventCallback(fn) {
    const ref = React8.useRef(fn);
    useEnhancedEffect_default(() => {
      ref.current = fn;
    });
    return React8.useRef((...args) => (
      // @ts-expect-error hide `this`
      (0, ref.current)(...args)
    )).current;
  }
  var useEventCallback_default = useEventCallback;

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/useForkRef/useForkRef.js
  var React9 = __toESM(require_react());
  function useForkRef(...refs) {
    return React9.useMemo(() => {
      if (refs.every((ref) => ref == null)) {
        return null;
      }
      return (instance) => {
        refs.forEach((ref) => {
          setRef(ref, instance);
        });
      };
    }, refs);
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/useLazyRef/useLazyRef.js
  var React10 = __toESM(require_react());
  var UNINITIALIZED = {};
  function useLazyRef(init, initArg) {
    const ref = React10.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = init(initArg);
    }
    return ref;
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/useOnMount/useOnMount.js
  var React11 = __toESM(require_react());
  var EMPTY = [];
  function useOnMount(fn) {
    React11.useEffect(fn, EMPTY);
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/useTimeout/useTimeout.js
  var Timeout = class _Timeout {
    constructor() {
      this.currentId = null;
      this.clear = () => {
        if (this.currentId !== null) {
          clearTimeout(this.currentId);
          this.currentId = null;
        }
      };
      this.disposeEffect = () => {
        return this.clear;
      };
    }
    static create() {
      return new _Timeout();
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    start(delay, fn) {
      this.clear();
      this.currentId = setTimeout(() => {
        this.currentId = null;
        fn();
      }, delay);
    }
  };
  function useTimeout() {
    const timeout = useLazyRef(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/useIsFocusVisible/useIsFocusVisible.js
  var React12 = __toESM(require_react());
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = new Timeout();
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    "datetime-local": true
  };
  function focusTriggersKeyboardModality(node2) {
    const {
      type,
      tagName
    } = node2;
    if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
      return true;
    }
    if (tagName === "TEXTAREA" && !node2.readOnly) {
      return true;
    }
    if (node2.isContentEditable) {
      return true;
    }
    return false;
  }
  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }
    hadKeyboardEvent = true;
  }
  function handlePointerDown() {
    hadKeyboardEvent = false;
  }
  function handleVisibilityChange() {
    if (this.visibilityState === "hidden") {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }
  function prepare(doc) {
    doc.addEventListener("keydown", handleKeyDown, true);
    doc.addEventListener("mousedown", handlePointerDown, true);
    doc.addEventListener("pointerdown", handlePointerDown, true);
    doc.addEventListener("touchstart", handlePointerDown, true);
    doc.addEventListener("visibilitychange", handleVisibilityChange, true);
  }
  function isFocusVisible(event) {
    const {
      target
    } = event;
    try {
      return target.matches(":focus-visible");
    } catch (error) {
    }
    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  function useIsFocusVisible() {
    const ref = React12.useCallback((node2) => {
      if (node2 != null) {
        prepare(node2.ownerDocument);
      }
    }, []);
    const isFocusVisibleRef = React12.useRef(false);
    function handleBlurVisible() {
      if (isFocusVisibleRef.current) {
        hadFocusVisibleRecently = true;
        hadFocusVisibleRecentlyTimeout.start(100, () => {
          hadFocusVisibleRecently = false;
        });
        isFocusVisibleRef.current = false;
        return true;
      }
      return false;
    }
    function handleFocusVisible(event) {
      if (isFocusVisible(event)) {
        isFocusVisibleRef.current = true;
        return true;
      }
      return false;
    }
    return {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref
    };
  }

  // ../../node_modules/.pnpm/@mui+utils@5.15.14_@types+react@18.2.79_react@18.2.0/node_modules/@mui/utils/composeClasses/composeClasses.js
  function composeClasses(slots, getUtilityClass, classes = void 0) {
    const output = {};
    Object.keys(slots).forEach(
      // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
      // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
      (slot) => {
        output[slot] = slots[slot].reduce((acc, key) => {
          if (key) {
            const utilityClass = getUtilityClass(key);
            if (utilityClass !== "") {
              acc.push(utilityClass);
            }
            if (classes && classes[key]) {
              acc.push(classes[key]);
            }
          }
          return acc;
        }, []).join(" ");
      }
    );
    return output;
  }

  // ../../node_modules/.pnpm/@mui+system@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react@18.2.0/node_modules/@mui/system/esm/Stack/createStack.js
  init_extends();
  var React13 = __toESM(require_react());
  var import_prop_types4 = __toESM(require_prop_types());
  var import_deepmerge6 = __toESM(require_deepmerge2());
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  var _excluded6 = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
  var defaultTheme = createTheme_default();
  var defaultCreateStyledComponent = styled_default("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  });
  function useThemePropsDefault(props) {
    return useThemeProps({
      props,
      name: "MuiStack",
      defaultTheme
    });
  }
  function joinChildren(children, separator) {
    const childrenArray = React13.Children.toArray(children).filter(Boolean);
    return childrenArray.reduce((output, child, index) => {
      output.push(child);
      if (index < childrenArray.length - 1) {
        output.push(/* @__PURE__ */ React13.cloneElement(separator, {
          key: `separator-${index}`
        }));
      }
      return output;
    }, []);
  }
  var getSideFromDirection = (direction) => {
    return {
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom"
    }[direction];
  };
  var style3 = ({
    ownerState,
    theme
  }) => {
    let styles = _extends({
      display: "flex",
      flexDirection: "column"
    }, handleBreakpoints({
      theme
    }, resolveBreakpointValues({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), (propValue) => ({
      flexDirection: propValue
    })));
    if (ownerState.spacing) {
      const transformer = createUnarySpacing(theme);
      const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
        if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
          acc[breakpoint] = true;
        }
        return acc;
      }, {});
      const directionValues = resolveBreakpointValues({
        values: ownerState.direction,
        base
      });
      const spacingValues = resolveBreakpointValues({
        values: ownerState.spacing,
        base
      });
      if (typeof directionValues === "object") {
        Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
          const directionValue = directionValues[breakpoint];
          if (!directionValue) {
            const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
            directionValues[breakpoint] = previousDirectionValue;
          }
        });
      }
      const styleFromPropValue = (propValue, breakpoint) => {
        if (ownerState.useFlexGap) {
          return {
            gap: getValue(transformer, propValue)
          };
        }
        return {
          // The useFlexGap={false} implement relies on each child to give up control of the margin.
          // We need to reset the margin to avoid double spacing.
          "& > :not(style):not(style)": {
            margin: 0
          },
          "& > :not(style) ~ :not(style)": {
            [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
          }
        };
      };
      styles = (0, import_deepmerge6.default)(styles, handleBreakpoints({
        theme
      }, spacingValues, styleFromPropValue));
    }
    styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
    return styles;
  };
  function createStack(options = {}) {
    const {
      // This will allow adding custom styled fn (for example for custom sx style function)
      createStyledComponent = defaultCreateStyledComponent,
      useThemeProps: useThemeProps3 = useThemePropsDefault,
      componentName = "MuiStack"
    } = options;
    const useUtilityClasses9 = () => {
      const slots = {
        root: ["root"]
      };
      return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
    };
    const StackRoot = createStyledComponent(style3);
    const Stack2 = /* @__PURE__ */ React13.forwardRef(function Grid(inProps, ref) {
      const themeProps = useThemeProps3(inProps);
      const props = extendSxProp(themeProps);
      const {
        component = "div",
        direction = "column",
        spacing: spacing2 = 0,
        divider,
        children,
        className,
        useFlexGap = false
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
      const ownerState = {
        direction,
        spacing: spacing2,
        useFlexGap
      };
      const classes = useUtilityClasses9();
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StackRoot, _extends({
        as: component,
        ownerState,
        ref,
        className: clsx_default(classes.root, className)
      }, other, {
        children: divider ? joinChildren(children, divider) : children
      }));
    });
    true ? Stack2.propTypes = {
      children: import_prop_types4.default.node,
      direction: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types4.default.arrayOf(import_prop_types4.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types4.default.object]),
      divider: import_prop_types4.default.node,
      spacing: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string])), import_prop_types4.default.number, import_prop_types4.default.object, import_prop_types4.default.string]),
      sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object])
    } : void 0;
    return Stack2;
  }

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/createTheme.js
  init_extends();
  var import_deepmerge9 = __toESM(require_deepmerge2());
  var import_styleFunctionSx6 = __toESM(require_styleFunctionSx2());
  var import_createTheme5 = __toESM(require_createTheme2());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/createMixins.js
  init_extends();
  function createMixins(breakpoints, mixins) {
    return _extends({
      toolbar: {
        minHeight: 56,
        [breakpoints.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [breakpoints.up("sm")]: {
          minHeight: 64
        }
      }
    }, mixins);
  }

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/createPalette.js
  init_extends();
  var import_deepmerge7 = __toESM(require_deepmerge2());
  var import_colorManipulator = __toESM(require_colorManipulator());
  var _excluded7 = ["mode", "contrastThreshold", "tonalOffset"];
  var light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common_default.white,
      default: common_default.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  var dark = {
    text: {
      primary: common_default.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: common_default.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === "light") {
        intent.light = (0, import_colorManipulator.lighten)(intent.main, tonalOffsetLight);
      } else if (direction === "dark") {
        intent.dark = (0, import_colorManipulator.darken)(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = "light") {
    if (mode === "dark") {
      return {
        main: blue_default[200],
        light: blue_default[50],
        dark: blue_default[400]
      };
    }
    return {
      main: blue_default[700],
      light: blue_default[400],
      dark: blue_default[800]
    };
  }
  function getDefaultSecondary(mode = "light") {
    if (mode === "dark") {
      return {
        main: purple_default[200],
        light: purple_default[50],
        dark: purple_default[400]
      };
    }
    return {
      main: purple_default[500],
      light: purple_default[300],
      dark: purple_default[700]
    };
  }
  function getDefaultError(mode = "light") {
    if (mode === "dark") {
      return {
        main: red_default[500],
        light: red_default[300],
        dark: red_default[700]
      };
    }
    return {
      main: red_default[700],
      light: red_default[400],
      dark: red_default[800]
    };
  }
  function getDefaultInfo(mode = "light") {
    if (mode === "dark") {
      return {
        main: lightBlue_default[400],
        light: lightBlue_default[300],
        dark: lightBlue_default[700]
      };
    }
    return {
      main: lightBlue_default[700],
      light: lightBlue_default[500],
      dark: lightBlue_default[900]
    };
  }
  function getDefaultSuccess(mode = "light") {
    if (mode === "dark") {
      return {
        main: green_default[400],
        light: green_default[300],
        dark: green_default[700]
      };
    }
    return {
      main: green_default[800],
      light: green_default[500],
      dark: green_default[900]
    };
  }
  function getDefaultWarning(mode = "light") {
    if (mode === "dark") {
      return {
        main: orange_default[400],
        light: orange_default[300],
        dark: orange_default[700]
      };
    }
    return {
      main: "#ed6c02",
      // closest to orange[800] that pass 3:1.
      light: orange_default[500],
      dark: orange_default[900]
    };
  }
  function createPalette(palette2) {
    const {
      mode = "light",
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded7);
    const primary = palette2.primary || getDefaultPrimary(mode);
    const secondary = palette2.secondary || getDefaultSecondary(mode);
    const error = palette2.error || getDefaultError(mode);
    const info = palette2.info || getDefaultInfo(mode);
    const success = palette2.success || getDefaultSuccess(mode);
    const warning = palette2.warning || getDefaultWarning(mode);
    function getContrastText(background) {
      const contrastText = (0, import_colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      if (true) {
        const contrast = (0, import_colorManipulator.getContrastRatio)(background, contrastText);
        if (contrast < 3) {
          console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
        }
      }
      return contrastText;
    }
    const augmentColor = ({
      color: color2,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color2 = _extends({}, color2);
      if (!color2.main && color2[mainShade]) {
        color2.main = color2[mainShade];
      }
      if (!color2.hasOwnProperty("main")) {
        throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : (0, import_formatMuiErrorMessage.default)(11, name ? ` (${name})` : "", mainShade));
      }
      if (typeof color2.main !== "string") {
        throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : (0, import_formatMuiErrorMessage.default)(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
      }
      addLightOrDark(color2, "light", lightShade, tonalOffset);
      addLightOrDark(color2, "dark", darkShade, tonalOffset);
      if (!color2.contrastText) {
        color2.contrastText = getContrastText(color2.main);
      }
      return color2;
    };
    const modes = {
      dark,
      light
    };
    if (true) {
      if (!modes[mode]) {
        console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
      }
    }
    const paletteOutput = (0, import_deepmerge7.default)(_extends({
      // A collection of common colors.
      common: _extends({}, common_default),
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: "primary"
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: "error"
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: "warning"
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: "info"
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: "success"
      }),
      // The grey colors.
      grey: grey_default,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/createTypography.js
  init_extends();
  var import_deepmerge8 = __toESM(require_deepmerge2());
  var _excluded8 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  var caseAllCaps = {
    textTransform: "uppercase"
  };
  var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  function createTypography(palette2, typography) {
    const _ref = typeof typography === "function" ? typography(palette2) : typography, {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded8);
    if (true) {
      if (typeof fontSize !== "number") {
        console.error("MUI: `fontSize` is required to be a number.");
      }
      if (typeof htmlFontSize !== "number") {
        console.error("MUI: `htmlFontSize` is required to be a number.");
      }
    }
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}, casing, allVariants);
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return (0, import_deepmerge8.default)(_extends({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false
      // No need to clone deep
    });
  }

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/shadows.js
  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
  }
  var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  var shadows_default = shadows;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/createTransitions.js
  init_extends();
  var _excluded9 = ["duration", "easing", "delay"];
  var easing = {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    const constant = height2 / 36;
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = _extends({}, easing, inputTransitions.easing);
    const mergedDuration = _extends({}, duration, inputTransitions.duration);
    const create = (props = ["all"], options = {}) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options, other = _objectWithoutPropertiesLoose(options, _excluded9);
      if (true) {
        const isString = (value) => typeof value === "string";
        const isNumber = (value) => !isNaN(parseFloat(value));
        if (!isString(props) && !Array.isArray(props)) {
          console.error('MUI: Argument "props" must be a string or Array.');
        }
        if (!isNumber(durationOption) && !isString(durationOption)) {
          console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
        }
        if (!isString(easingOption)) {
          console.error('MUI: Argument "easing" must be a string.');
        }
        if (!isNumber(delay) && !isString(delay)) {
          console.error('MUI: Argument "delay" must be a number or a string.');
        }
        if (typeof options !== "object") {
          console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n"));
        }
        if (Object.keys(other).length !== 0) {
          console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
        }
      }
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
    };
    return _extends({
      getAutoHeightDuration,
      create
    }, inputTransitions, {
      easing: mergedEasing,
      duration: mergedDuration
    });
  }

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/zIndex.js
  var zIndex = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  var zIndex_default = zIndex;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/createTheme.js
  var _excluded10 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
  function createTheme2(options = {}, ...args) {
    const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded10);
    if (options.vars) {
      throw new Error(true ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : (0, import_formatMuiErrorMessage.default)(18));
    }
    const palette2 = createPalette(paletteInput);
    const systemTheme = (0, import_createTheme5.default)(options);
    let muiTheme = (0, import_deepmerge9.default)(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette: palette2,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows_default.slice(),
      typography: createTypography(palette2, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: _extends({}, zIndex_default)
    });
    muiTheme = (0, import_deepmerge9.default)(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => (0, import_deepmerge9.default)(acc, argument), muiTheme);
    if (true) {
      const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
      const traverse = (node2, component) => {
        let key;
        for (key in node2) {
          const child = node2[key];
          if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
            if (true) {
              const stateClass = generateUtilityClass("", key);
              console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node2, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
                root: {
                  [`&.${stateClass}`]: child
                }
              }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
            }
            node2[key] = {};
          }
        }
      };
      Object.keys(muiTheme.components).forEach((component) => {
        const styleOverrides = muiTheme.components[component].styleOverrides;
        if (styleOverrides && component.indexOf("Mui") === 0) {
          traverse(styleOverrides, component);
        }
      });
    }
    muiTheme.unstable_sxConfig = _extends({}, import_styleFunctionSx6.unstable_defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return (0, import_styleFunctionSx6.default)({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }
  var createTheme_default2 = createTheme2;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/defaultTheme.js
  var defaultTheme2 = createTheme_default2();
  var defaultTheme_default = defaultTheme2;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useThemeProps.js
  function useThemeProps2({
    props,
    name
  }) {
    return useThemeProps({
      props,
      name,
      defaultTheme: defaultTheme_default,
      themeId: identifier_default
    });
  }

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js
  var import_createStyled2 = __toESM(require_createStyled());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/slotShouldForwardProp.js
  function slotShouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  var slotShouldForwardProp_default = slotShouldForwardProp;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/rootShouldForwardProp.js
  var rootShouldForwardProp = (prop) => slotShouldForwardProp_default(prop) && prop !== "classes";
  var rootShouldForwardProp_default = rootShouldForwardProp;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js
  var styled3 = (0, import_createStyled2.default)({
    themeId: identifier_default,
    defaultTheme: defaultTheme_default,
    rootShouldForwardProp: rootShouldForwardProp_default
  });
  var styled_default2 = styled3;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/capitalize.js
  var import_capitalize4 = __toESM(require_capitalize2());
  var capitalize_default = import_capitalize4.default;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/useEventCallback.js
  var useEventCallback_default2 = useEventCallback_default;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/useForkRef.js
  var useForkRef_default = useForkRef;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/utils/useIsFocusVisible.js
  var useIsFocusVisible_default = useIsFocusVisible;

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  // ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0/node_modules/react-transition-group/esm/TransitionGroupContext.js
  var import_react4 = __toESM(require_react());
  var TransitionGroupContext_default = import_react4.default.createContext(null);

  // ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0/node_modules/react-transition-group/esm/TransitionGroup.js
  init_extends();

  // ../../node_modules/.pnpm/@babel+runtime@7.24.4/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  // ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0/node_modules/react-transition-group/esm/TransitionGroup.js
  var import_prop_types5 = __toESM(require_prop_types());
  var import_react6 = __toESM(require_react());

  // ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0/node_modules/react-transition-group/esm/utils/ChildMapping.js
  var import_react5 = __toESM(require_react());
  function getChildMapping(children, mapFn) {
    var mapper = function mapper2(child) {
      return mapFn && (0, import_react5.isValidElement)(child) ? mapFn(child) : child;
    };
    var result = /* @__PURE__ */ Object.create(null);
    if (children)
      import_react5.Children.map(children, function(c) {
        return c;
      }).forEach(function(child) {
        result[child.key] = mapper(child);
      });
    return result;
  }
  function mergeChildMappings(prev2, next2) {
    prev2 = prev2 || {};
    next2 = next2 || {};
    function getValueForKey(key) {
      return key in next2 ? next2[key] : prev2[key];
    }
    var nextKeysPending = /* @__PURE__ */ Object.create(null);
    var pendingKeys = [];
    for (var prevKey in prev2) {
      if (prevKey in next2) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next2) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  }
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
      return (0, import_react5.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, "appear", props),
        enter: getProp(child, "enter", props),
        exit: getProp(child, "exit", props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
      var child = children[key];
      if (!(0, import_react5.isValidElement)(child))
        return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = (0, import_react5.isValidElement)(prevChild) && !prevChild.props.in;
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = (0, import_react5.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        children[key] = (0, import_react5.cloneElement)(child, {
          in: false
        });
      } else if (hasNext && hasPrev && (0, import_react5.isValidElement)(prevChild)) {
        children[key] = (0, import_react5.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      }
    });
    return children;
  }

  // ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.2.0_react@18.2.0/node_modules/react-transition-group/esm/TransitionGroup.js
  var values2 = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
      return obj[k];
    });
  };
  var defaultProps = {
    component: "div",
    childFactory: function childFactory(child) {
      return child;
    }
  };
  var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(TransitionGroup2, _React$Component);
    function TransitionGroup2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited,
        firstRender: true
      };
      return _this;
    }
    var _proto = TransitionGroup2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };
    TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };
    _proto.handleExited = function handleExited(child, node2) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping)
        return;
      if (child.props.onExited) {
        child.props.onExited(node2);
      }
      if (this.mounted) {
        this.setState(function(state) {
          var children = _extends({}, state.children);
          delete children[child.key];
          return {
            children
          };
        });
      }
    };
    _proto.render = function render() {
      var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
      var contextValue = this.state.contextValue;
      var children = values2(this.state.children).map(childFactory2);
      delete props.appear;
      delete props.enter;
      delete props.exit;
      if (Component === null) {
        return /* @__PURE__ */ import_react6.default.createElement(TransitionGroupContext_default.Provider, {
          value: contextValue
        }, children);
      }
      return /* @__PURE__ */ import_react6.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, /* @__PURE__ */ import_react6.default.createElement(Component, props, children));
    };
    return TransitionGroup2;
  }(import_react6.default.Component);
  TransitionGroup.propTypes = true ? {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: import_prop_types5.default.any,
    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     *
     * While this component is meant for multiple `Transition` or `CSSTransition`
     * children, sometimes you may want to have a single transition child with
     * content that you want to be transitioned out and in when you change it
     * (e.g. routes, images etc.) In that case you can change the `key` prop of
     * the transition child as you change its content, this will cause
     * `TransitionGroup` to transition the child out and back in.
     */
    children: import_prop_types5.default.node,
    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: import_prop_types5.default.bool,
    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: import_prop_types5.default.bool,
    /**
     * A convenience prop that enables or disables exit animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    exit: import_prop_types5.default.bool,
    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: import_prop_types5.default.func
  } : {};
  TransitionGroup.defaultProps = defaultProps;
  var TransitionGroup_default = TransitionGroup;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/ButtonBase.js
  init_extends();
  var React18 = __toESM(require_react());
  var import_prop_types8 = __toESM(require_prop_types());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/TouchRipple.js
  init_extends();
  var React17 = __toESM(require_react());
  var import_prop_types7 = __toESM(require_prop_types());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/Ripple.js
  var React16 = __toESM(require_react());
  var import_prop_types6 = __toESM(require_prop_types());
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited,
      timeout
    } = props;
    const [leaving, setLeaving] = React16.useState(false);
    const rippleClassName = clsx_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
      setLeaving(true);
    }
    React16.useEffect(() => {
      if (!inProp && onExited != null) {
        const timeoutId = setTimeout(onExited, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }
      return void 0;
    }, [onExited, inProp, timeout]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
      className: rippleClassName,
      style: rippleStyles,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
        className: childClassName
      })
    });
  }
  true ? Ripple.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types6.default.object.isRequired,
    className: import_prop_types6.default.string,
    /**
     * @ignore - injected from TransitionGroup
     */
    in: import_prop_types6.default.bool,
    /**
     * @ignore - injected from TransitionGroup
     */
    onExited: import_prop_types6.default.func,
    /**
     * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
     */
    pulsate: import_prop_types6.default.bool,
    /**
     * Diameter of the ripple.
     */
    rippleSize: import_prop_types6.default.number,
    /**
     * Horizontal position of the ripple center.
     */
    rippleX: import_prop_types6.default.number,
    /**
     * Vertical position of the ripple center.
     */
    rippleY: import_prop_types6.default.number,
    /**
     * exit delay
     */
    timeout: import_prop_types6.default.number.isRequired
  } : void 0;
  var Ripple_default = Ripple;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/touchRippleClasses.js
  var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
  var touchRippleClasses_default = touchRippleClasses;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/TouchRipple.js
  var import_jsx_runtime4 = __toESM(require_jsx_runtime());
  var _excluded11 = ["center", "classes", "className"];
  var _ = (t) => t;
  var _t;
  var _t2;
  var _t3;
  var _t4;
  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  var enterKeyframe = (0, import_styled_engine4.keyframes)(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
  var exitKeyframe = (0, import_styled_engine4.keyframes)(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
  var pulsateKeyframe = (0, import_styled_engine4.keyframes)(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
  var TouchRippleRoot = styled_default2("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  });
  var TouchRippleRipple = styled_default2(Ripple_default, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses_default.rippleVisible, enterKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses_default.ripplePulsate, ({
    theme
  }) => theme.transitions.duration.shorter, touchRippleClasses_default.child, touchRippleClasses_default.childLeaving, exitKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses_default.childPulsate, pulsateKeyframe, ({
    theme
  }) => theme.transitions.easing.easeInOut);
  var TouchRipple = /* @__PURE__ */ React17.forwardRef(function TouchRipple2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTouchRipple"
    });
    const {
      center: centerProp = false,
      classes = {},
      className
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
    const [ripples, setRipples] = React17.useState([]);
    const nextKey = React17.useRef(0);
    const rippleCallback = React17.useRef(null);
    React17.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]);
    const ignoringMouseDown = React17.useRef(false);
    const startTimer = useTimeout();
    const startTimerCommit = React17.useRef(null);
    const container = React17.useRef(null);
    const startCommit = React17.useCallback((params) => {
      const {
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TouchRippleRipple, {
        classes: {
          ripple: clsx_default(classes.ripple, touchRippleClasses_default.ripple),
          rippleVisible: clsx_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
          ripplePulsate: clsx_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
          child: clsx_default(classes.child, touchRippleClasses_default.child),
          childLeaving: clsx_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
          childPulsate: clsx_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      }, nextKey.current)]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start = React17.useCallback((event = {}, options = {}, cb = () => {
    }) => {
      const {
        pulsate: pulsate2 = false,
        center = centerProp || options.pulsate,
        fakeElement = false
        // For test purposes
      } = options;
      if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }
      if ((event == null ? void 0 : event.type) === "touchstart") {
        ignoringMouseDown.current = true;
      }
      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let rippleX;
      let rippleY;
      let rippleSize;
      if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }
      if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      }
      if (event != null && event.touches) {
        if (startTimerCommit.current === null) {
          startTimerCommit.current = () => {
            startCommit({
              pulsate: pulsate2,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          };
          startTimer.start(DELAY_RIPPLE, () => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          });
        }
      } else {
        startCommit({
          pulsate: pulsate2,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit, startTimer]);
    const pulsate = React17.useCallback(() => {
      start({}, {
        pulsate: true
      });
    }, [start]);
    const stop = React17.useCallback((event, cb) => {
      startTimer.clear();
      if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.start(0, () => {
          stop(event, cb);
        });
        return;
      }
      startTimerCommit.current = null;
      setRipples((oldRipples) => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }
        return oldRipples;
      });
      rippleCallback.current = cb;
    }, [startTimer]);
    React17.useImperativeHandle(ref, () => ({
      pulsate,
      start,
      stop
    }), [pulsate, start, stop]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TouchRippleRoot, _extends({
      className: clsx_default(touchRippleClasses_default.root, classes.root, className),
      ref: container
    }, other, {
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TransitionGroup_default, {
        component: null,
        exit: true,
        children: ripples
      })
    }));
  });
  true ? TouchRipple.propTypes = {
    /**
     * If `true`, the ripple starts at the center of the component
     * rather than at the point of interaction.
     */
    center: import_prop_types7.default.bool,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types7.default.object,
    /**
     * @ignore
     */
    className: import_prop_types7.default.string
  } : void 0;
  var TouchRipple_default = TouchRipple;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass("MuiButtonBase", slot);
  }
  var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
  var buttonBaseClasses_default = buttonBaseClasses;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonBase/ButtonBase.js
  var import_jsx_runtime5 = __toESM(require_jsx_runtime());
  var import_jsx_runtime6 = __toESM(require_jsx_runtime());
  var _excluded12 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
  var useUtilityClasses = (ownerState) => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  var ButtonBaseRoot = styled_default2("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // Reset
    textDecoration: "none",
    // So we take precedent over the style of a native <a /> element.
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    [`&.${buttonBaseClasses_default.disabled}`]: {
      pointerEvents: "none",
      // Disable link interactions
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  var ButtonBase = /* @__PURE__ */ React18.forwardRef(function ButtonBase2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiButtonBase"
    });
    const {
      action,
      centerRipple = false,
      children,
      className,
      component = "button",
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      LinkComponent = "a",
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      touchRippleRef,
      type
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
    const buttonRef = React18.useRef(null);
    const rippleRef = React18.useRef(null);
    const handleRippleRef = useForkRef_default(rippleRef, touchRippleRef);
    const {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible_default();
    const [focusVisible, setFocusVisible] = React18.useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
    React18.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    const [mountedState, setMountedState] = React18.useState(false);
    React18.useEffect(() => {
      setMountedState(true);
    }, []);
    const enableTouchRipple = mountedState && !disableRipple && !disabled;
    React18.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple && mountedState) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible, mountedState]);
    function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
      return useEventCallback_default2((event) => {
        if (eventCallback) {
          eventCallback(event);
        }
        const ignore = skipRippleAction;
        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }
        return true;
      });
    }
    const handleMouseDown = useRippleHandler("start", onMouseDown);
    const handleContextMenu = useRippleHandler("stop", onContextMenu);
    const handleDragLeave = useRippleHandler("stop", onDragLeave);
    const handleMouseUp = useRippleHandler("stop", onMouseUp);
    const handleMouseLeave = useRippleHandler("stop", (event) => {
      if (focusVisible) {
        event.preventDefault();
      }
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    const handleTouchStart = useRippleHandler("start", onTouchStart);
    const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
    const handleTouchMove = useRippleHandler("stop", onTouchMove);
    const handleBlur = useRippleHandler("stop", (event) => {
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback_default2((event) => {
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }
      handleFocusVisible(event);
      if (isFocusVisibleRef.current === true) {
        setFocusVisible(true);
        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }
      if (onFocus) {
        onFocus(event);
      }
    });
    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== "button" && !(button.tagName === "A" && button.href);
    };
    const keydownRef = React18.useRef(false);
    const handleKeyDown2 = useEventCallback_default2((event) => {
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
        keydownRef.current = true;
        rippleRef.current.stop(event, () => {
          rippleRef.current.start(event);
        });
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback_default2((event) => {
      if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        rippleRef.current.stop(event, () => {
          rippleRef.current.pulsate(event);
        });
      }
      if (onKeyUp) {
        onKeyUp(event);
      }
      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;
    if (ComponentProp === "button" && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === "button") {
      buttonProps.type = type === void 0 ? "button" : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = "button";
      }
      if (disabled) {
        buttonProps["aria-disabled"] = disabled;
      }
    }
    const handleRef = useForkRef_default(ref, focusVisibleRef, buttonRef);
    if (true) {
      React18.useEffect(() => {
        if (enableTouchRipple && !rippleRef.current) {
          console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
        }
      }, [enableTouchRipple]);
    }
    const ownerState = _extends({}, props, {
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    });
    const classes = useUtilityClasses(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ButtonBaseRoot, _extends({
      as: ComponentProp,
      className: clsx_default(classes.root, className),
      ownerState,
      onBlur: handleBlur,
      onClick,
      onContextMenu: handleContextMenu,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown2,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex,
      type
    }, buttonProps, other, {
      children: [children, enableTouchRipple ? (
        /* TouchRipple is only needed client-side, x2 boost on the server. */
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TouchRipple_default, _extends({
          ref: handleRippleRef,
          center: centerRipple
        }, TouchRippleProps))
      ) : null]
    }));
  });
  true ? ButtonBase.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * A ref for imperative actions.
     * It currently only supports `focusVisible()` action.
     */
    action: refType_default,
    /**
     * If `true`, the ripples are centered.
     * They won't start at the cursor interaction position.
     * @default false
     */
    centerRipple: import_prop_types8.default.bool,
    /**
     * The content of the component.
     */
    children: import_prop_types8.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types8.default.object,
    /**
     * @ignore
     */
    className: import_prop_types8.default.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: elementTypeAcceptingRef_default,
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: import_prop_types8.default.bool,
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
     * @default false
     */
    disableRipple: import_prop_types8.default.bool,
    /**
     * If `true`, the touch ripple effect is disabled.
     * @default false
     */
    disableTouchRipple: import_prop_types8.default.bool,
    /**
     * If `true`, the base button will have a keyboard focus ripple.
     * @default false
     */
    focusRipple: import_prop_types8.default.bool,
    /**
     * This prop can help identify which element has keyboard focus.
     * The class name will be applied when the element gains the focus through keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
     * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
     * if needed.
     */
    focusVisibleClassName: import_prop_types8.default.string,
    /**
     * @ignore
     */
    href: import_prop_types8.default.any,
    /**
     * The component used to render a link when the `href` prop is provided.
     * @default 'a'
     */
    LinkComponent: import_prop_types8.default.elementType,
    /**
     * @ignore
     */
    onBlur: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onClick: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onContextMenu: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onDragLeave: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onFocus: import_prop_types8.default.func,
    /**
     * Callback fired when the component is focused with a keyboard.
     * We trigger a `onFocus` callback too.
     */
    onFocusVisible: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onKeyDown: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onKeyUp: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onMouseDown: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onMouseLeave: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onMouseUp: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onTouchEnd: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onTouchMove: import_prop_types8.default.func,
    /**
     * @ignore
     */
    onTouchStart: import_prop_types8.default.func,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
    /**
     * @default 0
     */
    tabIndex: import_prop_types8.default.number,
    /**
     * Props applied to the `TouchRipple` element.
     */
    TouchRippleProps: import_prop_types8.default.object,
    /**
     * A ref that points to the `TouchRipple` element.
     */
    touchRippleRef: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.shape({
      current: import_prop_types8.default.shape({
        pulsate: import_prop_types8.default.func.isRequired,
        start: import_prop_types8.default.func.isRequired,
        stop: import_prop_types8.default.func.isRequired
      })
    })]),
    /**
     * @ignore
     */
    type: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["button", "reset", "submit"]), import_prop_types8.default.string])
  } : void 0;
  var ButtonBase_default = ButtonBase;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js
  var import_prop_types9 = __toESM(require_prop_types());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/boxClasses.js
  var boxClasses = generateUtilityClasses("MuiBox", ["root"]);
  var boxClasses_default = boxClasses;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js
  var defaultTheme3 = createTheme_default2();
  var Box = createBox({
    themeId: identifier_default,
    defaultTheme: defaultTheme3,
    defaultClassName: boxClasses_default.root,
    generateClassName: ClassNameGenerator_default.generate
  });
  true ? Box.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * @ignore
     */
    children: import_prop_types9.default.node,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types9.default.elementType,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object])
  } : void 0;
  var Box_default = Box;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js
  init_extends();
  var React21 = __toESM(require_react());
  var import_prop_types10 = __toESM(require_prop_types());
  var import_colorManipulator2 = __toESM(require_colorManipulator());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/buttonClasses.js
  function getButtonUtilityClass(slot) {
    return generateUtilityClass("MuiButton", slot);
  }
  var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
  var buttonClasses_default = buttonClasses;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
  var React19 = __toESM(require_react());
  var ButtonGroupContext = /* @__PURE__ */ React19.createContext({});
  if (true) {
    ButtonGroupContext.displayName = "ButtonGroupContext";
  }
  var ButtonGroupContext_default = ButtonGroupContext;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js
  var React20 = __toESM(require_react());
  var ButtonGroupButtonContext = /* @__PURE__ */ React20.createContext(void 0);
  if (true) {
    ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
  }
  var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js
  var import_jsx_runtime7 = __toESM(require_jsx_runtime());
  var import_jsx_runtime8 = __toESM(require_jsx_runtime());
  var _excluded13 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
  var useUtilityClasses2 = (ownerState) => {
    const {
      color: color2,
      disableElevation,
      fullWidth,
      size,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ["root", variant, `${variant}${capitalize_default(color2)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, `color${capitalize_default(color2)}`, disableElevation && "disableElevation", fullWidth && "fullWidth"],
      label: ["label"],
      startIcon: ["icon", "startIcon", `iconSize${capitalize_default(size)}`],
      endIcon: ["icon", "endIcon", `iconSize${capitalize_default(size)}`]
    };
    const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };
  var commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }, ownerState.size === "medium" && {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }, ownerState.size === "large" && {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  });
  var ButtonRoot = styled_default2(ButtonBase_default, {
    shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles[`size${capitalize_default(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _theme$palette$getCon, _theme$palette;
    const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
    return _extends({}, theme.typography.button, {
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: (theme.vars || theme).shape.borderRadius,
      transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
        duration: theme.transitions.duration.short
      }),
      "&:hover": _extends({
        textDecoration: "none",
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, import_colorManipulator2.alpha)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, import_colorManipulator2.alpha)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
        border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, import_colorManipulator2.alpha)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }, ownerState.variant === "contained" && {
        backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
        boxShadow: (theme.vars || theme).shadows[4],
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: (theme.vars || theme).shadows[2],
          backgroundColor: (theme.vars || theme).palette.grey[300]
        }
      }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (theme.vars || theme).palette[ownerState.color].main
        }
      }),
      "&:active": _extends({}, ownerState.variant === "contained" && {
        boxShadow: (theme.vars || theme).shadows[8]
      }),
      [`&.${buttonClasses_default.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
        boxShadow: (theme.vars || theme).shadows[6]
      }),
      [`&.${buttonClasses_default.disabled}`]: _extends({
        color: (theme.vars || theme).palette.action.disabled
      }, ownerState.variant === "outlined" && {
        border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
      }, ownerState.variant === "contained" && {
        color: (theme.vars || theme).palette.action.disabled,
        boxShadow: (theme.vars || theme).shadows[0],
        backgroundColor: (theme.vars || theme).palette.action.disabledBackground
      })
    }, ownerState.variant === "text" && {
      padding: "6px 8px"
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      color: (theme.vars || theme).palette[ownerState.color].main
    }, ownerState.variant === "outlined" && {
      padding: "5px 15px",
      border: "1px solid currentColor"
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      color: (theme.vars || theme).palette[ownerState.color].main,
      border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${(0, import_colorManipulator2.alpha)(theme.palette[ownerState.color].main, 0.5)}`
    }, ownerState.variant === "contained" && {
      color: theme.vars ? (
        // this is safe because grey does not change between default light/dark mode
        theme.vars.palette.text.primary
      ) : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[2]
    }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
      color: (theme.vars || theme).palette[ownerState.color].contrastText,
      backgroundColor: (theme.vars || theme).palette[ownerState.color].main
    }, ownerState.color === "inherit" && {
      color: "inherit",
      borderColor: "currentColor"
    }, ownerState.size === "small" && ownerState.variant === "text" && {
      padding: "4px 5px",
      fontSize: theme.typography.pxToRem(13)
    }, ownerState.size === "large" && ownerState.variant === "text" && {
      padding: "8px 11px",
      fontSize: theme.typography.pxToRem(15)
    }, ownerState.size === "small" && ownerState.variant === "outlined" && {
      padding: "3px 9px",
      fontSize: theme.typography.pxToRem(13)
    }, ownerState.size === "large" && ownerState.variant === "outlined" && {
      padding: "7px 21px",
      fontSize: theme.typography.pxToRem(15)
    }, ownerState.size === "small" && ownerState.variant === "contained" && {
      padding: "4px 10px",
      fontSize: theme.typography.pxToRem(13)
    }, ownerState.size === "large" && ownerState.variant === "contained" && {
      padding: "8px 22px",
      fontSize: theme.typography.pxToRem(15)
    }, ownerState.fullWidth && {
      width: "100%"
    });
  }, ({
    ownerState
  }) => ownerState.disableElevation && {
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none"
    },
    [`&.${buttonClasses_default.focusVisible}`]: {
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none"
    },
    [`&.${buttonClasses_default.disabled}`]: {
      boxShadow: "none"
    }
  });
  var ButtonStartIcon = styled_default2("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.startIcon, styles[`iconSize${capitalize_default(ownerState.size)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4
  }, ownerState.size === "small" && {
    marginLeft: -2
  }, commonIconStyles(ownerState)));
  var ButtonEndIcon = styled_default2("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.endIcon, styles[`iconSize${capitalize_default(ownerState.size)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8
  }, ownerState.size === "small" && {
    marginRight: -2
  }, commonIconStyles(ownerState)));
  var Button = /* @__PURE__ */ React21.forwardRef(function Button2(inProps, ref) {
    const contextProps = React21.useContext(ButtonGroupContext_default);
    const buttonGroupButtonContextPositionClassName = React21.useContext(ButtonGroupButtonContext_default);
    const resolvedProps = resolveProps(contextProps, inProps);
    const props = useThemeProps2({
      props: resolvedProps,
      name: "MuiButton"
    });
    const {
      children,
      color: color2 = "primary",
      component = "button",
      className,
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      endIcon: endIconProp,
      focusVisibleClassName,
      fullWidth = false,
      size = "medium",
      startIcon: startIconProp,
      type,
      variant = "text"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
    const ownerState = _extends({}, props, {
      color: color2,
      component,
      disabled,
      disableElevation,
      disableFocusRipple,
      fullWidth,
      size,
      type,
      variant
    });
    const classes = useUtilityClasses2(ownerState);
    const startIcon = startIconProp && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonStartIcon, {
      className: classes.startIcon,
      ownerState,
      children: startIconProp
    });
    const endIcon = endIconProp && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonEndIcon, {
      className: classes.endIcon,
      ownerState,
      children: endIconProp
    });
    const positionClassName = buttonGroupButtonContextPositionClassName || "";
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(ButtonRoot, _extends({
      ownerState,
      className: clsx_default(contextProps.className, classes.root, className, positionClassName),
      component,
      disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
      ref,
      type
    }, other, {
      classes,
      children: [startIcon, children, endIcon]
    }));
  });
  true ? Button.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: import_prop_types10.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types10.default.object,
    /**
     * @ignore
     */
    className: import_prop_types10.default.string,
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
     * @default 'primary'
     */
    color: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types10.default.string]),
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types10.default.elementType,
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: import_prop_types10.default.bool,
    /**
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation: import_prop_types10.default.bool,
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple: import_prop_types10.default.bool,
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
     * @default false
     */
    disableRipple: import_prop_types10.default.bool,
    /**
     * Element placed after the children.
     */
    endIcon: import_prop_types10.default.node,
    /**
     * @ignore
     */
    focusVisibleClassName: import_prop_types10.default.string,
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth: import_prop_types10.default.bool,
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: import_prop_types10.default.string,
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["small", "medium", "large"]), import_prop_types10.default.string]),
    /**
     * Element placed before the children.
     */
    startIcon: import_prop_types10.default.node,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
    /**
     * @ignore
     */
    type: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["button", "reset", "submit"]), import_prop_types10.default.string]),
    /**
     * The variant to use.
     * @default 'text'
     */
    variant: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["contained", "outlined", "text"]), import_prop_types10.default.string])
  } : void 0;
  var Button_default = Button;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js
  var import_prop_types11 = __toESM(require_prop_types());
  var Stack = createStack({
    createStyledComponent: styled_default2("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (props, styles) => styles.root
    }),
    useThemeProps: (inProps) => useThemeProps2({
      props: inProps,
      name: "MuiStack"
    })
  });
  true ? Stack.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: import_prop_types11.default.node,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types11.default.elementType,
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     * @default 'column'
     */
    direction: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types11.default.arrayOf(import_prop_types11.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types11.default.object]),
    /**
     * Add an element between each child.
     */
    divider: import_prop_types11.default.node,
    /**
     * Defines the space between immediate children.
     * @default 0
     */
    spacing: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string])), import_prop_types11.default.number, import_prop_types11.default.object, import_prop_types11.default.string]),
    /**
     * The system prop, which allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
    /**
     * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
     *
     * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
     * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
     *
     * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
     * @default false
     */
    useFlexGap: import_prop_types11.default.bool
  } : void 0;
  var Stack_default = Stack;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Table/Table.js
  init_extends();
  var React23 = __toESM(require_react());
  var import_prop_types12 = __toESM(require_prop_types());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Table/TableContext.js
  var React22 = __toESM(require_react());
  var TableContext = /* @__PURE__ */ React22.createContext();
  if (true) {
    TableContext.displayName = "TableContext";
  }
  var TableContext_default = TableContext;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Table/tableClasses.js
  function getTableUtilityClass(slot) {
    return generateUtilityClass("MuiTable", slot);
  }
  var tableClasses = generateUtilityClasses("MuiTable", ["root", "stickyHeader"]);

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Table/Table.js
  var import_jsx_runtime9 = __toESM(require_jsx_runtime());
  var _excluded14 = ["className", "component", "padding", "size", "stickyHeader"];
  var useUtilityClasses3 = (ownerState) => {
    const {
      classes,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ["root", stickyHeader && "stickyHeader"]
    };
    return composeClasses(slots, getTableUtilityClass, classes);
  };
  var TableRoot = styled_default2("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& caption": _extends({}, theme.typography.body2, {
      padding: theme.spacing(2),
      color: (theme.vars || theme).palette.text.secondary,
      textAlign: "left",
      captionSide: "bottom"
    })
  }, ownerState.stickyHeader && {
    borderCollapse: "separate"
  }));
  var defaultComponent = "table";
  var Table = /* @__PURE__ */ React23.forwardRef(function Table2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTable"
    });
    const {
      className,
      component = defaultComponent,
      padding: padding2 = "normal",
      size = "medium",
      stickyHeader = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
    const ownerState = _extends({}, props, {
      component,
      padding: padding2,
      size,
      stickyHeader
    });
    const classes = useUtilityClasses3(ownerState);
    const table = React23.useMemo(() => ({
      padding: padding2,
      size,
      stickyHeader
    }), [padding2, size, stickyHeader]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableContext_default.Provider, {
      value: table,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TableRoot, _extends({
        as: component,
        role: component === defaultComponent ? null : "table",
        ref,
        className: clsx_default(classes.root, className),
        ownerState
      }, other))
    });
  });
  true ? Table.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the table, normally `TableHead` and `TableBody`.
     */
    children: import_prop_types12.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types12.default.object,
    /**
     * @ignore
     */
    className: import_prop_types12.default.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types12.default.elementType,
    /**
     * Allows TableCells to inherit padding of the Table.
     * @default 'normal'
     */
    padding: import_prop_types12.default.oneOf(["checkbox", "none", "normal"]),
    /**
     * Allows TableCells to inherit size of the Table.
     * @default 'medium'
     */
    size: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["medium", "small"]), import_prop_types12.default.string]),
    /**
     * Set the header sticky.
     *
     * ⚠️ It doesn't work with IE11.
     * @default false
     */
    stickyHeader: import_prop_types12.default.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object])
  } : void 0;
  var Table_default = Table;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableBody/TableBody.js
  init_extends();
  var React25 = __toESM(require_react());
  var import_prop_types13 = __toESM(require_prop_types());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Table/Tablelvl2Context.js
  var React24 = __toESM(require_react());
  var Tablelvl2Context = /* @__PURE__ */ React24.createContext();
  if (true) {
    Tablelvl2Context.displayName = "Tablelvl2Context";
  }
  var Tablelvl2Context_default = Tablelvl2Context;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableBody/tableBodyClasses.js
  function getTableBodyUtilityClass(slot) {
    return generateUtilityClass("MuiTableBody", slot);
  }
  var tableBodyClasses = generateUtilityClasses("MuiTableBody", ["root"]);

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableBody/TableBody.js
  var import_jsx_runtime10 = __toESM(require_jsx_runtime());
  var _excluded15 = ["className", "component"];
  var useUtilityClasses4 = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getTableBodyUtilityClass, classes);
  };
  var TableBodyRoot = styled_default2("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  })({
    display: "table-row-group"
  });
  var tablelvl2 = {
    variant: "body"
  };
  var defaultComponent2 = "tbody";
  var TableBody = /* @__PURE__ */ React25.forwardRef(function TableBody2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTableBody"
    });
    const {
      className,
      component = defaultComponent2
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
    const ownerState = _extends({}, props, {
      component
    });
    const classes = useUtilityClasses4(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tablelvl2Context_default.Provider, {
      value: tablelvl2,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TableBodyRoot, _extends({
        className: clsx_default(classes.root, className),
        as: component,
        ref,
        role: component === defaultComponent2 ? null : "rowgroup",
        ownerState
      }, other))
    });
  });
  true ? TableBody.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component, normally `TableRow`.
     */
    children: import_prop_types13.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types13.default.object,
    /**
     * @ignore
     */
    className: import_prop_types13.default.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types13.default.elementType,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object])
  } : void 0;
  var TableBody_default = TableBody;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableCell/TableCell.js
  init_extends();
  var React26 = __toESM(require_react());
  var import_prop_types14 = __toESM(require_prop_types());
  var import_colorManipulator3 = __toESM(require_colorManipulator());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableCell/tableCellClasses.js
  function getTableCellUtilityClass(slot) {
    return generateUtilityClass("MuiTableCell", slot);
  }
  var tableCellClasses = generateUtilityClasses("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]);
  var tableCellClasses_default = tableCellClasses;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableCell/TableCell.js
  var import_jsx_runtime11 = __toESM(require_jsx_runtime());
  var _excluded16 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
  var useUtilityClasses5 = (ownerState) => {
    const {
      classes,
      variant,
      align,
      padding: padding2,
      size,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize_default(align)}`, padding2 !== "normal" && `padding${capitalize_default(padding2)}`, `size${capitalize_default(size)}`]
    };
    return composeClasses(slots, getTableCellUtilityClass, classes);
  };
  var TableCellRoot = styled_default2("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`size${capitalize_default(ownerState.size)}`], ownerState.padding !== "normal" && styles[`padding${capitalize_default(ownerState.padding)}`], ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
    }
  })(({
    theme,
    ownerState
  }) => _extends({}, theme.typography.body2, {
    display: "table-cell",
    verticalAlign: "inherit",
    // Workaround for a rendering bug with spanned columns in Chrome 62.0.
    // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
    borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? (0, import_colorManipulator3.lighten)((0, import_colorManipulator3.alpha)(theme.palette.divider, 1), 0.88) : (0, import_colorManipulator3.darken)((0, import_colorManipulator3.alpha)(theme.palette.divider, 1), 0.68)}`,
    textAlign: "left",
    padding: 16
  }, ownerState.variant === "head" && {
    color: (theme.vars || theme).palette.text.primary,
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium
  }, ownerState.variant === "body" && {
    color: (theme.vars || theme).palette.text.primary
  }, ownerState.variant === "footer" && {
    color: (theme.vars || theme).palette.text.secondary,
    lineHeight: theme.typography.pxToRem(21),
    fontSize: theme.typography.pxToRem(12)
  }, ownerState.size === "small" && {
    padding: "6px 16px",
    [`&.${tableCellClasses_default.paddingCheckbox}`]: {
      width: 24,
      // prevent the checkbox column from growing
      padding: "0 12px 0 16px",
      "& > *": {
        padding: 0
      }
    }
  }, ownerState.padding === "checkbox" && {
    width: 48,
    // prevent the checkbox column from growing
    padding: "0 0 0 4px"
  }, ownerState.padding === "none" && {
    padding: 0
  }, ownerState.align === "left" && {
    textAlign: "left"
  }, ownerState.align === "center" && {
    textAlign: "center"
  }, ownerState.align === "right" && {
    textAlign: "right",
    flexDirection: "row-reverse"
  }, ownerState.align === "justify" && {
    textAlign: "justify"
  }, ownerState.stickyHeader && {
    position: "sticky",
    top: 0,
    zIndex: 2,
    backgroundColor: (theme.vars || theme).palette.background.default
  }));
  var TableCell = /* @__PURE__ */ React26.forwardRef(function TableCell2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTableCell"
    });
    const {
      align = "inherit",
      className,
      component: componentProp,
      padding: paddingProp,
      scope: scopeProp,
      size: sizeProp,
      sortDirection,
      variant: variantProp
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
    const table = React26.useContext(TableContext_default);
    const tablelvl23 = React26.useContext(Tablelvl2Context_default);
    const isHeadCell = tablelvl23 && tablelvl23.variant === "head";
    let component;
    if (componentProp) {
      component = componentProp;
    } else {
      component = isHeadCell ? "th" : "td";
    }
    let scope = scopeProp;
    if (component === "td") {
      scope = void 0;
    } else if (!scope && isHeadCell) {
      scope = "col";
    }
    const variant = variantProp || tablelvl23 && tablelvl23.variant;
    const ownerState = _extends({}, props, {
      align,
      component,
      padding: paddingProp || (table && table.padding ? table.padding : "normal"),
      size: sizeProp || (table && table.size ? table.size : "medium"),
      sortDirection,
      stickyHeader: variant === "head" && table && table.stickyHeader,
      variant
    });
    const classes = useUtilityClasses5(ownerState);
    let ariaSort = null;
    if (sortDirection) {
      ariaSort = sortDirection === "asc" ? "ascending" : "descending";
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TableCellRoot, _extends({
      as: component,
      ref,
      className: clsx_default(classes.root, className),
      "aria-sort": ariaSort,
      scope,
      ownerState
    }, other));
  });
  true ? TableCell.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * Set the text-align on the table cell content.
     *
     * Monetary or generally number fields **should be right aligned** as that allows
     * you to add them up quickly in your head without having to worry about decimals.
     * @default 'inherit'
     */
    align: import_prop_types14.default.oneOf(["center", "inherit", "justify", "left", "right"]),
    /**
     * The content of the component.
     */
    children: import_prop_types14.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types14.default.object,
    /**
     * @ignore
     */
    className: import_prop_types14.default.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types14.default.elementType,
    /**
     * Sets the padding applied to the cell.
     * The prop defaults to the value (`'default'`) inherited from the parent Table component.
     */
    padding: import_prop_types14.default.oneOf(["checkbox", "none", "normal"]),
    /**
     * Set scope attribute.
     */
    scope: import_prop_types14.default.string,
    /**
     * Specify the size of the cell.
     * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
     */
    size: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["medium", "small"]), import_prop_types14.default.string]),
    /**
     * Set aria-sort direction.
     */
    sortDirection: import_prop_types14.default.oneOf(["asc", "desc", false]),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
    /**
     * Specify the cell type.
     * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
     */
    variant: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["body", "footer", "head"]), import_prop_types14.default.string])
  } : void 0;
  var TableCell_default = TableCell;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableContainer/TableContainer.js
  init_extends();
  var React27 = __toESM(require_react());
  var import_prop_types15 = __toESM(require_prop_types());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableContainer/tableContainerClasses.js
  function getTableContainerUtilityClass(slot) {
    return generateUtilityClass("MuiTableContainer", slot);
  }
  var tableContainerClasses = generateUtilityClasses("MuiTableContainer", ["root"]);

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableContainer/TableContainer.js
  var import_jsx_runtime12 = __toESM(require_jsx_runtime());
  var _excluded17 = ["className", "component"];
  var useUtilityClasses6 = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getTableContainerUtilityClass, classes);
  };
  var TableContainerRoot = styled_default2("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  })({
    width: "100%",
    overflowX: "auto"
  });
  var TableContainer = /* @__PURE__ */ React27.forwardRef(function TableContainer2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTableContainer"
    });
    const {
      className,
      component = "div"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
    const ownerState = _extends({}, props, {
      component
    });
    const classes = useUtilityClasses6(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TableContainerRoot, _extends({
      ref,
      as: component,
      className: clsx_default(classes.root, className),
      ownerState
    }, other));
  });
  true ? TableContainer.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component, normally `Table`.
     */
    children: import_prop_types15.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types15.default.object,
    /**
     * @ignore
     */
    className: import_prop_types15.default.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types15.default.elementType,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
  } : void 0;
  var TableContainer_default = TableContainer;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableHead/TableHead.js
  init_extends();
  var React28 = __toESM(require_react());
  var import_prop_types16 = __toESM(require_prop_types());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableHead/tableHeadClasses.js
  function getTableHeadUtilityClass(slot) {
    return generateUtilityClass("MuiTableHead", slot);
  }
  var tableHeadClasses = generateUtilityClasses("MuiTableHead", ["root"]);

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableHead/TableHead.js
  var import_jsx_runtime13 = __toESM(require_jsx_runtime());
  var _excluded18 = ["className", "component"];
  var useUtilityClasses7 = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getTableHeadUtilityClass, classes);
  };
  var TableHeadRoot = styled_default2("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  })({
    display: "table-header-group"
  });
  var tablelvl22 = {
    variant: "head"
  };
  var defaultComponent3 = "thead";
  var TableHead = /* @__PURE__ */ React28.forwardRef(function TableHead2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTableHead"
    });
    const {
      className,
      component = defaultComponent3
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
    const ownerState = _extends({}, props, {
      component
    });
    const classes = useUtilityClasses7(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Tablelvl2Context_default.Provider, {
      value: tablelvl22,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TableHeadRoot, _extends({
        as: component,
        className: clsx_default(classes.root, className),
        ref,
        role: component === defaultComponent3 ? null : "rowgroup",
        ownerState
      }, other))
    });
  });
  true ? TableHead.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component, normally `TableRow`.
     */
    children: import_prop_types16.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types16.default.object,
    /**
     * @ignore
     */
    className: import_prop_types16.default.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types16.default.elementType,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object])
  } : void 0;
  var TableHead_default = TableHead;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableRow/TableRow.js
  init_extends();
  var React29 = __toESM(require_react());
  var import_prop_types17 = __toESM(require_prop_types());
  var import_colorManipulator4 = __toESM(require_colorManipulator());

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableRow/tableRowClasses.js
  function getTableRowUtilityClass(slot) {
    return generateUtilityClass("MuiTableRow", slot);
  }
  var tableRowClasses = generateUtilityClasses("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
  var tableRowClasses_default = tableRowClasses;

  // ../../node_modules/.pnpm/@mui+material@5.15.15_@emotion+react@11.11.4_@emotion+styled@11.11.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TableRow/TableRow.js
  var import_jsx_runtime14 = __toESM(require_jsx_runtime());
  var _excluded19 = ["className", "component", "hover", "selected"];
  var useUtilityClasses8 = (ownerState) => {
    const {
      classes,
      selected,
      hover,
      head,
      footer
    } = ownerState;
    const slots = {
      root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
    };
    return composeClasses(slots, getTableRowUtilityClass, classes);
  };
  var TableRowRoot = styled_default2("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
    }
  })(({
    theme
  }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    [`&.${tableRowClasses_default.hover}:hover`]: {
      backgroundColor: (theme.vars || theme).palette.action.hover
    },
    [`&.${tableRowClasses_default.selected}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0, import_colorManipulator4.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0, import_colorManipulator4.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
      }
    }
  }));
  var defaultComponent4 = "tr";
  var TableRow = /* @__PURE__ */ React29.forwardRef(function TableRow2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTableRow"
    });
    const {
      className,
      component = defaultComponent4,
      hover = false,
      selected = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
    const tablelvl23 = React29.useContext(Tablelvl2Context_default);
    const ownerState = _extends({}, props, {
      component,
      hover,
      selected,
      head: tablelvl23 && tablelvl23.variant === "head",
      footer: tablelvl23 && tablelvl23.variant === "footer"
    });
    const classes = useUtilityClasses8(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TableRowRoot, _extends({
      as: component,
      ref,
      className: clsx_default(classes.root, className),
      role: component === defaultComponent4 ? null : "row",
      ownerState
    }, other));
  });
  true ? TableRow.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * Should be valid `<tr>` children such as `TableCell`.
     */
    children: import_prop_types17.default.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: import_prop_types17.default.object,
    /**
     * @ignore
     */
    className: import_prop_types17.default.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: import_prop_types17.default.elementType,
    /**
     * If `true`, the table row will shade on hover.
     * @default false
     */
    hover: import_prop_types17.default.bool,
    /**
     * If `true`, the table row will have the selected shading.
     * @default false
     */
    selected: import_prop_types17.default.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object])
  } : void 0;
  var TableRow_default = TableRow;

  // src/App.tsx
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  function App() {
    const [photos, setPhotos] = (0, import_react7.useState)([]);
    const fileInputRef = (0, import_react7.useRef)(null);
    function handleSelectPhoto() {
      var _a;
      (_a = fileInputRef.current) == null ? void 0 : _a.click();
    }
    async function handleUploadFile(event) {
      var _a;
      const file = (_a = event.target.files) == null ? void 0 : _a[0];
      if (file) {
        const response = await fetch("/api/photos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ originalName: file.name })
        });
        const data = await response.json();
        await fetch(data.signedUrl, {
          method: "PUT",
          body: file
        });
        fetchPhotos();
      }
    }
    async function fetchPhotos() {
      const response = await fetch("/api/photos");
      const data = await response.json();
      setPhotos(data);
    }
    function handleDeletePhoto(photoId) {
      return async function() {
        await fetch(`/api/photos/${photoId}`, { method: "DELETE" });
        fetchPhotos();
      };
    }
    (0, import_react7.useEffect)(() => {
      fetchPhotos();
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Stack_default, { sx: { m: 6 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Box_default, { sx: { display: "flex", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "input",
          {
            ref: fileInputRef,
            type: "file",
            accept: "image/*",
            style: { display: "none" },
            onChange: handleUploadFile
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button_default, { onClick: handleSelectPhoto, variant: "contained", children: "Upload Photo" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableContainer_default, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Table_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableHead_default, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(TableRow_default, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableCell_default, { children: "Photo ID" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableCell_default, { children: "Original Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableCell_default, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableBody_default, { children: photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(TableRow_default, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableCell_default, { children: photo.id }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableCell_default, { children: photo.originalName }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TableCell_default, { align: "right", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            Button_default,
            {
              variant: "contained",
              onClick: handleDeletePhoto(photo.id),
              children: "Delete"
            }
          ) })
        ] }, photo.id)) })
      ] }) })
    ] });
  }
  var App_default = App;
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/styled-engine/node/index.js:
  (**
   * @mui/styled-engine v5.15.14
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/utils/index.js:
  (**
   * @mui/utils v5.15.14
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/material/index.js:
  (**
   * @mui/material v5.15.15
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
