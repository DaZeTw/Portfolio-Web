import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ruxh22j3",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skT6RPFZAifpFie1LGiKhc5lPF9hjAwlZ8Rhjh7S2TnyJ3FtCOFDor5OtVzMdafDe89NyAd80kJKyFLz45CIE5ea72OcPic68sv1gkDFBbnFHUtMnQmi1LB6u0pr9eHlxIRyjoKKRWIAzyQFyrA8EH4rIDvrj9WzuW81iqxbRWr1wTQGGBqS",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
