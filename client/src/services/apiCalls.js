import api from './apiConfig';

export const getArtists = async () => {
  try {
    const response = await api.get('/artists')
    return response.data
  }
  catch (error) {
    throw error
  }
}

export const getArtist = async id => {
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createArtist = async post => {
  try {
    const response = await api.post('/artists', post)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateArtist = async (id, post) => {
  try {
    const response = await api.put(`/artists/${id}`, post)
    return response.data
  } catch (error) {
    throw error
  }
} 

export const deleteArtist = async id => {
  try {
    const response = await api.delete(`/artists/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}