(function () {
    var siteConfig = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    "background": "#F4F3ED",
                    "on-surface": "#2D2D2D",
                    "primary": "#8A9A8B",
                    "secondary": "#5E6B6B",
                    "on-primary": "#ffffff",
                    "surface": "#F4F3ED",
                    "surface-container": "#E5D9C4",
                    "surface-container-lowest": "#ffffff",
                    "outline": "#747872",
                    "tertiary": "#5E6B6B",
                    "sand": "#E5D9C4",
                    "ocean": "#5E6B6B",
                    "sage": "#8A9A8B"
                },
                fontFamily: {
                    "headline": ["Newsreader"],
                    "body": ["Manrope"],
                    "label": ["Manrope"]
                },
                borderRadius: {
                    "DEFAULT": "0.5rem",
                    "lg": "0.75rem",
                    "xl": "1rem",
                    "full": "9999px"
                },
                boxShadow: {
                    "3d-raised": "8px 8px 16px rgba(94, 107, 107, 0.2), -4px -4px 12px rgba(255, 255, 255, 0.8), inset 1px 1px 0px rgba(255, 255, 255, 0.5)",
                    "3d-inset": "inset 4px 4px 8px rgba(94, 107, 107, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.7)"
                }
            }
        }
    };

    window.tailwind = window.tailwind || {};
    window.tailwind.config = siteConfig;

    if (typeof tailwind !== "undefined") {
        tailwind.config = siteConfig;
        if (typeof tailwind.refresh === "function") {
            tailwind.refresh();
        }
    }
})();