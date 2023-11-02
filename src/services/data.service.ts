import { dispatch, get } from "./api.service"

export const fetchAllCategories = async () => {
    return get("/blog/categories");
}

export const filterPostsByCategory = async (id: string) => {
    return get(`/blog/posts?categoryId=${id}`);
}

export const fetchAllPosts = async () => {
    return get("/blog/posts");
}


export const saveUserInterests = async (requestBody: {
    interests: number[];
}, id: string) => {
    return dispatch(requestBody, `/users/${id}/interests`);
}