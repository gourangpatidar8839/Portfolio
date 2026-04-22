import { ContactForm } from "@/components/forms/ContactForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-[2rem] bg-peach p-8 md:p-14">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Newsletter */}
            <div className="md:col-span-5">
              <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
                Newsletter
              </p>
              <h2 className="headline mt-3 text-3xl md:text-4xl">
                Get the next post in your inbox.
              </h2>
              <p className="mt-3 text-ink/80">
                Once or twice a month — practical notes on building with LLMs,
                evals, and AI infra. No fluff.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-7">
              <p className="text-sm font-bold uppercase tracking-tight text-ink/60">
                Contact
              </p>
              <h2 className="headline mt-3 text-3xl md:text-4xl">
                Or send me a message directly.
              </h2>
              <div className="mt-6 rounded-2xl bg-bg/70 p-6 md:p-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
