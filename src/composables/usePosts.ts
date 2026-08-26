export const usePosts = () => {
  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return data
  }

  return {
    getPosts,
  }
}
