import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CTO at TechSolutions Inc.",
        content: "Working with Mobarak was an absolute pleasure. His expertise in the MERN stack helped us deliver our project 2 weeks ahead of schedule. The code quality was exceptional and his problem-solving skills are top-notch.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager at DevCraft",
        content: "Mobarak transformed our legacy application into a modern, performant web app. His attention to detail and clean code practices set a new standard for our team. Highly recommended for complex full-stack projects.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Founder at StartupHub",
        content: "As a non-technical founder, I needed someone who could understand my vision and execute it flawlessly. Mobarak not only delivered beyond expectations but also educated me about best practices along the way.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 4,
        name: "David Kim",
        role: "Lead Developer at WebForge",
        content: "Rarely do you find developers who combine technical excellence with great communication. Mobarak is one of them. His React components were so well-structured that we've adopted them as our internal standard.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        id: 5,
        name: "Lisa Wong",
        role: "UX Designer at PixelPerfect",
        content: "Collaborating with Mobarak on our design system implementation was seamless. He understands the importance of UI/UX principles and implements designs with pixel-perfect precision.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            {/* Background elements */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl opacity-10 dark:opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple-500 blur-3xl opacity-10 dark:opacity-20"></div>
            </motion.div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading">
                        <span className="gradient-text">Client Testimonials</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        What people say about working with me
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Testimonial Slider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.testimonial-pagination',
                            bulletClass: 'testimonial-bullet',
                            bulletActiveClass: 'testimonial-bullet-active'
                        }}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next'
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                        className="pb-16"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full border border-gray-200 dark:border-gray-700 flex flex-col"
                                >
                                    <Quote className="text-blue-500 dark:text-blue-400 mb-4 opacity-30" size={48} />

                                    <div className="flex-grow">
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex items-center mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={18}
                                                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}
                                                />
                                            ))}
                                        </div>

                                        <div className="flex items-center">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-400"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <button className="testimonial-prev bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                            <ChevronLeft className="text-gray-700 dark:text-gray-300" />
                        </button>

                        <div className="testimonial-pagination flex space-x-2 mx-4"></div>

                        <button className="testimonial-next bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                            <ChevronRight className="text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
        .testimonial-bullet {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #e5e7eb;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .testimonial-bullet-active {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet {
          background: #e5e7eb;
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
        }
        
        @media (max-width: 768px) {
          .testimonial-bullet {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
        </section>
    );
};

export default Testimonials;