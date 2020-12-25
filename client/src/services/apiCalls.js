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

export const getMessages = async () => {
  try {
    const response = await api.get('/messages')
    return response.data
  } catch (error) {
    throw error
  }
}

export const sendMessage = async (message) => {
  try {
    const response = await api.post('/messages', message)
    return response.data
  } catch (error) {
    throw error
  }
}

export const sendRequest = async (request) => {
  try {
    const response = await api.post('/requests', request)
    return response.data
  } catch (error) {
    throw error
  }
}