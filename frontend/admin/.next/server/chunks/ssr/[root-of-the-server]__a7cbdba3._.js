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
"[project]/src/lib/data:adc2c6 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40ae586fb5123eac67d98cd32b53036c6133940d67":"deleteDeviceModel"},"src/lib/actions.ts",""] */ __turbopack_context__.s({
    "deleteDeviceModel": (()=>deleteDeviceModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteDeviceModel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40ae586fb5123eac67d98cd32b53036c6133940d67", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteDeviceModel"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIHNldERvYywgdXBkYXRlRG9jLCBkZWxldGVEb2MsIGdldERvY3MsIHF1ZXJ5IGFzIGZpcmVzdG9yZVF1ZXJ5LCB3aGVyZSwgd3JpdGVCYXRjaCwgbGltaXQgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2ZpcmViYXNlJztcbmltcG9ydCB7IENyZWF0ZURldmljZVNjaGVtYSwgRGV2aWNlU2NoZW1hLCBEZXZpY2VPd25lclNjaGVtYSwgT3duZXJEZXZpY2VTY2hlbWEsIERldmljZVVzZXJTY2hlbWEsIERldmljZU1vZGVsU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJztcbmltcG9ydCB0eXBlIHsgRGV2aWNlLCBEZXZpY2VPd25lciB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsRGV2aWNlTW9kZWxzLCBnZXRBbGxEZXZpY2VzIH0gZnJvbSAnLi9kYXRhJztcblxuZXhwb3J0IHR5cGUgRm9ybVN0YXRlID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBlcnJvcnM/OiB7XG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nW107XG4gICAgbW9kZWxOdW1iZXI/OiBzdHJpbmdbXTtcbiAgICBkZXZpY2VUeXBlPzogc3RyaW5nW107XG4gICAgc3RhdHVzPzogc3RyaW5nW107XG4gICAgbWFudWZhY3R1cmVkRGF0ZT86IHN0cmluZ1tdO1xuICAgIG5hbWU/OiBzdHJpbmdbXTtcbiAgICBhZGRyZXNzPzogc3RyaW5nW107XG4gICAgZW1haWw/OiBzdHJpbmdbXTtcbiAgICBzb2NpYWxNZWRpYVVybD86IHN0cmluZ1tdO1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nW107XG4gICAgZGV2aWNlSWQ/OiBzdHJpbmdbXTtcbiAgICBhY3RpdmF0ZWREYXRlPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyS3doPzogc3RyaW5nW107XG4gICAgY2hhcmdlUGVyTWludXRlPzogc3RyaW5nW107XG4gICAgZGVhY3RpdmF0ZWRSZWFzb24/OiBzdHJpbmdbXTtcbiAgICBtYWludGVuYW5jZVJlYXNvbj86IHN0cmluZ1tdO1xuICAgIHBob3RvVXJsPzogc3RyaW5nW107XG4gICAgZGV2aWNlTW9kZWw/OiBzdHJpbmdbXTtcbiAgICBmZWF0dXJlPzogc3RyaW5nW107XG4gICAgYXNzaWdubWVudFR5cGU/OiBzdHJpbmdbXTtcbiAgfTtcbiAgZmllbGRzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEZXZpY2UocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IENyZWF0ZURldmljZVNjaGVtYS5zYWZlUGFyc2Uoe1xuICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICBtb2RlbE51bWJlcjogZm9ybURhdGEuZ2V0KCdtb2RlbE51bWJlcicpLFxuICAgIGRldmljZVR5cGU6IGZvcm1EYXRhLmdldCgnZGV2aWNlVHlwZScpLFxuICAgIHN0YXR1czogJ21hbnVmYWN0dXJlZCcsIC8vIEFsd2F5cyBtYW51ZmFjdHVyZWQgb24gY3JlYXRpb25cbiAgICBtYW51ZmFjdHVyZWREYXRlOiBmb3JtRGF0YS5nZXQoJ21hbnVmYWN0dXJlZERhdGUnKSxcbiAgICBkZWFjdGl2YXRlZFJlYXNvbjogZm9ybURhdGEuZ2V0KCdkZWFjdGl2YXRlZFJlYXNvbicpLFxuICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gIH0pO1xuXG4gIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHsgc2VyaWFsTnVtYmVyLCBtb2RlbE51bWJlciwgZGV2aWNlVHlwZSwgc3RhdHVzLCBtYW51ZmFjdHVyZWREYXRlLCBtYWludGVuYW5jZVJlYXNvbiwgZGVhY3RpdmF0ZWRSZWFzb24gfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZXNSZWYsIHdoZXJlKCdzZXJpYWxOdW1iZXInLCAnPT0nLCBzZXJpYWxOdW1iZXIpKTtcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcblxuICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGNyZWF0ZSBkZXZpY2UuIEEgZGV2aWNlIHdpdGggdGhpcyBzZXJpYWwgbnVtYmVyIGFscmVhZHkgZXhpc3RzLicsXG4gICAgICAgICAgICBlcnJvcnM6IHsgc2VyaWFsTnVtYmVyOiBbJ1RoaXMgc2VyaWFsIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuZXdEZXZpY2VEYXRhID0ge1xuICAgICAgc2VyaWFsTnVtYmVyLFxuICAgICAgbW9kZWxOdW1iZXIsXG4gICAgICBkZXZpY2VUeXBlLFxuICAgICAgc3RhdHVzOiBzdGF0dXMgfHwgJ21hbnVmYWN0dXJlZCcsXG4gICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgbGFzdE1haW50ZW5hbmNlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBzdGF0dXMgPT09ICdtYWludGVuYW5jZScgPyBtYWludGVuYW5jZVJlYXNvbiA6IG51bGwsXG4gICAgICBkZWFjdGl2YXRlZFJlYXNvbjogc3RhdHVzID09PSAnZGVhY3RpdmF0ZWQnID8gZGVhY3RpdmF0ZWRSZWFzb24gOiBudWxsLFxuICAgICAgb3duZXJJZDogbnVsbCxcbiAgICB9O1xuXG4gICAgYXdhaXQgYWRkRG9jKGRldmljZXNSZWYsIG5ld0RldmljZURhdGEpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQ3JlYXRlIGRldmljZSBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UuJyB9O1xuICB9XG5cbiAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gIHJlZGlyZWN0KCcvZGV2aWNlcycpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIHNlcmlhbE51bWJlcjogZm9ybURhdGEuZ2V0KCdzZXJpYWxOdW1iZXInKSxcbiAgICAgICAgbW9kZWxOdW1iZXI6IGZvcm1EYXRhLmdldCgnbW9kZWxOdW1iZXInKSxcbiAgICAgICAgZGV2aWNlVHlwZTogZm9ybURhdGEuZ2V0KCdkZXZpY2VUeXBlJyksXG4gICAgICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KCdzdGF0dXMnKSxcbiAgICAgICAgbWFudWZhY3R1cmVkRGF0ZTogZm9ybURhdGEuZ2V0KCdtYW51ZmFjdHVyZWREYXRlJyksXG4gICAgICAgIGRlYWN0aXZhdGVkUmVhc29uOiBmb3JtRGF0YS5nZXQoJ2RlYWN0aXZhdGVkUmVhc29uJyksXG4gICAgICAgIG1haW50ZW5hbmNlUmVhc29uOiBmb3JtRGF0YS5nZXQoJ21haW50ZW5hbmNlUmVhc29uJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZS4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0geyAuLi52YWxpZGF0ZWRGaWVsZHMuZGF0YSB9O1xuICAgIFxuICAgIGRlbGV0ZSAoZGF0YSBhcyBQYXJ0aWFsPHR5cGVvZiBkYXRhPikuc2VyaWFsTnVtYmVyO1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZXM6IGFueSA9IHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBsYXN0TWFpbnRlbmFuY2U6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgIH07XG5cbiAgICBpZiAodXBkYXRlcy5zdGF0dXMgIT09ICdtYWludGVuYW5jZScpIHtcbiAgICAgICAgdXBkYXRlcy5tYWludGVuYW5jZVJlYXNvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh1cGRhdGVzLnN0YXR1cyAhPT0gJ2RlYWN0aXZhdGVkJykge1xuICAgICAgICB1cGRhdGVzLmRlYWN0aXZhdGVkUmVhc29uID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgaWYgKFsnYXZhaWxhYmxlJywgJ3VuYXNzaWduZWQnXS5pbmNsdWRlcyh1cGRhdGVzLnN0YXR1cykpIHtcbiAgICAgICAgdXBkYXRlcy5vd25lcklkID0gbnVsbDtcbiAgICB9XG5cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhkZXZpY2VSZWYsIHVwZGF0ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZS4nIH07XG4gICAgfVxuXG4gICAgY29uc3QgYmFja1BhdGggPSBmb3JtRGF0YS5nZXQoJ2JhY2tIcmVmJykgYXMgc3RyaW5nIHx8IGAvZGV2aWNlcz9wYWdlPSR7cGFnZX1gO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlcy8ke2lkfWApO1xuXG4gICAgaWYgKGJhY2tQYXRoLnN0YXJ0c1dpdGgoJy9kZXZpY2VzPycpKSB7XG4gICAgICAgIHJlZGlyZWN0KGJhY2tQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZWRpcmVjdChgL2RldmljZXM/cGFnZT0ke3BhZ2V9YCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2UoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBpZCk7XG4gICAgYXdhaXQgZGVsZXRlRG9jKGRldmljZVJlZik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWxsRGV2aWNlcygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gRGVsZXRlIGFsbCBkZXZpY2UgYXNzaWdubWVudHNcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGFzc2lnbm1lbnRzQ29sbGVjdGlvbik7XG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlbGV0ZSBhbGwgZGV2aWNlc1xuICAgICAgICBjb25zdCBkZXZpY2VzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgIGNvbnN0IGRldmljZXNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoZGV2aWNlc0NvbGxlY3Rpb24pO1xuICAgICAgICBpZiAoIWRldmljZXNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBkZXZpY2VzU25hcHNob3QuZG9jcykge1xuICAgICAgICAgICAgICAgIGRldmljZUJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRldmljZUJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGV2aWNlQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgZGV2aWNlcyBhbmQgdGhlaXIgYXNzaWdubWVudHMgaGF2ZSBiZWVuIGRlbGV0ZWQuJywgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGFsbCBkZXZpY2VzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBkZXZpY2VzLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVEZXZpY2VzKCkge1xuICAgIGNvbnN0IGRldmljZVR5cGVzID0gWydrd2gtbWV0ZXInLCAndGltZXInLCAna3doLW1ldGVyLXRpbWVyJ10gYXMgY29uc3Q7XG4gICAgY29uc3Qgc3RhdHVzZXMgPSBbJ2F2YWlsYWJsZScsICdvZmZsaW5lJywgJ21haW50ZW5hbmNlJ10gYXMgY29uc3Q7XG4gICAgY29uc3QgdG90YWxEZXZpY2VzVG9HZW5lcmF0ZSA9IDEwMDtcbiAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7IC8vIEZpcmVzdG9yZSBiYXRjaCBsaW1pdFxuICBcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsRGV2aWNlc1RvR2VuZXJhdGU7IGkgKz0gYmF0Y2hTaXplKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgY29uc3QgZGV2aWNlc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2VzJyk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihpICsgYmF0Y2hTaXplLCB0b3RhbERldmljZXNUb0dlbmVyYXRlKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBlbmQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RldmljZVJlZiA9IGRvYyhkZXZpY2VzUmVmKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYW51ZmFjdHVyZWREYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBNYXRoLnJhbmRvbSgpICogMyAqIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICAgICAgICAgICAgICApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBiYXRjaC5zZXQobmV3RGV2aWNlUmVmLCB7XG4gICAgICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiBgU04tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICAgICAgICAgICBtb2RlbE51bWJlcjogYE1PRC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCA4KS50b1VwcGVyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgZGV2aWNlVHlwZTogZGV2aWNlVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGV2aWNlVHlwZXMubGVuZ3RoKV0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0dXNlcy5sZW5ndGgpXSxcbiAgICAgICAgICAgICAgICBtYW51ZmFjdHVyZWREYXRlLFxuICAgICAgICAgICAgICAgIGxhc3RNYWludGVuYW5jZTogbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKG1hbnVmYWN0dXJlZERhdGUpLmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCkgKiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShtYW51ZmFjdHVyZWREYXRlKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBiYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEZXZpY2VzLlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgRGV2aWNlcy4nIH07XG4gICAgfVxuICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURldmljZU93bmVyKF9wcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGFkZHJlc3M6IGZvcm1EYXRhLmdldCgnYWRkcmVzcycpLFxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgICAgICBzb2NpYWxNZWRpYVVybDogZm9ybURhdGEuZ2V0KCdzb2NpYWxNZWRpYVVybCcpLFxuICAgICAgICBwaG9uZU51bWJlcjogZm9ybURhdGEuZ2V0KCdwaG9uZU51bWJlcicpLFxuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lcnNSZWYgPSBjb2xsZWN0aW9uKGRiLCAnZGV2aWNlLW93bmVycycpO1xuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGNvbnN0IHFFbWFpbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ2VtYWlsJywgJz09JywgZW1haWwpKTtcbiAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkob3duZXJzUmVmLCB3aGVyZSgnc29jaWFsTWVkaWFVcmwnLCAnPT0nLCBzb2NpYWxNZWRpYVVybCkpO1xuXG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFFbWFpbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlciAmJiAhKGF3YWl0IGdldERvY3MocVBob25lKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBwaG9uZSBudW1iZXIgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFTb2NpYWwpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBhZGREb2Mob3duZXJzUmVmLCB2YWxpZGF0ZWRGaWVsZHMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIENyZWF0ZSBEZXZpY2UgT3duZXIuJywgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmVkaXJlY3QoJy9kZXZpY2Utb3duZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VPd25lcihpZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgcmF3Rm9ybURhdGEgPSB7XG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpLFxuICAgICAgICBhZGRyZXNzOiBmb3JtRGF0YS5nZXQoJ2FkZHJlc3MnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VPd25lclNjaGVtYS5zYWZlUGFyc2UocmF3Rm9ybURhdGEpO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBvd25lci4gUGxlYXNlIGNoZWNrIHRoZSBlcnJvcnMgYmVsb3cuJyxcbiAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3duZXJzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCduYW1lJywgJz09JywgbmFtZSkpO1xuICAgICAgICBjb25zdCBxRW1haWwgPSBmaXJlc3RvcmVRdWVyeShvd25lcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3Bob25lTnVtYmVyJywgJz09JywgcGhvbmVOdW1iZXIpKTtcbiAgICAgICAgY29uc3QgcVNvY2lhbCA9IGZpcmVzdG9yZVF1ZXJ5KG93bmVyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcblxuICAgICAgICBjb25zdCBuYW1lU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFOYW1lKTtcbiAgICAgICAgaWYgKCFuYW1lU25hcHNob3QuZW1wdHkgJiYgbmFtZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgbmFtZTogWydOYW1lIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IGVtYWlsOiBbJ0VtYWlsIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvY2lhbFNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxU29jaWFsKTtcbiAgICAgICAgaWYgKCFzb2NpYWxTbmFwc2hvdC5lbXB0eSAmJiBzb2NpYWxTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHNvY2lhbCBtZWRpYSBVUkwgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IHVwZGF0ZURvYyhvd25lclJlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBVcGRhdGUgRGV2aWNlIE93bmVyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLW93bmVycz9wYWdlPSR7cGFnZX1gKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURldmljZU93bmVyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvd25lclJlZiA9IGRvYyhkYiwgJ2RldmljZS1vd25lcnMnLCBpZCk7XG4gICAgICAgIGF3YWl0IGRlbGV0ZURvYyhvd25lclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGV2aWNlIG93bmVyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVsZXRpbmcgdGhlIGRldmljZSBvd25lci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFsbERldmljZU93bmVycygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSA1MDA7XG5cbiAgICAgICAgLy8gMS4gRmluZCBhbGwgYXNzaWdubWVudHMgYW5kIGRldmljZXMgdG8gdXBkYXRlXG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdvd25lcnMtZGV2aWNlcycpKTtcbiAgICAgICAgY29uc3QgZGV2aWNlSWRzVG9VcGRhdGU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGFzc2lnbm1lbnRzU25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgZGV2aWNlSWRzVG9VcGRhdGUucHVzaChkb2MuZGF0YSgpLmRldmljZUlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmF0Y2ggZGVsZXRlIGFzc2lnbm1lbnRzXG4gICAgICAgIGlmICghYXNzaWdubWVudHNTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGFzc2lnbm1lbnRCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkb2Mgb2YgYXNzaWdubWVudHNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgYXNzaWdubWVudEJhdGNoLmRlbGV0ZShkb2MucmVmKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXRjaFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzaWdubWVudEJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhdGNoIHVwZGF0ZSBkZXZpY2VzIHRvIGJlIHVuYXNzaWduZWRcbiAgICAgICAgaWYgKGRldmljZUlkc1RvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBkZXZpY2VCYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXZpY2VJZCBvZiBkZXZpY2VJZHNUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldmljZVJlZiA9IGRvYyhkYiwgJ2RldmljZXMnLCBkZXZpY2VJZCk7XG4gICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZXZpY2VCYXRjaC5jb21taXQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRldmljZUJhdGNoLmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyAzLiBEZWxldGUgYWxsIG93bmVyc1xuICAgICAgICBjb25zdCBvd25lcnNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgJ2RldmljZS1vd25lcnMnKSk7XG4gICAgICAgIGlmICghb3duZXJzU25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBvd25lcnNTbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgICAgICAgICAgb3duZXJCYXRjaC5kZWxldGUoZG9jLnJlZik7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGlmIChpICUgYmF0Y2hTaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG93bmVyQmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAlIGJhdGNoU2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1vd25lcnMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgb3duZXJzIGFuZCBhc3NpZ25tZW50cyBkZWxldGVkLicsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBhbGwgb3duZXJzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gZGVsZXRlIGFsbCBvd25lcnMuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlT3duZXJzKCkge1xuICAgIGNvbnN0IGZpcnN0TmFtZXMgPSBbJ0pvaG4nLCAnSmFuZScsICdQZXRlcicsICdNYXJ5JywgJ0RhdmlkJywgJ1N1c2FuJywgJ01pY2hhZWwnLCAnTGluZGEnLCAnSmFtZXMnLCAnUGF0cmljaWEnLCAnUm9iZXJ0JywgJ0plbm5pZmVyJywgJ1dpbGxpYW0nLCAnRWxpemFiZXRoJywgJ1JpY2hhcmQnLCAnSmVzc2ljYScsICdKb3NlcGgnLCAnU2FyYWgnLCAnQ2hhcmxlcycsICdLYXJlbiddO1xuICAgIGNvbnN0IGxhc3ROYW1lcyA9IFsnU21pdGgnLCAnSm9obnNvbicsICdXaWxsaWFtcycsICdCcm93bicsICdKb25lcycsICdHYXJjaWEnLCAnTWlsbGVyJywgJ0RhdmlzJywgJ1JvZHJpZ3VleicsICdNYXJ0aW5leicsICdIZXJuYW5kZXonLCAnTG9wZXonLCAnR29uemFsZXonLCAnV2lsc29uJywgJ0FuZGVyc29uJywgJ1Rob21hcycsICdUYXlsb3InLCAnTW9vcmUnLCAnSmFja3NvbicsICdNYXJ0aW4nXTtcbiAgICBjb25zdCBnZW5lcmF0ZWROYW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gU3RlcCAxOiBDcmVhdGUgNTAgbmV3IG93bmVyc1xuICAgICAgICBjb25zdCBvd25lckJhdGNoID0gd3JpdGVCYXRjaChkYik7XG4gICAgICAgIGNvbnN0IG93bmVyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2Utb3duZXJzJyk7XG4gICAgICAgIGNvbnN0IG5ld093bmVySWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld093bmVyUmVmID0gZG9jKG93bmVyc1JlZik7XG4gICAgICAgICAgICBuZXdPd25lcklkcy5wdXNoKG5ld093bmVyUmVmLmlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgb3duZXJCYXRjaC5zZXQobmV3T3duZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGAke2kgKyAxfSBTYW1wbGUgU3RyZWV0LCBDaXR5LCBDb3VudHJ5YCxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgc29jaWFsTWVkaWFVcmw6IGBodHRwczovL2V4YW1wbGUuY29tLyR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9JHtsYXN0TmFtZS50b0xvd2VyQ2FzZSgpfWAsXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGArNjM5MTckeyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAwMDAwKSArIDEwMDAwMDApLnRvU3RyaW5nKCl9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG93bmVyQmF0Y2guY29tbWl0KCk7XG5cbiAgICAgICAgLy8gU3RlcCAyOiBGZXRjaCBhdmFpbGFibGUgZGV2aWNlc1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzUXVlcnkgPSBmaXJlc3RvcmVRdWVyeShjb2xsZWN0aW9uKGRiLCAnZGV2aWNlcycpLCB3aGVyZSgnc3RhdHVzJywgJ2luJywgWydhdmFpbGFibGUnLCAnbWFudWZhY3R1cmVkJywgJ3VuYXNzaWduZWQnXSksIGxpbWl0KDEwMCkpO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGF2YWlsYWJsZURldmljZXNRdWVyeSk7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZURldmljZXMgPSBhdmFpbGFibGVEZXZpY2VzU25hcHNob3QuZG9jcy5tYXAoZCA9PiAoeyBpZDogZC5pZCwgLi4uZC5kYXRhKCkgfSBhcyBEZXZpY2UpKTtcblxuICAgICAgICAvLyBTdGVwIDM6IEFzc2lnbiBhdmFpbGFibGUgZGV2aWNlcyB0byB0aGUgbmV3bHkgY3JlYXRlZCBvd25lcnNcbiAgICAgICAgaWYgKGF2YWlsYWJsZURldmljZXMubGVuZ3RoID4gMCAmJiBuZXdPd25lcklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50QmF0Y2ggPSB3cml0ZUJhdGNoKGRiKTtcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzUmVmID0gY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzVG9DcmVhdGUgPSBNYXRoLm1pbihhdmFpbGFibGVEZXZpY2VzLmxlbmd0aCwgbmV3T3duZXJJZHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NpZ25tZW50c1RvQ3JlYXRlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2UgPSBhdmFpbGFibGVEZXZpY2VzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG93bmVySWQgPSBuZXdPd25lcklkc1tpXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkZXZpY2VSZWYgPSBkb2MoZGIsICdkZXZpY2VzJywgZGV2aWNlLmlkKTtcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50QmF0Y2gudXBkYXRlKGRldmljZVJlZiwgeyBvd25lcklkOiBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBc3NpZ25tZW50UmVmID0gZG9jKGFzc2lnbm1lbnRzUmVmKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWdubWVudFR5cGU6ICdrd2gtbWV0ZXInIHwgJ3RpbWVyJyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoZGV2aWNlLmRldmljZVR5cGUgPT09ICdrd2gtbWV0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlID0gJ2t3aC1tZXRlcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ3RpbWVyJykge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50VHlwZSA9ICd0aW1lcic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZGV2aWNlVHlwZSA9PT0gJ2t3aC1tZXRlci10aW1lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFR5cGUgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2t3aC1tZXRlcicgOiAndGltZXInO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRCYXRjaC5zZXQobmV3QXNzaWdubWVudFJlZiwge1xuICAgICAgICAgICAgICAgICAgICBvd25lcklkLFxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZWREYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgY2hhcmdlUGVyS3doOiAoYXNzaWdubWVudFR5cGUgPT09ICdrd2gtbWV0ZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiA1KS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYXJnZVBlck1pbnV0ZTogKGFzc2lnbm1lbnRUeXBlID09PSAndGltZXInKSA/IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAyKS50b0ZpeGVkKDIpKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRUeXBlOiBhc3NpZ25tZW50VHlwZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGFzc2lnbm1lbnRCYXRjaC5jb21taXQoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBEYXRhLlwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2Utb3duZXJzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc2lnbkRldmljZVRvT3duZXIob3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gT3duZXJEZXZpY2VTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlSWQ6IGZvcm1EYXRhLmdldCgnZGV2aWNlSWQnKSxcbiAgICAgICAgb3duZXJJZDogb3duZXJJZCxcbiAgICAgICAgYWN0aXZhdGVkRGF0ZTogZm9ybURhdGEuZ2V0KCdhY3RpdmF0ZWREYXRlJyksXG4gICAgICAgIGNoYXJnZVBlckt3aDogZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJLd2gnKSxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlOiBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlck1pbnV0ZScpLFxuICAgICAgICBhc3NpZ25tZW50VHlwZTogZm9ybURhdGEuZ2V0KCdhc3NpZ25tZW50VHlwZScpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGFzc2lnbiBkZXZpY2UuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHsgZGV2aWNlSWQsIGFjdGl2YXRlZERhdGUsIGNoYXJnZVBlckt3aCwgY2hhcmdlUGVyTWludXRlLCBhc3NpZ25tZW50VHlwZSB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG4gICAgXG4gICAgY29uc3QgbmV3QXNzaWdubWVudERhdGE6IGFueSA9IHtcbiAgICAgICAgb3duZXJJZCxcbiAgICAgICAgZGV2aWNlSWQsXG4gICAgICAgIGFjdGl2YXRlZERhdGUsXG4gICAgICAgIGNoYXJnZVBlckt3aCxcbiAgICAgICAgY2hhcmdlUGVyTWludXRlLFxuICAgIH07XG5cbiAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgbmV3QXNzaWdubWVudERhdGEuYXNzaWdubWVudFR5cGUgPSBhc3NpZ25tZW50VHlwZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgJ293bmVycy1kZXZpY2VzJyksIG5ld0Fzc2lnbm1lbnREYXRhKTtcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkLCBzdGF0dXM6ICdhc3NpZ25lZCcgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEFzc2lnbiBEZXZpY2UuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2VzJyk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnRGV2aWNlIGFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmNvbnN0IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hID0gT3duZXJEZXZpY2VTY2hlbWEub21pdCh7IG93bmVySWQ6IHRydWUsIGRldmljZUlkOiB0cnVlLCBhY3RpdmF0ZWREYXRlOiB0cnVlIH0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGV2aWNlQXNzaWdubWVudChhc3NpZ25tZW50SWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nLCBfcHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgXG4gICAgY29uc3QgY2hhcmdlUGVyS3doVmFsdWUgPSBmb3JtRGF0YS5nZXQoJ2NoYXJnZVBlckt3aCcpO1xuICAgIGNvbnN0IGNoYXJnZVBlck1pbnV0ZVZhbHVlID0gZm9ybURhdGEuZ2V0KCdjaGFyZ2VQZXJNaW51dGUnKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFVwZGF0ZU93bmVyRGV2aWNlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgICAgIGNoYXJnZVBlckt3aDogY2hhcmdlUGVyS3doVmFsdWUsXG4gICAgICAgIGNoYXJnZVBlck1pbnV0ZTogY2hhcmdlUGVyTWludXRlVmFsdWUsXG4gICAgICAgIGFzc2lnbm1lbnRUeXBlOiBmb3JtRGF0YS5nZXQoJ2Fzc2lnbm1lbnRUeXBlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGFzc2lnbm1lbnQuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YVRvVXBkYXRlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gICAgICAgIGNvbnN0IHsgY2hhcmdlUGVyS3doLCBjaGFyZ2VQZXJNaW51dGUsIGFzc2lnbm1lbnRUeXBlIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyS3doID0gY2hhcmdlUGVyS3doO1xuICAgICAgICBkYXRhVG9VcGRhdGUuY2hhcmdlUGVyTWludXRlID0gY2hhcmdlUGVyTWludXRlO1xuICAgICAgICBpZiAoYXNzaWdubWVudFR5cGUpIHtcbiAgICAgICAgICAgIGRhdGFUb1VwZGF0ZS5hc3NpZ25tZW50VHlwZSA9IGFzc2lnbm1lbnRUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGFzc2lnbm1lbnRSZWYsIGRhdGFUb1VwZGF0ZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIHVwZGF0ZSBhc3NpZ25tZW50LmAgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS1vd25lcnMvJHtvd25lcklkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdEZXZpY2UgYXNzaWdubWVudCB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLCBlcnJvcnM6IHt9IH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmFzc2lnbkRldmljZUZyb21Pd25lcihhc3NpZ25tZW50SWQ6IHN0cmluZywgZGV2aWNlSWQ6IHN0cmluZywgb3duZXJJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudFJlZiA9IGRvYyhkYiwgJ293bmVycy1kZXZpY2VzJywgYXNzaWdubWVudElkKTtcbiAgICAgICAgYXdhaXQgZGVsZXRlRG9jKGFzc2lnbm1lbnRSZWYpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlUmVmID0gZG9jKGRiLCAnZGV2aWNlcycsIGRldmljZUlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKGRldmljZVJlZiwgeyBvd25lcklkOiBudWxsLCBzdGF0dXM6ICdhdmFpbGFibGUnIH0pO1xuXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvZGV2aWNlLW93bmVycy8ke293bmVySWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLW93bmVycycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZXMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSB1bmFzc2lnbmVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVuLWFzc2lnbmluZyB0aGUgZGV2aWNlLicsIHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxufVxuXG4vLyBEZXZpY2UgVXNlciBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlVXNlcihwcmV2U3RhdGU6IEZvcm1TdGF0ZSwgZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxGb3JtU3RhdGU+IHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgcGhvdG9Vcmw6IGZvcm1EYXRhLmdldCgncGhvdG9VcmwnKSxcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICAgIHBob25lTnVtYmVyOiBmb3JtRGF0YS5nZXQoJ3Bob25lTnVtYmVyJyksXG4gICAgICAgIHNvY2lhbE1lZGlhVXJsOiBmb3JtRGF0YS5nZXQoJ3NvY2lhbE1lZGlhVXJsJyksXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBjcmVhdGUgZGV2aWNlIHVzZXIuIFBsZWFzZSBjaGVjayB0aGUgZXJyb3JzIGJlbG93LicsXG4gICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgIGZpZWxkczogcmF3Rm9ybURhdGEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGhvbmVOdW1iZXIsIHNvY2lhbE1lZGlhVXJsIH0gPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgY29uc3QgcU5hbWUgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ25hbWUnLCAnPT0nLCBuYW1lKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocU5hbWUpKS5lbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UuJywgZXJyb3JzOiB7IG5hbWU6IFsnTmFtZSBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocUVtYWlsKSkuZW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgZW1haWw6IFsnRW1haWwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaG9uZU51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgcVBob25lID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdwaG9uZU51bWJlcicsICc9PScsIHBob25lTnVtYmVyKSk7XG4gICAgICAgICAgICBpZiAoIShhd2FpdCBnZXREb2NzKHFQaG9uZSkpLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgcGhvbmVOdW1iZXI6IFsnUGhvbmUgbnVtYmVyIG11c3QgYmUgdW5pcXVlLiddIH0sIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxU29jaWFsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdzb2NpYWxNZWRpYVVybCcsICc9PScsIHNvY2lhbE1lZGlhVXJsKSk7XG4gICAgICAgIGlmICghKGF3YWl0IGdldERvY3MocVNvY2lhbCkpLmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZS4nLCBlcnJvcnM6IHsgc29jaWFsTWVkaWFVcmw6IFsnU29jaWFsIG1lZGlhIFVSTCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGF3YWl0IGFkZERvYyh1c2Vyc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gQ3JlYXRlIERldmljZSBVc2VyLicsIGZpZWxkczogcmF3Rm9ybURhdGEgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS11c2VycycpO1xuICAgIHJlZGlyZWN0KCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHJhd0Zvcm1EYXRhID0ge1xuICAgICAgICBwaG90b1VybDogZm9ybURhdGEuZ2V0KCdwaG90b1VybCcpLFxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IGZvcm1EYXRhLmdldCgncGhvbmVOdW1iZXInKSxcbiAgICAgICAgc29jaWFsTWVkaWFVcmw6IGZvcm1EYXRhLmdldCgnc29jaWFsTWVkaWFVcmwnKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZSA9IGZvcm1EYXRhLmdldCgncGFnZScpIGFzIHN0cmluZyB8fCAnMSc7XG5cbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBEZXZpY2VVc2VyU2NoZW1hLnNhZmVQYXJzZShyYXdGb3JtRGF0YSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSB1c2VyLiBQbGVhc2UgY2hlY2sgdGhlIGVycm9ycyBiZWxvdy4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICAgICAgZmllbGRzOiByYXdGb3JtRGF0YVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lTnVtYmVyLCBzb2NpYWxNZWRpYVVybCB9ID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcblxuICAgICAgICBjb25zdCBxTmFtZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgnbmFtZScsICc9PScsIG5hbWUpKTtcbiAgICAgICAgY29uc3QgbmFtZVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxTmFtZSk7XG4gICAgICAgIGlmICghbmFtZVNuYXBzaG90LmVtcHR5ICYmIG5hbWVTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBuYW1lOiBbJ05hbWUgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcUVtYWlsID0gZmlyZXN0b3JlUXVlcnkodXNlcnNSZWYsIHdoZXJlKCdlbWFpbCcsICc9PScsIGVtYWlsKSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFFbWFpbCk7XG4gICAgICAgIGlmICghZW1haWxTbmFwc2hvdC5lbXB0eSAmJiBlbWFpbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciB1c2VyLicsIGVycm9yczogeyBlbWFpbDogWydFbWFpbCBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGhvbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHFQaG9uZSA9IGZpcmVzdG9yZVF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgncGhvbmVOdW1iZXInLCAnPT0nLCBwaG9uZU51bWJlcikpO1xuICAgICAgICAgICAgY29uc3QgcGhvbmVTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocVBob25lKTtcbiAgICAgICAgICAgIGlmICghcGhvbmVTbmFwc2hvdC5lbXB0eSAmJiBwaG9uZVNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdUaGlzIHBob25lIG51bWJlciBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHBob25lTnVtYmVyOiBbJ1Bob25lIG51bWJlciBtdXN0IGJlIHVuaXF1ZS4nXSB9LCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHFTb2NpYWwgPSBmaXJlc3RvcmVRdWVyeSh1c2Vyc1JlZiwgd2hlcmUoJ3NvY2lhbE1lZGlhVXJsJywgJz09Jywgc29jaWFsTWVkaWFVcmwpKTtcbiAgICAgICAgY29uc3Qgc29jaWFsU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHFTb2NpYWwpO1xuICAgICAgICBpZiAoIXNvY2lhbFNuYXBzaG90LmVtcHR5ICYmIHNvY2lhbFNuYXBzaG90LmRvY3NbMF0uaWQgIT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgc29jaWFsIG1lZGlhIFVSTCBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIHVzZXIuJywgZXJyb3JzOiB7IHNvY2lhbE1lZGlhVXJsOiBbJ1NvY2lhbCBtZWRpYSBVUkwgbXVzdCBiZSB1bmlxdWUuJ10gfSwgZmllbGRzOiByYXdGb3JtRGF0YSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgJ2RldmljZS11c2VycycsIGlkKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIFVwZGF0ZSBEZXZpY2UgVXNlci4nLCBmaWVsZHM6IHJhd0Zvcm1EYXRhIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtdXNlcnMnKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2RldmljZS11c2Vycy8ke2lkfWApO1xuICAgIHJlZGlyZWN0KGAvZGV2aWNlLXVzZXJzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZXZpY2VVc2VyKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCAnZGV2aWNlLXVzZXJzJywgaWQpO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2ModXNlclJlZik7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdEZXZpY2UgdXNlciBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgdXNlci4nLCBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlRGV2aWNlVXNlcnMoKSB7XG4gICAgY29uc3QgZmlyc3ROYW1lcyA9IFsnSm9obicsICdKYW5lJywgJ1BldGVyJywgJ01hcnknLCAnRGF2aWQnLCAnU3VzYW4nLCAnTWljaGFlbCcsICdMaW5kYScsICdKYW1lcycsICdQYXRyaWNpYScsICdSb2JlcnQnLCAnSmVubmlmZXInLCAnV2lsbGlhbScsICdFbGl6YWJldGgnLCAnUmljaGFyZCcsICdKZXNzaWNhJywgJ0pvc2VwaCcsICdTYXJhaCcsICdDaGFybGVzJywgJ0thcmVuJ107XG4gICAgY29uc3QgbGFzdE5hbWVzID0gWydTbWl0aCcsICdKb2huc29uJywgJ1dpbGxpYW1zJywgJ0Jyb3duJywgJ0pvbmVzJywgJ0dhcmNpYScsICdNaWxsZXInLCAnRGF2aXMnLCAnUm9kcmlndWV6JywgJ01hcnRpbmV6JywgJ0hlcm5hbmRleicsICdMb3BleicsICdHb256YWxleicsICdXaWxzb24nLCAnQW5kZXJzb24nLCAnVGhvbWFzJywgJ1RheWxvcicsICdNb29yZScsICdKYWNrc29uJywgJ01hcnRpbiddO1xuICAgIGNvbnN0IGdlbmVyYXRlZE5hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZGIpO1xuICAgICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdkZXZpY2UtdXNlcnMnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyUmVmID0gZG9jKHVzZXJzUmVmKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaXJzdE5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgIGxhc3ROYW1lID0gbGFzdE5hbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3ROYW1lcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBuYW1lID0gYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWA7XG4gICAgICAgICAgICB9IHdoaWxlIChnZW5lcmF0ZWROYW1lcy5oYXMobmFtZSkpO1xuXG4gICAgICAgICAgICBnZW5lcmF0ZWROYW1lcy5hZGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gYCR7Zmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LiR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX0ke2l9QGV4YW1wbGUuY29tYDtcblxuICAgICAgICAgICAgYmF0Y2guc2V0KG5ld1VzZXJSZWYsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogYCs2MzkxNyR7KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMDApICsgMTAwMDAwMCkudG9TdHJpbmcoKX1gLFxuICAgICAgICAgICAgICAgIHNvY2lhbE1lZGlhVXJsOiBgaHR0cHM6Ly9leGFtcGxlLmNvbS8ke2ZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpfSR7bGFzdE5hbWUudG9Mb3dlckNhc2UoKX1gLFxuICAgICAgICAgICAgICAgIHBob3RvVXJsOiBgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvJHtuZXdVc2VyUmVmLmlkfS8yMDAvMjAwYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXRhYmFzZSBFcnJvcjogRmFpbGVkIHRvIEdlbmVyYXRlIFNhbXBsZSBVc2Vycy5cIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBHZW5lcmF0ZSBTYW1wbGUgVXNlcnMuJyB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGV2aWNlLXVzZXJzJyk7XG59XG5cbi8vIERldmljZSBNb2RlbCBBY3Rpb25zXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGV2aWNlTW9kZWwocHJldlN0YXRlOiBGb3JtU3RhdGUsIGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8Rm9ybVN0YXRlPiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG5cbiAgICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBIGRldmljZSBtb2RlbCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nLFxuICAgICAgICAgICAgICAgIGVycm9yczogeyBkZXZpY2VNb2RlbDogWydUaGlzIGRldmljZSBtb2RlbCBuYW1lIGlzIGFscmVhZHkgaW4gdXNlLiddIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgYWRkRG9jKGRldmljZU1vZGVsc1JlZiwgdmFsaWRhdGVkRmllbGRzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRGF0YWJhc2UgRXJyb3I6IEZhaWxlZCB0byBDcmVhdGUgRGV2aWNlIE1vZGVsLicgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICByZWRpcmVjdCgnL2RldmljZS1tb2RlbHMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURldmljZU1vZGVsKGlkOiBzdHJpbmcsIHByZXZTdGF0ZTogRm9ybVN0YXRlLCBmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPEZvcm1TdGF0ZT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBmb3JtRGF0YS5nZXQoJ3BhZ2UnKSBhcyBzdHJpbmcgfHwgJzEnO1xuXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gRGV2aWNlTW9kZWxTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICAgICAgZGV2aWNlTW9kZWw6IGZvcm1EYXRhLmdldCgnZGV2aWNlTW9kZWwnKSxcbiAgICAgICAgZmVhdHVyZTogZm9ybURhdGEuZ2V0KCdmZWF0dXJlJyksXG4gICAgfSk7XG5cbiAgICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIGRldmljZSBtb2RlbC4nLFxuICAgICAgICAgICAgZXJyb3JzOiB2YWxpZGF0ZWRGaWVsZHMuZXJyb3IuZmxhdHRlbigpLmZpZWxkRXJyb3JzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGV2aWNlTW9kZWwgfSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxzUmVmID0gY29sbGVjdGlvbihkYiwgJ2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgY29uc3QgcSA9IGZpcmVzdG9yZVF1ZXJ5KGRldmljZU1vZGVsc1JlZiwgd2hlcmUoJ2RldmljZU1vZGVsJywgJz09JywgZGV2aWNlTW9kZWwpKTtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkgJiYgcXVlcnlTbmFwc2hvdC5kb2NzWzBdLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQSBkZXZpY2UgbW9kZWwgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHsgZGV2aWNlTW9kZWw6IFsnVGhpcyBkZXZpY2UgbW9kZWwgbmFtZSBpcyBhbHJlYWR5IGluIHVzZS4nXSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGV2aWNlTW9kZWxSZWYgPSBkb2MoZGIsICdkZXZpY2UtbW9kZWxzJywgaWQpO1xuICAgICAgICBhd2FpdCB1cGRhdGVEb2MoZGV2aWNlTW9kZWxSZWYsIHZhbGlkYXRlZEZpZWxkcy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0RhdGFiYXNlIEVycm9yOiBGYWlsZWQgdG8gVXBkYXRlIERldmljZSBNb2RlbC4nIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kZXZpY2UtbW9kZWxzJyk7XG4gICAgcmVkaXJlY3QoYC9kZXZpY2UtbW9kZWxzP3BhZ2U9JHtwYWdlfWApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGV2aWNlTW9kZWwoaWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldmljZU1vZGVsUmVmID0gZG9jKGRiLCBgZGV2aWNlLW1vZGVscy8ke2lkfWApO1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZGV2aWNlTW9kZWxSZWYpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2RldmljZS1tb2RlbHMnKTtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0RldmljZSBtb2RlbCBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nLCBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBkZXZpY2UgbW9kZWwuJywgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG59XG4gICAgXG5cbiAgICAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQTA0QnNCIn0=
}}),
"[project]/src/components/delete-device-model-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeleteDeviceModelDialog": (()=>DeleteDeviceModelDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$adc2c6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:adc2c6 [app-ssr] (ecmascript) <text/javascript>");
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
                    fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                    lineNumber: 28,
                    columnNumber: 21
                }, this),
                "Deleting..."
            ]
        }, void 0, true) : 'Continue'
    }, void 0, false, {
        fileName: "[project]/src/components/delete-device-model-dialog.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
function DeleteDeviceModelDialog({ modelId }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [state, formAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$adc2c6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteDeviceModel"].bind(null, modelId), {
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
                            fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        " Delete"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/delete-device-model-dialog.tsx",
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
                                fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                children: "This action cannot be undone. This will permanently delete the device model record from our servers."
                            }, void 0, false, {
                                fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/delete-device-model-dialog.tsx",
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
                                    fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContinueButton, {}, void 0, false, {
                                    fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/delete-device-model-dialog.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/delete-device-model-dialog.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
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
"[project]/src/components/search.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Search": (()=>Search)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-debounce/dist/index.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Search({ placeholder }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { replace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebouncedCallback"])((term)=>{
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/src/components/search.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                type: "search",
                placeholder: placeholder,
                onChange: (e)=>handleSearch(e.target.value),
                defaultValue: searchParams.get('query')?.toString(),
                className: "pl-9"
            }, void 0, false, {
                fileName: "[project]/src/components/search.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/search.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": (()=>DropdownMenu),
    "DropdownMenuCheckboxItem": (()=>DropdownMenuCheckboxItem),
    "DropdownMenuContent": (()=>DropdownMenuContent),
    "DropdownMenuGroup": (()=>DropdownMenuGroup),
    "DropdownMenuItem": (()=>DropdownMenuItem),
    "DropdownMenuLabel": (()=>DropdownMenuLabel),
    "DropdownMenuPortal": (()=>DropdownMenuPortal),
    "DropdownMenuRadioGroup": (()=>DropdownMenuRadioGroup),
    "DropdownMenuRadioItem": (()=>DropdownMenuRadioItem),
    "DropdownMenuSeparator": (()=>DropdownMenuSeparator),
    "DropdownMenuShortcut": (()=>DropdownMenuShortcut),
    "DropdownMenuSub": (()=>DropdownMenuSub),
    "DropdownMenuSubContent": (()=>DropdownMenuSubContent),
    "DropdownMenuSubTrigger": (()=>DropdownMenuSubTrigger),
    "DropdownMenuTrigger": (()=>DropdownMenuTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, this));
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 109,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this));
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 123,
        columnNumber: 3
    }, this));
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, this));
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 163,
        columnNumber: 3
    }, this));
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
}}),
"[project]/src/components/nav-menu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NavMenu": (()=>NavMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
'use client';
;
;
;
;
;
function NavMenu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav-menu.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Open menu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav-menu.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/nav-menu.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/nav-menu.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav-menu.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav-menu.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/devices",
                            children: "Devices"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav-menu.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav-menu.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/device-models",
                            children: "Device Models"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav-menu.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav-menu.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/device-owners",
                            children: "Device Owners"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav-menu.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav-menu.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/device-users",
                            children: "Device Users"
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav-menu.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav-menu.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav-menu.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/nav-menu.tsx",
        lineNumber: 16,
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
"[project]/src/components/device-model-client-page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeviceModelClientPage": (()=>DeviceModelClientPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$delete$2d$device$2d$model$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/delete-device-model-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/search.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/nav-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
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
;
;
const featureLabels = {
    'kwh-meter': 'KWH Meter',
    'timer': 'Timer',
    'kwh-meter-timer': 'KWH Meter/Timer'
};
function DeviceModelClientPage({ initialDeviceModels, totalDeviceModels, searchParams }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const currentSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [deviceModels, setDeviceModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialDeviceModels);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(totalDeviceModels);
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = Math.ceil(total / 5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setDeviceModels(initialDeviceModels);
        setTotal(totalDeviceModels);
    }, [
        initialDeviceModels,
        totalDeviceModels
    ]);
    const createPageURL = (pageNumber)=>{
        const params = new URLSearchParams(currentSearchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-primary font-headline",
                                children: "Device Models"
                            }, void 0, false, {
                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/device-models/new",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this),
                                                " Add Model"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavMenu"], {}, void 0, false, {
                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/device-model-client-page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/device-model-client-page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/device-model-client-page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 container mx-auto p-4 sm:p-6 lg:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Models"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: "Loading search..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 45
                                            }, void 0),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search"], {
                                                placeholder: "Search by model..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/device-model-client-page.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Device Model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            children: "Feature"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: "text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                children: deviceModels.length > 0 ? deviceModels.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "font-medium",
                                                                children: model.deviceModel
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                children: featureLabels[model.feature]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                className: "text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-end items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: `/device-models/${model.id}/edit?page=${currentPage}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                                        className: "mr-2 h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                                        lineNumber: 114,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    " Edit"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$delete$2d$device$2d$model$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteDeviceModelDialog"], {
                                                                            modelId: model.id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                            lineNumber: 117,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, model.id, true, {
                                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 29
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        colSpan: 3,
                                                        className: "h-24 text-center",
                                                        children: "No results found."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center gap-4 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            disabled: currentPage <= 1,
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: createPageURL(currentPage - 1),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(currentPage <= 1 && "pointer-events-none"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 33
                                                    }, this),
                                                    "Previous"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "Page ",
                                                currentPage,
                                                " of ",
                                                totalPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            disabled: currentPage >= totalPages,
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: createPageURL(currentPage + 1),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(currentPage >= totalPages && "pointer-events-none"),
                                                children: [
                                                    "Next",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ml-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/device-model-client-page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/device-model-client-page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            action: (formData)=>{
                                                const page = formData.get('page');
                                                router.push(createPageURL(page));
                                            },
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "number",
                                                    name: "page",
                                                    defaultValue: currentPage,
                                                    className: "h-9 w-16",
                                                    min: "1",
                                                    max: totalPages
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    size: "sm",
                                                    variant: "outline",
                                                    children: "Go"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/device-model-client-page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/device-model-client-page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/device-model-client-page.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/device-model-client-page.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/device-model-client-page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-6 text-center text-muted-foreground text-sm",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Dormamu. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/device-model-client-page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/device-model-client-page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a7cbdba3._.js.map