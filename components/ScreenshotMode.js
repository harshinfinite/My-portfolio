"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function ScreenshotMode({ isOpen, onClose, title, images }) {
    // Close the modal if the user presses the 'Escape' key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            // Prevent scrolling on the body while the modal is open
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-[60] text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all"
                aria-label="Close modal"
            >
                <FaTimes size={24} />
            </button>

            {/* Scrollable Container */}
            <div className="w-full max-w-5xl h-full overflow-y-auto scrollbar-hide rounded-xl bg-[#0a0a0a] border border-white/10 relative">

                <div className="sticky top-0 z-10 w-full bg-black/80 backdrop-blur-md border-b border-white/10 p-5">
                    <h2 className="text-xl md:text-2xl font-bold">{title} - Screenshots</h2>
                </div>

                {/* List of Images */}
                <div className="flex flex-col gap-8 p-4 md:p-8">
                    {images.map((imgSrc, index) => (
                        <div key={index} className="relative w-full rounded-lg overflow-hidden border border-white/10">
                            <Image
                                src={imgSrc}
                                alt={`Screenshot ${index + 1}`}
                                width={1920}
                                height={1080}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
