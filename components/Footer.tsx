import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACTS, LINKS } from '../constants';
import type { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">商辦駝獸</span>
              <span className="ml-2 text-xs bg-brand-red px-2 py-0.5 rounded text-white font-medium">Office Camel</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              專注於商辦大樓的午餐合單平台。<br />
              我們相信，吃得好、省得多，工作效率會更好。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-beige">快速連結</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('buildingSelection')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  商辦員工訂餐 (Line)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('buildingIntake')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  公司行政申請進駐
                </button>
              </li>
              <li>
                <a href={LINKS.restaurantLine} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  餐廳夥伴加盟 (Line)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-beige">聯繫我們</h4>
            <div className="flex flex-col sm:flex-row gap-8">
              {CONTACTS.map((contact, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-start">
                    <UserIcon className="w-5 h-5 text-brand-red mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">合作聯繫專員</p>
                      <p className="text-white font-medium">{contact.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-brand-red mr-3" />
                    <a href={`tel:${contact.phone.replace('-', '')}`} className="text-white hover:text-brand-yellow transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                  {contact.line && (
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 text-[#06C755] mr-3" />
                      <a href={contact.line} target="_blank" rel="noreferrer" className="text-white hover:text-brand-yellow transition-colors">
                        加 LINE 好友
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 商辦駝獸 Office Camel. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="hover:text-white cursor-pointer">隱私權政策</span>
            <span className="hover:text-white cursor-pointer">服務條款</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
)

export default Footer;
