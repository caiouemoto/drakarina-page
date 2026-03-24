(function () {
    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function initTilt3D() {
        if (prefersReducedMotion()) {
            return;
        }
        var cards = Array.from(document.querySelectorAll('.tilt-3d'));
        cards.forEach(function (card) {
            if (card.dataset.tiltReady === '1') {
                return;
            }
            card.dataset.tiltReady = '1';
            card.addEventListener('mousemove', function (event) {
                var rect = card.getBoundingClientRect();
                var x = (event.clientX - rect.left) / rect.width - 0.5;
                var y = (event.clientY - rect.top) / rect.height - 0.5;
                var rotateY = x * 14;
                var rotateX = -y * 14;
                card.style.transform = 'perspective(1100px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        });
    }

    function runRevealAnimation() {
        if (prefersReducedMotion()) {
            return;
        }
        var elements = Array.from(document.querySelectorAll('body *')).filter(function (el) {
            var tag = el.tagName;
            if (!tag || ['SCRIPT', 'STYLE', 'LINK', 'META', 'NOSCRIPT', 'HEAD', 'TITLE', 'HTML', 'BODY'].includes(tag)) {
                return false;
            }
            return el.getClientRects().length > 0;
        });

        elements.forEach(function (el, index) {
            var delay = Math.min(index * 18, 1500);
            var keepTransform = el.classList.contains('tilt-3d') || el.classList.contains('image-3d-effect') || el.classList.contains('image-3d-frame') || el.classList.contains('image-3d');
            var frames = keepTransform
                ? [
                    { opacity: 0, filter: 'blur(6px)' },
                    { opacity: 1, filter: 'blur(0)' }
                ]
                : [
                    { opacity: 0, transform: 'translateY(42px) scale(0.985)', filter: 'blur(6px)' },
                    { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' }
                ];

            el.animate(frames, {
                duration: 950,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                delay: delay,
                fill: 'both'
            });
        });
    }

    function startEffects() {
        runRevealAnimation();
        initTilt3D();
    }

    if (document.readyState === 'complete') {
        startEffects();
    } else {
        window.addEventListener('load', startEffects, { once: true });
    }

    window.addEventListener('pageshow', startEffects);
})();