import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/constants";

export const Cvwo: React.FC = () => {
  const [value, setValue] = React.useState(["cvwo"]);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="cvwo">
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left">
                <CardTitle>{experience.cvwo.title}</CardTitle>
                <CardDescription>{experience.cvwo.description}</CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <Separator orientation="horizontal" />

                  {experience.cvwo.items.map((item, index) => (
                    <div key={index}>
                      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                        {item.title}
                      </h4>

                      <ul className="ml-4">
                        {item.paragraphs.map((item, index) => (
                          <li key={index} className="list-disc">
                            <p className="inline">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <Separator orientation="horizontal" />
                </div>
              </CardContent>
              <CardFooter>
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  {experience.cvwo.time}
                </h4>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default Cvwo;