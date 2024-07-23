<<<<<<< HEAD
(()=>{var g=class e{galleryUID;items=[];constructor(t,r=1){if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=r,e.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let r=t.querySelectorAll("figure.gallery-image");for(let i of r){let n=i.querySelector("figcaption"),o=i.querySelector("img"),s={w:parseInt(o.getAttribute("width")),h:parseInt(o.getAttribute("height")),src:o.src,msrc:o.getAttribute("data-thumb")||o.src,el:i};n&&(s.title=n.innerHTML),this.items.push(s)}}static createGallery(t){let r=t.querySelectorAll("img.gallery-image");for(let o of Array.from(r)){let s=o.closest("p");if(!s||!t.contains(s)||(s.textContent.trim()==""&&s.classList.add("no-text"),!s.classList.contains("no-text")))continue;let d=o.parentElement.tagName=="A",m=o,a=document.createElement("figure");if(a.style.setProperty("flex-grow",o.getAttribute("data-flex-grow")||"1"),a.style.setProperty("flex-basis",o.getAttribute("data-flex-basis")||"0"),d&&(m=o.parentElement),m.parentElement.insertBefore(a,m),a.appendChild(m),o.hasAttribute("alt")){let l=document.createElement("figcaption");l.innerText=o.getAttribute("alt"),a.appendChild(l)}if(!d){a.className="gallery-image";let l=document.createElement("a");l.href=o.src,l.setAttribute("target","_blank"),o.parentNode.insertBefore(l,o),l.appendChild(o)}}let i=t.querySelectorAll("figure.gallery-image"),n=[];for(let o of i)n.length?o.previousElementSibling===n[n.length-1]?n.push(o):n.length&&(e.wrap(n),n=[o]):n=[o];n.length>0&&e.wrap(n)}static wrap(t){let r=document.createElement("div");r.className="gallery";let i=t[0].parentNode,n=t[0];i.insertBefore(r,n);for(let o of t)r.appendChild(o)}open(t){let r=document.querySelector(".pswp");new window.PhotoSwipe(r,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:n=>{let o=this.items[n].el.getElementsByTagName("img")[0],s=window.pageYOffset||document.documentElement.scrollTop,c=o.getBoundingClientRect();return{x:c.left,y:c.top+s,w:c.width}}}).init()}bindClick(){for(let[t,r]of this.items.entries())r.el.querySelector("a").addEventListener("click",n=>{n.preventDefault(),this.open(t)})}},b=g;var u={};if(localStorage.hasOwnProperty("StackColorsCache"))try{u=JSON.parse(localStorage.getItem("StackColorsCache"))}catch{u={}}async function S(e,t,r){if(!e)return await Vibrant.from(r).getPalette();if(!u.hasOwnProperty(e)||u[e].hash!==t){let i=await Vibrant.from(r).getPalette();u[e]={hash:t,Vibrant:{hex:i.Vibrant.hex,rgb:i.Vibrant.rgb,bodyTextColor:i.Vibrant.bodyTextColor},DarkMuted:{hex:i.DarkMuted.hex,rgb:i.DarkMuted.rgb,bodyTextColor:i.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(u))}return u[e]}var D=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},q=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let r=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},B=(e,t=500)=>window.getComputedStyle(e).display==="none"?q(e,t):D(e,t);function v(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),B(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function N(e,t,r){var i=document.createElement(e);for(let n in t)if(n&&t.hasOwnProperty(n)){let o=t[n];n=="dangerouslySetInnerHTML"?i.innerHTML=o.__html:o===!0?i.setAttribute(n,n):o!==!1&&o!=null&&i.setAttribute(n,o.toString())}for(let n=2;n<arguments.length;n++){let o=arguments[n];o&&i.appendChild(o.nodeType==null?document.createTextNode(o.toString()):o)}return i}var w=N;var y=class{localStorageKey="StackColorScheme";currentScheme;systemPreferScheme;constructor(t){this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",r=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let r=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(r)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},E=y;function p(e){let t;return()=>{t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>e())}}var O=".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]",T="#TableOfContents",L="#TableOfContents li",k="active-class";function V(e,t){let r=e.querySelector("a").offsetHeight,i=e.offsetTop-t.offsetHeight/2+r/2-t.offsetTop;i<0&&(i=0),t.scrollTo({top:i,behavior:"smooth"})}function U(e){let t={};return e.forEach(r=>{let n=r.querySelector("a").getAttribute("href");n.startsWith("#")&&(t[n.slice(1)]=r)}),t}function C(e){let t=[];return e.forEach(r=>{t.push({id:r.id,offset:r.offsetTop})}),t.sort((r,i)=>r.offset-i.offset),t}function M(){let e=document.querySelectorAll(O);if(!e){console.warn("No header matched query",e);return}let t=document.querySelector(T);if(!t){console.warn("No toc matched query",T);return}let r=document.querySelectorAll(L);if(!r){console.warn("No navigation matched query",L);return}let i=C(e),n=!1;t.addEventListener("mouseenter",p(()=>n=!0)),t.addEventListener("mouseleave",p(()=>n=!1));let o,s=U(r);function c(){let m=document.documentElement.scrollTop||document.body.scrollTop,a;i.forEach(f=>{m>=f.offset-20&&(a=document.getElementById(f.id))});let l;a&&(l=s[a.id]),a&&!l?console.debug("No link found for section",a):l!==o&&(o&&o.classList.remove(k),l&&(l.classList.add(k),n||V(l,t)),o=l)}window.addEventListener("scroll",p(c));function d(){i=C(e),c()}window.addEventListener("resize",p(d))}var $="a[href]";function P(){document.querySelectorAll($).forEach(e=>{e.getAttribute("href").startsWith("#")&&e.addEventListener("click",r=>{r.preventDefault();let i=decodeURI(e.getAttribute("href").substring(1)),n=document.getElementById(i),o=n.getBoundingClientRect().top-document.documentElement.getBoundingClientRect().top;window.history.pushState({},"",e.getAttribute("href")),scrollTo({top:o,behavior:"smooth"})})})}var x={init:()=>{v();let e=document.querySelector(".article-content");e&&(new b(e),P(),M());let t=document.querySelector(".article-list--tile");t&&new IntersectionObserver(async(s,c)=>{s.forEach(d=>{if(!d.isIntersecting)return;c.unobserve(d.target),d.target.querySelectorAll("article.has-image").forEach(async a=>{let l=a.querySelector("img"),f=l.src,H=l.getAttribute("data-key"),I=l.getAttribute("data-hash"),A=a.querySelector(".article-details"),h=await S(H,I,f);A.style.background=`
                        linear-gradient(0deg, 
                            rgba(${h.DarkMuted.rgb[0]}, ${h.DarkMuted.rgb[1]}, ${h.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${h.Vibrant.rgb[0]}, ${h.Vibrant.rgb[1]}, ${h.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(t);let r=document.querySelectorAll(".article-content div.highlight"),i="Copy",n="Copied!";r.forEach(o=>{let s=document.createElement("button");s.innerHTML=i,s.classList.add("copyCodeButton"),o.appendChild(s);let c=o.querySelector("code[data-lang]");c&&s.addEventListener("click",()=>{navigator.clipboard.writeText(c.textContent).then(()=>{s.textContent=n,setTimeout(()=>{s.textContent=i},1e3)}).catch(d=>{alert(d),console.log("Something went wrong",d)})})}),new E(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){x.init()},0)});window.Stack=x;window.createElement=w;})();
=======
(() => {
  // ns-hugo:D:\blog\blog\themes\hugo-theme-stack\assets\ts\gallery.ts
  var StackGallery = class _StackGallery {
    galleryUID;
    items = [];
    constructor(container, galleryUID = 1) {
      if (window.PhotoSwipe == void 0 || window.PhotoSwipeUI_Default == void 0) {
        console.error("PhotoSwipe lib not loaded.");
        return;
      }
      this.galleryUID = galleryUID;
      _StackGallery.createGallery(container);
      this.loadItems(container);
      this.bindClick();
    }
    loadItems(container) {
      this.items = [];
      const figures = container.querySelectorAll("figure.gallery-image");
      for (const el of figures) {
        const figcaption = el.querySelector("figcaption"), img = el.querySelector("img");
        let aux = {
          w: parseInt(img.getAttribute("width")),
          h: parseInt(img.getAttribute("height")),
          src: img.src,
          msrc: img.getAttribute("data-thumb") || img.src,
          el
        };
        if (figcaption) {
          aux.title = figcaption.innerHTML;
        }
        this.items.push(aux);
      }
    }
    static createGallery(container) {
      const images = container.querySelectorAll("img.gallery-image");
      for (const img of Array.from(images)) {
        const paragraph = img.closest("p");
        if (!paragraph || !container.contains(paragraph)) continue;
        if (paragraph.textContent.trim() == "") {
          paragraph.classList.add("no-text");
        }
        let isNewLineImage = paragraph.classList.contains("no-text");
        if (!isNewLineImage) continue;
        const hasLink = img.parentElement.tagName == "A";
        let el = img;
        const figure = document.createElement("figure");
        figure.style.setProperty("flex-grow", img.getAttribute("data-flex-grow") || "1");
        figure.style.setProperty("flex-basis", img.getAttribute("data-flex-basis") || "0");
        if (hasLink) {
          el = img.parentElement;
        }
        el.parentElement.insertBefore(figure, el);
        figure.appendChild(el);
        if (img.hasAttribute("alt")) {
          const figcaption = document.createElement("figcaption");
          figcaption.innerText = img.getAttribute("alt");
          figure.appendChild(figcaption);
        }
        if (!hasLink) {
          figure.className = "gallery-image";
          const a = document.createElement("a");
          a.href = img.src;
          a.setAttribute("target", "_blank");
          img.parentNode.insertBefore(a, img);
          a.appendChild(img);
        }
      }
      const figuresEl = container.querySelectorAll("figure.gallery-image");
      let currentGallery = [];
      for (const figure of figuresEl) {
        if (!currentGallery.length) {
          currentGallery = [figure];
        } else if (figure.previousElementSibling === currentGallery[currentGallery.length - 1]) {
          currentGallery.push(figure);
        } else if (currentGallery.length) {
          _StackGallery.wrap(currentGallery);
          currentGallery = [figure];
        }
      }
      if (currentGallery.length > 0) {
        _StackGallery.wrap(currentGallery);
      }
    }
    /**
     * Wrap adjacent figure tags with div.gallery
     * @param figures 
     */
    static wrap(figures) {
      const galleryContainer = document.createElement("div");
      galleryContainer.className = "gallery";
      const parentNode = figures[0].parentNode, first = figures[0];
      parentNode.insertBefore(galleryContainer, first);
      for (const figure of figures) {
        galleryContainer.appendChild(figure);
      }
    }
    open(index) {
      const pswp = document.querySelector(".pswp");
      const ps = new window.PhotoSwipe(pswp, window.PhotoSwipeUI_Default, this.items, {
        index,
        galleryUID: this.galleryUID,
        getThumbBoundsFn: (index2) => {
          const thumbnail = this.items[index2].el.getElementsByTagName("img")[0], pageYScroll = window.pageYOffset || document.documentElement.scrollTop, rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
      });
      ps.init();
    }
    bindClick() {
      for (const [index, item] of this.items.entries()) {
        const a = item.el.querySelector("a");
        a.addEventListener("click", (e) => {
          e.preventDefault();
          this.open(index);
        });
      }
    }
  };
  var gallery_default = StackGallery;

  // ns-hugo:D:\blog\blog\themes\hugo-theme-stack\assets\ts\color.ts
  var colorsCache = {};
  if (localStorage.hasOwnProperty("StackColorsCache")) {
    try {
      colorsCache = JSON.parse(localStorage.getItem("StackColorsCache"));
    } catch (e) {
      colorsCache = {};
    }
  }
  async function getColor(key, hash, imageURL) {
    if (!key) {
      return await Vibrant.from(imageURL).getPalette();
    }
    if (!colorsCache.hasOwnProperty(key) || colorsCache[key].hash !== hash) {
      const palette = await Vibrant.from(imageURL).getPalette();
      colorsCache[key] = {
        hash,
        Vibrant: {
          hex: palette.Vibrant.hex,
          rgb: palette.Vibrant.rgb,
          bodyTextColor: palette.Vibrant.bodyTextColor
        },
        DarkMuted: {
          hex: palette.DarkMuted.hex,
          rgb: palette.DarkMuted.rgb,
          bodyTextColor: palette.DarkMuted.bodyTextColor
        }
      };
      localStorage.setItem("StackColorsCache", JSON.stringify(colorsCache));
    }
    return colorsCache[key];
  }

  // ns-hugo:D:\blog\blog\themes\hugo-theme-stack\assets\ts\menu.ts
  var slideUp = (target, duration = 500) => {
    target.classList.add("transiting");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    window.setTimeout(() => {
      target.classList.remove("show");
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("transiting");
    }, duration);
  };
  var slideDown = (target, duration = 500) => {
    target.classList.add("transiting");
    target.style.removeProperty("display");
    target.classList.add("show");
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("transiting");
    }, duration);
  };
  var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === "none") {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };
  function menu_default() {
    const toggleMenu = document.getElementById("toggle-menu");
    if (toggleMenu) {
      toggleMenu.addEventListener("click", () => {
        if (document.getElementById("main-menu").classList.contains("transiting")) return;
        document.body.classList.toggle("show-menu");
        slideToggle(document.getElementById("main-menu"), 300);
        toggleMenu.classList.toggle("is-active");
      });
    }
  }

  // ns-hugo:D:\blog\blog\themes\hugo-theme-stack\assets\ts\createElement.ts
  function createElement(tag, attrs, children) {
    var element = document.createElement(tag);
    for (let name in attrs) {
      if (name && attrs.hasOwnProperty(name)) {
        let value = attrs[name];
        if (name == "dangerouslySetInnerHTML") {
          element.innerHTML = value.__html;
        } else if (value === true) {
          element.setAttribute(name, name);
        } else if (value !== false && value != null) {
          element.setAttribute(name, value.toString());
        }
      }
    }
    for (let i = 2; i < arguments.length; i++) {
      let child = arguments[i];
      if (child) {
        element.appendChild(
          child.nodeType == null ? document.createTextNode(child.toString()) : child
        );
      }
    }
    return element;
  }
  var createElement_default = createElement;

  // ns-hugo:D:\blog\blog\themes\hugo-theme-stack\assets\ts\colorScheme.ts
  var StackColorScheme = class {
    localStorageKey = "StackColorScheme";
    currentScheme;
    systemPreferScheme;
    constructor(toggleEl) {
      this.bindMatchMedia();
      this.currentScheme = this.getSavedScheme();
      this.dispatchEvent(document.documentElement.dataset.scheme);
      if (toggleEl)
        this.bindClick(toggleEl);
      if (document.body.style.transition == "")
        document.body.style.setProperty("transition", "background-color .3s ease");
    }
    saveScheme() {
      localStorage.setItem(this.localStorageKey, this.currentScheme);
    }
    bindClick(toggleEl) {
      toggleEl.addEventListener("click", (e) => {
        if (this.isDark()) {
          this.currentScheme = "light";
        } else {
          this.currentScheme = "dark";
        }
        this.setBodyClass();
        if (this.currentScheme == this.systemPreferScheme) {
          this.currentScheme = "auto";
        }
        this.saveScheme();
      });
    }
    isDark() {
      return this.currentScheme == "dark" || this.currentScheme == "auto" && this.systemPreferScheme == "dark";
    }
    dispatchEvent(colorScheme) {
      const event = new CustomEvent("onColorSchemeChange", {
        detail: colorScheme
      });
      window.dispatchEvent(event);
    }
    setBodyClass() {
      if (this.isDark()) {
        document.documentElement.dataset.scheme = "dark";
      } else {
        document.documentElement.dataset.scheme = "light";
      }
      this.dispatchEvent(document.documentElement.dataset.scheme);
    }
    getSavedScheme() {
      const savedScheme = localStorage.getItem(this.localStorageKey);
      if (savedScheme == "light" || savedScheme == "dark" || savedScheme == "auto") return savedScheme;
      else return "auto";
    }
    bindMatchMedia() {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (e.matches) {
          this.systemPreferScheme = "dark";
        } else {
          this.systemPreferScheme = "light";
        }
        this.setBodyClass();
      });
    }
  };
  var colorScheme_default = StackColorScheme;

  // ns-hugo:D:\blog\blog\themes\hugo-theme-stack\assets\ts\scrollspy.ts
  function debounced(func) {
    let timeout;
    return () => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(() => func());
    };
  }
  var headersQuery = ".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]";
  var tocQuery = "#TableOfContents";
  var navigationQuery = "#TableOfContents li";
  var activeClass = "active-class";
  function scrollToTocElement(tocElement, scrollableNavigation) {
    let textHeight = tocElement.querySelector("a").offsetHeight;
    let scrollTop = tocElement.offsetTop - scrollableNavigation.offsetHeight / 2 + textHeight / 2 - scrollableNavigation.offsetTop;
    if (scrollTop < 0) {
      scrollTop = 0;
    }
    scrollableNavigation.scrollTo({ top: scrollTop, behavior: "smooth" });
  }
  function buildIdToNavigationElementMap(navigation) {
    const sectionLinkRef = {};
    navigation.forEach((navigationElement) => {
      const link = navigationElement.querySelector("a");
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        sectionLinkRef[href.slice(1)] = navigationElement;
      }
    });
    return sectionLinkRef;
  }
  function computeOffsets(headers) {
    let sectionsOffsets = [];
    headers.forEach((header) => {
      sectionsOffsets.push({ id: header.id, offset: header.offsetTop });
    });
    sectionsOffsets.sort((a, b) => a.offset - b.offset);
    return sectionsOffsets;
  }
  function setupScrollspy() {
    let headers = document.querySelectorAll(headersQuery);
    if (!headers) {
      console.warn("No header matched query", headers);
      return;
    }
    let scrollableNavigation = document.querySelector(tocQuery);
    if (!scrollableNavigation) {
      console.warn("No toc matched query", tocQuery);
      return;
    }
    let navigation = document.querySelectorAll(navigationQuery);
    if (!navigation) {
      console.warn("No navigation matched query", navigationQuery);
      return;
    }
    let sectionsOffsets = computeOffsets(headers);
    let tocHovered = false;
    scrollableNavigation.addEventListener("mouseenter", debounced(() => tocHovered = true));
    scrollableNavigation.addEventListener("mouseleave", debounced(() => tocHovered = false));
    let activeSectionLink;
    let idToNavigationElement = buildIdToNavigationElementMap(navigation);
    function scrollHandler() {
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      let newActiveSection;
      sectionsOffsets.forEach((section) => {
        if (scrollPosition >= section.offset - 20) {
          newActiveSection = document.getElementById(section.id);
        }
      });
      let newActiveSectionLink;
      if (newActiveSection) {
        newActiveSectionLink = idToNavigationElement[newActiveSection.id];
      }
      if (newActiveSection && !newActiveSectionLink) {
        console.debug("No link found for section", newActiveSection);
      } else if (newActiveSectionLink !== activeSectionLink) {
        if (activeSectionLink)
          activeSectionLink.classList.remove(activeClass);
        if (newActiveSectionLink) {
          newActiveSectionLink.classList.add(activeClass);
          if (!tocHovered) {
            scrollToTocElement(newActiveSectionLink, scrollableNavigation);
          }
        }
        activeSectionLink = newActiveSectionLink;
      }
    }
    window.addEventListener("scroll", debounced(scrollHandler));
    function resizeHandler() {
      sectionsOffsets = computeOffsets(headers);
      scrollHandler();
    }
    window.addEventListener("resize", debounced(resizeHandler));
  }

  // ns-hugo:D:\blog\blog\themes\hugo-theme-stack\assets\ts\smoothAnchors.ts
  var anchorLinksQuery = "a[href]";
  function setupSmoothAnchors() {
    document.querySelectorAll(anchorLinksQuery).forEach((aElement) => {
      let href = aElement.getAttribute("href");
      if (!href.startsWith("#")) {
        return;
      }
      aElement.addEventListener("click", (clickEvent) => {
        clickEvent.preventDefault();
        const targetId = decodeURI(aElement.getAttribute("href").substring(1)), target = document.getElementById(targetId), offset = target.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;
        window.history.pushState({}, "", aElement.getAttribute("href"));
        scrollTo({
          top: offset,
          behavior: "smooth"
        });
      });
    });
  }

  // <stdin>
  var Stack = {
    init: () => {
      menu_default();
      const articleContent = document.querySelector(".article-content");
      if (articleContent) {
        new gallery_default(articleContent);
        setupSmoothAnchors();
        setupScrollspy();
      }
      const articleTile = document.querySelector(".article-list--tile");
      if (articleTile) {
        let observer = new IntersectionObserver(async (entries, observer2) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer2.unobserve(entry.target);
            const articles = entry.target.querySelectorAll("article.has-image");
            articles.forEach(async (articles2) => {
              const image = articles2.querySelector("img"), imageURL = image.src, key = image.getAttribute("data-key"), hash = image.getAttribute("data-hash"), articleDetails = articles2.querySelector(".article-details");
              const colors = await getColor(key, hash, imageURL);
              articleDetails.style.background = `
                        linear-gradient(0deg, 
                            rgba(${colors.DarkMuted.rgb[0]}, ${colors.DarkMuted.rgb[1]}, ${colors.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${colors.Vibrant.rgb[0]}, ${colors.Vibrant.rgb[1]}, ${colors.Vibrant.rgb[2]}, 0.75) 100%)`;
            });
          });
        });
        observer.observe(articleTile);
      }
      const highlights = document.querySelectorAll(".article-content div.highlight");
      const copyText = `Copy`, copiedText = `Copied!`;
      highlights.forEach((highlight) => {
        const copyButton = document.createElement("button");
        copyButton.innerHTML = copyText;
        copyButton.classList.add("copyCodeButton");
        highlight.appendChild(copyButton);
        const codeBlock = highlight.querySelector("code[data-lang]");
        if (!codeBlock) return;
        copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            copyButton.textContent = copiedText;
            setTimeout(() => {
              copyButton.textContent = copyText;
            }, 1e3);
          }).catch((err) => {
            alert(err);
            console.log("Something went wrong", err);
          });
        });
      });
      new colorScheme_default(document.getElementById("dark-mode-toggle"));
    }
  };
  window.addEventListener("load", () => {
    setTimeout(function() {
      Stack.init();
    }, 0);
  });
  window.Stack = Stack;
  window.createElement = createElement_default;
})();
>>>>>>> ee63222 (Update: my avatar)
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
