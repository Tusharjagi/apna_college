import { Checkbox, Grid } from "@mui/joy";
import Link from "next/link";

type SubListItem = {
  subTitle: string;
  id: string;
  checked: boolean;
};

type SubListProps = {
  list: {
    subList: SubListItem[] | string;
    title: string;
  };
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

export default function SubList({ list, handleOnChange }: SubListProps) {
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
    <Grid className="p-2 shadow-md rounded-md">
      {list.subList.map((item, index) => {
        return (
          <Grid
            key={index}
            className="ml-2 mb-1 mg:flex lg:flex md:gap-8 lg:gap-8"
          >
            <Grid>
              <Link href={item.id}>
                <span className="font-semibold">{getAlphabet(index)}.</span>{" "}
                {item.subTitle}
              </Link>
            </Grid>
            <Grid>
              <Checkbox
                variant="solid"
                size="md"
                color="success"
                onChange={(event) => handleOnChange(event, item.id)}
                checked={item.checked}
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
