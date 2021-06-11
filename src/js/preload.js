window.addEventListener("DOMContentLoaded", () => {
    window.stop()
    window.SEITools = {
        document: document.cloneNode(true)
    }

    document.documentElement.removeChild(document.body)
    document.documentElement.removeChild(document.head)

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
        const scripts = [...document.documentElement.getElementsByTagName('script')]


        scripts.map(script => {
            script.src = chrome.runtime.getURL(script.getAttribute('data-src'))
            console.log(script.getAttribute('data-src'))
            return script
        })
        
        document.body.style.display = 'block';
        document.title = window.SEITools.document.title;
    });
});
