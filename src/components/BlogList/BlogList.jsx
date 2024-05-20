import { useEffect, useState } from 'react';
import BlogShow from '../BlogShow/BlogShow';
import {
  getBlogData,
  singleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../../API/blogApi';
export default function BlogList() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const getPostData = async () => {
      const data = await getBlogData();
      setData(data);
    };

    getPostData();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      {data.map((post, i) => {
        return <BlogShow post={post} key={i} />;
      })}
    </div>
  );
}
