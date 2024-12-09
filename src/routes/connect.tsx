import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Connect() {
  return (
    <main class="text-center mx-auto text-gray-700 ">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Connect
      </h1>
      <br />
      <p>
        <a href="mailto:example@example.com">Tap to Send me an email</a>
      </p>
      <p>
        <a href="https://www.twitter.com/yourprofile" target="_blank">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
          LinkedIn
        </a>
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>Connect Page</span>
      </p>
    </main>
  );
}
