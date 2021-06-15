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

    fetch(chrome.runtime.getURL('index.html')).then(r => r.text()).then(html => {
        document.write(html)
        const script = document.documentElement.getElementsByTagName('script')[0]
        script.src = chrome.runtime.getURL(script.getAttribute('data-src'))
        script.addEventListener('load', () => {
            window.postMessage('data', "*");
        })
        document.body.style.display = 'block';
    });
});
