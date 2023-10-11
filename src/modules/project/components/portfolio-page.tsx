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
import { project, GITHUB_FORAEONS_PORTFOLIO_REPO } from "@/constants";
import { GithubIcon } from "@/modules";

const iconSize = 20;

export const PortfolioPage: React.FC = () => {
  const [value, setValue] = React.useState(["portfolio-page"]);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="portfolio-page">
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left w-full">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  height={150}
                  viewBox="0 0 500 500"
                >
                  <path
                    d="M0 0 C2.84204836 1.55814055 4.711158 3.50395262 6.78125 5.9765625 C7.52375 6.8428125 8.26625 7.7090625 9.03125 8.6015625 C13.11969302 16.48641689 11.9093801 24.66878891 9.42480469 32.86547852 C9.15019661 33.82885824 8.87558853 34.79223797 8.592659 35.78481102 C7.6473114 39.08461701 6.67479969 42.37582663 5.703125 45.66796875 C4.99361872 48.12572309 4.28608208 50.58404667 3.58026123 53.04286194 C2.16839837 57.95505856 0.74849291 62.86483579 -0.67909789 67.77248448 C-4.11788762 79.59508932 -7.50191654 91.43312258 -10.88085938 103.27294922 C-12.08890362 107.50447274 -13.29715498 111.73593711 -14.50549316 115.96737671 C-14.81223764 117.04160515 -15.11898211 118.11583359 -15.43502188 119.22261441 C-18.95246491 131.53810712 -22.48165894 143.85022825 -26.01171875 156.16210938 C-26.33723001 157.29745833 -26.66274126 158.43280729 -26.99811649 159.60256076 C-28.3220914 164.22040759 -29.64610938 168.83824207 -30.97021818 173.45605052 C-34.63899249 186.25092819 -38.30585845 199.04635265 -41.97265625 211.84179688 C-43.28215522 216.4113443 -44.59166194 220.98088951 -45.90118408 225.5504303 C-46.22005813 226.6631361 -46.53893218 227.7758419 -46.86746907 228.92226607 C-48.71074219 235.35415872 -50.55433191 241.78596047 -52.39838433 248.21762973 C-52.9798115 250.24567728 -53.56114087 252.27375286 -54.14236999 254.30185717 C-55.54276222 259.18808961 -56.94445846 264.07393886 -58.34925461 268.95890713 C-60.84365504 277.63942958 -63.32319586 286.32331653 -65.74699283 295.02385825 C-66.83732612 298.93600611 -67.93498172 302.84608422 -69.03293657 306.75609887 C-69.54696268 308.59541686 -70.05715039 310.43581255 -70.56319761 312.27734172 C-71.25871769 314.80802409 -71.96712995 317.33477326 -72.67828369 319.86109924 C-72.87716139 320.59892155 -73.07603909 321.33674386 -73.28094339 322.09692442 C-75.39063351 329.49224179 -79.06757161 334.45732939 -85.21875 338.9765625 C-91.31319175 341.84276035 -97.54808885 342.13954425 -103.98046875 340.1015625 C-109.85445569 337.43236664 -113.01638242 334.55488021 -116.21875 328.9765625 C-120.07647979 317.40337312 -115.49970876 305.15811284 -112.23120117 293.99047852 C-111.69226488 292.10211391 -111.15484286 290.21331659 -110.61880493 288.3241272 C-109.1592502 283.19648417 -107.67858323 278.07515506 -106.19408584 272.9546864 C-104.61275369 267.48628334 -103.05123197 262.01222559 -101.48738098 256.5388031 C-98.49464311 246.07556075 -95.48438933 235.61744233 -92.46780711 225.16105264 C-89.14464251 213.63901323 -85.84022209 202.11163288 -82.53789878 190.583606 C-78.32011268 175.86035309 -74.09811696 161.13834012 -69.85617065 146.42202759 C-69.53412261 145.30467543 -69.21207457 144.18732327 -68.8802675 143.03611195 C-68.55846974 141.91964154 -68.23667197 140.80317112 -67.90512276 139.65286827 C-67.25623824 137.40155669 -66.60736267 135.15024253 -65.95849609 132.89892578 C-65.63864235 131.78922904 -65.3187886 130.6795323 -64.98924232 129.53620839 C-60.41555258 113.66346322 -55.88331297 97.77937711 -51.37978065 81.88659155 C-49.51101932 75.29649524 -47.6358277 68.70822527 -45.76058584 62.1199705 C-43.99844667 55.92596562 -42.24705749 49.72905383 -40.50370455 43.529737 C-39.43432169 39.73705668 -38.35457319 35.9473863 -37.27189994 32.15848088 C-36.77635473 30.41611236 -36.28515165 28.67250183 -35.798733 26.92756343 C-30.40242731 7.58555886 -30.40242731 7.58555886 -24.0859375 2.13671875 C-23.42851562 1.77449219 -22.77109375 1.41226563 -22.09375 1.0390625 C-21.43117188 0.65878906 -20.76859375 0.27851562 -20.0859375 -0.11328125 C-13.57292703 -3.28803322 -6.56642256 -2.78812387 0 0 Z "
                    fill="#06d6a0"
                    transform="translate(309.21875,86.0234375)"
                  />
                  <path
                    d="M0 0 C1.61648438 -0.04253906 1.61648438 -0.04253906 3.265625 -0.0859375 C12.20510818 1.09663987 17.68568843 6.73136574 23.76464844 12.87207031 C24.62745926 13.72787186 25.49027008 14.5836734 26.37922668 15.46540833 C28.72749474 17.79915567 31.06649191 20.14146059 33.40111446 22.48881245 C35.85557415 24.95345854 38.31984649 27.40826323 40.78253174 29.86468506 C44.91513626 33.99002952 49.03927493 38.12369635 53.15869141 42.26220703 C57.90916101 47.03444219 62.67386833 51.79209697 67.44622588 56.54243588 C71.55658354 60.63459265 75.65903371 64.73455425 79.75507569 68.84104037 C82.19567164 71.28784553 84.63882557 73.73193208 87.08916473 76.16898346 C89.82198169 78.88801111 92.53813613 81.62332301 95.25292969 84.36035156 C96.05819595 85.1575209 96.86346222 85.95469025 97.69313049 86.77601624 C102.88614931 92.04789051 107.00411294 96.98742907 108.28125 104.5 C108.2709375 105.44875 108.260625 106.3975 108.25 107.375 C108.26546875 108.798125 108.26546875 108.798125 108.28125 110.25 C106.79825648 118.97349131 101.30345559 124.39996036 95.25292969 130.38964844 C94.39712814 131.25245926 93.5413266 132.11527008 92.65959167 133.00422668 C90.32584433 135.35249474 87.98353941 137.69149191 85.63618755 140.02611446 C83.17154146 142.48057415 80.71673677 144.94484649 78.26031494 147.40753174 C74.13497048 151.54013626 70.00130365 155.66427493 65.86279297 159.78369141 C61.09055781 164.53416101 56.33290303 169.29886833 51.58256412 174.07122588 C47.49040735 178.18158354 43.39044575 182.28403371 39.28395963 186.38007569 C36.83715447 188.82067164 34.39306792 191.26382557 31.95601654 193.71416473 C29.23698889 196.44698169 26.50167699 199.16313613 23.76464844 201.87792969 C22.56889442 203.08582909 22.56889442 203.08582909 21.34898376 204.31813049 C15.16949241 210.40519047 9.32157847 214.9487272 0.25 214.9375 C-6.76545738 214.70202747 -10.83165077 212.72322925 -15.7734375 207.8828125 C-19.80711013 203.38281934 -21.53822769 199.05846679 -21.625 193.0625 C-21.65335937 192.17949219 -21.68171875 191.29648437 -21.7109375 190.38671875 C-20.51714363 182.58659098 -15.7461109 177.29594655 -10.27832031 171.94921875 C-9.5852327 171.25554703 -8.89214508 170.56187531 -8.17805481 169.84718323 C-5.90410429 167.57600058 -3.6163566 165.31928582 -1.328125 163.0625 C0.25886877 161.48297317 1.84497679 159.90255594 3.43023682 158.32128906 C7.59055145 154.17619479 11.76274024 150.04325763 15.93756104 145.91278076 C20.20132232 141.6900494 24.45368251 137.45587091 28.70703125 133.22265625 C37.04360105 124.92889388 45.3927666 116.64793661 53.75 108.375 C52.45538427 105.5229229 51.09884535 103.4795494 48.87220764 101.28361511 C48.28480301 100.69924179 47.69739838 100.11486847 47.0921936 99.51278687 C46.44954559 98.88361359 45.80689758 98.25444031 45.14477539 97.60620117 C44.46655228 96.93411118 43.78832916 96.26202118 43.08955383 95.56956482 C41.61734658 94.11165609 40.14291119 92.65599469 38.66652107 91.20232201 C36.32876377 88.89935745 33.99817648 86.58936078 31.66954041 84.2771759 C25.04795109 77.7044796 18.41536449 71.14296613 11.77368164 64.59057617 C7.71042908 60.58096269 3.6570304 56.56160292 -0.39050484 52.53612709 C-1.93327195 51.00575911 -3.47982167 49.47919447 -5.03022575 47.95656395 C-7.20118789 45.82414267 -9.35944739 43.67958203 -11.51538086 41.53198242 C-12.15600464 40.90888184 -12.79662842 40.28578125 -13.45666504 39.64379883 C-18.5879904 34.48979696 -21.67631761 29.46324926 -21.6875 21.9375 C-21.48185622 15.68250169 -19.92607245 11.16283418 -15.56640625 6.62109375 C-10.55667951 2.15004731 -6.84863764 0.081145 0 0 Z "
                    fill="currentColor"
                    transform="translate(383.25,148.625)"
                  />
                  <path
                    d="M0 0 C6.0307615 3.5293661 10.31985203 8.42294056 12.5625 15.08203125 C12.8984375 17.6953125 12.8984375 17.6953125 12.9375 20.39453125 C12.96585938 21.27753906 12.99421875 22.16054687 13.0234375 23.0703125 C11.82964363 30.87044027 7.0586109 36.1610847 1.59082031 41.5078125 C0.8977327 42.20148422 0.20464508 42.89515594 -0.50944519 43.60984802 C-2.78339571 45.88103067 -5.0711434 48.13774543 -7.359375 50.39453125 C-8.94636877 51.97405808 -10.53247679 53.55447531 -12.11773682 55.13574219 C-16.27805145 59.28083646 -20.45024024 63.41377362 -24.62506104 67.54425049 C-28.88882232 71.76698185 -33.14118251 76.00116034 -37.39453125 80.234375 C-45.73110105 88.52813737 -54.0802666 96.80909464 -62.4375 105.08203125 C-61.14288427 107.93410835 -59.78634535 109.97748185 -57.55970764 112.17341614 C-56.67860069 113.04997612 -56.67860069 113.04997612 -55.7796936 113.94424438 C-55.13704559 114.57341766 -54.49439758 115.20259094 -53.83227539 115.85083008 C-53.15405228 116.52292007 -52.47582916 117.19501007 -51.77705383 117.88746643 C-50.30484658 119.34537516 -48.83041119 120.80103656 -47.35402107 122.25470924 C-45.01626377 124.5576738 -42.68567648 126.86767047 -40.35704041 129.17985535 C-33.73545109 135.75255165 -27.10286449 142.31406512 -20.46118164 148.86645508 C-16.39792908 152.87606856 -12.3445304 156.89542833 -8.29699516 160.92090416 C-6.75422805 162.45127214 -5.20767833 163.97783678 -3.65727425 165.5004673 C-1.48631211 167.63288858 0.67194739 169.77744922 2.82788086 171.92504883 C3.46850464 172.54814941 4.10912842 173.17125 4.76916504 173.81323242 C9.9004904 178.96723429 12.98881761 183.99378199 13 191.51953125 C12.79435622 197.77452956 11.23857245 202.29419707 6.87890625 206.8359375 C1.86917951 211.30698394 -1.83886236 213.37588625 -8.6875 213.45703125 C-9.76515625 213.48539063 -10.8428125 213.51375 -11.953125 213.54296875 C-20.89260818 212.36039138 -26.37318843 206.72566551 -32.45214844 200.58496094 C-33.31495926 199.72915939 -34.17777008 198.87335785 -35.06672668 197.99162292 C-37.41499474 195.65787558 -39.75399191 193.31557066 -42.08861446 190.9682188 C-44.54307415 188.50357271 -47.00734649 186.04876802 -49.47003174 183.59234619 C-53.60263626 179.46700173 -57.72677493 175.3333349 -61.84619141 171.19482422 C-66.59666101 166.42258906 -71.36136833 161.66493428 -76.13372588 156.91459537 C-80.24408354 152.8224386 -84.34653371 148.722477 -88.44257569 144.61599088 C-90.88317164 142.16918572 -93.32632557 139.72509917 -95.77666473 137.28804779 C-98.50948169 134.56902014 -101.22563613 131.83370824 -103.94042969 129.09667969 C-104.74569595 128.29951035 -105.55096222 127.502341 -106.38063049 126.68101501 C-111.57364931 121.40914074 -115.69161294 116.46960218 -116.96875 108.95703125 C-116.9584375 108.00828125 -116.948125 107.05953125 -116.9375 106.08203125 C-116.9478125 105.13328125 -116.958125 104.18453125 -116.96875 103.20703125 C-115.48575648 94.48353994 -109.99095559 89.05707089 -103.94042969 83.06738281 C-103.08462814 82.20457199 -102.2288266 81.34176117 -101.34709167 80.45280457 C-99.01334433 78.10453651 -96.67103941 75.76553934 -94.32368755 73.43091679 C-91.85904146 70.9764571 -89.40423677 68.51218476 -86.94781494 66.04949951 C-82.82247048 61.91689499 -78.68880365 57.79275632 -74.55029297 53.67333984 C-69.77805781 48.92287024 -65.02040303 44.15816292 -60.27006412 39.38580537 C-56.17790735 35.27544771 -52.07794575 31.17299754 -47.97145963 27.07695556 C-45.52465447 24.63635961 -43.08056792 22.19320568 -40.64351654 19.74286652 C-37.92448889 17.01004956 -35.18917699 14.29389512 -32.45214844 11.57910156 C-31.6549791 10.7738353 -30.85780975 9.96856903 -30.03648376 9.13890076 C-21.68921427 0.91648775 -11.92182905 -4.48979139 0 0 Z "
                    fill="currentColor"
                    transform="translate(137.4375,149.91796875)"
                  />
                </svg>

                <CardTitle>{project.portfolio.title}</CardTitle>

                <CardDescription>
                  {project.portfolio.description}
                </CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent className="flex flex-col gap-6">
                <Separator orientation="horizontal" />
                <p className="leading-7">{project.portfolio.p1}</p>
                <p className="leading-7">{project.portfolio.p2}</p>
                <Separator orientation="horizontal" />{" "}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  {project.portfolio.time}
                </h4>

                <a
                  href={GITHUB_FORAEONS_PORTFOLIO_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <p className="text-sm text-muted-foreground">Source code</p>
                  <GithubIcon size={iconSize} />
                </a>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default PortfolioPage;
