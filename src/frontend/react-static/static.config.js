import axios from 'axios'
import { fetchCategory } from './src/fetch/fetch-category'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const news = await fetchCategory(45)

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/news',
        component: 'src/containers/News',
        getData: () => ({ news }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
