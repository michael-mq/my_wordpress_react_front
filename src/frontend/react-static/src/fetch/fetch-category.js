import axios from 'axios'
import https from 'https'

export const fetchCategory = async categoryID => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  })

  const { data: category } = await axios.get(`https://resi-blog.wordpress.local/wp-json/wp/v2/categories/${categoryID}`, {
    httpsAgent: agent,
  })

  return category
}
