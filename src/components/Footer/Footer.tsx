import { IoIosFitness } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-[#405D72] text-white rounded-lg border-[#405D72
        ] dark:bg-gray-900 m-4"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center flex-col">
            <IoIosFitness className="size-10 text-white" />
            <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">
              Fitless Plus
            </span>
          </Link>
          <ul className="flex flex-wrap items-center space-x-4 mb-6 md:mt-0 mt-4 md:justify-end justify-center text-sm font-medium sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaFacebookF className="size-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <BsTwitterX className="size-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaDiscord className="size-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaLinkedinIn className="size-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaYoutube className="size-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <FaTelegramPlane className="size-6" />
              </a>
            </li>
          </ul>
        </div>
        <hr
          className="my-6 border-[#405D72
        ] sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <span className="block text-sm sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Fitness Plus™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
