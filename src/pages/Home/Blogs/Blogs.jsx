import React from "react";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaClock,
    FaBookOpen,
} from "react-icons/fa";

// Only 3 blog entries shown
const blogs = [
    {
        id: 1,
        title: "Mastering React Performance Optimization",
        excerpt: "Advanced tips for improving performance in large-scale React apps.",
        date: "May 15, 2023",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1064&q=80",
    },
    {
        id: 2,
        title: "Scalable Node.js Microservices with Docker",
        excerpt: "A practical guide to building scalable backend systems using Node.js.",
        date: "June 22, 2023",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 3,
        title: "JWT Authentication Best Practices",
        excerpt: "Learn how to implement secure authentication using JSON Web Tokens.",
        date: "July 5, 2023",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1170&q=80",
    },
];

const BlogCard = ({ blog, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white dark:bg-gray-900"
    >
        <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
        />

        <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {blog.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {blog.excerpt}
            </p>

            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" />
                    {blog.date}
                </span>
                <span className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    {blog.readTime}
                </span>
            </div>

            <a
                href="#"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
                <FaBookOpen className="mr-2" />
                Read Article <FaArrowRight className="ml-2" />
            </a>
        </div>
    </motion.div>
);

const Blogs = () => {
    return (
        <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading">
                        <span className="gradient-text">Blog Posts</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
                        Articles, tutorials, and insights on web development and system design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
