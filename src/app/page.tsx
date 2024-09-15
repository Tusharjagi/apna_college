import List from "@/components/list";
import { Grid, Typography } from "@mui/joy";

export default function Home() {
  return (
    <Grid className="mx-6 my-6 md:mx-16 lg:mx-16 md:my-12 lg:my-12">
      <Typography
        level="h1"
        className="hover:underline hover:text-primary transition-all duration-300 ease-in-out"
      >
        Data Structure & Algorithms
      </Typography>
      <List />
    </Grid>
  );
}
