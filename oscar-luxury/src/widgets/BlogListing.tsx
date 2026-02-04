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

import ArrowRight from "@common/icons/ArrowRight";
import Calendar from "@common/icons/Calendar";
import { hasArrayElements } from "@utils/commonUtils";

type BlogType = {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

interface BlogsListingProps {
  data: {
    blogs: BlogType[];
  };
}

const BlogListing = (props: BlogsListingProps) => {
  const { blogs } = props?.data || {};

  return (
    hasArrayElements(blogs) && (
      <section className="w-full bg-white py-12 lg:py-20 xl:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogs?.map((blog) => (
              <BlogCard {...blog} />
            ))}
          </div>
          {/* TO DO: PHASE2 */}
          {/* <div className="flex w-full justify-center mt-6 lg:mt-10 xl:mt-16">
            <Button onClick={() => setShowAll(true)}>Vew All Blogs</Button>
          </div> */}
        </div>
      </section>
    )
  );
};

export default BlogListing;

const BlogCard = (props: BlogType) => {
  const { image, title, excerpt, href, date } = props || {};
  const hasImage = typeof image === "string" && image?.trim().length > 0;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
      {hasImage && (
        <div className="relative aspect-16/10 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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
      )}

      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>

        <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-slate-900">{title}</h2>

        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600">{excerpt}</p>

        <a href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-slate-700">
          Learn more
          {/* For seo */}
          <span
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            {`about ${title}`}
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};
