"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import data from "@/data/data"; 


export default function Hero() {

  const CopyEmailClick = () => (
    navigator.clipboard.writeText(data.socialLinks.gmail).then(() => alert('Gmail copied to clipboard!'))
  );

  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 relative">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden">
            <Image
              src={data.image}
              alt="Profile Picture"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 md:mt-0 md:ml-16 lg:ml-20 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
            {data.name}
          </h1>
          <p className="large-text text-justify text-gray-600 max-w-xl leading-relaxed text-lg mt-2">
            {data.about_full}
          </p>
          <p className="small-text text-justify text-gray-600 max-w-xl leading-relaxed text-lg mt-2">
            {data.about_short}
          </p>
          <p className="xs-text text-justify text-gray-600 max-w-xl leading-relaxed text-lg mt-2">
            {data.about_short}
          </p>

          {/* Call to Action Buttons */}
          <div className="content mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link
              href={data.socialLinks.sendMail}
               target="_blank" rel="noopener noreferrer"
              className="bg-black text-white py-3 px-8 rounded-full text-base font-medium hover:bg-gray-800 transition-all shadow-md"
            >
              Get in touch
            </Link>
            <Link
              href={data.resume}
               target="_blank" rel="noopener noreferrer"
              className="border border-black text-black py-3 px-8 rounded-full text-base font-medium hover:bg-gray-200 transition-all shadow-md"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <Link href={data.socialLinks.github} target="_blank">
            <FaGithub className="text-gray-700 hover:text-black text-2xl transition-all" />
          </Link>
          <Link href={data.socialLinks.linkedin} target="_blank">
            <FaLinkedin className="text-gray-700 hover:text-blue-600 text-2xl transition-all" />
          </Link>
          <Link href={data.socialLinks.leetcode} target="_blank">
            <SiLeetcode className="text-gray-700 hover:text-blue-600 text-2xl transition-all" />
          </Link>
          <div onClick={CopyEmailClick} target="_blank">
            <SiGmail className="text-gray-700 hover:text-blue-400 text-2xl transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
