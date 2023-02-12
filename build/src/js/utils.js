//
//
//
//
// GERENCIA A REQUISIÇÃO HTTP
//
// REFERÊNCIA:
// https://www.google.com/search?q=AJAX+VANILLA+JS
// https://wickedev.com/use-vanilla-javascript-to-make-ajax-request/
//
//
//
//

export var $ajax = {
    post: function(url, data, responseCallback) {
        console.log('::: $ajax POST > url and data:', url, data);

        // Create the XMLHttpRequest object.
        var xhr = new XMLHttpRequest();
        // Initialize the request
        xhr.open("POST", url, true);
        // Set content type
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // Send the request with data to post
        xhr.send(JSON.stringify(data));
        // Fired once the request completes successfully 
        xhr.onload = function(e)
        {
            // Check if the request was a success
            if (this.readyState === XMLHttpRequest.DONE)
            {
                if (this.status === 200 || this.status === 201)
                {
                    // var r = { code: 0, message: '' }

                    // Get and convert the responseText into JSON
                    // try { r = JSON.parse(xhr.responseText); } catch (e) {}

                    var r = JSON.parse(xhr.responseText);

                    responseCallback({ code: this.status || 0, message: r || 'Não foi possível ler a resposta do servidor. Por favor, tente novamente ou fale conosco por outro meio.' });

                    console.log('::: $ajax POST > Sucesso:', r);
                } else if (this.status >= 400) {
                    responseCallback({ code: 0, message: 'Não foi possível enviar os dados. Por favor, tente novamente ou fale conosco por outro meio.' });
                    console.log('::: $ajax POST > Error:', JSON.stringify(xhr.response));
                } else if (this.status >= 500) {
                    responseCallback({ code: 0, message: 'Não foi possível se comunicar com o servidor. Por favor, tente novamente ou fale conosco por outro meio.' });
                    console.log('::: $ajax POST > Error:', JSON.stringify(xhr.response));
                } else {
                    // Desconhecido
                    responseCallback({ code: 0, message: 'Não foi possível se comunicar com o servidor. Por favor, tente novamente ou fale conosco por outro meio.' });
                    console.log('::: $ajax POST > Error:', JSON.stringify(xhr.response));
                }
            }
        }
    },

    get: function (url, responseCallback) {
        console.log('::: $ajax GET > url:', url);

        // Create the XMLHttpRequest object.
        var xhr = new XMLHttpRequest();
        // Initialize the request
        xhr.open("GET", url, true);
        // Set content type
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // Send the request get
        xhr.send();
        // Fired once the request completes successfully 
        xhr.onload = function(e)
        {
            // Check if the request was a success
            if (this.readyState === XMLHttpRequest.DONE)
            {
                if (this.status === 200 || this.status === 201)
                {
                    var r = JSON.parse(xhr.responseText);

                    responseCallback({ code: this.status || 0, message: r || 'Não foi possível ler a resposta do servidor. Por favor, tente novamente ou fale conosco por outro meio.' });

                    console.log('::: $ajax GET > Sucesso:', r);
                } else if (this.status >= 400) {
                    responseCallback({ code: 0, message: 'Não foi possível enviar os dados. Por favor, tente novamente ou fale conosco por outro meio.' });
                    console.log('::: $ajax GET > Error:', JSON.stringify(xhr.response));
                } else if (this.status >= 500) {
                    responseCallback({ code: 0, message: 'Não foi possível se comunicar com o servidor. Por favor, tente novamente ou fale conosco por outro meio.' });
                    console.log('::: $ajax GET > Error:', JSON.stringify(xhr.response));
                } else {
                    // Desconhecido
                    responseCallback({ code: 0, message: 'Não foi possível se comunicar com o servidor. Por favor, tente novamente ou fale conosco por outro meio.' });
                    console.log('::: $ajax GET > Error:', JSON.stringify(xhr.response));
                }
            }
        }
    }
}

export var $object = {
    /**
     * Alternative for Object.assign 
     * @param {array} objs 
     * @returns merge of the objects
     */
    assign: function(objs){ 
        var merge =  objs.reduce(function (r, o) {
            Object.keys(o).forEach(function (k) {
                r[k] = o[k];
            });
            return r;
        }, {});

        return merge;
    }
}

export function $el(seletor) {
    return document.querySelector(seletor);
}

export function $els(seletor) {
    return document.querySelectorAll(seletor);
}

export function $trim(textElement) {
    return textElement.trim(); 
} 

// Working on IE8+
export function $addClass(el, className) {
    if (el) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            var current = el.className, found = false;
            var all = current.split(' ');
            for(var i=0; i<all.length, !found; i++) found = all[i] === className;
            if(!found) {
                if(current === '') el.className = className;
                else el.className += ' ' + className;
            }
        }
    }
}

// Working on IE8+
export function $removeClass(element, className) {
    if (element) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}


export function $event(event, element, fn) {
    if (window.addEventListener) {
        if (typeof element === 'string') {
            const selector = document.querySelector(element);
            selector.addEventListener(event, fn, false);            
        } else {
            element.addEventListener(event, fn, false);            
        }
    }
    else if (window.attachEvent) {
        if (typeof element === 'string') {
            const selector = document.querySelector(element);
            selector.attachEvent(`on${event}`, fn);            
        } else {
            element.attachEvent(`on${event}`, fn);            
        }
    }
    else {
        if (typeof element === 'string') {
            const selector = document.querySelector(element);
            selector[`on${event}`] = fn;            
        } else {
            element[`on${event}`] = fn;          
        }
    }
}

export function $hasClass(element, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
}

export function $attr(element, attribute, value = "") {
    element.setAttribute(attribute, value);
}

export function $getAttr(element, attribute) {
    return element.getAttribute(attribute);
}

export function $removeAttr(element, attribute) {
    element.removeAttribute(attribute);
}

export function $toggleAttr(element, attribute) {
    var attr = $getAttr(element, attribute);

    if (attr !== null) {
        $removeAttr(element, attribute)
    } else {
        $attr(element, attribute)
    }
}

/**
 * Exist this attribute on element 
 * @param {HTMLElement} element - element html
 * @param {string} attribute - attribute or property of element 
 * @returns {boolean} - returned a boolean 
 */
export function $findAttr(element, attribute) {
    var attr = $getAttr(element, attribute);

    if (attr !== null) {
        return true;
    } else {
        return false;
    }
}

export function $toggle(element, className, callback = function() {}) {
    if (!$hasClass(element, className)) {
        $addClass(element, className);
        callback(true);
    } else {
        $removeClass(element, className);
        callback(false);
    }
}

export function $find(element, seletor) {
    return element.querySelector(seletor);
}

export function $finds(element, seletor) {
    return element.querySelectorAll(seletor);
}

export function $addHTML(element, html) {
    element.innerHTML = html;
}

export function $addText(element, text) {
    element.innerText = text;
}

/**
 * Method Delay
 * @param {function} callback - action that will perform only once
 * @param {number} time - delay in seconds
 */
export function $delay(callback, time) {
    setTimeout(callback, time * 1000);
}

//https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
/**
 * 
 * @param {css} styleSheet 
 */
export function $style(css) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}

/**
 * 
 * @param {int} s - how long do you sleep in seconds
 * @returns return promise sleeping  
 */
export var $sleep = (s) => new Promise((p) => setTimeout(p, (s * 1000) | 0));