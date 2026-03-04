import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { examinationHero } from '../common/data/heroData';

const Examination = () => {
    return (
        <div className="bg-white min-h-screen">
            <HeroSection {...examinationHero} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Examination Section</h2>
                    <p className="text-gray-600 text-lg">Access exam schedules, results, and other examination-related information here.</p>
                </div>
                {/* Future content: exam tables/links */}
            </div>
        </div>
    );
};

export default Examination;
