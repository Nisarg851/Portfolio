import BlogIcon from "/blog-icon.svg";
import Tag from "../Common/Tag";

const Blog = (blog) => {
    return (
        <div className="card m-1 rounded-md w-[98.8%] min-h-[30%] flex flex-col overflow-hidden">
            <div className="p-2 flex-grow overflow-hidden flex flex-col justify-between">
                <div>
                    <h1 className="mt-1 text-xl leading-none hyphens-auto flex justify-between">
                        {blog.blog.name}
                        <div className="flex">
                            <a href={blog.blog.source_code}
                            className="px-0.5"
                            target="_blank">
                                <img src={BlogIcon} alt="link to Project"/>
                            </a>
                        </div>
                    </h1>
                </div>
                <p className="block-ellipsis leading-none hyphens-auto">{blog.blog.description}</p>
            </div>
            <div className="p-2 flex flex-wrap gap-1 bg-gray-700">
                {blog.blog.tags.map((tag, index) => {
                    return <Tag key={index} tag={tag}/>
                })}
            </div>
        </div>
    );
}

export default Blog;