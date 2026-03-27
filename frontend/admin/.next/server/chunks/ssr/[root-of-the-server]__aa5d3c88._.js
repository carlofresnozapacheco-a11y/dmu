module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/page-header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageHeader": (()=>PageHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
;
;
;
;
function PageHeader({ title, backHref }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                className: "h-9 w-9",
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: backHref,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/page-header.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/src/components/page-header.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/page-header.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/page-header.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl md:text-3xl font-bold tracking-tight text-foreground font-headline",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/page-header.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page-header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this));
TableCaption.displayName = "TableCaption";
;
}}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, this));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}}),
"[project]/src/lib/data:66aad3 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"78c8249938032cd174edcee87bbea0ac336d057e94":"updateDeviceAssignment"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "updateDeviceAssignment": (()=>updateDeviceAssignment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateDeviceAssignment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("78c8249938032cd174edcee87bbea0ac336d057e94", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateDeviceAssignment"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIHNldERvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MsIHF1ZXJ5IGFzIGZpcmVzdG9yZVF1ZXJ5LCB3aGVyZSwgd3JpdGVCYXRjaCwgbGltaXQgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2ZpcmViYXNlJztcbmltcG9ydCB7IENyZWF0ZURldmljZVNjaGVtYSwgRGV2aWNlU2NoZW1hLCBEZXZpY2VPd25lclNjaGVtYSwgT3duZXJEZXZpY2VTY2hlbWEsIERldmljZVVzZXJTY2hlbWEsIERldmljZU1vZGVsU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJztcbmltcG9ydCB0eXBlIHsgRGV2aWNlLCBEZXZpY2VPd25lciB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsRGV2aWNlTW9kZWxzLCBnZXRBbGxEZXZpY2VzIH0gZnJvbSAnLi9kYXRhJztcblxuZXhwb3J0IHR5cGUgRm9ybVN0YXRlID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBlcnJvcnM/OiB7XG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nW107XG4gICAgbW9kZWxOdW1iZXI/OiBzdHJpbmdbXTtcbiAgICBkZXZpY2VUeXBlPzogc3RyaW5nW107XG4gICAgc3RhdHVzPzogc3RyaW5nW107XG4gICAgbWFudWZhY3R1cmVkRGF0ZT86IHN0cmluZ1tdO1xuICAgIG5hbWU/OiBzdHJpbmdbXTtcbiAgICBhZGRyZXNzPzogc3RyaW5nW107XG4gICAgZW1haWw/OiBzdHJpbmdbXTtcbiAgICBzb2NpYWxNZWRpYVVybD86IHN0cmluZ1tdO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nW107XG4gICAgZGV2aWNlSWQ/OiBzdHJpbmdbXTtcbiAgICBhY3RpdmF0ZWREYXRlPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyS3doPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyTWludXRlPzogc3RyaW5nW107XG4gICAgZGVhY3RpdmF0ZWRSZWFzb24/OiBzdHJpbmdbXTtcbiAgICBtYWludGVuYW5jZVJlYXNvbj86IHN0cmluZ1tdO1xuICAgIHBob3RvVXJsPzogc3RyaW5nW107XG4gICAgZGV2aWNlTW9kZWw/OiBzdHJpbmdbXTtcbiAgICBmZWF0dXJlPzogc3RyaW5nW107XG4gICAgYXNzaWdubWVudFR5cGU/OiBzdHJpbmdbXTtcbiAgfTtcbiAgZmllbGRzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEZXZpY2UocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IENyZWF0ZURldmljZVNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICBtb2RlbE51bWJlcjogZm9ybURhdGEuZ2V0KCdtb2RlbE51bWJlcicpLFxuICAgIGRldmljZVR5cGU6IGZvcm1EYXRhLmdldCgnZGV2aWNlVHlwZScpLFxuICAgIHN0YXR1czogJ21hbnVmYWN0dXJlZCcsIC8vIEFsd2F5cyBtYW51ZmFjdHVyZWQgb24gY3JlYXRpb25cbiAgICBtYW51ZmFjdHVyZWREYXRlOiBmb3JtRGF0YS5nZXQoJ21hbnVmYWN0dXJlZERhdGUnKSxcbiAgICBkZWFjdGl2YXRlZFJlYXNvbjogZm9ybURhdGEuZ2V0KCdkZWFjdGl2YXRlZFJlYXNvbicpLFxuICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gIH0pO1xuXG4gIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgc2VyaWFsTnVtYmVyLCBtb2RlbE51bWJlciwgZGV2aWNlVHlwZSwgc3RhdHVzLCBtYW51ZmFjdHVyZWREYXRlLCBtYWludGVuYW5jZVJlYXNvbiwgZGVhY3RpdmF0ZWRSZWFzb24gfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZXNSZWYsIHdoZXJlKCdzZXJpYWxOdW1iZXInLCAnPT0nLCBzZXJpYWxOdW1iZXIpKTtcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcblxuICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIEEgZGV2aWNlIHdpdGggdGhpcyBzZXJpYWwgbnVtYmVyIGFscmVhZHkgZXhpc3RzLicsXG4gICAgICAgICAgICBlcnJvcnM6IHsgc2VyaWFsTnVtYmVyOiBbJ1RoaXMgc2VyaWFsIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuZXdEZXZpY2VEYXRhID0ge1xuICAgICAgc2VyaWFsTnVtYmVyLFxuICAgICAgbW9kZWxOdW1iZXIsXG4gICAgICBkZXZpY2VUeXBlLFxuICAgICAgc3RhdHVzOiBzdGF0dXMgfHwgJ21hbnVmYWN0dXJlZCcsXG4gICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgbGFzdE1haW50ZW5hbmNlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBzdGF0dXMgPT09ICdtYWludGVuYW5jZScgPyBtYWludGVuYW5jZVJlYXNvbiA6IG51bGwsXG4gICAgICBkZWFjdGl2YXRlZFJlYXNvbjogc3RhdHVzID09PSAnZGVhY3RpdmF0ZWQnID8gZGVhY3RpdmF0ZWRSZWFzb24gOiBudWxsLFxuICAgICAgb3duZXJJZDogbnVsbCxcbiAgICB9O1xuXG4gICAgYXdhaXQgYWRkRG9jKGRldmljZXNSZWYsIG5ld0RldmljZURhdGEpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQ3JlYXRlIGRldmljZSBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UuJyB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gIHJlZGlyZWN0KCcvZGV2aWNlcycpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICAgICAgbW9kZWxOdW1iZXI6IGZvcm1EYXRhLmdldCgnbW9kZWxOdW1iZXInKSxcbiAgICAgICAgZGV2aWNlVHlwZTogZm9ybURhdGEuZ2V0KCdkZXZpY2VUeXBlJyksXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KCdzdGF0dXMnKSxcbiAgICAgICAgbWFudWZhY3R1cmVkRGF0ZTogZm9ybURhdGEuZ2V0KCdtYW51ZmFjdHVyZWREYXRlJyksXG4gICAgICAgIGRlYWN0aXZhdGVkUmVhc29uOiBmb3JtRGF0YS5nZXQoJ2RlYWN0aXZhdGVkUmVhc29uJyksXG4gICAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZS4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0geyAuLi52YWxpZGF0ZWRGaWVsZHMuZGF0YSB9O1xuICAgIFxuICAgIGRlbGV0ZSAoZGF0YSBhcyBQYXJ0aWFsPHR5cGVvZiBkYXRhPikuc2VyaWFsTnVtYmVyO1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZXM6IGFueSA9IHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBsYXN0TWFpbnRlbmFuY2U6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgIH07XG5cbiAgICBpZiAodXBkYXRlcy5zdGF0dXMgIT09ICdtYWludGVuYW5jZScpIHtcbiAgICAgICAgdXBkYXRlcy5tYWludGVuYW5jZVJlYXNvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh1cGRhdGVzLnN0YXR1cyAhPT0gJ2RlYWN0aXZhdGVkJykge1xuICAgICAgICB1cGRhdGVzLmRlYWN0aXZhdGVkUmVhc29uID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgaWYgKFsnYXZhaWxhYmxlJywgJ3VuYXNzaWduZWQnXS5pbmNsdWRlcyh1cGRhdGVzLnN0YXR1cykpIHtcbiAgICAgICAgdXBkYXRlcy5vd25lcklkID0gbnVsbDtcbiAgICB9XG5cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhkZXZpY2VSZWYsIHVwZGF0ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZS4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgYmFja1BhdGggPSBmb3JtRGF0YS5nZXQoJ2JhY2tIcmVmJykgYXMgc3RyaW5nIHx8IGAvZGV2aWNlcz9wYWdlPSR7cGFnZX1gO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlcy8ke2lkfWApO1xuXG4gICAgaWYgKGJhY2tQYXRoLnN0YXJ0c1dpdGgoJy9kZXZpY2VzPycpKSB7XG4gICAgICAgIHJlZGlyZWN0KGJhY2tQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZWRpcmVjdChgL2RldmljZXM/cGFnZT0ke3BhZ2V9YCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgYXdhaXQgZGVsZXRlRG9jKGRldmljZVJlZik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWxsRGV2aWNlcygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gRGVsZXRlIGFsbCBkZXZpY2UgYXNzaWdubWVudHNcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGFzc2lnbm1lbnRzQ29sbGVjdGlvbik7XG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZGV2aWNlc1xuICAgICAgICBjb25zdCBkZXZpY2VzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGRldmljZXNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZGV2aWNlc0NvbGxlY3Rpb24pO1xuICAgICAgICBpZiAoIWRldmljZXNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBkZXZpY2VzU25hcHNob3QuZG9jcykge1xuICAgICAgICAgICAgICAgIGRldmljZUJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgZGV2aWNlcyBhbmQgdGhlaXIgYXNzaWdubWVudHMgaGF2ZSBiZWVuIGRlbGV0ZWQuJywgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGFsbCBkZXZpY2VzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBkZXZpY2VzLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVEZXZpY2VzKCkge1xuICAgIGNvbnN0IGRldmljZVR5cGVzID0gWydrd2gtbWV0ZXInLCAndGltZXInLCAna3doLW1ldGVyLXRpbWVyJ10gYXMgY29uc3Q7XG4gICAgY29uc3Qgc3RhdHVzZXMgPSBbJ2F2YWlsYWJsZScsICdvZmZsaW5lJywgJ21haW50ZW5hbmNlJ10gYXMgY29uc3Q7XG4gICAgY29uc3QgdG90YWxEZXZpY2VzVG9HZW5lcmF0ZSA9IDEwMDtcbiAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7IC8vIEZpcmVzdG9yZSBiYXRjaCBsaW1pdFxuICBcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsRGV2aWNlc1RvR2VuZXJhdGU7IGkgKz0gYmF0Y2hTaXplKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihpICsgYmF0Y2hTaXplLCB0b3RhbERldmljZXNUb0dlbmVyYXRlKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBlbmQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RldmljZVJlZiA9IGRvYyhkZXZpY2VzUmVmKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYW51ZmFjdHVyZWREYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBNYXRoLnJhbmRvbSgpICogMyAqIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYXRjaC5zZXQobmV3RGV2aWNlUmVmLCB7XG4gICAgICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiBgU04tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICAgICAgICAgICBtb2RlbE51bWJlcjogYE1PRC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA4KS50b1VwcGVyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgZGV2aWNlVHlwZTogZGV2aWNlVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGV2aWNlVHlwZXMubGVuZ3RoKV0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0dXNlcy5sZW5ndGgpXSxcbiAgICAgICAgICAgICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgICAgICAgICAgIGxhc3RNYWludGVuYW5jZTogbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKG1hbnVmYWN0dXJlZERhdGUpLmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCkgKiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShtYW51ZmFjdHVyZWREYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBiYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEZXZpY2VzLlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgRGV2aWNlcy4nIH07XG4gICAgfVxuICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURldmljZU93bmVyKF9wcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGFkZHJlc3M6IGZvcm1EYXRhLmdldCgnYWRkcmVzcycpLFxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgICAgICBzb2NpYWxNZWRpYVVybDogZm9ybURhdGEuZ2V0KCdzb2NpYWxNZWRpYVVybCcpLFxuICAgICAgICBwaG9uZU51bWJlcjogZm9ybURhdGEuZ2V0KCdwaG9uZU51bWJlcicpLFxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lcnNSZWYgPSBjb2xsZWN0aW9uKGRiLCAnZGV2aWNlLW93bmVycycpO1xuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGNvbnN0IHFFbWFpbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ2VtYWlsJywgJz09JywgZW1haWwpKTtcbiAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgnc29jaWFsTWVkaWFVcmwnLCAnPT0nLCBzb2NpYWxNZWRpYVVybCkpO1xuXG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFFbWFpbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlciAmJiAhKGF3YWl0IGdldERvY3MocVBob25lKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBwaG9uZSBudW1iZXIgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFTb2NpYWwpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBhZGREb2Mob3duZXJzUmVmLCB2YWxpZGF0ZWRGaWVsZHMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UgT3duZXIuJywgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmVkaXJlY3QoJy9kZXZpY2Utb3duZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VPd25lcihpZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgcmF3Rm9ybURhdGEgPSB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpLFxuICAgICAgICBhZGRyZXNzOiBmb3JtRGF0YS5nZXQoJ2FkZHJlc3MnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3duZXJzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCduYW1lJywgJz09JywgbmFtZSkpO1xuICAgICAgICBjb25zdCBxRW1haWwgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3Bob25lTnVtYmVyJywgJz09JywgcGhvbmVOdW1iZXIpKTtcbiAgICAgICAgY29uc3QgcVNvY2lhbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcblxuICAgICAgICBjb25zdCBuYW1lU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFOYW1lKTtcbiAgICAgICAgaWYgKCFuYW1lU25hcHNob3QuZW1wdHkgJiYgbmFtZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgbmFtZTogWydOYW1lIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvY2lhbFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxU29jaWFsKTtcbiAgICAgICAgaWYgKCFzb2NpYWxTbmFwc2hvdC5lbXB0eSAmJiBzb2NpYWxTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhvd25lclJlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBVcGRhdGUgRGV2aWNlIE93bmVyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLW93bmVycz9wYWdlPSR7cGFnZX1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURldmljZU93bmVyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IGRlbGV0ZURvYyhvd25lclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGV2aWNlIG93bmVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgdGhlIGRldmljZSBvd25lci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFsbERldmljZU93bmVycygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gMS4gRmluZCBhbGwgYXNzaWdubWVudHMgYW5kIGRldmljZXMgdG8gdXBkYXRlXG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdvd25lcnMtZGV2aWNlcycpKTtcbiAgICAgICAgY29uc3QgZGV2aWNlSWRzVG9VcGRhdGU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGFzc2lnbm1lbnRzU25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgZGV2aWNlSWRzVG9VcGRhdGUucHVzaChkb2MuZGF0YSgpLmRldmljZUlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmF0Y2ggZGVsZXRlIGFzc2lnbm1lbnRzXG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhdGNoIHVwZGF0ZSBkZXZpY2VzIHRvIGJlIHVuYXNzaWduZWRcbiAgICAgICAgaWYgKGRldmljZUlkc1RvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBkZXZpY2VCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXZpY2VJZCBvZiBkZXZpY2VJZHNUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBkZXZpY2VJZCk7XG4gICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZXZpY2VCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRldmljZUJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAzLiBEZWxldGUgYWxsIG93bmVyc1xuICAgICAgICBjb25zdCBvd25lcnNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKSk7XG4gICAgICAgIGlmICghb3duZXJzU25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBvd25lcnNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgb3duZXJCYXRjaC5kZWxldGUoZG9jLnJlZik7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG93bmVyQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgb3duZXJzIGFuZCBhc3NpZ25tZW50cyBkZWxldGVkLicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBhbGwgb3duZXJzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBvd25lcnMuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlT3duZXJzKCkge1xuICAgIGNvbnN0IGZpcnN0TmFtZXMgPSBbJ0pvaG4nLCAnSmFuZScsICdQZXRlcicsICdNYXJ5JywgJ0RhdmlkJywgJ1N1c2FuJywgJ01pY2hhZWwnLCAnTGluZGEnLCAnSmFtZXMnLCAnUGF0cmljaWEnLCAnUm9iZXJ0JywgJ0plbm5pZmVyJywgJ1dpbGxpYW0nLCAnRWxpemFiZXRoJywgJ1JpY2hhcmQnLCAnSmVzc2ljYScsICdKb3NlcGgnLCAnU2FyYWgnLCAnQ2hhcmxlcycsICdLYXJlbiddO1xuICAgIGNvbnN0IGxhc3ROYW1lcyA9IFsnU21pdGgnLCAnSm9obnNvbicsICdXaWxsaWFtcycsICdCcm93bicsICdKb25lcycsICdHYXJjaWEnLCAnTWlsbGVyJywgJ0RhdmlzJywgJ1JvZHJpZ3VleicsICdNYXJ0aW5leicsICdIZXJuYW5kZXonLCAnTG9wZXonLCAnR29uemFsZXonLCAnV2lsc29uJywgJ0FuZGVyc29uJywgJ1Rob21hcycsICdUYXlsb3InLCAnTW9vcmUnLCAnSmFja3NvbicsICdNYXJ0aW4nXTtcbiAgICBjb25zdCBnZW5lcmF0ZWROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgNTAgbmV3IG93bmVyc1xuICAgICAgICBjb25zdCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgIGNvbnN0IG93bmVyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIGNvbnN0IG5ld093bmVySWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld093bmVyUmVmID0gZG9jKG93bmVyc1JlZik7XG4gICAgICAgICAgICBuZXdPd25lcklkcy5wdXNoKG5ld093bmVyUmVmLmlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgb3duZXJCYXRjaC5zZXQobmV3T3duZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGAke2kgKyAxfSBTYW1wbGUgU3RyZWV0LCBDaXR5LCBDb3VudHJ5YCxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgc29jaWFsTWVkaWFVcmw6IGBodHRwczovL2V4YW1wbGUuY29tLyR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0TmFtZS50b0xvd2VyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGArNjM5MTckeyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAwKSArIDEwMDAwMDApLnRvU3RyaW5nKCl9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG5cbiAgICAgICAgLy8gU3RlcCAyOiBGZXRjaCBhdmFpbGFibGUgZGV2aWNlc1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzUXVlcnkgPSBmaXJlc3RvcmVRdWVyeShjb2xsZWN0aW9uKGRiLCAnZGV2aWNlcycpLCB3aGVyZSgnc3RhdHVzJywgJ2luJywgWydhdmFpbGFibGUnLCAnbWFudWZhY3R1cmVkJywgJ3VuYXNzaWduZWQnXSksIGxpbWl0KDEwMCkpO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGF2YWlsYWJsZURldmljZXNRdWVyeSk7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZURldmljZXMgPSBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QuZG9jcy5tYXAoZCA9PiAoeyBpZDogZC5pZCwgLi4uZC5kYXRhKCkgfSBhcyBEZXZpY2UpKTtcblxuICAgICAgICAvLyBTdGVwIDM6IEFzc2lnbiBhdmFpbGFibGUgZGV2aWNlcyB0byB0aGUgbmV3bHkgY3JlYXRlZCBvd25lcnNcbiAgICAgICAgaWYgKGF2YWlsYWJsZURldmljZXMubGVuZ3RoID4gMCAmJiBuZXdPd25lcklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzUmVmID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzVG9DcmVhdGUgPSBNYXRoLm1pbihhdmFpbGFibGVEZXZpY2VzLmxlbmd0aCwgbmV3T3duZXJJZHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NpZ25tZW50c1RvQ3JlYXRlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2UgPSBhdmFpbGFibGVEZXZpY2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBuZXdPd25lcklkc1tpXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2VSZWYgPSBkb2MoZGIsICdkZXZpY2VzJywgZGV2aWNlLmlkKTtcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBc3NpZ25tZW50UmVmID0gZG9jKGFzc2lnbm1lbnRzUmVmKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWdubWVudFR5cGU6ICdrd2gtbWV0ZXInIHwgJ3RpbWVyJyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoZGV2aWNlLmRldmljZVR5cGUgPT09ICdrd2gtbWV0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlID0gJ2t3aC1tZXRlcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ3RpbWVyJykge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50VHlwZSA9ICd0aW1lcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ2t3aC1tZXRlci10aW1lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFR5cGUgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2t3aC1tZXRlcicgOiAndGltZXInO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRCYXRjaC5zZXQobmV3QXNzaWdubWVudFJlZiwge1xuICAgICAgICAgICAgICAgICAgICBvd25lcklkLFxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWREYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUGVyS3doOiAoYXNzaWdubWVudFR5cGUgPT09ICdrd2gtbWV0ZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiA1KS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJnZVBlck1pbnV0ZTogKGFzc2lnbm1lbnRUeXBlID09PSAndGltZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAyKS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlOiBhc3NpZ25tZW50VHlwZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEYXRhLlwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc2lnbkRldmljZVRvT3duZXIob3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gT3duZXJEZXZpY2VTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlSWQ6IGZvcm1EYXRhLmdldCgnZGV2aWNlSWQnKSxcbiAgICAgICAgb3duZXJJZDogb3duZXJJZCxcbiAgICAgICAgYWN0aXZhdGVkRGF0ZTogZm9ybURhdGEuZ2V0KCdhY3RpdmF0ZWREYXRlJyksXG4gICAgICAgIGNoYXJnZVBlckt3aDogZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJLd2gnKSxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlOiBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlck1pbnV0ZScpLFxuICAgICAgICBhc3NpZ25tZW50VHlwZTogZm9ybURhdGEuZ2V0KCdhc3NpZ25tZW50VHlwZScpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGFzc2lnbiBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHsgZGV2aWNlSWQsIGFjdGl2YXRlZERhdGUsIGNoYXJnZVBlckt3aCwgY2hhcmdlUGVyTWludXRlLCBhc3NpZ25tZW50VHlwZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgY29uc3QgbmV3QXNzaWdubWVudERhdGE6IGFueSA9IHtcbiAgICAgICAgb3duZXJJZCxcbiAgICAgICAgZGV2aWNlSWQsXG4gICAgICAgIGFjdGl2YXRlZERhdGUsXG4gICAgICAgIGNoYXJnZVBlckt3aCxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlLFxuICAgIH07XG5cbiAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgbmV3QXNzaWdubWVudERhdGEuYXNzaWdubWVudFR5cGUgPSBhc3NpZ25tZW50VHlwZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyksIG5ld0Fzc2lnbm1lbnREYXRhKTtcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEFzc2lnbiBEZXZpY2UuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnRGV2aWNlIGFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmNvbnN0IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hID0gT3duZXJEZXZpY2VTY2hlbWEub21pdCh7IG93bmVySWQ6IHRydWUsIGRldmljZUlkOiB0cnVlLCBhY3RpdmF0ZWREYXRlOiB0cnVlIH0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlQXNzaWdubWVudChhc3NpZ25tZW50SWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgXG4gICAgY29uc3QgY2hhcmdlUGVyS3doVmFsdWUgPSBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlckt3aCcpO1xuICAgIGNvbnN0IGNoYXJnZVBlck1pbnV0ZVZhbHVlID0gZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJNaW51dGUnKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIGNoYXJnZVBlckt3aDogY2hhcmdlUGVyS3doVmFsdWUsXG4gICAgICAgIGNoYXJnZVBlck1pbnV0ZTogY2hhcmdlUGVyTWludXRlVmFsdWUsXG4gICAgICAgIGFzc2lnbm1lbnRUeXBlOiBmb3JtRGF0YS5nZXQoJ2Fzc2lnbm1lbnRUeXBlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGFzc2lnbm1lbnQuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YVRvVXBkYXRlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGNvbnN0IHsgY2hhcmdlUGVyS3doLCBjaGFyZ2VQZXJNaW51dGUsIGFzc2lnbm1lbnRUeXBlIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyS3doID0gY2hhcmdlUGVyS3doO1xuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyTWludXRlID0gY2hhcmdlUGVyTWludXRlO1xuICAgICAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgICAgIGRhdGFUb1VwZGF0ZS5hc3NpZ25tZW50VHlwZSA9IGFzc2lnbm1lbnRUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGFzc2lnbm1lbnRSZWYsIGRhdGFUb1VwZGF0ZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LmAgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS1vd25lcnMvJHtvd25lcklkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdEZXZpY2UgYXNzaWdubWVudCB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmFzc2lnbkRldmljZUZyb21Pd25lcihhc3NpZ25tZW50SWQ6IHN0cmluZywgZGV2aWNlSWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgZGVsZXRlRG9jKGFzc2lnbm1lbnRSZWYpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSB1bmFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVuLWFzc2lnbmluZyB0aGUgZGV2aWNlLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG4vLyBEZXZpY2UgVXNlciBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlVXNlcihwcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgcGhvdG9Vcmw6IGZvcm1EYXRhLmdldCgncGhvdG9VcmwnKSxcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICAgIHBob25lTnVtYmVyOiBmb3JtRGF0YS5nZXQoJ3Bob25lTnVtYmVyJyksXG4gICAgICAgIHNvY2lhbE1lZGlhVXJsOiBmb3JtRGF0YS5nZXQoJ3NvY2lhbE1lZGlhVXJsJyksXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBjcmVhdGUgZGV2aWNlIHVzZXIuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgIGZpZWxkczogcmF3Rm9ybURhdGEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHNvY2lhbE1lZGlhVXJsIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocUVtYWlsKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgZW1haWw6IFsnRW1haWwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdwaG9uZU51bWJlcicsICc9PScsIHBob25lTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFQaG9uZSkpLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdzb2NpYWxNZWRpYVVybCcsICc9PScsIHNvY2lhbE1lZGlhVXJsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocVNvY2lhbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgc29jaWFsTWVkaWFVcmw6IFsnU29jaWFsIG1lZGlhIFVSTCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGF3YWl0IGFkZERvYyh1c2Vyc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gQ3JlYXRlIERldmljZSBVc2VyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS11c2VycycpO1xuICAgIHJlZGlyZWN0KCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHJhd0Zvcm1EYXRhID0ge1xuICAgICAgICBwaG90b1VybDogZm9ybURhdGEuZ2V0KCdwaG90b1VybCcpLFxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSB1c2VyLiBQbGVhc2UgY2hlY2sgdGhlIGVycm9ycyBiZWxvdy4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcblxuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgnbmFtZScsICc9PScsIG5hbWUpKTtcbiAgICAgICAgY29uc3QgbmFtZVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxTmFtZSk7XG4gICAgICAgIGlmICghbmFtZVNuYXBzaG90LmVtcHR5ICYmIG5hbWVTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBuYW1lOiBbJ05hbWUgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBlbWFpbDogWydFbWFpbCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGhvbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHFTb2NpYWwgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcbiAgICAgICAgY29uc3Qgc29jaWFsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFTb2NpYWwpO1xuICAgICAgICBpZiAoIXNvY2lhbFNuYXBzaG90LmVtcHR5ICYmIHNvY2lhbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgJ2RldmljZS11c2VycycsIGlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIFVwZGF0ZSBEZXZpY2UgVXNlci4nLCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtdXNlcnMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS11c2Vycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLXVzZXJzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCAnZGV2aWNlLXVzZXJzJywgaWQpO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2ModXNlclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdEZXZpY2UgdXNlciBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgdXNlci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlVXNlcnMoKSB7XG4gICAgY29uc3QgZmlyc3ROYW1lcyA9IFsnSm9obicsICdKYW5lJywgJ1BldGVyJywgJ01hcnknLCAnRGF2aWQnLCAnU3VzYW4nLCAnTWljaGFlbCcsICdMaW5kYScsICdKYW1lcycsICdQYXRyaWNpYScsICdSb2JlcnQnLCAnSmVubmlmZXInLCAnV2lsbGlhbScsICdFbGl6YWJldGgnLCAnUmljaGFyZCcsICdKZXNzaWNhJywgJ0pvc2VwaCcsICdTYXJhaCcsICdDaGFybGVzJywgJ0thcmVuJ107XG4gICAgY29uc3QgbGFzdE5hbWVzID0gWydTbWl0aCcsICdKb2huc29uJywgJ1dpbGxpYW1zJywgJ0Jyb3duJywgJ0pvbmVzJywgJ0dhcmNpYScsICdNaWxsZXInLCAnRGF2aXMnLCAnUm9kcmlndWV6JywgJ01hcnRpbmV6JywgJ0hlcm5hbmRleicsICdMb3BleicsICdHb256YWxleicsICdXaWxzb24nLCAnQW5kZXJzb24nLCAnVGhvbWFzJywgJ1RheWxvcicsICdNb29yZScsICdKYWNrc29uJywgJ01hcnRpbiddO1xuICAgIGNvbnN0IGdlbmVyYXRlZE5hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyUmVmID0gZG9jKHVzZXJzUmVmKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgYmF0Y2guc2V0KG5ld1VzZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogYCs2MzkxNyR7KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMDApICsgMTAwMDAwMCkudG9TdHJpbmcoKX1gLFxuICAgICAgICAgICAgICAgIHNvY2lhbE1lZGlhVXJsOiBgaHR0cHM6Ly9leGFtcGxlLmNvbS8ke2ZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX1gLFxuICAgICAgICAgICAgICAgIHBob3RvVXJsOiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvJHtuZXdVc2VyUmVmLmlkfS8yMDAvMjAwYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBVc2Vycy5cIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgVXNlcnMuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbi8vIERldmljZSBNb2RlbCBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlTW9kZWwocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG5cbiAgICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBIGRldmljZSBtb2RlbCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAgIGVycm9yczogeyBkZXZpY2VNb2RlbDogWydUaGlzIGRldmljZSBtb2RlbCBuYW1lIGlzIGFscmVhZHkgaW4gdXNlLiddIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgYWRkRG9jKGRldmljZU1vZGVsc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBDcmVhdGUgRGV2aWNlIE1vZGVsLicgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICByZWRpcmVjdCgnL2RldmljZS1tb2RlbHMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURldmljZU1vZGVsKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkgJiYgcXVlcnlTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQSBkZXZpY2UgbW9kZWwgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHsgZGV2aWNlTW9kZWw6IFsnVGhpcyBkZXZpY2UgbW9kZWwgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxSZWYgPSBkb2MoZGIsICdkZXZpY2UtbW9kZWxzJywgaWQpO1xuICAgICAgICBhd2FpdCB1cGRhdGVEb2MoZGV2aWNlTW9kZWxSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZSBNb2RlbC4nIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtbW9kZWxzJyk7XG4gICAgcmVkaXJlY3QoYC9kZXZpY2UtbW9kZWxzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGV2aWNlTW9kZWwoaWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZU1vZGVsUmVmID0gZG9jKGRiLCBgZGV2aWNlLW1vZGVscy8ke2lkfWApO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZGV2aWNlTW9kZWxSZWYpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBtb2RlbCBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgbW9kZWwuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG4gICAgXG5cbiAgICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQW1sQnNCIn0=
}}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
Input.displayName = "Input";
;
}}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}}),
"[project]/src/components/edit-device-assignment-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EditDeviceAssignmentDialog": (()=>EditDeviceAssignmentDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$66aad3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:66aad3 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};
function SubmitButton() {
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        type: "submit",
        disabled: pending,
        children: pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "mr-2 h-4 w-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, this),
                "Saving..."
            ]
        }, void 0, true) : 'Save Changes'
    }, void 0, false, {
        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
        lineNumber: 33,
        columnNumber: 7
    }, this);
}
function EditDeviceAssignmentDialog({ assignment }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [currentAssignmentType, setCurrentAssignmentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(assignment.assignmentType);
    const initialState = {
        message: '',
        errors: {}
    };
    const updateDeviceAssignmentWithIds = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$66aad3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateDeviceAssignment"].bind(null, assignment.id, assignment.ownerId);
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(updateDeviceAssignmentWithIds, initialState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state?.message) {
            const variant = state.success === false ? 'destructive' : 'default';
            toast({
                title: variant === 'destructive' ? 'Error' : 'Success',
                description: state.message,
                variant: variant
            });
            if (state.success) {
                setOpen(false);
            }
        }
    }, [
        state,
        toast
    ]);
    const showAssignmentType = assignment.deviceType === 'kwh-meter-timer';
    const showChargePerKwh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (assignment.deviceType === 'kwh-meter') return true;
        if (assignment.deviceType === 'kwh-meter-timer' && currentAssignmentType === 'kwh-meter') return true;
        return false;
    }, [
        assignment.deviceType,
        currentAssignmentType
    ]);
    const showChargePerMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (assignment.deviceType === 'timer') return true;
        if (assignment.deviceType === 'kwh-meter-timer' && currentAssignmentType === 'timer') return true;
        return false;
    }, [
        assignment.deviceType,
        currentAssignmentType
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        " Edit"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Edit Device Assignment"
                        }, void 0, false, {
                            fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: formAction,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-sm",
                                                children: "Device"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: assignment.deviceSerialNumber
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    "(",
                                                    deviceTypeLabels[assignment.deviceType],
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    showAssignmentType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "assignmentType",
                                                children: "Assigned As"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 105,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                name: "assignmentType",
                                                defaultValue: currentAssignmentType,
                                                onValueChange: (value)=>setCurrentAssignmentType(value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        id: "assignmentType",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Select type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "kwh-meter",
                                                                children: "KWH Meter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "timer",
                                                                children: "Timer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 106,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "activatedDate",
                                        children: "Activated Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "activatedDate",
                                        name: "activatedDate",
                                        type: "date",
                                        defaultValue: assignment.activatedDate,
                                        "aria-describedby": "activatedDate-error",
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "activatedDate-error",
                                        "aria-live": "polite",
                                        "aria-atomic": "true",
                                        children: state?.errors?.activatedDate && state.errors.activatedDate.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-destructive",
                                                children: error
                                            }, error, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 136,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 133,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    showChargePerKwh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "chargePerKwh",
                                                children: "Charge Per KWH"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 146,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "chargePerKwh",
                                                name: "chargePerKwh",
                                                type: "number",
                                                step: "0.01",
                                                placeholder: "e.g. 0.15",
                                                defaultValue: assignment.chargePerKwh ?? '',
                                                "aria-describedby": "chargePerKwh-error"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 147,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "chargePerKwh-error",
                                                "aria-live": "polite",
                                                "aria-atomic": "true",
                                                children: state?.errors?.chargePerKwh && state.errors.chargePerKwh.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-destructive",
                                                        children: error
                                                    }, error, false, {
                                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 33
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 156,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 145,
                                        columnNumber: 21
                                    }, this),
                                    showChargePerMinute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "chargePerMinute",
                                                children: "Charge Per minute"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 168,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "chargePerMinute",
                                                name: "chargePerMinute",
                                                type: "number",
                                                step: "0.01",
                                                placeholder: "e.g. 0.05",
                                                defaultValue: assignment.chargePerMinute ?? '',
                                                "aria-describedby": "chargePerMinute-error"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 169,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "chargePerMinute-error",
                                                "aria-live": "polite",
                                                "aria-atomic": "true",
                                                children: state?.errors?.chargePerMinute && state.errors.chargePerMinute.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-destructive",
                                                        children: error
                                                    }, error, false, {
                                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 33
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                                lineNumber: 178,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 167,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {}, void 0, false, {
                                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/edit-device-assignment-dialog.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertDialog": (()=>AlertDialog),
    "AlertDialogAction": (()=>AlertDialogAction),
    "AlertDialogCancel": (()=>AlertDialogCancel),
    "AlertDialogContent": (()=>AlertDialogContent),
    "AlertDialogDescription": (()=>AlertDialogDescription),
    "AlertDialogFooter": (()=>AlertDialogFooter),
    "AlertDialogHeader": (()=>AlertDialogHeader),
    "AlertDialogOverlay": (()=>AlertDialogOverlay),
    "AlertDialogPortal": (()=>AlertDialogPortal),
    "AlertDialogTitle": (()=>AlertDialogTitle),
    "AlertDialogTrigger": (()=>AlertDialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this));
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
}}),
"[project]/src/lib/data:f02394 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"70bffe34ef38a44ec8741b21e7e11e13233a43b177":"unassignDeviceFromOwner"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "unassignDeviceFromOwner": (()=>unassignDeviceFromOwner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var unassignDeviceFromOwner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70bffe34ef38a44ec8741b21e7e11e13233a43b177", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "unassignDeviceFromOwner"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIHNldERvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MsIHF1ZXJ5IGFzIGZpcmVzdG9yZVF1ZXJ5LCB3aGVyZSwgd3JpdGVCYXRjaCwgbGltaXQgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2ZpcmViYXNlJztcbmltcG9ydCB7IENyZWF0ZURldmljZVNjaGVtYSwgRGV2aWNlU2NoZW1hLCBEZXZpY2VPd25lclNjaGVtYSwgT3duZXJEZXZpY2VTY2hlbWEsIERldmljZVVzZXJTY2hlbWEsIERldmljZU1vZGVsU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJztcbmltcG9ydCB0eXBlIHsgRGV2aWNlLCBEZXZpY2VPd25lciB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsRGV2aWNlTW9kZWxzLCBnZXRBbGxEZXZpY2VzIH0gZnJvbSAnLi9kYXRhJztcblxuZXhwb3J0IHR5cGUgRm9ybVN0YXRlID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBlcnJvcnM/OiB7XG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nW107XG4gICAgbW9kZWxOdW1iZXI/OiBzdHJpbmdbXTtcbiAgICBkZXZpY2VUeXBlPzogc3RyaW5nW107XG4gICAgc3RhdHVzPzogc3RyaW5nW107XG4gICAgbWFudWZhY3R1cmVkRGF0ZT86IHN0cmluZ1tdO1xuICAgIG5hbWU/OiBzdHJpbmdbXTtcbiAgICBhZGRyZXNzPzogc3RyaW5nW107XG4gICAgZW1haWw/OiBzdHJpbmdbXTtcbiAgICBzb2NpYWxNZWRpYVVybD86IHN0cmluZ1tdO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nW107XG4gICAgZGV2aWNlSWQ/OiBzdHJpbmdbXTtcbiAgICBhY3RpdmF0ZWREYXRlPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyS3doPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyTWludXRlPzogc3RyaW5nW107XG4gICAgZGVhY3RpdmF0ZWRSZWFzb24/OiBzdHJpbmdbXTtcbiAgICBtYWludGVuYW5jZVJlYXNvbj86IHN0cmluZ1tdO1xuICAgIHBob3RvVXJsPzogc3RyaW5nW107XG4gICAgZGV2aWNlTW9kZWw/OiBzdHJpbmdbXTtcbiAgICBmZWF0dXJlPzogc3RyaW5nW107XG4gICAgYXNzaWdubWVudFR5cGU/OiBzdHJpbmdbXTtcbiAgfTtcbiAgZmllbGRzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEZXZpY2UocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IENyZWF0ZURldmljZVNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICBtb2RlbE51bWJlcjogZm9ybURhdGEuZ2V0KCdtb2RlbE51bWJlcicpLFxuICAgIGRldmljZVR5cGU6IGZvcm1EYXRhLmdldCgnZGV2aWNlVHlwZScpLFxuICAgIHN0YXR1czogJ21hbnVmYWN0dXJlZCcsIC8vIEFsd2F5cyBtYW51ZmFjdHVyZWQgb24gY3JlYXRpb25cbiAgICBtYW51ZmFjdHVyZWREYXRlOiBmb3JtRGF0YS5nZXQoJ21hbnVmYWN0dXJlZERhdGUnKSxcbiAgICBkZWFjdGl2YXRlZFJlYXNvbjogZm9ybURhdGEuZ2V0KCdkZWFjdGl2YXRlZFJlYXNvbicpLFxuICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gIH0pO1xuXG4gIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgc2VyaWFsTnVtYmVyLCBtb2RlbE51bWJlciwgZGV2aWNlVHlwZSwgc3RhdHVzLCBtYW51ZmFjdHVyZWREYXRlLCBtYWludGVuYW5jZVJlYXNvbiwgZGVhY3RpdmF0ZWRSZWFzb24gfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZXNSZWYsIHdoZXJlKCdzZXJpYWxOdW1iZXInLCAnPT0nLCBzZXJpYWxOdW1iZXIpKTtcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcblxuICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIEEgZGV2aWNlIHdpdGggdGhpcyBzZXJpYWwgbnVtYmVyIGFscmVhZHkgZXhpc3RzLicsXG4gICAgICAgICAgICBlcnJvcnM6IHsgc2VyaWFsTnVtYmVyOiBbJ1RoaXMgc2VyaWFsIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuZXdEZXZpY2VEYXRhID0ge1xuICAgICAgc2VyaWFsTnVtYmVyLFxuICAgICAgbW9kZWxOdW1iZXIsXG4gICAgICBkZXZpY2VUeXBlLFxuICAgICAgc3RhdHVzOiBzdGF0dXMgfHwgJ21hbnVmYWN0dXJlZCcsXG4gICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgbGFzdE1haW50ZW5hbmNlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBzdGF0dXMgPT09ICdtYWludGVuYW5jZScgPyBtYWludGVuYW5jZVJlYXNvbiA6IG51bGwsXG4gICAgICBkZWFjdGl2YXRlZFJlYXNvbjogc3RhdHVzID09PSAnZGVhY3RpdmF0ZWQnID8gZGVhY3RpdmF0ZWRSZWFzb24gOiBudWxsLFxuICAgICAgb3duZXJJZDogbnVsbCxcbiAgICB9O1xuXG4gICAgYXdhaXQgYWRkRG9jKGRldmljZXNSZWYsIG5ld0RldmljZURhdGEpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQ3JlYXRlIGRldmljZSBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UuJyB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gIHJlZGlyZWN0KCcvZGV2aWNlcycpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICAgICAgbW9kZWxOdW1iZXI6IGZvcm1EYXRhLmdldCgnbW9kZWxOdW1iZXInKSxcbiAgICAgICAgZGV2aWNlVHlwZTogZm9ybURhdGEuZ2V0KCdkZXZpY2VUeXBlJyksXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KCdzdGF0dXMnKSxcbiAgICAgICAgbWFudWZhY3R1cmVkRGF0ZTogZm9ybURhdGEuZ2V0KCdtYW51ZmFjdHVyZWREYXRlJyksXG4gICAgICAgIGRlYWN0aXZhdGVkUmVhc29uOiBmb3JtRGF0YS5nZXQoJ2RlYWN0aXZhdGVkUmVhc29uJyksXG4gICAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZS4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0geyAuLi52YWxpZGF0ZWRGaWVsZHMuZGF0YSB9O1xuICAgIFxuICAgIGRlbGV0ZSAoZGF0YSBhcyBQYXJ0aWFsPHR5cGVvZiBkYXRhPikuc2VyaWFsTnVtYmVyO1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZXM6IGFueSA9IHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBsYXN0TWFpbnRlbmFuY2U6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgIH07XG5cbiAgICBpZiAodXBkYXRlcy5zdGF0dXMgIT09ICdtYWludGVuYW5jZScpIHtcbiAgICAgICAgdXBkYXRlcy5tYWludGVuYW5jZVJlYXNvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh1cGRhdGVzLnN0YXR1cyAhPT0gJ2RlYWN0aXZhdGVkJykge1xuICAgICAgICB1cGRhdGVzLmRlYWN0aXZhdGVkUmVhc29uID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgaWYgKFsnYXZhaWxhYmxlJywgJ3VuYXNzaWduZWQnXS5pbmNsdWRlcyh1cGRhdGVzLnN0YXR1cykpIHtcbiAgICAgICAgdXBkYXRlcy5vd25lcklkID0gbnVsbDtcbiAgICB9XG5cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhkZXZpY2VSZWYsIHVwZGF0ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZS4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgYmFja1BhdGggPSBmb3JtRGF0YS5nZXQoJ2JhY2tIcmVmJykgYXMgc3RyaW5nIHx8IGAvZGV2aWNlcz9wYWdlPSR7cGFnZX1gO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlcy8ke2lkfWApO1xuXG4gICAgaWYgKGJhY2tQYXRoLnN0YXJ0c1dpdGgoJy9kZXZpY2VzPycpKSB7XG4gICAgICAgIHJlZGlyZWN0KGJhY2tQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZWRpcmVjdChgL2RldmljZXM/cGFnZT0ke3BhZ2V9YCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgYXdhaXQgZGVsZXRlRG9jKGRldmljZVJlZik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWxsRGV2aWNlcygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gRGVsZXRlIGFsbCBkZXZpY2UgYXNzaWdubWVudHNcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGFzc2lnbm1lbnRzQ29sbGVjdGlvbik7XG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZGV2aWNlc1xuICAgICAgICBjb25zdCBkZXZpY2VzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGRldmljZXNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZGV2aWNlc0NvbGxlY3Rpb24pO1xuICAgICAgICBpZiAoIWRldmljZXNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBkZXZpY2VzU25hcHNob3QuZG9jcykge1xuICAgICAgICAgICAgICAgIGRldmljZUJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgZGV2aWNlcyBhbmQgdGhlaXIgYXNzaWdubWVudHMgaGF2ZSBiZWVuIGRlbGV0ZWQuJywgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGFsbCBkZXZpY2VzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBkZXZpY2VzLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVEZXZpY2VzKCkge1xuICAgIGNvbnN0IGRldmljZVR5cGVzID0gWydrd2gtbWV0ZXInLCAndGltZXInLCAna3doLW1ldGVyLXRpbWVyJ10gYXMgY29uc3Q7XG4gICAgY29uc3Qgc3RhdHVzZXMgPSBbJ2F2YWlsYWJsZScsICdvZmZsaW5lJywgJ21haW50ZW5hbmNlJ10gYXMgY29uc3Q7XG4gICAgY29uc3QgdG90YWxEZXZpY2VzVG9HZW5lcmF0ZSA9IDEwMDtcbiAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7IC8vIEZpcmVzdG9yZSBiYXRjaCBsaW1pdFxuICBcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsRGV2aWNlc1RvR2VuZXJhdGU7IGkgKz0gYmF0Y2hTaXplKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihpICsgYmF0Y2hTaXplLCB0b3RhbERldmljZXNUb0dlbmVyYXRlKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBlbmQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RldmljZVJlZiA9IGRvYyhkZXZpY2VzUmVmKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYW51ZmFjdHVyZWREYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBNYXRoLnJhbmRvbSgpICogMyAqIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYXRjaC5zZXQobmV3RGV2aWNlUmVmLCB7XG4gICAgICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiBgU04tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICAgICAgICAgICBtb2RlbE51bWJlcjogYE1PRC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA4KS50b1VwcGVyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgZGV2aWNlVHlwZTogZGV2aWNlVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGV2aWNlVHlwZXMubGVuZ3RoKV0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0dXNlcy5sZW5ndGgpXSxcbiAgICAgICAgICAgICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgICAgICAgICAgIGxhc3RNYWludGVuYW5jZTogbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKG1hbnVmYWN0dXJlZERhdGUpLmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCkgKiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShtYW51ZmFjdHVyZWREYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBiYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEZXZpY2VzLlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgRGV2aWNlcy4nIH07XG4gICAgfVxuICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURldmljZU93bmVyKF9wcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGFkZHJlc3M6IGZvcm1EYXRhLmdldCgnYWRkcmVzcycpLFxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgICAgICBzb2NpYWxNZWRpYVVybDogZm9ybURhdGEuZ2V0KCdzb2NpYWxNZWRpYVVybCcpLFxuICAgICAgICBwaG9uZU51bWJlcjogZm9ybURhdGEuZ2V0KCdwaG9uZU51bWJlcicpLFxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lcnNSZWYgPSBjb2xsZWN0aW9uKGRiLCAnZGV2aWNlLW93bmVycycpO1xuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGNvbnN0IHFFbWFpbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ2VtYWlsJywgJz09JywgZW1haWwpKTtcbiAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgnc29jaWFsTWVkaWFVcmwnLCAnPT0nLCBzb2NpYWxNZWRpYVVybCkpO1xuXG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFFbWFpbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlciAmJiAhKGF3YWl0IGdldERvY3MocVBob25lKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBwaG9uZSBudW1iZXIgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFTb2NpYWwpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBhZGREb2Mob3duZXJzUmVmLCB2YWxpZGF0ZWRGaWVsZHMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UgT3duZXIuJywgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmVkaXJlY3QoJy9kZXZpY2Utb3duZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VPd25lcihpZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgcmF3Rm9ybURhdGEgPSB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpLFxuICAgICAgICBhZGRyZXNzOiBmb3JtRGF0YS5nZXQoJ2FkZHJlc3MnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3duZXJzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCduYW1lJywgJz09JywgbmFtZSkpO1xuICAgICAgICBjb25zdCBxRW1haWwgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3Bob25lTnVtYmVyJywgJz09JywgcGhvbmVOdW1iZXIpKTtcbiAgICAgICAgY29uc3QgcVNvY2lhbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcblxuICAgICAgICBjb25zdCBuYW1lU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFOYW1lKTtcbiAgICAgICAgaWYgKCFuYW1lU25hcHNob3QuZW1wdHkgJiYgbmFtZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgbmFtZTogWydOYW1lIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvY2lhbFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxU29jaWFsKTtcbiAgICAgICAgaWYgKCFzb2NpYWxTbmFwc2hvdC5lbXB0eSAmJiBzb2NpYWxTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhvd25lclJlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBVcGRhdGUgRGV2aWNlIE93bmVyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLW93bmVycz9wYWdlPSR7cGFnZX1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURldmljZU93bmVyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IGRlbGV0ZURvYyhvd25lclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGV2aWNlIG93bmVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgdGhlIGRldmljZSBvd25lci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFsbERldmljZU93bmVycygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gMS4gRmluZCBhbGwgYXNzaWdubWVudHMgYW5kIGRldmljZXMgdG8gdXBkYXRlXG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdvd25lcnMtZGV2aWNlcycpKTtcbiAgICAgICAgY29uc3QgZGV2aWNlSWRzVG9VcGRhdGU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGFzc2lnbm1lbnRzU25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgZGV2aWNlSWRzVG9VcGRhdGUucHVzaChkb2MuZGF0YSgpLmRldmljZUlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmF0Y2ggZGVsZXRlIGFzc2lnbm1lbnRzXG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhdGNoIHVwZGF0ZSBkZXZpY2VzIHRvIGJlIHVuYXNzaWduZWRcbiAgICAgICAgaWYgKGRldmljZUlkc1RvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBkZXZpY2VCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXZpY2VJZCBvZiBkZXZpY2VJZHNUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBkZXZpY2VJZCk7XG4gICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZXZpY2VCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRldmljZUJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAzLiBEZWxldGUgYWxsIG93bmVyc1xuICAgICAgICBjb25zdCBvd25lcnNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKSk7XG4gICAgICAgIGlmICghb3duZXJzU25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBvd25lcnNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgb3duZXJCYXRjaC5kZWxldGUoZG9jLnJlZik7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG93bmVyQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgb3duZXJzIGFuZCBhc3NpZ25tZW50cyBkZWxldGVkLicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBhbGwgb3duZXJzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBvd25lcnMuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlT3duZXJzKCkge1xuICAgIGNvbnN0IGZpcnN0TmFtZXMgPSBbJ0pvaG4nLCAnSmFuZScsICdQZXRlcicsICdNYXJ5JywgJ0RhdmlkJywgJ1N1c2FuJywgJ01pY2hhZWwnLCAnTGluZGEnLCAnSmFtZXMnLCAnUGF0cmljaWEnLCAnUm9iZXJ0JywgJ0plbm5pZmVyJywgJ1dpbGxpYW0nLCAnRWxpemFiZXRoJywgJ1JpY2hhcmQnLCAnSmVzc2ljYScsICdKb3NlcGgnLCAnU2FyYWgnLCAnQ2hhcmxlcycsICdLYXJlbiddO1xuICAgIGNvbnN0IGxhc3ROYW1lcyA9IFsnU21pdGgnLCAnSm9obnNvbicsICdXaWxsaWFtcycsICdCcm93bicsICdKb25lcycsICdHYXJjaWEnLCAnTWlsbGVyJywgJ0RhdmlzJywgJ1JvZHJpZ3VleicsICdNYXJ0aW5leicsICdIZXJuYW5kZXonLCAnTG9wZXonLCAnR29uemFsZXonLCAnV2lsc29uJywgJ0FuZGVyc29uJywgJ1Rob21hcycsICdUYXlsb3InLCAnTW9vcmUnLCAnSmFja3NvbicsICdNYXJ0aW4nXTtcbiAgICBjb25zdCBnZW5lcmF0ZWROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgNTAgbmV3IG93bmVyc1xuICAgICAgICBjb25zdCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgIGNvbnN0IG93bmVyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIGNvbnN0IG5ld093bmVySWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld093bmVyUmVmID0gZG9jKG93bmVyc1JlZik7XG4gICAgICAgICAgICBuZXdPd25lcklkcy5wdXNoKG5ld093bmVyUmVmLmlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgb3duZXJCYXRjaC5zZXQobmV3T3duZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGAke2kgKyAxfSBTYW1wbGUgU3RyZWV0LCBDaXR5LCBDb3VudHJ5YCxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgc29jaWFsTWVkaWFVcmw6IGBodHRwczovL2V4YW1wbGUuY29tLyR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0TmFtZS50b0xvd2VyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGArNjM5MTckeyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAwKSArIDEwMDAwMDApLnRvU3RyaW5nKCl9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG5cbiAgICAgICAgLy8gU3RlcCAyOiBGZXRjaCBhdmFpbGFibGUgZGV2aWNlc1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzUXVlcnkgPSBmaXJlc3RvcmVRdWVyeShjb2xsZWN0aW9uKGRiLCAnZGV2aWNlcycpLCB3aGVyZSgnc3RhdHVzJywgJ2luJywgWydhdmFpbGFibGUnLCAnbWFudWZhY3R1cmVkJywgJ3VuYXNzaWduZWQnXSksIGxpbWl0KDEwMCkpO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGF2YWlsYWJsZURldmljZXNRdWVyeSk7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZURldmljZXMgPSBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QuZG9jcy5tYXAoZCA9PiAoeyBpZDogZC5pZCwgLi4uZC5kYXRhKCkgfSBhcyBEZXZpY2UpKTtcblxuICAgICAgICAvLyBTdGVwIDM6IEFzc2lnbiBhdmFpbGFibGUgZGV2aWNlcyB0byB0aGUgbmV3bHkgY3JlYXRlZCBvd25lcnNcbiAgICAgICAgaWYgKGF2YWlsYWJsZURldmljZXMubGVuZ3RoID4gMCAmJiBuZXdPd25lcklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzUmVmID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzVG9DcmVhdGUgPSBNYXRoLm1pbihhdmFpbGFibGVEZXZpY2VzLmxlbmd0aCwgbmV3T3duZXJJZHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NpZ25tZW50c1RvQ3JlYXRlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2UgPSBhdmFpbGFibGVEZXZpY2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBuZXdPd25lcklkc1tpXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2VSZWYgPSBkb2MoZGIsICdkZXZpY2VzJywgZGV2aWNlLmlkKTtcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBc3NpZ25tZW50UmVmID0gZG9jKGFzc2lnbm1lbnRzUmVmKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWdubWVudFR5cGU6ICdrd2gtbWV0ZXInIHwgJ3RpbWVyJyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoZGV2aWNlLmRldmljZVR5cGUgPT09ICdrd2gtbWV0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlID0gJ2t3aC1tZXRlcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ3RpbWVyJykge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50VHlwZSA9ICd0aW1lcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ2t3aC1tZXRlci10aW1lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFR5cGUgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2t3aC1tZXRlcicgOiAndGltZXInO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRCYXRjaC5zZXQobmV3QXNzaWdubWVudFJlZiwge1xuICAgICAgICAgICAgICAgICAgICBvd25lcklkLFxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWREYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUGVyS3doOiAoYXNzaWdubWVudFR5cGUgPT09ICdrd2gtbWV0ZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiA1KS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJnZVBlck1pbnV0ZTogKGFzc2lnbm1lbnRUeXBlID09PSAndGltZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAyKS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlOiBhc3NpZ25tZW50VHlwZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEYXRhLlwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc2lnbkRldmljZVRvT3duZXIob3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gT3duZXJEZXZpY2VTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlSWQ6IGZvcm1EYXRhLmdldCgnZGV2aWNlSWQnKSxcbiAgICAgICAgb3duZXJJZDogb3duZXJJZCxcbiAgICAgICAgYWN0aXZhdGVkRGF0ZTogZm9ybURhdGEuZ2V0KCdhY3RpdmF0ZWREYXRlJyksXG4gICAgICAgIGNoYXJnZVBlckt3aDogZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJLd2gnKSxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlOiBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlck1pbnV0ZScpLFxuICAgICAgICBhc3NpZ25tZW50VHlwZTogZm9ybURhdGEuZ2V0KCdhc3NpZ25tZW50VHlwZScpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGFzc2lnbiBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHsgZGV2aWNlSWQsIGFjdGl2YXRlZERhdGUsIGNoYXJnZVBlckt3aCwgY2hhcmdlUGVyTWludXRlLCBhc3NpZ25tZW50VHlwZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgY29uc3QgbmV3QXNzaWdubWVudERhdGE6IGFueSA9IHtcbiAgICAgICAgb3duZXJJZCxcbiAgICAgICAgZGV2aWNlSWQsXG4gICAgICAgIGFjdGl2YXRlZERhdGUsXG4gICAgICAgIGNoYXJnZVBlckt3aCxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlLFxuICAgIH07XG5cbiAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgbmV3QXNzaWdubWVudERhdGEuYXNzaWdubWVudFR5cGUgPSBhc3NpZ25tZW50VHlwZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyksIG5ld0Fzc2lnbm1lbnREYXRhKTtcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEFzc2lnbiBEZXZpY2UuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnRGV2aWNlIGFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmNvbnN0IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hID0gT3duZXJEZXZpY2VTY2hlbWEub21pdCh7IG93bmVySWQ6IHRydWUsIGRldmljZUlkOiB0cnVlLCBhY3RpdmF0ZWREYXRlOiB0cnVlIH0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlQXNzaWdubWVudChhc3NpZ25tZW50SWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgXG4gICAgY29uc3QgY2hhcmdlUGVyS3doVmFsdWUgPSBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlckt3aCcpO1xuICAgIGNvbnN0IGNoYXJnZVBlck1pbnV0ZVZhbHVlID0gZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJNaW51dGUnKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIGNoYXJnZVBlckt3aDogY2hhcmdlUGVyS3doVmFsdWUsXG4gICAgICAgIGNoYXJnZVBlck1pbnV0ZTogY2hhcmdlUGVyTWludXRlVmFsdWUsXG4gICAgICAgIGFzc2lnbm1lbnRUeXBlOiBmb3JtRGF0YS5nZXQoJ2Fzc2lnbm1lbnRUeXBlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGFzc2lnbm1lbnQuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YVRvVXBkYXRlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGNvbnN0IHsgY2hhcmdlUGVyS3doLCBjaGFyZ2VQZXJNaW51dGUsIGFzc2lnbm1lbnRUeXBlIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyS3doID0gY2hhcmdlUGVyS3doO1xuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyTWludXRlID0gY2hhcmdlUGVyTWludXRlO1xuICAgICAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgICAgIGRhdGFUb1VwZGF0ZS5hc3NpZ25tZW50VHlwZSA9IGFzc2lnbm1lbnRUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGFzc2lnbm1lbnRSZWYsIGRhdGFUb1VwZGF0ZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LmAgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS1vd25lcnMvJHtvd25lcklkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdEZXZpY2UgYXNzaWdubWVudCB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmFzc2lnbkRldmljZUZyb21Pd25lcihhc3NpZ25tZW50SWQ6IHN0cmluZywgZGV2aWNlSWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgZGVsZXRlRG9jKGFzc2lnbm1lbnRSZWYpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSB1bmFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVuLWFzc2lnbmluZyB0aGUgZGV2aWNlLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG4vLyBEZXZpY2UgVXNlciBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlVXNlcihwcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgcGhvdG9Vcmw6IGZvcm1EYXRhLmdldCgncGhvdG9VcmwnKSxcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICAgIHBob25lTnVtYmVyOiBmb3JtRGF0YS5nZXQoJ3Bob25lTnVtYmVyJyksXG4gICAgICAgIHNvY2lhbE1lZGlhVXJsOiBmb3JtRGF0YS5nZXQoJ3NvY2lhbE1lZGlhVXJsJyksXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBjcmVhdGUgZGV2aWNlIHVzZXIuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgIGZpZWxkczogcmF3Rm9ybURhdGEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHNvY2lhbE1lZGlhVXJsIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocUVtYWlsKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgZW1haWw6IFsnRW1haWwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdwaG9uZU51bWJlcicsICc9PScsIHBob25lTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFQaG9uZSkpLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdzb2NpYWxNZWRpYVVybCcsICc9PScsIHNvY2lhbE1lZGlhVXJsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocVNvY2lhbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgc29jaWFsTWVkaWFVcmw6IFsnU29jaWFsIG1lZGlhIFVSTCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGF3YWl0IGFkZERvYyh1c2Vyc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gQ3JlYXRlIERldmljZSBVc2VyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS11c2VycycpO1xuICAgIHJlZGlyZWN0KCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHJhd0Zvcm1EYXRhID0ge1xuICAgICAgICBwaG90b1VybDogZm9ybURhdGEuZ2V0KCdwaG90b1VybCcpLFxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSB1c2VyLiBQbGVhc2UgY2hlY2sgdGhlIGVycm9ycyBiZWxvdy4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcblxuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgnbmFtZScsICc9PScsIG5hbWUpKTtcbiAgICAgICAgY29uc3QgbmFtZVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxTmFtZSk7XG4gICAgICAgIGlmICghbmFtZVNuYXBzaG90LmVtcHR5ICYmIG5hbWVTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBuYW1lOiBbJ05hbWUgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBlbWFpbDogWydFbWFpbCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGhvbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHFTb2NpYWwgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcbiAgICAgICAgY29uc3Qgc29jaWFsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFTb2NpYWwpO1xuICAgICAgICBpZiAoIXNvY2lhbFNuYXBzaG90LmVtcHR5ICYmIHNvY2lhbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgJ2RldmljZS11c2VycycsIGlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIFVwZGF0ZSBEZXZpY2UgVXNlci4nLCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtdXNlcnMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS11c2Vycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLXVzZXJzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCAnZGV2aWNlLXVzZXJzJywgaWQpO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2ModXNlclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdEZXZpY2UgdXNlciBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgdXNlci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlVXNlcnMoKSB7XG4gICAgY29uc3QgZmlyc3ROYW1lcyA9IFsnSm9obicsICdKYW5lJywgJ1BldGVyJywgJ01hcnknLCAnRGF2aWQnLCAnU3VzYW4nLCAnTWljaGFlbCcsICdMaW5kYScsICdKYW1lcycsICdQYXRyaWNpYScsICdSb2JlcnQnLCAnSmVubmlmZXInLCAnV2lsbGlhbScsICdFbGl6YWJldGgnLCAnUmljaGFyZCcsICdKZXNzaWNhJywgJ0pvc2VwaCcsICdTYXJhaCcsICdDaGFybGVzJywgJ0thcmVuJ107XG4gICAgY29uc3QgbGFzdE5hbWVzID0gWydTbWl0aCcsICdKb2huc29uJywgJ1dpbGxpYW1zJywgJ0Jyb3duJywgJ0pvbmVzJywgJ0dhcmNpYScsICdNaWxsZXInLCAnRGF2aXMnLCAnUm9kcmlndWV6JywgJ01hcnRpbmV6JywgJ0hlcm5hbmRleicsICdMb3BleicsICdHb256YWxleicsICdXaWxzb24nLCAnQW5kZXJzb24nLCAnVGhvbWFzJywgJ1RheWxvcicsICdNb29yZScsICdKYWNrc29uJywgJ01hcnRpbiddO1xuICAgIGNvbnN0IGdlbmVyYXRlZE5hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyUmVmID0gZG9jKHVzZXJzUmVmKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgYmF0Y2guc2V0KG5ld1VzZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogYCs2MzkxNyR7KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMDApICsgMTAwMDAwMCkudG9TdHJpbmcoKX1gLFxuICAgICAgICAgICAgICAgIHNvY2lhbE1lZGlhVXJsOiBgaHR0cHM6Ly9leGFtcGxlLmNvbS8ke2ZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX1gLFxuICAgICAgICAgICAgICAgIHBob3RvVXJsOiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvJHtuZXdVc2VyUmVmLmlkfS8yMDAvMjAwYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBVc2Vycy5cIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgVXNlcnMuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbi8vIERldmljZSBNb2RlbCBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlTW9kZWwocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG5cbiAgICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBIGRldmljZSBtb2RlbCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAgIGVycm9yczogeyBkZXZpY2VNb2RlbDogWydUaGlzIGRldmljZSBtb2RlbCBuYW1lIGlzIGFscmVhZHkgaW4gdXNlLiddIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgYWRkRG9jKGRldmljZU1vZGVsc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBDcmVhdGUgRGV2aWNlIE1vZGVsLicgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICByZWRpcmVjdCgnL2RldmljZS1tb2RlbHMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURldmljZU1vZGVsKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkgJiYgcXVlcnlTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQSBkZXZpY2UgbW9kZWwgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHsgZGV2aWNlTW9kZWw6IFsnVGhpcyBkZXZpY2UgbW9kZWwgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxSZWYgPSBkb2MoZGIsICdkZXZpY2UtbW9kZWxzJywgaWQpO1xuICAgICAgICBhd2FpdCB1cGRhdGVEb2MoZGV2aWNlTW9kZWxSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZSBNb2RlbC4nIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtbW9kZWxzJyk7XG4gICAgcmVkaXJlY3QoYC9kZXZpY2UtbW9kZWxzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGV2aWNlTW9kZWwoaWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZU1vZGVsUmVmID0gZG9jKGRiLCBgZGV2aWNlLW1vZGVscy8ke2lkfWApO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZGV2aWNlTW9kZWxSZWYpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBtb2RlbCBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgbW9kZWwuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG4gICAgXG5cbiAgICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQTRuQnNCIn0=
}}),
"[project]/src/components/unassign-device-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UnassignDeviceDialog": (()=>UnassignDeviceDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$f02394__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:f02394 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
;
;
;
;
function ContinueButton() {
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
        type: "submit",
        disabled: pending,
        children: pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "mr-2 h-4 w-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/unassign-device-dialog.tsx",
                    lineNumber: 28,
                    columnNumber: 21
                }, this),
                "Un-assigning..."
            ]
        }, void 0, true) : 'Continue'
    }, void 0, false, {
        fileName: "[project]/src/components/unassign-device-dialog.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
function UnassignDeviceDialog({ assignmentId, deviceId, ownerId }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$f02394__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unassignDeviceFromOwner"].bind(null, assignmentId, deviceId, ownerId), {
        message: '',
        success: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.message) {
            toast({
                title: state.success ? 'Success' : 'Error',
                description: state.message,
                variant: state.success ? 'default' : 'destructive'
            });
            if (state.success) {
                setOpen(false);
            }
        }
    }, [
        state,
        toast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "destructive",
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/unassign-device-dialog.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        " Un-assign"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/unassign-device-dialog.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/unassign-device-dialog.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                children: "Are you absolutely sure?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/unassign-device-dialog.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                children: "This will un-assign the device from the owner. The device can be assigned to another owner later."
                            }, void 0, false, {
                                fileName: "[project]/src/components/unassign-device-dialog.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/unassign-device-dialog.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: formAction,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/unassign-device-dialog.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContinueButton, {}, void 0, false, {
                                    fileName: "[project]/src/components/unassign-device-dialog.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/unassign-device-dialog.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/unassign-device-dialog.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/unassign-device-dialog.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/unassign-device-dialog.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/lib/data:1db4a6 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"70f2cd61f1bfbb32bcf4ebd3c4e1de1894822e997b":"assignDeviceToOwner"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "assignDeviceToOwner": (()=>assignDeviceToOwner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var assignDeviceToOwner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70f2cd61f1bfbb32bcf4ebd3c4e1de1894822e997b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "assignDeviceToOwner"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIHNldERvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MsIHF1ZXJ5IGFzIGZpcmVzdG9yZVF1ZXJ5LCB3aGVyZSwgd3JpdGVCYXRjaCwgbGltaXQgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2ZpcmViYXNlJztcbmltcG9ydCB7IENyZWF0ZURldmljZVNjaGVtYSwgRGV2aWNlU2NoZW1hLCBEZXZpY2VPd25lclNjaGVtYSwgT3duZXJEZXZpY2VTY2hlbWEsIERldmljZVVzZXJTY2hlbWEsIERldmljZU1vZGVsU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJztcbmltcG9ydCB0eXBlIHsgRGV2aWNlLCBEZXZpY2VPd25lciB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsRGV2aWNlTW9kZWxzLCBnZXRBbGxEZXZpY2VzIH0gZnJvbSAnLi9kYXRhJztcblxuZXhwb3J0IHR5cGUgRm9ybVN0YXRlID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBlcnJvcnM/OiB7XG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nW107XG4gICAgbW9kZWxOdW1iZXI/OiBzdHJpbmdbXTtcbiAgICBkZXZpY2VUeXBlPzogc3RyaW5nW107XG4gICAgc3RhdHVzPzogc3RyaW5nW107XG4gICAgbWFudWZhY3R1cmVkRGF0ZT86IHN0cmluZ1tdO1xuICAgIG5hbWU/OiBzdHJpbmdbXTtcbiAgICBhZGRyZXNzPzogc3RyaW5nW107XG4gICAgZW1haWw/OiBzdHJpbmdbXTtcbiAgICBzb2NpYWxNZWRpYVVybD86IHN0cmluZ1tdO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nW107XG4gICAgZGV2aWNlSWQ/OiBzdHJpbmdbXTtcbiAgICBhY3RpdmF0ZWREYXRlPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyS3doPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyTWludXRlPzogc3RyaW5nW107XG4gICAgZGVhY3RpdmF0ZWRSZWFzb24/OiBzdHJpbmdbXTtcbiAgICBtYWludGVuYW5jZVJlYXNvbj86IHN0cmluZ1tdO1xuICAgIHBob3RvVXJsPzogc3RyaW5nW107XG4gICAgZGV2aWNlTW9kZWw/OiBzdHJpbmdbXTtcbiAgICBmZWF0dXJlPzogc3RyaW5nW107XG4gICAgYXNzaWdubWVudFR5cGU/OiBzdHJpbmdbXTtcbiAgfTtcbiAgZmllbGRzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEZXZpY2UocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IENyZWF0ZURldmljZVNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICBtb2RlbE51bWJlcjogZm9ybURhdGEuZ2V0KCdtb2RlbE51bWJlcicpLFxuICAgIGRldmljZVR5cGU6IGZvcm1EYXRhLmdldCgnZGV2aWNlVHlwZScpLFxuICAgIHN0YXR1czogJ21hbnVmYWN0dXJlZCcsIC8vIEFsd2F5cyBtYW51ZmFjdHVyZWQgb24gY3JlYXRpb25cbiAgICBtYW51ZmFjdHVyZWREYXRlOiBmb3JtRGF0YS5nZXQoJ21hbnVmYWN0dXJlZERhdGUnKSxcbiAgICBkZWFjdGl2YXRlZFJlYXNvbjogZm9ybURhdGEuZ2V0KCdkZWFjdGl2YXRlZFJlYXNvbicpLFxuICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gIH0pO1xuXG4gIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgc2VyaWFsTnVtYmVyLCBtb2RlbE51bWJlciwgZGV2aWNlVHlwZSwgc3RhdHVzLCBtYW51ZmFjdHVyZWREYXRlLCBtYWludGVuYW5jZVJlYXNvbiwgZGVhY3RpdmF0ZWRSZWFzb24gfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZXNSZWYsIHdoZXJlKCdzZXJpYWxOdW1iZXInLCAnPT0nLCBzZXJpYWxOdW1iZXIpKTtcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcblxuICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIEEgZGV2aWNlIHdpdGggdGhpcyBzZXJpYWwgbnVtYmVyIGFscmVhZHkgZXhpc3RzLicsXG4gICAgICAgICAgICBlcnJvcnM6IHsgc2VyaWFsTnVtYmVyOiBbJ1RoaXMgc2VyaWFsIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuZXdEZXZpY2VEYXRhID0ge1xuICAgICAgc2VyaWFsTnVtYmVyLFxuICAgICAgbW9kZWxOdW1iZXIsXG4gICAgICBkZXZpY2VUeXBlLFxuICAgICAgc3RhdHVzOiBzdGF0dXMgfHwgJ21hbnVmYWN0dXJlZCcsXG4gICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgbGFzdE1haW50ZW5hbmNlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBzdGF0dXMgPT09ICdtYWludGVuYW5jZScgPyBtYWludGVuYW5jZVJlYXNvbiA6IG51bGwsXG4gICAgICBkZWFjdGl2YXRlZFJlYXNvbjogc3RhdHVzID09PSAnZGVhY3RpdmF0ZWQnID8gZGVhY3RpdmF0ZWRSZWFzb24gOiBudWxsLFxuICAgICAgb3duZXJJZDogbnVsbCxcbiAgICB9O1xuXG4gICAgYXdhaXQgYWRkRG9jKGRldmljZXNSZWYsIG5ld0RldmljZURhdGEpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQ3JlYXRlIGRldmljZSBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UuJyB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gIHJlZGlyZWN0KCcvZGV2aWNlcycpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICAgICAgbW9kZWxOdW1iZXI6IGZvcm1EYXRhLmdldCgnbW9kZWxOdW1iZXInKSxcbiAgICAgICAgZGV2aWNlVHlwZTogZm9ybURhdGEuZ2V0KCdkZXZpY2VUeXBlJyksXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KCdzdGF0dXMnKSxcbiAgICAgICAgbWFudWZhY3R1cmVkRGF0ZTogZm9ybURhdGEuZ2V0KCdtYW51ZmFjdHVyZWREYXRlJyksXG4gICAgICAgIGRlYWN0aXZhdGVkUmVhc29uOiBmb3JtRGF0YS5nZXQoJ2RlYWN0aXZhdGVkUmVhc29uJyksXG4gICAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZS4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0geyAuLi52YWxpZGF0ZWRGaWVsZHMuZGF0YSB9O1xuICAgIFxuICAgIGRlbGV0ZSAoZGF0YSBhcyBQYXJ0aWFsPHR5cGVvZiBkYXRhPikuc2VyaWFsTnVtYmVyO1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZXM6IGFueSA9IHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBsYXN0TWFpbnRlbmFuY2U6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgIH07XG5cbiAgICBpZiAodXBkYXRlcy5zdGF0dXMgIT09ICdtYWludGVuYW5jZScpIHtcbiAgICAgICAgdXBkYXRlcy5tYWludGVuYW5jZVJlYXNvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh1cGRhdGVzLnN0YXR1cyAhPT0gJ2RlYWN0aXZhdGVkJykge1xuICAgICAgICB1cGRhdGVzLmRlYWN0aXZhdGVkUmVhc29uID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgaWYgKFsnYXZhaWxhYmxlJywgJ3VuYXNzaWduZWQnXS5pbmNsdWRlcyh1cGRhdGVzLnN0YXR1cykpIHtcbiAgICAgICAgdXBkYXRlcy5vd25lcklkID0gbnVsbDtcbiAgICB9XG5cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhkZXZpY2VSZWYsIHVwZGF0ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZS4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgYmFja1BhdGggPSBmb3JtRGF0YS5nZXQoJ2JhY2tIcmVmJykgYXMgc3RyaW5nIHx8IGAvZGV2aWNlcz9wYWdlPSR7cGFnZX1gO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlcy8ke2lkfWApO1xuXG4gICAgaWYgKGJhY2tQYXRoLnN0YXJ0c1dpdGgoJy9kZXZpY2VzPycpKSB7XG4gICAgICAgIHJlZGlyZWN0KGJhY2tQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZWRpcmVjdChgL2RldmljZXM/cGFnZT0ke3BhZ2V9YCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgYXdhaXQgZGVsZXRlRG9jKGRldmljZVJlZik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWxsRGV2aWNlcygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gRGVsZXRlIGFsbCBkZXZpY2UgYXNzaWdubWVudHNcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGFzc2lnbm1lbnRzQ29sbGVjdGlvbik7XG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZGV2aWNlc1xuICAgICAgICBjb25zdCBkZXZpY2VzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGRldmljZXNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZGV2aWNlc0NvbGxlY3Rpb24pO1xuICAgICAgICBpZiAoIWRldmljZXNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBkZXZpY2VzU25hcHNob3QuZG9jcykge1xuICAgICAgICAgICAgICAgIGRldmljZUJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgZGV2aWNlcyBhbmQgdGhlaXIgYXNzaWdubWVudHMgaGF2ZSBiZWVuIGRlbGV0ZWQuJywgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGFsbCBkZXZpY2VzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBkZXZpY2VzLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVEZXZpY2VzKCkge1xuICAgIGNvbnN0IGRldmljZVR5cGVzID0gWydrd2gtbWV0ZXInLCAndGltZXInLCAna3doLW1ldGVyLXRpbWVyJ10gYXMgY29uc3Q7XG4gICAgY29uc3Qgc3RhdHVzZXMgPSBbJ2F2YWlsYWJsZScsICdvZmZsaW5lJywgJ21haW50ZW5hbmNlJ10gYXMgY29uc3Q7XG4gICAgY29uc3QgdG90YWxEZXZpY2VzVG9HZW5lcmF0ZSA9IDEwMDtcbiAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7IC8vIEZpcmVzdG9yZSBiYXRjaCBsaW1pdFxuICBcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsRGV2aWNlc1RvR2VuZXJhdGU7IGkgKz0gYmF0Y2hTaXplKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihpICsgYmF0Y2hTaXplLCB0b3RhbERldmljZXNUb0dlbmVyYXRlKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBlbmQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RldmljZVJlZiA9IGRvYyhkZXZpY2VzUmVmKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYW51ZmFjdHVyZWREYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBNYXRoLnJhbmRvbSgpICogMyAqIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYXRjaC5zZXQobmV3RGV2aWNlUmVmLCB7XG4gICAgICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiBgU04tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICAgICAgICAgICBtb2RlbE51bWJlcjogYE1PRC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA4KS50b1VwcGVyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgZGV2aWNlVHlwZTogZGV2aWNlVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGV2aWNlVHlwZXMubGVuZ3RoKV0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0dXNlcy5sZW5ndGgpXSxcbiAgICAgICAgICAgICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgICAgICAgICAgIGxhc3RNYWludGVuYW5jZTogbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKG1hbnVmYWN0dXJlZERhdGUpLmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCkgKiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShtYW51ZmFjdHVyZWREYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBiYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEZXZpY2VzLlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgRGV2aWNlcy4nIH07XG4gICAgfVxuICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURldmljZU93bmVyKF9wcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGFkZHJlc3M6IGZvcm1EYXRhLmdldCgnYWRkcmVzcycpLFxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgICAgICBzb2NpYWxNZWRpYVVybDogZm9ybURhdGEuZ2V0KCdzb2NpYWxNZWRpYVVybCcpLFxuICAgICAgICBwaG9uZU51bWJlcjogZm9ybURhdGEuZ2V0KCdwaG9uZU51bWJlcicpLFxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lcnNSZWYgPSBjb2xsZWN0aW9uKGRiLCAnZGV2aWNlLW93bmVycycpO1xuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGNvbnN0IHFFbWFpbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ2VtYWlsJywgJz09JywgZW1haWwpKTtcbiAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgnc29jaWFsTWVkaWFVcmwnLCAnPT0nLCBzb2NpYWxNZWRpYVVybCkpO1xuXG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFFbWFpbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlciAmJiAhKGF3YWl0IGdldERvY3MocVBob25lKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBwaG9uZSBudW1iZXIgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFTb2NpYWwpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBhZGREb2Mob3duZXJzUmVmLCB2YWxpZGF0ZWRGaWVsZHMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UgT3duZXIuJywgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmVkaXJlY3QoJy9kZXZpY2Utb3duZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VPd25lcihpZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgcmF3Rm9ybURhdGEgPSB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpLFxuICAgICAgICBhZGRyZXNzOiBmb3JtRGF0YS5nZXQoJ2FkZHJlc3MnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3duZXJzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCduYW1lJywgJz09JywgbmFtZSkpO1xuICAgICAgICBjb25zdCBxRW1haWwgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3Bob25lTnVtYmVyJywgJz09JywgcGhvbmVOdW1iZXIpKTtcbiAgICAgICAgY29uc3QgcVNvY2lhbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcblxuICAgICAgICBjb25zdCBuYW1lU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFOYW1lKTtcbiAgICAgICAgaWYgKCFuYW1lU25hcHNob3QuZW1wdHkgJiYgbmFtZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgbmFtZTogWydOYW1lIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvY2lhbFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxU29jaWFsKTtcbiAgICAgICAgaWYgKCFzb2NpYWxTbmFwc2hvdC5lbXB0eSAmJiBzb2NpYWxTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhvd25lclJlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBVcGRhdGUgRGV2aWNlIE93bmVyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLW93bmVycz9wYWdlPSR7cGFnZX1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURldmljZU93bmVyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IGRlbGV0ZURvYyhvd25lclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGV2aWNlIG93bmVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgdGhlIGRldmljZSBvd25lci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFsbERldmljZU93bmVycygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gMS4gRmluZCBhbGwgYXNzaWdubWVudHMgYW5kIGRldmljZXMgdG8gdXBkYXRlXG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdvd25lcnMtZGV2aWNlcycpKTtcbiAgICAgICAgY29uc3QgZGV2aWNlSWRzVG9VcGRhdGU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGFzc2lnbm1lbnRzU25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgZGV2aWNlSWRzVG9VcGRhdGUucHVzaChkb2MuZGF0YSgpLmRldmljZUlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmF0Y2ggZGVsZXRlIGFzc2lnbm1lbnRzXG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhdGNoIHVwZGF0ZSBkZXZpY2VzIHRvIGJlIHVuYXNzaWduZWRcbiAgICAgICAgaWYgKGRldmljZUlkc1RvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBkZXZpY2VCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXZpY2VJZCBvZiBkZXZpY2VJZHNUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBkZXZpY2VJZCk7XG4gICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZXZpY2VCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRldmljZUJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAzLiBEZWxldGUgYWxsIG93bmVyc1xuICAgICAgICBjb25zdCBvd25lcnNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKSk7XG4gICAgICAgIGlmICghb3duZXJzU25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBvd25lcnNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgb3duZXJCYXRjaC5kZWxldGUoZG9jLnJlZik7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG93bmVyQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgb3duZXJzIGFuZCBhc3NpZ25tZW50cyBkZWxldGVkLicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBhbGwgb3duZXJzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBvd25lcnMuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlT3duZXJzKCkge1xuICAgIGNvbnN0IGZpcnN0TmFtZXMgPSBbJ0pvaG4nLCAnSmFuZScsICdQZXRlcicsICdNYXJ5JywgJ0RhdmlkJywgJ1N1c2FuJywgJ01pY2hhZWwnLCAnTGluZGEnLCAnSmFtZXMnLCAnUGF0cmljaWEnLCAnUm9iZXJ0JywgJ0plbm5pZmVyJywgJ1dpbGxpYW0nLCAnRWxpemFiZXRoJywgJ1JpY2hhcmQnLCAnSmVzc2ljYScsICdKb3NlcGgnLCAnU2FyYWgnLCAnQ2hhcmxlcycsICdLYXJlbiddO1xuICAgIGNvbnN0IGxhc3ROYW1lcyA9IFsnU21pdGgnLCAnSm9obnNvbicsICdXaWxsaWFtcycsICdCcm93bicsICdKb25lcycsICdHYXJjaWEnLCAnTWlsbGVyJywgJ0RhdmlzJywgJ1JvZHJpZ3VleicsICdNYXJ0aW5leicsICdIZXJuYW5kZXonLCAnTG9wZXonLCAnR29uemFsZXonLCAnV2lsc29uJywgJ0FuZGVyc29uJywgJ1Rob21hcycsICdUYXlsb3InLCAnTW9vcmUnLCAnSmFja3NvbicsICdNYXJ0aW4nXTtcbiAgICBjb25zdCBnZW5lcmF0ZWROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgNTAgbmV3IG93bmVyc1xuICAgICAgICBjb25zdCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgIGNvbnN0IG93bmVyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIGNvbnN0IG5ld093bmVySWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld093bmVyUmVmID0gZG9jKG93bmVyc1JlZik7XG4gICAgICAgICAgICBuZXdPd25lcklkcy5wdXNoKG5ld093bmVyUmVmLmlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgb3duZXJCYXRjaC5zZXQobmV3T3duZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGAke2kgKyAxfSBTYW1wbGUgU3RyZWV0LCBDaXR5LCBDb3VudHJ5YCxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgc29jaWFsTWVkaWFVcmw6IGBodHRwczovL2V4YW1wbGUuY29tLyR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0TmFtZS50b0xvd2VyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGArNjM5MTckeyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAwKSArIDEwMDAwMDApLnRvU3RyaW5nKCl9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG5cbiAgICAgICAgLy8gU3RlcCAyOiBGZXRjaCBhdmFpbGFibGUgZGV2aWNlc1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzUXVlcnkgPSBmaXJlc3RvcmVRdWVyeShjb2xsZWN0aW9uKGRiLCAnZGV2aWNlcycpLCB3aGVyZSgnc3RhdHVzJywgJ2luJywgWydhdmFpbGFibGUnLCAnbWFudWZhY3R1cmVkJywgJ3VuYXNzaWduZWQnXSksIGxpbWl0KDEwMCkpO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGF2YWlsYWJsZURldmljZXNRdWVyeSk7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZURldmljZXMgPSBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QuZG9jcy5tYXAoZCA9PiAoeyBpZDogZC5pZCwgLi4uZC5kYXRhKCkgfSBhcyBEZXZpY2UpKTtcblxuICAgICAgICAvLyBTdGVwIDM6IEFzc2lnbiBhdmFpbGFibGUgZGV2aWNlcyB0byB0aGUgbmV3bHkgY3JlYXRlZCBvd25lcnNcbiAgICAgICAgaWYgKGF2YWlsYWJsZURldmljZXMubGVuZ3RoID4gMCAmJiBuZXdPd25lcklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzUmVmID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzVG9DcmVhdGUgPSBNYXRoLm1pbihhdmFpbGFibGVEZXZpY2VzLmxlbmd0aCwgbmV3T3duZXJJZHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NpZ25tZW50c1RvQ3JlYXRlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2UgPSBhdmFpbGFibGVEZXZpY2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBuZXdPd25lcklkc1tpXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2VSZWYgPSBkb2MoZGIsICdkZXZpY2VzJywgZGV2aWNlLmlkKTtcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBc3NpZ25tZW50UmVmID0gZG9jKGFzc2lnbm1lbnRzUmVmKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWdubWVudFR5cGU6ICdrd2gtbWV0ZXInIHwgJ3RpbWVyJyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoZGV2aWNlLmRldmljZVR5cGUgPT09ICdrd2gtbWV0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlID0gJ2t3aC1tZXRlcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ3RpbWVyJykge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50VHlwZSA9ICd0aW1lcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ2t3aC1tZXRlci10aW1lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFR5cGUgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2t3aC1tZXRlcicgOiAndGltZXInO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRCYXRjaC5zZXQobmV3QXNzaWdubWVudFJlZiwge1xuICAgICAgICAgICAgICAgICAgICBvd25lcklkLFxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWREYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUGVyS3doOiAoYXNzaWdubWVudFR5cGUgPT09ICdrd2gtbWV0ZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiA1KS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJnZVBlck1pbnV0ZTogKGFzc2lnbm1lbnRUeXBlID09PSAndGltZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAyKS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlOiBhc3NpZ25tZW50VHlwZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEYXRhLlwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc2lnbkRldmljZVRvT3duZXIob3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gT3duZXJEZXZpY2VTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlSWQ6IGZvcm1EYXRhLmdldCgnZGV2aWNlSWQnKSxcbiAgICAgICAgb3duZXJJZDogb3duZXJJZCxcbiAgICAgICAgYWN0aXZhdGVkRGF0ZTogZm9ybURhdGEuZ2V0KCdhY3RpdmF0ZWREYXRlJyksXG4gICAgICAgIGNoYXJnZVBlckt3aDogZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJLd2gnKSxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlOiBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlck1pbnV0ZScpLFxuICAgICAgICBhc3NpZ25tZW50VHlwZTogZm9ybURhdGEuZ2V0KCdhc3NpZ25tZW50VHlwZScpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGFzc2lnbiBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHsgZGV2aWNlSWQsIGFjdGl2YXRlZERhdGUsIGNoYXJnZVBlckt3aCwgY2hhcmdlUGVyTWludXRlLCBhc3NpZ25tZW50VHlwZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgY29uc3QgbmV3QXNzaWdubWVudERhdGE6IGFueSA9IHtcbiAgICAgICAgb3duZXJJZCxcbiAgICAgICAgZGV2aWNlSWQsXG4gICAgICAgIGFjdGl2YXRlZERhdGUsXG4gICAgICAgIGNoYXJnZVBlckt3aCxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlLFxuICAgIH07XG5cbiAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgbmV3QXNzaWdubWVudERhdGEuYXNzaWdubWVudFR5cGUgPSBhc3NpZ25tZW50VHlwZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyksIG5ld0Fzc2lnbm1lbnREYXRhKTtcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEFzc2lnbiBEZXZpY2UuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnRGV2aWNlIGFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmNvbnN0IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hID0gT3duZXJEZXZpY2VTY2hlbWEub21pdCh7IG93bmVySWQ6IHRydWUsIGRldmljZUlkOiB0cnVlLCBhY3RpdmF0ZWREYXRlOiB0cnVlIH0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlQXNzaWdubWVudChhc3NpZ25tZW50SWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgXG4gICAgY29uc3QgY2hhcmdlUGVyS3doVmFsdWUgPSBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlckt3aCcpO1xuICAgIGNvbnN0IGNoYXJnZVBlck1pbnV0ZVZhbHVlID0gZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJNaW51dGUnKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIGNoYXJnZVBlckt3aDogY2hhcmdlUGVyS3doVmFsdWUsXG4gICAgICAgIGNoYXJnZVBlck1pbnV0ZTogY2hhcmdlUGVyTWludXRlVmFsdWUsXG4gICAgICAgIGFzc2lnbm1lbnRUeXBlOiBmb3JtRGF0YS5nZXQoJ2Fzc2lnbm1lbnRUeXBlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGFzc2lnbm1lbnQuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YVRvVXBkYXRlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGNvbnN0IHsgY2hhcmdlUGVyS3doLCBjaGFyZ2VQZXJNaW51dGUsIGFzc2lnbm1lbnRUeXBlIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyS3doID0gY2hhcmdlUGVyS3doO1xuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyTWludXRlID0gY2hhcmdlUGVyTWludXRlO1xuICAgICAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgICAgIGRhdGFUb1VwZGF0ZS5hc3NpZ25tZW50VHlwZSA9IGFzc2lnbm1lbnRUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGFzc2lnbm1lbnRSZWYsIGRhdGFUb1VwZGF0ZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LmAgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS1vd25lcnMvJHtvd25lcklkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdEZXZpY2UgYXNzaWdubWVudCB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmFzc2lnbkRldmljZUZyb21Pd25lcihhc3NpZ25tZW50SWQ6IHN0cmluZywgZGV2aWNlSWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgZGVsZXRlRG9jKGFzc2lnbm1lbnRSZWYpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSB1bmFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVuLWFzc2lnbmluZyB0aGUgZGV2aWNlLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG4vLyBEZXZpY2UgVXNlciBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlVXNlcihwcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgcGhvdG9Vcmw6IGZvcm1EYXRhLmdldCgncGhvdG9VcmwnKSxcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICAgIHBob25lTnVtYmVyOiBmb3JtRGF0YS5nZXQoJ3Bob25lTnVtYmVyJyksXG4gICAgICAgIHNvY2lhbE1lZGlhVXJsOiBmb3JtRGF0YS5nZXQoJ3NvY2lhbE1lZGlhVXJsJyksXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBjcmVhdGUgZGV2aWNlIHVzZXIuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgIGZpZWxkczogcmF3Rm9ybURhdGEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHNvY2lhbE1lZGlhVXJsIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocUVtYWlsKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgZW1haWw6IFsnRW1haWwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdwaG9uZU51bWJlcicsICc9PScsIHBob25lTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFQaG9uZSkpLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdzb2NpYWxNZWRpYVVybCcsICc9PScsIHNvY2lhbE1lZGlhVXJsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocVNvY2lhbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgc29jaWFsTWVkaWFVcmw6IFsnU29jaWFsIG1lZGlhIFVSTCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGF3YWl0IGFkZERvYyh1c2Vyc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gQ3JlYXRlIERldmljZSBVc2VyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS11c2VycycpO1xuICAgIHJlZGlyZWN0KCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHJhd0Zvcm1EYXRhID0ge1xuICAgICAgICBwaG90b1VybDogZm9ybURhdGEuZ2V0KCdwaG90b1VybCcpLFxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSB1c2VyLiBQbGVhc2UgY2hlY2sgdGhlIGVycm9ycyBiZWxvdy4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcblxuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgnbmFtZScsICc9PScsIG5hbWUpKTtcbiAgICAgICAgY29uc3QgbmFtZVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxTmFtZSk7XG4gICAgICAgIGlmICghbmFtZVNuYXBzaG90LmVtcHR5ICYmIG5hbWVTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBuYW1lOiBbJ05hbWUgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBlbWFpbDogWydFbWFpbCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGhvbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHFTb2NpYWwgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcbiAgICAgICAgY29uc3Qgc29jaWFsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFTb2NpYWwpO1xuICAgICAgICBpZiAoIXNvY2lhbFNuYXBzaG90LmVtcHR5ICYmIHNvY2lhbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgJ2RldmljZS11c2VycycsIGlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIFVwZGF0ZSBEZXZpY2UgVXNlci4nLCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtdXNlcnMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS11c2Vycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLXVzZXJzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCAnZGV2aWNlLXVzZXJzJywgaWQpO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2ModXNlclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdEZXZpY2UgdXNlciBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgdXNlci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlVXNlcnMoKSB7XG4gICAgY29uc3QgZmlyc3ROYW1lcyA9IFsnSm9obicsICdKYW5lJywgJ1BldGVyJywgJ01hcnknLCAnRGF2aWQnLCAnU3VzYW4nLCAnTWljaGFlbCcsICdMaW5kYScsICdKYW1lcycsICdQYXRyaWNpYScsICdSb2JlcnQnLCAnSmVubmlmZXInLCAnV2lsbGlhbScsICdFbGl6YWJldGgnLCAnUmljaGFyZCcsICdKZXNzaWNhJywgJ0pvc2VwaCcsICdTYXJhaCcsICdDaGFybGVzJywgJ0thcmVuJ107XG4gICAgY29uc3QgbGFzdE5hbWVzID0gWydTbWl0aCcsICdKb2huc29uJywgJ1dpbGxpYW1zJywgJ0Jyb3duJywgJ0pvbmVzJywgJ0dhcmNpYScsICdNaWxsZXInLCAnRGF2aXMnLCAnUm9kcmlndWV6JywgJ01hcnRpbmV6JywgJ0hlcm5hbmRleicsICdMb3BleicsICdHb256YWxleicsICdXaWxzb24nLCAnQW5kZXJzb24nLCAnVGhvbWFzJywgJ1RheWxvcicsICdNb29yZScsICdKYWNrc29uJywgJ01hcnRpbiddO1xuICAgIGNvbnN0IGdlbmVyYXRlZE5hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyUmVmID0gZG9jKHVzZXJzUmVmKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgYmF0Y2guc2V0KG5ld1VzZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogYCs2MzkxNyR7KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMDApICsgMTAwMDAwMCkudG9TdHJpbmcoKX1gLFxuICAgICAgICAgICAgICAgIHNvY2lhbE1lZGlhVXJsOiBgaHR0cHM6Ly9leGFtcGxlLmNvbS8ke2ZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX1gLFxuICAgICAgICAgICAgICAgIHBob3RvVXJsOiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvJHtuZXdVc2VyUmVmLmlkfS8yMDAvMjAwYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBVc2Vycy5cIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgVXNlcnMuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbi8vIERldmljZSBNb2RlbCBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlTW9kZWwocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG5cbiAgICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBIGRldmljZSBtb2RlbCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAgIGVycm9yczogeyBkZXZpY2VNb2RlbDogWydUaGlzIGRldmljZSBtb2RlbCBuYW1lIGlzIGFscmVhZHkgaW4gdXNlLiddIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgYWRkRG9jKGRldmljZU1vZGVsc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBDcmVhdGUgRGV2aWNlIE1vZGVsLicgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICByZWRpcmVjdCgnL2RldmljZS1tb2RlbHMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURldmljZU1vZGVsKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkgJiYgcXVlcnlTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQSBkZXZpY2UgbW9kZWwgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHsgZGV2aWNlTW9kZWw6IFsnVGhpcyBkZXZpY2UgbW9kZWwgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxSZWYgPSBkb2MoZGIsICdkZXZpY2UtbW9kZWxzJywgaWQpO1xuICAgICAgICBhd2FpdCB1cGRhdGVEb2MoZGV2aWNlTW9kZWxSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZSBNb2RlbC4nIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtbW9kZWxzJyk7XG4gICAgcmVkaXJlY3QoYC9kZXZpY2UtbW9kZWxzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGV2aWNlTW9kZWwoaWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZU1vZGVsUmVmID0gZG9jKGRiLCBgZGV2aWNlLW1vZGVscy8ke2lkfWApO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZGV2aWNlTW9kZWxSZWYpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBtb2RlbCBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgbW9kZWwuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG4gICAgXG5cbiAgICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQWtpQnNCIn0=
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/node:assert [external] (node:assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}}),
"[externals]/node:http [external] (node:http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}}),
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}}),
"[externals]/node:net [external] (node:net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[externals]/node:querystring [external] (node:querystring, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:querystring", () => require("node:querystring"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:zlib [external] (node:zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}}),
"[externals]/node:util/types [external] (node:util/types, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util/types", () => require("node:util/types"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}}),
"[externals]/node:tls [external] (node:tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}}),
"[externals]/node:http2 [external] (node:http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:http2", () => require("node:http2"));

module.exports = mod;
}}),
"[externals]/string_decoder [external] (string_decoder, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}}),
"[externals]/node:worker_threads [external] (node:worker_threads, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:worker_threads", () => require("node:worker_threads"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:console [external] (node:console, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}}),
"[project]/src/lib/firebase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "db": (()=>db),
    "storage": (()=>storage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-ssr] (ecmascript)");
;
;
;
// Your web app's Firebase configuration
const firebaseConfig = {
    projectId: "dormamu-d7e4b",
    appId: "1:851829022446:web:38569d70a0107386af9dff",
    storageBucket: "dormamu-d7e4b.appspot.com",
    apiKey: "AIzaSyCzS67rERljlfS-hVRhehV8BCZ3C8MhLWA",
    authDomain: "dormamu-d7e4b.firebaseapp.com",
    measurementId: "",
    messagingSenderId: "851829022446"
};
// Initialize Firebase
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorage"])(app);
;
}}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllDeviceModels": (()=>getAllDeviceModels),
    "getAllDevices": (()=>getAllDevices),
    "getDashboardSummary": (()=>getDashboardSummary),
    "getDeviceById": (()=>getDeviceById),
    "getDeviceModelById": (()=>getDeviceModelById),
    "getDeviceModels": (()=>getDeviceModels),
    "getDeviceOwnerById": (()=>getDeviceOwnerById),
    "getDeviceOwners": (()=>getDeviceOwners),
    "getDeviceUserById": (()=>getDeviceUserById),
    "getDeviceUsers": (()=>getDeviceUsers),
    "getDevices": (()=>getDevices),
    "getDevicesByOwnerId": (()=>getDevicesByOwnerId),
    "getOfflineDevices": (()=>getOfflineDevices),
    "searchAvailableDevices": (()=>searchAvailableDevices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
const ITEMS_PER_PAGE = 5;
const getDashboardSummary = async ()=>{
    try {
        const usersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-users'));
        const devicesSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'devices'));
        const ownersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-owners'));
        const totalUsers = usersSnapshot.size;
        const totalOwners = ownersSnapshot.size;
        let activeDevices = 0;
        let totalDevices = 0;
        let newlyAssignedDevices = 0;
        let recentlyManufactured = 0;
        if (!devicesSnapshot.empty) {
            totalDevices = devicesSnapshot.size;
            const allDevices = [];
            devicesSnapshot.forEach((doc)=>allDevices.push({
                    id: doc.id,
                    ...doc.data()
                }));
            activeDevices = allDevices.filter((device)=>device.status === 'available' || device.status === 'running').length;
            newlyAssignedDevices = allDevices.filter((device)=>device.status === 'assigned').length;
            recentlyManufactured = allDevices.filter((device)=>device.status === 'manufactured').length;
        }
        return {
            totalUsers,
            activeDevices,
            totalDevices,
            totalOwners,
            newlyAssignedDevices,
            recentlyManufactured
        };
    } catch (error) {
        console.error("Error fetching dashboard summary:", error);
        return {
            totalUsers: 0,
            activeDevices: 0,
            totalDevices: 0,
            totalOwners: 0,
            newlyAssignedDevices: 0,
            recentlyManufactured: 0
        };
    }
};
const getDevices = async ({ query, currentPage })=>{
    try {
        const devicesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'devices');
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(devicesCollection);
        if (snapshot.empty) {
            return {
                devices: [],
                totalDevices: 0
            };
        }
        let devicesArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            devicesArray = devicesArray.filter((device)=>device.serialNumber.toLowerCase().includes(lowercasedQuery) || device.status.toLowerCase().includes(lowercasedQuery));
        }
        devicesArray.sort((a, b)=>new Date(b.manufacturedDate).getTime() - new Date(a.manufacturedDate).getTime());
        const totalDevices = devicesArray.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedDevices = devicesArray.slice(offset, offset + ITEMS_PER_PAGE);
        return {
            devices: paginatedDevices,
            totalDevices
        };
    } catch (error) {
        console.error(error);
        return {
            devices: [],
            totalDevices: 0
        };
    }
};
const getAllDevices = async ()=>{
    try {
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'devices'));
        if (!snapshot.empty) {
            return snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};
async function searchAvailableDevices(query) {
    try {
        const assignableStatuses = [
            'available',
            'manufactured',
            'unassigned'
        ];
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'devices'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('status', 'in', assignableStatuses));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        if (snapshot.empty) {
            return [];
        }
        let availableDevices = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            })).filter((device)=>!device.ownerId);
        if (!query) {
            return availableDevices.slice(0, 10);
        }
        const filteredDevices = availableDevices.filter((device)=>device.serialNumber.toLowerCase().includes(query.toLowerCase()));
        return filteredDevices.slice(0, 10);
    } catch (error) {
        console.error("Error searching available devices", error);
        return [];
    }
}
const getDeviceById = async (id)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'devices', id);
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (snapshot.exists()) {
            return {
                id,
                ...snapshot.data()
            };
        }
    } catch (error) {
        console.error(error);
    }
};
const getOfflineDevices = async ({ query, currentPage, errorsOnly })=>{
    try {
        const statuses = errorsOnly ? [
            'error'
        ] : [
            'offline',
            'error'
        ];
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'devices'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('status', 'in', statuses));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        if (snapshot.empty) {
            return {
                devices: [],
                totalDevices: 0
            };
        }
        let attentionDevices = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            attentionDevices = attentionDevices.filter((device)=>device.serialNumber.toLowerCase().includes(lowercasedQuery) || device.status.toLowerCase().includes(lowercasedQuery));
        }
        attentionDevices.sort((a, b)=>new Date(b.manufacturedDate).getTime() - new Date(a.manufacturedDate).getTime());
        const totalDevices = attentionDevices.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedDevices = attentionDevices.slice(offset, offset + ITEMS_PER_PAGE);
        return {
            devices: paginatedDevices,
            totalDevices
        };
    } catch (error) {
        console.error(error);
        return {
            devices: [],
            totalDevices: 0
        };
    }
};
const getDeviceOwners = async ({ query, currentPage })=>{
    try {
        const ownersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-owners'));
        const assignmentsSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'owners-devices'));
        if (ownersSnapshot.empty) {
            return {
                owners: [],
                totalOwners: 0
            };
        }
        const assignmentsCount = {};
        if (!assignmentsSnapshot.empty) {
            assignmentsSnapshot.forEach((doc)=>{
                const ownerId = doc.data().ownerId;
                assignmentsCount[ownerId] = (assignmentsCount[ownerId] || 0) + 1;
            });
        }
        let ownersArray = ownersSnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
                assignedDevicesCount: assignmentsCount[doc.id] || 0
            }));
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            ownersArray = ownersArray.filter((owner)=>owner.name.toLowerCase().includes(lowercasedQuery) || owner.email.toLowerCase().includes(lowercasedQuery) || owner.phoneNumber && owner.phoneNumber.includes(query));
        }
        ownersArray.sort((a, b)=>a.name.localeCompare(b.name));
        const totalOwners = ownersArray.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedOwners = ownersArray.slice(offset, offset + ITEMS_PER_PAGE);
        return {
            owners: paginatedOwners,
            totalOwners
        };
    } catch (error) {
        console.error(error);
        return {
            owners: [],
            totalOwners: 0
        };
    }
};
const getDeviceOwnerById = async (id)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-owners', id);
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (snapshot.exists()) {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'owners-devices'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('ownerId', '==', id));
            const assignmentsSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const assignedDevicesCount = assignmentsSnapshot.size;
            return {
                id,
                ...snapshot.data(),
                assignedDevicesCount
            };
        }
    } catch (error) {
        console.error(error);
    }
};
const getDevicesByOwnerId = async (ownerId)=>{
    try {
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'owners-devices'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('ownerId', '==', ownerId));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        if (snapshot.empty) {
            return [];
        }
        const ownerDeviceRelations = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        const deviceDetailsPromises = ownerDeviceRelations.map(async (relation)=>{
            const device = await getDeviceById(relation.deviceId);
            if (device) {
                return {
                    ...relation,
                    deviceSerialNumber: device.serialNumber,
                    deviceType: device.deviceType,
                    status: device.status
                };
            }
            return null;
        });
        const resolvedDevices = await Promise.all(deviceDetailsPromises);
        return resolvedDevices.filter((device)=>device !== null);
    } catch (error) {
        console.error("Error fetching devices for owner:", error);
        return [];
    }
};
const getDeviceUsers = async ({ query, currentPage })=>{
    try {
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-users'));
        if (snapshot.empty) {
            return {
                users: [],
                totalUsers: 0
            };
        }
        let usersArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            usersArray = usersArray.filter((user)=>user.name.toLowerCase().includes(lowercasedQuery) || user.email.toLowerCase().includes(lowercasedQuery));
        }
        usersArray.sort((a, b)=>a.name.localeCompare(b.name));
        const totalUsers = usersArray.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedUsers = usersArray.slice(offset, offset + ITEMS_PER_PAGE);
        return {
            users: paginatedUsers,
            totalUsers
        };
    } catch (error) {
        console.error(error);
        return {
            users: [],
            totalUsers: 0
        };
    }
};
const getDeviceUserById = async (id)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-users', id);
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (snapshot.exists()) {
            return {
                id: id,
                ...snapshot.data()
            };
        }
    } catch (error) {
        console.error(error);
    }
};
const getDeviceModels = async ({ query, currentPage })=>{
    try {
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-models'));
        if (snapshot.empty) {
            return {
                deviceModels: [],
                totalDeviceModels: 0
            };
        }
        let deviceModelsArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            deviceModelsArray = deviceModelsArray.filter((dm)=>dm.deviceModel.toLowerCase().includes(lowercasedQuery));
        }
        deviceModelsArray.sort((a, b)=>a.deviceModel.localeCompare(b.deviceModel));
        const totalDeviceModels = deviceModelsArray.length;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const paginatedDeviceModels = deviceModelsArray.slice(offset, offset + ITEMS_PER_PAGE);
        return {
            deviceModels: paginatedDeviceModels,
            totalDeviceModels
        };
    } catch (error) {
        console.error(error);
        return {
            deviceModels: [],
            totalDeviceModels: 0
        };
    }
};
const getAllDeviceModels = async ()=>{
    try {
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-models'));
        if (snapshot.empty) {
            return [];
        }
        const deviceModelsArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        deviceModelsArray.sort((a, b)=>a.deviceModel.localeCompare(b.deviceModel));
        return deviceModelsArray;
    } catch (error) {
        console.error(error);
        return [];
    }
};
const getDeviceModelById = async (id)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'device-models', id);
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (snapshot.exists()) {
            return {
                id,
                ...snapshot.data()
            };
        }
    } catch (error) {
        console.error(error);
    }
};
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/device-search-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeviceSearchDialog": (()=>DeviceSearchDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-debounce/dist/index.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};
const statusVariants = {
    available: 'default',
    offline: 'secondary',
    maintenance: 'secondary',
    deactivated: 'outline',
    assigned: 'secondary'
};
function DeviceSearchDialog({ onDeviceSelect }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebouncedCallback"])((term)=>{
        setQuery(term);
        startTransition(async ()=>{
            if (term.length > 2) {
                const devices = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchAvailableDevices"])(term);
                setResults(devices);
            } else {
                setResults([]);
            }
        });
    }, 300);
    const handleSelectDevice = (device)=>{
        onDeviceSelect(device);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    children: "Search"
                }, void 0, false, {
                    fileName: "[project]/src/components/device-search-dialog.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/device-search-dialog.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-[625px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Search for an Available Device"
                        }, void 0, false, {
                            fileName: "[project]/src/components/device-search-dialog.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/device-search-dialog.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/src/components/device-search-dialog.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search by serial number...",
                                onChange: (e)=>handleSearch(e.target.value),
                                className: "pl-9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/device-search-dialog.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/device-search-dialog.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 max-h-[300px] overflow-auto",
                        children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-6 w-6 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/device-search-dialog.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/device-search-dialog.tsx",
                            lineNumber: 78,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Serial Number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/device-search-dialog.tsx",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/device-search-dialog.tsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/device-search-dialog.tsx",
                                                lineNumber: 87,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {}, void 0, false, {
                                                fileName: "[project]/src/components/device-search-dialog.tsx",
                                                lineNumber: 88,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/device-search-dialog.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/device-search-dialog.tsx",
                                    lineNumber: 83,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: results.length > 0 ? results.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: device.serialNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-search-dialog.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: deviceTypeLabels[device.deviceType]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-search-dialog.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: statusVariants[device.status],
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("capitalize", device.status === 'offline' && 'bg-amber-100 text-amber-800 border-amber-200'),
                                                        children: device.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/device-search-dialog.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-search-dialog.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        onClick: ()=>handleSelectDevice(device),
                                                        disabled: device.status === 'deactivated',
                                                        children: "Select"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/device-search-dialog.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-search-dialog.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, device.id, true, {
                                            fileName: "[project]/src/components/device-search-dialog.tsx",
                                            lineNumber: 94,
                                            columnNumber: 33
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            colSpan: 4,
                                            className: "text-center",
                                            children: query.length > 2 ? "No devices found." : "Enter at least 3 characters to search."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/device-search-dialog.tsx",
                                            lineNumber: 116,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/device-search-dialog.tsx",
                                        lineNumber: 115,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/device-search-dialog.tsx",
                                    lineNumber: 91,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/device-search-dialog.tsx",
                            lineNumber: 82,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/device-search-dialog.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/device-search-dialog.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/device-search-dialog.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/assign-device-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AssignDeviceDialog": (()=>AssignDeviceDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$1db4a6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:1db4a6 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$device$2d$search$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/device-search-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};
function SubmitButton() {
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        type: "submit",
        disabled: pending,
        children: pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "mr-2 h-4 w-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/assign-device-dialog.tsx",
                    lineNumber: 37,
                    columnNumber: 13
                }, this),
                "Assigning..."
            ]
        }, void 0, true) : 'Assign Device'
    }, void 0, false, {
        fileName: "[project]/src/components/assign-device-dialog.tsx",
        lineNumber: 34,
        columnNumber: 7
    }, this);
}
function AssignDeviceDialog({ ownerId }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDevice, setSelectedDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [activatedDate, setActivatedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [assignmentSelection, setAssignmentSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            const today = new Date();
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            setActivatedDate(`${year}-${month}-${day}`);
        } else {
            setAssignmentSelection(undefined);
        }
    }, [
        open
    ]);
    const initialState = {
        message: '',
        errors: {}
    };
    const assignDeviceWithOwnerId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$1db4a6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["assignDeviceToOwner"].bind(null, ownerId);
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(assignDeviceWithOwnerId, initialState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state?.message) {
            const variant = state.errors && Object.keys(state.errors).length > 0 ? 'destructive' : 'default';
            toast({
                title: variant === 'destructive' ? 'Error' : 'Success',
                description: state.message,
                variant: variant
            });
            if (!state.errors || Object.keys(state.errors).length === 0) {
                setOpen(false);
                setSelectedDevice(null);
            }
        }
    }, [
        state,
        toast
    ]);
    const handleDeviceSelect = (device)=>{
        setSelectedDevice(device);
        setAssignmentSelection(undefined); // Reset on new device selection
    };
    const showAssignmentType = selectedDevice?.deviceType === 'kwh-meter-timer';
    const showChargePerKwh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedDevice) return false;
        if (selectedDevice.deviceType === 'kwh-meter') return true;
        if (selectedDevice.deviceType === 'kwh-meter-timer' && assignmentSelection === 'kwh-meter') return true;
        return false;
    }, [
        selectedDevice,
        assignmentSelection
    ]);
    const showChargePerMinute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedDevice) return false;
        if (selectedDevice.deviceType === 'timer') return true;
        if (selectedDevice.deviceType === 'kwh-meter-timer' && assignmentSelection === 'timer') return true;
        return false;
    }, [
        selectedDevice,
        assignmentSelection
    ]);
    const assignmentType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedDevice?.deviceType === 'kwh-meter') return 'kwh-meter';
        if (selectedDevice?.deviceType === 'timer') return 'timer';
        return assignmentSelection;
    }, [
        selectedDevice,
        assignmentSelection
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: (isOpen)=>{
            setOpen(isOpen);
            if (!isOpen) {
                setSelectedDevice(null);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/assign-device-dialog.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        " Assign Device"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/assign-device-dialog.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/assign-device-dialog.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Assign a New Device"
                        }, void 0, false, {
                            fileName: "[project]/src/components/assign-device-dialog.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: formAction,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "deviceId",
                                value: selectedDevice?.id || ''
                            }, void 0, false, {
                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "activatedDate",
                                value: activatedDate
                            }, void 0, false, {
                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            assignmentType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "assignmentType",
                                value: assignmentType
                            }, void 0, false, {
                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                lineNumber: 134,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "deviceId",
                                        children: "Device"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "selectedDevice",
                                                name: "selectedDevice",
                                                readOnly: true,
                                                value: selectedDevice ? `${selectedDevice.serialNumber}` : 'No device selected',
                                                className: "flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$device$2d$search$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceSearchDialog"], {
                                                onDeviceSelect: handleDeviceSelect
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "deviceId-error",
                                        "aria-live": "polite",
                                        "aria-atomic": "true",
                                        children: state?.errors?.deviceId && state.errors.deviceId.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-destructive",
                                                children: error
                                            }, error, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 150,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 147,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end gap-4",
                                children: [
                                    selectedDevice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "Device Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 160,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground h-10 flex items-center",
                                                children: deviceTypeLabels[selectedDevice.deviceType]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 161,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 159,
                                        columnNumber: 19
                                    }, this),
                                    showAssignmentType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "assignmentType",
                                                children: "Assign As"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                name: "assignmentType",
                                                onValueChange: (value)=>setAssignmentSelection(value),
                                                value: assignmentSelection,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        id: "assignmentType",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Select type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "kwh-meter",
                                                                children: "KWH Meter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "timer",
                                                                children: "Timer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    showChargePerKwh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "chargePerKwh",
                                                children: "Charge Per KWH"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 187,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "chargePerKwh",
                                                name: "chargePerKwh",
                                                type: "number",
                                                step: "0.01",
                                                placeholder: "e.g. 0.15",
                                                "aria-describedby": "chargePerKwh-error",
                                                disabled: !selectedDevice
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 188,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "chargePerKwh-error",
                                                "aria-live": "polite",
                                                "aria-atomic": "true",
                                                children: state?.errors?.chargePerKwh && state.errors.chargePerKwh.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-destructive",
                                                        children: error
                                                    }, error, false, {
                                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 33
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 197,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 186,
                                        columnNumber: 21
                                    }, this),
                                    showChargePerMinute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "chargePerMinute",
                                                children: "Charge Per minute"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 209,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "chargePerMinute",
                                                name: "chargePerMinute",
                                                type: "number",
                                                step: "0.01",
                                                placeholder: "e.g. 0.05",
                                                "aria-describedby": "chargePerMinute-error",
                                                disabled: !selectedDevice
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 210,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "chargePerMinute-error",
                                                "aria-live": "polite",
                                                "aria-atomic": "true",
                                                children: state?.errors?.chargePerMinute && state.errors.chargePerMinute.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-destructive",
                                                        children: error
                                                    }, error, false, {
                                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 33
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                                lineNumber: 219,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 208,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/assign-device-dialog.tsx",
                                            lineNumber: 233,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {}, void 0, false, {
                                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/assign-device-dialog.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/assign-device-dialog.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/assign-device-dialog.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/assign-device-dialog.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/owned-devices.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OwnedDevices": (()=>OwnedDevices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$edit$2d$device$2d$assignment$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/edit-device-assignment-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unassign$2d$device$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/unassign-device-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assign$2d$device$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assign-device-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const deviceTypeLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};
const statusVariants = {
    available: 'default',
    offline: 'secondary',
    maintenance: 'secondary',
    deactivated: 'outline',
    running: 'default',
    error: 'destructive',
    assigned: 'secondary',
    manufactured: 'secondary',
    unassigned: 'secondary'
};
function OwnedDevices({ devices, ownerId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Owned Devices"
                    }, void 0, false, {
                        fileName: "[project]/src/components/owned-devices.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assign$2d$device$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AssignDeviceDialog"], {
                        ownerId: ownerId
                    }, void 0, false, {
                        fileName: "[project]/src/components/owned-devices.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/owned-devices.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: devices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Device Serial Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owned-devices.tsx",
                                            lineNumber: 46,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Device Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owned-devices.tsx",
                                            lineNumber: 47,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Assigned As"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owned-devices.tsx",
                                            lineNumber: 48,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owned-devices.tsx",
                                            lineNumber: 49,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Charge/KWH"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owned-devices.tsx",
                                            lineNumber: 50,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Charge/min"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owned-devices.tsx",
                                            lineNumber: 51,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-right",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/owned-devices.tsx",
                                            lineNumber: 52,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/owned-devices.tsx",
                                    lineNumber: 45,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/owned-devices.tsx",
                                lineNumber: 44,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: devices.map((device)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "font-medium",
                                                children: device.deviceSerialNumber
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owned-devices.tsx",
                                                lineNumber: 59,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: deviceTypeLabels[device.deviceType]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owned-devices.tsx",
                                                lineNumber: 60,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: device.assignmentType ? deviceTypeLabels[device.assignmentType] : 'N/A'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owned-devices.tsx",
                                                lineNumber: 61,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: statusVariants[device.status],
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('capitalize', device.status === 'running' && 'bg-green-500 text-white', device.status === 'offline' && 'bg-amber-100 text-amber-800 border-amber-200', device.status === 'assigned' && 'bg-sky-100 text-sky-800 border-sky-200', device.status === 'manufactured' && 'bg-gray-100 text-gray-800 border-gray-200', device.status === 'unassigned' && 'bg-gray-100 text-gray-800 border-gray-200'),
                                                    children: device.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/owned-devices.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owned-devices.tsx",
                                                lineNumber: 64,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: `PHP ${(device.chargePerKwh || 0).toFixed(2)}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owned-devices.tsx",
                                                lineNumber: 78,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: `PHP ${(device.chargePerMinute || 0).toFixed(2)}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owned-devices.tsx",
                                                lineNumber: 81,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-right",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$edit$2d$device$2d$assignment$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditDeviceAssignmentDialog"], {
                                                            assignment: device
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owned-devices.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unassign$2d$device$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnassignDeviceDialog"], {
                                                            assignmentId: device.id,
                                                            deviceId: device.deviceId,
                                                            ownerId: device.ownerId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/owned-devices.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/owned-devices.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/owned-devices.tsx",
                                                lineNumber: 84,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, device.id, true, {
                                        fileName: "[project]/src/components/owned-devices.tsx",
                                        lineNumber: 58,
                                        columnNumber: 41
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/owned-devices.tsx",
                                lineNumber: 55,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/owned-devices.tsx",
                        lineNumber: 43,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/owned-devices.tsx",
                    lineNumber: 42,
                    columnNumber: 22
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "This owner has no assigned devices."
                    }, void 0, false, {
                        fileName: "[project]/src/components/owned-devices.tsx",
                        lineNumber: 98,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/owned-devices.tsx",
                    lineNumber: 97,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/owned-devices.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/owned-devices.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/device-owner-details-client-page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeviceOwnerDetailsClientPage": (()=>DeviceOwnerDetailsClientPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$owned$2d$devices$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/owned-devices.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DeviceOwnerDetailsClientPage({ owner, ownedDevices }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-muted/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                    title: owner.name,
                    backHref: "/device-owners"
                }, void 0, false, {
                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mt-8 grid gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Owner Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                        lineNumber: 17,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                    lineNumber: 16,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Email:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 24
                                                }, this),
                                                " ",
                                                owner.email
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                            lineNumber: 20,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Phone Number:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 24
                                                }, this),
                                                " ",
                                                owner.phoneNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                            lineNumber: 21,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Address:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 24
                                                }, this),
                                                " ",
                                                owner.address
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                            lineNumber: 22,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Social Media:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 24
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: owner.socialMediaUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-blue-600 hover:underline",
                                                    children: owner.socialMediaUrl
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$owned$2d$devices$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OwnedDevices"], {
                            devices: ownedDevices,
                            ownerId: owner.id
                        }, void 0, false, {
                            fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/device-owner-details-client-page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/device-owner-details-client-page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/device-owner-details-client-page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__aa5d3c88._.js.map