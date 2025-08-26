'use client';
import React from 'react';

const benefitsData = {
    headers: ['Benefits', 'P-Tal', 'Stainless Steel', 'PTFE Teflon\nnon-stick', 'Cast Iron', 'Aluminium', 'Ceramics'],
    rows: [
        {
            title: '100% Non Toxic',
            values: [true, true, false, true, false, true],
        },
        {
            title: 'Non-stick',
            values: [true, false, true, false, true, true],
        },
        {
            title: 'Good for health',
            values: [true, true, false, true, false, true],
        },
        {
            title: 'Retains nutrients',
            values: [true, true, false, true, false, true],
        },
        {
            title: 'Heats evenly, cooks faster',
            values: [true, false, true, false, true, true],
        },
        {
            title: 'Lasts for a lifetime',
            values: [true, true, false, true, false, true],
        },
        {
            title: 'Adds flavour to food',
            values: [true, true, false, true, false, true],
        },
    ],
};

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" fill="#139F21" stroke="#139F21" />
        <path d="M6 10L7.45 11.45C8.18 12.18 8.53 12.54 8.97 12.52C9.41 12.5 9.75 12.1 10.4 11.32L14 7" stroke="white" strokeLinecap="round" />
    </svg>
);

const CrossIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#0D0D0D" />
        <path d="M6 6L12 12M12 6L6 12" stroke="#FFF3DA" strokeLinecap="round" />
    </svg>
);

const BenefitsTable = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-sm uppercase text-gray-600">What makes us different</p>
                    <h2 className="text-3xl font-bold text-gray-800">The right choice made easy</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-center">
                        <thead>
                            <tr className="bg-gray-100">
                                {benefitsData.headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className="px-4 py-3 text-sm font-semibold text-gray-700 whitespace-pre-wrap border border-gray-200"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {benefitsData.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-t border-gray-200">
                                    <td className="px-4 py-3 text-sm font-medium text-left text-gray-800 border border-gray-200">
                                        {row.title}
                                    </td>
                                    {row.values.map((val, colIndex) => (
                                        <td key={colIndex} className="px-4 py-3 border border-gray-200">
                                            {val ? <CheckIcon /> : <CrossIcon />}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default BenefitsTable;
