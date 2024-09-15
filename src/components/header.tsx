import { Grid } from "@mui/joy";
import Button from "@mui/joy/Button";
import Link from "next/link";

export default function Header() {
  return (
    <Grid className="w-full h-[5rem] md:h-14 lg:h-16 flex justify-between items-center px-5 md:px-16 lg:px-16 shadow-md">
      <Grid className=" text-nowrap font-bold">
        <Link href="/#">Apna College</Link>
      </Grid>
      <Grid className="gap-5 md:gap-8 lg:gap-8 flex">
        <Button variant="outlined" className="text-primary">
          Log in
        </Button>
        <Button variant="outlined" className="text-primary">
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
}
