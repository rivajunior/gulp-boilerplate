import fs from 'fs'

const company = {
  name: '',
  slogan: ''
}
const product = {
  name: '',
  slogan: ''
}

export default {
  publicURL: function() {
    return this.ctx.config.isProduction() ? 'https://example.com' : ''
  },
  company: {
    ...company,
    url: 'https://',
    address: {
      text: '',
      link: 'https://www.google.com/maps?cid=',
      image: {
        x1: 'images/',
        x2: 'images/'
      }
    },
    logo: {
      alt: `${company.name} · ${company.slogan}`,
      light: {
        x1: 'images/',
        x2: 'images/'
      },
      dark: {
        x1: 'images/',
        x2: 'images/'
      }
    }
  },
  product: { ...product },
  og: {
    siteName: company.name,
    locale: 'pt-BR'
  },
  maskIcon: '#',
  tileColor: '#',
  themeColor: '#',
  fbAppID: '',
  appName: company.name,
  author: 'Riva Junior',
  gtmID: 'GTM-',
  currentYear: new Date().getFullYear(),
  asset: function(fileName) {
    const ctx = this.ctx

    if (!fs.existsSync(`${ctx.config.paths.base.dest}/${fileName}`)) {
      console.error(`Arquivo ${fileName} não escontrado.`)

      return ''
    }

    if (ctx.config.isProduction()) {
      const fileNameRevisioned = ctx[fileName]

      if (!fileNameRevisioned) {
        console.error(
          `Arquivo ${fileName} não escontrado no manifesto. Verifico se o mesmo está sendo versionado ou se existe.`
        )

        return ''
      }

      return `${
        ctx.config.isProduction() ? ctx.publicURL : ''
      }${fileNameRevisioned}`
    }

    return fileName
  }
}
