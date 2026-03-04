import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { approvalsHero } from '../common/data/heroData';

const Approvals = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* HERO SECTION */}
            <HeroSection {...approvalsHero} />

            {/* Content can be added here later */}
            <div className="py-20 text-center text-gray-400">
                <p>Approval documents and affiliation details will be displayed here.</p>
            </div>
        </div>
    );
};

export default Approvals;
