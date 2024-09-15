import { Button, Grid, Typography } from "@mui/joy";
import CustomChip from "./custom-chip";
import Link from "next/link";
import YouTubeEmbed from "./video";

type DetailProps = {
  detail: {
    leetCodeUrl: string;
    codeForceUrl: string;
    article: {
      description: string;
      articleUrl: string;
    };
    Level: string;
    youTubeUrl: string;
  };
};

export default function Detail({ detail }: DetailProps) {
  return (
    <Grid className="m-5 md:mx-16 md:my-10 lg:mx-16 lg:my-10">
      <Grid className="flex justify-center items-center">
        <Grid>
          Level : <CustomChip text={detail.Level} />
        </Grid>
      </Grid>

      {detail.article.description && (
        <Grid className="block my-5">
          <Typography className="font-semibold hover:text-primary">
            Article:
          </Typography>
          <Grid>{detail.article.description}</Grid>
          <Grid className="justify-end items-end flex">
            {detail.article.articleUrl && (
              <Link
                href={detail.article.articleUrl}
                target="_blank"
                className="hover:text-primary hover:underline"
              >
                more...
              </Link>
            )}
          </Grid>
        </Grid>
      )}

      {detail.youTubeUrl && (
        <Grid className="Grid place-content-center my-2">
          <Grid className=" font-semibold pb-2">Reference the topic:</Grid>
          <Grid className="w-full">
            <YouTubeEmbed url={detail.youTubeUrl} />
          </Grid>
        </Grid>
      )}

      <Grid className="grid mt-10" id="links">
        {detail.leetCodeUrl && (
          <Link
            href={detail.leetCodeUrl}
            target="_blank"
            className=" hover:underline hover:text-primary"
          >
            Leet code
          </Link>
        )}
        {detail.codeForceUrl && (
          <Link
            href={detail.codeForceUrl}
            target="_blank"
            className=" hover:underline hover:text-primary"
          >
            Code Force
          </Link>
        )}
      </Grid>
      <Grid className="grid place-content-center m-10">
        <Grid>
          <Button color="success" variant="solid">
            Mark it Done
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
