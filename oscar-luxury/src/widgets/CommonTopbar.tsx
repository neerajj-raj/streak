/*
 * Copyright(c) 2025 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Neeraj
 */

import ClockIcon from "@common/icons/ClockIcon";
import FacebookIcon from "@common/icons/FacebookIcon";
import InstagramIcon from "@common/icons/InstagramIcon";
import MailIcon from "@common/icons/MailIcon";
import YoutubeIcon from "@common/icons/YoutubeIcon";

const CommonTopbar = () => {
  return (
    <div className="flex w-full bg-black text-white text-sm font-semibold topbar-height border-b border-white/10">
      <div className="container w-full flex items-center justify-between">
        <div className="flex max-md:w-full items-center max-md:justify-between max-sm:text-xs flex-wrap max-md:py-3 max-md:gap-y-2 gap-6">
          <div className="flex items-center gap-2">
            <ClockIcon size={16} />
            <span>
              Mon<span className="max-md:hidden">day</span> - Sat<span className="max-md:hidden">urday</span> : 10am - 8pm
            </span>
          </div>
          <div className="flex items-center gap-2 hover:text-primary">
            <MailIcon size={16} />
            <a href="mailto:sales@oscarluxury.com">Sales@oscarluxury.com</a>
          </div>
        </div>
        <div className="flex items-center gap-4 max-md:hidden">
          <a href="https://www.facebook.com/people/Oscar-Luxury-Auto/61551636414294/?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/oscarluxuryauto/?igsh=MWNueDExcDM5eThibA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/@OSCARLUXURYAUTO" target="_blank" rel="noopener noreferrer">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommonTopbar;
