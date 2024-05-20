const baseUrl = 'https://blog-1-ty3q.onrender.com/blog';
// const baseUrl = 'http://localhost:4000/blog';

const getBlogData = async () => {
  const res = await fetch(baseUrl);
  const data = await res.json();

  return data;
};

const singleBlog = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`);
  const data = await res.json();

  return data;
};

const createBlog = async (blogData) => {
  const res = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(blogData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};

const updateBlog = async (blogData) => {
  const res = await fetch(`${baseUrl}/${blogData._id}`, {
    method: 'PATCH',
    body: JSON.stringify(blogData),
    headers: {
      'content-type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
};

const deleteBlog = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};

export { getBlogData, singleBlog, createBlog, updateBlog, deleteBlog };
