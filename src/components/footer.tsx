import { Grid, Typography, Link } from "@mui/joy";

export default function Footer() {
  return (
    <Grid
      container
      className="w-full py-6 px-5 md:px-16"
      spacing={2}
      justifyContent="space-between"
    >
      <Grid xs={12} md={4}>
        <Typography className="font-bold">Apna College</Typography>
        <Typography className="text-gray-400 mt-2 mr-20">
          Empowering students to learn and grow. Join us for comprehensive
          courses and skill development.
        </Typography>
      </Grid>

      <Grid xs={12} md={4}>
        <Typography className="font-bold">Quick Links</Typography>
        <Grid container direction="column" className="mt-2">
          <Link href="#" className="text-gray-400 hover:text-black">
            About Us
          </Link>
          <Link href="#" className="text-gray-400 hover:text-black">
            Courses
          </Link>
          <Link href="#" className="text-gray-400 hover:text-black">
            Contact Us
          </Link>
        </Grid>
      </Grid>

      <Grid xs={12} md={4}>
        <Typography className="font-bold">Contact Us</Typography>
        <Typography className="text-gray-400 mt-2">
          Email: info@apnacollege.com
        </Typography>
        <Typography className="text-gray-400">
          Phone: +91 123-456-7890
        </Typography>
        <Typography className="text-gray-400">
          Address: 123 College St, New Delhi, India
        </Typography>
      </Grid>
    </Grid>
  );
}
