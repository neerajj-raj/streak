
import Form from "@common/components/contact/Form";
import Address from "@common/components/contact/Address";

export default function Contact() {
  return (
    <section className="w-full bg-white">
      <div className="container py-12 lg:py-20 xl:py-24">
        <div className="text-start mb-8 lg:mb-10 xl:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 max-md:hidden">
            <span className="w-3 h-3 rounded-full border-3 border-secondary animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.35em] uppercase">
              contact us
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-secondary font-extrabold text-black tracking-wide xl:text-5xl">
            <span className="text-secondary-dark">{" "}Get in Touch{" "}</span>
            with Us
          </h2>
          <p className="mt-4 text-gray-600">
            Speak with our team or visit our showroom to begin your luxury automotive journey.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Form />
          <div className="xl:col-span-2">
            <Address />
          </div>
        </div>
      </div>
    </section>
  );
}
