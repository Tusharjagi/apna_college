import { Grid } from "@mui/joy";
import Link from "next/link";

type SubListItem = {
  subTitle: string;
  id: string;
};

type SubListProps = {
  list: {
    subList: SubListItem[] | string;
    title: string;
  };
};

export default function SubList({ list }: SubListProps) {
  if (typeof list.subList === "string") {
    return <Grid className="p-2">{list.subList}</Grid>;
  }

  const getAlphabet = (index: number) => {
    if (index > 25) {
      return "*";
    }
    return String.fromCharCode(65 + index).toLowerCase();
  };

  return (
    <Grid className="p-2">
      {list.subList.map((item, index) => {
        return (
          <Grid key={index} className="ml-2 mb-1">
            <Link href={item.id}>
              <span className="font-semibold">{getAlphabet(index)}.</span>{" "}
              {item.subTitle}
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
