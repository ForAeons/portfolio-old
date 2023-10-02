import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeSlideInVariants } from "@/lib/variants";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

export const BlogCard: React.FC<{ item: MediumFeedItem }> = ({ item }) => {
  const parser = new DOMParser();
  const apiContent = parser.parseFromString(item.content, "text/html");
  const paragraphs = apiContent.getElementsByTagName("p");
  const firstParagraph = paragraphs[0].textContent;
  return (
    <motion.div
      className="max-w-2xl w-full mb-24"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div variants={fadeSlideInVariants}>
        <Card>
          <CardHeader>
            <a href={item.guid}>
              <CardTitle className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {item.title}
              </CardTitle>

              <CardDescription className="text-sm font-medium leading-none ml-auto">
                Published {timeAgo.format(new Date(item.pubDate).getTime())}
              </CardDescription>
            </a>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <img src={item.thumbnail} alt={item.title} className="w-full" />

            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {firstParagraph}...
            </p>
          </CardContent>
          <CardFooter className="flex flex-row flex-wrap gap-3">
            {item.categories.map((category) => (
              <span className="text-sm text-muted-foreground" key={category}>
                {category}
              </span>
            ))}

            <a href={item.guid} className="ml-auto">
              <OpenInNewWindowIcon className="w-4 h-4  text-gray-500" />
            </a>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
