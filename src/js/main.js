jQuery(function($) {
    var site = function() {
        var init = function() {
            bindEventHandlers();
            card.init();
            win.init();
        }

        var bindEventHandlers = function() {}

        var win = function() {
            var settings = {
                scrollDetectionMode: "requestAnimationFrame",
                mousePosition: {
                    x: 0,
                    y: 0
                },
                _mousePosition: {
                    x: 0,
                    y: 0
                },
                windowBuffer: 80
            }

            var init = function() {
                settings.element = $(window);
                settings.height = settings.element.height();
                settings.width = settings.element.width();
                bindEventHandlers();
                loop();
            }

            var bindEventHandlers = function() {
                $(document).on("mousemove", function(e) {
                    var x = 2 * (-.5 + (e.pageX - settings.windowBuffer / 2) / (settings.width - settings.windowBuffer));
                    x > 1 && (x = 1);
                    -1 > x && (x = -1);

                    var y = 2 * (-.5 + (e.pageY - settings.windowBuffer / 2) / (settings.height - settings.windowBuffer));
                    y > 1 && (y = 1);
                    -1 > y && (y = -1);

                    settings.mousePosition.x = x;
                    settings.mousePosition.y = y;
                });

                $(document).on("mouseleave", function() {
                    settings.mousePosition.x = 0;
                    settings.mousePosition.y = 0;
                });
            }

            var loop = function() {
                if (settings._mousePosition.x != settings.mousePosition.x || settings._mousePosition.y != settings.mousePosition.y) {
                    settings._mousePosition.x = settings.mousePosition.x;
                    settings._mousePosition.y = settings.mousePosition.y;
                    onMousemove();
                }
                requestAnimationFramePolyfill(loop);
            }

            var onMousemove = function() {
                card.rotate(settings.mousePosition.x, settings.mousePosition.y);
            }

            return {
                init: function() {
                    init();
                }
            }
        }();

        var card = function() {
            var settings = {
                maxY: 180,
                selector: {
                    card: "#card",
                    inner: ".card__inner"
                }
            }

            var init = function() {
                settings.element = {
                    inner: $(settings.selector.inner)
                };
                bindEventHandlers();
            }

            var bindEventHandlers = function() {
                $(settings.selector.card).on("click", function() {
                    $(this).toggleClass("flipped");
                });
            }

            var rotate = function(x, y) {
                var degreeY = parseInt(settings.maxY * x * x * x);
                var degreeX = parseInt(20 * y);

                settings.element.inner.css({
                    transform: "rotateY(" + degreeY + "deg) rotateX(" + degreeX + "deg) translate3d(0,0,0)"
                });
            };

            return {
                init: function() {
                    init();
                },
                rotate: function(x, y) {
                    rotate(x, y);
                }
            }
        }();

        return function() {
            var init = function() {
                bindEventHandlers();
            }

            var bindEventHandlers = function() {}

            return {
                init: function() {
                    init();
                }
            }
        }(),
        {
            init: function() {
                init();
            }
        }
    }();

    $(document).ready(function() {
        site.init();
    });
});

// Polyfill for requestAnimationFrame
var requestAnimationFramePolyfill = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
