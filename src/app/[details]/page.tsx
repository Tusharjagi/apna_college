import Detail from "@/components/details/index";

type DetailData = {
  leetCodeUrl: string;
  codeForceUrl: string;
  article: {
    description: string;
    articleUrl: string;
  };
  Level: string;
  youTubeUrl: string;
};

type Params = {
  details: keyof typeof details;
};

const details: Record<string, DetailData> = {
  "what-is-data-and-classifications": {
    leetCodeUrl: "l",
    codeForceUrl: "c",
    article: {
      description:
        "fdsfdsafkjdsfkjdsahkfl   jsaldflkjdsaklfjdsajffdsf  dsafkjdsfkjdsahkfljsaldflkj dsaklfjdsajffdsfds afkjdsfkjdsahkfljsa ldflkjdsaklfjdsajffdsfdsafk jdsfkjdsahkfljsaldflkjdsak  lfjdsajffdsfdsafkjdsfkjd sahkfljsal dflkjdsaklfjdsajffds fdsafkjdsfkjdsahkfljsaldflkjd   saklfjdsajffdsfdsafkjdsfkjdsahkfljs aldflkjdsaklfjdsajffdsfd  safkjdsfkjdsahkfljsaldflkjdsakl fjdsajffdsfdsafkjdsf kjdsahkfljsaldf  lkjdsaklfjdsajff dsfdsafkjdsfkjdsah kfljsaldflkjdsaklfjdsajf fdsfdsafkjdsfkjdsa hkflj saldflkj dsaklfjdsajffdsf dsafkjdsfkj dsahkfljs aldflkjdsaklfjdsaj ffdsfdsafkj dsfkjdsahkfljsaldflkjdsaklf jdsajffdsfdsafk jdsfkjdsahkfljs aldflkjd saklfjdsajffds fdsafkjdsfk jdsahkflj saldflkjd saklfjdsajf",
      articleUrl: "fdsfds",
    },
    Level: "easy",
    youTubeUrl: "https://www.youtube.com/embed/9IZYqostl2M?si=7lCmSa2t0C1PGGnY",
  },
};

type Props = {
  params: Params;
};

export default function DetailPage({ params }: Props) {
  const selectedDetail = details[params.details];
  return <Detail detail={selectedDetail} />;
}
