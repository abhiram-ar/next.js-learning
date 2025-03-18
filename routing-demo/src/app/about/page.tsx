import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "I am free about",
  },
};

export default function About() {
  return <h1>about page</h1>;
}
