import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { alumniHero } from '../common/data/heroData';

const Alumni = () => {
    return (
        <div className="bg-white min-h-screen">
            <HeroSection {...alumniHero} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Alumni</h2>
                    <p className="text-gray-600 text-lg">Maintaining a strong connection with our graduates and celebrating their professional achievements.</p>
                </div>
                {/* Future content: alumni registration/success stories */}
            </div>
        </div>
    );
};

export default Alumni;
