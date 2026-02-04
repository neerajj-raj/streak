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

import { Anchor } from "@common/components/Anchor";
import ArrowLeft from "@common/icons/ArrowLeft";
import Calendar from "@common/icons/Calendar";
import CheckCircle from "@common/icons/CheckCircle";

const BlogDetails = () => {
  return (
    <section className="w-full bg-white py-12 lg:py-20 xl:py-24">
      <div className="container">
        <div className="mb-8 lg:mb-10 xl:mb-16 text-center xl:max-w-2xl xl:mx-auto">
          <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-gray-900 tracking-wide xl:text-5xl leading-snug">
            Choosing the Right <span className="text-secondary-dark">Luxury Car for UAE Roads</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 xl:mt-6 max-md:hidden">
            <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-500">Insights from Oscar Luxury Auto LLC</span>
          </div>
        </div>

        <div className="mx-auto xl:w-10/12">
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
            <img
              src="/images/blogs/blog-1.webp"
              alt="How to choose the right luxury car for UAE roads"
              className="object-cover"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
            />
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>12 Jan 2026</span>
            </div>
            <span className="font-medium text-secondary-dark">Oscar Luxury</span>
          </div>

          <h2 className="mb-6 text-2xl font-bold leading-tight text-gray-900 md:text-3xl xl:text-4xl">How to choose the right luxury car for UAE roads</h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              Choosing the right luxury car in the UAE involves more than visual appeal. Climate conditions, road quality, and driving lifestyle all influence
              which vehicle best suits your needs.
            </p>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Understand UAE road and climate conditions</h3>
              <p>
                High temperatures and long-distance driving demand vehicles with efficient cooling systems, reliable engines, and premium interiors designed for
                comfort and durability.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Choose the right body type</h3>
              <p>
                SUVs remain the most popular choice in the UAE due to their presence, space, and adaptability, while luxury sedans and coupes appeal to drivers
                who prioritize refinement and performance.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-secondary-dark" />
                  <span>Luxury SUVs for comfort and versatility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-secondary-dark" />
                  <span>Sedans for smooth city and highway driving</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900">New vs pre-owned luxury vehicles</h3>
              <p>
                Pre-owned luxury cars offer excellent value, allowing buyers to access higher specifications and premium brands while avoiding steep initial
                depreciation.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Why choose Oscar Luxury & Oscar Legacy</h3>
              <p>
                At Oscar Luxury, we focus on premium vehicles curated for UAE roads, while Oscar Legacy specializes in rare and collectible models that retain
                long-term value.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-secondary-dark" />
                  <span>Carefully curated and inspected vehicles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-secondary-dark" />
                  <span>Transparent ownership and service history</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 sm:flex-row">
            <a href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </a>
            <Anchor href="/inventory" className="rounded-full px-8">
              Explore Our Collection
            </Anchor>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
