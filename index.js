$(document).ready(function () {
    $('#menuContainer').load('menu.html');

    (function () {
        var elements = document.querySelectorAll("code");

        elements.forEach(function (element) {
            var text = element.textContent;

            // #015493 light blue
            let lightBlueArray = ['p', 'table', 'label', 'input', 'div', 'link', 'rel', 'href', 'crossorigin', 'url', 'active',
                'checked', 'visited', 'hover', 'focus', 'disabled', 'enabled', 'empty', 'required', 'valid', 'invalid', 'in-range',
                'target', 'root', 'read-write', 'read-only', 'out-of-range', 'optional', 'lang', 'not', 'only-child', 'first-child', 'last-child',
                'nth-child', 'nth-last-child', 'only-of-type', 'first-of-type', 'last-of-type', 'nth-of-type', 'after', 'before', 'selection',
                'first-line', 'first-letter', 'attr', 'calc', 'cubic-bezier', 'hsl', 'hsla', 'linear-gradient', 'repeating', 'radial-gradient',
                'rgb', 'rgba', 'var', 'element', 'class', 'attribute', 'value', 'id', 'keyframes', 'waveform', 'import', 'ul', 'li', 'img'];
            lightBlueArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), '<span style="color: #015493">$&</span>');
            });

            // #C16D27 orange
            let orangeArray = ['font-family', 'display', 'flex-grow', 'flex-shrink', 'flex-basis', 'flex-flow',
                'align-items', 'align-self', 'align-content', 'justify-content', 'flex-wrap', 'flex-direction',
                'order', 'grid-template-rows', 'grid-template-columns', 'grid-template-areas', 'grid-auto-rows',
                'grid-auto-columns', 'grid-auto-flow', 'grid-column-start', 'grid-column-end', 'grid-column-gap',
                'grid-row-gap', 'grid-row-start', 'grid-row-end', 'grid-row', 'grid-gap', 'grid-column', 'overflow-x',
                'overflow-y', 'overflow', 'margin', 'padding', 'float', 'clear', 'position', 'content', 'perspective', 'origin', 'transform',
                'transition', 'property', 'duration', 'timing-function', 'delay', 'text-align', 'letter-spacing',
                'line-height', 'text', 'indent', 'shadow', 'white-space', 'word-spacing', 'decoration', 'text-justify', 'vertical-align',
                'font-style', 'font-variant', 'font-weight', 'font-size', 'width', 'rule', 'fill', 'columns', 'word-break',
                'animation', 'play-state', 'direction', 'iteration', 'count', 'mode', 'list-style-type', 'list-style-image',
                'list-style', 'box', 'outline-style',
                'outline-color', 'outline-offset', 'outline', 'border', 'height', 'max', 'min', 'z-index', 'opacity',
                'visibility', 'page-break', 'pointer-events', 'cursor', 'counter', 'row-gap', 'column-gap', 'gap', 'background',
                'aspect-ratio'];
            orangeArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), '<span style="color: #C16D27">$&</span>');
            })

            // #FFEE7F tael
            let tealArray = ['none', 'left', 'right', 'both', 'auto', 'static', 'absolute', 'fixed', 'relative',
                'sticky', 'visible', 'hidden', 'stretch', 'repeat', 'round', 'top', 'bottom', 'cover', 'contain', 'center',
                'border-box', 'padding-box', 'content-box', 'scroll', 'local', 'solid', 'double', 'medium', 'thin', 'thick',
                'invert', 'nowrap', 'flex-start', 'flex-end', 'space-between', 'self-start', 'self-end', 'inside', 'lower-alpha',
                'upper-roman', 'square', 'circle',
                'space-around', 'baseline', 'space-evenly', 'row-reverse', 'column-reverse', 'wrap-reverse', 'start', 'end'];
            tealArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), '<span style="color: #109cb2">$&</span>');
            })

            // #648522 light green
            let greenArray = ['console'];
            greenArray.forEach(element => {
                text = text.replace(new RegExp("\\b" + element + "\\b", "gi"), '<span style="color: #648522">$&</span>');
            });
            var regex = /(['])(?:(?=(\\?))\2.)*?\1/g;
            text = text.replace(regex, '<span style="color: #648522">$&</span>');

            element.innerHTML = text;
        });
    })();
})