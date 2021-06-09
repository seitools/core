window.addEventListener("DOMContentLoaded", () => {
    window.SEITools = {
        document: document.cloneNode(true)
    }
    const styles = [...window.document.getElementsByTagName('link')]
    const scripts = [...window.document.getElementsByTagName('script')]

    styles.map((link) => {
        link.href = link.href.includes('?') ? link.href + '&seiTools=1' : link.href + '?seiTools=1'
        return link
    })

    scripts.map((script) => {
        script.src = link.href.includes('?') ? script.src + '&seiTools=1' : script.src + '?seiTools=1'
        return link
    })
    //window.document.body.innerHTML = '';
    //window.document.body.setAttribute('onload', '');
});
