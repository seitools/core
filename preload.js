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
        styles.map(link => {
            link.href = chrome.runtime.getURL(link.getAttribute('href'))
            return link
        })
        document.body.style.display = 'block';
        document.title = window.SEITools.document.title;
    });
});
