function getMenuTree() {
  const navigate = (menu) => {
    let items = [...menu.getElementsByTagName('li')].reduce((result, item) => {
      if (item.parentNode !== menu) {
        return result;
      }
      const anchor = item.getElementsByTagName('a')[0];
      const submenu = item.getElementsByTagName('ul');
      const data = {
        name: anchor.textContent.replace('+', ''),
        link: anchor.href
      }
      if (submenu.length !== 0) {
        data.submenu = navigate(submenu[0])
      }
      result.push(data)
      return result
    }, [])
    return items;
  }
  return navigate(document.getElementById('main-menu'))
}

window.seiToolsCore.menu = getMenuTree()

