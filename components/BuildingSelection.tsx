import React, { useState } from 'react';
import { ArrowLeft, Building2, MapPin } from 'lucide-react';
import { LINKS } from '../constants';

interface BuildingSelectionProps {
    onBack: () => void;
}

type District = '市政中心' | '台灣大道' | '捷運文心';

const DISTRICTS: { id: District; name: string; desc: string }[] = [
    { id: '市政中心', name: '【七期市政中心】', desc: '西屯/南屯核心' },
    { id: '台灣大道', name: '【台灣大道廊道】', desc: '西區/北區金融區' },
    { id: '捷運文心', name: '【捷運文心軸線】', desc: '北屯/南屯發展區' }
];

interface Building {
    name: string;
    status: 'opened' | 'developing';
    lineUrl?: string;
    note?: string;
}

const BUILDINGS: Record<District, Building[]> = {
    '市政中心': [
        { name: '順天經貿大樓 (STTC)', status: 'opened', lineUrl: 'https://lin.ee/ZP3h0Xp', note: '持續配送中' },
        { name: 'NTC 國家商貿中心', status: 'developing' },
        { name: 'CBD 時代廣場', status: 'developing' },
        { name: '鼎盛 BHW', status: 'developing' },
        { name: '親家市政廣場', status: 'developing' },
        { name: '市政都心', status: 'developing' },
    ],
    '台灣大道': [
        { name: '龍邦世貿', status: 'developing' },
        { name: '中港通商', status: 'developing' },
        { name: '亞太雲端', status: 'developing' },
        { name: '世紀金龍', status: 'developing' },
        { name: '遠東金融', status: 'developing' },
    ],
    '捷運文心': [
        { name: '環球企業巨星', status: 'developing' },
        { name: '生產力大樓', status: 'developing' },
        { name: '龍觀天下', status: 'developing' },
        { name: '宏全世界廣場', status: 'developing' },
    ]
};

const BuildingSelection: React.FC<BuildingSelectionProps> = ({ onBack }) => {
    const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleBuildingClick = (building: Building) => {
        if (building.status === 'opened' && building.lineUrl) {
            window.open(building.lineUrl, '_blank');
        } else {
            setShowModal(true);
        }
    };

    return (
        <div className="min-h-screen bg-brand-beige/20 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-brand-red font-medium mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    返回首頁
                </button>

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">你在哪一棟商辦？</h2>
                    <p className="text-lg text-gray-600">選擇您的辦公大樓，開始專屬點餐體驗</p>
                </div>

                {/* Step 1: Select District */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {DISTRICTS.map((district) => (
                        <button
                            key={district.id}
                            onClick={() => setSelectedDistrict(district.id)}
                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 flex items-center ${selectedDistrict === district.id
                                ? 'border-brand-red bg-white shadow-lg transform -translate-y-1'
                                : 'border-white bg-white/60 hover:border-brand-red/30 hover:bg-white text-gray-500'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${selectedDistrict === district.id ? 'bg-brand-red/10 text-brand-red' : 'bg-gray-100 text-gray-400'
                                }`}>
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg ${selectedDistrict === district.id ? 'text-gray-900' : 'text-gray-700'}`}>
                                    {district.name}
                                </h3>
                                <p className="text-sm text-gray-500">{district.desc}</p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Step 2: Select Building */}
                {selectedDistrict && (
                    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <Building2 className="w-6 h-6 mr-3 text-brand-red" />
                            請選擇大樓
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {BUILDINGS[selectedDistrict].map((building, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleBuildingClick(building)}
                                    className={`relative p-5 rounded-xl border-2 text-left flex justify-between items-center transition-all ${building.status === 'opened'
                                        ? 'border-brand-red bg-brand-red/5 hover:bg-brand-red/10 group'
                                        : 'border-gray-100 bg-gray-50 opacity-70 hover:opacity-100 hover:border-gray-300'
                                        }`}
                                >
                                    <div>
                                        <span className={`font-bold text-lg block ${building.status === 'opened' ? 'text-gray-900' : 'text-gray-500'}`}>
                                            {building.name}
                                        </span>
                                        {building.note && (
                                            <span className="text-sm text-brand-red mt-1 inline-block font-medium">✨ {building.note}</span>
                                        )}
                                    </div>

                                    {building.status === 'opened' ? (
                                        <span className="bg-brand-red text-white text-sm font-bold px-4 py-2 rounded-lg group-hover:scale-105 transition-transform shadow-md">
                                            點我點餐
                                        </span>
                                    ) : (
                                        <span className="text-xs text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
                                            連署開發中
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer Process */}
                <div className="mt-16 text-center border-t border-gray-200 pt-12">
                    <p className="text-gray-500 font-medium mb-8">訂餐只需三個簡單步驟</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-bold text-gray-700">
                        <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-2">1</span>
                            加入大樓官方 LINE
                        </div>
                        <div className="hidden sm:block text-gray-300">➜</div>
                        <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-2">2</span>
                            線上付款點餐
                        </div>
                        <div className="hidden sm:block text-gray-300">➜</div>
                        <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-2">3</span>
                            中午大廳憑碼領餐
                        </div>
                    </div>
                </div>

            </div>

            {/* Development Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Building2 className="w-8 h-8 text-brand-dark" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">這棟大樓還差你一票！</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            如有 200+ 位同事參與連署<br />即立刻為您的大樓開通配送服務！
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-xl hover:bg-red-700 transition-colors shadow-lg"
                        >
                            我知道了
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BuildingSelection;
