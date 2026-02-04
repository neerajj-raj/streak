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
 * @author !ndrajit
 */

interface QuickContactProps {
  common: {
    contact: {
      phone: string;
      email: string;
    };
  };
}

const QuickContact = (props: QuickContactProps) => {
  const { common } = props || {};
  const contactInfo = common?.contact || {};
  const contactPhone = contactInfo?.phone || "+971504004007";
  const contactEmail = contactInfo?.email || "";

  return (<section className="bg-gray-900 py-12 lg:py-20 xl:py-24 px-6 md:px-12">
    <div className="container">
      <div className="text-center mb-12 xl:mb-16">
        <div className="inline-flex items-center gap-2 mb-3 max-md:hidden">
          <span className="w-3 h-3 rounded-full border-3 border-primary animate-pulse" />
          <span className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-300">
            What you have in mind, we’ll source it for you.
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-white mb-4">
          Looking for Something Specific?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-end">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <a href={`tel:${contactPhone}`}
                aria-label="Call Oscar Luxury Auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone w-5 h-5 text-primary"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase">Phone</p>
              <a
                href={`tel:${contactPhone}`}
                className="text-white font-semibold text-lg hover:text-primary"
              >
                {contactPhone?.replace(
                  /^(\+\d{5})(\d{3})(\d{4})$/,
                  "$1 $2 $3"
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            type="button"
            className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60 rounded-lg 2xl:rounded-xl px-10 py-3 2xl:py-4 w-full md:w-auto border border-white text-white hover:bg-white/10"
            href="http://oscarluxury.com/contact-us/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square-plus h-4 w-4"
              aria-hidden="true"
            >
              <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
              <path d="M12 8v6" />
              <path d="M9 11h6" />
            </svg>
            Contact Us
          </a>
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">

              <a
                href={`mailto:${contactEmail}`}
                className="text-white font-semibold text-lg hover:text-primary"
                aria-label="Email Oscar Luxury Auto"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-5 h-5 text-primary"
                aria-hidden="true"
              >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x={2} y={4} width={20} height={16} rx={2} />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase">Email</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-white font-semibold text-lg hover:text-primary"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default QuickContact;
