import ContentLayout from "../Layout/ContentLayout";
import DefaultLayout from "../Layout/DefaultLayout";
import CardAbout from "../Atom/CardAbout";
import Service from "../Atom/Service";
import { Camera, Layout, PenTool } from "react-feather";
function AboutSection() {
  return (
    <DefaultLayout>
      <ContentLayout title="About">
        <section>
          <div className="mb-8">
            <h1 className="text-3xl font-light mb-4">
              Im{" "}
              <span className="font-extrabold">
                <span className="text-amber-500">Eko</span> Setiawan,{" "}
              </span>
              Web Developer / Designer
            </h1>
            <p className="text-slate-500 leading-5">
              I live in Pemalang, Central Java. I have experience in this field
              for more than 4 years since I was still at school, so I can help
              you in working on web development or design projects
              professionally. If you are interested please contact me in the
              contact section. Thank You for your time.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-8  ">
            <div className="bg-stone-900 col-span-2 p-8 grid grid-cols-2 gap-y-10">
              <CardAbout title="4+" paragraph="Years of experience" />
              <CardAbout title="10+" paragraph="Completed projects" />
              <CardAbout title="10+" paragraph="Happy clients" />
              <CardAbout title="SS+" paragraph="Profesional Admin" />
            </div>
            <div className="">
              <h1 className="text-2xl mb-1 font-semibold ">What I Do?</h1>
              <Service Icon={Layout} title="Web Development">
                I can create a website application for your business with
                guaranteed quality
              </Service>
              <Service Icon={PenTool} title="Design">
                solution when you need website design services or high quality
                photos and videos
              </Service>
              <Service Icon={Camera} title="Photography">
                with photography skills that are guaranteed to make your epic
                moments unforgettable
              </Service>
            </div>
          </div>
        </section>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default AboutSection;
