(()=>{"use strict";module.exports = [
"[project]/aniamtion/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aniamtion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/aniamtion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/* ===========================================================================
 * EXERCICE : Animations JS avec React
 * ======================================================================== */ // ---------------------------------------------------------------------------
// méthode utilitaire vue dans le cours
// ---------------------------------------------------------------------------
var animating = false;
var animatingInfinite = false;
const animer = async (elementId, keyframes, durationMS, garderLesValeursFinales = false, boucler = false)=>{
    const element = document.getElementById(elementId);
    const animation = element?.animate(keyframes, {
        duration: durationMS,
        fill: garderLesValeursFinales ? "forwards" : "none",
        iterations: boucler ? Infinity : 1
    });
    await animation?.finished;
};
// ---------------------------------------------------------------------------
// durées des animations (en millisecondes)
// ---------------------------------------------------------------------------
const SPAWN_DURATION_MS = 500;
const DEATH_DURATION_MS = 500;
const PREATTACK_DURATION_MS = 500;
const ATTACK_DURATION_MS = 300;
const BOUNCE_DURATION_MS = 1000;
const SHAKE_DURATION_MS = 750;
const FLIP_DURATION_MS = 750;
const ROTATE_DURATION_MS = 800;
// ---------------------------------------------------------------------------
// keyframes complexes, pas besoin de les modifier!
// ---------------------------------------------------------------------------
const SHAKE_X = [
    {
        transform: "translateX(0)"
    },
    {
        transform: "translateX(-10px)",
        offset: 0.1
    },
    {
        transform: "translateX(10px)",
        offset: 0.2
    },
    {
        transform: "translateX(-10px)",
        offset: 0.3
    },
    {
        transform: "translateX(10px)",
        offset: 0.4
    },
    {
        transform: "translateX(-10px)",
        offset: 0.5
    },
    {
        transform: "translateX(10px)",
        offset: 0.6
    },
    {
        transform: "translateX(-10px)",
        offset: 0.7
    },
    {
        transform: "translateX(10px)",
        offset: 0.8
    },
    {
        transform: "translateX(-10px)",
        offset: 0.9
    },
    {
        transform: "translateX(0)"
    }
];
const JELLO = [
    {
        transform: "none"
    },
    {
        transform: "none",
        offset: 0.111
    },
    {
        transform: "skew(-12.5deg, -12.5deg)",
        offset: 0.222
    },
    {
        transform: "skew(6.25deg, 6.25deg)",
        offset: 0.333
    },
    {
        transform: "skew(-3.125deg, -3.125deg)",
        offset: 0.444
    },
    {
        transform: "skew(1.5625deg, 1.5625deg)",
        offset: 0.555
    },
    {
        transform: "skew(-0.78125deg, -0.78125deg)",
        offset: 0.666
    },
    {
        transform: "skew(0.390625deg, 0.390625deg)",
        offset: 0.777
    },
    {
        transform: "skew(-0.1953125deg, -0.1953125deg)",
        offset: 0.888
    },
    {
        transform: "none"
    }
];
const BOUNCE = [
    {
        transform: "translateY(0)"
    },
    {
        transform: "translateY(0)",
        offset: 0.2
    },
    {
        transform: "translateY(-30px)",
        offset: 0.4
    },
    {
        transform: "translateY(0)",
        offset: 0.5
    },
    {
        transform: "translateY(-15px)",
        offset: 0.6
    },
    {
        transform: "translateY(0)",
        offset: 0.8
    },
    {
        transform: "translateY(0)"
    }
];
const FLIP = [
    {
        transform: "rotateY(-360deg)"
    },
    {
        transform: "translateZ(150px) rotateY(-190deg)",
        offset: 0.4
    },
    {
        transform: "translateZ(150px) rotateY(-170deg)",
        offset: 0.5
    },
    {
        transform: "scale(0.95) rotateY(0deg)",
        offset: 0.8
    },
    {
        transform: "scale(1) rotateY(0deg)"
    }
];
// ---------------------------------------------------------------------------
// keyframes simples à écrire
// ---------------------------------------------------------------------------
// TODO: Écrire les keyframes comme demandé dans l'énoncé
// TODO: FADE_IN : de transparent à visible
const FADE_IN = [
    {
        opacity: 1
    }
];
// TODO: FADE_OUT : devient transparent
const FADE_OUT = [
    {
        opacity: 0
    }
];
// TODO: PULSE : le slime grossit puis revient à sa taille normale (3 valeurs)
const PULSE = [
    {
        transform: "scale(1)"
    },
    {
        transform: "scale(2)"
    },
    {
        transform: "scale(1)"
    }
];
// TODO: ROTATE_CENTER : une rotation complète autour du centre
const ROTATE_CENTER = [
    {
        transform: "rotate(0deg)"
    },
    {
        transform: "rotate(360deg)"
    }
];
// TODO: ROTATE_HOR : une rotation complète sur l'axe horizontal
const ROTATE_HOR = [
    {
        transform: "rotateX(0deg)"
    },
    {
        transform: "rotateX(360deg)"
    }
];
const ROTATE_INFINI = [
    {
        transform: "rotate(0deg)"
    },
    {
        transform: "rotate(360deg)"
    },
    {
        transform: "rotate(720deg)"
    },
    {
        transform: "rotateX(720deg)"
    },
    {
        transform: "rotateX(1080deg)"
    }
];
function Home() {
    // détermine quels boutons sont affichés
    const [slimeIsPresent, setSlimeIsPresent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const spawn = ()=>{
        setSlimeIsPresent(true);
        // TODO: spawn
        // On garde les valeurs finales (opacity: 1), sinon Slimey redevient invisible
        animer("slimeyId", FADE_IN, SPAWN_DURATION_MS, true);
    };
    const death = ()=>{
        setSlimeIsPresent(false);
        // TODO: death
        // Les deux animations jouent en même temps (pas de await entre les deux)
        animer("slimeyId", FADE_OUT, DEATH_DURATION_MS, true);
    };
    const attack = async ()=>{
        // TODO: attack
        // await : on attend la fin de l'élan avant de jouer l'attaque
        if (animating) return;
        animating = true;
        await animer("slimeyId", PULSE, ATTACK_DURATION_MS);
        animating = false;
    };
    const bounceShakeFlip = async ()=>{
        // TODO: bounceShakeFlip
        await animer("slimeyId", BOUNCE, BOUNCE_DURATION_MS);
        await animer("slimeyId", SHAKE_X, SHAKE_DURATION_MS);
        await animer("slimeyId", FLIP, FLIP_DURATION_MS);
    };
    const infiniteTripleSpin = async ()=>{
        animatingInfinite = animatingInfinite ? false : true;
        // TODO: infiniteTripleSpin
        while(animatingInfinite){
            await animer("slimeyId", ROTATE_CENTER, ROTATE_DURATION_MS);
            await animer("slimeyId", ROTATE_CENTER, ROTATE_DURATION_MS);
            await animer("slimeyId", ROTATE_HOR, ROTATE_DURATION_MS);
        }
    // Boucle infinie : 2 rotations au centre, puis 1 rotation horizontale
    // On n'utilisera pas l'option de boucler l'animation, car on veut 2 rotations au centre puis 1 rotation horizontale, et non pas 3 rotations au centre
    // TODO: Optionnel: Un petit défi, vous pourriez faire une seule animation qui combine les 3 rotations et utilisé l'option de boucle
    };
    const infiniteTripleSpinBonus = async ()=>{
        animer("slimeyId", ROTATE_INFINI, 10000, true, true);
    // TODO: infiniteTripleSpinBonus
    // TODO: Optionnel: Un petit défi, vous pourriez faire une seule animation qui combine les 3 rotations et utilisé l'option de boucle
    };
    // -------------------------------------------------------------------------
    // Affichage, Il n'y a rien à modifier dans le reste du fichier!
    // -------------------------------------------------------------------------
    const buttonStyle = {
        margin: "0 8px 8px 0",
        padding: "8px 16px",
        borderRadius: 4,
        border: "none",
        background: "#ff4081",
        color: "white",
        cursor: "pointer",
        fontWeight: 500
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        width: 800,
                        style: {
                            position: "relative",
                            display: "block"
                        },
                        src: "/background.png",
                        alt: "Fond"
                    }, void 0, false, {
                        fileName: "[project]/aniamtion/app/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "fit-content",
                            position: "absolute",
                            top: 250,
                            left: 300
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            id: "slimeyId",
                            width: 200,
                            src: "/slimeyWithBorder.png",
                            alt: "Slimey",
                            style: {
                                opacity: 0,
                                display: "block"
                            }
                        }, void 0, false, {
                            fileName: "[project]/aniamtion/app/page.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/aniamtion/app/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aniamtion/app/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 20
                },
                children: [
                    !slimeIsPresent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: buttonStyle,
                        onClick: spawn,
                        children: "Spawn"
                    }, void 0, false, {
                        fileName: "[project]/aniamtion/app/page.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    slimeIsPresent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: buttonStyle,
                                onClick: death,
                                children: "Death"
                            }, void 0, false, {
                                fileName: "[project]/aniamtion/app/page.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: buttonStyle,
                                onClick: attack,
                                children: "Attack"
                            }, void 0, false, {
                                fileName: "[project]/aniamtion/app/page.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: buttonStyle,
                                onClick: bounceShakeFlip,
                                children: "Bounce/Shake/Flip"
                            }, void 0, false, {
                                fileName: "[project]/aniamtion/app/page.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: buttonStyle,
                                onClick: infiniteTripleSpin,
                                children: "Infinite Triple Spin"
                            }, void 0, false, {
                                fileName: "[project]/aniamtion/app/page.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$aniamtion$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: buttonStyle,
                                onClick: infiniteTripleSpinBonus,
                                children: "Infinite Triple Spin Bonus"
                            }, void 0, false, {
                                fileName: "[project]/aniamtion/app/page.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/aniamtion/app/page.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/aniamtion/app/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/aniamtion/app/page.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
}),
"[project]/aniamtion/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/aniamtion/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];})()

//# sourceMappingURL=aniamtion_1brgdd7y2n5o6._.js.map