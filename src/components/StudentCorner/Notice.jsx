import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { noticeHero } from '../common/data/heroData';

const Notice = () => {
    return (
        <div className="bg-white min-h-screen">
            <HeroSection {...noticeHero} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Notices</h2>
                    <p className="text-gray-600 text-lg">Stay updated with the latest announcements and notices from Brahma Valley Institute of Pharmacy.</p>
                </div>
                {/* Future content: list of notices/PDFs */}
            </div>
        </div>
    );
};

export default Notice;
