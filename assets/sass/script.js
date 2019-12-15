//1 Слайд
    ;(function() {
        'use strict';

        var c = document.getElementById('animation');
        var ctx = c.getContext('2d');
        var w = c.width = window.innerWidth;
        var h = c.height = window.innerHeight;
        var cx = w / 2;
        var cy = h / 2;
        var mx = null, my = null;
        var maxStrength = 2000;
        var isMouseMoved = false;
        var follower = {
            x: cx,
            y: cy,
            vx: 0,
            vy: 0,
            r: w,
            tr: 0
        };

        ctx.fillStyle = 'white';

        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.ox = x;
            this.oy = y;
            this.an = Math.random() * (Math.PI * 2);
            this.san = Math.random() * 0.1;
            this.alpha = Math.random();
            this.r = 1 + Math.random() * 6;
            if(Math.random() * 10 < 5 && this.alpha < 0.2) {
                this.r = Math.random() * 20;    
            }
            this.br = this.r;
        }

        Particle.prototype = {
            constructor: Particle,
            update: function(ff) {
                var dx = this.x - ff.x;
                var dy = this.y - ff.y;
                var d = Math.sqrt(dx * dx + dy * dy);
                var a = Math.atan2(dy, dx);
                var f = maxStrength / d;
                this.x += (this.ox - this.x) * 0.1;
                this.y += (this.oy - this.y) * 0.1;
                this.x += Math.cos(a) * f;
                this.y += Math.sin(a) * f;
                if(this.alpha < 0.2) {
                    this.r = this.br + Math.cos(this.an) * (this.br * 0.8);
                    this.an += this.san;
                }
            },
            render: function(ctx) {
                ctx.fillStyle = 'rgba(25, 143, 49, ' + this.alpha + ')';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        c.addEventListener('mousemove', function(e) {
            var rect = c.getBoundingClientRect();
            mx = e.clientX - rect.left;
            my = e.clientY - rect.top;
            isMouseMoved = true;
        });

        var particles = [];
        var count = 400;
        var particle;

        for(var i = 0; i < count; i++) {
            particle = new Particle(Math.random() * w, Math.random() * h);
            particles.push(particle);
        }

        requestAnimationFrame(function loop() {
            requestAnimationFrame(loop);

            ctx.clearRect(0, 0, w, h);
          
            follower.r += (follower.tr - follower.r) * 0.1;

            if(!isMouseMoved) {
                follower.vx += Math.random() * 2 - 1;
                follower.vy += Math.random() * 2 - 1;
                follower.x += follower.vx;
                follower.y += follower.vy;
                if(Math.abs(follower.vx) > 10) {
                    follower.vx = 0;
                }
                if(Math.abs(follower.vy) > 10) {
                    follower.vy = 0;
                }
                if(follower.x < 0) {
                    follower.x = 0;
                    follower.vx *= -1;
                }
                if(follower.x > w) {
                    follower.x = w;
                    follower.vx *= -1;
                }
                if(follower.y < 0) {
                    follower.y = 0;
                    follower.vy *= -1;
                }
                if(follower.y > h) {
                    follower.y = h;
                    follower.vy *= -1;
                } 
            } else {
                follower.x += (mx - follower.x) * 0.1;
                follower.y += (my - follower.y) * 0.1;
            }

            for(var i = 0, len = particles.length; i < len; i++) {
                var particle = particles[i];
                particle.update(follower);
                particle.render(ctx);
            }

            for(var i = 0; i < particles.length; i++) {
                for(var j = i + 1; j < particles.length; j++) {
                    var p1 = particles[i];
                    var p2 = particles[j];
                    var dx = p1.x - p2.x;
                    var dy = p1.y - p2.y;
                    var d = Math.sqrt(dx * dx + dy * dy);
                    if(d < 40) {
                        ctx.strokeStyle = 'rgba(204, 202, 162,' + p1.alpha + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillStyle = 'rgba(25, 143, 49,)';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(follower.x, follower.y, follower.r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
        });

    })();

//анимация в скролее
$(window).scroll(function() {
        $('.animated-1').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+700){
                    $(this).addClass('animated');
                    $(this).addClass('bounceInLeft');
                }
        })
});
$(window).scroll(function() {
        $('.animated-2').each(function(){
            var imagePos1 = $(this).offset().top;

            var topOfWindow1 = $(window).scrollTop();
                if (imagePos1 < topOfWindow1+700){
                    $(this).addClass('animated');
                    $(this).addClass('flipInX');
                }
        })
});
$(window).scroll(function() {
        $('.animated-3').each(function(){
            var imagePos1 = $(this).offset().top;

            var topOfWindow1 = $(window).scrollTop();
                if (imagePos1 < topOfWindow1+700){
                    $(this).addClass('animated');
                    $(this).addClass('bounceInLeft');
                }
        })
});
$(window).scroll(function() {
        $('.animated-4').each(function(){
            var imagePos1 = $(this).offset().top;

            var topOfWindow1 = $(window).scrollTop();
                if (imagePos1 < topOfWindow1+700){
                    $(this).addClass('animated');
                    $(this).addClass('flipInX');
                }
        })
});
//анимация на стр портфолио
$(window).scroll(function() {
        $('.animated-5').each(function(){
            var imagePos1 = $(this).offset().top;

            var topOfWindow1 = $(window).scrollTop();
                if (imagePos1 < topOfWindow1+700){
                    $(this).addClass('animated');
                    $(this).addClass('bounceInLeft');
                }
        })
});
$(window).scroll(function() {
        $('.animated-6').each(function(){
            var imagePos1 = $(this).offset().top;

            var topOfWindow1 = $(window).scrollTop();
                if (imagePos1 < topOfWindow1+700){
                    $(this).addClass('animated');
                    $(this).addClass('bounceInRight');
                }
        })
});

//Удаление этой же самой анимации на мобилках

// $(document).ready(function() {

//   $(window).resize(function(){
//     var windowWidth = $('body').innerWidth();
//     if(windowWidth < 575){$(".width").removeClass('animated-1').addClass('ss');}
//     else{$(".width").removeClass('ss').addClass('animated-1');}
//   });
// });

// $(document).ready(function() {
//   function checkWidth() {
//     var windowWidth = $('body').innerWidth(),
//         elem = $(".skill__all");
//     if(windowWidth < 991){
//       elem.removeClass('animated-2');
//       elem.addClass('ss');
//     }
//     else{
//       elem.removeClass('ss');
//       elem.addClass('animated-2');
//     }
//   }

//   checkWidth();

//   $(window).resize(function(){
//     checkWidth();
//   });
// });