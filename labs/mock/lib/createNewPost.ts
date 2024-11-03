import mockData from '../../mock.json';

export function createNewPost(newPost: { id: string; title: string; content: string; upvotes: number; downvotes: number }) {
    mockData.mockPosts.push(newPost);
    return newPost;
}