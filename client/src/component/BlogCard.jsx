import PropTypes from "prop-types";

export default function BlogCard({ blog }) {
  //should show the blog with title descroptiopn and author name
  return (
    <div className="flex justify-center items-center w-screen mb-3">
      <div className="flex justify-between bg-slate-800 p-5 rounded-xl shadow-2xl w-4/6  ">
        <div>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-xl  text-gray-300">{blog.content}</p>
          <span className="text-sm text-gray-500">{blog.author.fullName}</span>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400">
            Edit
          </button>
          <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
