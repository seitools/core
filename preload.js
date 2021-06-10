window.addEventListener("DOMContentLoaded", () => {
    window.SEITools = {
        document: document.cloneNode(true)
    }
    
    document.write('')

    const styles = [...window.document.getElementsByTagName('link')]
    const scripts = [...window.document.getElementsByTagName('script')]

    styles.map(link => {
        //link.href = link.href.includes('?') ? link.href + '&seiTools=block~' : link.href + '?seiTools=block~'
        return link
    })

    scripts.map((script) => {
        //script.src = script.src.includes('?') ? script.src + '&seiTools=block~' : script.src + '?seiTools=block~'
        return script
    })

    fetch(chrome.runtime.getURL('template.html')).then(r => r.text()).then(html => {
        document.write(html)

        const styles = [...document.head.getElementsByTagName('link')]
        const scripts = [...window.document.getElementsByTagName('script')]

        styles.map(link => {
            link.href = chrome.runtime.getURL(link.getAttribute('data-href'))
            return link
        })

        scripts.map(script => {
            script.src = chrome.runtime.getURL(script.getAttribute('data-src'))
            return script
        })
        document.body.style.display = 'block';
        document.title = window.SEITools.document.title;

        var app = new Vue({
            el: document.getElementById('app'),
            data: {
                message: 'Hello Vue!'
            }
        })

        let elmt = document.getElementById('app')
        console.log(elmt)
    });
});
