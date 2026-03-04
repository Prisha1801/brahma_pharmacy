import React from 'react';

const InfoBar = () => {
    return (
        <div className="bg-gradient-to-b from-[#1f4e79] to-[#123a5c] text-white py-6">
            <div className="container mx-auto px-4 text-center">

                {/* Trust Name */}
                <p className="uppercase font-semibold tracking-widest text-white/80 text-sm md:text-base mb-2">
                    NASHIK GRAMIN SHIKSHAN PRASARAK MANDAL'S
                </p>

                {/* College Name */}
                <h1 className="font-extrabold text-xl md:text-3xl lg:text-4xl tracking-wide mb-3">
                    BRAHMA VALLEY INSTITUTE OF PHARMACY
                </h1>

                {/* Approval Text */}
                <p className="text-white/90 text-sm md:text-base max-w-5xl mx-auto leading-relaxed">
                    Approved by Pharmacy Council of India (PCI), New Delhi, and DTE Mumbai,
                    recognized by the Government of Maharashtra, affiliated to
                    Dr. Babasaheb Ambedkar Technological University, Lonere
                </p>

                {/* Codes */}
                <p className="mt-3 text-sm md:text-base font-medium">
                    <span className="font-semibold">Choice Code:</span> 550582310
                    <span className="mx-2">|</span>
                    <span className="font-semibold">DTE Code:</span> 5505
                </p>

            </div>
        </div>
    );
};

export default InfoBar;