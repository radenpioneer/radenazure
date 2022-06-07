import rss from '@astrojs/rss'

const allPosts = import.meta.globEager('../contents/**/*.md')
const posts = Object.values(allPosts)
    .filter(post => !post.frontmatter.draft)
    .sort((a,b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf())


export const get = () => rss({
    title: 'radenazure\'s web log',
    description: '',
    site: import.meta.env.SITE,
    items: posts.map(post => ({
        link: post.file.split('/').slice(-2).join('/').replace('.md', ''),
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date
    })),
    stylesheet: '/rss/style.xsl'
})