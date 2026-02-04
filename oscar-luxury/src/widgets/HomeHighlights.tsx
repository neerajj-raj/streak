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

import NetworkIcon from "@common/icons/NetworkIcon";
import ShieldCheck from "@common/icons/ShieldCheck";
import Smile from "@common/icons/Smile";
import Wallet from "@common/icons/Wallet";
import ZapIcon from "@common/icons/ZapIcon";

const HomeHighlights = () => {
  return (
    <section className="w-full bg-black px-4 md:px-6 xl:px-10 py-2 md:py-6 lg:py-12">
      <div className="grid grid-cols-2 rounded-2xl bg-black md:grid-cols-4 xl:grid-cols-5 md:divide-x md:divide-white/10">
        <div className="flex items-start gap-4 py-5 md:px-6 md:py-0 max-xl:hidden">
          <div className="flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
            <ShieldCheck className="h-5 w-5 lg:h-6 lg:w-6 text-orange-400" />
          </div>
          <div>
            <p className="text-sm xl:text-xl font-bold tracking-wide text-white">
              VERIFIED <br /> INVENTORY
            </p>
            <p className="mt-1 text-xs text-white/60 max-xl:hidden">Luxury-only cars inspected and authenticated</p>
          </div>
        </div>

        <div className="flex items-start gap-3 lg:gap-4 py-5 md:px-6 md:py-0">
          <div className="flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
            <Wallet className="h-5 w-5 lg:h-6 lg:w-6 text-orange-400" />
          </div>
          <div>
            <p className="text-sm xl:text-xl font-bold tracking-wide text-white">
              TRANSPARENT <br /> PRICING
            </p>
            <p className="mt-1 text-xs text-white/60 max-xl:hidden">Clear valuations with no hidden margins</p>
          </div>
        </div>

        <div className="flex items-start gap-4 py-5 md:px-6 md:py-0">
          <div className="flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
            <NetworkIcon className="h-5 w-5 lg:h-6 lg:w-6 text-orange-400" />
          </div>
          <div>
            <p className="text-sm xl:text-xl font-bold tracking-wide text-white">
              EXCLUSIVE <br /> SOURCING
            </p>
            <p className="mt-1 text-xs text-white/60 max-xl:hidden">Access to rare and private luxury listings</p>
          </div>
        </div>

        <div className="flex items-start gap-4 py-5 md:px-6 md:py-0">
          <div className="flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
            <ZapIcon className="h-5 w-5 lg:h-6 lg:w-6 text-orange-400" />
          </div>
          <div>
            <p className="text-sm xl:text-xl font-bold tracking-wide text-white">
              FAST <br /> TRANSACTIONS
            </p>
            <p className="mt-1 text-xs text-white/60 max-xl:hidden">Seamless paperwork and quick closures</p>
          </div>
        </div>

        <div className="flex items-start gap-4 py-5 md:px-6 md:py-0">
          <div className="flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
            <Smile className="h-5 w-5 lg:h-6 lg:w-6 text-orange-400" />
          </div>
          <div>
            <p className="text-sm xl:text-xl font-bold tracking-wide text-white">
              TRUSTED <br /> IN UAE
            </p>
            <p className="mt-1 text-xs text-white/60 max-xl:hidden">Preferred by luxury buyers and sellers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;
