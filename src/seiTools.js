class SeiTools {

  constructor (document) {
      this.document = document;
  }

  getMenuTree() {
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
        };
        if (submenu.length !== 0) {
          data.submenu = navigate(submenu[0]);
        }
        result.push(data);
        return result;
      }, [])
      return items;
    }
    return navigate(this.document.getElementById('main-menu'))
  }

  getUnits() {
    return [...this.document.getElementById('selInfraUnidades').options].map(option => {
      return {
        id: option.value,
        name: option.text
      }
    });
  }

  getTootipData(content) {
    const matchs = content.match(/'([^']*)'/g);
    return {
      title: matchs[0] ? matchs[0].replaceAll("'", '') : '',
      description: matchs[1] ? matchs[1].replaceAll("'", '') : '',
    };
  }

  getProcesses() {
    let received = [...this.document.getElementById('tblProcessosRecebidos').getElementsByTagName('tr')]
    let generated = [...this.document.getElementById('tblProcessosGerados').getElementsByTagName('tr')]

    const parseContent = (processes, type) => {
      return processes.reduce((result, item) => {
        item = [...item.getElementsByTagName('td')]
        if (item.length === 0) {
          return result;
        }
        const process = item[2].getElementsByTagName('a')[0];
        const content = this.getTootipData(process.getAttribute('onmouseover'));

        const tags = [...item[1].getElementsByTagName('a')].map(tag => {
          return this.getTootipData(tag.getAttribute('onmouseover'))
        })

        result.push({
          type: type,
          number: process.textContent,
          unread: !process.classList.contains('processoVisualizado'),
          content: content,
          tags: tags,
          user: item[3].textContent.replace('(', '').replace(')', '').trim()
        });
        return result;
      }, [])
    }

    received = parseContent(received, 'received')
    generated = parseContent(generated, 'generated')

    return received.concat(generated)
  }
}

export { SeiTools }
