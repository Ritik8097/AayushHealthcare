import React, { useRef, useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp ,} from 'react-icons/fa';

const AccordionItem = ({ handleToggle, active, faq }) => {
    const contentEl = useRef(null);
    const [height, setHeight] = useState("0px");

    const { header, id, text } = faq;

    // Ensure height is updated when active changes
    useEffect(() => {
        if (active === id && contentEl.current) {
            setHeight(`${contentEl.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [active, id]);

    // Sort text array in descending order based on 'head'
   const sortedText = Array.isArray(text) ? text : [];

    return (
        <div className="rc-accordion-card !mb-0 !rounded-none">
            <div className="rc-accordion-header">
                <div
                    className={`rc-accordion-toggle !items-center p-8 h-[71px] flex justify-between cursor-pointer ${active === id ? 'active' : ''}`}
                    onClick={() => handleToggle(id)} style={{
                        backgroundColor: "#f4f6f8", // No color change
                       
                    }}
                >
                    <h5 className="rc-accordion-title !text-[26px] font-black !text-black" style={{ color: "#000 !important" }}>{header}</h5>
                    {active === id ? (
                        <FaChevronUp className="rc-accordion-icon !text-black" size={16} />
                    ) : (
                        <FaChevronDown className="rc-accordion-icon !text-black" size={16} />
                    )}
                </div>
            </div>
            
           {/* Accordion Content */}
           <div
                ref={contentEl}
                className="rc-collapse overflow-hidden transition-all duration-300 ease-in-out"
                style={{ height: height, transition: "height 0.3s ease-in-out" }}
            >
                <div className="rc-accordion-body">
                    {sortedText.map((item, index) => (
                        <div key={index} className="pt-3">
                            <h1 className="text-xlg font-bold">{item.header}</h1>
                            <div className="text-sm pt-2 font-bold">
                                <h1>{item.quarter}</h1>
                            </div>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block pt-2 !text-[#5f95cf] text-[18px]"
                            >
                                <a href={item.link} download className="text-blue-500 pr-5 mt-3">
                                    <img 
                                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/download.png?v=1741595144" 
                                        alt="Download Icon" 
                                        className="w-15 h-15"
                                    />
                                </a>
                                {item.head}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
