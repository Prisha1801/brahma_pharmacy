import React from 'react';

function News() {
    const newsItems = [
        { src: '/news/news1.webp', alt: 'News & Events 1' },
        { src: '/news/news2.webp', alt: 'News & Events 2' },
        { src: '/news/news3.webp', alt: 'News & Events 3' },
        { src: '/news/news4.webp', alt: 'News & Events 4' },
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">

                {/* News & Events Header */}
                <h2 className="text-center text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    News & Events
                </h2>
                <div className="mx-auto mb-10" style={{ width: '80px', height: '3px', backgroundColor: '#ea1f28' }}></div>

                {/* News Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                    {newsItems.map((newsItem, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 flex items-center justify-center h-full max-w-sm mx-auto shadow-[0_4px_15px_-2px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
                        >
                            <img
                                src={newsItem.src}
                                alt={newsItem.alt}
                                className="w-full h-auto object-contain max-h-[350px]"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default News;