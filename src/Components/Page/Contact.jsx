import Input from "../Atom/Input";
import ContentLayout from "../Layout/ContentLayout";
import DefaultLayout from "../Layout/DefaultLayout";
import { Mail, Phone, Linkedin, Instagram } from "react-feather";
import InfoContact from "../Atom/Info";
// emailjs
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ContactSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6b0ws5i", "template_3s6ll8l", form.current, {
        publicKey: "LN4nHpQfssimu9ezl",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <DefaultLayout>
      <ContentLayout title="Contact" style="max-md:px-4">
        <main className="flex justify-between gap-8 max-md:flex-col">
          <aside data-aos="fade-right" className=" w-2/3 max-md:w-full">
            <p className="font-medium text-slate-500">
              Feel free to contact me any time. i will get back to you as soon
              as possible
            </p>
            <form className="flex flex-col " ref={form} onSubmit={sendEmail}>
              <Input type="text" name="name" />
              <Input type="email" name="email" />
              <Input type="text" name="message" />
              <button
                type="submit"
                className="bg-stone-900 text-slate-100 py-2 rounded-sm mt-4 hover:bg-stone-800 active:translate-x-0.5 active:translate-y-0.5 tracking-widest"
              >
                SEND
              </button>
            </form>
          </aside>
          <aside
            data-aos="fade-left"
            className="bg-stone-900 text-slate-100 p-4  flex flex-col gap-4 w-1/3 max-md:w-full"
          >
            <h1 className="text-3xl font-semibold">Info</h1>
            <div className="flex flex-col gap-4">
              <InfoContact Icon={Mail}>ekosetia1yt@gmail.com</InfoContact>
              <InfoContact Icon={Phone}>+62 895 3842 34650</InfoContact>
              <InfoContact Icon={Linkedin}>Eko Setiawan</InfoContact>
              <InfoContact Icon={Instagram}>@eko_setiia1</InfoContact>
            </div>
          </aside>
        </main>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default ContactSection;
