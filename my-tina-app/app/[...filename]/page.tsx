import ClientPage from "./client-page";
import client from "tina/__generated__/client";
import { notFound } from "next/navigation"; // For Next.js 13+

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  try {
    const filename = params.filename.join("/");

    // Ignore known browser tool probes
    const badRequest =
      filename.includes(".well-known") || filename.includes("appspecific");

    if (badRequest) {
      notFound(); // return 404 for known non-page probes
    }

    let data;

    // Try loading .mdx first
    try {
      data = await client.queries.page({
        relativePath: `${filename}.mdx`,
      });
    } catch {
      // Fallback to .md if .mdx doesn't exist
      data = await client.queries.page({
        relativePath: `${filename}.md`,
      });
    }

    return <ClientPage {...data} />;
  } catch (error) {
    console.error("Failed to fetch page:", error);
    notFound(); // fallback to 404 if both fail
  }
}

