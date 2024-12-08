import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-sky-800">
      <div class="container mx-auto flex items-center justify-between p-3 text-gray-200">
        {/* Left section: Image and Name */}
        <div class="flex items-center space-x-3">
          {/* Image */}
          <img
            src="/public/img/IMG.jpg"
            alt="Ahmad olukotun"
            class="w-10 h-10 rounded-md border border-gray-300"
          />
          {/* Name */}
          <span class="text-lg font-bold">AHMAD OLU</span>
        </div>

        {/* Right section: Navigation links */}
        <ul class="flex space-x-6">
          <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
            <a href="/">Home</a>
          </li>
          <li class={`border-b-2 ${active("/story")} mx-1.5 sm:mx-6`}>
            <a href="/story">Story</a>
          </li>
          <li class={`border-b-2 ${active("/album")} mx-1.5 sm:mx-6`}>
            <a href="/album">Album</a>
          </li>
          <li class={`border-b-2 ${active("/connect")} mx-1.5 sm:mx-6`}>
            <a href="/connect">Connect</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
