import { Button } from "@radix-ui/themes";
import Layout from "../layout/Layout";
import { BiSolidSend } from "react-icons/bi";

export function Contact() {
  return (
    <Layout>
      <div>
        <div className="mx-auto max-w-[144p0x] px-4">
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="mx-auto max-w-max rounded-full border bg-[#E93D83] p-1 px-3">
              <p className="text-center text-xs text-white font-semibold leading-normal md:text-sm">
                Get in Touch
              </p>
            </div>
            <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              We'd Love to Hear from You!
            </p>
            <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
              Have a question, feedback, or just want to say hello? Feel free to
              reach out to us.
            </p>
          </div>
          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* Contact form */}
              <div className="flex items-center justify-center">
                <div className="px-2 md:px-12">
                  <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                    Contact Us
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    Our friendly team is here to assist you.
                  </p>
                  <form
                    action=""
                    className="mt-8 space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div className="grid w-full items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700"
                          htmlFor="first_name"
                        >
                          First Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700"
                          htmlFor="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        type="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="phone_number"
                      >
                        Phone Number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        type="tel"
                        id="phone_number"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        id="message"
                        placeholder="Leave us a message"
                        cols={3}
                      />
                    </div>
                    <Button className="py-6 w-full" size={"3"}>
                      Send Message <BiSolidSend size={24} />
                    </Button>
                  </form>
                </div>
              </div>
              <img
                alt="Contact us"
                className="hidden max-h-[480px] w-full rounded-lg object-cover lg:block"
                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
