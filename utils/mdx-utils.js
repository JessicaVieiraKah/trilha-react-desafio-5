import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/posts'); 

    if (data) {
        return data;
    }

    return [];
}

export const getPostBySlug = async (id) => {
    // BUSCAR UM POST EM ESPECÍFICO.
    const { data } = await api.get(`/posts/${id}`);

    if (data) {
        return data;
    }

    return {};
}
