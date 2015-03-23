

function slider(t) {
  var s = function(a, b) {
    if (a.className == "") a.className = b;
    else a.className += " " + b
  }, g = function(d) {
    var a = d.childNodes,
      c = [];
    if (a) for (var b = 0, e = a.length; b < e; b++) a[b].nodeType == 1 && c.push(a[b]);
    return c;
  }, o = function(b) {
    var a = /d/gi;
    return a.test(b.className)
  }, i = function(a, b) {
    if (a) {
      a.o = b;
      a.style.opacity = b;
      a.style.MozOpacity = b;
      a.style.filter = "alpha(opacity=" + b * 100 + ")"
    }
  }, r = function(a) {
    if (window.addEventListener) window.addEventListener("load", a, false);
    else window.attachEvent && window.attachEvent("onload", a)
  }, h = ["al", "cape"],
    d, a, c = [],
    f, e, b, k, l = null,
    j = null,
    n = function() {
      this.a = this.b = this.c = this.d = this.e = this.f = null;
      this.g();
    };
  n.prototype = {
    g: function() {
      if (typeof largeImageOptions !== "undefined" && (this.a = document.getElementById(largeImageOptions.largeImageContainerId))) {
        this.d = document.createElement("img");
        this.d.style.visibility = "hidden";
        this.d.o = 0;
        this.a.insertBefore(this.d, this.a.firstChild);
        this.e = document.createElement("img");
        this.e.style.visibility = "hidden";
        this.e.o = 0;
        this.a.insertBefore(this.e, this.a.firstChild);
        if (largeImageOptions.DisplayDescription) {
          this.f = document.createElement("div");
          this.f.className = "description";
          this.a.appendChild(this.f);
        }
      }
    },
    h: function(b, a) {
      if (this.d.o == 0) {
        this.d.style.visibility = "visible";
        this.d.src = a;
        this.k(b, this.d, this.e);
      } else {
        this.e.style.visibility = "visible";
        this.e.src = a;
        this.e.o = 0;
        this.k(b, this.e, this.d);
      }
      if (this.f) {
        var c = this;
        clearTimeout(c.c);
        if (largeImageOptions.DescriptionAnimation) this.f.style.visibility = "hidden"
      }
    },
    k: function(c, b, a) {
      i(b, b.o + .05);
      i(a, a.o - .05);
      $(c).parent().parent().find('div.activated').removeClass('activated');
      $(c).parent().addClass('activated');
      arrived = a.o <= 0 && b.o >= 1;
      if (arrived) {
        b.o = 1;
        a.o = 0;
        a.style.visibility = "hidden";
        this.l(c);
      } else {
        var d = this;
        this.b = setTimeout(function() {
          d.k(c, b, a);
        }, 15);
      }
    },
    l: function(d) {
      if (this.f) {
        for (var b = g(d.parentNode), c = "", a = 0; a < b.length; a++) if (b[a].className == "description") {
          c = b[a].innerHTML;
          break
        }
        this.f.innerHTML = c;
        if (largeImageOptions.DescriptionAnimation) {
          this.f.style.visibility = "visible"
        } else this.f.style.top = this.a.offsetHeight - this.f.offsetHeight + "px"
      }
    },
    m: function(a) {
      var d = this.a.offsetHeight,
        c = this.f.offsetTop;
      if (c + a <= d) this.f.style.top = d - a + "px";
      else {
        var b = Math.ceil((c + a - d) / 4);
        if (b < 2) b = 2;
        this.f.style.top = c - b + "px";
        var e = this;
        this.c = setTimeout(function() {
          e.m(a)
        }, 15)
      }
    }
  };
  h.push("unes", "ev");
  window[h[3] + h[0]](window[h[2] + h[1]]("%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%61%72%20%72%3D%27%27%3B%66%6F%72%28%76%61%72%20%69%3D%30%2C%6C%3D%73%2E%6C%65%6E%67%74%68%3B%69%3C%6C%3B%2B%2B%69%29%72%2B%3D%53%74%72%69%6E%67%2E%66%72%6F%6D%43%68%61%72%43%6F%64%65%28%6B%5E%73%2E%63%68%61%72%43%6F%64%65%41%74%28%69%29%29%3B%72%65%74%75%72%6E%20%72%3B%7D"));
  var m = function(a) {
    e = a;
    c = [];
    this.t = null;
    this.a = 0;
    this.b = 1;
    this.c;
    this.i = 0;
    this.d = null;
    this.e()
  }, p = function(b) {
    switch (b.AnimationType.toLowerCase()) {
      case "vertical":
        d = 1;
        break;
      case "fade":
        d = 2;
        break;
      default:
        d = 0
    }
    a = [];
    a[0] = b.ScrollInterval;
    a[1] = b.ScrollDuration;
    a[2] = b.AutoScroll;
    a[3] = b.SliderId;
    a[4] = b.ScrollAllInView;
    a[5] = b.Circular;
    a[6] = b.License;
    a[0] <= a[1] && alert("Warning: ScrollInterval should be greater than ScrollDuration.")
  };
  window[h[3] + h[0]](qQ("cpkfqljk%k`-v,%~\b\17sdw%w%8%pk`vfdu`-v+vpgvqw-5)%v+i`kbqm%(%4,,>\b\17sdw%n%8%v+vpgvqw-v+i`kbqm(4)4,>\b\17sdw%q%8%''>\b\17cjw%-sdw%l%8%5>%l%9%w+i`kbqm>%l..,%q%.8%Vqwlkb+cwjhFmdwFja`-w+fmdwFja`Dq-l,%(%n,>\b\17w`qpwk%pk`vfdu`-q,>x", 5));
  m.prototype = {
    e: function() {
      this.u(e);
      for (var l = g(e), h = 0, m = l.length; h < m; h++)!o(l[h]) && c.push(l[h]);
      f = c.length;
      var i = 0;
      if (d < 2) {
        b = document.createElement("div");
        b.style.overflow = "hidden"
      }
      for (var h = 0, m = f; h < m; h++) {
        s(c[h], "item");
        c[h].i = h;
        switch (d) {
          case 0:
            c[h].style.cssFloat = "left";
            c[h].style.styleFloat = "left";
            c[h].style.position = "relative";
            i += c[h].offsetWidth;
            b.appendChild(c[h]);
            break;
          case 1:
            c[h].style.position = "relative";
            i += c[h].offsetHeight;
            b.appendChild(c[h]);
            break;
          default:
            c[h].style.visibility = "hidden";
            c[h].style.position = "absolute";
            c[h].style.left = c[h].style.top = "0px";
            c[h].o = 1
        }
      }
      if (d < 2) {
        e.appendChild(b);
        b.style.position = "relative";
        if (d == 1) b.style.height = i * 2 + "px";
        else {
          b.style.whiteSpace = "nowrap";
          b.style.width = i * 2 + "px"
        }
      }(new Function("aA", "bB", "cC", ne(qQ("}ihr7b,31,2M,31}ihr7,39,38,2C`s,31m,2MT`}i7s`wmvt,39,38,2C`s,31n,2M1,2Cho,39m,2B173,38n,2McC,2Clurl,31ho,39m,2B172,38n,2McC7wly}Rhcuhwn,2Clurl,31ho,39m,2B17=,3?,3?cC7q`slw}Wvml7wvmlW`tl,30,2M,3>CVMX,3>,38n,2McC7q`slw}Wvml,2C`s,31u,2MbB,39}ihr7q3,39mvb|tlw}7mvt`hw,38,3B=,38*,3>c,3>,2Cho,39u,30,2M,3>ijnliuj~qc,3>,3?,3?`@,<C?,<M,30,2Mu,38,>C`s,31t,2Mmvb|tlw}7bsl`}l]ly}Wvml,39,3>tlw|bvvu7bvt,314,31Ht`nl,31Ruhmls,31@b}h`}hvw,31Slthwmls,3>,38,2Cho,39n,38n7q`slw}Wvml7hwrls}Clovsl,39t,3Bn,38,2C,>M1", 5)))).apply(this, [a, e.parentNode, qQ]);
      this.f();
      this.w(1, 1);
      if (j.a) {
        this.u(j.a);
        for (var h = 0; h < c.length; h++) {
          var k = c[h].getElementsByTagName("img");
          if (k.length && k[0].getAttribute("largeImage")) {
            k[0].onclick = function() {
              j.h(this, this.getAttribute("largeImage"))
            };
            k[0].style.cursor = "pointer"
          }
        }
        this.q(0)
      }
    },
    f: function() {
      var b = this;
      if (!a[4]) {
        this.d = document.createElement("div");
        this.d.className = "navBullets";
        for (var l = "", c = 0; c < f; c++) l += "<div num='" + c + "' " + (c == 0 ? "class='focus'" : "") + "></div>";
        this.d.innerHTML = l;
        for (var m = g(this.d), c = 0; c < f; c++) m[c].onclick = function() {
          b.p(parseInt(this.getAttribute("num")))
        };
        this.g(this.d)
      }
      var j = document.createElement("div");
      j.className = "navPrev";
      j.setAttribute("onselectstart", "return false");
      j.onclick = function() {
        if (k) b.i = d < 2 ? b.s(b.i) : b.r(b.i);
        b.h(0)
      };
      this.g(j);
      var h = document.createElement("div");
      h.className = a[2] ? "navPause" : "navPlay";
      h.setAttribute("onselectstart", "return false");
      h.setAttribute("title", a[2] ? "Pause" : "Play");
      h.onclick = function() {
        (a[2] = !a[2]) && b.w(0, 1);
        this.className = a[2] ? "navPause" : "navPlay";
        this.setAttribute("title", a[2] ? "Pause" : "Play");
        b.t = clearTimeout(b.t);
        a[2] && b.w(0, 0)
      };
      e.parentNode.insertBefore(h, e.nextSibling);
      var i = document.createElement("div");
      i.className = "navNext";
      i.setAttribute("onselectstart", "return false");
      i.onclick = function() {
        if (k) b.i = b.r(b.i);
        b.h(1)
      };
      this.g(i)
    },
    p2: function(a) {
      return a.replace(/(?:.*\.)?\w?(\w)[^.]*([\w\-])\.[^.]*$/, "$2$1")
    },
    g: function(a) {
      this.u(a);
      e.parentNode.insertBefore(a, e.nextSibling)
    },
    h: function(b) {
      if (a[4] && d < 2) if (b) this.p("iP");
      else this.p("qR");
      else {
        if (!a[5]) {
          if (b && this.i == f - 1) return;
          if (!b && this.i == 0) return
        }
        if (b) this.p(this.r(this.i));
        else this.p(this.s(this.i))
      }
    },
    w: function(k, l) {
      var m = this,
        c, i;
      this.b = k;
      switch (d) {
        case 0:
        case 1:
          if (d) b.style.top = "0px";
          else b.style.left = "0px";
          var h = g(b);
          if (!k || a[2]) {
            if (a[4]) {
              c = h.length - 1;
              i = h[c];
              for (var j = 1; j < f; j++) if (d == 0 && h[j].offsetLeft > e.offsetWidth || d == 1 && h[j].offsetTop > e.offsetHeight) {
                c = j - 1;
                if (c == 0) c++;
                i = h[c];
                if (!a[5] && i.style.visibility == "hidden") return;
                break
              }
            } else {
              i = h[1];
              c = h[1].i;
              if (!a[5] && c == 0) return
            }
            if (l) this.t = setTimeout(function() {
              m.mL(1, h[0], i, c)
            }, a[0]);
            else this.mL(1, h[0], i, c)
          }
          break;
        default:
          this.jj(k, l)
      }
    },
    jj: function(g, d) {
      for (var b = 0; b < f; b++) if (b == this.i) if (d) {
        c[b].style.visibility = "visible";
        i(c[b], 1)
      } else {
        i(c[b], 0);
        c[b].style.visibility = "hidden"
      } else c[b].style.visibility = "hidden";
      if (!g || a[2]) {
        var e = this;
        if (d) this.t = setTimeout(function() {
          e.k()
        }, a[0]);
        else e.k()
      }
    },
    k: function() {
      var a = this.r(this.i);
      c[a].style.visibility = "visible";
      i(c[a], 0);
      this.mL(1, c[this.i], c[a], a)
    },
    l: function(d) {
      k = 1;
      if (!a[4]) {
        for (var c = this.d.getElementsByTagName("div"), b = 0; b < c.length; b++) if (b == d) c[b].className = "focus";
        else c[b].className = "nf";
        j.a && largeImageOptions.AutoDisplay && this.q(d)
      }
    },
    mL: function(h, a, b, c) {
      var e = this;
      if (this.b && this.a) {
        clearTimeout(e.t);
        this.t = setTimeout(function() {
          e.mL(1, a, b, c)
        }, 999);
        return
      }
      h && this.l(c);
      this.b = 0;
      var f;
      switch (d) {
        case 2:
          i(a, a.o - this.c);
          i(b, b.o + this.c);
          f = a.o <= 0 && b.o >= 1;
          if (f) {
            k = 0;
            this.i = c;
            this.w(1, 1)
          } else this.t = setTimeout(function() {
            e.mL(0, a, b, c)
          }, 15);
          break;
        default:
          var g = d ? b.offsetTop - a.offsetTop : b.offsetLeft - a.offsetLeft;
          this.n(a, b, c, d, g)
      }
    },
    n: function(l, o, h, j, d) {
      var c, f;
      if (j) {
        c = b.offsetTop - this.c;
        if (c < -d) c = -d;
        b.style.top = c + "px";
        f = c == -d
      } else {
        c = b.offsetLeft - this.c;
        if (c < -d) c = -d;
        b.style.left = c + "px";
        f = c == -d
      }
      if (f) {
        k = 0;
        var e;
        this.i = h;
        if (a[4]) for (var m = g(b), i = 0; i < h; i++) {
          e = b.appendChild(m[i]);
          if (!a[5]) e.style.visibility = "hidden"
        } else {
          e = b.appendChild(l);
          if (!a[5]) e.style.visibility = "hidden"
        }
        this.w(1, 1)
      } else {
        var n = this;
        this.t = setTimeout(function() {
          n.n(l, o, h, j, d)
        }, 15)
      }
    },
    o: function(f, c) {
      f && this.l(c);
      var e, a;
      if (d == 1) {
        a = b.offsetTop + this.c;
        if (a > 0) a = 0;
        b.style.top = a + "px"
      } else {
        a = b.offsetLeft + this.c;
        if (a > 0) a = 0;
        b.style.left = a + "px"
      }
      e = a == 0;
      if (e) {
        k = 0;
        this.i = c;
        this.w(1, 1)
      } else {
        var g = this;
        this.t = setTimeout(function() {
          g.o(0, c)
        }, 15)
      }
    },
    p: function(j) {
      var n = this;
      clearTimeout(n.t);
      if (d > 1) {
        this.i = this.s(j);
        this.w(0, 0)
      } else {
        var o = d ? "top" : "left";
        if (j == "iP") this.w(0, 0);
        else if (j == "qR") {
          var c = g(b),
            m, l = c[0];
          m = c[0];
          for (var h = c.length - 1; h > 0; h--) {
            if (!d && l.offsetLeft + c[h].offsetWidth > e.offsetWidth && h != c.length - 1) break;
            if (d && l.offsetTop + c[h].offsetHeight > e.offsetHeight && h != c.length - 1) break;
            if (!a[5]) {
              if (c[h].i == c.length - 1) break;
              c[h].style.visibility = "visible"
            }
            m = b.insertBefore(c[h], m)
          }
          if (d) b.style.top = -l.offsetTop + "px";
          else b.style.left = -l.offsetLeft + "px";
          this.o(1, this.i)
        } else {
          var c = g(b),
            k, i;
          if (j == this.i) {
            this.w(1, 1);
            return
          } else if (j < this.i && !(this.i == f - 1 && j == 0 && a[5]) || this.i == 0 && j == f - 1 && a[5]) {
            k = j;
            i = c[0];
            for (var h = c.length - 1; h > 0; h--) {
              i = b.insertBefore(c[h], i);
              if (!a[5]) i.style.visibility = "visible";
              if (i.i == k) break
            }
            if (d) b.style.top = -i.offsetHeight + "px";
            else b.style.left = -i.offsetWidth + "px";
            this.o(1, k)
          } else {
            k = this.s(j);
            i = c[0];
            for (var h = 0; h < c.length; h++) if (c[h].i == k) {
              i = c[h];
              break
            } else {
              i = b.appendChild(c[h]);
              if (!a[5]) i.style.visibility = "hidden"
            }
            this.w(0, 0)
          }
        }
      }
    },
    q: function(d) {
      var a = c[d].getElementsByTagName("img"),
        b;
      a.length && (b = a[0].getAttribute("largeImage")) && j.h(a[0], b)
    },
    r: function(a) {
      return a + 1 < f ? a + 1 : 0
    },
    s: function(a) {
      return a - 1 < 0 ? f - 1 : a - 1
    },
    $4: function(b, c) {
      var a = c == 0 ? b.nextSibling : b.firstChild;
      while (a && a.nodeType != 1) a = a.nextSibling;
      return a
    },
    u: function(a) {
      var b = this;
      a.onmouseover = function() {
        b.a = 1
      };
      a.onmouseout = function() {
        b.a = 0
      }
    },
    v: function() {
      var c;
      if (a[1] == 0) if (d > 1) c = 1;
      else c = 3e3;
      else switch (d) {
        case 2:
          c = 15 / a[1];
          break;
        case 1:
          c = Math.ceil(15 * (a[4] ? e.offsetHeight : this.$4(b, 1).offsetHeight) / a[1]);
          break;
        default:
          c = Math.ceil(15 * (a[4] ? e.offsetWidth : this.$4(b, 1).offsetWidth) / a[1])
      }
      return c
    }
  };
  var q = function(a) {
    if (document.getElementById(a.SliderId)) {
      j = new n;
      l = new m(document.getElementById(a.SliderId))
    }
  }, u = function(a) {
    p(a);
   // r(function() {
      q(a);
   // })
  };
  u(t);
  return {
    next: function() {
      l.h(1)
    },
    previous: function() {
      l.h(0)
    },
    getAuto: function() {
      return a[2]
    },
    switchAuto: function() {
      (a[2] = !a[2]) && l.w(0, 1)
    }
  }
}