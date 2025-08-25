(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Custom/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Navbar = (param)=>{
    let { items, activeHref, className = "", ease = "power3.easeOut", onMobileMenuClick, initialLoadAnimation = true } = param;
    _s();
    // Set colors based on resolvedTheme
    // Use theme CSS variables for all colors
    const baseColor = "var(--background)";
    const pillColor = "var(--card)";
    const hoveredPillTextColor = "var(--primary)";
    const pillTextColor = "var(--foreground)";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const circleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tlRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeTweenRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const layout = {
                "Navbar.useEffect.layout": ()=>{
                    circleRefs.current.forEach({
                        "Navbar.useEffect.layout": (circle)=>{
                            var _tlRefs_current_index;
                            if (!(circle === null || circle === void 0 ? void 0 : circle.parentElement)) return;
                            const pill = circle.parentElement;
                            const rect = pill.getBoundingClientRect();
                            const { width: w, height: h } = rect;
                            const R = (w * w / 4 + h * h) / (2 * h);
                            const D = Math.ceil(2 * R) + 2;
                            const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - w * w / 4))) + 1;
                            const originY = D - delta;
                            circle.style.width = "".concat(D, "px");
                            circle.style.height = "".concat(D, "px");
                            circle.style.bottom = "-".concat(delta, "px");
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(circle, {
                                xPercent: -50,
                                scale: 0,
                                transformOrigin: "50% ".concat(originY, "px")
                            });
                            const label = pill.querySelector(".pill-label");
                            const white = pill.querySelector(".pill-label-hover");
                            if (label) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(label, {
                                y: 0
                            });
                            if (white) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                                y: h + 12,
                                opacity: 0
                            });
                            const index = circleRefs.current.indexOf(circle);
                            if (index === -1) return;
                            (_tlRefs_current_index = tlRefs.current[index]) === null || _tlRefs_current_index === void 0 ? void 0 : _tlRefs_current_index.kill();
                            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                                paused: true
                            });
                            tl.to(circle, {
                                scale: 1.2,
                                xPercent: -50,
                                duration: 2,
                                ease,
                                overwrite: "auto"
                            }, 0);
                            if (label) {
                                tl.to(label, {
                                    y: -(h + 8),
                                    duration: 2,
                                    ease,
                                    overwrite: "auto"
                                }, 0);
                            }
                            if (white) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                                    y: Math.ceil(h + 100),
                                    opacity: 0
                                });
                                tl.to(white, {
                                    y: 0,
                                    opacity: 1,
                                    duration: 2,
                                    ease,
                                    overwrite: "auto"
                                }, 0);
                            }
                            tlRefs.current[index] = tl;
                        }
                    }["Navbar.useEffect.layout"]);
                }
            }["Navbar.useEffect.layout"];
            layout();
            const onResize = {
                "Navbar.useEffect.onResize": ()=>layout()
            }["Navbar.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            if (document.fonts) {
                document.fonts.ready.then(layout).catch({
                    "Navbar.useEffect": ()=>{}
                }["Navbar.useEffect"]);
            }
            const menu = mobileMenuRef.current;
            if (menu) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                    visibility: "hidden",
                    opacity: 0,
                    scaleY: 1,
                    y: 0
                });
            }
            if (initialLoadAnimation) {
                const logo = logoRef.current;
                const navItems = navItemsRef.current;
                if (logo) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(logo, {
                        scale: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(logo, {
                        scale: 1,
                        duration: 0.6,
                        ease
                    });
                }
                if (navItems) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(navItems, {
                        width: 0,
                        overflow: "hidden"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(navItems, {
                        width: "auto",
                        duration: 0.6,
                        ease
                    });
                }
            }
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("resize", onResize)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        items,
        ease,
        initialLoadAnimation
    ]);
    const handleEnter = (i)=>{
        var _activeTweenRefs_current_i;
        const tl = tlRefs.current[i];
        if (!tl) return;
        (_activeTweenRefs_current_i = activeTweenRefs.current[i]) === null || _activeTweenRefs_current_i === void 0 ? void 0 : _activeTweenRefs_current_i.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: "auto"
        });
    };
    const handleLeave = (i)=>{
        var _activeTweenRefs_current_i;
        const tl = tlRefs.current[i];
        if (!tl) return;
        (_activeTweenRefs_current_i = activeTweenRefs.current[i]) === null || _activeTweenRefs_current_i === void 0 ? void 0 : _activeTweenRefs_current_i.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: "auto"
        });
    };
    const toggleMobileMenu = ()=>{
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;
        if (hamburger) {
            const lines = hamburger.querySelectorAll(".hamburger-line");
            if (newState) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                    rotation: 45,
                    y: 3,
                    duration: 0.3,
                    ease
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                    rotation: -45,
                    y: -3,
                    duration: 0.3,
                    ease
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease
                });
            }
        }
        if (menu) {
            if (newState) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                    visibility: "visible"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1
                }, {
                    opacity: 1,
                    y: 0,
                    scaleY: 1,
                    duration: 0.3,
                    ease,
                    transformOrigin: "top center"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: "top center",
                    onComplete: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                            visibility: "hidden"
                        });
                    }
                });
            }
        }
        onMobileMenuClick === null || onMobileMenuClick === void 0 ? void 0 : onMobileMenuClick();
    };
    const closeMobileMenu = ()=>{
        setIsMobileMenuOpen(false);
        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;
        if (hamburger) {
            const lines = hamburger.querySelectorAll(".hamburger-line");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease
            });
        }
        if (menu) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(menu, {
                opacity: 0,
                y: 10,
                scaleY: 1,
                duration: 0.2,
                ease,
                transformOrigin: "top center",
                onComplete: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                        visibility: "hidden"
                    });
                }
            });
        }
    };
    const isExternalLink = (href)=>href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#");
    const isRouterLink = (href)=>href && !isExternalLink(href);
    const cssVars = {
        ["--base"]: baseColor,
        ["--pill-bg"]: pillColor,
        ["--hover-text"]: hoveredPillTextColor,
        ["--pill-text"]: pillTextColor,
        ["--nav-h"]: "42px",
        ["--logo"]: "36px",
        ["--pill-pad-x"]: "18px",
        ["--pill-gap"]: "3px"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-[1.5em] z-[1000] w-full justify-self-center left-0 md:w-auto md:left-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between md:hidden px-4 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: hamburgerRef,
                        onClick: toggleMobileMenu,
                        "aria-label": "Toggle menu",
                        "aria-expanded": isMobileMenuOpen,
                        className: "rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative bg-background",
                        style: {
                            width: "var(--nav-h)",
                            height: "var(--nav-h)",
                            background: "var(--card)",
                            transition: "background 0.3s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms]",
                                style: {
                                    background: "var(--foreground)",
                                    transition: "background 0.3s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Custom/Navbar.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms]",
                                style: {
                                    background: "var(--foreground)",
                                    transition: "background 0.3s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Custom/Navbar.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Custom/Navbar.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ".concat(className),
                    "aria-label": "Primary",
                    style: cssVars,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: navItemsRef,
                        className: "relative items-center rounded-full hidden md:flex ml-2 bg-background",
                        style: {
                            height: "var(--nav-h)",
                            background: "var(--card)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            role: "menubar",
                            className: "list-none flex items-stretch m-0 p-[3px] h-full",
                            style: {
                                gap: "var(--pill-gap)"
                            },
                            children: items.map((item, i)=>{
                                const isActive = activeHref === item.href;
                                const pillStyle = {
                                    background: "var(--pill-bg, var(--card))",
                                    color: "var(--pill-text, var(--foreground))",
                                    paddingLeft: "var(--pill-pad-x)",
                                    paddingRight: "var(--pill-pad-x)"
                                };
                                const PillContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none",
                                            style: {
                                                background: "var(--base, var(--card))",
                                                willChange: "transform"
                                            },
                                            "aria-hidden": "true",
                                            ref: (el)=>{
                                                circleRefs.current[i] = el;
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Custom/Navbar.tsx",
                                            lineNumber: 339,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "label-stack relative inline-block leading-[1] z-[2]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pill-label relative z-[2] inline-block leading-[1]",
                                                    style: {
                                                        willChange: "transform"
                                                    },
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pill-label-hover absolute left-0 top-0 z-[3] inline-block",
                                                    style: {
                                                        color: "var(--hover-text, #fff)",
                                                        willChange: "transform, opacity"
                                                    },
                                                    "aria-hidden": "true",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Custom/Navbar.tsx",
                                            lineNumber: 350,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]",
                                            style: {
                                                background: "var(--base, var(--card))"
                                            },
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Custom/Navbar.tsx",
                                            lineNumber: 369,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true);
                                const basePillClasses = "relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    role: "none",
                                    className: "flex h-full",
                                    children: isRouterLink(item.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        role: "menuitem",
                                        href: item.href,
                                        className: basePillClasses,
                                        style: pillStyle,
                                        "aria-label": item.ariaLabel || item.label,
                                        onMouseEnter: ()=>handleEnter(i),
                                        onMouseLeave: ()=>handleLeave(i),
                                        children: PillContent
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Custom/Navbar.tsx",
                                        lineNumber: 384,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        role: "menuitem",
                                        href: item.href,
                                        className: basePillClasses,
                                        style: pillStyle,
                                        "aria-label": item.ariaLabel || item.label,
                                        onMouseEnter: ()=>handleEnter(i),
                                        onMouseLeave: ()=>handleLeave(i),
                                        children: PillContent
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Custom/Navbar.tsx",
                                        lineNumber: 396,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, item.href, false, {
                                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                                    lineNumber: 382,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Custom/Navbar.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Custom/Navbar.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: mobileMenuRef,
                    className: "md:hidden fixed top-[1.5em] right-4 left-auto rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top bg-background",
                    style: {
                        ...cssVars,
                        background: "var(--card)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-none m-0 p-[3px] flex flex-col gap-[3px] items-end",
                        children: items.map((item)=>{
                            const defaultStyle = {
                                background: "var(--pill-bg, var(--card))",
                                color: "var(--pill-text, var(--foreground))"
                            };
                            const hoverIn = (e)=>{
                                e.currentTarget.style.background = "var(--base)";
                                e.currentTarget.style.color = "var(--hover-text, #fff)";
                            };
                            const hoverOut = (e)=>{
                                e.currentTarget.style.background = "var(--pill-bg, #fff)";
                                e.currentTarget.style.color = "var(--pill-text, #fff)";
                            };
                            const linkClasses = "block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: isRouterLink(item.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: linkClasses,
                                    style: defaultStyle,
                                    onMouseEnter: hoverIn,
                                    onMouseLeave: hoverOut,
                                    onClick: closeMobileMenu,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                                    lineNumber: 445,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: linkClasses,
                                    style: defaultStyle,
                                    onMouseEnter: hoverIn,
                                    onMouseLeave: hoverOut,
                                    onClick: closeMobileMenu,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                                    lineNumber: 456,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, item.href, false, {
                                fileName: "[project]/src/components/Custom/Navbar.tsx",
                                lineNumber: 443,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Custom/Navbar.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Custom/Navbar.tsx",
                    lineNumber: 416,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Custom/Navbar.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(Navbar, "294hujXaTxmbCicv3/h3u/w3UgM=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Theme-Provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": ()=>ThemeProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider(param) {
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Theme-Provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": ()=>Separator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator(param) {
    let { className, orientation = "horizontal", decorative = true, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d882ec14._.js.map