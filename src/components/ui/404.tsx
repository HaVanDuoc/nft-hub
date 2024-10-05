"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiIconify } from "react-icons/si";

export default function Page404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <motion.h1
        className="max-h-[400px] flex items-center justify-center lg:text-[400px] md:text[300px] text-[200px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-900 to-orange-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        404
      </motion.h1>

      <motion.p
        className="lg:text-[40px] md:text-[32px] text-[28px] font-bold mt-1 text-black mb-[60px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {`This Page Doesn't Exist`}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Link href={"/"}>
          <Button
            className={` bg-secondary w-min rounded-full text-white font-bold hover:bg-black transition-all lg:text-lg text-base py-5 px-9 lg:h-[60px]`}
            size="lg"
          >
            <SiIconify name="" className="font-bold" width={20} />
            Back To Homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
