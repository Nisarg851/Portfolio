import BlogIcon from "/blog-icon.svg";
import Tag from "../Common/Tag";

const Blog = (blog) => {
    return (
        <div className="card m-1 rounded-lg w-[98.8%] h-[30%] overflow-clip">
            <div className="p-1.5 w-full h-[80%] overflow-hidden flex flex-col justify-between">
                <div>
                    <a href={blog.blog.blog_link} 
                    className="flex justify-end"
                    target="_blank">
                        <img src={BlogIcon} alt="link to Project"/>
                    </a>
                    <h1 className="mt-2 text-xl leading-none hyphens-auto">{blog.blog.name}</h1>
                </div>
                <p className="description block-ellipsis leading-none hyphens-auto">{blog.blog.description}</p>
            </div>
            <div className="p-1 w-full min-h-[20%] flex flex-wrap gap-1 bg-gray-700 overflow-y-scroll">
                {blog.blog.tags.map((tag, index) => {
                    return <Tag key={index} tag={tag}/>
                })}
            </div>
        </div>
    );
}

export default Blog;