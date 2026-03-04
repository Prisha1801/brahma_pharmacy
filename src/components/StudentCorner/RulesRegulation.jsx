import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { rulesRegulationHero } from '../common/data/heroData';

const RulesRegulation = () => {
    return (
        <div className="bg-white min-h-screen">
            <HeroSection {...rulesRegulationHero} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Rules & Regulations</h2>
                    <p className="text-gray-600 text-lg">Guidelines and policies to ensure a disciplined and professional environment at the institute.</p>
                </div>
                {/* Future content: rules list */}
            </div>
        </div>
    );
};

export default RulesRegulation;
