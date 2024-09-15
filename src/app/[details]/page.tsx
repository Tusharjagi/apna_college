import Detail from "@/components/details/index";

type DetailData = {
  leetCodeUrl: string;
  codeForceUrl: string;
  ArticleUrl: string;
  Level: string;
  youTubeUrl: string;
};

type Params = {
  details: keyof typeof details;
};

const details: Record<string, DetailData> = {
  "what-is-data-and-classifications": {
    leetCodeUrl: "",
    codeForceUrl: "",
    ArticleUrl: "",
    Level: "easy",
    youTubeUrl: "",
  },
};

type Props = {
  params: Params;
};

export default function DetailPage({ params }: Props) {
  const selectedDetail = details[params.details];
  return <Detail detail={selectedDetail} />;
}
